/**
 * Event Timeline & Schedule
 * Chronological roadmap with milestone progress indicators.
 */

export const timelineData = {
  timezone: "IST (UTC +5:30)",
  milestones: [
    {
      id: "reg-open",
      date: "Dec 22",
      time: "12:00 PM",
      title: "Registration Opens",
      description: "Official applications open on Devfolio. Form your squad of 2 to 4 developers.",
      status: "completed", // "completed" | "active" | "upcoming"
      category: "Application"
    },
    {
      id: "reg-close",
      date: "Dec 31",
      time: "11:59 PM",
      title: "Registration Closes",
      description: "Final deadline to submit your team application and project intent.",
      status: "completed",
      category: "Deadline"
    },
    {
      id: "checkin",
      date: "Jan 4",
      time: "09:00 AM",
      title: "Team Check-In & Onboarding",
      description: "Physical verification at Govt. Model Engineering College, ID checks, and kit handover.",
      status: "upcoming",
      category: "Logistics"
    },
    {
      id: "kickoff",
      date: "Jan 4",
      time: "10:00 AM",
      title: "Opening Ceremony & Hacking Begins",
      description: "Keynote address, problem track reveals, and official commencement of the 24-hour hack.",
      status: "upcoming",
      category: "Hacking"
    },
    {
      id: "mentoring-1",
      date: "Jan 4",
      time: "03:00 PM",
      title: "Mentor Checkpoint 1: Architecture & Scope",
      description: "Industry mentors review project repositories, architecture design, and feasibility.",
      status: "upcoming",
      category: "Mentorship"
    },
    {
      id: "mentoring-2",
      date: "Jan 4",
      time: "10:00 PM",
      title: "Midnight Review & Progress Audit",
      description: "Midway evaluation, bug triage support, and midnight energy refreshments.",
      status: "upcoming",
      category: "Mentorship"
    },
    {
      id: "code-freeze",
      date: "Jan 5",
      time: "10:00 AM",
      title: "Hacking Ends & Project Submission",
      description: "24-hour timer expires. Final code freeze, GitHub repository locks, and Devfolio submission.",
      status: "upcoming",
      category: "Submission"
    },
    {
      id: "finals",
      date: "Jan 5",
      time: "11:30 AM",
      title: "Finalist Presentations & Awards Ceremony",
      description: "Live prototype demos before the judging panel, followed by the prize distribution ceremony.",
      status: "upcoming",
      category: "Ceremony"
    }
  ]
};
