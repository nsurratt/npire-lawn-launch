import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'
import { allReviews } from '@/content/reviews'

export const metadata: Metadata = {
  title: 'Customer Reviews — 4.7★ · 89 Reviews in Marietta, GA',
  description:
    "4.7 stars across 89 Google reviews. Read what Marietta and Smyrna homeowners say about Danny Green and Neighbor's Lawn & Garden.",
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= rating ? 'text-brand-accent' : 'text-gray-300'}`}
          fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            What Our Neighbors Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating rating={5} />
            <p className="text-brand-text-secondary font-body font-semibold">
              4.7 stars · 89 Google reviews
            </p>
          </div>
          <p className="text-brand-text-muted font-body text-sm">
            All from real customers in Marietta and surrounding communities.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allReviews.map((review) => (
              <article key={review.name} className="relative">
                <div className="absolute -top-4 left-0 font-heading leading-none select-none"
                  style={{ fontSize: '72px', color: '#E8762B', opacity: 0.2 }}
                  aria-hidden="true">&ldquo;</div>
                <div className="pt-8">
                  <StarRating rating={review.rating} />
                  <blockquote className="mt-4 text-brand-text-secondary font-body text-base leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="font-body font-semibold text-brand-text-primary text-sm">{review.name}</p>
                      <p className="text-brand-text-muted font-body text-xs">{review.neighborhood}</p>
                    </div>
                    <p className="text-brand-text-muted font-body text-xs">{review.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Join Our Happy Neighbors"
        subtext="Get a free estimate and see why Marietta families have been choosing Danny and the crew since 2012."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
