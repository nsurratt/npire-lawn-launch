import type { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'
import CTABlock from '@/components/CTABlock'
import { faqItems } from '@/content/faq'

export const metadata: Metadata = {
  title: 'FAQ — Lawn Care Questions, Marietta, GA',
  description:
    "Common questions about Neighbor's Lawn & Garden. Learn about our service areas, scheduling, pricing, and what makes Danny and the crew different.",
}

export default function FAQPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            Didn&apos;t find what you&apos;re looking for? Call Danny directly at{' '}
            <a href="tel:7705550162" className="text-brand-primary font-semibold hover:underline">
              (770) 555-0162
            </a>.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABlock
        headline="Still Have Questions?"
        subtext="Call us or send a message. Danny personally responds to every inquiry."
        ctaText="Contact Us"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
