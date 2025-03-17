"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProblemaSolucion = () => {
  const problemas = [
    "Interrupciones no planificadas del servicio",
    "Tiempos de respuesta lentos ante incidentes",
    "Falta de monitoreo proactivo",
    "Infraestructura obsoleta o mal dimensionada",
    "Vulnerabilidades de seguridad",
    "Costos elevados de mantenimiento"
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
            ¿Por qué necesita soporte tecnológico profesional?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            La diferencia entre reaccionar a problemas y prevenirlos proactivamente
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
                Sin Soporte Profesional
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
                Soporte Bizflow
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Monitoreo 24/7
                    </p>
                    <p className="text-bizflow-gray-700">
                      Detección y resolución proactiva de problemas antes que afecten su operación
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Respuesta inmediata
                    </p>
                    <p className="text-bizflow-gray-700">
                      Equipo técnico especializado disponible 24/7 con tiempos de respuesta garantizados
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Optimización continua
                    </p>
                    <p className="text-bizflow-gray-700">
                      Análisis y mejora constante de su infraestructura para máximo rendimiento
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Seguridad integral
                    </p>
                    <p className="text-bizflow-gray-700">
                      Protección avanzada contra amenazas y respaldo continuo de datos críticos
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
                Caso de Éxito: Clínica Internacional
              </h3>
              <p className="text-bizflow-blue-100 mb-6">
                Implementamos una solución integral de infraestructura y soporte para su red de clínicas, logrando:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">99.99% de disponibilidad de sistemas críticos</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">70% reducción en tiempo de resolución de incidentes</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">30% reducción en costos operativos de TI</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/clinica-internacional-logo.png"
                  alt="Logo Clínica Internacional"
                  width={120}
                  height={40}
                  className="bg-white rounded-lg p-2"
                  crossOrigin="anonymous"
                />
                <div>
                  <p className="text-white font-medium">Ricardo Sánchez</p>
                  <p className="text-bizflow-blue-200">Gerente de TI</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/clinica-internacional.jpg"
                alt="Sede Clínica Internacional"
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