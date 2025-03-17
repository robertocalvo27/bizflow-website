import { Metadata } from "next"
import Hero from "./components/Hero"
import AdnIndustrial from "./components/AdnIndustrial"
import DondeEstamos from "./components/DondeEstamos"
import Certificaciones from "./components/Certificaciones"
import Valores from "./components/Valores"
import Equipo from "./components/Equipo"

export const metadata: Metadata = {
  title: "Acerca de Bizflow | Expertos en Software Industrial",
  description:
    "Desde 2010, transformamos operaciones industriales en Latinoamérica con software especializado. Conozca nuestro equipo de expertos con experiencia práctica en su industria.",
}

export default function AcercaDePage() {
  return (
    <main>
      <Hero />
      <AdnIndustrial />
      <DondeEstamos />
      <Certificaciones />
      <Valores />
      <Equipo />
    </main>
  )
} 