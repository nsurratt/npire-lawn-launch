import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fertilizer & Weed Control — Marietta, GA',
  description:
    "Season-specific lawn fertilization and weed control programs in Marietta, GA. Danny Green holds the GA Pesticide Applicator License. Call (770) 555-0162.",
}

export default function FertilizerPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Fertilization &amp; Weed Control
              </span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
                Fertilizer &amp; Weed Control in Marietta
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-4">
                Danny holds the Georgia Pesticide Applicator License — we don&apos;t hand this work off to an unlicensed sub. Our programs are tuned for Georgia&apos;s warm-season grasses and the Cobb County climate.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary rounded-lg px-4 py-2 mb-6">
                <span aria-hidden="true">🏅</span>
                <span className="font-body text-sm font-semibold">GA Pesticide Applicator License</span>
              </div>
              <div className="block">
                <Link href="/contact"
                  className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
                  Get a Treatment Quote
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img src="https://picsum.photos/seed/fertilizer-lawn/800/500"
                alt="Lawn fertilization in Marietta, GA"
                className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-4" style={{ fontSize: '34px' }}>
            Our Treatment Program
          </h2>
          <p className="text-brand-text-secondary font-body text-lg mb-8">
            A 5–6 application annual program timed for Georgia&apos;s seasons. We treat Bermuda, Zoysia, Fescue, and St. Augustine.
          </p>
          <div className="space-y-4">
            {[
              { season: 'Early Spring', treatment: 'Pre-emergent crabgrass control + slow-release starter fertilizer' },
              { season: 'Late Spring', treatment: 'Post-emergent broadleaf weed control + fertilization' },
              { season: 'Summer', treatment: 'Grub and insect control + balanced fertilizer for heat tolerance' },
              { season: 'Early Fall', treatment: 'Weed control + fertilizer to strengthen roots before dormancy' },
              { season: 'Late Fall / Winter', treatment: 'Pre-emergent for winter weeds + optional overseeding prep' },
            ].map((item) => (
              <div key={item.season} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-5 flex gap-4">
                <span className="text-brand-accent font-body font-bold text-sm flex-shrink-0 w-28">{item.season}</span>
                <p className="text-brand-text-secondary font-body text-sm">{item.treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Call Us — We're Your Neighbors"
        subtext="We'll assess your lawn and recommend a program that actually fits your grass type and your budget."
        ctaText="Get a Free Treatment Quote"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
