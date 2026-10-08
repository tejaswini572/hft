/**
 * Practical Participant Information Hub
 * Comprehensive directory for logistical, hardware, eligibility, and rule compliance.
 */

export const participantInfoData = {
  sectionTitle: "Participant Information Hub",
  sectionSubtitle: "Essential guidelines, team requirements, checklist, and code of conduct for all hackers.",
  
  guidelines: [
    {
      id: "eligibility",
      title: "Eligibility & Access",
      badge: "Verified Student",
      points: [
        "Open to all currently enrolled undergraduate & postgraduate college students in India.",
        "Participants from any academic discipline (Engineering, Sciences, Design, Management) are welcome.",
        "Valid institutional ID cards are mandatory for campus check-in."
      ]
    },
    {
      id: "teams",
      title: "Team Composition",
      badge: "2 to 4 Members",
      points: [
        "Teams must have a minimum of 2 and maximum of 4 members.",
        "Cross-college teams are permitted and encouraged.",
        "Every member must complete their individual Devfolio profile and join the team squad."
      ]
    },
    {
      id: "fee",
      title: "Registration & Inclusions",
      badge: "100% Free (₹0)",
      points: [
        "Zero registration or participation fee.",
        "Complimentary full-course meals, mid-hack snacks, and endless tea/coffee provided.",
        "Free high-speed campus Wi-Fi access, power outlets, and overnight workspace."
      ]
    },
    {
      id: "format",
      title: "Format & Venue Mode",
      badge: "In-Person Offline",
      points: [
        "Strictly an in-person physical hackathon held on campus at Govt. Model Engineering College, Thrikkakara.",
        "Remote or hybrid hacking is not permitted.",
        "All teammates must be present for opening, mentorship reviews, and final live evaluation."
      ]
    }
  ],

  checklist: [
    { item: "Personal Laptop & Charger", required: true, note: "Crucial for development" },
    { item: "Original College ID Card & Gov ID", required: true, note: "For campus security and registration desk verification" },
    { item: "Power Extension Cord / Strip", required: false, note: "Recommended for table-side convenience" },
    { item: "Toiletries & Change of Clothes", required: true, note: "Overnight comfort during the 24 hours" },
    { item: "Hardware Components (if building IoT/Robotics)", required: false, note: "Bring necessary microcontrollers, sensors, or breadboards" }
  ],

  evaluationCriteria: [
    { name: "Innovation & Originality", weight: "25%", desc: "Creativity of the idea and uniqueness of the problem approach" },
    { name: "Technical Execution & Quality", weight: "30%", desc: "Complexity, clean code architecture, and robust engineering" },
    { name: "Practical Viability & Impact", weight: "25%", desc: "Real-world applicability, problem significance, and user benefit" },
    { name: "UI / UX & Prototype Demo", weight: "20%", desc: "Ease of use, interface polish, and clarity during the 5-minute live demonstration" }
  ],

  rulebook: {
    title: "Official Hack For Tomorrow Rulebook",
    description: "Detailed code of conduct, intellectual property policies, submission format, and anti-plagiarism guidelines.",
    isAvailable: true,
    fileUrl: "#rules",
    version: "Edition 2026 v1.0"
  }
};
