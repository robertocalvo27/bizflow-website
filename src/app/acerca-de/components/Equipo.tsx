"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase, MapPin } from "lucide-react"

const equipo = [
  {
    nombre: "Juan Pérez",
    cargo: "Líder de Desarrollo",
    experiencia: "8 años gestionando plantas de dispositivos médicos en Osaka",
    foto: "/images/team/juan-perez.jpg",
    ubicacion: "Lima, Perú",
  },
  {
    nombre: "Ana Gómez",
    cargo: "Especialista en Minería",
    experiencia: "Exsupervisora de operaciones en minas de cobre en Chile",
    foto: "/images/team/ana-gomez.jpg",
    ubicacion: "Ciudad de México, México",
  },
  {
    nombre: "Carlos Ruiz",
    cargo: "Arquitecto de Software",
    experiencia: "10 años desarrollando sistemas MES para farmacéuticas",
    foto: "/images/team/carlos-ruiz.jpg",
    ubicacion: "Austin, Texas",
  },
]

export default function Equipo() {
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
            Conozca a los expertos detrás de su operación eficiente
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestro equipo combina décadas de experiencia en la industria con expertise técnico de clase mundial.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((miembro, index) => (
            <motion.div
              key={miembro.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-gray-50 p-8"
            >
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rotate-12 bg-blue-500/10" />
              <div className="relative">
                <div className="aspect-[4/4] w-24 overflow-hidden rounded-xl">
                  <Image
                    src={miembro.foto}
                    alt={miembro.nombre}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{miembro.nombre}</h3>
                  <p className="text-sm text-blue-600">{miembro.cargo}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    {miembro.ubicacion}
                  </div>
                  <div className="mt-4 flex items-start gap-2">
                    <Briefcase className="mt-1 h-4 w-4 flex-shrink-0 text-gray-400" />
                    <p className="text-sm text-gray-600">{miembro.experiencia}</p>
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
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl bg-blue-600 p-8 text-center"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)]" />
          <div className="relative">
            <h3 className="text-xl font-semibold text-white">¿Quiere conocer más sobre nuestro equipo?</h3>
            <p className="mt-2 text-blue-100">
              Descubra cómo nuestra experiencia en la industria puede ayudar a transformar su operación.
            </p>
            <button className="mt-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
              Ver video: "Un día en Bizflow" →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 