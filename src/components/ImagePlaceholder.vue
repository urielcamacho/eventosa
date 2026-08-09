<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    dimensions: string
    description: string
    ratio?: '3/2' | '4/5' | '1/1' | '9/5' | '3/4' | '16/9'
    tone?: 'olive' | 'yellow' | 'sand' | 'gray' | 'off-white'
    eager?: boolean
  }>(),
  {
    ratio: '4/5',
    tone: 'off-white',
    eager: false,
  },
)

const ratioStyle = computed(() => ({ aspectRatio: props.ratio }))
</script>

<template>
  <figure
    :class="['image-placeholder', `image-placeholder--${tone}`]"
    :style="ratioStyle"
    role="img"
    :aria-label="`${label}. ${dimensions}. ${description}`"
    :data-priority="eager ? 'high' : 'auto'"
  >
    <div class="image-placeholder__wash" aria-hidden="true"></div>
    <div class="image-placeholder__orbit" aria-hidden="true"></div>
    <div class="image-placeholder__flower" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>
    <figcaption class="image-placeholder__caption">
      <span class="image-placeholder__label">{{ label }}</span>
      <span class="image-placeholder__meta">{{ dimensions }}</span>
      <span class="image-placeholder__description">{{ description }}</span>
    </figcaption>
  </figure>
</template>
