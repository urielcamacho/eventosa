<script setup lang="ts">
import { ref } from 'vue'
import { useSectionReveal } from '../composables/useSectionReveal'
import { assetUrl } from '../config/assets'
import SparkleCluster from './SparkleCluster.vue'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)
</script>

<template>
  <section id="nosotros" ref="root" class="section about" aria-labelledby="about-title">
    <img class="about__isotype" :src="assetUrl('/brand/eventosa-isotype-olive.png')" alt="" aria-hidden="true" />
    <img class="about__flower-motif" :src="assetUrl('/brand/eventosa-flower-motif.png')" alt="" aria-hidden="true" />
    <div class="page-shell about__grid">
      <div class="about__media" data-reveal>
        <img
          class="about__main-image"
          :src="assetUrl('/media/wireframes/about-showroom.jpg')"
          alt="Showroom de Eventosa con muestras de textiles, vajilla y mobiliario."
          width="1248"
          height="833"
          loading="lazy"
        />
      </div>
      <div class="about__content">
        <p data-reveal class="eyebrow">Nosotros</p>
        <div id="about-title" class="about__statement" data-reveal>
          <p>
            <span><SparkleCluster class="about__sparkle about__sparkle--lead" direction="leading" />Creamos atmósferas que brillan</span><br />
            por un momento...<br />
            <span>y dejan la magia por siempre.<SparkleCluster class="about__sparkle about__sparkle--tail" direction="trailing" /></span>
          </p>
        </div>
        <img data-reveal class="about__wordmark" :src="assetUrl('/brand/eventosa-horizontal-olive.png')" alt="Eventosa" />
      </div>
    </div>
  </section>
</template>
