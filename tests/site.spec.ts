import { mount } from '@vue/test-utils'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import AppHeader from '../src/components/AppHeader.vue'
import ImagePlaceholder from '../src/components/ImagePlaceholder.vue'
import WhatsAppButton from '../src/components/WhatsAppButton.vue'
import { getWhatsAppUrl, siteConfig } from '../src/config/site'
import { processSteps, projects, services } from '../src/data/content'

describe('site configuration', () => {
  it('uses only the verified contact destinations', () => {
    expect(siteConfig.whatsappNumber).toBe('522212200402')
    expect(siteConfig.instagramUrl).toBe('https://www.instagram.com/evento_sa/')
    expect(siteConfig.privacyPath).toBe('/aviso-de-privacidad/')
    expect(siteConfig.siteUrl).toBe('https://evento-sa.com/')
  })

  it('encodes the approved general WhatsApp message', () => {
    expect(getWhatsAppUrl()).toBe(
      'https://wa.me/522212200402?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20para%20mi%20evento.',
    )
  })

  it('defines all required editorial content groups', () => {
    expect(services.map(({ name }) => name)).toEqual(['Rentals', 'Design', 'Flowers'])
    expect(projects).toHaveLength(5)
    expect(processSteps).toHaveLength(3)
  })
})

describe('reusable conversion and media components', () => {
  it('renders a service-specific WhatsApp link', () => {
    const wrapper = mount(WhatsAppButton, {
      props: { label: 'Explorar rentals', messageKey: 'rentals' },
    })

    expect(wrapper.attributes('href')).toContain('wa.me/522212200402')
    expect(wrapper.attributes('href')).toContain('Rentals')
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('describes placeholders accessibly and preserves their ratio', () => {
    const wrapper = mount(ImagePlaceholder, {
      props: {
        label: 'Proyecto principal',
        dimensions: '1800 × 1200 px',
        description: 'Vista general de un montaje.',
        ratio: '3/2',
      },
    })

    expect(wrapper.attributes('role')).toBe('img')
    expect(wrapper.attributes('aria-label')).toContain('1800 × 1200 px')
    expect(wrapper.attributes('style')).toContain('aspect-ratio: 3/2')
  })
})

describe('navigation', () => {
  it('opens and closes the accessible mobile dialog', async () => {
    const wrapper = mount(AppHeader, { attachTo: document.body })
    const toggle = wrapper.get('.menu-toggle')

    await toggle.trigger('click')
    expect(wrapper.get('#mobile-menu').attributes()).toHaveProperty('open')
    expect(toggle.attributes('aria-expanded')).toBe('true')

    await wrapper.get('.mobile-menu__top button').trigger('click')
    expect(wrapper.get('#mobile-menu').attributes()).not.toHaveProperty('open')
    wrapper.unmount()
  })
})

describe('static metadata and legal route', () => {
  it('publishes LocalBusiness metadata without ecommerce markup', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')
    expect(html).toContain('"@type": "LocalBusiness"')
    expect(html).toContain('https://evento-sa.com/og-eventosa.png')
    expect(html.toLowerCase()).not.toContain('product')
    expect(html.toLowerCase()).not.toContain('checkout')
  })

  it('keeps the legal page explicitly pending validation', () => {
    const app = readFileSync(resolve(process.cwd(), 'src/PrivacyApp.vue'), 'utf8')
    expect(app).toContain('Contenido pendiente de validación legal.')
    expect(app).toContain('No se presentan cláusulas provisionales')
  })

  it('implements the reduced-motion contract in CSS and GSAP components', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/style.css'), 'utf8')
    const hero = readFileSync(resolve(process.cwd(), 'src/components/HeroSection.vue'), 'utf8')
    const loader = readFileSync(resolve(process.cwd(), 'src/components/BrandLoader.vue'), 'utf8')

    expect(css).toContain('@media (prefers-reduced-motion: reduce)')
    expect(hero).toContain("reduceMotion: '(prefers-reduced-motion: reduce)'")
    expect(loader).toContain("gsap.set(loader.value, { display: 'none' })")
  })
})
