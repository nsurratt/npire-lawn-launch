import Link from 'next/link'
import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import { serviceAreaDetails } from '@/content/home'

export const metadata: Metadata = {
  title: 'Service Areas — Marietta, GA and Surrounding',
  description:
    "Neighbor's Lawn & Garden serves Marietta, Smyrna, Kennesaw, Acworth, Powder Springs, Austell, Mableton, and Vinings, GA. Call (770) 555-0162.",
}

export default function ServiceAreasPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            We Know These Neighborhoods — We Live Here
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            Danny lives in Marietta. The crew lives in these communities. When you hire Neighbor&apos;s Lawn, you&apos;re hiring someone who has a stake in how this area looks.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceAreaDetails.map((area) => (
              <Link key={area.city} href={`/service-areas/${area.city.toLowerCase().replace(/\s+/g, '-')}`} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="block p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-accent text-xl" aria-hidden="true">📍</span>
                  <h2 className="font-heading text-brand-text-primary" style={{ fontSize: '22px' }}>
                    {area.city}, GA
                  </h2>
                </div>
                <p className="text-brand-text-secondary font-body text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Mowing & Lawn Care', 'Landscaping', 'Fertilization', 'Aeration'].map((svc) => (
                    <span key={svc} className="bg-brand-primary/10 text-brand-primary font-body font-medium px-3 py-1.5 rounded-lg text-center">
                      {svc}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="mt-10 p-8 text-center">
            <p className="font-body text-brand-text-secondary text-lg mb-4">
              Not sure if you&apos;re in our service area?
            </p>
            <a href="tel:7705550162"
              className="inline-block bg-brand-primary hover:bg-brand-primary-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
              Call (770) 555-0162 — We&apos;ll Let You Know
            </a>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Serving Your Neighborhood"
        subtext="We work in your community because we live in it. Call us for a free estimate and meet your new lawn crew."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
