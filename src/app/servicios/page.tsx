import React from 'react'
import { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'

export const metadata: Metadata = {
  title: 'Servicios | Bizflow - Software Industrial para Operaciones Ágiles',
  description: 'Descubre nuestras soluciones de software industrial: desde aplicaciones operativas hasta analítica avanzada e integración de sistemas.',
}

export default function ServiciosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
    </main>
  )
} 