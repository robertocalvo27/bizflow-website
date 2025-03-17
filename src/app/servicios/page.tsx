import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios | Bizflow - Software Industrial para Operaciones Ágiles',
  description: 'Descubre nuestras soluciones de software industrial: desde aplicaciones operativas hasta analítica avanzada e integración de sistemas.',
}

export default function ServiciosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-bizflow-blue-900 mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-bizflow-gray-600">
              Soluciones tecnológicas diseñadas para transformar sus operaciones industriales
            </p>
          </div>
          
          {/* Contenido adicional se agregará en el branch dedicado a la página de servicios */}
        </div>
      </section>
    </main>
  )
} 