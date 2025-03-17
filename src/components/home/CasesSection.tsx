"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const CasesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Historias de éxito que transforman industrias
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones han ayudado a empresas líderes a resolver desafíos operativos complejos y alcanzar resultados medibles en tiempo récord.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16 bg-bizflow-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-96 lg:h-full">
              <Image
                src="/images/smith-nephew-medical.jpg"
                alt="Smith & Nephew - Optimización de operaciones médicas"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bizflow-blue-900/50 to-transparent"></div>
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <Image
                  src="/images/cliente-smith-nephew.svg"
                  alt="Smith & Nephew Logo"
                  width={120}
                  height={50}
                  className="h-auto bg-white/90 rounded p-2"
                  crossOrigin="anonymous"
                />
                <span className="bg-white/90 text-bizflow-blue-900 text-sm px-2 py-1 rounded">
                  Costa Rica
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-bizflow-blue-900 mb-4">
                Smith & Nephew transforma su gestión de calidad
              </h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-bizflow-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-bizflow-gray-700">Reducción de 75% en tiempo de captura de datos de inspección</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-bizflow-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-bizflow-gray-700">Eliminación de 100% de registros en papel y archivos Excel</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-bizflow-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-bizflow-gray-700">Implementación completa en 8 semanas con integración SAP</span>
                </li>
              </ul>
              <div className="mb-6 bg-white p-4 rounded-lg border-l-4 border-bizflow-purple-500 shadow-sm">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-bizflow-purple-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="italic text-bizflow-gray-700 mb-2">
                      "Bizflow no solo entendió nuestros procesos industriales, sino que implementó una solución que en menos de 2 meses ya estaba generando resultados. Su experiencia en planta fue clave."
                    </p>
                    <p className="font-semibold text-bizflow-blue-800">
                      Carlos Moreno, Director de Operaciones
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="inline-flex self-start bizflow-button">
                <Link href="/casos-exito/smith-nephew">
                  Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* More Case Studies */}
        <Tabs defaultValue="manufactura" className="w-full">
          <div className="text-center mb-8">
            <TabsList className="inline-flex">
              <TabsTrigger value="manufactura" className="px-4 py-2">Manufactura</TabsTrigger>
              <TabsTrigger value="mineria" className="px-4 py-2">Minería</TabsTrigger>
              <TabsTrigger value="farmaceutica" className="px-4 py-2">Farmacéutica</TabsTrigger>
              <TabsTrigger value="alimentos" className="px-4 py-2">Alimentos y Bebidas</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="manufactura" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/kimberly-clark-costa-rica.jpg"
                    alt="Planta de producción Kimberly Clark Costa Rica"
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-bizflow-blue-800">Kimberly Clark</h4>
                      <span className="text-sm text-bizflow-gray-600">Perú</span>
                    </div>
                    <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                      Manufactura
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                    Transformación digital en líneas de producción
                  </h3>
                  <p className="text-bizflow-gray-600 text-sm mb-4">
                    Implementamos un sistema de registro OEE digital que elevó la eficiencia global en 15% en solo 3 meses.
                  </p>
                  <Link href="/casos-exito/kimberly-clark" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                    Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/ferreyros-caterpillar.jpg"
                    alt="Maquinaria Caterpillar distribuida por Ferreyros"
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-bizflow-blue-800">Ferreyros</h4>
                      <span className="text-sm text-bizflow-gray-600">Perú</span>
                    </div>
                    <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                      Manufactura
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                    Sistema de gestión de mantenimiento
                  </h3>
                  <p className="text-bizflow-gray-600 text-sm mb-4">
                    Solución móvil para técnicos que redujo tiempos administrativos en 40% y mejoró precisión de datos.
                  </p>
                  <Link href="/casos-exito/ferreyros" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                    Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/aceros-arequipa-planta.jpg"
                    alt="Planta industrial Aceros Arequipa"
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-bizflow-blue-800">Aceros Arequipa</h4>
                      <span className="text-sm text-bizflow-gray-600">Perú</span>
                    </div>
                    <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                      Manufactura
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                    Control de inventario industrial
                  </h3>
                  <p className="text-bizflow-gray-600 text-sm mb-4">
                    Implementamos un sistema con código QR que redujo errores de inventario en 90% e integró con SAP.
                  </p>
                  <Link href="/casos-exito/aceros-arequipa" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                    Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mineria" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/antamina-operaciones.jpg"
                    alt="Operaciones mineras Antamina"
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-bizflow-blue-800">Antamina</h4>
                      <span className="text-sm text-bizflow-gray-600">Perú</span>
                    </div>
                    <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                      Minería
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                    Sistema de gestión de seguridad
                  </h3>
                  <p className="text-bizflow-gray-600 text-sm mb-4">
                    Solución digital para reportes de seguridad que elevó reportes preventivos en 300% en 2 meses.
                  </p>
                  <Link href="/casos-exito/antamina" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                    Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>

              {/* Añadir más casos de minería aquí */}
            </div>
          </TabsContent>

          {/* Contenido para otras pestañas */}
          <TabsContent value="farmaceutica" className="space-y-0">
            {/* Contenido para Farmacéutica */}
          </TabsContent>

          <TabsContent value="alimentos" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src="/images/fifco-beverages.jpg"
                    alt="Optimización de procesos FIFCO"
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-bizflow-blue-800">FIFCO</h4>
                      <span className="text-sm text-bizflow-gray-600">Costa Rica</span>
                    </div>
                    <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                      Alimentos y Bebidas
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                    Digitalización de control de calidad
                  </h3>
                  <p className="text-bizflow-gray-600 text-sm mb-4">
                    Implementación de sistema digital que redujo tiempo de análisis en 60% y mejoró trazabilidad.
                  </p>
                  <Link href="/casos-exito/fifco" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                    Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="bizflow-button-outline">
            <Link href="/casos-exito">
              Ver todos los casos de éxito <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CasesSection
