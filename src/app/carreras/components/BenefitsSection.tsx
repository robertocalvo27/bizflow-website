"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Clock, 
  HeartPulse, 
  Users, 
  Coffee,
  Laptop
} from 'lucide-react'

const benefits = [
  {
    id: 1,
    title: "Desarrollo profesional",
    description: "Programas de capacitación continua y oportunidades de certificación en tecnologías industriales.",
    icon: GraduationCap
  },
  {
    id: 2,
    title: "Proyectos internacionales",
    description: "Posibilidad de trabajar en proyectos con clientes de América Latina, Europa y Norteamérica.",
    icon: Globe
  },
  {
    id: 3,
    title: "Flexibilidad horaria",
    description: "Horarios flexibles y posibilidad de trabajo remoto parcial según el rol y proyecto.",
    icon: Clock
  },
  {
    id: 4,
    title: "Seguro médico premium",
    description: "Cobertura médica completa para ti y tu familia con las mejores aseguradoras.",
    icon: HeartPulse
  },
  {
    id: 5,
    title: "Ambiente colaborativo",
    description: "Cultura de trabajo en equipo y mentoría entre profesionales de distintas disciplinas.",
    icon: Users
  },
  {
    id: 6,
    title: "Espacios de bienestar",
    description: "Áreas de descanso, cafetería gratuita y actividades recreativas periódicas.",
    icon: Coffee
  },
  {
    id: 7,
    title: "Equipamiento de última generación",
    description: "Acceso a hardware y software de vanguardia para maximizar tu productividad.",
    icon: Laptop
  },
  {
    id: 8,
    title: "Plan de carrera personalizado",
    description: "Trayectoria profesional diseñada según tus intereses y fortalezas dentro de la compañía.",
    icon: Briefcase
  }
]

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-bizflow-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bizflow-gray-900 mb-6">
            Beneficios de trabajar en Bizflow
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Creemos que para ofrecer soluciones excepcionales, necesitamos un equipo que se sienta valorado y motivado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-bizflow-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-bizflow-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-bizflow-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-bizflow-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-bizflow-blue-600 rounded-xl p-8 text-white text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres saber más sobre nuestra cultura?
          </h3>
          <p className="mb-6">
            Descubre cómo es el día a día en Bizflow y por qué nuestro equipo es nuestra mayor fortaleza.
          </p>
          <button className="bg-white text-bizflow-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-bizflow-gray-100 transition-colors">
            Conoce nuestra cultura
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsSection 