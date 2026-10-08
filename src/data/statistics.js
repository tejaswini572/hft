/**
 * Event Statistics Data
 * Clearly separates verified historical metrics from confirmed upcoming edition metrics.
 */

export const eventStatistics = {
  historicalLabel: "Excel 2025 Edition Highlights",
  stats: [
    {
      id: "registrations",
      value: "1000+",
      label: "Registrations",
      subtext: "Student developers from 50+ colleges across India",
      highlight: true,
    },
    {
      id: "duration",
      value: "24",
      unit: "Hours",
      label: "Non-Stop Hacking",
      subtext: "Intensive prototype building & mentorship cycle",
      highlight: false,
    },
    {
      id: "prizepool",
      value: "₹30,000+",
      label: "Prize Pool",
      subtext: "Cash rewards + partner bounties & perks",
      highlight: true,
    },
    {
      id: "mentors",
      value: "30+",
      label: "Industry Mentors",
      subtext: "Expert guidance from leading engineers & alumni",
      highlight: false,
    },
  ],
  secondaryMetrics: [
    { label: "Colleges Represented", value: "50+" },
    { label: "Submitted Projects", value: "25+" },
    { label: "Sponsorship Partners", value: "4+" },
    { label: "Community Rating", value: "100% Offline" },
  ],
  inclusions: [
    { id: 'food', title: 'Free Meals', desc: 'Full-course lunch, dinner & breakfast during the 24 hours', icon: 'Utensils' },
    { id: 'coffee', title: 'Unlimited Caffeine & Snacks', desc: 'Continuous beverages, coffee, and energy snacks', icon: 'Coffee' },
    { id: 'certificates', title: 'Official Certificates', desc: 'Accredited participation and merit certificates from Excel MEC', icon: 'Award' },
    { id: 'swag', title: 'Curated Swag Kits', desc: 'Stickers, developer goodies, and partner merchandise', icon: 'Gift' }
  ]
};
