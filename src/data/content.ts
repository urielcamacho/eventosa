import type { WhatsAppMessageKey } from '../config/site'
import { assetUrl } from '../config/assets'

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
  src: string
  alt: string
}

export interface ServiceHighlight {
  number: string
  name: string
  title: string
  quote: string
  icon: 'tent' | 'chair' | 'glass'
  dimensions: string
  src: string
  alt: string
  tone: 'sand' | 'gray' | 'yellow'
}

export interface FlowerLabItem {
  src: string
  alt: string
  className: string
  dimensions: string
}

export const services: ServiceItem[] = [
  {
    number: '01',
    name: 'Rentals',
    title: 'Piezas que hacen la diferencia.',
    description: 'Mobiliario, vajilla, mantelería y carpas para construir un escenario con presencia, equilibrio y personalidad.',
    linkLabel: 'Consultar rentals por WhatsApp',
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
    title: 'Diseñamos lo que te hace diferente.',
    description: 'Partimos de tu estilo y de la intención de tu celebración para convertir una idea en una propuesta visual con carácter.',
    linkLabel: 'Hablar sobre diseño por WhatsApp',
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
    title: 'Flores que dejan huella.',
    description: 'Arreglos y composiciones que suman color, textura y emoción para que cada ambiente se sienta completamente tuyo.',
    linkLabel: 'Consultar flores por WhatsApp',
    messageKey: 'flowers',
    placeholder: {
      dimensions: '1200 × 1500 px',
      description: 'Arreglo floral contemporáneo en tonos naturales.',
      tone: 'yellow',
    },
  },
]

export const serviceHighlights: ServiceHighlight[] = [
  {
    number: '01',
    name: 'Rentals',
    title: 'Domos y carpas.',
    quote: '“Nuestra carpa encuadra el escenario de lo inolvidable.”',
    icon: 'tent',
    dimensions: '1200 × 1500 · 4:5',
    src: assetUrl('/media/wireframes/service-domos.jpg'),
    alt: 'Domo y carpa montados al aire libre.',
    tone: 'sand',
  },
  {
    number: '02',
    name: 'Rentals',
    title: 'Mobiliario.',
    quote: '“Los materiales no solo visten el espacio, lo interpretan.”',
    icon: 'chair',
    dimensions: '1200 × 1500 · 4:5',
    src: assetUrl('/media/wireframes/service-mobiliario.jpg'),
    alt: 'Montaje exterior con mobiliario y mesas.',
    tone: 'gray',
  },
  {
    number: '03',
    name: 'Rentals',
    title: 'Tablesetting.',
    quote: '“El arte de poner la mesa es también el arte de recibir.”',
    icon: 'glass',
    dimensions: '1200 × 1500 · 4:5',
    src: assetUrl('/media/wireframes/service-tablesetting.jpg'),
    alt: 'Mesa puesta con platos, cubiertos y cristalería.',
    tone: 'yellow',
  },
  {
    number: '04',
    name: 'Rentals',
    title: 'Mantelería.',
    quote: '“Creemos en el poder del detalle para contar historias.”',
    icon: 'tent',
    dimensions: '1200 × 1500 · 4:5',
    src: assetUrl('/media/wireframes/gallery-detail-small-2.jpg'),
    alt: 'Textiles y mantelería preparados para un montaje.',
    tone: 'sand',
  },
  {
    number: '05',
    name: 'Design',
    title: 'Kids.',
    quote: '“Lo que hoy se vive, mañana se atesora.”',
    icon: 'chair',
    dimensions: '1200 × 1500 · 4:5',
    src: assetUrl('/media/wireframes/flower-05.jpg'),
    alt: 'Detalle colorido para una celebración infantil.',
    tone: 'gray',
  },
  {
    number: '06',
    name: 'Flowers',
    title: 'Florería.',
    quote: '“Donde el detalle florece, el evento cobra vida.”',
    icon: 'glass',
    dimensions: '1200 × 1500 · 4:5',
    src: assetUrl('/media/wireframes/flower-03.jpg'),
    alt: 'Composición floral con presencia y color.',
    tone: 'yellow',
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
    src: assetUrl('/media/wireframes/gallery-main.jpg'),
    alt: 'Montaje de mesa con flores y vajilla en un espacio exterior.',
  },
  {
    label: 'Detalle floral',
    dimensions: '1200 × 1500 px',
    description: 'Composición floral y textura.',
    ratio: '4/5',
    tone: 'yellow',
    className: 'project--floral',
    src: assetUrl('/media/wireframes/gallery-detail.jpg'),
    alt: 'Detalle floral sobre una mesa montada.',
  },
  {
    label: 'Tablesetting',
    dimensions: '1200 × 1200 px',
    description: 'Vajilla, cristalería y textiles.',
    ratio: '1/1',
    tone: 'off-white',
    className: 'project--table',
    src: assetUrl('/media/wireframes/gallery-detail-small-1.jpg'),
    alt: 'Detalle de mesa con cristalería y flores.',
  },
  {
    label: 'Mobiliario',
    dimensions: '1200 × 1500 px',
    description: 'Sillas, mesas o lounge.',
    ratio: '4/5',
    tone: 'gray',
    className: 'project--furniture',
    src: assetUrl('/media/wireframes/gallery-detail-small-2.jpg'),
    alt: 'Detalle de mobiliario y mesa decorada.',
  },
  {
    label: 'Montaje panorámico',
    dimensions: '1800 × 1000 px',
    description: 'Espacio completo durante el evento.',
    ratio: '9/5',
    tone: 'sand',
    className: 'project--wide',
    src: assetUrl('/media/wireframes/about-showroom.jpg'),
    alt: 'Showroom de Eventosa con mobiliario y materiales.',
  },
]

export const flowerLabItems: FlowerLabItem[] = [
  { src: assetUrl('/media/wireframes/flower-01.jpg'), alt: 'Arreglo floral con tulipanes y flores de colores.', className: 'flower-lab__item--top-left', dimensions: '896 × 672 px' },
  { src: assetUrl('/media/wireframes/flower-06.jpg'), alt: 'Arreglo floral con orquídeas amarillas y flores rosadas.', className: 'flower-lab__item--top-right', dimensions: '800 × 705 px' },
  { src: assetUrl('/media/wireframes/flower-02.jpg'), alt: 'Arreglo floral compacto en tonos blancos y verdes.', className: 'flower-lab__item--middle-left', dimensions: '480 × 640 px' },
  { src: assetUrl('/media/wireframes/flower-03.jpg'), alt: 'Composición floral redonda en tonos vivos.', className: 'flower-lab__item--middle-right', dimensions: '859 × 903 px' },
  { src: assetUrl('/media/wireframes/flower-04.jpg'), alt: 'Arreglo floral horizontal con flores claras.', className: 'flower-lab__item--bottom-left', dimensions: '1028 × 863 px' },
  { src: assetUrl('/media/wireframes/flower-05.jpg'), alt: 'Composición floral silvestre en una base de cerámica.', className: 'flower-lab__item--bottom-right', dimensions: '525 × 545 px' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Compártenos qué celebras, la fecha y la sensación que quieres crear.',
  },
  {
    number: '02',
    title: 'Aterrizamos los detalles',
    description: 'Exploramos contigo las opciones que mejor traducen tu estilo y las necesidades de tu evento.',
  },
  {
    number: '03',
    title: 'Damos forma a la propuesta',
    description: 'Coordinamos cada elemento para que la propuesta tenga coherencia, ritmo y presencia.',
  },
]
