"use client"

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CheckCircle, Shield } from 'lucide-react'

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-bizflow-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Plataforma confiable para operaciones críticas
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Nuestras certificaciones y alianzas estratégicas nos permiten ofrecer soluciones seguras, escalables y de alto rendimiento para las empresas más exigentes de Latinoamérica.
          </p>
        </div>

        {/* Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow border-t-4 border-t-bizflow-blue-600">
            <div className="bg-bizflow-blue-100 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-bizflow-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-bizflow-blue-800">ISO 27001</h3>
            <p className="text-bizflow-gray-600">
              Certificación internacional en seguridad de la información, garantizando la protección de sus datos críticos.
            </p>
          </Card>

          <Card className="p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow border-t-4 border-t-bizflow-purple-600">
            <div className="bg-bizflow-purple-100 p-3 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-bizflow-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-bizflow-blue-800">ISO 9001</h3>
            <p className="text-bizflow-gray-600">
              Sistema de gestión de calidad certificado, asegurando procesos consistentes y mejora continua.
            </p>
          </Card>

          <Card className="p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow border-t-4 border-t-bizflow-blue-600">
            <div className="bg-bizflow-blue-100 p-3 rounded-full mb-4">
              <Image
                src="/images/aws-partner-icon.svg"
                alt="AWS Partner"
                width={32}
                height={32}
                crossOrigin="anonymous"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-bizflow-blue-800">AWS Partner</h3>
            <p className="text-bizflow-gray-600">
              Partner oficial de Amazon Web Services con especialización en IoT y analítica industrial.
            </p>
          </Card>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="text-center p-4">
            <p className="text-4xl md:text-5xl font-bold text-bizflow-blue-600 mb-2">+50</p>
            <p className="text-sm text-bizflow-gray-700">Clientes activos</p>
          </div>
          <div className="text-center p-4">
            <p className="text-4xl md:text-5xl font-bold text-bizflow-blue-600 mb-2">98%</p>
            <p className="text-sm text-bizflow-gray-700">Tasa de retención</p>
          </div>
          <div className="text-center p-4">
            <p className="text-4xl md:text-5xl font-bold text-bizflow-blue-600 mb-2">+200</p>
            <p className="text-sm text-bizflow-gray-700">Proyectos completados</p>
          </div>
          <div className="text-center p-4">
            <p className="text-4xl md:text-5xl font-bold text-bizflow-blue-600 mb-2">3</p>
            <p className="text-sm text-bizflow-gray-700">Países con oficinas</p>
          </div>
        </div>

        {/* Clientes y sectores */}
        <div className="mb-8">
          <h3 className="text-center text-xl font-semibold mb-8 text-bizflow-gray-700">
            Empresas líderes en diversos sectores confían en Bizflow
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src="/images/cliente-smith-nephew.svg"
                alt="Smith & Nephew"
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/cliente-fifco.svg"
                alt="FIFCO"
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/cliente-lindley.svg"
                alt="Lindley"
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/cliente-ferreyros.svg"
                alt="Ferreyros"
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/cliente-kimberly.svg"
                alt="Kimberly Clark"
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/cliente-antamina.svg"
                alt="Antamina"
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
