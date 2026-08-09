<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import BrandLoader from './components/BrandLoader.vue'
import HeroSection from './components/HeroSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import WhatsAppCTA from './components/WhatsAppCTA.vue'
</script>

<template>
  <BrandLoader />
  <AppHeader />
  <main id="contenido">
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <AboutSection />
    <ProcessSection />
    <WhatsAppCTA />
  </main>
  <AppFooter />
  <WhatsAppButton class="floating-whatsapp" label="Abrir WhatsApp" variant="floating" />
</template>
