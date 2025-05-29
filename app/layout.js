import ScrollToTop from "../components/ScrollToTop";
import Context from '@/context/Context';
import AOSInitializer from "../components/AOSInitializer";
import '../public/main.scss'
import './globals.css'

// SEO Metadata for the entire site
export const metadata = {
  metadataBase: new URL('https://1stgenepoxy.com'),
  title: {
    template: '%s | 1st Gen Epoxy - Premium Epoxy Flooring',
    default: '1st Gen Epoxy - Premium Epoxy Flooring Solutions in Oklahoma'
  },
  description: '1st Gen Epoxy offers high-quality epoxy flooring solutions for garages, basements & commercial spaces. Family-owned, built on pride and craftsmanship. Get a free quote!',
  keywords: ['epoxy flooring', 'garage floor coating', 'Oklahoma epoxy', 'concrete coating', 'industrial flooring', 'residential epoxy', 'epoxy installation'],
  authors: [{ name: '1st Gen Epoxy' }],
  creator: '1st Gen Epoxy',
  publisher: '1st Gen Epoxy',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: '1st Gen Epoxy - Premium Epoxy Flooring Solutions in Oklahoma',
    description: 'Professional epoxy flooring installation for garages, basements, and commercial spaces. Family-owned business delivering quality and craftsmanship.',
    url: 'https://1stgenepoxy.com',
    siteName: '1st Gen Epoxy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: '1st Gen Epoxy Flooring Services'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1st Gen Epoxy - Premium Epoxy Flooring',
    description: 'Professional epoxy flooring installation for homes and businesses in Oklahoma',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500&display=swap"/>
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "1st Gen Epoxy",
              "image": "https://1stgenepoxy.com/images/logo.png",
              "@id": "https://1stgenepoxy.com",
              "url": "https://1stgenepoxy.com",
              "telephone": "+1-555-123-4567", // Replace with actual phone number
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street", // Replace with actual address
                "addressLocality": "Oklahoma City",
                "addressRegion": "OK",
                "postalCode": "73102",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.4676, // Replace with actual coordinates
                "longitude": -97.5164
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "15:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/1stgenepoxy",
                "https://www.instagram.com/1stgenepoxy"
              ]
            })
          }}
        />
      </head>
      <body>
        <div>
          <Context>
            {children}
          </Context>
        </div>
        <AOSInitializer />
        {<ScrollToTop/>}
      </body>
    </html>
  )
}
