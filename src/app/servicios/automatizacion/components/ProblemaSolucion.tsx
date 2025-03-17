"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProblemaSolucion = () => {
  const problemas = [
    "Procesos manuales propensos a errores",
    "Pérdida de eficiencia y productividad",
    "Dificultad para escalar operaciones",
    "Alto costo operativo por mano de obra",
    "Falta de control y trazabilidad",
    "Riesgos de seguridad industrial"
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
            ¿Por qué automatizar sus procesos industriales?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            La diferencia entre operación manual y automatización inteligente
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
                Operación Manual
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
                Automatización Bizflow
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Control automático preciso
                    </p>
                    <p className="text-bizflow-gray-700">
                      Sistemas de control avanzado con PID y lógica difusa
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Monitoreo SCADA
                    </p>
                    <p className="text-bizflow-gray-700">
                      Visualización y control centralizado de toda su operación
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Integración total
                    </p>
                    <p className="text-bizflow-gray-700">
                      Conexión con PLCs, sensores, actuadores y sistemas empresariales
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Seguridad industrial
                    </p>
                    <p className="text-bizflow-gray-700">
                      Protocolos de seguridad avanzados y redundancia en puntos críticos
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
                Caso de Éxito: Alicorp
              </h3>
              <p className="text-bizflow-blue-100 mb-6">
                Implementamos un sistema de automatización completo en su planta de producción de aceites, logrando:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">40% aumento en productividad</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">60% reducción en errores de proceso</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">ROI alcanzado en 8 meses</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/alicorp-logo.png"
                  alt="Logo Alicorp"
                  width={120}
                  height={40}
                  className="bg-white rounded-lg p-2"
                  crossOrigin="anonymous"
                />
                <div>
                  <p className="text-white font-medium">Ana Martínez</p>
                  <p className="text-bizflow-blue-200">Gerente de Producción</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/alicorp-plant.jpg"
                alt="Planta de Alicorp"
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