import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CTABlock from '@/components/CTABlock'
import { serviceAreaDetails } from '@/content/home'
import { business } from '@/content/business'

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return serviceAreaDetails.map((area) => ({
    city: area.city.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const area = serviceAreaDetails.find(
    (a) => a.city.toLowerCase().replace(/\s+/g, '-') === slug
  )
  if (!area) return {}
  return {
    title: `Lawn Care in ${area.city}, GA | ${business.name}`,
    description: `${business.name} provides mowing, fertilization, aeration, and landscaping in ${area.city}, GA. Family-owned. Call ${business.phone}.`,
  }
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const area = serviceAreaDetails.find(
    (a) => a.city.toLowerCase().replace(/\s+/g, '-') === slug
  )
  if (!area) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LawnCareService',
    name: business.name,
    telephone: business.phone,
    areaServed: { '@type': 'City', name: area.city, containedInPlace: { '@type': 'State', name: 'Georgia' } },
    description: `Lawn care in ${area.city}, GA — mowing, fertilization, aeration, and landscaping.`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-2">
            Lawn Care Service Area
          </p>
          <h1 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Lawn Care Service in {area.city}, GA
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mb-8">{area.description}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${business.phoneTel}`} className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors">
              Call {business.phone}
            </a>
            <Link href="/contact" className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary text-2xl mb-8">
            Lawn Services in {area.city}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div key="Mowing & Lawn Care" style={{ backgroundColor: '#F5F0E8', borderRadius: '10px' }} className="p-4 text-center"><p className="font-body font-semibold text-brand-text-primary text-sm">Mowing & Lawn Care</p></div>
              <div key="Landscaping" style={{ backgroundColor: '#F5F0E8', borderRadius: '10px' }} className="p-4 text-center"><p className="font-body font-semibold text-brand-text-primary text-sm">Landscaping</p></div>
              <div key="Fertilization & Weed Control" style={{ backgroundColor: '#F5F0E8', borderRadius: '10px' }} className="p-4 text-center"><p className="font-body font-semibold text-brand-text-primary text-sm">Fertilization & Weed Control</p></div>
              <div key="Aeration & Overseeding" style={{ backgroundColor: '#F5F0E8', borderRadius: '10px' }} className="p-4 text-center"><p className="font-body font-semibold text-brand-text-primary text-sm">Aeration & Overseeding</p></div>
              <div key="Seasonal Treatments" style={{ backgroundColor: '#F5F0E8', borderRadius: '10px' }} className="p-4 text-center"><p className="font-body font-semibold text-brand-text-primary text-sm">Seasonal Treatments</p></div>
              <div key="Free Estimates" style={{ backgroundColor: '#F5F0E8', borderRadius: '10px' }} className="p-4 text-center"><p className="font-body font-semibold text-brand-text-primary text-sm">Free Estimates</p></div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-10 border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-text-secondary font-body mb-4">
            We serve every neighborhood in {area.city} and surrounding areas.
          </p>
          <Link href="/service-areas" className="text-brand-primary font-body font-semibold hover:underline text-sm">
            ← View all service areas
          </Link>
        </div>
      </section>

      <CTABlock
        headline={`Service in ${area.city} — Call Us`}
        subtext={`${area.description} Honest pricing, no surprises.`}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone={business.phone}
        phoneTel={business.phoneTel}
        warm={true}
      />
    </>
  )
}
