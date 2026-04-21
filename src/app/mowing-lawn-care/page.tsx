import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lawn Mowing & Lawn Care — Marietta, GA',
  description:
    "Professional weekly and biweekly mowing, edging, and cleanup in Marietta, GA. Danny Green and the crew show up on time, every time. Call (770) 555-0162.",
}

export default function MowingPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Core Service
              </span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
                Mowing &amp; Lawn Care in Marietta
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-6">
                Danny still runs most mowing routes himself on Tuesdays and Thursdays. You get the same face, the same standard, every single visit — not a rotating crew of strangers.
              </p>
              <Link href="/contact"
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Estimate
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img src="https://picsum.photos/seed/mowing-marietta/800/500"
                alt="Lawn mowing in Marietta, GA"
                className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8" style={{ fontSize: '34px' }}>
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '✅', title: 'Weekly or Biweekly Mowing', desc: 'Your choice of schedule. We stick to it.' },
              { icon: '✅', title: 'Edging Along Beds & Walks', desc: 'Clean lines every visit — not just on the first.' },
              { icon: '✅', title: 'String Trimming', desc: 'Around trees, fences, and tight spots the mower can\'t reach.' },
              { icon: '✅', title: 'Blowing Off Hard Surfaces', desc: 'We leave your driveway and sidewalks clean, not covered in clippings.' },
              { icon: '✅', title: 'Height Adjustment by Season', desc: 'We adjust the cut height for Georgia\'s warm-season grasses.' },
              { icon: '✅', title: 'Same Crew Every Visit', desc: 'Danny handles most Marietta routes personally.' },
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
        headline="Call Us — We're Your Neighbors"
        subtext="We live in Marietta. We'll treat your lawn like it's our own — because it's in our neighborhood."
        ctaText="Request a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
