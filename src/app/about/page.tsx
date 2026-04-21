import type { Metadata } from 'next'
import Image from 'next/image'
import CTABlock from '@/components/CTABlock'
import OwnerStory from '@/components/OwnerStory'
import { ownerStory } from '@/content/home'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'About — Marietta, GA Lawn Care Since 2012',
  description:
    "Learn about Danny Green and Neighbor's Lawn & Garden. Family-owned lawn care in Marietta, GA since 2012. Real neighbors who care about your yard and your community.",
}

const values = [
  {
    icon: '🤝',
    title: 'Community First',
    description: "Danny lives in Marietta. His kids go to school here. This isn't just a business territory — it's his neighborhood. That changes how we work.",
  },
  {
    icon: '🗓️',
    title: 'We Show Up',
    description: "We've built our reputation on one thing: showing up when we say we will. If something changes, we tell you in advance — never after.",
  },
  {
    icon: '💬',
    title: 'Honest Pricing',
    description: "We quote what the job costs and nothing more. No inflated first quotes that mysteriously drop, no surprise add-ons on the invoice.",
  },
]

export default function AboutPage() {
  const teamMembers = business.team.map((t) => ({
    name: t.name,
    role: t.role,
    imageSrc: `https://picsum.photos/seed/${t.imageSeed}/400/500`,
  }))

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h1 className="font-heading text-brand-text-primary mb-4 leading-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                A Lawn Company That Actually Knows Your Name
              </h1>
              <p className="text-brand-text-secondary font-body text-lg leading-relaxed">
                Neighbor&apos;s Lawn &amp; Garden was founded in Marietta in 2012 by Danny Green — a guy who got tired of working for lawn companies that treated neighborhoods like revenue targets instead of communities.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md">
              <img
                src="https://picsum.photos/seed/neighbors-team-about/1200/600"
                alt="Neighbor's Lawn & Garden team in Marietta, GA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Story component — same as homepage */}
      <OwnerStory
        ownerName={ownerStory.ownerName}
        paragraph1={ownerStory.paragraph1}
        paragraph2={ownerStory.paragraph2}
        imageSrc={ownerStory.imageSrc}
        imageAlt={ownerStory.imageAlt}
        linkHref="/contact"
      />

      {/* Values */}
      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-10 text-center" style={{ fontSize: '34px' }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-8">
                <div className="text-3xl mb-4" aria-hidden="true">{value.icon}</div>
                <h3 className="font-body font-bold text-brand-text-primary mb-3 text-lg">{value.title}</h3>
                <p className="text-brand-text-secondary font-body text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-10 text-center" style={{ fontSize: '34px' }}>
            Our People
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative rounded-2xl overflow-hidden mx-auto mb-4 shadow-md"
                  style={{ width: '180px', height: '220px' }}>
                  <img
                    src={member.imageSrc}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-body font-bold text-brand-text-primary mb-0.5 text-base">{member.name}</h3>
                <p className="text-brand-accent font-body text-sm font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: '#FEFDF8' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-brand-text-primary mb-8 text-center" style={{ fontSize: '28px' }}>
            License &amp; Insurance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '📋', label: 'GA Pesticide Applicator License', detail: 'Danny Green, Licensed Applicator' },
              { icon: '🛡️', label: 'General Liability Insurance', detail: 'All work fully covered' },
              { icon: '👷', label: 'Crew Insurance', detail: 'All employees covered on-site' },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-5 text-center">
                <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                <p className="font-body font-bold text-brand-text-primary text-xs mb-1">{item.label}</p>
                <p className="text-brand-text-muted font-body text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Work With Your Neighbors"
        subtext="Get a free estimate from Neighbor's Lawn & Garden — Marietta's family-owned lawn crew since 2012."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
