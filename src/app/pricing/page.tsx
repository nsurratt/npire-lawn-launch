import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lawn Care Pricing — Marietta, GA',
  description:
    "Honest, upfront lawn care pricing for Marietta, GA. No hidden fees. Get a free custom quote from Danny Green and the crew. Call (770) 555-0162.",
}

export default function PricingPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Honest Pricing. No Surprises.
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            We quote based on what we see — yard size, condition, and what the job actually takes. These are starting ranges; your exact quote comes after a walkthrough.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                tier: 'Small Yard',
                range: 'From $45/visit',
                size: 'Up to 5,000 sq ft',
                features: ['Mow, edge, trim, blow', 'Biweekly or weekly', 'Same crew every visit'],
                accent: false,
              },
              {
                tier: 'Medium Yard',
                range: 'From $60/visit',
                size: '5,000–10,000 sq ft',
                features: ['Mow, edge, trim, blow', 'Weekly recommended', 'Season package available'],
                accent: true,
              },
              {
                tier: 'Large Yard',
                range: 'Custom Quote',
                size: '10,000+ sq ft',
                features: ['Full mowing crew', 'Landscaping add-ons', 'Annual program pricing'],
                accent: false,
              },
            ].map((tier) => (
              <div key={tier.tier}
                style={{
                  backgroundColor: tier.accent ? '#2D5016' : '#F5F0E8',
                  borderRadius: '12px',
                }}
                className={`p-8 ${tier.accent ? 'text-white' : ''}`}>
                <h3 className={`font-heading mb-1 ${tier.accent ? 'text-white' : 'text-brand-text-primary'}`}
                  style={{ fontSize: '22px' }}>
                  {tier.tier}
                </h3>
                <p className={`font-body text-sm mb-1 ${tier.accent ? 'text-white/60' : 'text-brand-text-muted'}`}>
                  {tier.size}
                </p>
                <p className={`font-body font-bold text-2xl mb-6 ${tier.accent ? 'text-brand-accent' : 'text-brand-accent'}`}>
                  {tier.range}
                </p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`font-body text-sm flex items-center gap-2 ${tier.accent ? 'text-white/80' : 'text-brand-text-secondary'}`}>
                      <span aria-hidden="true" className="text-brand-accent">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`block text-center font-body font-semibold py-3 rounded-lg transition-colors ${tier.accent
                    ? 'bg-brand-accent hover:bg-brand-accent-hover text-white'
                    : 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'}`}>
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-8">
            <h2 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: '28px' }}>
              Additional Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { service: 'Fertilization Program (5 applications)', price: 'From $380/season' },
                { service: 'Core Aeration', price: 'From $120' },
                { service: 'Aeration + Overseeding', price: 'From $195' },
                { service: 'Mulch Installation (per yard)', price: 'From $75 installed' },
                { service: 'Spring / Fall Cleanup', price: 'Custom quote' },
                { service: 'One-Time Landscape Project', price: 'Custom quote' },
              ].map((item) => (
                <div key={item.service} className="flex justify-between items-center py-3 border-b border-brand-border last:border-0">
                  <span className="font-body text-brand-text-secondary text-sm">{item.service}</span>
                  <span className="font-body font-semibold text-brand-primary text-sm ml-4 flex-shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Get Your Free Custom Quote"
        subtext="Danny comes out, looks at your yard, and gives you a straight number. No pressure, no obligation."
        ctaText="Request a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
