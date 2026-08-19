<script setup lang="ts">
import { ref } from 'vue'
import { flowerLabItems } from '../data/content'
import { useSectionReveal } from '../composables/useSectionReveal'
import WhatsAppButton from './WhatsAppButton.vue'
import { assetUrl } from '../config/assets'

const root = ref<HTMLElement | null>(null)
useSectionReveal(root)

const flowerTopLeft = flowerLabItems[0]!
const flowerTopRight = flowerLabItems[1]!
const flowerMiddleLeft = flowerLabItems[2]!
const flowerMiddleRight = flowerLabItems[3]!
const flowerBottomLeft = flowerLabItems[4]!
const flowerBottomRight = flowerLabItems[5]!
</script>

<template>
  <section id="flower-lab" ref="root" class="section flower-lab" aria-labelledby="flower-lab-title">
    <header class="section-banner section-banner--flower" data-reveal>
      <img :src="assetUrl('/media/wireframes/texture-paper.jpg')" alt="" aria-hidden="true" />
      <div class="page-shell section-banner__inner">
        <div>
          <p class="eyebrow">Flower Lab</p>
          <h2 id="flower-lab-title"><em>Las flores son lenguaje, comunican lo que no se dice.</em></h2>
        </div>
        <img class="section-banner__mark" :src="assetUrl('/media/wireframes/icons/flower-lab.jpg')" alt="" aria-hidden="true" />
      </div>
    </header>
    <div class="page-shell">
      <div class="flower-lab__grid">
        <div class="flower-lab__column flower-lab__column--left">
          <figure :class="['flower-lab__item', flowerTopLeft.className]" data-reveal>
            <img :src="flowerTopLeft.src" :alt="flowerTopLeft.alt" loading="lazy" />
          </figure>
          <div class="flower-lab__pair">
            <figure :class="['flower-lab__item', flowerMiddleLeft.className]" data-reveal>
              <img :src="flowerMiddleLeft.src" :alt="flowerMiddleLeft.alt" loading="lazy" />
            </figure>
            <figure :class="['flower-lab__item', flowerMiddleRight.className]" data-reveal>
              <img :src="flowerMiddleRight.src" :alt="flowerMiddleRight.alt" loading="lazy" />
            </figure>
          </div>
          <figure :class="['flower-lab__item', flowerBottomLeft.className]" data-reveal>
            <img :src="flowerBottomLeft.src" :alt="flowerBottomLeft.alt" loading="lazy" />
          </figure>
        </div>
        <div class="flower-lab__column flower-lab__column--right">
          <figure :class="['flower-lab__item', flowerTopRight.className]" data-reveal>
            <img :src="flowerTopRight.src" :alt="flowerTopRight.alt" loading="lazy" />
          </figure>
          <figure :class="['flower-lab__item', flowerBottomRight.className]" data-reveal>
            <img :src="flowerBottomRight.src" :alt="flowerBottomRight.alt" loading="lazy" />
          </figure>
        </div>
      </div>

      <div class="flower-lab__cta" data-reveal>
        <WhatsAppButton label="Catálogo digital" message-key="flowers" variant="light" />
      </div>
    </div>
  </section>
</template>
