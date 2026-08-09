<script setup lang="ts">
import { siteConfig } from './config/site'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <main class="privacy-page">
    <a class="privacy-page__brand" href="/" aria-label="Volver al inicio de Eventosa">
      <img src="/brand/eventosa-horizontal-olive.png" alt="Eventosa" width="1327" height="596" />
    </a>
    <section class="privacy-page__card" aria-labelledby="privacy-title">
      <p class="eyebrow">Documento legal</p>
      <h1 id="privacy-title">Aviso de privacidad</h1>
      <p class="privacy-page__lead">Contenido pendiente de validación legal.</p>
      <p>
        Esta ruta está reservada para publicar el aviso de privacidad aprobado por Eventosa. No se presentan cláusulas provisionales ni se recopilan datos personales en este sitio.
      </p>
      <div class="privacy-page__actions">
        <a class="text-link" href="/">← Volver al inicio</a>
        <WhatsAppButton label="Contactar a Eventosa" variant="solid" />
      </div>
    </section>
    <footer>
      <span>{{ siteConfig.address }}</span>
      <span>© 2026 Eventosa.</span>
    </footer>
  </main>
</template>
