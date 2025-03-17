import React from 'react'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata = {
  title: 'Software as a Service (SaaS) | Bizflow',
  description: 'Transforme su software en una plataforma SaaS escalable y rentable. Aumente sus ingresos recurrentes con una solución cloud moderna y segura.',
}

const serviciosRelacionados = [
  {
    titulo: "Software Operativo",
    descripcion: "Modernice sus operaciones con software especializado que reemplaza Excel y sistemas heredados.",
    href: "/servicios/software-operativo"
  },
  {
    titulo: "Apps Empresariales",
    descripcion: "Desarrollamos aplicaciones personalizadas para resolver necesidades únicas de su operación.",
    href: "/servicios/apps-empresariales"
  },
  {
    titulo: "Analítica Industrial",
    descripcion: "Transforme datos operativos en insights accionables con dashboards en tiempo real.",
    href: "/servicios/analitica-industrial"
  }
]

const SoftwareAsAServicePage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling 
        titulo="Servicios relacionados que podrían interesarle"
        descripcion="Explore otras soluciones que complementan nuestra oferta de Software as a Service"
        servicios={serviciosRelacionados}
      />
      <CtaSection 
        titulo="¿Listo para transformar su software en SaaS?"
        subtitulo="Agende una llamada con nuestros expertos y descubra cómo podemos ayudarle a escalar su negocio"
      />
    </main>
  )
}

export default SoftwareAsAServicePage 