import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import OwnerStory from '@/components/OwnerStory'
import ServiceGrid from '@/components/ServiceGrid'
import ServiceAreaMap from '@/components/ServiceAreaMap'
import TeamSection from '@/components/TeamSection'
import Testimonials from '@/components/Testimonials'
import CTABlock from '@/components/CTABlock'
import { heroContent, homeServices, homeTestimonials, serviceAreaDetails, ownerStory } from '@/content/home'
import { business } from '@/content/business'

export const metadata: Metadata = {
  title: 'Family-Owned Lawn Care in Marietta, GA',
  description:
    "Danny Green and the crew have been keeping Marietta lawns great since 2012. Real neighbors, reliable work, no surprises. Call (770) 555-0162 for a free estimate.",
  openGraph: {
    title: "Family-Owned Lawn Care in Marietta, GA | Neighbor's Lawn & Garden",
    description:
      "Danny Green and the crew. Real neighbors, reliable work. Licensed GA lawn care since 2012.",
  },
}

export default function HomePage() {
  const teamMembers = business.team.map((t) => ({
    name: t.name,
    role: t.role,
    imageSrc: `https://picsum.photos/seed/${t.imageSeed}/300/400`,
  }))

  return (
    <>
      {/* Section 1: Hero */}
      <Hero
        badge={heroContent.badge}
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        ctaText={heroContent.ctaText}
        ctaHref={heroContent.ctaHref}
        secondaryCtaText={heroContent.secondaryCtaText}
        secondaryCtaHref={heroContent.secondaryCtaHref}
      />

      {/* Section 2: Owner Story (unique to Local Hero) */}
      <OwnerStory
        ownerName={ownerStory.ownerName}
        paragraph1={ownerStory.paragraph1}
        paragraph2={ownerStory.paragraph2}
        imageSrc={ownerStory.imageSrc}
        imageAlt={ownerStory.imageAlt}
        linkHref="/about"
      />

      {/* Section 3: Services */}
      <ServiceGrid
        services={homeServices}
        headline="Everything Your Lawn Needs"
        subheadline="From weekly mowing to full-season treatments — Danny and the crew handle it so you don't have to."
        bgAlt={false}
      />

      {/* Section 4: Service Area Map — large and prominent */}
      <ServiceAreaMap
        areas={serviceAreaDetails}
        headline="Neighbor's Lawn & Garden Serves Marietta and Surrounding Communities"
        tagline="Danny lives here. The crew lives here. We take care of these streets because they're our streets too."
        state="GA"
      />

      {/* Section 5: Team */}
      <TeamSection members={teamMembers} />

      {/* Section 6: Testimonials */}
      <Testimonials
        reviews={homeTestimonials}
        headline="What Our Neighbors Say"
        subheadline="4.7 stars across 89 Google reviews from real Marietta-area homeowners."
        bgAlt={false}
      />

      {/* Section 7: CTA Block — warm community tone */}
      <CTABlock
        headline="Call Us — We're Your Neighbors"
        subtext="We live here too. We'll treat your lawn like it's our own — because your neighborhood is our neighborhood."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
