<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { assetUrl } from '../config/assets'

const loader = ref<HTMLElement | null>(null)
let context: gsap.Context | undefined
let media: gsap.MatchMedia | undefined

onMounted(() => {
  context = gsap.context(() => {
    media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline()
      timeline
        .from('.brand-loader__mark', { autoAlpha: 0, scale: 0.88, duration: 0.55, ease: 'power2.out' })
        .to('.brand-loader__line', { scaleX: 1, duration: 0.55, ease: 'power2.inOut' }, '-=0.2')
        .to(loader.value, { autoAlpha: 0, duration: 0.55, ease: 'power2.inOut', delay: 0.12 })
        .set(loader.value, { display: 'none' })
    })
    media.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(loader.value, { display: 'none' })
    })
  }, loader.value ?? undefined)
})

onBeforeUnmount(() => {
  media?.revert()
  context?.revert()
})
</script>

<template>
  <div ref="loader" class="brand-loader" aria-hidden="true">
    <img class="brand-loader__mark" :src="assetUrl('/brand/eventosa-monogram-olive.png')" alt="" />
    <span class="brand-loader__line"></span>
  </div>
</template>
