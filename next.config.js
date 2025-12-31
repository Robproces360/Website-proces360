/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Security Headers - Wereldklasse beveiliging
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Voorkom clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Voorkom MIME type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // XSS bescherming
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Referrer Policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Permissions Policy
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          // HSTS - Force HTTPS
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://api.openai.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
          },
        ],
      },
    ];
  },

  // Sitemap en SEO optimalisaties
  async rewrites() {
    return [
      // Geen rewrites nodig voorlopig
    ];
  },

  // Redirects voor SEO
  async redirects() {
    return [
      // HTTP naar HTTPS redirect (voor productie)
      // Oude URL structuren redirecten indien nodig
    ];
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['proces360.nl', 'www.proces360.nl'],
  },

  // Compression
  compress: true,

  // PoweredBy header verwijderen
  poweredByHeader: false,

  // Trailing slashes consistent
  trailingSlash: false,

  // Generate ETags voor caching
  generateEtags: true,
}

module.exports = nextConfig
