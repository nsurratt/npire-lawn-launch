export const business = {
  name: "Neighbor's Lawn & Garden",
  shortName: "Neighbor's Lawn",
  tagline: "Family-owned lawn care in Marietta — Danny and the crew since 2012",
  phone: '(770) 555-0162',
  phoneTel: '7705550162',
  email: 'hello@neighborslawn.com',
  address: {
    street: '612 Powder Springs St',
    city: 'Marietta',
    state: 'GA',
    zip: '30060',
    full: '612 Powder Springs St, Marietta, GA 30060',
  },
  hours: {
    weekdays: 'Mon–Sat: 8am–5pm',
    saturday: 'Sat: 8am–5pm',
    sunday: 'Closed Sunday',
    display: 'Mon–Sat 8am–5pm',
  },
  founded: 2012,
  owner: 'Danny Green',
  ownerTitle: 'Owner & Operator',
  license: 'GA Pesticide Applicator License',
  rating: 4.7,
  reviewCount: 89,
  serviceAreas: [
    'Marietta',
    'Smyrna',
    'Kennesaw',
    'Acworth',
    'Powder Springs',
    'Austell',
    'Mableton',
    'Vinings',
  ],
  team: [
    { name: 'Danny Green', role: 'Owner & Operator', imageSeed: 'danny-green' },
    { name: 'Tasha Brown', role: 'Lead Crew', imageSeed: 'tasha-brown' },
    { name: 'Marcus Washington', role: 'Landscaper', imageSeed: 'marcus-washington' },
  ],
  social: {
    facebook: 'https://www.facebook.com/neighborslawngarden',
    instagram: 'https://www.instagram.com/neighborslawngarden',
    google: 'https://g.page/neighborslawngarden',
  },
} as const

export type Business = typeof business
