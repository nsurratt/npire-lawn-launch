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
      style={{ backgroundColor: '#FEFDF8' }}
      className="border-b border-brand-border py-20 md:py-28"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Community badge */}
            <span className="inline-block bg-brand-accent/20 text-brand-accent border border-brand-accent/40 rounded-full px-4 py-1.5 text-sm font-body font-semibold mb-6">
              {badge}
            </span>

            <h1
              className="font-heading text-brand-text-primary leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 46px)' }}
            >
              {headline}
            </h1>

            <p className="text-brand-text-secondary font-body text-lg leading-relaxed mb-8 max-w-lg">
              {subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-body font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>

            {/* Trust line */}
            <p className="mt-6 text-brand-text-muted font-body text-sm">
              ★★★★★ 4.7 · 89 Google reviews · GA Licensed · Family-owned
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-body text-sm font-semibold px-4 py-2 rounded-full">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              The Neighbor's Pledge — Love your lawn in 30 days or we re-treat free
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
            <img
              src="https://picsum.photos/seed/neighbors-lawn-hero/800/600"
              alt="Neighbor's Lawn & Garden crew in Marietta, GA"
              className="w-full h-full object-cover"
            />
            {/* Warm overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
              <p className="text-brand-primary font-heading text-sm">12 Years Serving Marietta</p>
              <p className="text-brand-text-muted font-body text-xs">Danny Green, Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
