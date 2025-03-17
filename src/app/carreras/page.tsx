import React from 'react'
import type { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import JobsSection from './components/JobsSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CultureSection from './components/CultureSection'
import { CtaSection } from '@/components/shared/CtaSection'

export const metadata: Metadata = {
  title: 'Carreras | Únete al equipo de Bizflow',
  description: 'Explora oportunidades profesionales en Bizflow. Desarrolla soluciones tecnológicas que transforman industrias reales como minería, farmacéutica, alimentos y energía.',
}

const CarrerasPage = () => {
  return (
    <main>
      <HeroSection />
      <JobsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CultureSection />
      <CtaSection 
        title="¿Listo para dar el siguiente paso en tu carrera?" 
        description="Únete a un equipo apasionado por la tecnología y la innovación industrial."
        primaryButtonText="Ver vacantes disponibles"
        primaryButtonHref="#jobs"
        secondaryButtonText="Contáctanos"
        secondaryButtonHref="/contacto"
        withPattern={true}
      />
    </main>
  )
}

export default CarrerasPage 