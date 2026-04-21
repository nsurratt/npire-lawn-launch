'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }}
        className="p-8 text-center"
      >
        <div className="text-4xl mb-4" aria-hidden="true">🌿</div>
        <h3 className="font-heading text-brand-text-primary text-2xl mb-2">Got it — thanks!</h3>
        <p className="text-brand-text-secondary font-body">
          Danny or someone from the crew will be in touch within one business day. We appreciate you reaching out.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
          >
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors"
            style={{ backgroundColor: '#FEFDF8' }}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            required
            className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors"
            style={{ backgroundColor: '#FEFDF8' }}
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
        >
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          required
          className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors"
          style={{ backgroundColor: '#FEFDF8' }}
          placeholder="(770) 555-0000"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors"
          style={{ backgroundColor: '#FEFDF8' }}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
        >
          Property Address *
        </label>
        <input
          id="address"
          type="text"
          required
          className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors"
          style={{ backgroundColor: '#FEFDF8' }}
          placeholder="123 Main St, Marietta, GA"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
        >
          Service Needed
        </label>
        <select
          id="service"
          className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors"
          style={{ backgroundColor: '#FEFDF8' }}
        >
          <option value="">Select a service</option>
          <option>Mowing &amp; Lawn Care</option>
          <option>Landscaping</option>
          <option>Fertilizer &amp; Weed Control</option>
          <option>Aeration &amp; Overseeding</option>
          <option>Multiple Services</option>
          <option>Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-brand-text-primary font-body font-semibold text-sm mb-2"
        >
          Tell Us About Your Yard
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-brand-border rounded-lg font-body text-brand-text-primary placeholder-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors resize-none"
          style={{ backgroundColor: '#FEFDF8' }}
          placeholder="Yard size, current condition, any specific concerns or requests..."
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-brand-border text-brand-primary focus:ring-brand-primary/40 shrink-0"
        />
        <label htmlFor="consent" className="text-brand-text-secondary font-body text-xs leading-relaxed">
          I consent to receive calls and SMS from this business. Message and data rates may apply. Reply STOP to unsubscribe.
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold py-4 rounded-lg transition-colors text-base"
      >
        Request My Free Estimate
      </button>
      <p className="text-center text-brand-text-muted font-body text-xs">
        We typically respond within one business day. No spam, ever.
      </p>
    </form>
  )
}
