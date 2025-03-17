import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Bizflow',
  description: 'Conoce los términos y condiciones que rigen el uso de nuestros servicios y soluciones de software industrial.',
}

export default function TerminosCondiciones() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-bizflow-blue-950 mb-8">
        Términos y Condiciones
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            1. Aceptación de los Términos
          </h2>
          <p>
            Al acceder y utilizar los servicios de Bizflow, incluyendo nuestras soluciones de software industrial, aplicaciones empresariales y servicios SaaS, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            2. Descripción de los Servicios
          </h2>
          <p className="mb-4">
            Bizflow proporciona los siguientes servicios:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Software operativo personalizado</li>
            <li>Aplicaciones empresariales a medida</li>
            <li>Soluciones SaaS (Software as a Service)</li>
            <li>Servicios de analítica industrial</li>
            <li>Automatización de procesos</li>
            <li>Integración de sistemas</li>
            <li>Infraestructura y soporte técnico remoto</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            3. Licencias y Uso del Servicio
          </h2>
          <p className="mb-4">
            Bizflow otorga una licencia limitada, no exclusiva, no transferible y revocable para:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Utilizar el software y servicios según los términos del contrato específico</li>
            <li>Acceder a las funcionalidades contratadas</li>
            <li>Generar y gestionar datos dentro de las aplicaciones</li>
            <li>Recibir actualizaciones y soporte técnico según el plan contratado</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            4. Propiedad Intelectual
          </h2>
          <p>
            Todo el software, código, metodologías y materiales proporcionados por Bizflow están protegidos por derechos de propiedad intelectual. Los clientes mantienen la propiedad de sus datos y contenidos generados durante el uso de nuestros servicios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            5. Responsabilidades del Cliente
          </h2>
          <p className="mb-4">
            El cliente se compromete a:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
            <li>Utilizar los servicios de acuerdo con las leyes aplicables</li>
            <li>No realizar ingeniería inversa del software</li>
            <li>No interferir con la seguridad o funcionamiento de los servicios</li>
            <li>Mantener actualizados sus datos de contacto y facturación</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            6. Soporte y Mantenimiento
          </h2>
          <p>
            Bizflow proporciona soporte técnico y mantenimiento según los niveles de servicio acordados en cada contrato. Nos comprometemos a mantener un tiempo de actividad del servicio según los SLAs establecidos y a resolver incidencias en los tiempos acordados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            7. Confidencialidad y Seguridad
          </h2>
          <p>
            Nos comprometemos a mantener la confidencialidad de la información del cliente y a implementar medidas de seguridad adecuadas, respaldadas por nuestras certificaciones ISO 27001 y ISO 9001. Los detalles específicos se encuentran en nuestra Política de Privacidad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            8. Modificaciones y Terminación
          </h2>
          <p>
            Bizflow se reserva el derecho de modificar estos términos con previo aviso. Los clientes serán notificados de cambios significativos. El servicio puede terminarse según las condiciones establecidas en el contrato específico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-bizflow-blue-900 mb-4">
            9. Contacto
          </h2>
          <p>
            Para consultas sobre estos términos y condiciones, puede contactarnos en:
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