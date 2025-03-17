"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
      {/* Fondo con efecto gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-bizflow-blue-50/50 to-bizflow-purple-50/30 z-0"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 -left-16 w-64 h-64 rounded-full bg-bizflow-blue-100 filter blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-32 -right-16 w-64 h-64 rounded-full bg-bizflow-purple-100 filter blur-3xl opacity-30 animate-pulse z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 headline-gradient">
              Operaciones industriales más inteligentes
            </h1>
            <p className="text-bizflow-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Transformamos la manera en que las operaciones industriales funcionan - reemplazando Excel y sistemas antiguos por soluciones ágiles en <span className="font-semibold text-bizflow-blue-800">semanas, no años</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bizflow-button">
                <Link href="/contacto">
                  Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bizflow-button-outline">
                <Link href="/servicios">
                  Explorar Soluciones
                </Link>
              </Button>
            </div>

            {/* Logos de clientes */}
            <div className="mt-12">
              <p className="text-bizflow-gray-500 mb-4 text-sm font-medium uppercase tracking-wider">
                Confían en nosotros
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                <Image
                  src="/images/cliente-smith-nephew.svg"
                  alt="Smith & Nephew"
                  width={100}
                  height={32}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  crossOrigin="anonymous"
                />
                <Image
                  src="/images/cliente-fifco.svg"
                  alt="FIFCO"
                  width={80}
                  height={32}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  crossOrigin="anonymous"
                />
                <Image
                  src="/images/cliente-lindley.svg"
                  alt="Lindley"
                  width={80}
                  height={32}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  crossOrigin="anonymous"
                />
                <Image
                  src="/images/cliente-ferreyros.svg"
                  alt="Ferreyros"
                  width={100}
                  height={32}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/hero-industria.jpg"
                alt="Equipo de Bizflow en planta industrial"
                fill
                className="object-cover"
                priority
                crossOrigin="anonymous"
              />

              {/* Overlay con efecto de gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-bizflow-blue-900/50 to-transparent"></div>

              {/* Badge de certificación */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center shadow-md">
                <Image
                  src="/images/cert-aws-color.svg"
                  alt="AWS Partner"
                  width={24}
                  height={24}
                  className="mr-2"
                  crossOrigin="anonymous"
                />
                <span className="text-xs font-medium text-bizflow-blue-900">Partner Certificado</span>
              </div>
            </div>

            {/* Card con información destacada */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="bg-bizflow-purple-100 p-2 rounded-full mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H4V8H20V6Z" fill="#7022dd"/>
                    <path d="M20 10H4V12H20V10Z" fill="#7022dd"/>
                    <path d="M20 14H4V16H20V14Z" fill="#7022dd"/>
                    <path d="M20 18H4V20H20V18Z" fill="#7022dd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-bizflow-blue-900">Experiencia práctica</h3>
              </div>
              <p className="text-bizflow-gray-600 text-sm">
                Nuestro equipo ha trabajado en minas, plantas médicas y fábricas,
                entendemos de primera mano los desafíos operativos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
