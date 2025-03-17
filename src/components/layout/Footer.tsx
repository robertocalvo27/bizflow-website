"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bizflow-blue-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo-white.svg"
                  alt="Bizflow Logo"
                  fill
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            </Link>
            <p className="text-bizflow-gray-300 mb-6 max-w-xs">
              Impulsamos la transformación digital de las operaciones industriales con soluciones tecnológicas ágiles y de alto impacto.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com/company/bizflow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bizflow-purple-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com/bizflow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bizflow-purple-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com/bizflow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bizflow-purple-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com/bizflow" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bizflow-purple-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios/software-operativo" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Software Operativo
                </Link>
              </li>
              <li>
                <Link href="/servicios/apps-empresariales" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Apps para su Empresa
                </Link>
              </li>
              <li>
                <Link href="/servicios/saas" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  SaaS (Software as a Service)
                </Link>
              </li>
              <li>
                <Link href="/servicios/analitica-industrial" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Analítica Industrial
                </Link>
              </li>
              <li>
                <Link href="/servicios/automatizacion" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link href="/servicios/integracion" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Integración de Sistemas
                </Link>
              </li>
              <li>
                <Link href="/servicios/infraestructura-soporte" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Infraestructura y Soporte Remoto
                </Link>
              </li>
            </ul>
          </div>

          {/* Industrias */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Industrias</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industrias/manufactura" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Manufactura
                </Link>
              </li>
              <li>
                <Link href="/industrias/farmaceutica" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Farmacéutica
                </Link>
              </li>
              <li>
                <Link href="/industrias/mineria" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Minería
                </Link>
              </li>
              <li>
                <Link href="/industrias/alimentos-bebidas" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  Alimentos y Bebidas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-bizflow-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-bizflow-gray-300">
                  Av. Javier Prado Este 488, San Isidro<br />Lima, Perú
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-bizflow-purple-400 flex-shrink-0" />
                <Link href="tel:+5117154789" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  +51 (1) 715-4789
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-bizflow-purple-400 flex-shrink-0" />
                <Link href="mailto:info@bizflow.pe" className="text-bizflow-gray-300 hover:text-white transition-colors">
                  info@bizflow.pe
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="border-t border-bizflow-blue-800 pt-8 mt-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center mb-8 gap-6">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <Image
                  src="/images/cert-aws.svg"
                  alt="AWS Partner"
                  width={80}
                  height={40}
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/cert-iso27001.svg"
                  alt="ISO 27001"
                  width={80}
                  height={40}
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/cert-iso9001.svg"
                  alt="ISO 9001"
                  width={80}
                  height={40}
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <div>
              <Link href="/contacto" className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white font-medium px-5 py-2.5 rounded-md transition-all inline-block">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright y enlaces legales */}
        <div className="border-t border-bizflow-blue-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-bizflow-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bizflow. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link href="/politica-privacidad" className="text-bizflow-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-bizflow-gray-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/mapa-sitio" className="text-bizflow-gray-400 hover:text-white text-sm transition-colors">
                Mapa del Sitio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
