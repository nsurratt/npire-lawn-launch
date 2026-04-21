import Link from 'next/link'

interface HeroProps {
  badge: string
  headline: string
  subheadline: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function Hero({
  badge,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[88vh] flex items-center"
      role="banner"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/neighbors-lawn-hero/1600/900')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-brand-accent text-white rounded-full px-4 py-1.5 text-sm font-body font-semibold mb-6">
            {badge}
          </span>

          <h1
            className="font-heading text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
          >
            {headline}
          </h1>

          <p className="text-white/85 font-body text-lg leading-relaxed mb-8 max-w-xl">
            {subheadline}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href={ctaHref}
              className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-block border-2 border-white/70 hover:border-white text-white font-body font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span><strong>4.7</strong> · 89 Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm px-4 py-2 rounded-full">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Love your lawn in 30 days or we re-treat free
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
