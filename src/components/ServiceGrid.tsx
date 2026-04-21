import Link from 'next/link'

interface ServiceItem {
  title: string
  description: string
  href: string
  icon: string
}

interface ServiceGridProps {
  services: ServiceItem[]
  headline?: string
  subheadline?: string
  bgAlt?: boolean
}

export default function ServiceGrid({ services, headline, subheadline, bgAlt }: ServiceGridProps) {
  return (
    <section
      style={{ backgroundColor: bgAlt ? '#F5F0E8' : '#FEFDF8' }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(headline || subheadline) && (
          <div className="text-center mb-12">
            {headline && (
              <h2
                className="font-heading text-brand-text-primary mb-4"
                style={{ fontSize: '34px' }}
              >
                {headline}
              </h2>
            )}
            {subheadline && (
              <p className="text-brand-text-secondary font-body text-lg max-w-2xl mx-auto">
                {subheadline}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.href}
              style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }}
              className={`p-8 hover:shadow-md transition-shadow group ${bgAlt ? 'bg-white' : ''}`}
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3
                className="font-heading text-brand-text-primary mb-3"
                style={{ fontSize: '22px' }}
              >
                {service.title}
              </h3>
              <p className="text-brand-text-secondary font-body text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-brand-accent hover:text-brand-accent-hover font-body font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
