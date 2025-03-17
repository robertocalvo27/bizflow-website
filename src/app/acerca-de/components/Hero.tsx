"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              No somos una empresa de software cualquiera: somos expertos que han sudado en su industria.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Desde 2010, ayudamos a empresas latinoamericanas a resolver problemas operativos que SAP y Oracle no cubren. 
              Nuestro fundador trabajó en minas subterráneas, plantas médicas en Japón y startups en Silicon Valley.
            </p>
            <p className="mt-4 text-lg font-semibold text-gray-900">
              No codificamos desde un escritorio: creamos soluciones desde la trinchera operativa.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="gap-2">
                Conoce nuestro equipo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/bizflow-team.jpg"
                alt="Equipo Bizflow en campo"
                fill
                className="object-cover"
                crossOrigin="anonymous"
                priority
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-600 p-2 text-white">
                  <span className="text-2xl font-bold">13</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Años de experiencia</p>
                  <p className="text-sm text-gray-500">en industrias complejas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-blue-500 to-blue-600 opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </section>
  )
} 