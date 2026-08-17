import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Mesh, Program } from 'ogl'
import { webglScenes, type WebGLVariant } from '../config/webgl'
import { fragmentShaders, vertexShader } from '../webgl/shaders'

gsap.registerPlugin(ScrollTrigger)

export type WebGLState = 'idle' | 'loading' | 'ready' | 'fallback'

interface SceneUniform<T> {
  value: T
}

interface SceneUniforms {
  uTime: SceneUniform<number>
  uProgress: SceneUniform<number>
  uIntensity: SceneUniform<number>
  uResolution: SceneUniform<Float32Array>
  uPointer: SceneUniform<Float32Array>
}

export function useOglScene(
  host: Ref<HTMLElement | null>,
  canvas: Ref<HTMLCanvasElement | null>,
  variant: WebGLVariant,
) {
  const state = ref<WebGLState>('idle')
  let context: gsap.Context | undefined
  let media: gsap.MatchMedia | undefined

  onMounted(() => {
    context = gsap.context(() => {
      media = gsap.matchMedia()
      media.add(
        {
          animate: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 768px)',
        },
        (matchContext) => {
          const { animate, desktop } = matchContext.conditions as {
            animate: boolean
            desktop: boolean
          }

          if (!animate || !window.WebGLRenderingContext) {
            state.value = 'fallback'
            return
          }

          const scrollState = { progress: 0 }
          let active = true
          let cleanupScene: (() => void) | undefined

          gsap.to(scrollState, {
            progress: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: host.value,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          })

          const boot = async () => {
            state.value = 'loading'

            try {
              const cleanup = await createScene(host, canvas, variant, scrollState, Boolean(desktop), () => {
                if (!active) return
                cleanupScene?.()
                cleanupScene = undefined
                void boot()
              })

              if (!active) {
                cleanup()
                return
              }

              cleanupScene = cleanup
              state.value = 'ready'
            } catch {
              state.value = 'fallback'
            }
          }

          void boot()

          return () => {
            active = false
            cleanupScene?.()
            cleanupScene = undefined
          }
        },
      )
    }, host.value ?? undefined)
  })

  onBeforeUnmount(() => {
    media?.revert()
    context?.revert()
  })

  return { state }
}

async function createScene(
  hostRef: Ref<HTMLElement | null>,
  canvasRef: Ref<HTMLCanvasElement | null>,
  variant: WebGLVariant,
  scrollState: { progress: number },
  desktop: boolean,
  restore: () => void,
) {
  const host = hostRef.value
  const canvas = canvasRef.value

  if (!host || !canvas) throw new Error('WebGL host is unavailable')

  const { Mesh: OglMesh, Program: OglProgram, Renderer, Triangle } = await import('ogl')
  const config = webglScenes[variant]
  const renderer = new Renderer({
    canvas,
    alpha: true,
    antialias: false,
    depth: false,
    dpr: Math.min(window.devicePixelRatio || 1, 1.5),
    powerPreference: 'low-power',
  })
  const gl = renderer.gl
  gl.clearColor(0, 0, 0, 0)

  const geometry = new Triangle(gl)
  const uniforms: SceneUniforms = {
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uIntensity: { value: config.intensity },
    uResolution: { value: new Float32Array([1, 1]) },
    uPointer: { value: new Float32Array([0.5, 0.5]) },
  }

  const program = new OglProgram(gl, {
    vertex: vertexShader,
    fragment: fragmentShaders[variant],
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  }) as Program
  const mesh = new OglMesh(gl, { geometry, program }) as Mesh
  const interactionHost = config.pointer && desktop ? (host.parentElement ?? host) : null
  const pointerTarget = new Float32Array([0.5, 0.5])
  let frameId: number | undefined
  let isIntersecting = false
  let disposed = false

  const resize = () => {
    const bounds = host.getBoundingClientRect()
    const width = Math.max(1, Math.round(bounds.width))
    const height = Math.max(1, Math.round(bounds.height))
    renderer.setSize(width, height)
    uniforms.uResolution.value[0] = width
    uniforms.uResolution.value[1] = height
  }

  const render = (time: number) => {
    frameId = undefined
    if (disposed || !isIntersecting || document.hidden) return

    uniforms.uTime.value = time * 0.001 * config.speed
    uniforms.uProgress.value = scrollState.progress
    uniforms.uPointer.value[0] += (pointerTarget[0] - uniforms.uPointer.value[0]) * 0.045
    uniforms.uPointer.value[1] += (pointerTarget[1] - uniforms.uPointer.value[1]) * 0.045
    renderer.render({ scene: mesh })
    frameId = window.requestAnimationFrame(render)
  }

  const start = () => {
    if (!frameId && isIntersecting && !document.hidden && !disposed) {
      frameId = window.requestAnimationFrame(render)
    }
  }

  const stop = () => {
    if (!frameId) return
    window.cancelAnimationFrame(frameId)
    frameId = undefined
  }

  const handlePointerMove = (event: PointerEvent) => {
    const bounds = host.getBoundingClientRect()
    pointerTarget[0] = (event.clientX - bounds.left) / Math.max(bounds.width, 1)
    pointerTarget[1] = 1 - (event.clientY - bounds.top) / Math.max(bounds.height, 1)
  }

  const resetPointer = () => {
    pointerTarget[0] = 0.5
    pointerTarget[1] = 0.5
  }

  const handleVisibility = () => {
    if (document.hidden) stop()
    else start()
  }

  const handleContextLost = (event: Event) => {
    event.preventDefault()
    stop()
  }

  const handleContextRestored = () => restore()
  const resizeObserver = new ResizeObserver(resize)
  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      isIntersecting = entry?.isIntersecting ?? false
      if (isIntersecting) start()
      else stop()
    },
    { rootMargin: '160px 0px' },
  )

  resizeObserver.observe(host)
  intersectionObserver.observe(host)
  document.addEventListener('visibilitychange', handleVisibility)
  canvas.addEventListener('webglcontextlost', handleContextLost)
  canvas.addEventListener('webglcontextrestored', handleContextRestored)

  if (interactionHost) {
    interactionHost.addEventListener('pointermove', handlePointerMove, { passive: true })
    interactionHost.addEventListener('pointerleave', resetPointer)
  }

  resize()

  return () => {
    disposed = true
    stop()
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    document.removeEventListener('visibilitychange', handleVisibility)
    canvas.removeEventListener('webglcontextlost', handleContextLost)
    canvas.removeEventListener('webglcontextrestored', handleContextRestored)
    interactionHost?.removeEventListener('pointermove', handlePointerMove)
    interactionHost?.removeEventListener('pointerleave', resetPointer)
    geometry.remove()
    program.remove()
  }
}
