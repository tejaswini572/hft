# Hack For Tomorrow (HFT) — Official Flagship Hackathon Website

Official web application foundation for **Hack For Tomorrow (HFT)**, the flagship 24-hour hackathon of **Excel**, the annual techno-managerial fest of **Government Model Engineering College (MEC), Thrikkakara, Kochi, Kerala**.

Built with **React**, **Vite**, **Tailwind CSS v4**, and modern accessible UI architecture.

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:5173/`.

### 3. Production Build & Validation
```bash
npm run build
npm run preview
```

---

## 🏛️ Architecture & Project Structure

```
hft/
├── index.html                  # SEO metadata, Google Fonts (Plus Jakarta Sans, Space Grotesk, JetBrains Mono)
├── vite.config.js              # Vite configuration with React and Tailwind v4 plugins
├── package.json
└── src/
    ├── main.jsx                # Application root mounting
    ├── App.jsx                 # Main layout assembling all 13 core sections
    ├── styles/
    │   ├── tokens.css          # CSS Custom Properties for theme tokens & colors
    │   └── globals.css         # Global reset, typography, and utility classes
    ├── data/                   # Centralized Event Data Management (No presentation logic)
    │   ├── eventConfig.js      # Event status state machine, metadata, dates, links
    │   ├── statistics.js       # Registrations, hours, mentors, prize pool metrics
    │   ├── prizes.js           # Podium breakdown, sponsor bounties, and perks
    │   ├── timeline.js         # Chronological milestones and statuses
    │   ├── sponsors.js         # Tiered partner directory (Platinum & Gold)
    │   ├── participantInfo.js  # Eligibility, team rules, packing checklist, judging criteria
    │   ├── announcements.js    # Live notice board updates
    │   ├── legacy.js           # HFT heritage & historical edition highlights
    │   ├── faq.js              # Grouped frequently asked questions
    │   ├── team.js             # Organizing team leads & coordinator contacts
    │   └── navigation.js       # Navigation links and social channels
    └── components/
        ├── layout/
        │   ├── Navbar.jsx      # Sticky responsive navigation with mobile drawer
        │   ├── Footer.jsx      # Institutional footer with MEC & Excel links
        │   ├── Container.jsx   # Max-width layout wrapper
        │   └── SectionHeader.jsx # Reusable section title and kicker badge
        ├── ui/
        │   ├── Button.jsx      # Multi-variant button/link primitive
        │   ├── Countdown.jsx   # Timezone-aware countdown with zero-stop logic
        │   ├── StatusBadge.jsx # Dynamic event status badge with indicator dot
        │   └── CalendarModal.jsx # Add to Google Calendar & downloadable .ICS file
        └── sections/
            ├── Hero.jsx            # Section 01: Typographic hero with live overview card
            ├── Statistics.jsx      # Section 02: Numerical metric bar & inclusions
            ├── About.jsx           # Section 03: Thematic overview & technical tracks
            ├── WhyParticipate.jsx  # Section 04: 6 numbered editorial feature blocks
            ├── ParticipantInfo.jsx # Section 05: Practical participant hub & rulebook trigger
            ├── Prizes.jsx          # Section 06: Asymmetric podium hierarchy & bounties
            ├── Timeline.jsx        # Section 07: Milestone schedule roadmap
            ├── Sponsors.jsx        # Section 08: Tiered partners & sponsorship CTA
            ├── Legacy.jsx          # Section 09: Flagship heritage & past edition highlights
            ├── Announcements.jsx   # Section 10: Categorized live announcements board
            ├── Venue.jsx           # Section 11: Campus transit guide & Google Maps integration
            ├── FAQ.jsx             # Section 12: Grouped accordion with keyboard accessibility
            └── Team.jsx            # Section 13: Organizing team directory & inquiry hotline
```

---

## 🎨 Theme Customization (Applying Official Branding)

All color tokens, borders, and typography are decoupled into `src/styles/tokens.css`. When the official visual theme is ready, simply update the CSS custom properties without modifying any JSX component code:

```css
:root {
  /* Customize Brand Colors */
  --color-bg-base: #08090d;
  --color-bg-surface: #12151e;
  
  /* Primary and Secondary Accents */
  --color-accent-primary: #38bdf8;
  --color-accent-secondary: #818cf8;
  
  /* Borders & Highlights */
  --color-border-subtle: rgba(255, 255, 255, 0.07);
  --color-border-medium: rgba(255, 255, 255, 0.12);
}
```

---

## ⚙️ Event State Machine

The website supports 6 real-world event states in `src/data/eventConfig.js`:

```javascript
export const EVENT_STATUS_ENUM = {
  COMING_SOON: 'COMING_SOON',
  REGISTRATIONS_OPEN: 'REGISTRATIONS_OPEN',
  REGISTRATIONS_CLOSED: 'REGISTRATIONS_CLOSED',
  SHORTLISTING: 'SHORTLISTING',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED'
};
```
Changing `currentStatus` automatically updates the Navbar CTA, Hero badge, registration behavior, and overview card.

---

## 📋 Information Checklist for Upcoming 2026 Edition

When confirmed by the organizing committee, update the following in `src/data/`:
1. **Confirmed 2026 Dates:** `dates.startDate`, `dates.endDate`, `dates.countdownTarget` in `eventConfig.js`.
2. **2026 Devfolio URL:** `links.registrationUrl` in `eventConfig.js`.
3. **Official Rulebook PDF:** Upload rulebook file and set `links.rulebookPdfUrl` in `eventConfig.js`.
4. **Current Edition Organizers:** Update names, roles, and contacts in `team.js`.
5. **Confirmed 2026 Sponsors:** Add new sponsor logos and URLs in `sponsors.js`.
