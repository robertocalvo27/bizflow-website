import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Apps Empresariales | Bizflow',
  description: 'Transforme sus procesos complejos en flujos digitales simples con apps empresariales desarrolladas por expertos en su industria. Reduzca tiempos de gestión hasta en un 40%.',
}

const serviciosRelacionados = [
  {
    titulo: "Software Operativo",
    descripcion: "Combine sus apps con nuestro software operativo para una solución end-to-end.",
    href: "/servicios/software-operativo"
  },
  {
    titulo: "Infraestructura y Soporte",
    descripcion: "Asegure que sus apps funcionen 24/7 con nuestra infraestructura cloud y soporte especializado.",
    href: "/servicios/infraestructura-soporte"
  },
  {
    titulo: "Analítica Industrial",
    descripcion: "Potencie sus apps con análisis de datos en tiempo real y dashboards personalizados.",
    href: "/servicios/analitica-industrial"
  }
]

export default function AppsEmpresarialesPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling 
        titulo="Servicios Complementarios"
        descripcion="Maximice el valor de sus apps empresariales con estos servicios"
        servicios={serviciosRelacionados}
      />
      <CtaSection 
        titulo="¿Listo para digitalizar sus procesos críticos?"
        subtitulo="Más de 30 empresas en Latinoamérica ya transformaron sus operaciones con nuestras apps. ¿Será la suya la próxima?"
      />
    </main>
  )
} 