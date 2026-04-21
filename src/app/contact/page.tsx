import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Free Estimate in Marietta, GA',
  description:
    "Get a free lawn care estimate from Neighbor's Lawn & Garden in Marietta, GA. Call Danny at (770) 555-0162 or fill out our form.",
}

export default function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Get a Free Estimate
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            Fill out the form below or call Danny directly. We usually respond the same day and can schedule a walkthrough within a couple days.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-brand-text-primary mb-6 text-2xl">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">📞</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Phone</p>
                      <a href="tel:7705550162"
                        className="text-brand-primary hover:text-brand-primary-hover font-body font-semibold text-lg transition-colors">
                        (770) 555-0162
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">✉️</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Email</p>
                      <a href="mailto:hello@neighborslawn.com"
                        className="text-brand-primary hover:text-brand-primary-hover font-body font-medium text-sm transition-colors">
                        hello@neighborslawn.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Address</p>
                      <address className="not-italic text-brand-text-secondary font-body text-sm leading-relaxed">
                        612 Powder Springs St<br />
                        Marietta, GA 30060
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">🕐</span>
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm mb-0.5">Business Hours</p>
                      <p className="text-brand-text-secondary font-body text-sm leading-relaxed">
                        Mon–Sat: 8am–5pm<br />
                        <span className="text-brand-text-muted">Closed Sunday</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service areas */}
              <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6">
                <h3 className="font-body font-bold text-brand-text-primary mb-3 text-sm">Service Areas</h3>
                <p className="text-brand-text-secondary font-body text-xs leading-relaxed">
                  Marietta · Smyrna · Kennesaw · Acworth · Powder Springs · Austell · Mableton · Vinings
                </p>
              </div>

              {/* Owner note */}
              <div style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }} className="p-6">
                <div className="flex gap-3 items-start">
                  <img src="https://picsum.photos/seed/danny-small/60/60"
                    alt="Danny Green"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-brand-text-primary text-sm mb-1">Danny Green, Owner</p>
                    <p className="text-brand-text-secondary font-body text-xs leading-relaxed">
                      &ldquo;I personally respond to every inquiry. You&apos;re not emailing a call center — you&apos;re emailing your neighbor.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-brand-text-primary mb-6 text-2xl">
                Tell Us About Your Yard
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
