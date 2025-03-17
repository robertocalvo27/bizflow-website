import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/shared/CrossSelling'
import CtaSection from '@/components/shared/CtaSection'

export const metadata: Metadata = {
  title: 'Soluciones Digitales para Logística | Bizflow',
  description: 'Optimice su cadena de suministro con nuestras soluciones digitales. Control total de inventario, rutas y entregas con tecnología de vanguardia.',
}

const serviciosRelacionados = [
  {
    titulo: "Mantenimiento",
    descripcion: "Gestión predictiva y preventiva de activos para optimizar la disponibilidad de la flota.",
    href: "/areas-funcionales/mantenimiento"
  },
  {
    titulo: "Producción",
    descripcion: "Sincronice la producción con la demanda y optimice el flujo de materiales.",
    href: "/areas-funcionales/produccion"
  },
  {
    titulo: "Seguridad",
    descripcion: "Garantice la seguridad en el transporte y almacenamiento de mercancías.",
    href: "/areas-funcionales/seguridad"
  }
]

export default function LogisticaPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Áreas Relacionadas"
        descripcion="Descubra cómo nuestras soluciones se integran con otras áreas funcionales"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para optimizar su logística?"
        descripcion="Solicite una demostración personalizada y descubra cómo podemos transformar su operación logística."
        ctaText="Solicitar Demo"
        ctaHref="/contacto"
      />
    </main>
  )
} 