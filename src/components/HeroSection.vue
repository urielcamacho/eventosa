<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrandMotion from './BrandMotion.vue'

gsap.registerPlugin(ScrollTrigger)

const root = ref<HTMLElement | null>(null)
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

        if (reduceMotion) {
          gsap.set('[data-hero-reveal], .hero__media img', { clearProps: 'all' })
          return
        }

        const timeline = gsap.timeline({ delay: 0.85, defaults: { ease: 'power3.out' } })
        timeline
          .from('.hero__media', { clipPath: 'inset(0 0 100% 0)', duration: 1.25 })
          .from('.hero__media img', { scale: 1.08, duration: 1.8 }, '<')
          .from('[data-hero-reveal]', { autoAlpha: 0, yPercent: 110, duration: 0.9, stagger: 0.09 }, '-=0.65')

        if (desktop) {
          gsap.to('.hero__media img', {
            yPercent: 7,
            ease: 'none',
            scrollTrigger: {
              trigger: root.value,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
        }
      },
    )
  }, root.value ?? undefined)
})

onBeforeUnmount(() => {
  media?.revert()
  context?.revert()
})
</script>

<template>
  <section id="inicio" ref="root" class="hero" aria-labelledby="hero-title">
    <div class="hero__media">
      <img
        src="/media/wireframes/hero-showroom.jpg"
        alt="Showroom de Eventosa con vajilla, cristalería y materiales para eventos."
        width="1664"
        height="1110"
        fetchpriority="high"
      />
    </div>
    <BrandMotion variant="hero" />
    <div class="hero__shade" aria-hidden="true"></div>
    <div class="hero__content page-shell">
      <h1 id="hero-title" class="hero__title">
        <span class="hero__line-mask"><span data-hero-reveal>Creamos <em>momentos</em> que</span></span>
        <span class="hero__line-mask"><span data-hero-reveal>trascienden lo cotidiano</span></span>
        <span class="hero__line-mask"><span data-hero-reveal>y se convierten en las</span></span>
        <span class="hero__line-mask"><span data-hero-reveal><em>mejores memorias</em></span></span>
      </h1>
      <div data-hero-reveal class="hero__location">Puebla, México</div>
      <div data-hero-reveal class="hero__scroll" aria-hidden="true">
        <span>Descubre</span><i></i>
      </div>
    </div>
  </section>
</template>
