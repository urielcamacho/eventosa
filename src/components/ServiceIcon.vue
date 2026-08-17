<script setup lang="ts">
import type { ServiceHighlight } from '../data/content'

const props = defineProps<{
  icon: ServiceHighlight['icon']
}>()

const iconSrc: Record<ServiceHighlight['icon'], string> = {
  tent: '/media/wireframes/500x500.svg',
  chair: '/media/wireframes/500x500.svg',
  glass: '/media/wireframes/500x500.svg',
}
</script>

<template>
  <span class="service-item__icon" :class="`service-item__icon--${icon}`" aria-hidden="true">
    <img :src="iconSrc[props.icon]" alt="" width="106" height="106" />
  </span>
</template>
