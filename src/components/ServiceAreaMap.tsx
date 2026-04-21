import Link from 'next/link'

interface ServiceAreaDetail {
  city: string
  description: string
}

interface ServiceAreaMapProps {
  areas: ServiceAreaDetail[]
  headline?: string
  tagline?: string
  state?: string
}

export default function ServiceAreaMap({ areas, headline, tagline, state = 'GA' }: ServiceAreaMapProps) {
  return (
    <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: '34px' }}
          >
            {headline ?? "Neighbor's Lawn & Garden Serves Marietta and Surrounding Communities"}
          </h2>
          <p className="text-brand-text-secondary font-body text-lg max-w-2xl mx-auto">
            {tagline ?? 'Danny and the crew are your neighbors — we know these streets because we live here too.'}
          </p>
        </div>

        {/* Map placeholder */}
        <div
          className="rounded-2xl overflow-hidden mb-10 shadow-md"
          style={{ height: '280px', backgroundColor: '#E8E0D4', position: 'relative' }}
        >
          <img
            src="https://picsum.photos/seed/marietta-map/1200/280"
            alt="Service area map — Marietta, GA and surrounding communities"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-xl px-6 py-4 text-center shadow">
              <p className="font-heading text-brand-primary text-lg">Marietta, GA &amp; Surrounding Areas</p>
              <p className="text-brand-text-secondary font-body text-sm">Serving 8 communities in Cobb County</p>
            </div>
          </div>
        </div>

        {/* 4-col grid of service areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {areas.map((area) => (
            <div
              key={area.city}
              style={{ backgroundColor: '#F5F0E8', borderRadius: '12px' }}
              className="p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-brand-accent" aria-hidden="true">📍</span>
                <h3 className="font-body font-semibold text-brand-text-primary">
                  {area.city}, {state}
                </h3>
              </div>
              <p className="text-brand-text-secondary font-body text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-text-secondary font-body">
          Serving your neighborhood?{' '}
          <a
            href="tel:7705550162"
            className="text-brand-primary hover:text-brand-primary-hover font-semibold transition-colors"
          >
            Call us — (770) 555-0162
          </a>
        </p>
      </div>
    </section>
  )
}
