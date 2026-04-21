export interface ServiceItem {
  title: string
  description: string
  href: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  imageSrc: string
}

export interface Testimonial {
  name: string
  neighborhood: string
  rating: number
  text: string
}

export interface ServiceAreaDetail {
  city: string
  description: string
}

export const heroContent = {
  badge: 'Proudly Serving Marietta Since 2012',
  headline: 'Your Neighborhood Lawn Care Team',
  subheadline:
    "Danny and the crew have been keeping Marietta lawns looking great since 2012. Real neighbors, reliable work, no surprises.",
  ctaText: 'Get a Free Estimate',
  ctaHref: '/contact',
  secondaryCtaText: "Call Us — We're Your Neighbors",
  secondaryCtaHref: 'tel:7705550162',
}

export const homeServices: ServiceItem[] = [
  {
    title: 'Mowing & Lawn Care',
    description:
      'Weekly and biweekly mowing, edging, and cleanup. Danny still runs most routes himself on Tuesdays and Thursdays — your lawn gets the same care every time.',
    href: '/mowing-lawn-care',
    icon: '🌿',
  },
  {
    title: 'Landscaping',
    description:
      'Mulch installation, bed cleanup, shrub trimming, and seasonal plantings. We design for the Georgia climate — plants that thrive here without fuss.',
    href: '/landscaping',
    icon: '🌳',
  },
  {
    title: 'Fertilizer & Weed Control',
    description:
      'Season-specific fertilization and pre/post-emergent weed control for Marietta-area lawns. Danny holds the GA Pesticide Applicator License.',
    href: '/fertilizer-weed-control',
    icon: '🌱',
  },
  {
    title: 'Aeration & Overseeding',
    description:
      'Core aeration and overseeding to loosen Georgia clay and grow a thicker, healthier lawn through the cooler months.',
    href: '/aeration-overseeding',
    icon: '🔄',
  },
  {
    title: 'Pricing',
    description:
      'Honest, upfront pricing with no hidden fees. We quote based on what we see, not what we can squeeze.',
    href: '/pricing',
    icon: '💲',
  },
]

export const homeTestimonials: Testimonial[] = [
  {
    name: 'Linda P.',
    neighborhood: 'East Marietta',
    rating: 5,
    text: "Danny has been mowing our yard for four years. He actually knows our names, knows where we keep the gate key, and remembers that we don't want the magnolia trimmed. That kind of care is hard to find.",
  },
  {
    name: 'Kevin M.',
    neighborhood: 'West Smyrna',
    rating: 5,
    text: "I hired three different lawn services before finding Neighbor's. The difference is Danny shows up when he says he will — every single time. My yard has never looked better.",
  },
  {
    name: 'Rosa T.',
    neighborhood: 'Kennesaw',
    rating: 5,
    text: "They did a full landscaping project for us last fall — new beds, fresh mulch, and some Georgia native plants. The crew was respectful, fast, and cleaned up completely. Couldn't be happier.",
  },
]

export const serviceAreaDetails: ServiceAreaDetail[] = [
  {
    city: 'Marietta',
    description: "Our home base — Danny lives here and knows every neighborhood.",
  },
  {
    city: 'Smyrna',
    description: "Regular routes in Smyrna for over eight years.",
  },
  {
    city: 'Kennesaw',
    description: "Full-service lawn and landscaping across Kennesaw neighborhoods.",
  },
  {
    city: 'Acworth',
    description: "Mowing and seasonal treatments throughout Acworth.",
  },
  {
    city: 'Powder Springs',
    description: "Our address is on Powder Springs St — we know this area well.",
  },
  {
    city: 'Austell',
    description: "Reliable weekly crews serving Austell homeowners.",
  },
  {
    city: 'Mableton',
    description: "Landscaping and lawn maintenance in Mableton.",
  },
  {
    city: 'Vinings',
    description: "Detailed lawn care for Vinings-area properties.",
  },
]

export const ownerStory = {
  ownerName: 'Danny Green',
  paragraph1:
    "Danny started Neighbor's Lawn & Garden in 2012 after a decade working for large commercial landscaping firms. He was tired of watching service trucks rush through neighborhoods without knowing the homeowners' names. \"I wanted to be the kind of lawn service where people actually know who's cutting their grass,\" Danny says.",
  paragraph2:
    "All these years later, he still mows most of the lawns himself on Tuesdays and Thursdays. He lives in Marietta with his wife and two kids — so when he's taking care of your lawn, he's taking care of his own neighborhood.",
  imageSrc: 'https://picsum.photos/seed/danny-owner/600/700',
  imageAlt: "Danny Green, owner of Neighbor's Lawn & Garden in Marietta, GA",
}
