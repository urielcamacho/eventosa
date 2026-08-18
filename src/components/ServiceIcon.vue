<script setup lang="ts">
import type { ServiceHighlight } from '../data/content'
import { assetUrl } from '../config/assets'

const props = defineProps<{
  icon: ServiceHighlight['icon']
}>()

const iconSrc: Record<ServiceHighlight['icon'], string> = {
  tent: assetUrl('/media/wireframes/500x500.svg'),
  chair: assetUrl('/media/wireframes/500x500.svg'),
  glass: assetUrl('/media/wireframes/500x500.svg'),
}
</script>

<template>
  <span class="service-item__icon" :class="`service-item__icon--${icon}`" aria-hidden="true">
    <img :src="iconSrc[props.icon]" alt="" width="106" height="106" />
  </span>
</template>
