import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mapa del Sitio | Bizflow',
  description: 'Explora todas las secciones y páginas de Bizflow. Encuentra fácilmente la información que necesitas sobre nuestros servicios, industrias y recursos.',
}

export default function SiteMapPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-bizflow-blue-900 mb-12">Mapa del Sitio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Sección Principal */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Principal</h2>
          <ul className="space-y-3">
            <li><Link href="/" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Inicio</Link></li>
            <li><Link href="/nosotros" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Nosotros</Link></li>
            <li><Link href="/servicios" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Servicios</Link></li>
            <li><Link href="/contacto" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Contacto</Link></li>
            <li><Link href="/blog" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Blog</Link></li>
          </ul>
        </div>

        {/* Sección Servicios */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Servicios</h2>
          <ul className="space-y-3">
            <li><Link href="/servicios/software-operativo" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Software Operativo</Link></li>
            <li><Link href="/servicios/apps-empresariales" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Apps para su Empresa</Link></li>
            <li><Link href="/servicios/software-as-a-service" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">SaaS (Software as a Service)</Link></li>
            <li><Link href="/servicios/analitica-industrial" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Analítica Industrial</Link></li>
            <li><Link href="/servicios/automatizacion" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Automatización</Link></li>
            <li><Link href="/servicios/integracion" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Integración de Sistemas</Link></li>
            <li><Link href="/servicios/infraestructura-soporte" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Infraestructura y Soporte</Link></li>
          </ul>
        </div>

        {/* Sección Industrias */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Industrias</h2>
          <ul className="space-y-3">
            <li><Link href="/industrias/manufactura" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Manufactura</Link></li>
            <li><Link href="/industrias/farmaceutica" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Farmacéutica</Link></li>
            <li><Link href="/industrias/mineria" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Minería</Link></li>
            <li><Link href="/industrias/alimentos-bebidas" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Alimentos y Bebidas</Link></li>
          </ul>
        </div>

        {/* Sección Legal */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Legal</h2>
          <ul className="space-y-3">
            <li><Link href="/politica-privacidad" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Política de Privacidad</Link></li>
            <li><Link href="/terminos-condiciones" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Términos y Condiciones</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 