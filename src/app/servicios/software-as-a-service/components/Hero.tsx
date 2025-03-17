"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import ScheduleMeetingModal from '@/components/modals/ScheduleMeetingModal'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bizflow-blue-50 to-white z-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizflow-blue-900 mb-6">
              Software as a Service diseñado para escalar su negocio
            </h1>
            <p className="text-xl text-bizflow-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transforme sus soluciones en productos SaaS rentables. Nuestros clientes incrementan sus ingresos recurrentes hasta un 45% con plataformas cloud escalables y seguras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <ScheduleMeetingModal>
                <Button size="lg" className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white">
                  Transforme su software <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScheduleMeetingModal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-bizflow-green-500 flex-shrink-0 mt-1" />
                <p className="text-bizflow-gray-700">Arquitectura Cloud Native</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-bizflow-green-500 flex-shrink-0 mt-1" />
                <p className="text-bizflow-gray-700">Multi-tenancy seguro</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-bizflow-green-500 flex-shrink-0 mt-1" />
                <p className="text-bizflow-gray-700">Facturación recurrente</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-bizflow-green-500 flex-shrink-0 mt-1" />
                <p className="text-bizflow-gray-700">Escalabilidad automática</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/saas-platform-dashboard.png"
                alt="Dashboard de Plataforma SaaS"
                fill
                className="object-cover"
                priority
                crossOrigin="anonymous"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-bizflow-green-100 p-2 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-bizflow-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-bizflow-blue-900 mb-1">Expertos en arquitectura SaaS</h3>
                  <p className="text-sm text-bizflow-gray-600">
                    Diseñamos plataformas que crecen con su negocio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 