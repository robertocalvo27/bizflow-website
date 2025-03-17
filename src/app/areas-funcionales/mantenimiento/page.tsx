import { Metadata } from "next"
import Hero from "./components/Hero"
import ProblemaSolucion from "./components/ProblemaSolucion"
import CrossSelling from "@/components/servicios/CrossSelling"
import CtaSection from "@/components/servicios/CtaSection"

export const metadata: Metadata = {
  title: "Mantenimiento Industrial Digital | BizFlow",
  description: "Maximice la disponibilidad de sus activos con nuestras soluciones digitales de mantenimiento predictivo. Reduzca costos y prevenga fallas con IA e IoT.",
}

const serviciosRelacionados = [
  {
    titulo: "Producción",
    descripcion: "Optimice sus procesos productivos con soluciones digitales inteligentes.",
    href: "/areas-funcionales/produccion"
  },
  {
    titulo: "Logística",
    descripcion: "Gestione su cadena de suministro con visibilidad en tiempo real.",
    href: "/areas-funcionales/logistica"
  },
  {
    titulo: "Seguridad",
    descripcion: "Proteja sus operaciones con sistemas de seguridad industrial inteligentes.",
    href: "/areas-funcionales/seguridad"
  }
]

const MantenimientoPage = () => {
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
        titulo="¿Listo para optimizar su mantenimiento?"
        subtitulo="Comience hoy mismo a transformar su gestión de mantenimiento con nuestras soluciones digitales"
      />
    </main>
  )
}

export default MantenimientoPage 