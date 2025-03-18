"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Rocket, Target, Users, Zap, LineChart, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const metodologiaSteps = [
  {
    icon: <Target className="h-8 w-8 text-bizflow-blue-600" />,
    title: "1. Descubrimiento y Alcance",
    description: "Entendemos a profundidad sus procesos operativos y objetivos de negocio para definir una solución precisa.",
    features: [
      "Análisis de procesos actuales",
      "Identificación de puntos de dolor",
      "Definición de KPIs clave",
      "Mapeo de integraciones necesarias"
    ]
  },
  {
    icon: <Code className="h-8 w-8 text-bizflow-blue-600" />,
    title: "2. Desarrollo Iterativo",
    description: "Construimos la solución en sprints cortos, priorizando las funcionalidades de mayor impacto.",
    features: [
      "Sprints de 2 semanas",
      "Prototipos funcionales tempranos",
      "Feedback continuo del equipo",
      "Ajustes en tiempo real"
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-bizflow-blue-600" />,
    title: "3. Validación con Usuarios",
    description: "Involucramos a los usuarios finales desde el inicio para garantizar la adopción.",
    features: [
      "Pruebas con usuarios reales",
      "Capacitación temprana",
      "Documentación práctica",
      "Retroalimentación directa"
    ]
  },
  {
    icon: <Rocket className="h-8 w-8 text-bizflow-blue-600" />,
    title: "4. Implementación Ágil",
    description: "Desplegamos la solución de forma gradual para minimizar riesgos y maximizar el éxito.",
    features: [
      "Despliegue por fases",
      "Monitoreo en tiempo real",
      "Soporte dedicado",
      "Transición suave"
    ]
  }
]

const diferenciadores = [
  {
    icon: <Zap className="h-6 w-6 text-bizflow-purple-600" />,
    title: "Rapidez de Implementación",
    description: "Resultados tangibles en semanas, no meses o años."
  },
  {
    icon: <LineChart className="h-6 w-6 text-bizflow-purple-600" />,
    title: "Enfoque en Resultados",
    description: "KPIs claros y medibles desde el primer día."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-bizflow-purple-600" />,
    title: "Experiencia Industrial",
    description: "Conocimiento profundo de procesos operativos reales."
  }
]

const MethodologyContent = () => {
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-bizflow-blue-900 to-bizflow-purple-900"
            >
              Metodología Ágil para Software Industrial
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-bizflow-gray-600 mb-8"
            >
              Desarrollamos e implementamos soluciones de software que transforman operaciones industriales en tiempo récord
            </motion.p>
          </div>
        </div>
      </section>

      {/* Metodología Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bizflow-blue-900 mb-6">
              Proceso de Desarrollo e Implementación
            </h2>
            <p className="text-lg text-bizflow-gray-600">
              Nuestra metodología está diseñada para entregar valor rápidamente mientras minimizamos riesgos y maximizamos la adopción
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {metodologiaSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 shadow-lg border border-bizflow-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-bizflow-blue-50 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bizflow-blue-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-bizflow-gray-600 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-bizflow-gray-700">
                          <ArrowRight className="h-4 w-4 text-bizflow-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 bg-bizflow-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bizflow-blue-900 mb-6">
              Nuestros Diferenciadores
            </h2>
            <p className="text-lg text-bizflow-gray-600">
              Lo que hace única nuestra forma de trabajar y entregar resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciadores.map((diferenciador, index) => (
              <motion.div
                key={diferenciador.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md border border-bizflow-blue-50"
              >
                <div className="p-3 bg-bizflow-purple-50 rounded-lg inline-block mb-4">
                  {diferenciador.icon}
                </div>
                <h3 className="text-xl font-bold text-bizflow-blue-900 mb-2">
                  {diferenciador.title}
                </h3>
                <p className="text-bizflow-gray-600">
                  {diferenciador.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MethodologyContent 