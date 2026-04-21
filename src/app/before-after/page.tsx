import type { Metadata } from 'next'
import CTABlock from '@/components/CTABlock'

export const metadata: Metadata = {
  title: 'Before & After — Lawn Care Results in Marietta, GA',
  description:
    "Real before and after photos from Neighbor's Lawn & Garden customer yards in Marietta, GA. See what Danny and the crew can do for your lawn.",
}

const projects = [
  {
    title: 'Spring Cleanup — East Marietta',
    description: 'Full spring cleanup including bed edging, fresh mulch, and first mow of the season.',
    beforeSeed: 'before-lawn-1',
    afterSeed: 'after-lawn-1',
  },
  {
    title: 'Aeration & Overseeding — Smyrna',
    description: 'Core aeration followed by Fescue overseeding in fall. Photos taken 6 weeks apart.',
    beforeSeed: 'before-lawn-2',
    afterSeed: 'after-lawn-2',
  },
  {
    title: 'Landscaping Project — Kennesaw',
    description: 'New bed borders, fresh mulch, and native plantings along the front walkway.',
    beforeSeed: 'before-lawn-3',
    afterSeed: 'after-lawn-3',
  },
  {
    title: 'Weed Takeover Recovery — Marietta',
    description: 'Post-emergent weed program over three applications restored a Bermuda lawn that was 40% weeds.',
    beforeSeed: 'before-lawn-4',
    afterSeed: 'after-lawn-4',
  },
]

export default function BeforeAfterPage() {
  return (
    <>
      <section style={{ backgroundColor: '#F5F0E8' }} className="border-b border-brand-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-brand-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            Real Results, Real Yards
          </h1>
          <p className="text-brand-text-secondary font-body text-lg max-w-xl mx-auto">
            Every yard in these photos belongs to a real customer in our service area. No stock photography, no tricks.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FEFDF8' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.title}>
                <h2 className="font-heading text-brand-text-primary mb-2" style={{ fontSize: '26px' }}>
                  {project.title}
                </h2>
                <p className="text-brand-text-secondary font-body text-sm mb-6">{project.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-body font-semibold text-brand-text-muted text-xs uppercase tracking-wider mb-2">Before</p>
                    <div className="rounded-2xl overflow-hidden aspect-video shadow-sm">
                      <img src={`https://picsum.photos/seed/${project.beforeSeed}/700/400`}
                        alt={`Before — ${project.title}`}
                        className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-brand-accent text-xs uppercase tracking-wider mb-2">After</p>
                    <div className="rounded-2xl overflow-hidden aspect-video shadow-sm">
                      <img src={`https://picsum.photos/seed/${project.afterSeed}/700/400`}
                        alt={`After — ${project.title}`}
                        className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Want Results Like These?"
        subtext="Call Danny and the crew. We'll come take a look and tell you honestly what your lawn needs."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        phone="(770) 555-0162"
        phoneTel="7705550162"
        warm={true}
      />
    </>
  )
}
