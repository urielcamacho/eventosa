<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '../config/site'
import { useSectionReveal } from '../composables/useSectionReveal'
import WhatsAppButton from './WhatsAppButton.vue'
import BrandCanvas from './webgl/BrandCanvas.vue'
import { assetUrl } from '../config/assets'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section id="visitanos" ref="root" class="visit-section section" aria-labelledby="visit-title">
    <div class="page-shell visit-section__eyebrow" data-reveal>
      <p class="eyebrow">Visítanos</p>
    </div>
    <header class="section-banner" data-reveal>
      <img :src="assetUrl('/media/wireframes/texture-paper.jpg')" alt="" aria-hidden="true" />
      <div class="page-shell section-banner__inner">
        <p id="visit-title">Aquí comienza la transformación...</p>
      </div>
    </header>
    <div class="page-shell">
      <div class="visit-section__grid">
        <div class="visit-section__map">
          <iframe
            title="Mapa de Eventosa en Puebla"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.601310721912!2d-98.2477358!3d19.0372821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6e1d890eaf3%3A0xf7c83731e8598c1f!2sEventosa!5e0!3m2!1sen!2smx!4v1786947797140!5m2!1sen!2smx"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <address class="visit-section__address" data-reveal>
          <h2>Federal a Atlixco <em>no. 3002</em></h2>
          <p>{{ siteConfig.address }}</p>
          <a class="visit-section__contact" :href="siteConfig.instagramUrl" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            <span>evento_sa</span>
          </a>
          <a class="visit-section__contact" :href="`https://wa.me/${siteConfig.whatsappNumber}`" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" /><path d="M8.7 8.5c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.2.7l-.5.5c.5.9 1.2 1.6 2.1 2.1l.5-.5c.2-.2.5-.3.7-.2l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.4.2-1 .3-1.7.1-1.2-.3-2.4-1-3.4-2-1-1-1.7-2.2-2-3.4-.2-.7-.1-1.3.1-1.7Z" /></svg>
            <span>22 12 2004 02</span>
          </a>
          <a class="text-link" :href="siteConfig.mapsUrl" target="_blank" rel="noopener noreferrer">
            Abrir ubicación
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
          <img class="visit-section__logo" :src="assetUrl('/brand/eventosa-isotype-olive.png')" alt="Eventosa" width="592" height="592" />
        </address>
      </div>

      <div class="visit-section__cta" data-reveal>
        <BrandCanvas variant="cta" />
        <p>Creamos instantes que se transforman en algo más grande: <em>lo inolvidable...</em></p>
        <WhatsAppButton label="Platiquemos por WhatsApp" variant="light" />
      </div>
    </div>
  </section>
</template>
