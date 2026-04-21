'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

function FAQItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-brand-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-brand-text-primary text-base">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-brand-border flex items-center justify-center transition-transform ${open ? 'rotate-45 border-brand-accent text-brand-accent' : 'text-brand-text-muted'}`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-brand-text-secondary font-body text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div
      style={{ backgroundColor: '#FEFDF8', borderRadius: '12px' }}
      className="border border-brand-border px-6"
    >
      {items.map((item) => (
        <FAQItem key={item.question} item={item} />
      ))}
    </div>
  )
}
