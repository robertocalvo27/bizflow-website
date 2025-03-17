'use client'

import React from 'react'
import HeroSection from './HeroSection'
import ServicesSection from '@/components/home/ServicesSection'

const ServiciosContent = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection showAllServices={true} />
    </main>
  )
}

export default ServiciosContent 