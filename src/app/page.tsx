import React from 'react'
import Hero from '@/components/home/Hero'
import ServicesSection from '@/components/home/ServicesSection'
import TrustSection from '@/components/home/TrustSection'
import CasesSection from '@/components/home/CasesSection'
import BlogSection from '@/components/home/BlogSection'
import CtaSection from '@/components/home/CtaSection'
import FaqSection from '@/components/home/FaqSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bizflow | Software Industrial para Operaciones Ágiles',
  description: 'Transformamos operaciones industriales con soluciones de software ágiles que reemplazan Excel y SAP complicado, implementadas en semanas, no años.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServicesSection />
      <TrustSection />
      <CasesSection />
      <BlogSection />
      <CtaSection />
      <FaqSection />
    </main>
  )
}
