import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DG Green Farms Indore — Best Parties, Gatherings & Private Pool Resort',
  description: 'Discover DG Green Farms Indore - Prime luxury resort & boutique staycation. Perfect destination for private pool parties, family gatherings, romantic candlelight dinners, and premium corporate events in Indore.',
  keywords: 'DG Green Farms, DG Green Farms Indore, resort in Indore, farm house in Indore, best party venue in Indore, private pool resort Indore, candlelight dinner in Indore, luxury farm stay Indore, pool party farm Indore, Indore luxury staycation, family gatherings destination Indore, Parsvnath City Satwik Green',
  authors: [{ name: 'DG Green Farms' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ais-pre-dokameyz2q4l5smn3jmxs4-528392278881.asia-southeast1.run.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://ais-pre-dokameyz2q4l5smn3jmxs4-528392278881.asia-southeast1.run.app',
    title: 'DG Green Farms Indore — Luxury Private Pool Resort & Staycation',
    description: "Indore's finest boutique oasis. Offering private heated pool suites, custom romantic setups, local gourmet dining, and spectacular backdrops for close group gatherings and events.",
    images: ['https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg'],
    siteName: 'DG Green Farms',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DG Green Farms Indore — Best Parties & Staycation Resort',
    description: 'Spectacular boutique farm resort featuring luxury master suites, open-air jacuzzi, custom party lawns, and world-class hospitality in Indore.',
    images: ['https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg',
    shortcut: 'https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg',
    apple: 'https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "DG Green Farms",
  "image": "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg",
  "description": "Premium luxury resort and boutique farm stay in Indore, hosting high-end private staycations, candle-lit anniversaries, poolsides, and social gathering events.",
  "url": "https://ais-pre-dokameyz2q4l5smn3jmxs4-528392278881.asia-southeast1.run.app",
  "telephone": "+919977220204",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "69, 70, Parsvnath City, Satwik Green, Manglaya Sadak, Rahu Khedi",
    "addressLocality": "Indore",
    "addressRegion": "MP",
    "postalCode": "453771",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.801948",
    "longitude": "75.924765"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": "https://www.instagram.com/dggreenfarms",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Private Pool", "value": "true" },
    { "@type": "LocationFeatureSpecification", "name": "Candlelight Dinner Setups", "value": "true" },
    { "@type": "LocationFeatureSpecification", "name": "Luxury Jacuzzi Suites", "value": "true" },
    { "@type": "LocationFeatureSpecification", "name": "Custom Celebrations Decor", "value": "true" },
    { "@type": "LocationFeatureSpecification", "name": "Indori organic culinary service", "value": "true" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}