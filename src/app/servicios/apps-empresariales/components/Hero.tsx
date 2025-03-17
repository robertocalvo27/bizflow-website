"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bizflow-blue-900 to-bizflow-blue-800">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Apps Empresariales que transforman procesos complejos en flujos digitales simples
              </h1>
              <p className="text-xl text-bizflow-blue-100 mb-8">
                Desarrollamos aplicaciones que digitalizan sus procesos críticos en tiempo récord. Nuestros clientes reducen hasta un 40% el tiempo de gestión con apps intuitivas y conectadas a sus sistemas existentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-bizflow-purple-400 flex-shrink-0 mt-1" />
                <p className="text-bizflow-blue-100">
                  <span className="font-semibold text-white">Desarrollo Ágil:</span> Entregamos MVPs funcionales en 4-6 semanas, no en meses
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-bizflow-purple-400 flex-shrink-0 mt-1" />
                <p className="text-bizflow-blue-100">
                  <span className="font-semibold text-white">Integración Total:</span> Conectamos su app con SAP, Oracle, y sistemas legacy sin problemas
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-bizflow-purple-400 flex-shrink-0 mt-1" />
                <p className="text-bizflow-blue-100">
                  <span className="font-semibold text-white">Experiencia Industrial:</span> Apps diseñadas por expertos que entienden su operación
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/apps-empresariales-comparison.png"
                alt="Comparación entre una app empresarial moderna y sistemas tradicionales"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Success badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[240px]"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/kimberly-clark-logo.png"
                  alt="Logo de Kimberly Clark"
                  width={48}
                  height={48}
                  className="rounded"
                />
                <div>
                  <p className="text-sm font-medium text-bizflow-blue-900">Kimberly Clark</p>
                  <p className="text-sm text-bizflow-gray-600">40% menos tiempo en gestión de mantenimiento</p>
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