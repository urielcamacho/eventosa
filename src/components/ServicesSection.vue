<script setup lang="ts">
import { ref } from 'vue'
import { serviceHighlights } from '../data/content'
import { useSectionReveal } from '../composables/useSectionReveal'
import ServiceIcon from './ServiceIcon.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import { assetUrl } from '../config/assets'

const root = ref<HTMLElement | null>(null)
const servicesTrack = ref<HTMLElement | null>(null)
useSectionReveal(root)

function scrollServices(direction: number) {
  servicesTrack.value?.scrollBy({ left: direction * servicesTrack.value.clientWidth * 0.86, behavior: 'smooth' })
}
</script>

<template>
  <section id="servicios" ref="root" class="section services" aria-labelledby="services-title">
    <header class="section-heading services__heading">
      <div class="page-shell">
        <p data-reveal class="eyebrow">Lo que hacemos</p>
      </div>
      <div class="section-banner section-banner__services" data-reveal>
        <img :src="assetUrl('/media/wireframes/texture-paper.jpg')" alt="" aria-hidden="true" />
        <div class="page-shell section-banner__inner">
          <p>Diseñamos experiencias que se sienten,<br />se celebran y se recuerdan...</p>
          <img class="section-banner__mark" :src="assetUrl('/brand/eventosa-isotype-olive.png')" alt="" aria-hidden="true" />
        </div>
      </div>
    </header>
    <div class="page-shell">
      <div class="services__carousel" aria-label="Servicios destacados">
        <button type="button" class="services__control services__control--previous" aria-label="Ver servicios anteriores" @click="scrollServices(-1)">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m14 6-6 6 6 6" /></svg>
        </button>

        <div ref="servicesTrack" class="services__grid services__grid--wireframe" tabindex="0" aria-label="Carrusel de servicios destacados">
          <article v-for="service in serviceHighlights" :key="service.title" data-reveal class="service-item">
            <div class="service-item__media">
              <img :src="service.src" :alt="service.alt" width="1200" height="1500" loading="lazy" />
              <span class="service-item__dimensions">{{ service.dimensions }}</span>
            </div>
            <div class="service-item__content">
              <div class="service-item__index">
                <span>{{ service.name }}</span>
                <span>{{ service.number }}</span>
              </div>
              <div class="service-item__title-row">
                <h3>{{ service.title }}</h3>
                <ServiceIcon :icon="service.icon" />
              </div>
              <p>{{ service.quote }}</p>
            </div>
          </article>
        </div>

        <button type="button" class="services__control services__control--next" aria-label="Ver servicios siguientes" @click="scrollServices(1)">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>

      <div class="services__catalog" data-reveal>
        <WhatsAppButton label="Catálogo digital" message-key="catalog" variant="light" />
      </div>
    </div>
  </section>
</template>
