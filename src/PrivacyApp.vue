<script setup lang="ts">
import { siteConfig } from './config/site'
import WhatsAppButton from './components/WhatsAppButton.vue'
import { assetUrl } from './config/assets'
</script>

<template>
  <main class="privacy-page">
    <a class="privacy-page__brand" href="/" aria-label="Volver al inicio de Eventosa">
      <img :src="assetUrl('/brand/eventosa-horizontal-olive.png')" alt="Eventosa" width="1327" height="596" />
    </a>
    <section class="privacy-page__card" aria-labelledby="privacy-title">
      <p class="eyebrow">Documento legal</p>
      <h1 id="privacy-title">Aviso de privacidad integral</h1>
      <p class="privacy-page__lead">Última actualización: 18 de agosto de 2026</p>

      <p>
        Eventosa, con domicilio en Federal a Atlixco no. 3002, Puebla, Pue., es responsable del tratamiento de los datos personales que, en su caso, nos compartas directamente al contactarnos.
      </p>

      <div class="privacy-page__sections">
        <section aria-labelledby="privacy-data">
          <h2 id="privacy-data">Datos que podemos recibir</h2>
          <p>
            Este sitio no tiene formularios, cuentas de usuario ni campos para capturar información personal. Al navegar por evento-sa.com no recabamos datos personales mediante el propio sitio.
          </p>
          <p>
            Si eliges contactarnos por WhatsApp o Instagram, puedes compartir voluntariamente datos como tu nombre, teléfono, fecha, ubicación o características de tu evento. No solicitamos datos personales sensibles.
          </p>
        </section>

        <section aria-labelledby="privacy-purposes">
          <h2 id="privacy-purposes">Finalidades</h2>
          <p>
            La información que decidas enviarnos se utilizará únicamente para responder tus preguntas, preparar cotizaciones, compartir información del catálogo, coordinar servicios y dar seguimiento a la conversación que hayas iniciado.
          </p>
          <p>
            No utilizaremos tus datos para perfiles publicitarios, campañas automatizadas, venta de bases de datos ni finalidades distintas a las anteriores sin informarte previamente.
          </p>
        </section>

        <section aria-labelledby="privacy-platforms">
          <h2 id="privacy-platforms">WhatsApp, Instagram y tecnologías de terceros</h2>
          <p>
            Los botones de contacto abren WhatsApp o Instagram, servicios operados por terceros. La información que compartas en esas plataformas se transmite directamente a ellas y queda sujeta a sus propios avisos de privacidad y condiciones de uso.
          </p>
          <p>
            Eventosa no incrusta cookies de terceros, píxeles, herramientas de analítica, publicidad, remarketing ni tecnologías destinadas a rastrear tu actividad para posicionamiento. El sitio tampoco vende ni comparte bases de datos personales.
          </p>
        </section>

        <section aria-labelledby="privacy-retention">
          <h2 id="privacy-retention">Conservación y seguridad</h2>
          <p>
            Cuando exista una conversación iniciada por ti, conservaremos la información únicamente durante el tiempo necesario para atenderla y cumplir obligaciones legales aplicables. No almacenamos esa información en una base de datos propia del sitio web.
          </p>
          <p>
            Te recomendamos no enviar por WhatsApp o Instagram datos sensibles, contraseñas, documentos de identidad o información que no sea necesaria para tu consulta.
          </p>
        </section>

        <section aria-labelledby="privacy-arco">
          <h2 id="privacy-arco">Derechos ARCO y revocación</h2>
          <p>
            Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales, así como revocar tu consentimiento, enviando un mensaje por WhatsApp al <a href="https://wa.me/522212200402" target="_blank" rel="noopener noreferrer">+52 221 220 0402</a>.
          </p>
          <p>
            Incluye tu nombre, un medio para contactarte, el derecho que deseas ejercer y una descripción clara de tu solicitud. Responderemos por el mismo medio y podremos pedir información adicional para verificar tu identidad.
          </p>
        </section>

        <section aria-labelledby="privacy-changes">
          <h2 id="privacy-changes">Cambios al aviso</h2>
          <p>
            Cualquier modificación a este aviso se publicará en esta misma página indicando la fecha de actualización.
          </p>
        </section>
      </div>

      <div class="privacy-page__actions">
        <a class="text-link" href="/">← Volver al inicio</a>
        <WhatsAppButton label="Contactar por WhatsApp" variant="solid" />
      </div>
    </section>
    <footer>
      <span>{{ siteConfig.address }}</span>
      <span>© 2026 Eventosa.</span>
    </footer>
  </main>
</template>
