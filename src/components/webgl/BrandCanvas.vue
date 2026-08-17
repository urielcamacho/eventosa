<script setup lang="ts">
import { ref } from 'vue'
import type { WebGLVariant } from '../../config/webgl'
import { useOglScene } from '../../composables/useOglScene'

const props = defineProps<{
  variant: WebGLVariant
}>()

const host = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const { state } = useOglScene(host, canvas, props.variant)
</script>

<template>
  <div
    ref="host"
    :class="['brand-canvas', `brand-canvas--${variant}`]"
    :data-webgl-state="state"
    aria-hidden="true"
  >
    <canvas ref="canvas" class="brand-canvas__surface"></canvas>
  </div>
</template>
