/**
 * Centralized Event Configuration for Hack For Tomorrow (HFT)
 * Single source of truth for event state, dates, links, and branding info.
 */

export const EVENT_STATUS_ENUM = {
  COMING_SOON: 'COMING_SOON',
  REGISTRATIONS_OPEN: 'REGISTRATIONS_OPEN',
  REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED',
  SHORTLISTING: 'SHORTLISTING',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED'
};

export const eventConfig = {
  // Identity
  eventName: "Hack For Tomorrow",
  shortName: "HFT",
  editionYear: "2026",
  festivalName: "Excel 2026",
  institution: "Government Model Engineering College, Thrikkakara, Kochi",
  shortInstitution: "Govt. Model Engineering College, Kochi",
  
  // Taglines
  tagline: "Where time bends to innovation. 24 hours to shape the future.",
  subTagline: "Innovate Today, Impact Tomorrow",
  
  // Current Event Status State Machine
  // Options: COMING_SOON | REGISTRATIONS_OPEN | REGISTRATIONS_CLOSED | SHORTLISTING | LIVE | COMPLETED
  currentStatus: EVENT_STATUS_ENUM.REGISTRATIONS_OPEN,
  
  // Dates (Confirmed or Announced)
  dates: {
    display: "January 4–5, 2026",
    startDate: "2026-01-04T09:00:00+05:30",
    endDate: "2026-01-05T12:00:00+05:30",
    // Countdown target date. If null or unconfirmed, countdown automatically renders status fallback.
    countdownTarget: "2026-01-04T10:00:00+05:30",
    isDateConfirmed: true,
  },
  
  // Venue
  venue: {
    name: "Government Model Engineering College (MEC)",
    campusArea: "Thrikkakara, Edappally",
    city: "Kochi, Kerala",
    postalCode: "682021",
    fullAddress: "Model Engineering College Road, Karimakkad, Thrikkakara, Edappally, Kochi, Kerala 682021",
    googleMapsUrl: "https://maps.app.goo.gl/bFsEY1XvKK94BgYF8",
    transitInfo: {
      nearestMetro: "Edappally / Pathadipalam Metro Station (~3.5 km)",
      nearestRailway: "Ernakulam Town (North) & Ernakulam Junction (South) Stations (~9 km)",
      nearestAirport: "Cochin International Airport (COK) (~22 km)"
    }
  },
  
  // Registration & External Links
  links: {
    devfolioUrl: "https://hack-for-tomorrow-25.devfolio.co/",
    registrationUrl: "https://hack-for-tomorrow-25.devfolio.co/",
    collegeWebsite: "https://www.mec.ac.in/",
    excelWebsite: "https://excelmec.org/",
    codeOfConduct: "https://devfolio.co/code-of-conduct",
    rulebookPdfUrl: null, // Set to valid URL when 2026 official PDF is published
  },

  // Contact
  contact: {
    email: "hft@excelmec.org",
    generalPhone: "+91 95678 58032",
  },
  
  // Tracks & Themes
  tracks: [
    { id: 'genai', name: 'GenAI & Machine Learning', icon: 'Sparkles', desc: 'Next-gen LLM applications, generative models, and intelligent agentic workflows.' },
    { id: 'fintech', name: 'FinTech & Web3', icon: 'Wallet', desc: 'Decentralized finance, automated payments, smart settlements, and blockchain utility.' },
    { id: 'foss', name: 'FOSS & Developer Tools', icon: 'Code', desc: 'Open-source infrastructure, developer productivity tooling, and system utilities.' },
    { id: 'open', name: 'Open Innovation', icon: 'Rocket', desc: 'Tackle real-world societal, healthcare, educational, or sustainability challenges.' },
  ]
};
