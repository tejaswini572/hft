/**
 * Prize Pool Configuration
 * Outlines the podium rewards, sponsor bounties, and participant benefits.
 */

export const prizesData = {
  totalPrizePool: "₹30,000+",
  currency: "INR",
  podium: [
    {
      rank: 1,
      title: "1st Place — Winner",
      amount: "₹15,000",
      rawAmount: 15000,
      description: "Grand Prize Winner of Hack For Tomorrow",
      perks: [
        "₹15,000 Direct Cash Prize",
        "Official Champion Trophy & Excel Certificate",
        "Featured Project Spotlight & Mentorship Connect",
        "Exclusive Winner Swag Pack"
      ],
      featured: true,
    },
    {
      rank: 2,
      title: "2nd Place — First Runner Up",
      amount: "₹9,000",
      rawAmount: 9000,
      description: "First Runner Up of Hack For Tomorrow",
      perks: [
        "₹9,000 Direct Cash Prize",
        "Runner-Up Trophy & Certificate of Merit",
        "Swag Kit & Industry Networking"
      ],
      featured: false,
    },
    {
      rank: 3,
      title: "3rd Place — Second Runner Up",
      amount: "₹6,000",
      rawAmount: 6000,
      description: "Second Runner Up of Hack For Tomorrow",
      perks: [
        "₹6,000 Direct Cash Prize",
        "Second Runner-Up Certificate of Merit",
        "Swag Kit & Developer Perks"
      ],
      featured: false,
    },
  ],
  partnerTracks: [
    {
      sponsor: "ETHIndia",
      trackName: "Ethereum Ecosystem Track",
      bounty: "$100 USD (~₹8,300)",
      description: "Best hack built using Ethereum smart contracts, EVM protocols, or Layer 2 scaling solutions.",
      logoText: "ETHIndia Track Prize"
    }
  ],
  generalPerks: [
    { title: "Complimentary Food", desc: "Breakfast, lunch, dinner, midnight pizza & snacks provided" },
    { title: "Verified Certificates", desc: "Accredited certificates issued by Excel, Govt. Model Engineering College" },
    { title: "Unlimited Caffeine", desc: "Coffee and tea rounds throughout the 24-hour building period" },
    { title: "Direct Recruiter Visibility", desc: "Opportunity to demo before engineers and sponsor company leaders" }
  ]
};
