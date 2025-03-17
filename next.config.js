/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Set the metadata base URL for production
  // This fixes the warning about metadata base URL
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production'
      ? 'https://tulip-clone.same-app.com'
      : 'http://localhost:3000'
  },
};

// Documentation for issues with Image components:
// Note: We fixed hydration issues by adding crossOrigin="anonymous" to all Image components
// Don't use the crossOrigin setting here as it's not a recognized option in Next.js 15

export default nextConfig;
