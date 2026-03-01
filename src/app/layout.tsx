import type { Metadata } from 'next';
import { Oswald, Barlow } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'WinWin Window Tint | Premier Window Tinting in San Antonio, TX',
  description:
    'Professional automotive, residential, and commercial window tinting in San Antonio, TX. Premium ceramic films block 96% of heat and 99% of UV rays. Expert installation, lifetime warranty. Free quotes — call today.',
  keywords: [
    'window tint san antonio',
    'car window tinting san antonio',
    'home window tinting san antonio tx',
    'ceramic window tint',
    'office window tinting',
    'window tint helotes',
    'window tint boerne tx',
    'window tint new braunfels',
    'window tint schertz tx',
    'window tint stone oak',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://winwinwindowtint.com/#business',
      name: 'WinWin Window Tint',
      description:
        'Professional automotive, residential, and commercial window tinting in San Antonio, TX. Premium ceramic films, expert installation, lifetime warranty.',
      url: 'https://winwinwindowtint.com',
      telephone: '+1-210-555-0199',
      priceRange: '$$',
      image: 'https://winwinwindowtint.com/android-chrome-512x512.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Antonio',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.4241,
        longitude: -98.4936,
      },
      areaServed: [
        { '@type': 'City', name: 'San Antonio', sameAs: 'https://en.wikipedia.org/wiki/San_Antonio' },
        { '@type': 'City', name: 'Helotes' },
        { '@type': 'City', name: 'Boerne' },
        { '@type': 'City', name: 'New Braunfels' },
        { '@type': 'City', name: 'Schertz' },
        { '@type': 'City', name: 'Converse' },
        { '@type': 'City', name: 'Live Oak' },
        { '@type': 'City', name: 'Cibolo' },
        { '@type': 'AdministrativeArea', name: 'Stone Oak, San Antonio' },
        { '@type': 'AdministrativeArea', name: 'Alamo Ranch, San Antonio' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Window Tinting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automotive Window Tinting',
              description:
                'Professional car window tinting with ceramic, carbon, and dyed film options. UV protection, heat rejection, and glare reduction for all vehicle types.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Residential Window Tinting',
              description:
                'Home window tinting to reduce energy costs, protect furniture from UV fading, and add privacy. Ideal for San Antonio summers.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Window Tinting',
              description:
                'Office and commercial building window film installation for energy savings, glare reduction, and professional appearance.',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${oswald.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
