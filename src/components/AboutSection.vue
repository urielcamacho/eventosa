<script setup lang="ts">
import { ref } from 'vue'
import { useSectionReveal } from '../composables/useSectionReveal'
import ImagePlaceholder from './ImagePlaceholder.vue'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section id="nosotros" ref="root" class="section about" aria-labelledby="about-title">
    <img class="about__isotype" src="/brand/eventosa-isotype-olive.png" alt="" aria-hidden="true" />
    <img class="about__flower-motif" src="/brand/eventosa-flower-motif.png" alt="" aria-hidden="true" />
    <div class="page-shell about__grid">
      <div class="about__media" data-reveal>
        <ImagePlaceholder
          label="Nosotros"
          dimensions="1200 × 1500 px"
          description="Equipo, showroom o proceso creativo."
          ratio="4/5"
          tone="gray"
        />
        <ImagePlaceholder
          class="about__detail"
          label="Detalle"
          dimensions="1200 × 800 px"
          description="Manos preparando flores, vajilla o elementos del montaje."
          ratio="3/2"
          tone="yellow"
        />
      </div>
      <div class="about__content">
        <p data-reveal class="eyebrow">Desde 2005</p>
        <h2 id="about-title" data-reveal>Experiencia que se nota en <em>los detalles.</em></h2>
        <div data-reveal class="about__copy">
          <p>Nuestra trayectoria nos ha enseñado que un gran resultado se construye escuchando, eligiendo bien y cuidando cada elemento.</p>
          <p>Hoy reunimos Rentals, Design y Flowers bajo una misma identidad: fresca, cercana y atenta a los detalles.</p>
        </div>
        <blockquote data-reveal>“Tu estilo es el punto de partida.”</blockquote>
      </div>
    </div>
  </section>
</template>
