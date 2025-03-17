"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Server, Cloud } from "lucide-react"

const certificaciones = [
  {
    nombre: "ISO 27001",
    descripcion: "Certificación en Seguridad de la Información",
    icono: Shield,
  },
  {
    nombre: "AWS Partner",
    descripcion: "Partner Certificado de Amazon Web Services",
    icono: Cloud,
  },
  {
    nombre: "Google Cloud",
    descripcion: "Partner de Soluciones Cloud",
    icono: Server,
  },
]

const alianzas = [
  {
    nombre: "Microsoft Azure",
    logo: "/images/partners/microsoft-azure.svg",
  },
  {
    nombre: "Siemens MES",
    logo: "/images/partners/siemens.svg",
  },
]

export default function Certificaciones() {
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
            Tecnología empresarial, sin los dolores de cabeza
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Garantizamos seguridad y escalabilidad con certificaciones y alianzas estratégicas que cumplen 
            los estándares más exigentes de la industria.
          </p>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-gray-900">Certificaciones</h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificaciones.map((cert, index) => (
              <motion.div
                key={cert.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-gray-50 p-8"
              >
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rotate-12 bg-blue-500/10" />
                <div className="relative">
                  <cert.icono className="h-8 w-8 text-blue-600" />
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">{cert.nombre}</h4>
                  <p className="mt-2 text-gray-600">{cert.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold text-gray-900">Alianzas Estratégicas</h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {alianzas.map((alianza, index) => (
              <motion.div
                key={alianza.nombre}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex h-20 w-40 items-center justify-center rounded-lg bg-gray-50 p-4"
              >
                <Image
                  src={alianza.logo}
                  alt={`Logo de ${alianza.nombre}`}
                  width={120}
                  height={40}
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          No somos una startup: cumplimos estándares que empresas como Smith & Nephew y Cumbra exigen.
        </motion.div>
      </div>
    </section>
  )
} 