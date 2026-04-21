import Link from 'next/link'

interface OwnerStoryProps {
  ownerName: string
  paragraph1: string
  paragraph2: string
  imageSrc: string
  imageAlt: string
  linkHref: string
}

export default function OwnerStory({
  ownerName,
  paragraph1,
  paragraph2,
  imageSrc,
  imageAlt,
  linkHref,
}: OwnerStoryProps) {
  return (
    <section style={{ backgroundColor: '#F5F0E8' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Owner photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md max-w-sm mx-auto lg:mx-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              style={{ filter: 'sepia(10%) saturate(90%)' }}
            />
          </div>

          {/* Story text */}
          <div>
            <span className="inline-block text-brand-accent font-body font-semibold text-sm uppercase tracking-wider mb-4">
              About the Owner
            </span>
            <h2
              className="font-heading text-brand-text-primary leading-tight mb-6"
              style={{ fontSize: 'clamp(26px, 3.5vw, 34px)' }}
            >
              Meet {ownerName}
            </h2>
            <div className="space-y-4 text-brand-text-secondary font-body text-base leading-relaxed">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>
            <Link
              href={linkHref}
              className="inline-flex items-center gap-2 mt-6 text-brand-primary hover:text-brand-primary-hover font-body font-semibold transition-colors"
            >
              Learn Our Full Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
