export type WebGLVariant = 'hero' | 'about' | 'cta'

export interface WebGLSceneConfig {
  intensity: number
  speed: number
  pointer: boolean
}

export const webglScenes: Record<WebGLVariant, WebGLSceneConfig> = {
  hero: {
    intensity: 1.08,
    speed: 0.42,
    pointer: true,
  },
  about: {
    intensity: 0.68,
    speed: 0.58,
    pointer: false,
  },
  cta: {
    intensity: 1,
    speed: 0.66,
    pointer: false,
  },
}
