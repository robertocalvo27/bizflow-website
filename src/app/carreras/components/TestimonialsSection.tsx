"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "En Bizflow no solo programo: viajo a minas para ver cómo mi código optimiza operaciones reales. Eso no tiene precio.",
    name: "Ana Martínez",
    position: "Ingeniera de Software",
    image: "/images/careers/testimonial-1.jpg",
    years: "2 años en Bizflow"
  },
  {
    id: 2,
    quote: "Vengo del sector médico. Aquí he aprendido a integrar compliance con tecnología, algo que ninguna otra empresa me ofreció.",
    name: "Luis Rodríguez",
    position: "Especialista en Calidad",
    image: "/images/careers/testimonial-2.jpg",
    years: "3 años en Bizflow"
  },
  {
    id: 3,
    quote: "Trabajar en proyectos que impactan directamente en la seguridad de los trabajadores mineros me da un propósito que va más allá del código.",
    name: "Carolina Sánchez",
    position: "Desarrolladora Full Stack",
    image: "/images/careers/testimonial-3.jpg",
    years: "1 año en Bizflow"
  }
]

const TestimonialsSection = () => {
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
            No lo decimos nosotros: lo dice nuestro equipo.
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Conoce las experiencias de quienes ya forman parte de Bizflow y descubre por qué eligen quedarse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bizflow-gray-50 rounded-xl p-8 relative"
            >
              <Quote className="h-10 w-10 text-bizflow-blue-200 absolute top-6 right-6" />
              <div className="flex flex-col h-full">
                <p className="text-bizflow-gray-700 mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-bizflow-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-bizflow-gray-600">{testimonial.position}</div>
                    <div className="text-xs text-bizflow-blue-600 mt-1">{testimonial.years}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <div className="bg-bizflow-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-bizflow-gray-900 mb-4">
                Desarrollo profesional y personal
              </h3>
              <p className="text-bizflow-gray-700 mb-4">
                "Lo que más valoro de Bizflow es el equilibrio entre desafío técnico y crecimiento personal. He tenido la oportunidad de liderar proyectos en tres países diferentes y aprender sobre industrias que nunca imaginé."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/careers/testimonial-4.jpg"
                    alt="Javier Méndez"
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div>
                  <div className="font-bold text-bizflow-gray-900">Javier Méndez</div>
                  <div className="text-sm text-bizflow-gray-600">Tech Lead</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
            <Image
              src="/images/careers/team-working.jpg"
              alt="Equipo de Bizflow trabajando"
              fill
              className="object-cover"
              crossOrigin="anonymous"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 