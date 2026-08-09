import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSectionReveal(root: Ref<HTMLElement | null>, selector = '[data-reveal]') {
  let context: gsap.Context | undefined
  let media: gsap.MatchMedia | undefined

  onMounted(() => {
    context = gsap.context(() => {
      media = gsap.matchMedia()
      media.add(
        {
          desktop: '(min-width: 768px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (matchContext) => {
          const { desktop, reduceMotion } = matchContext.conditions as {
            desktop: boolean
            reduceMotion: boolean
          }
          const targets = gsap.utils.toArray<HTMLElement>(selector)

          if (reduceMotion) {
            gsap.set(targets, { clearProps: 'all' })
            return
          }

          gsap.from(targets, {
            autoAlpha: 0,
            y: desktop ? 48 : 26,
            duration: desktop ? 1 : 0.72,
            ease: 'power3.out',
            stagger: desktop ? 0.1 : 0.06,
            scrollTrigger: {
              trigger: root.value,
              start: 'top 82%',
              once: true,
            },
          })
        },
      )
    }, root.value ?? undefined)
  })

  onBeforeUnmount(() => {
    media?.revert()
    context?.revert()
  })
}
