import { Metadata } from "next"
import Hero from "./components/Hero"
import ProblemaSolucion from "./components/ProblemaSolucion"
import CrossSelling from "@/components/servicios/CrossSelling"
import CtaSection from "@/components/servicios/CtaSection"

export const metadata: Metadata = {
  title: "Manufactura Digital e Inteligente | BizFlow",
  description: "Transforme su planta manufacturera con soluciones digitales que optimizan la producción, reducen costos y mejoran la calidad. Impulse su competitividad con Industria 4.0.",
}

const serviciosRelacionados = [
  {
    titulo: "Mantenimiento",
    descripcion: "Maximice la disponibilidad de sus activos con mantenimiento predictivo.",
    href: "/areas-funcionales/mantenimiento"
  },
  {
    titulo: "Producción",
    descripcion: "Optimice sus procesos productivos con soluciones digitales inteligentes.",
    href: "/areas-funcionales/produccion"
  },
  {
    titulo: "Logística",
    descripcion: "Gestione su cadena de suministro con visibilidad en tiempo real.",
    href: "/areas-funcionales/logistica"
  }
]

const ManufacturaPage = () => {
  return (
    <main>
      <Hero />
      <ProblemaSolucion />
      <CrossSelling
        titulo="Servicios Relacionados"
        descripcion="Descubra cómo nuestras soluciones se integran para optimizar todas sus operaciones"
        servicios={serviciosRelacionados}
      />
      <CtaSection
        titulo="¿Listo para transformar su manufactura?"
        subtitulo="Comience hoy mismo a digitalizar y optimizar sus operaciones manufactureras"
      />
    </main>
  )
}

export default ManufacturaPage 