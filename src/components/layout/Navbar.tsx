"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { 
  ChevronDown, 
  Menu, 
  X,
  Monitor,
  Smartphone,
  Cloud,
  BarChart3,
  Cog,
  Network,
  WifiOff,
  Factory,
  Pill,
  Mountain,
  Coffee,
  Zap,
  Users,
  Truck,
  HardHat,
  Wrench,
  Settings,
  Building2,
  Dna,
  MapPin,
  Award,
  Heart,
  Users2,
  GraduationCap
} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div 
            className="relative h-10 w-32 mr-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/logo-bizflow.svg"
              alt="Bizflow Logo"
              fill
              className="object-contain"
              priority
              crossOrigin="anonymous"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Servicios Dropdown */}
          <DropdownMenu 
            onOpenChange={(open) => setActiveDropdown(open ? 'servicios' : null)}
          >
            <DropdownMenuTrigger 
              className={`group flex items-center px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-all ${
                activeDropdown === 'servicios' ? 'bg-bizflow-blue-50 text-bizflow-blue-600' : ''
              }`}
            >
              <span className="relative">
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bizflow-blue-600 transition-all duration-300 group-hover:w-full"/>
              </span>
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                activeDropdown === 'servicios' ? 'rotate-180' : ''
              }`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 p-2 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {[
                  { href: '/servicios/software-operativo', label: 'Software Operativo', icon: <Monitor className="w-4 h-4" /> },
                  { href: '/servicios/apps-empresariales', label: 'Apps para su Empresa', icon: <Smartphone className="w-4 h-4" /> },
                  { href: '/servicios/software-as-a-service', label: 'SaaS (Software as a Service)', icon: <Cloud className="w-4 h-4" /> },
                  { href: '/servicios/analitica-industrial', label: 'Analítica Industrial', icon: <BarChart3 className="w-4 h-4" /> },
                  { href: '/servicios/automatizacion', label: 'Automatización', icon: <Cog className="w-4 h-4" /> },
                  { href: '/servicios/integracion', label: 'Integración de Sistemas', icon: <Network className="w-4 h-4" /> },
                  { href: '/servicios/infraestructura-soporte', label: 'Infraestructura y Soporte', icon: <WifiOff className="w-4 h-4" /> }
                ].map((item) => (
                  <DropdownMenuItem key={item.href} className="focus:bg-bizflow-blue-50">
                    <Link 
                      href={item.href} 
                      className="w-full px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-bizflow-blue-600">{item.icon}</span>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Industrias Dropdown */}
          <DropdownMenu
            onOpenChange={(open) => setActiveDropdown(open ? 'industrias' : null)}
          >
            <DropdownMenuTrigger 
              className={`group flex items-center px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-all ${
                activeDropdown === 'industrias' ? 'bg-bizflow-blue-50 text-bizflow-blue-600' : ''
              }`}
            >
              <span className="relative">
                Industrias
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bizflow-blue-600 transition-all duration-300 group-hover:w-full"/>
              </span>
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                activeDropdown === 'industrias' ? 'rotate-180' : ''
              }`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {[
                  { href: '/industrias/manufactura', label: 'Manufactura', icon: <Factory className="w-4 h-4" /> },
                  { href: '/industrias/farmaceutica', label: 'Farmacéutica', icon: <Pill className="w-4 h-4" /> },
                  { href: '/industrias/mineria', label: 'Minería', icon: <Mountain className="w-4 h-4" /> },
                  { href: '/industrias/alimentos-bebidas', label: 'Alimentos y Bebidas', icon: <Coffee className="w-4 h-4" /> },
                  { href: '/industrias/energia', label: 'Energía', icon: <Zap className="w-4 h-4" /> }
                ].map((item) => (
                  <DropdownMenuItem key={item.href} className="focus:bg-bizflow-blue-50">
                    <Link 
                      href={item.href} 
                      className="w-full px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-bizflow-blue-600">{item.icon}</span>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Áreas Funcionales Dropdown */}
          <DropdownMenu
            onOpenChange={(open) => setActiveDropdown(open ? 'areas' : null)}
          >
            <DropdownMenuTrigger 
              className={`group flex items-center px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-all ${
                activeDropdown === 'areas' ? 'bg-bizflow-blue-50 text-bizflow-blue-600' : ''
              }`}
            >
              <span className="relative">
                Áreas Funcionales
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bizflow-blue-600 transition-all duration-300 group-hover:w-full"/>
              </span>
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                activeDropdown === 'areas' ? 'rotate-180' : ''
              }`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {[
                  { href: '/areas-funcionales/recursos-humanos', label: 'Recursos Humanos', icon: <Users className="w-4 h-4" /> },
                  { href: '/areas-funcionales/logistica', label: 'Logística', icon: <Truck className="w-4 h-4" /> },
                  { href: '/areas-funcionales/seguridad', label: 'Seguridad Industrial', icon: <HardHat className="w-4 h-4" /> },
                  { href: '/areas-funcionales/produccion', label: 'Producción', icon: <Settings className="w-4 h-4" /> },
                  { href: '/areas-funcionales/mantenimiento', label: 'Mantenimiento', icon: <Wrench className="w-4 h-4" /> }
                ].map((item) => (
                  <DropdownMenuItem key={item.href} className="focus:bg-bizflow-blue-50">
                    <Link 
                      href={item.href} 
                      className="w-full px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-bizflow-blue-600">{item.icon}</span>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Acerca de Dropdown */}
          <DropdownMenu
            onOpenChange={(open) => setActiveDropdown(open ? 'acerca' : null)}
          >
            <DropdownMenuTrigger 
              className={`group flex items-center px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-all ${
                activeDropdown === 'acerca' ? 'bg-bizflow-blue-50 text-bizflow-blue-600' : ''
              }`}
            >
              <span className="relative">
                Acerca de
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bizflow-blue-600 transition-all duration-300 group-hover:w-full"/>
              </span>
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                activeDropdown === 'acerca' ? 'rotate-180' : ''
              }`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {[
                  { href: '/acerca-de', label: 'Quiénes Somos', icon: <Building2 className="w-4 h-4" /> },
                  { href: '/acerca-de#adn-industrial', label: 'ADN Industrial', icon: <Dna className="w-4 h-4" /> },
                  { href: '/acerca-de#donde-estamos', label: 'Dónde Estamos', icon: <MapPin className="w-4 h-4" /> },
                  { href: '/acerca-de#certificaciones', label: 'Certificaciones y Alianzas', icon: <Award className="w-4 h-4" /> },
                  { href: '/acerca-de#valores', label: 'Nuestros Valores', icon: <Heart className="w-4 h-4" /> },
                  { href: '/acerca-de#equipo', label: 'El Equipo Bizflow', icon: <Users2 className="w-4 h-4" /> }
                ].map((item) => (
                  <DropdownMenuItem key={item.href} className="focus:bg-bizflow-blue-50">
                    <Link 
                      href={item.href} 
                      className="w-full px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-bizflow-blue-600">{item.icon}</span>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Carreras Link */}
          <Link 
            href="/carreras" 
            className="group px-3 py-2 rounded-md text-bizflow-gray-700 hover:text-bizflow-blue-600 font-medium transition-colors relative flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="relative">
              Carreras
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bizflow-blue-600 transition-all duration-300 group-hover:w-full"/>
            </span>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button 
            asChild 
            variant="outline" 
            className="border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50 transition-all duration-300"
          >
            <Link href="/contacto">Contacto</Link>
          </Button>
          <Button 
            asChild 
            className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white shadow-lg hover:shadow-bizflow-blue-200/50 transition-all duration-300"
          >
            <Link href="/demo">Solicitar Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-bizflow-blue-50"
              >
                <Menu className="h-6 w-6 text-bizflow-gray-700" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[350px] bg-white/95 backdrop-blur-md"
            >
              <motion.div 
                className="flex flex-col h-full py-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-10 w-32 mr-2">
                      <Image
                        src="/images/logo-bizflow.svg"
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
                  {/* Mobile menu sections */}
                  {[
                    {
                      title: 'Servicios',
                      items: [
                        { href: '/servicios/software-operativo', label: 'Software Operativo' },
                        { href: '/servicios/apps-empresariales', label: 'Apps para su Empresa' },
                        { href: '/servicios/software-as-a-service', label: 'SaaS (Software as a Service)' },
                        { href: '/servicios/analitica-industrial', label: 'Analítica Industrial' },
                        { href: '/servicios/automatizacion', label: 'Automatización' },
                        { href: '/servicios/integracion', label: 'Integración de Sistemas' },
                        { href: '/servicios/infraestructura-soporte', label: 'Infraestructura y Soporte' }
                      ]
                    },
                    {
                      title: 'Industrias',
                      items: [
                        { href: '/industrias/manufactura', label: 'Manufactura' },
                        { href: '/industrias/farmaceutica', label: 'Farmacéutica' },
                        { href: '/industrias/mineria', label: 'Minería' },
                        { href: '/industrias/alimentos-bebidas', label: 'Alimentos y Bebidas' },
                        { href: '/industrias/energia', label: 'Energía' }
                      ]
                    },
                    {
                      title: 'Áreas Funcionales',
                      items: [
                        { href: '/areas-funcionales/recursos-humanos', label: 'Recursos Humanos' },
                        { href: '/areas-funcionales/logistica', label: 'Logística' },
                        { href: '/areas-funcionales/seguridad', label: 'Seguridad Industrial' },
                        { href: '/areas-funcionales/produccion', label: 'Producción' },
                        { href: '/areas-funcionales/mantenimiento', label: 'Mantenimiento' }
                      ]
                    },
                    {
                      title: 'Acerca de',
                      items: [
                        { href: '/acerca-de', label: 'Quiénes Somos' },
                        { href: '/acerca-de#adn-industrial', label: 'ADN Industrial' },
                        { href: '/acerca-de#donde-estamos', label: 'Dónde Estamos' },
                        { href: '/acerca-de#certificaciones', label: 'Certificaciones y Alianzas' },
                        { href: '/acerca-de#valores', label: 'Nuestros Valores' },
                        { href: '/acerca-de#equipo', label: 'El Equipo Bizflow' }
                      ]
                    }
                  ].map((section) => (
                    <div key={section.title} className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
                      <h3 className="font-semibold text-bizflow-blue-800">{section.title}</h3>
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors pl-3"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {/* Carreras Link - Mobile */}
                  <div className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
                    <Link 
                      href="/carreras" 
                      className="font-semibold text-bizflow-blue-800 hover:text-bizflow-blue-600 transition-colors"
                    >
                      Carreras
                    </Link>
                  </div>
                </nav>

                <div className="flex flex-col space-y-3 mt-6">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50"
                  >
                    <Link href="/contacto">Contacto</Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white shadow-lg hover:shadow-bizflow-blue-200/50"
                  >
                    <Link href="/demo">Solicitar Demo</Link>
                  </Button>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
