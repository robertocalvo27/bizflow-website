"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const ProblemaSolucion = () => {
  const problemas = [
    "Complejidad en el cumplimiento regulatorio GMP",
    "Dificultad en la trazabilidad de lotes",
    "Documentación manual y propensa a errores",
    "Validación de procesos compleja",
    "Control de calidad ineficiente"
  ]

  const soluciones = [
    "Sistema de gestión de calidad digital (eQMS)",
    "Trazabilidad completa con blockchain y serialización",
    "Documentación electrónica y firmas digitales",
    "Validación automatizada y monitoreo continuo",
    "Control de calidad predictivo con IA"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-bizflow-gray-900 mb-6"
          >
            Farmacéutica Digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-bizflow-gray-600"
          >
            Transforme sus operaciones farmacéuticas con soluciones digitales que garantizan 
            cumplimiento regulatorio y eficiencia operativa
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Problemas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-bizflow-gray-900 mb-8">Desafíos Actuales</h3>
            <div className="space-y-4">
              {problemas.map((problema, index) => (
                <div key={index} className="flex items-start gap-4">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-bizflow-gray-600">{problema}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soluciones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-bizflow-gray-900 mb-8">Nuestras Soluciones</h3>
            <div className="space-y-4">
              {soluciones.map((solucion, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-bizflow-gray-600">{solucion}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Caso de Éxito */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-bizflow-blue-50 to-bizflow-blue-100 rounded-2xl p-8 lg:p-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-bizflow-gray-900 mb-6">
              Caso de Éxito: Laboratorio Farmacéutico Internacional
            </h3>
            <p className="text-bizflow-gray-600 mb-6">
              Implementamos nuestra solución de farmacéutica digital, logrando:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-bizflow-gray-600">99.9% de cumplimiento en auditorías GMP</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-bizflow-gray-600">Reducción del 70% en tiempo de documentación</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-bizflow-gray-600">100% de trazabilidad en lotes de producción</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemaSolucion 