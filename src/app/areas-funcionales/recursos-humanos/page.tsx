import { Metadata } from 'next'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata: Metadata = {
  title: 'Recursos Humanos | Bizflow - Soluciones Digitales para RRHH',
  description: 'Transforme la gestión de recursos humanos con soluciones digitales inteligentes. Automatice procesos, mejore la experiencia del empleado y optimice el desarrollo del talento.',
}

const serviciosRelacionados = [
  {
    titulo: "Software Operativo",
    descripcion: "Integre sus procesos de RRHH con el core de su negocio",
    href: "/servicios/software-operativo"
  },
  {
    titulo: "Apps para su Empresa",
    descripcion: "Aplicaciones personalizadas para sus necesidades específicas",
    href: "/servicios/apps-empresariales"
  },
  {
    titulo: "Analítica Industrial",
    descripcion: "Insights basados en datos para mejores decisiones",
    href: "/servicios/analitica-industrial"
  }
]

export default function RecursosHumanosPage() {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling 
        titulo="Potencie su Área de RRHH"
        descripcion="Explore nuestras soluciones complementarias para maximizar el potencial de su departamento de Recursos Humanos"
        servicios={serviciosRelacionados}
      />
      <CtaSection 
        titulo="¿Listo para Transformar su Gestión de RRHH?"
        descripcion="Agende una llamada con nuestros expertos y descubra cómo podemos ayudarle a optimizar sus procesos de recursos humanos"
        textoBoton="Agendar Llamada"
      />
    </main>
  )
} 