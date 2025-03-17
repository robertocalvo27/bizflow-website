import { Metadata } from "next"
import Hero from "./components/Hero"
import ProblemaSolucion from "./components/ProblemaSolucion"
import CrossSelling from "@/components/servicios/CrossSelling"
import CtaSection from "@/components/servicios/CtaSection"

export const metadata: Metadata = {
  title: "Farmacéutica Digital y Regulada | BizFlow",
  description: "Transforme sus operaciones farmacéuticas con soluciones digitales que garantizan cumplimiento regulatorio, trazabilidad y eficiencia en la producción de medicamentos.",
}

const serviciosRelacionados = [
  {
    titulo: "Manufactura",
    descripcion: "Optimice sus procesos de manufactura con soluciones digitales inteligentes.",
    href: "/industrias/manufactura"
  },
  {
    titulo: "Calidad",
    descripcion: "Asegure la calidad de sus productos con sistemas digitales avanzados.",
    href: "/areas-funcionales/calidad"
  },
  {
    titulo: "Logística",
    descripcion: "Gestione su cadena de suministro farmacéutica con trazabilidad total.",
    href: "/areas-funcionales/logistica"
  }
]

const FarmaceuticaPage = () => {
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
        titulo="¿Listo para digitalizar su laboratorio?"
        subtitulo="Comience hoy mismo a transformar sus operaciones farmacéuticas con nuestras soluciones digitales"
      />
    </main>
  )
}

export default FarmaceuticaPage 