"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProblemaSolucion = () => {
  const problemas = [
    "Sistemas aislados que no se comunican entre sí",
    "Duplicación de datos y errores de sincronización",
    "Procesos manuales de transferencia de información",
    "Dificultad para obtener una vista unificada",
    "Retrasos en la toma de decisiones",
    "Alto costo de mantenimiento de múltiples sistemas"
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
            ¿Por qué integrar sus sistemas empresariales?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            La diferencia entre sistemas aislados y una plataforma empresarial integrada
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
                Sistemas Aislados
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
                Plataforma Integrada Bizflow
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Conectores empresariales robustos
                    </p>
                    <p className="text-bizflow-gray-700">
                      Integraciones nativas con SAP, Oracle, Microsoft y sistemas industriales
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Sincronización en tiempo real
                    </p>
                    <p className="text-bizflow-gray-700">
                      Datos actualizados al instante entre todos sus sistemas críticos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      APIs personalizadas y seguras
                    </p>
                    <p className="text-bizflow-gray-700">
                      Interfaces REST y SOAP con autenticación y encriptación avanzada
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bizflow-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-bizflow-gray-900 mb-1">
                      Monitoreo y trazabilidad
                    </p>
                    <p className="text-bizflow-gray-700">
                      Dashboard centralizado para supervisar todas las integraciones
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
                Caso de Éxito: Grupo Gloria
              </h3>
              <p className="text-bizflow-blue-100 mb-6">
                Integramos sus sistemas SAP, SCADA y MES para crear una vista unificada de sus operaciones, logrando:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">30% reducción en tiempo de reporte</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">100% eliminación de errores de datos</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-bizflow-blue-300 mr-3" />
                  <p className="text-white">Decisiones basadas en datos en tiempo real</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/gloria-logo.png"
                  alt="Logo Grupo Gloria"
                  width={120}
                  height={40}
                  className="bg-white rounded-lg p-2"
                  crossOrigin="anonymous"
                />
                <div>
                  <p className="text-white font-medium">Carlos Rodríguez</p>
                  <p className="text-bizflow-blue-200">Director de Tecnología</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/gloria-plant.jpg"
                alt="Planta de Grupo Gloria"
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