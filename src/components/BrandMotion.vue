<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'

type BrandMotionVariant = 'hero' | 'about' | 'flower' | 'cta'

const props = defineProps<{
  variant: BrandMotionVariant
}>()

const root = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined
let media: gsap.MatchMedia | undefined

onMounted(() => {
  context = gsap.context(() => {
    media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.brand-motion__draw, .brand-motion__spark', { clearProps: 'all' })
    })
    media.add('(prefers-reduced-motion: no-preference)', () => {
      type DrawLine = { getTotalLength: () => number }
      const lines = gsap.utils.toArray('.brand-motion__draw') as DrawLine[]
      const sparks = gsap.utils.toArray('.brand-motion__spark') as object[]

      lines.forEach((line) => {
        const length = (line as unknown as { getTotalLength: () => number }).getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
      })

      if (lines.length > 0) {
        gsap.to(lines as gsap.TweenTarget, {
          strokeDashoffset: 0,
          duration: 1.6,
          stagger: 0.16,
          delay: props.variant === 'hero' ? 1.35 : 0.2,
          ease: 'power2.out',
        })
      }

      sparks.forEach((spark, index) => {
        gsap.fromTo(
          spark as gsap.TweenTarget,
          { opacity: 0.62, scale: 0.9, transformOrigin: 'center' },
          {
            opacity: 0.9,
            scale: 1,
            duration: 2.8 + index * 0.45,
            delay: 0.7 + index * 0.35,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          },
        )
      })

      if (props.variant === 'about') {
        gsap.to(root.value, { y: -5, duration: 5.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      }
    })
  }, root.value ?? undefined)
})

onBeforeUnmount(() => {
  media?.revert()
  context?.revert()
})
</script>

<template>
  <div ref="root" :class="['brand-motion', `brand-motion--${variant}`]" aria-hidden="true">
    <svg v-if="variant === 'hero'" class="brand-motion__svg" viewBox="0 0 760 420" preserveAspectRatio="none">
      <g class="brand-motion__spark" transform="translate(78 58)">
        <path d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
      </g>
      <g class="brand-motion__spark" transform="translate(106 78) scale(.45)">
        <path d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
      </g>
      <g class="brand-motion__spark" transform="translate(520 445) scale(.56)">
        <path d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
        <path transform="translate(20 -18) scale(.42)" d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
      </g>
    </svg>

    <svg v-else-if="variant === 'about'" class="brand-motion__svg" viewBox="0 0 500 340" preserveAspectRatio="none">
      <g class="brand-motion__spark" transform="translate(42 72) scale(.75)">
        <path d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
        <path transform="translate(28 14) scale(.42)" d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
      </g>
      <g class="brand-motion__spark" transform="translate(458 218) scale(.6)">
        <path d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
        <path transform="translate(25 -14) scale(.42)" d="M0 -24 5 -5 24 0 5 5 0 24 -5 5 -24 0 -5 -5Z" />
      </g>
    </svg>

    <svg v-else-if="variant === 'flower'" class="brand-motion__svg" viewBox="0 0 760 200" preserveAspectRatio="none">
      <path class="brand-motion__draw" d="M75 171c145-56 214-66 333-26 91 31 181 6 277-44" />
      <path class="brand-motion__draw" d="M210 127c-5-39-28-66-66-77 1 38 23 64 66 77Z" />
      <path class="brand-motion__draw" d="M427 145c2-36 24-62 62-75-1 36-22 62-62 75Z" />
      <path class="brand-motion__draw" d="M568 102c8-26 26-44 55-53-1 27-20 46-55 53Z" />
    </svg>

    <svg v-else class="brand-motion__svg" viewBox="0 0 620 300">
      <g class="brand-motion__spark" transform="translate(124 78)">
        <path d="M0 -20V20M-20 0H20M-10 -10L10 10M10 -10L-10 10" />
      </g>
      <g class="brand-motion__spark" transform="translate(500 211) scale(.72)">
        <path d="M0 -20V20M-20 0H20M-10 -10L10 10M10 -10L-10 10" />
      </g>
      <path class="brand-motion__draw" d="M86 242c108-69 204-74 295-34 78 34 130 38 189 7" />
      <path class="brand-motion__draw" d="M326 208c17-34 43-53 77-57-12 30-38 49-77 57Z" />
    </svg>
  </div>
</template>
