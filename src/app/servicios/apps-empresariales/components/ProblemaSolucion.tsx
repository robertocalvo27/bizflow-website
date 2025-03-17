"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProblemaSolucion = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bizflow-blue-900 mb-6">
            ¿Por qué Apps Empresariales es crítico para su operación?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Descubra cómo nuestras apps personalizadas resuelven los desafíos más comunes en industrias complejas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problemas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-bizflow-blue-800 mb-8">
              Problemas comunes en la gestión de procesos
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-bizflow-gray-900 mb-2">
                    Procesos críticos dependen de múltiples sistemas desconectados
                  </p>
                  <p className="text-bizflow-gray-600">
                    Su equipo pierde tiempo valioso saltando entre aplicaciones y copiando datos manualmente
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-bizflow-gray-900 mb-2">
                    Desarrollo de apps tradicional demasiado lento
                  </p>
                  <p className="text-bizflow-gray-600">
                    Esperar 6-12 meses por una app no es viable cuando la operación necesita soluciones ahora
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-bizflow-gray-900 mb-2">
                    Apps genéricas que no se adaptan a su industria
                  </p>
                  <p className="text-bizflow-gray-600">
                    Las soluciones estándar no consideran las particularidades de industrias como minería o manufactura
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solución */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-bizflow-blue-800 mb-8">
              La solución Bizflow
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-bizflow-gray-900 mb-2">
                    Apps que unifican todos sus procesos
                  </p>
                  <p className="text-bizflow-gray-600">
                    Integramos sus sistemas existentes en una sola interfaz intuitiva, eliminando la necesidad de cambiar entre aplicaciones
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-bizflow-gray-900 mb-2">
                    Desarrollo ágil con resultados rápidos
                  </p>
                  <p className="text-bizflow-gray-600">
                    Entregamos apps funcionales en 4-6 semanas con nuestro enfoque de desarrollo iterativo y MVP
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-bizflow-gray-900 mb-2">
                    Experiencia específica en su industria
                  </p>
                  <p className="text-bizflow-gray-600">
                    Nuestro equipo incluye expertos que han trabajado en el campo y entienden sus necesidades únicas
                  </p>
                </div>
              </div>
            </div>

            {/* Caso de éxito */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-bizflow-gray-50 rounded-lg p-6 mt-8"
            >
              <div className="flex items-start space-x-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/images/smith-nephew-logo.png"
                    alt="Logo de Smith & Nephew"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-bizflow-blue-900 mb-2">
                    Caso de éxito: Smith & Nephew
                  </h4>
                  <p className="text-bizflow-gray-600 mb-4">
                    Desarrollamos una app de trazabilidad que automatiza el seguimiento de 50,000 lotes/año, cumpliendo con regulaciones FDA y reduciendo errores de documentación en un 95%.
                  </p>
                  <div className="flex items-center text-bizflow-blue-600 font-medium">
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemaSolucion 