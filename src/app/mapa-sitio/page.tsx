import { Metadata } from 'next'

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
            <li><a href="/" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Inicio</a></li>
            <li><a href="/nosotros" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Nosotros</a></li>
            <li><a href="/servicios" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Servicios</a></li>
            <li><a href="/contacto" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Contacto</a></li>
            <li><a href="/blog" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Blog</a></li>
          </ul>
        </div>

        {/* Sección Servicios */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Servicios</h2>
          <ul className="space-y-3">
            <li><a href="/servicios/software-operativo" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Software Operativo</a></li>
            <li><a href="/servicios/apps-empresariales" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Apps para su Empresa</a></li>
            <li><a href="/servicios/software-as-a-service" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">SaaS (Software as a Service)</a></li>
            <li><a href="/servicios/analitica-industrial" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Analítica Industrial</a></li>
            <li><a href="/servicios/automatizacion" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Automatización</a></li>
            <li><a href="/servicios/integracion" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Integración de Sistemas</a></li>
            <li><a href="/servicios/infraestructura-soporte" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Infraestructura y Soporte</a></li>
          </ul>
        </div>

        {/* Sección Industrias */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Industrias</h2>
          <ul className="space-y-3">
            <li><a href="/industrias/manufactura" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Manufactura</a></li>
            <li><a href="/industrias/farmaceutica" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Farmacéutica</a></li>
            <li><a href="/industrias/mineria" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Minería</a></li>
            <li><a href="/industrias/alimentos-bebidas" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Alimentos y Bebidas</a></li>
          </ul>
        </div>

        {/* Sección Legal */}
        <div>
          <h2 className="text-2xl font-semibold text-bizflow-blue-800 mb-6">Legal</h2>
          <ul className="space-y-3">
            <li><a href="/politica-privacidad" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Política de Privacidad</a></li>
            <li><a href="/terminos-condiciones" className="text-bizflow-blue-600 hover:text-bizflow-purple-600">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
} 