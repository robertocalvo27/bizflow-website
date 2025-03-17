"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const values = [
  {
    id: 1,
    title: "Innovación con propósito",
    description: "No innovamos por innovar, sino para resolver problemas reales de la industria.",
    color: "bg-bizflow-blue-600"
  },
  {
    id: 2,
    title: "Excelencia técnica",
    description: "Nos comprometemos con los más altos estándares de calidad en cada línea de código y cada solución.",
    color: "bg-bizflow-green-600"
  },
  {
    id: 3,
    title: "Colaboración multidisciplinaria",
    description: "Unimos tecnología con conocimiento industrial para crear soluciones verdaderamente efectivas.",
    color: "bg-bizflow-purple-600"
  },
  {
    id: 4,
    title: "Impacto tangible",
    description: "Medimos nuestro éxito por el valor real que aportamos a nuestros clientes y sus operaciones.",
    color: "bg-bizflow-orange-600"
  },
  {
    id: 5,
    title: "Aprendizaje continuo",
    description: "Cultivamos una cultura donde la curiosidad y el crecimiento profesional son fundamentales.",
    color: "bg-bizflow-red-600"
  }
]

const CultureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bizflow-gray-900 mb-6">
            Nuestra cultura
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            En Bizflow, combinamos la pasión por la tecnología con un profundo conocimiento de la industria para crear soluciones que transforman operaciones reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-bizflow-gray-900 mb-4">
              Donde la tecnología se encuentra con la industria
            </h3>
            <p className="text-bizflow-gray-600 mb-6">
              No somos solo una empresa de software. Somos un equipo de profesionales apasionados que entienden tanto de código como de procesos industriales. Esta combinación única nos permite crear soluciones que realmente funcionan en entornos exigentes.
            </p>
            <p className="text-bizflow-gray-600 mb-6">
              Nuestros equipos están formados por desarrolladores, ingenieros industriales, especialistas en calidad y expertos en operaciones que trabajan juntos para resolver los desafíos más complejos.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-bizflow-blue-50 text-bizflow-blue-600 px-3 py-1 rounded-full text-sm font-medium">Colaboración</span>
              <span className="bg-bizflow-green-50 text-bizflow-green-600 px-3 py-1 rounded-full text-sm font-medium">Innovación</span>
              <span className="bg-bizflow-purple-50 text-bizflow-purple-600 px-3 py-1 rounded-full text-sm font-medium">Excelencia</span>
              <span className="bg-bizflow-orange-50 text-bizflow-orange-600 px-3 py-1 rounded-full text-sm font-medium">Impacto</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/careers/team-collaboration.jpg"
              alt="Equipo de Bizflow colaborando"
              fill
              className="object-cover"
              crossOrigin="anonymous"
            />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-bizflow-gray-900 mb-8 text-center">
          Nuestros valores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bizflow-gray-50 rounded-xl p-6 border-t-4"
              style={{ borderColor: value.color.replace('bg-', '') }}
            >
              <h4 className="text-lg font-bold text-bizflow-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-bizflow-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-bizflow-gray-50 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-bizflow-gray-900 mb-4">
                Actividades y eventos
              </h3>
              <p className="text-bizflow-gray-600 mb-6">
                Fomentamos un ambiente de trabajo dinámico y colaborativo a través de diversas actividades que fortalecen nuestros lazos como equipo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bizflow-blue-100 text-bizflow-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span className="text-bizflow-gray-700">Hackatones trimestrales con problemas reales de clientes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bizflow-blue-100 text-bizflow-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span className="text-bizflow-gray-700">Visitas a plantas industriales para entender el impacto de nuestras soluciones</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bizflow-blue-100 text-bizflow-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span className="text-bizflow-gray-700">Sesiones de "Tech & Industry Talks" mensuales</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bizflow-blue-100 text-bizflow-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span className="text-bizflow-gray-700">Celebraciones de éxitos de proyectos y reconocimientos</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/careers/hackathon.jpg"
                  alt="Hackathon Bizflow"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/careers/plant-visit.jpg"
                  alt="Visita a planta industrial"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/careers/tech-talk.jpg"
                  alt="Tech Talk en Bizflow"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/careers/team-celebration.jpg"
                  alt="Celebración de equipo"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CultureSection 