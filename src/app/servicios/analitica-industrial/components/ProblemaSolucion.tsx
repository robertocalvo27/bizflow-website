"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProblemaSolucion = () => {
  const problemas = [
    "Datos críticos dispersos en múltiples sistemas y formatos",
    "Reportes manuales que toman horas o días en generarse",
    "Decisiones basadas en intuición más que en datos",
    "Falta de visibilidad en tiempo real de KPIs críticos",
    "Incapacidad de predecir fallas o problemas de calidad",
    "Pérdida de oportunidades de optimización por falta de análisis"
  ]

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
            ¿Por qué la Analítica Industrial es crítica para su operación?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            La diferencia entre operar a ciegas y tomar decisiones basadas en datos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Problemas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-bizflow-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-bizflow-red-900 mb-6 flex items-center">
                <XCircle className="h-8 w-8 text-bizflow-red-500 mr-3" />
                Situación Actual
              </h3>
              <div className="space-y-4">
                {problemas.map((problema, index) => (
                  <div key={index} className="flex items-start">
                    <XCircle className="h-5 w-5 text-bizflow-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-bizflow-gray-700">{problema}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solución */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-bizflow-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-bizflow-green-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-bizflow-green-500 mr-3" />
                Solución Bizflow
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Dashboards en tiempo real personalizados
                    </p>
                    <p className="text-bizflow-gray-700">
                      Visualización instantánea de KPIs críticos con actualización automática
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Analítica predictiva avanzada
                    </p>
                    <p className="text-bizflow-gray-700">
                      Predicción de fallas y problemas de calidad con 85% de precisión
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Integración con cualquier fuente de datos
                    </p>
                    <p className="text-bizflow-gray-700">
                      Conexión automática con sensores, PLCs, ERPs y bases de datos existentes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Reportes automatizados y personalizables
                    </p>
                    <p className="text-bizflow-gray-700">
                      Generación y distribución automática de informes según sus necesidades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Caso de éxito destacado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bizflow-blue-900 rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Caso de Éxito: Ferreyros
              </h3>
              <p className="text-bizflow-blue-100 mb-6">
                Implementamos un sistema de analítica predictiva para su flota de camiones mineros CAT, logrando:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">35% reducción en paradas no planificadas</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">90% precisión en predicción de fallas</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">ROI alcanzado en 3 meses</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/ferreyros-logo.png"
                  alt="Logo Ferreyros"
                  width={120}
                  height={40}
                  className="bg-white rounded-lg p-2"
                  crossOrigin="anonymous"
                />
                <div>
                  <p className="text-white font-medium">Carlos Rodríguez</p>
                  <p className="text-bizflow-blue-200">Gerente de Servicios Digitales</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/ferreyros-cat-trucks.jpg"
                alt="Camiones CAT en operación"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bizflow-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemaSolucion 