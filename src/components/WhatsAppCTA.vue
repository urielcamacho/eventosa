<script setup lang="ts">
import { ref } from 'vue'
import { useSectionReveal } from '../composables/useSectionReveal'
import ImagePlaceholder from './ImagePlaceholder.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import BrandMotion from './BrandMotion.vue'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section id="contacto" ref="root" class="final-cta" aria-labelledby="contact-title">
    <ImagePlaceholder
      class="final-cta__media"
      label="Cierre"
      dimensions="1920 × 1080 px"
      description="Ambiente cálido de una celebración al atardecer."
      ratio="16/9"
      tone="olive"
    />
    <BrandMotion variant="cta" />
    <div class="final-cta__shade" aria-hidden="true" />
    <div class="page-shell final-cta__content">
      <p data-reveal class="eyebrow eyebrow--light">Hablemos de tu evento</p>
      <h2 id="contact-title" data-reveal>Hagamos que tu celebración se sienta <em>tan única como tú.</em></h2>
      <p data-reveal>Escríbenos por WhatsApp y cuéntanos la fecha, el tipo de evento y lo que necesitas. Empecemos a darle forma a tu idea.</p>
      <div data-reveal>
        <WhatsAppButton label="Platiquemos por WhatsApp" variant="light" />
      </div>
    </div>
  </section>
</template>
