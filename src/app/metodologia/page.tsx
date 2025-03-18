import { Metadata } from 'next'
import MethodologyContent from './components/MethodologyContent'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Metodología Ágil | Bizflow - Desarrollo de Software Industrial',
  description: 'Descubra nuestra metodología ágil especializada en software operativo y apps empresariales. Implementación rápida, resultados medibles y mejora continua.',
}

const serviciosRelacionados = [
  {
    titulo: "Software Operativo",
    descripcion: "Soluciones especializadas para optimizar sus procesos operativos industriales.",
    href: "/servicios/software-operativo"
  },
  {
    titulo: "Apps Empresariales",
    descripcion: "Aplicaciones móviles y web diseñadas para su operación específica.",
    href: "/servicios/apps-empresariales"
  },
  {
    titulo: "Automatización",
    descripcion: "Automatice procesos y flujos de trabajo con tecnología de vanguardia.",
    href: "/servicios/automatizacion"
  }
]

export default function MetodologiaPage() {
  return (
    <main>
      <MethodologyContent />
      <CrossSelling
        titulo="Servicios Relacionados"
        descripcion="Descubra cómo aplicamos nuestra metodología en diferentes soluciones"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para transformar su operación?"
        subtitulo="Implementamos soluciones ágiles que generan resultados en semanas, no años."
      />
    </main>
  )
} 