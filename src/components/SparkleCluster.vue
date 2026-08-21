<script setup lang="ts">
withDefaults(
  defineProps<{
    direction?: 'leading' | 'trailing'
  }>(),
  { direction: 'leading' },
)
</script>

<template>
  <span :class="['sparkle-cluster', `sparkle-cluster--${direction}`]" aria-hidden="true">
    <svg viewBox="0 0 82 62" focusable="false">
      <path class="sparkle-cluster__large" d="M25 0C25 18 29 22 50 26 29 30 25 34 25 52 25 34 21 30 0 26 21 22 25 18 25 0Z" />
      <path class="sparkle-cluster__medium" d="M59 3c0 7 1.5 8 9 9-7.5 1-9 2-9 9 0-7-1.5-8-9-9 7.5-1 9-2 9-9Z" />
      <path class="sparkle-cluster__small" d="M62 41c0 5 1 5.5 6 6-5 .5-6 1-6 6 0-5-1-5.5-6-6 5-.5 6-1 6-6Z" />
    </svg>
  </span>
</template>
