interface TeamMember {
  name: string
  role: string
  imageSrc: string
}

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <section style={{ backgroundColor: '#F5F0E8' }} className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-heading text-brand-text-primary"
            style={{ fontSize: '34px' }}
          >
            Our People
          </h2>
          <p className="text-brand-text-secondary font-body text-lg mt-3 max-w-xl mx-auto">
            Real neighbors who take pride in every yard we touch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div
                className="relative rounded-2xl overflow-hidden mx-auto mb-4 shadow-md"
                style={{ width: '160px', height: '200px' }}
              >
                <img
                  src={member.imageSrc}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-body font-bold text-brand-text-primary text-base mb-0.5">
                {member.name}
              </h3>
              <p className="text-brand-accent font-body text-sm font-semibold">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
