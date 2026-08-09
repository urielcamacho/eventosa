<script setup lang="ts">
import { siteConfig } from '../config/site'
import WhatsAppButton from './WhatsAppButton.vue'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <img src="/brand/eventosa-horizontal-olive.png" alt="Eventosa" width="1327" height="596" />
          <p>Celebraciones con estilo, cuidadas en cada detalle.</p>
        </div>
        <p class="site-footer__signature">Rentals <i>·</i> Design <i>·</i> Flowers</p>
      </div>

      <div class="site-footer__links">
        <nav aria-label="Enlaces del pie de página">
          <a v-for="link in footerLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
        <div class="site-footer__contact">
          <WhatsAppButton label="WhatsApp" variant="outline" />
          <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a :href="siteConfig.mapsUrl" target="_blank" rel="noopener noreferrer">Ubicación</a>
          <a :href="siteConfig.privacyPath">Aviso de privacidad</a>
        </div>
      </div>

      <div class="site-footer__bottom">
        <span>© 2026 Eventosa. Todos los derechos reservados.</span>
        <span>Puebla, México</span>
      </div>
    </div>
  </footer>
</template>
