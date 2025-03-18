"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Scale, FileText, Users, AlertCircle, HelpCircle } from 'lucide-react'

const TermsContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-bizflow-blue-50 to-bizflow-purple-50">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-bizflow-blue-900 to-bizflow-purple-900"
            >
              Términos y Condiciones
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-bizflow-gray-600"
            >
              Conoce las condiciones de uso de nuestros servicios
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introducción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="text-bizflow-gray-600 mb-6">
                Al utilizar los servicios de Bizflow, aceptas estos términos y condiciones en su totalidad. Por favor, lee detenidamente este documento que establece tus derechos y responsabilidades al usar nuestra plataforma y servicios.
              </p>
            </motion.div>

            {/* Secciones Principales */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-8 border border-bizflow-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-bizflow-blue-50 rounded-lg">
                    <Scale className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Acuerdo de Servicios
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Nuestro acuerdo de servicios incluye:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Licencia de uso del software</li>
                        <li>Términos de suscripción y pagos</li>
                        <li>Niveles de servicio garantizados</li>
                        <li>Soporte técnico y mantenimiento</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg p-8 border border-bizflow-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-bizflow-blue-50 rounded-lg">
                    <Users className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Responsabilidades del Usuario
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Como usuario de Bizflow, te comprometes a:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mantener la confidencialidad de tus credenciales</li>
                        <li>Usar el servicio de manera ética y legal</li>
                        <li>Respetar los derechos de propiedad intelectual</li>
                        <li>No realizar ingeniería inversa del software</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg p-8 border border-bizflow-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-bizflow-blue-50 rounded-lg">
                    <FileText className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Propiedad Intelectual
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Derechos y protecciones:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Todo el contenido es propiedad de Bizflow</li>
                        <li>Protección de marcas registradas y patentes</li>
                        <li>Licencias de uso limitado</li>
                        <li>Restricciones de copia y distribución</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-lg p-8 border border-bizflow-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-bizflow-blue-50 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Limitación de Responsabilidad
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Bizflow no será responsable por:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Interrupciones del servicio por mantenimiento</li>
                        <li>Pérdida de datos por causas externas</li>
                        <li>Uso indebido del servicio</li>
                        <li>Daños indirectos o consecuentes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contacto para Preguntas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 bg-bizflow-blue-50 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                ¿Necesitas aclarar algún punto?
              </h2>
              <p className="text-bizflow-gray-600 mb-4">
                Si tienes dudas sobre nuestros términos y condiciones, nuestro equipo legal está disponible para ayudarte.
              </p>
              <a
                href="mailto:legal@bizflow.com"
                className="text-bizflow-blue-600 hover:text-bizflow-blue-700 font-medium"
              >
                legal@bizflow.com
              </a>
            </motion.div>

            {/* Última Actualización */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center text-bizflow-gray-500 text-sm"
            >
              Última actualización: Marzo 2024
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsContent 