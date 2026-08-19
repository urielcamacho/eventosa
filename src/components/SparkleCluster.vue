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
      <path class="sparkle-cluster__large" d="M23 0 29 20 49 26 29 32 23 52 17 32 0 26 17 20Z" />
      <path class="sparkle-cluster__medium" d="m59 3 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" />
      <path class="sparkle-cluster__small" d="m60 41 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" />
    </svg>
  </span>
</template>
