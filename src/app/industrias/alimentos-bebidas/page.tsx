import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Alimentos y Bebidas | Soluciones Digitales para la Industria Alimentaria',
  description: 'Transforme su industria alimentaria con soluciones digitales que garantizan calidad, trazabilidad y eficiencia. Optimice la producción y asegure los más altos estándares de calidad.'
}

const serviciosRelacionados = [
  {
    titulo: 'Producción',
    descripcion: 'Optimización inteligente de procesos productivos.',
    href: '/areas-funcionales/produccion'
  },
  {
    titulo: 'Calidad',
    descripcion: 'Control de calidad automatizado y trazabilidad total.',
    href: '/areas-funcionales/calidad'
  },
  {
    titulo: 'Logística',
    descripcion: 'Gestión eficiente de la cadena de suministro alimentaria.',
    href: '/areas-funcionales/logistica'
  }
]

const AlimentosBebidasPage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Servicios Relacionados"
        descripcion="Descubra cómo nuestras soluciones se integran para optimizar cada aspecto de su producción alimentaria"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para Transformar su Producción Alimentaria?"
        subtitulo="Contáctenos hoy para descubrir cómo nuestras soluciones digitales pueden optimizar su industria"
      />
    </main>
  )
}

export default AlimentosBebidasPage 