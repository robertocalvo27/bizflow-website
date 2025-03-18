"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Shield, Settings, Bell, Info } from 'lucide-react'

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
              Entendiendo cómo utilizamos las cookies para mejorar tu experiencia
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
                En Bizflow utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, personalizar el contenido y analizar el tráfico de nuestro sitio web. Esta política explica cómo utilizamos estas tecnologías y qué opciones tienes al respecto.
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
                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Estas nos permiten:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Recordar tus preferencias y ajustes</li>
                        <li>Mantener tu sesión activa</li>
                        <li>Entender cómo interactúas con nuestro sitio</li>
                        <li>Mejorar la velocidad y seguridad del sitio</li>
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
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio
                        </li>
                        <li>
                          <strong>Cookies de Rendimiento:</strong> Nos ayudan a mejorar el rendimiento del sitio
                        </li>
                        <li>
                          <strong>Cookies de Funcionalidad:</strong> Permiten recordar tus preferencias
                        </li>
                        <li>
                          <strong>Cookies de Marketing:</strong> Ayudan a mostrar anuncios relevantes
                        </li>
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
                    <Settings className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Control de Cookies
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Puedes controlar y/o eliminar las cookies según desees:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Configurar tu navegador para bloquear cookies</li>
                        <li>Eliminar cookies existentes desde tu navegador</li>
                        <li>Configurar preferencias en nuestro banner de cookies</li>
                        <li>Optar por no recibir cookies de terceros</li>
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
                    <Bell className="h-6 w-6 text-bizflow-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-bizflow-blue-900 mb-4">
                      Actualizaciones de la Política
                    </h2>
                    <div className="space-y-4 text-bizflow-gray-600">
                      <p>
                        Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios.
                      </p>
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
                ¿Tienes preguntas sobre nuestras cookies?
              </h2>
              <p className="text-bizflow-gray-600 mb-4">
                Si tienes alguna pregunta sobre cómo utilizamos las cookies, no dudes en contactarnos.
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