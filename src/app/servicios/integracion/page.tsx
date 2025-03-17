import React from 'react'
import Hero from './components/Hero'
import ProblemaSolucion from './components/ProblemaSolucion'
import CrossSelling from '@/components/servicios/CrossSelling'
import CtaSection from '@/components/servicios/CtaSection'

export const metadata = {
  title: 'Integración de Sistemas | Bizflow',
  description: 'Conecte sus sistemas empresariales para una vista unificada de sus operaciones. Integración con SAP, SCADA, MES y más.',
}

const serviciosRelacionados = [
  {
    titulo: "Software Operativo",
    descripcion: "Modernice sus operaciones con software especializado que reemplaza Excel y sistemas heredados.",
    href: "/servicios/software-operativo"
  },
  {
    titulo: "Analítica Industrial",
    descripcion: "Transforme datos operativos en insights accionables con dashboards en tiempo real.",
    href: "/servicios/analitica-industrial"
  },
  {
    titulo: "Software as a Service",
    descripcion: "Transforme su software en una plataforma SaaS escalable y rentable.",
    href: "/servicios/software-as-a-service"
  }
]

const IntegracionPage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling 
        titulo="Servicios relacionados que podrían interesarle"
        descripcion="Explore otras soluciones que complementan nuestra oferta de Integración de Sistemas"
        servicios={serviciosRelacionados}
      />
      <CtaSection 
        titulo="¿Listo para integrar sus sistemas?"
        subtitulo="Agende una llamada con nuestros expertos y descubra cómo podemos ayudarle a unificar sus operaciones"
      />
    </main>
  )
}

export default IntegracionPage 