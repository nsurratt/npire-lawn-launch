import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileBottomCTA from '@/components/MobileBottomCTA'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://neighborslawn.com'),
  title: {
    template: "%s | Neighbor's Lawn & Garden",
    default: "Neighbor's Lawn & Garden — Family-Owned Lawn Care in Marietta, GA",
  },
  description:
    "Danny Green and the crew have been keeping Marietta lawns looking great since 2012. Family-owned lawn mowing, landscaping, fertilization, and weed control. Serving Marietta, Smyrna, Kennesaw, and surrounding areas.",
  keywords: [
    'lawn care Marietta GA',
    'lawn mowing Marietta',
    'landscaping Marietta GA',
    'lawn service Smyrna GA',
    'family owned lawn care Marietta',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neighborslawn.com',
    siteName: "Neighbor's Lawn & Garden",
    title: "Neighbor's Lawn & Garden — Family-Owned Lawn Care in Marietta, GA",
    description:
      "Danny Green and the crew have been keeping Marietta lawns looking great since 2012. Real neighbors, reliable work.",
    images: [
      {
        url: 'https://picsum.photos/seed/neighbors-lawn-hero/1200/630',
        width: 1200,
        height: 630,
        alt: "Neighbor's Lawn & Garden — Marietta, GA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Neighbor's Lawn & Garden — Family-Owned Lawn Care in Marietta, GA",
    description:
      "Danny Green and the crew. Real neighbors, reliable work. Licensed GA lawn care since 2012.",
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'LandscapeService'],
  name: "Neighbor's Lawn & Garden",
  image: 'https://picsum.photos/seed/neighbors-lawn-hero/1200/630',
  telephone: '+17705550162',
  email: 'hello@neighborslawn.com',
  url: 'https://neighborslawn.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '612 Powder Springs St',
    addressLocality: 'Marietta',
    addressRegion: 'GA',
    postalCode: '30060',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '89',
  },
  areaServed: [
    'Marietta, GA',
    'Smyrna, GA',
    'Kennesaw, GA',
    'Acworth, GA',
    'Powder Springs, GA',
    'Austell, GA',
    'Mableton, GA',
    'Vinings, GA',
  ],
  foundingDate: '2012',
  founder: {
    '@type': 'Person',
    name: 'Danny Green',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSerifDisplay.variable + ' ' + dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body text-brand-text-primary antialiased" style={{ backgroundColor: '#FEFDF8' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-white focus:text-brand-primary focus:font-semibold focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md"
        >
          Skip to main content
        </a>
        <header>
          <AnnouncementBar />
          <Navigation />
        </header>
        <main id="main-content" className="pt-24">
          {children}
        </main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  )
}
