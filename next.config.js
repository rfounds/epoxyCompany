/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    domains: ['img.icons8.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Enables compression for better performance
  compress: true,
  
  // Adds trailing slash for consistent URL structures
  trailingSlash: false,
  
  // Configures headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects for old URLs or common misspellings
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/#about',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
