import { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '../../../components/servicios/CrossSelling'
import CtaSection from '../../../components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Automatización Industrial | Bizflow',
  description: 'Transforme sus procesos industriales con soluciones de automatización avanzada. Control preciso, monitoreo SCADA y optimización continua de su operación.',
}

const serviciosRelacionados = [
  {
    titulo: 'Analítica Industrial',
    descripcion: 'Transforme sus datos operativos en insights accionables.',
    href: '/servicios/analitica-industrial',
  },
  {
    titulo: 'Software Operativo',
    descripcion: 'Optimice sus procesos con software especializado para la industria.',
    href: '/servicios/software-operativo',
  },
  {
    titulo: 'Integración de Sistemas',
    descripcion: 'Conecte y sincronice todos sus sistemas y equipos industriales.',
    href: '/servicios/integracion-sistemas',
  },
]

export default function AutomatizacionPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Servicios Relacionados"
        descripcion="Descubra cómo nuestros servicios se complementan para potenciar su transformación digital"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para automatizar su operación?"
        subtitulo="Agende una llamada con nuestros expertos en automatización industrial"
      />
    </main>
  )
} 