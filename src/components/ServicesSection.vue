<script setup lang="ts">
import { ref } from 'vue'
import { services } from '../data/content'
import { useSectionReveal } from '../composables/useSectionReveal'
import ImagePlaceholder from './ImagePlaceholder.vue'
import WhatsAppButton from './WhatsAppButton.vue'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section id="servicios" ref="root" class="section services" aria-labelledby="services-title">
    <div class="page-shell">
      <header class="section-heading services__heading">
        <p data-reveal class="eyebrow">Lo que hacemos</p>
        <h2 id="services-title" data-reveal>Todo lo que suma <em>estilo</em> a tu celebración.</h2>
        <p data-reveal class="section-heading__copy">
          Cada evento tiene una forma distinta de sentirse. Conoce nuestras opciones en renta, diseño y flores,
          y encuentra los detalles que mejor se ajusten a tu idea.
        </p>
      </header>

      <div class="services__grid">
        <article v-for="service in services" :key="service.name" data-reveal class="service-item">
          <div class="service-item__media">
            <ImagePlaceholder
              :label="service.name"
              :dimensions="service.placeholder.dimensions"
              :description="service.placeholder.description"
              ratio="4/5"
              :tone="service.placeholder.tone"
            />
          </div>
          <div class="service-item__content">
            <div class="service-item__index">
              <span>{{ service.number }}</span>
              <span>{{ service.name }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <WhatsAppButton :label="service.linkLabel" :message-key="service.messageKey" variant="outline" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
