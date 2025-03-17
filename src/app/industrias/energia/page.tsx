import { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/shared/CrossSelling'
import CtaSection from '@/components/shared/CtaSection'

export const metadata: Metadata = {
  title: 'Energía | Soluciones Digitales para la Industria Energética',
  description: 'Optimice su gestión energética con nuestras soluciones digitales. Maximice la eficiencia, reduzca costos y mejore la sostenibilidad con tecnología de punta.'
}

const serviciosRelacionados = [
  {
    title: 'Producción',
    description: 'Optimice sus procesos de generación y distribución energética con soluciones digitales inteligentes.',
    href: '/areas-funcionales/produccion'
  },
  {
    title: 'Mantenimiento',
    description: 'Implemente mantenimiento predictivo para maximizar la disponibilidad de sus activos energéticos.',
    href: '/areas-funcionales/mantenimiento'
  },
  {
    title: 'Calidad',
    description: 'Asegure el cumplimiento de estándares y regulaciones en sus operaciones energéticas.',
    href: '/areas-funcionales/calidad'
  }
]

const EnergiaPage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        title="Áreas Funcionales Relacionadas"
        description="Explore nuestras soluciones específicas para cada área funcional de su empresa energética"
        services={serviciosRelacionados}
      />
      <CtaSection />
    </main>
  )
}

export default EnergiaPage 