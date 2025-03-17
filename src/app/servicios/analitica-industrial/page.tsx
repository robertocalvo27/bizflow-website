import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Analítica Industrial | Bizflow',
  description: 'Transforme sus datos operativos en decisiones estratégicas con nuestra plataforma de analítica industrial. Mejore la eficiencia y reduzca costos con insights en tiempo real.',
}

const serviciosRelacionados = [
  {
    titulo: "Software Operativo",
    descripcion: "Automatice sus procesos operativos con software especializado para su industria.",
    href: "/servicios/software-operativo"
  },
  {
    titulo: "Apps Empresariales",
    descripcion: "Desarrollamos aplicaciones que digitalizan sus procesos críticos.",
    href: "/servicios/apps-empresariales"
  },
  {
    titulo: "Consultoría Digital",
    descripcion: "Asesoramiento experto para optimizar sus procesos y tecnología.",
    href: "/servicios/consultoria-digital"
  }
]

export default function AnaliticaIndustrialPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling 
        titulo="Servicios Relacionados"
        descripcion="Descubra cómo nuestras otras soluciones pueden complementar su transformación digital"
        servicios={serviciosRelacionados}
      />
      <CtaSection 
        titulo="¿Listo para tomar decisiones basadas en datos?"
        subtitulo="Agende una llamada con nuestros expertos y descubra cómo podemos ayudarle a optimizar su operación con analítica avanzada."
      />
    </main>
  )
} 