"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32 mr-2">
            <Image
              src="/logo.svg"
              alt="Bizflow Logo"
              fill
              className="object-contain"
              priority
              crossOrigin="anonymous"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Servicios Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
              Servicios <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/servicios/software-operativo" className="w-full">
                  Software Operativo
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/servicios/automatizacion" className="w-full">
                  Automatización
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/servicios/integracion" className="w-full">
                  Integración de Sistemas
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/servicios/consultoria" className="w-full">
                  Consultoría Tecnológica
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Industrias Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
              Industrias <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/industrias/manufactura" className="w-full">
                  Manufactura
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/industrias/farmaceutica" className="w-full">
                  Farmacéutica
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/industrias/mineria" className="w-full">
                  Minería
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/industrias/alimentos-bebidas" className="w-full">
                  Alimentos y Bebidas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Nosotros Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
              Nosotros <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/nosotros/quienes-somos" className="w-full">
                  Quiénes Somos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/nosotros/equipo" className="w-full">
                  Nuestro Equipo
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/nosotros/certificaciones" className="w-full">
                  Certificaciones
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Casos de Éxito link */}
          <Link href="/casos-exito" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
            Casos de Éxito
          </Link>

          {/* Blog link */}
          <Link href="/blog" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
            Blog
          </Link>
        </div>

        {/* Call to Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild variant="outline" className="border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50">
            <Link href="/contacto">Contacto</Link>
          </Button>
          <Button asChild className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white">
            <Link href="/demo">Solicitar Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full py-6">
                <div className="mb-8">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-10 w-32 mr-2">
                      <Image
                        src="/logo.svg"
                        alt="Bizflow Logo"
                        fill
                        className="object-contain"
                        priority
                        crossOrigin="anonymous"
                      />
                    </div>
                  </Link>
                </div>

                <nav className="flex flex-col space-y-6 flex-grow">
                  <div className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
                    <h3 className="font-semibold text-bizflow-blue-800">Servicios</h3>
                    <Link href="/servicios/software-operativo" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Software Operativo
                    </Link>
                    <Link href="/servicios/automatizacion" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Automatización
                    </Link>
                    <Link href="/servicios/integracion" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Integración de Sistemas
                    </Link>
                    <Link href="/servicios/consultoria" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Consultoría Tecnológica
                    </Link>
                  </div>

                  <div className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
                    <h3 className="font-semibold text-bizflow-blue-800">Industrias</h3>
                    <Link href="/industrias/manufactura" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Manufactura
                    </Link>
                    <Link href="/industrias/farmaceutica" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Farmacéutica
                    </Link>
                    <Link href="/industrias/mineria" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Minería
                    </Link>
                    <Link href="/industrias/alimentos-bebidas" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Alimentos y Bebidas
                    </Link>
                  </div>

                  <div className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
                    <h3 className="font-semibold text-bizflow-blue-800">Nosotros</h3>
                    <Link href="/nosotros/quienes-somos" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Quiénes Somos
                    </Link>
                    <Link href="/nosotros/equipo" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Nuestro Equipo
                    </Link>
                    <Link href="/nosotros/certificaciones" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3">
                      Certificaciones
                    </Link>
                  </div>

                  <Link href="/casos-exito" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
                    Casos de Éxito
                  </Link>

                  <Link href="/blog" className="text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors">
                    Blog
                  </Link>
                </nav>

                <div className="flex flex-col space-y-3 mt-6">
                  <Button asChild variant="outline" className="w-full border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50">
                    <Link href="/contacto">Contacto</Link>
                  </Button>
                  <Button asChild className="w-full bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white">
                    <Link href="/demo">Solicitar Demo</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
