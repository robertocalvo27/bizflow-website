import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Soluciones de Producción Industrial | Bizflow',
  description: 'Optimice su producción con nuestras soluciones digitales. Automatización inteligente, control de calidad predictivo y eficiencia operativa maximizada.',
}

const serviciosRelacionados = [
  {
    titulo: "Mantenimiento",
    descripcion: "Mantenimiento predictivo para maximizar la disponibilidad de equipos.",
    href: "/areas-funcionales/mantenimiento"
  },
  {
    titulo: "Logística",
    descripcion: "Gestión eficiente de materiales y productos terminados.",
    href: "/areas-funcionales/logistica"
  },
  {
    titulo: "Seguridad",
    descripcion: "Integración de protocolos de seguridad en la producción.",
    href: "/areas-funcionales/seguridad"
  }
]

export default function ProduccionPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Áreas Relacionadas"
        descripcion="Descubra cómo nuestras soluciones de producción se integran con otras áreas funcionales"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para transformar su producción?"
        subtitulo="Solicite una demostración personalizada y descubra cómo podemos optimizar su planta productiva."
      />
    </main>
  )
} 