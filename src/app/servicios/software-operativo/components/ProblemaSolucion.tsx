"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProblemaSolucion = () => {
  const problemas = [
    "Su equipo pierde horas actualizando hojas de cálculo manuales",
    "Los datos críticos están dispersos en múltiples archivos Excel",
    "No hay trazabilidad de cambios ni control de versiones",
    "Errores humanos frecuentes en el ingreso de datos",
    "Imposible obtener reportes en tiempo real",
    "Dificultad para cumplir con auditorías y regulaciones"
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
            ¿Por qué el Software Operativo es crítico para su operación?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            La diferencia entre perder tiempo con Excel y tener una operación digitalizada eficiente
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
                      Interfaz intuitiva diseñada para operarios
                    </p>
                    <p className="text-bizflow-gray-700">
                      Reducción del 70% en tiempo de capacitación vs. sistemas tradicionales
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Datos centralizados y seguros
                    </p>
                    <p className="text-bizflow-gray-700">
                      100% de trazabilidad y cumplimiento normativo
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Reportes automatizados en tiempo real
                    </p>
                    <p className="text-bizflow-gray-700">
                      Ahorro de 15 horas/semana en generación de informes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Validación automática de datos
                    </p>
                    <p className="text-bizflow-gray-700">
                      Reducción del 30% en errores de ingreso
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
                Caso de Éxito: Antamina
              </h3>
              <p className="text-bizflow-blue-100 mb-6">
                Implementamos un sistema de gestión de mantenimiento que reemplazó más de 50 hojas de Excel, logrando:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">40% reducción en paradas no planificadas</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">85% mejora en precisión de datos</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">ROI alcanzado en 2.5 meses</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/antamina-logo.png"
                  alt="Logo Antamina"
                  width={120}
                  height={40}
                  className="bg-white rounded-lg p-2"
                  crossOrigin="anonymous"
                />
                <div>
                  <p className="text-white font-medium">Jorge Ramírez</p>
                  <p className="text-bizflow-blue-200">Gerente de Mantenimiento</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/antamina-operations.jpg"
                alt="Operaciones en Antamina"
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