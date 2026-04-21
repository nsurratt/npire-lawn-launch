import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Landscaping Services — Marietta, GA',
  description:
    "Full-service landscaping in Marietta, GA. Mulch installation, bed cleanup, shrub trimming, and plantings designed for the Georgia climate. Call (770) 555-0162.",
}

export default function LandscapingPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Landscaping
              </span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
                Landscaping in Marietta, GA
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-6">
                Marcus Washington leads our landscaping work and has spent years learning what grows and what survives in Georgia&apos;s climate. We plant for the long term, not just the sale.
              </p>
              <Link href="/contact"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Landscaping Quote
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img src="https://picsum.photos/seed/landscaping-marietta/800/500"
                alt="Landscaping project in Marietta, GA"
                className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8" style={{ fontSize: '34px' }}>
            Landscaping Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '🌱', title: 'Mulch Installation', desc: 'Fresh mulch in beds — weed suppression and a clean, finished look.' },
              { icon: '✂️', title: 'Shrub & Hedge Trimming', desc: 'Shaped for your yard\'s proportions, not just knocked down to size.' },
              { icon: '🌸', title: 'Seasonal Planting', desc: 'Georgia-appropriate plants that actually survive the summer heat.' },
              { icon: '🍂', title: 'Bed Cleanup & Weeding', desc: 'Spring and fall cleanups to keep your beds looking intentional.' },
              { icon: '🌿', title: 'Edging & Border Definition', desc: 'Crisp lines between grass, beds, and hardscape.' },
              { icon: '🌳', title: 'Tree & Large Shrub Work', desc: 'Shaping and cleanup around mature trees and large hedges.' },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-5 flex gap-3">
                <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="font-body font-semibold text-brand-text-primary text-sm mb-1">{item.title}</p>
                  <p className="text-brand-text-secondary font-body text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Let's Talk About Your Yard"
        subtext="Danny or Marcus will come take a look and give you an honest quote — no upsell, no pressure."
        ctaText="Get a Free Landscaping Quote"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
