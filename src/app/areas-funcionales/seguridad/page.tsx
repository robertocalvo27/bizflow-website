import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Soluciones de Seguridad Industrial | Bizflow',
  description: 'Proteja a su personal y activos con nuestras soluciones digitales de seguridad industrial. Anticipación de riesgos y cumplimiento normativo en tiempo real.',
}

const serviciosRelacionados = [
  {
    titulo: "Recursos Humanos",
    descripcion: "Gestión integral de capacitaciones y certificaciones de seguridad del personal.",
    href: "/areas-funcionales/recursos-humanos"
  },
  {
    titulo: "Mantenimiento",
    descripcion: "Mantenimiento preventivo para garantizar la seguridad de equipos y maquinaria.",
    href: "/areas-funcionales/mantenimiento"
  },
  {
    titulo: "Producción",
    descripcion: "Integración de protocolos de seguridad en los procesos productivos.",
    href: "/areas-funcionales/produccion"
  }
]

export default function SeguridadPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Áreas Relacionadas"
        descripcion="Descubra cómo nuestras soluciones de seguridad se integran con otras áreas funcionales"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para elevar su seguridad industrial?"
        subtitulo="Solicite una demostración personalizada y descubra cómo podemos ayudarle a proteger mejor su operación."
      />
    </main>
  )
} 