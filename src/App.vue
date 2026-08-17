<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import BrandLoader from './components/BrandLoader.vue'
import FlowerLabSection from './components/FlowerLabSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import VisitSection from './components/VisitSection.vue'
</script>

<template>
  <BrandLoader />
  <AppHeader />
  <main id="contenido">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <FlowerLabSection />
    <VisitSection />
  </main>
  <AppFooter />
  <WhatsAppButton class="floating-whatsapp" label="Abrir WhatsApp" variant="floating" />
</template>
