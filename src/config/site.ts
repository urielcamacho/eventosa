export const siteConfig = {
  name: 'Eventosa',
  siteUrl: 'https://evento-sa.com/',
  instagramUrl: 'https://www.instagram.com/evento_sa/',
  privacyPath: '/aviso-de-privacidad/',
  whatsappNumber: '522212200402',
  address: 'Federal a Atlixco no. 3002, Puebla, Pue.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Federal%20a%20Atlixco%20no.%203002%2C%20Puebla%2C%20Pue.',
  whatsappMessages: {
    general: 'Hola, me gustaría recibir información para mi evento.',
    rentals: 'Hola, me gustaría recibir información sobre Rentals para mi evento.',
    design: 'Hola, me gustaría recibir información sobre Design para mi evento.',
    flowers: 'Hola, me gustaría recibir información sobre Flowers para mi evento.',
    catalog: 'Hola, me gustaría recibir el catálogo digital de Eventosa.',
  },
} as const

export type WhatsAppMessageKey = keyof typeof siteConfig.whatsappMessages

export function getWhatsAppUrl(messageKey: WhatsAppMessageKey = 'general') {
  const message = siteConfig.whatsappMessages[messageKey]
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
