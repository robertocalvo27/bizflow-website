import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Bizflow',
  description: 'Conoce cómo utilizamos las cookies para mejorar tu experiencia en Bizflow.',
}

export default function PoliticaCookies() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-bizflow-blue-950 mb-8">
        Política de Cookies
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            1. ¿Qué son las Cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo para almacenar información sobre sus preferencias, mejorar su experiencia en el sitio y ayudarnos a comprender cómo interactúa con nuestro contenido.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            2. ¿Qué tipos de Cookies utilizamos?
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-bizflow-blue-800 mb-2">Cookies Esenciales</h3>
              <p>Necesarias para el funcionamiento básico del sitio web. Incluyen cookies que permiten iniciar sesión en áreas seguras y usar funcionalidades esenciales.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-bizflow-blue-800 mb-2">Cookies Analíticas</h3>
              <p>Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, proporcionando información sobre las áreas visitadas, el tiempo de visita y cualquier problema encontrado.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-bizflow-blue-800 mb-2">Cookies Funcionales</h3>
              <p>Permiten recordar sus preferencias y proporcionar funciones mejoradas y más personales.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-bizflow-blue-800 mb-2">Cookies de Marketing</h3>
              <p>Se utilizan para rastrear a los visitantes en los sitios web con el objetivo de mostrar anuncios relevantes y atractivos para el usuario individual.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            3. ¿Cómo utilizamos las Cookies?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Para recordar sus preferencias y personalizar su experiencia</li>
            <li>Para analizar y medir el rendimiento de nuestro sitio web</li>
            <li>Para entender la efectividad de nuestras campañas de marketing</li>
            <li>Para proporcionarle contenido y publicidad más relevante</li>
            <li>Para mejorar la seguridad y proteger contra el fraude</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            4. Control de Cookies
          </h2>
          <p className="mb-4">
            Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.
          </p>
          <p>
            Para administrar las cookies en los principales navegadores:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
            <li>Firefox: Opciones → Privacidad & Seguridad → Cookies</li>
            <li>Safari: Preferencias → Privacidad</li>
            <li>Edge: Configuración → Privacidad y servicios</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            5. Cookies de Terceros
          </h2>
          <p>
            Utilizamos servicios de terceros que pueden establecer sus propias cookies, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Google Analytics: Para análisis de uso del sitio web</li>
            <li>LinkedIn: Para funcionalidades de redes sociales</li>
            <li>HubSpot: Para marketing y análisis</li>
            <li>Intercom: Para soporte al cliente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            6. Actualizaciones de la Política
          </h2>
          <p>
            Podemos actualizar esta Política de Cookies periódicamente. Le recomendamos que revise esta página regularmente para mantenerse informado sobre cualquier cambio. Los cambios significativos serán notificados en nuestro sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            7. Contacto
          </h2>
          <p>
            Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos en:
          </p>
          <div className="mt-4">
            <p>Email: info@bizflow.pe</p>
            <p>Teléfono: +51 (1) 715-4789</p>
            <p>Dirección: Av. Javier Prado Este 488, San Isidro, Lima, Perú</p>
          </div>
        </section>
      </div>
    </main>
  )
} 