"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Scale, Shield, Users } from 'lucide-react'

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
              Bases legales que rigen el uso de nuestros servicios
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
                Al utilizar los servicios de Bizflow, usted acepta estos términos y condiciones en su totalidad. 
                Por favor, lea detenidamente este documento que establece sus derechos y obligaciones en relación 
                con el uso de nuestra plataforma y servicios.
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
                    <FileText className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Aceptación de los Términos
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Al acceder y utilizar nuestros servicios, usted acepta:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Cumplir con estos términos y condiciones</li>
                        <li>Respetar nuestras políticas y directrices</li>
                        <li>Proporcionar información precisa y actualizada</li>
                        <li>Mantener la confidencialidad de sus credenciales</li>
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
                      Uso del Servicio
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Nuestros servicios están sujetos a las siguientes condiciones:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Uso exclusivo para fines comerciales legítimos</li>
                        <li>Prohibición de actividades fraudulentas o maliciosas</li>
                        <li>Respeto a los derechos de propiedad intelectual</li>
                        <li>Cumplimiento de las leyes aplicables</li>
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
                    <Shield className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Privacidad y Seguridad
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Nos comprometemos a proteger su información:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Implementación de medidas de seguridad robustas</li>
                        <li>Protección de datos personales y empresariales</li>
                        <li>Cumplimiento de regulaciones de privacidad</li>
                        <li>Transparencia en el manejo de datos</li>
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
                    <Scale className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Limitación de Responsabilidad
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Aspectos importantes sobre nuestra responsabilidad:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Garantía limitada de servicios</li>
                        <li>Exclusiones de responsabilidad específicas</li>
                        <li>Limitaciones de daños indirectos</li>
                        <li>Condiciones de reembolso y cancelación</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contacto Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 bg-bizflow-blue-50 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                ¿Tiene preguntas legales?
              </h2>
              <p className="text-bizflow-gray-600 mb-4">
                Si tiene alguna pregunta sobre nuestros términos y condiciones, no dude en contactar a nuestro equipo legal.
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