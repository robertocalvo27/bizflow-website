import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Minería Digital | Soluciones Inteligentes para la Industria Minera',
  description: 'Transforme sus operaciones mineras con soluciones digitales que maximizan la productividad, seguridad y sostenibilidad. Optimice la extracción y procesamiento de minerales con tecnología de punta.'
}

const serviciosRelacionados = [
  {
    titulo: 'Mantenimiento',
    descripcion: 'Mantenimiento predictivo para equipos mineros y flotas de vehículos.',
    href: '/areas-funcionales/mantenimiento'
  },
  {
    titulo: 'Seguridad',
    descripcion: 'Sistemas de seguridad inteligente para operaciones mineras.',
    href: '/areas-funcionales/seguridad'
  },
  {
    titulo: 'Logística',
    descripcion: 'Optimización de la cadena de suministro en minería.',
    href: '/areas-funcionales/logistica'
  }
]

const MineriaPage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Servicios Relacionados"
        descripcion="Descubra cómo nuestras soluciones se integran para optimizar cada aspecto de su operación minera"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para Transformar su Operación Minera?"
        subtitulo="Contáctenos hoy para descubrir cómo nuestras soluciones digitales pueden optimizar su operación minera"
      />
    </main>
  )
}

export default MineriaPage 