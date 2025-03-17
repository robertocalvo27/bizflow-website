"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Factory, HardHat, Microscope } from "lucide-react"

const casos = [
  {
    cliente: "Smith & Nephew",
    descripcion: "Optimizamos la producción hora x hora, eliminando 15,000 hojas de Excel anuales.",
    icono: Microscope,
  },
  {
    cliente: "Minería Subterránea",
    descripcion: "Redujimos un 40% las paradas con un sistema de monitoreo en tiempo real.",
    icono: HardHat,
  },
]

export default function AdnIndustrial() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ADN Industrial: La experiencia práctica que nos diferencia
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            El 70% de nuestro equipo ha trabajado en plantas de producción, minas o salas limpias médicas. 
            Sabemos cómo se gestiona un turno nocturno o una parada no planificada... porque lo hemos vivido.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gray-50 p-8"
          >
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rotate-12 bg-blue-500/10" />
            <div className="relative">
              <Factory className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Experiencia en Campo</h3>
              <p className="mt-2 text-gray-600">
                Nuestro equipo combina expertise técnico con años de experiencia práctica en:
              </p>
              <ul className="mt-4 space-y-3">
                {["Plantas de producción médica", "Minas subterráneas", "Salas limpias", "Líneas de ensamblaje"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

          <div className="space-y-8">
            {casos.map((caso, index) => (
              <motion.div
                key={caso.cliente}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-2xl bg-gray-50 p-8"
              >
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rotate-12 bg-blue-500/10" />
                <div className="relative">
                  <caso.icono className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{caso.cliente}</h3>
                  <p className="mt-2 text-gray-600">{caso.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 