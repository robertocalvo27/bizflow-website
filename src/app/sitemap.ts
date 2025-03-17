import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bizflow.pe'
  
  // Rutas estáticas principales
  const mainRoutes = [
    '',
    '/nosotros',
    '/servicios',
    '/contacto',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Rutas de servicios
  const serviceRoutes = [
    '/servicios/software-operativo',
    '/servicios/apps-empresariales',
    '/servicios/software-as-a-service',
    '/servicios/analitica-industrial',
    '/servicios/automatizacion',
    '/servicios/integracion',
    '/servicios/infraestructura-soporte',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Rutas de industrias
  const industryRoutes = [
    '/industrias/manufactura',
    '/industrias/farmaceutica',
    '/industrias/mineria',
    '/industrias/alimentos-bebidas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Rutas legales y utilidades
  const utilityRoutes = [
    '/politica-privacidad',
    '/terminos-condiciones',
    '/mapa-sitio',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  return [...mainRoutes, ...serviceRoutes, ...industryRoutes, ...utilityRoutes]
} 