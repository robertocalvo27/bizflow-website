import { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '../../../components/servicios/CrossSelling'
import CtaSection from '../../../components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Infraestructura y Soporte | Bizflow',
  description: 'Mantenga su infraestructura tecnológica funcionando al máximo rendimiento con nuestro servicio integral de soporte y mantenimiento 24/7.',
}

const serviciosRelacionados = [
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
  {
    titulo: 'Automatización Industrial',
    descripcion: 'Transforme sus procesos con soluciones de automatización avanzada.',
    href: '/servicios/automatizacion',
  },
]

export default function InfraestructuraSoportePage() {
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
        titulo="¿Listo para optimizar su infraestructura?"
        subtitulo="Agende una llamada con nuestros expertos en soporte tecnológico"
      />
    </main>
  )
} 