"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"

const oficinas = [
  {
    ciudad: "Lima",
    pais: "Perú",
    direccion: "San Isidro",
  },
  {
    ciudad: "Ciudad de México",
    pais: "México",
    direccion: "Polanco",
  },
  {
    ciudad: "Austin",
    pais: "Texas, EE.UU.",
    direccion: "Downtown",
  },
]

const clientes = [
  {
    nombre: "FIFCO",
    ubicacion: "Costa Rica",
    industria: "Bebidas",
  },
  {
    nombre: "Cumbra",
    ubicacion: "Perú",
    industria: "Minería",
  },
  {
    nombre: "Smith & Nephew",
    ubicacion: "México",
    industria: "Dispositivos Médicos",
  },
]

export default function DondeEstamos() {
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
            Globales en expertise, locales en ejecución
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oficinas en Lima, Ciudad de México y Austin (Texas), pero implementamos soluciones en toda Latinoamérica. 
            Trabajamos en su huso horario y hablamos su idioma operativo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/latam-map.jpg"
                alt="Mapa de presencia en Latinoamérica"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
              {/* Puntos en el mapa */}
              {oficinas.map((oficina, index) => (
                <div
                  key={oficina.ciudad}
                  className="absolute"
                  style={{
                    // Posiciones aproximadas en el mapa
                    top: index === 0 ? "60%" : index === 1 ? "30%" : "20%",
                    left: index === 0 ? "30%" : index === 1 ? "25%" : "20%",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.2,
                    }}
                    className="relative"
                  >
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div className="absolute left-full ml-2 whitespace-nowrap rounded-lg bg-white px-2 py-1 text-sm shadow-lg">
                      <p className="font-medium">{oficina.ciudad}</p>
                      <p className="text-xs text-gray-500">{oficina.pais}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">Clientes Destacados</h3>
              <div className="mt-6 divide-y divide-gray-100">
                {clientes.map((cliente, index) => (
                  <motion.div
                    key={cliente.nombre}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between py-4"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{cliente.nombre}</p>
                      <p className="text-sm text-gray-500">{cliente.ubicacion}</p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                      {cliente.industria}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 