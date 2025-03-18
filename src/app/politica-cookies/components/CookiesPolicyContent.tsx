"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Shield, Lock, Eye } from 'lucide-react'

const CookiesPolicyContent = () => {
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
              Política de Cookies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-bizflow-gray-600"
            >
              Entendiendo cómo utilizamos las cookies para mejorar su experiencia
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
                En Bizflow utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, 
                personalizar el contenido y analizar el tráfico de nuestro sitio web. Esta política explica cómo 
                y por qué utilizamos estas tecnologías.
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
                    <Cookie className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      ¿Qué son las Cookies?
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
                        Estos archivos nos permiten:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Recordar sus preferencias y ajustes</li>
                        <li>Mantener su sesión activa</li>
                        <li>Entender cómo interactúa con nuestro sitio</li>
                        <li>Mejorar la seguridad de la navegación</li>
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
                    <Shield className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Tipos de Cookies que Utilizamos
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Clasificamos nuestras cookies según su función:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Cookies esenciales para el funcionamiento del sitio</li>
                        <li>Cookies de rendimiento y análisis</li>
                        <li>Cookies de funcionalidad</li>
                        <li>Cookies de publicidad y seguimiento</li>
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
                    <Lock className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Control de Cookies
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Usted tiene control sobre las cookies en su navegador:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Puede aceptar o rechazar todas las cookies</li>
                        <li>Configurar qué tipos de cookies permite</li>
                        <li>Eliminar las cookies existentes</li>
                        <li>Recibir alertas cuando se intenten establecer cookies</li>
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
                    <Eye className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Uso de la Información
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        La información recopilada a través de cookies se utiliza para:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mejorar la funcionalidad del sitio web</li>
                        <li>Analizar patrones de uso y tendencias</li>
                        <li>Personalizar su experiencia</li>
                        <li>Optimizar nuestros servicios</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contacto para Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 bg-bizflow-blue-50 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                ¿Tiene preguntas sobre cookies?
              </h2>
              <p className="text-bizflow-gray-600 mb-4">
                Si tiene alguna pregunta sobre cómo utilizamos las cookies o desea más información, no dude en contactarnos.
              </p>
              <a
                href="mailto:cookies@bizflow.com"
                className="text-bizflow-blue-600 hover:text-bizflow-blue-700 font-medium"
              >
                cookies@bizflow.com
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

export default CookiesPolicyContent 