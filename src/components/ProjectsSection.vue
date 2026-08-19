<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '../config/site'
import { projects } from '../data/content'
import { useSectionReveal } from '../composables/useSectionReveal'
import { assetUrl } from '../config/assets'

const root = ref<HTMLElement | null>(null)
const galleryTrack = ref<HTMLElement | null>(null)
useSectionReveal(root)

function scrollGallery(direction: number) {
  galleryTrack.value?.scrollBy({ left: direction * galleryTrack.value.clientWidth * 0.72, behavior: 'smooth' })
}
</script>

<template>
  <section id="galeria" ref="root" class="section projects" aria-labelledby="projects-title">
    <header class="section-heading projects__heading">
      <div class="page-shell">
        <p data-reveal class="eyebrow">Inspiración real</p>
      </div>
      <div class="section-banner section-banner--olive" data-reveal>
        <img :src="assetUrl('/media/wireframes/texture-paper.jpg')" alt="" aria-hidden="true" />
        <div class="page-shell section-banner__inner">
          <h2 id="projects-title">Expertos en contar historias a través de los detalles...</h2>
          <img class="section-banner__mark" :src="assetUrl('/brand/eventosa-isotype-olive.png')" alt="" aria-hidden="true" />
        </div>
      </div>
    </header>
    <div class="page-shell">
      <div ref="galleryTrack" class="projects__grid" tabindex="0" aria-label="Galería de inspiración">
        <article v-for="project in projects.slice(0, 4)" :key="project.label" data-reveal :class="['project-item', project.className]">
          <figure class="project-item__figure">
            <img
              :src="project.src"
              :alt="project.alt"
              :width="project.ratio === '3/2' ? 1800 : 1200"
              :height="project.ratio === '3/2' ? 1200 : 1500"
              loading="lazy"
            />
            <figcaption>
              <span>{{ project.label }}</span>
              <small>{{ project.description }}</small>
            </figcaption>
          </figure>
        </article>
      </div>

      <div class="projects__controls projects__controls--overlay" data-reveal>
        <button type="button" aria-label="Ver imágenes anteriores" @click="scrollGallery(-1)">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m14 6-6 6 6 6" /></svg>
        </button>
        <button type="button" aria-label="Ver imágenes siguientes" @click="scrollGallery(1)">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>

      <a
        data-reveal
        class="text-link"
        :href="siteConfig.instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Ver más en Instagram</span>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
    </div>
  </section>
</template>
