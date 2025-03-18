"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileCheck } from 'lucide-react'

const PrivacyPolicyContent = () => {
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
              Política de Privacidad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-bizflow-gray-600"
            >
              Su privacidad y la seguridad de sus datos son nuestra prioridad
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
                En Bizflow, nos tomamos muy en serio la protección de sus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestros servicios y plataforma.
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
                    <Shield className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Recopilación de Información
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Recopilamos información que usted nos proporciona directamente:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Información de contacto (nombre, email, teléfono)</li>
                        <li>Información de la empresa</li>
                        <li>Datos de uso de nuestros servicios</li>
                        <li>Comunicaciones con nuestro equipo</li>
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
                    <Lock className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Uso de la Información
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Utilizamos su información para:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Proporcionar y mejorar nuestros servicios</li>
                        <li>Personalizar su experiencia</li>
                        <li>Comunicarnos con usted</li>
                        <li>Procesar transacciones</li>
                        <li>Cumplir con obligaciones legales</li>
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
                    <Eye className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Protección de Datos
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Implementamos medidas de seguridad para proteger su información:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Encriptación de datos sensibles</li>
                        <li>Acceso restringido a información personal</li>
                        <li>Monitoreo continuo de seguridad</li>
                        <li>Actualizaciones regulares de seguridad</li>
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
                    <FileCheck className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Sus Derechos
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Usted tiene derecho a:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Acceder a sus datos personales</li>
                        <li>Solicitar correcciones de su información</li>
                        <li>Solicitar la eliminación de sus datos</li>
                        <li>Oponerse al procesamiento de sus datos</li>
                        <li>Retirar su consentimiento en cualquier momento</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contacto para Privacidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 bg-bizflow-blue-50 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                ¿Tiene preguntas sobre privacidad?
              </h2>
              <p className="text-bizflow-gray-600 mb-4">
                Si tiene alguna pregunta sobre nuestra política de privacidad o el manejo de sus datos, no dude en contactarnos.
              </p>
              <a
                href="mailto:privacidad@bizflow.com"
                className="text-bizflow-blue-600 hover:text-bizflow-blue-700 font-medium"
              >
                privacidad@bizflow.com
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

export default PrivacyPolicyContent 