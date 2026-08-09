<script setup lang="ts">
import { computed } from 'vue'
import { getWhatsAppUrl, type WhatsAppMessageKey } from '../config/site'

const props = withDefaults(
  defineProps<{
    label: string
    messageKey?: WhatsAppMessageKey
    variant?: 'solid' | 'outline' | 'light' | 'floating'
  }>(),
  {
    messageKey: 'general',
    variant: 'solid',
  },
)

const href = computed(() => getWhatsAppUrl(props.messageKey))
</script>

<template>
  <a
    :class="['whatsapp-button', `whatsapp-button--${variant}`]"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`${label} (abre WhatsApp en una nueva pestaña)`"
  >
    <span>{{ label }}</span>
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  </a>
</template>
