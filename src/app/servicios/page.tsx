'use client'

import React from 'react'
import HeroSection from './components/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'

export default function ServiciosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection showAllServices={true} />
    </main>
  )
} 