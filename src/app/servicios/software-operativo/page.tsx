import type { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Software Operativo | Bizflow',
  description: 'Automatice y optimice sus procesos operativos con nuestro software especializado. Mejore la eficiencia y reduzca errores en su operación.',
}

const serviciosRelacionados = [
  {
    titulo: "Automatización de Procesos",
    descripcion: "Elimine tareas manuales y repetitivas con nuestras soluciones de automatización.",
    href: "/servicios/automatizacion-procesos"
  },
  {
    titulo: "Desarrollo a Medida",
    descripcion: "Software personalizado que se adapta perfectamente a sus necesidades específicas.",
    href: "/servicios/desarrollo-medida"
  },
  {
    titulo: "Consultoría Digital",
    descripcion: "Asesoramiento experto para optimizar sus procesos y tecnología.",
    href: "/servicios/consultoria-digital"
  }
]

export default function SoftwareOperativoPage() {
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
        titulo="¿Listo para optimizar sus operaciones?"
        subtitulo="Agende una llamada con nuestros expertos y descubra cómo podemos ayudarle a transformar sus procesos operativos."
      />
    </main>
  )
} 