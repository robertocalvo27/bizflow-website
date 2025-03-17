"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bizflow-gray-100 to-bizflow-gray-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-bizflow-gray-900 mb-6">
              Seguridad Industrial
              <br />
              <span className="text-bizflow-blue-600">Inteligente y Proactiva</span>
            </h1>
            <p className="text-lg text-bizflow-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Proteja a su personal y activos con soluciones digitales que anticipan riesgos y garantizan el cumplimiento normativo en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700">
                Optimizar Seguridad
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-2xl font-bold text-bizflow-blue-600 mb-2">99.9%</h3>
                <p className="text-bizflow-gray-600">Índice de Seguridad</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-2xl font-bold text-bizflow-blue-600 mb-2">-85%</h3>
                <p className="text-bizflow-gray-600">Incidentes Prevenidos</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/security-dashboard.webp"
                alt="Dashboard de Seguridad Industrial"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bizflow-blue-50 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-bizflow-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-bizflow-gray-900 mb-1">
                    Control Total
                  </h4>
                  <p className="text-sm text-bizflow-gray-600">
                    Monitoreo en tiempo real de indicadores de seguridad y alertas preventivas
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 