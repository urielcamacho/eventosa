<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteConfig } from '../config/site'
import WhatsAppButton from './WhatsAppButton.vue'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const isScrolled = ref(false)
const menuOpen = ref(false)
const dialog = ref<HTMLDialogElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)
let headerTrigger: ScrollTrigger | undefined

const logoSource = computed(() =>
  isScrolled.value ? '/brand/eventosa-horizontal-olive.png' : '/brand/eventosa-horizontal-white.png',
)

onMounted(() => {
  headerTrigger = ScrollTrigger.create({
    trigger: '#inicio',
    start: 'bottom 128px',
    end: 'max',
    onEnter: () => {
      isScrolled.value = true
    },
    onLeaveBack: () => {
      isScrolled.value = false
    },
    onRefresh: ({ progress }) => {
      isScrolled.value = progress > 0
    },
  })
})

onBeforeUnmount(() => headerTrigger?.kill())

async function openMenu() {
  if (!dialog.value) return
  menuOpen.value = true
  dialog.value.showModal()
  document.body.classList.add('menu-open')
  await nextTick()

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.fromTo(
      '.mobile-nav__link',
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out' },
    )
  }
}

function closeMenu() {
  if (!dialog.value?.open) return
  dialog.value.close()
  menuOpen.value = false
  document.body.classList.remove('menu-open')
  menuButton.value?.focus()
}

function handleDialogClose() {
  menuOpen.value = false
  document.body.classList.remove('menu-open')
}
</script>

<template>
  <header :class="['site-header', { 'site-header--scrolled': isScrolled }]">
    <a class="site-header__brand" href="#inicio" aria-label="Eventosa, ir al inicio">
      <img :src="logoSource" alt="Eventosa — Rentals, Design, Flowers desde 2005" width="1327" height="596" />
    </a>

    <nav class="desktop-nav" aria-label="Navegación principal">
      <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>

    <div class="site-header__actions">
      <WhatsAppButton label="WhatsApp" variant="outline" />
      <button
        ref="menuButton"
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        @click="openMenu"
      >
        <span></span><span></span>
      </button>
    </div>

    <dialog
      id="mobile-menu"
      ref="dialog"
      class="mobile-menu"
      @cancel.prevent="closeMenu"
      @close="handleDialogClose"
      @keydown.esc="closeMenu"
    >
      <div class="mobile-menu__top">
        <img src="/brand/eventosa-horizontal-olive.png" alt="Eventosa" width="1327" height="596" />
        <button type="button" aria-label="Cerrar menú" @click="closeMenu">
          <span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" aria-label="Navegación móvil">
        <a
          v-for="(item, index) in navItems"
          :key="item.href"
          class="mobile-nav__link"
          :href="item.href"
          @click="closeMenu"
        >
          <small>0{{ index + 1 }}</small>
          <span>{{ item.label }}</span>
        </a>
      </nav>
      <div class="mobile-menu__footer">
        <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
        <WhatsAppButton label="Platiquemos" variant="solid" />
      </div>
    </dialog>
  </header>
</template>
