export interface Review {
  name: string
  neighborhood: string
  rating: number
  text: string
  date: string
}

export const allReviews: Review[] = [
  {
    name: 'Linda P.',
    neighborhood: 'East Marietta',
    rating: 5,
    text: "Danny has been mowing our yard for four years. He actually knows our names, knows where we keep the gate key, and remembers that we don't want the magnolia trimmed. That kind of care is hard to find.",
    date: 'March 2024',
  },
  {
    name: 'Kevin M.',
    neighborhood: 'West Smyrna',
    rating: 5,
    text: "I hired three different lawn services before finding Neighbor's. The difference is Danny shows up when he says he will — every single time. My yard has never looked better.",
    date: 'February 2024',
  },
  {
    name: 'Rosa T.',
    neighborhood: 'Kennesaw',
    rating: 5,
    text: "They did a full landscaping project for us last fall — new beds, fresh mulch, and some Georgia native plants. The crew was respectful, fast, and cleaned up completely. Couldn't be happier.",
    date: 'November 2023',
  },
  {
    name: 'James H.',
    neighborhood: 'Powder Springs',
    rating: 5,
    text: "Signed up in the spring and it's been the best decision I made for the house. Danny noticed a drainage problem in my backyard and mentioned it to me unprompted. That's a neighbor, not just a lawn guy.",
    date: 'October 2023',
  },
  {
    name: 'Diane W.',
    neighborhood: 'Acworth',
    rating: 5,
    text: "My previous lawn service ghosted me after two months. Neighbor's Lawn has been consistent for over two years now. I don't even have to think about it anymore — they just show up and it looks great.",
    date: 'September 2023',
  },
  {
    name: 'Carlos B.',
    neighborhood: 'Mableton',
    rating: 4,
    text: "Great crew, very professional. Danny personally came out to quote the job and took notes on what we specifically wanted. The aeration and overseeding they did last fall made a huge difference.",
    date: 'August 2023',
  },
  {
    name: 'Yvonne S.',
    neighborhood: 'Vinings',
    rating: 5,
    text: "I was nervous about hiring someone new after a bad experience, but Danny came highly recommended by two of my neighbors. Now I understand why. Reliable, honest, and the yard looks beautiful.",
    date: 'July 2023',
  },
  {
    name: 'Tom L.',
    neighborhood: 'East Marietta',
    rating: 5,
    text: "Been using Neighbor's for three seasons. Tasha runs our crew and she's incredibly thorough. The edging alone is worth the price. These guys actually take pride in their work.",
    date: 'June 2023',
  },
  {
    name: 'Angela F.',
    neighborhood: 'Austell',
    rating: 5,
    text: "Called on a Tuesday, Danny came out Wednesday to look at the yard, and we had a quote by Thursday. Service started the following week. Exactly the kind of straightforward experience I was hoping for.",
    date: 'May 2023',
  },
]
