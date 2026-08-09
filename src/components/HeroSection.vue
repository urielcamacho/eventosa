<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImagePlaceholder from './ImagePlaceholder.vue'
import WhatsAppButton from './WhatsAppButton.vue'

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
          gsap.set('[data-hero-reveal], .hero__media', { clearProps: 'all' })
          return
        }

        const timeline = gsap.timeline({ delay: 0.85, defaults: { ease: 'power3.out' } })
        timeline
          .from('.hero__media', { clipPath: 'inset(0 0 100% 0)', duration: 1.25 })
          .from('.hero__media .image-placeholder__wash', { scale: 1.08, duration: 1.8 }, '<')
          .from('[data-hero-reveal]', { autoAlpha: 0, yPercent: 110, duration: 0.9, stagger: 0.09 }, '-=0.65')

        if (desktop) {
          gsap.to('.hero__media .image-placeholder__wash', {
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
    <ImagePlaceholder
      class="hero__media"
      label="Hero"
      dimensions="2400 × 1600 px desktop / 1080 × 1440 px móvil"
      description="Celebración con montaje elegante, flores, mesas y mobiliario Eventosa."
      ratio="3/2"
      tone="olive"
      eager
    />
    <div class="hero__shade" aria-hidden="true"></div>
    <div class="hero__content page-shell">
      <div class="hero__eyebrow-mask">
        <p data-hero-reveal class="eyebrow eyebrow--light">Rentals · Design · Flowers — Since 2005</p>
      </div>
      <h1 id="hero-title" class="hero__title">
        <span class="hero__line-mask"><span data-hero-reveal>Una celebración</span></span>
        <span class="hero__line-mask"><span data-hero-reveal>con <em>tu estilo,</em></span></span>
        <span class="hero__line-mask"><span data-hero-reveal>cuidada en cada detalle.</span></span>
      </h1>
      <div class="hero__bottom">
        <div class="hero__text-mask">
          <p data-hero-reveal>Diseño, flores, mobiliario y montaje para dar forma a celebraciones con personalidad.</p>
        </div>
        <div class="hero__cta-mask">
          <div data-hero-reveal>
            <WhatsAppButton label="Cuéntanos sobre tu evento" variant="light" />
          </div>
        </div>
      </div>
      <div data-hero-reveal class="hero__location">Puebla, México</div>
      <div data-hero-reveal class="hero__scroll" aria-hidden="true">
        <span>Descubre</span><i></i>
      </div>
    </div>
  </section>
</template>
