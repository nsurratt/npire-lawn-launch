import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lawn Aeration & Overseeding — Marietta, GA',
  description:
    "Core aeration and overseeding to loosen Georgia clay and grow a thicker lawn. Serving Marietta, Smyrna, and Kennesaw. Call (770) 555-0162.",
}

export default function AerationPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">
            Aeration &amp; Overseeding
          </span>
          <h1 className="font-heading text-brand-text-primary mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Aeration &amp; Overseeding in Marietta, GA
          </h1>
          <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-6 max-w-2xl">
            Georgia red clay compacts hard. Core aeration breaks it up so water, air, and nutrients can reach grass roots again. Paired with overseeding, it&apos;s the most cost-effective way to thicken a thin lawn.
          </p>
          <Link href="/contact"
            className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
            Schedule Aeration
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8" style={{ fontSize: '34px' }}>
            What We Do &amp; When
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6">
              <div className="text-3xl mb-4" aria-hidden="true">🔄</div>
              <h3 className="font-heading text-brand-text-primary mb-3" style={{ fontSize: '22px' }}>Core Aeration</h3>
              <p className="text-brand-text-secondary font-body text-sm leading-relaxed">
                We pull 2–4&quot; soil plugs across the lawn, relieving compaction and opening channels for water and fertilizer. Best done in late summer for warm-season grasses (Bermuda, Zoysia) or early fall for Fescue.
              </p>
            </div>
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6">
              <div className="text-3xl mb-4" aria-hidden="true">🌱</div>
              <h3 className="font-heading text-brand-text-primary mb-3" style={{ fontSize: '22px' }}>Overseeding</h3>
              <p className="text-brand-text-secondary font-body text-sm leading-relaxed">
                Done immediately after aeration when seed-to-soil contact is best. We use grass seed matched to your existing lawn type — no generic blends that fight your grass.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready for a Thicker, Healthier Lawn?"
        subtext="Danny will come out, assess your lawn, and tell you honestly whether aeration and overseeding will make a difference for your yard."
        ctaText="Get a Free Aeration Quote"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
