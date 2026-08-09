<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '../config/site'
import { projects } from '../data/content'
import { useSectionReveal } from '../composables/useSectionReveal'
import ImagePlaceholder from './ImagePlaceholder.vue'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section id="proyectos" ref="root" class="section projects" aria-labelledby="projects-title">
    <div class="page-shell">
      <header class="section-heading section-heading--split">
        <div>
          <p data-reveal class="eyebrow">Inspiración real</p>
          <h2 id="projects-title" data-reveal>Ideas que <em>toman forma.</em></h2>
        </div>
        <p data-reveal class="section-heading__copy">
          Una selección de ambientes, mesas, flores y detalles creados para celebraciones distintas.
        </p>
      </header>

      <div class="projects__grid">
        <article v-for="project in projects" :key="project.label" data-reveal :class="['project-item', project.className]">
          <ImagePlaceholder
            :label="project.label"
            :dimensions="project.dimensions"
            :description="project.description"
            :ratio="project.ratio"
            :tone="project.tone"
          />
        </article>
      </div>

      <a
        data-reveal
        class="text-link"
        :href="siteConfig.instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Ver más en Instagram</span>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg>
      </a>
    </div>
  </section>
</template>
