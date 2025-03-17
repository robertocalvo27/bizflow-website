import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ErrorMonitoring from "@/components/ErrorMonitoring";
import { CookieBanner } from "@/components/cookies/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Bizflow - Software Industrial',
    default: 'Bizflow - Software Industrial para Operaciones Ágiles',
  },
  description: "Soluciones de software industrial para operaciones más ágiles e inteligentes. Transformación digital para manufactura, minería y farmacéutica.",
  keywords: [
    "software industrial",
    "transformación digital",
    "automatización",
    "operaciones industriales",
    "software operativo",
    "integraciones SAP",
    "digitalización excel"
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://bizflow.pe/',
    title: 'Bizflow - Software Industrial para Operaciones Ágiles',
    description: 'Transformamos operaciones industriales con soluciones de software ágiles, implementadas en semanas, no años.',
    siteName: 'Bizflow',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bizflow - Software Industrial',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ErrorMonitoring />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
