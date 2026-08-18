<script setup lang="ts">
import type { ServiceHighlight } from '../data/content'
import { assetUrl } from '../config/assets'

const props = defineProps<{
  icon: ServiceHighlight['icon']
}>()

const iconSrc: Record<ServiceHighlight['icon'], string> = {
  tent: assetUrl('/media/wireframes/icons/tent.png'),
  chair: assetUrl('/media/wireframes/icons/chair.png'),
  glass: assetUrl('/media/wireframes/icons/glass.png'),
  tablecloth: assetUrl('/media/wireframes/icons/tablecloth.png'),
  kids: assetUrl('/media/wireframes/icons/kids.png'),
  flower: assetUrl('/media/wireframes/icons/flower.png'),
}
</script>

<template>
  <span class="service-item__icon" :class="`service-item__icon--${icon}`" aria-hidden="true">
    <img :src="iconSrc[props.icon]" alt="" width="106" height="106" />
  </span>
</template>
