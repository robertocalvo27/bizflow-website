"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'
import ScheduleMeetingModal from '@/components/modals/ScheduleMeetingModal'
import ContactModal from '@/components/modals/ContactModal'

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-bizflow-blue-900 to-bizflow-blue-700 z-0"></div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-bizflow-blue-800 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-bizflow-purple-700 opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-bizflow-blue-600 opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Transforma tus operaciones en semanas, no años
          </h2>
          <p className="text-lg md:text-xl text-bizflow-blue-100 mb-10 max-w-3xl mx-auto">
            Nuestro enfoque industrial y ágil nos permite entregar soluciones personalizadas que generan impacto inmediato. Agenda una consulta sin costo y conoce cómo podemos ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <ScheduleMeetingModal>
              <Button size="lg" className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white font-medium">
                <MessageSquare className="mr-2 h-4 w-4" />
                Agendar llamada
              </Button>
            </ScheduleMeetingModal>
            <ContactModal />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-2">Experiencia práctica</h3>
              <p className="text-bizflow-blue-100">
                Nuestro equipo ha trabajado en minas, plantas médicas y fábricas. Entendemos tus desafíos.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-2">Implementación ágil</h3>
              <p className="text-bizflow-blue-100">
                Soluciones en producción en semanas, no meses. Resultados tangibles rápidamente.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-2">Servicio local</h3>
              <p className="text-bizflow-blue-100">
                Soporte en español con oficinas en Lima, Ciudad de México y Bogotá.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
