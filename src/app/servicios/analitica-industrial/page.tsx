import { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '../../../components/servicios/CrossSelling'
import CtaSection from '../../../components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Analítica Industrial | Bizflow',
  description: 'Transforme sus datos operativos en insights accionables con nuestra solución de analítica industrial. Dashboards en tiempo real, análisis predictivo y KPIs personalizados.',
}

const serviciosRelacionados = [
  {
    titulo: 'Software Operativo',
    descripcion: 'Optimice sus procesos con software especializado para la industria.',
    href: '/servicios/software-operativo',
  },
  {
    titulo: 'Apps Empresariales',
    descripcion: 'Desarrollamos aplicaciones a medida para sus necesidades específicas.',
    href: '/servicios/apps-empresariales',
  },
  {
    titulo: 'Software as a Service',
    descripcion: 'Transforme su software en una plataforma SaaS escalable y rentable.',
    href: '/servicios/software-as-a-service',
  },
]

export default function AnaliticaIndustrialPage() {
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
        titulo="¿Listo para potenciar sus datos?"
        subtitulo="Agende una llamada con nuestros expertos en analítica industrial"
      />
    </main>
  )
} 