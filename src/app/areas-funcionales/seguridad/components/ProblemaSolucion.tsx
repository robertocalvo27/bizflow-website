"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const ProblemaSolucion = () => {
  const problemas = [
    "Dificultad para identificar riesgos potenciales a tiempo",
    "Cumplimiento normativo manual y propenso a errores",
    "Falta de visibilidad en tiempo real de incidentes",
    "Capacitación y concientización inconsistente",
    "Documentación de seguridad desorganizada"
  ]

  const soluciones = [
    "Sistema predictivo de identificación de riesgos con IA",
    "Automatización del cumplimiento normativo con alertas",
    "Monitoreo en tiempo real con dashboards interactivos",
    "Plataforma de capacitación digital personalizada",
    "Gestión documental centralizada y actualizada"
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
            Seguridad Industrial Digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-bizflow-gray-600"
          >
            Transforme su gestión de seguridad industrial con soluciones digitales que protegen a su personal y activos
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
              Caso de Éxito: Planta Química Internacional
            </h3>
            <p className="text-bizflow-gray-600 mb-6">
              Implementamos nuestra solución de seguridad digital, logrando:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-bizflow-gray-600">Reducción del 95% en incidentes de seguridad</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-bizflow-gray-600">100% de cumplimiento normativo verificado</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-bizflow-gray-600">Ahorro anual de $500,000 en costos de seguros</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemaSolucion 