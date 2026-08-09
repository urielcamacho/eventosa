<script setup lang="ts">
import { ref } from 'vue'
import { processSteps } from '../data/content'
import { useSectionReveal } from '../composables/useSectionReveal'
import WhatsAppButton from './WhatsAppButton.vue'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section ref="root" class="section process" aria-labelledby="process-title">
    <div class="page-shell">
      <header class="section-heading section-heading--split">
        <div>
          <p data-reveal class="eyebrow">Así comenzamos</p>
          <h2 id="process-title" data-reveal>Todo empieza con <em>una conversación.</em></h2>
        </div>
        <p data-reveal class="section-heading__copy">
          Cuéntanos qué estás planeando y te ayudaremos a identificar las opciones que mejor se ajustan a tu evento.
        </p>
      </header>

      <ol class="process__steps">
        <li v-for="step in processSteps" :key="step.number" data-reveal>
          <span>{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>

      <div data-reveal class="process__cta">
        <WhatsAppButton label="Empezar por WhatsApp" variant="solid" />
      </div>
    </div>
  </section>
</template>
