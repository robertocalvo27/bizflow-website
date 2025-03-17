"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const ProblemaSolucion = () => {
  const problemas = [
    'Alto consumo energético y costos operativos',
    'Dificultad en la gestión de picos de demanda',
    'Falta de visibilidad en tiempo real',
    'Mantenimiento reactivo de equipos',
    'Cumplimiento de normativas ambientales'
  ]

  const soluciones = [
    'Optimización del consumo con IA y machine learning',
    'Gestión inteligente de la demanda energética',
    'Monitoreo en tiempo real con IoT y analytics',
    'Mantenimiento predictivo de infraestructura',
    'Sistema de gestión ambiental y reportes'
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-bizflow-gray-900 mb-6">
            Energía Digital Inteligente
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Transformamos la gestión energética con tecnología de punta, maximizando 
            la eficiencia y minimizando el impacto ambiental.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problemas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bizflow-red-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle className="h-8 w-8 text-bizflow-red-600" />
              <h3 className="text-xl font-semibold text-bizflow-gray-900">
                Desafíos Actuales
              </h3>
            </div>
            <ul className="space-y-4">
              {problemas.map((problema, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-bizflow-red-600 mt-1">&#x2022;</span>
                  <span className="text-bizflow-gray-600">{problema}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Soluciones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bizflow-green-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle2 className="h-8 w-8 text-bizflow-green-600" />
              <h3 className="text-xl font-semibold text-bizflow-gray-900">
                Soluciones Digitales
              </h3>
            </div>
            <ul className="space-y-4">
              {soluciones.map((solucion, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-bizflow-green-600 mt-1">&#x2022;</span>
                  <span className="text-bizflow-gray-600">{solucion}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Caso de Éxito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-bizflow-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-bizflow-gray-900 mb-4">
            Caso de Éxito: Planta de Generación Eléctrica
          </h3>
          <p className="text-bizflow-gray-600 mb-6">
            Implementamos soluciones digitales que transformaron su operación:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-bizflow-blue-600 mb-2">+35%</div>
              <div className="text-sm text-bizflow-gray-600">
                Aumento en eficiencia energética
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-bizflow-green-600 mb-2">-25%</div>
              <div className="text-sm text-bizflow-gray-600">
                Reducción en costos operativos
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-2xl font-bold text-bizflow-purple-600 mb-2">-30%</div>
              <div className="text-sm text-bizflow-gray-600">
                Reducción en emisiones de CO2
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemaSolucion 