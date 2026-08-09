import type { WhatsAppMessageKey } from '../config/site'

export interface ServiceItem {
  number: string
  name: string
  title: string
  description: string
  linkLabel: string
  messageKey: WhatsAppMessageKey
  placeholder: {
    dimensions: string
    description: string
    tone: 'yellow' | 'sand' | 'gray'
  }
}

export interface ProjectItem {
  label: string
  dimensions: string
  description: string
  ratio: '3/2' | '4/5' | '1/1' | '9/5'
  tone: 'olive' | 'yellow' | 'sand' | 'gray' | 'off-white'
  className: string
}

export const services: ServiceItem[] = [
  {
    number: '01',
    name: 'Rentals',
    title: 'Piezas que transforman el espacio.',
    description: 'Mobiliario, vajilla, mantelería y carpas para construir ambientes con estilo, equilibrio y personalidad.',
    linkLabel: 'Explorar rentals',
    messageKey: 'rentals',
    placeholder: {
      dimensions: '1200 × 1500 px',
      description: 'Mesa montada con mobiliario, vajilla y textiles.',
      tone: 'sand',
    },
  },
  {
    number: '02',
    name: 'Design',
    title: 'Diseño que empieza contigo.',
    description: 'Partimos de tu estilo y de la intención de la celebración para dar coherencia a cada elemento visual.',
    linkLabel: 'Conocer design',
    messageKey: 'design',
    placeholder: {
      dimensions: '1200 × 1500 px',
      description: 'Montaje editorial con una propuesta visual completa.',
      tone: 'gray',
    },
  },
  {
    number: '03',
    name: 'Flowers',
    title: 'Flores con intención.',
    description: 'Arreglos y composiciones florales que acompañan el ambiente y forman parte de la historia de tu evento.',
    linkLabel: 'Descubrir flowers',
    messageKey: 'flowers',
    placeholder: {
      dimensions: '1200 × 1500 px',
      description: 'Arreglo floral contemporáneo en tonos naturales.',
      tone: 'yellow',
    },
  },
]

export const projects: ProjectItem[] = [
  {
    label: 'Proyecto principal',
    dimensions: '1800 × 1200 px',
    description: 'Vista general de un montaje.',
    ratio: '3/2',
    tone: 'olive',
    className: 'project--main',
  },
  {
    label: 'Detalle floral',
    dimensions: '1200 × 1500 px',
    description: 'Composición floral y textura.',
    ratio: '4/5',
    tone: 'yellow',
    className: 'project--floral',
  },
  {
    label: 'Tablesetting',
    dimensions: '1200 × 1200 px',
    description: 'Vajilla, cristalería y textiles.',
    ratio: '1/1',
    tone: 'off-white',
    className: 'project--table',
  },
  {
    label: 'Mobiliario',
    dimensions: '1200 × 1500 px',
    description: 'Sillas, mesas o lounge.',
    ratio: '4/5',
    tone: 'gray',
    className: 'project--furniture',
  },
  {
    label: 'Montaje panorámico',
    dimensions: '1800 × 1000 px',
    description: 'Espacio completo durante el evento.',
    ratio: '9/5',
    tone: 'sand',
    className: 'project--wide',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Compártenos qué celebras, la fecha y lo que tienes en mente.',
  },
  {
    number: '02',
    title: 'Aterrizamos los detalles',
    description: 'Revisamos contigo las opciones que mejor se ajustan al estilo y las necesidades de tu evento.',
  },
  {
    number: '03',
    title: 'Damos forma a la propuesta',
    description: 'Coordinamos los elementos acordados para que cada detalle se sienta parte de una misma idea.',
  },
]
