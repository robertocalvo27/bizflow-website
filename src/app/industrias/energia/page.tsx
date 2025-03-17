import { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Energía | Soluciones Digitales para la Industria Energética',
  description: 'Optimice su gestión energética con nuestras soluciones digitales. Maximice la eficiencia, reduzca costos y mejore la sostenibilidad con tecnología de punta.'
}

const serviciosRelacionados = [
  {
    titulo: 'Producción',
    descripcion: 'Optimice sus procesos de generación y distribución energética con soluciones digitales inteligentes.',
    href: '/areas-funcionales/produccion'
  },
  {
    titulo: 'Mantenimiento',
    descripcion: 'Implemente mantenimiento predictivo para maximizar la disponibilidad de sus activos energéticos.',
    href: '/areas-funcionales/mantenimiento'
  },
  {
    titulo: 'Calidad',
    descripcion: 'Asegure el cumplimiento de estándares y regulaciones en sus operaciones energéticas.',
    href: '/areas-funcionales/calidad'
  }
]

const EnergiaPage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Áreas Funcionales Relacionadas"
        descripcion="Explore nuestras soluciones específicas para cada área funcional de su empresa energética"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para Transformar su Gestión Energética?"
        subtitulo="Descubra cómo nuestras soluciones pueden ayudarle a optimizar su consumo energético y reducir costos operativos."
      />
    </main>
  )
}

export default EnergiaPage 