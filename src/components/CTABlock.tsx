import Link from 'next/link'

interface CTABlockProps {
  headline: string
  subtext?: string
  ctaText: string
  ctaHref: string
  phone?: string
  phoneTel?: string
  warm?: boolean
}

export default function CTABlock({
  headline,
  subtext,
  ctaText,
  ctaHref,
  phone,
  phoneTel,
  warm = true,
}: CTABlockProps) {
  return (
    <section
      style={{ backgroundColor: warm ? '#F5F0E8' : '#1C2E10' }}
      className="py-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`font-heading mb-4 ${warm ? 'text-brand-text-primary' : 'text-white'}`}
          style={{ fontSize: '34px' }}
        >
          {headline}
        </h2>
        {subtext && (
          <p
            className={`font-body text-lg mb-8 max-w-xl mx-auto leading-relaxed ${
              warm ? 'text-brand-text-secondary' : 'text-white/75'
            }`}
          >
            {subtext}
          </p>
        )}
        <Link
          href={ctaHref}
          className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-10 py-4 rounded-lg transition-colors text-base mb-6"
        >
          {ctaText}
        </Link>
        {phone && phoneTel && (
          <p className={`font-body text-sm ${warm ? 'text-brand-text-muted' : 'text-white/60'}`}>
            Or call us:{' '}
            <a
              href={`tel:${phoneTel}`}
              className={`font-semibold transition-colors ${
                warm
                  ? 'text-brand-primary hover:text-brand-primary-hover'
                  : 'text-white hover:text-brand-accent'
              }`}
            >
              {phone}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
