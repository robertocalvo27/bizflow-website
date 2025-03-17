"use client"

import React from "react"
import { motion } from "framer-motion"
import { Zap, Target, Clock, HeartHandshake } from "lucide-react"

const valores = [
  {
    titulo: "Agilidad sin sacrificar calidad",
    descripcion: "Entregamos prototipos en 5 días, no en meses.",
    icono: Zap,
  },
  {
    titulo: "Transparencia radical",
    descripcion: "Sin cargos ocultos ni proyectos eternos: precios fijos y plazos claros.",
    icono: Target,
  },
  {
    titulo: "Compromiso operativo",
    descripcion: "No nos vamos al terminar el proyecto: soporte técnico 24/7 con expertos de su sector.",
    icono: Clock,
  },
  {
    titulo: "Enfoque colaborativo",
    descripcion: "Trabajamos codo a codo con su equipo para asegurar la adopción y el éxito a largo plazo.",
    icono: HeartHandshake,
  },
]

export default function Valores() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Valores que se notan en cada línea de código
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestros valores no son solo palabras en la pared: son los principios que guían cada decisión 
            y cada línea de código que escribimos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rotate-12 bg-blue-500/10" />
              <div className="relative">
                <div className="rounded-lg bg-blue-50 p-3 w-fit">
                  <valor.icono className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{valor.titulo}</h3>
                <p className="mt-2 text-gray-600">{valor.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl bg-blue-600 p-8 text-center text-white"
        >
          <h3 className="text-xl font-semibold">¿Listo para trabajar con un equipo que entiende su operación?</h3>
          <p className="mt-2 text-blue-100">
            Agende una llamada con nuestros expertos y descubra cómo podemos ayudarle a alcanzar sus objetivos.
          </p>
          <button className="mt-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
            Hablemos →
          </button>
        </motion.div>
      </div>
    </section>
  )
} 