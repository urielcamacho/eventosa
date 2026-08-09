export const siteConfig = {
  name: 'Eventosa',
  siteUrl: 'https://evento-sa.com/',
  instagramUrl: 'https://www.instagram.com/evento_sa/',
  privacyPath: '/aviso-de-privacidad/',
  whatsappNumber: '522212200402',
  address: 'Camino Real a Cholula #1, esquina con Av. Alejandra, C.P. 72124 Puebla, Pue.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Camino%20Real%20a%20Cholula%20%231%2C%20Puebla%2C%20Pue.%2072124',
  whatsappMessages: {
    general: 'Hola, me gustaría recibir información para mi evento.',
    rentals: 'Hola, me gustaría recibir información sobre Rentals para mi evento.',
    design: 'Hola, me gustaría recibir información sobre Design para mi evento.',
    flowers: 'Hola, me gustaría recibir información sobre Flowers para mi evento.',
  },
} as const

export type WhatsAppMessageKey = keyof typeof siteConfig.whatsappMessages

export function getWhatsAppUrl(messageKey: WhatsAppMessageKey = 'general') {
  const message = siteConfig.whatsappMessages[messageKey]
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
