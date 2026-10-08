import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Statistics } from './components/sections/Statistics';
import { About } from './components/sections/About';
import { WhyParticipate } from './components/sections/WhyParticipate';
import { ParticipantInfo } from './components/sections/ParticipantInfo';
import { Prizes } from './components/sections/Prizes';
import { Timeline } from './components/sections/Timeline';
import { Sponsors } from './components/sections/Sponsors';
import { Legacy } from './components/sections/Legacy';
import { Announcements } from './components/sections/Announcements';
import { Venue } from './components/sections/Venue';
import { FAQ } from './components/sections/FAQ';
import { Team } from './components/sections/Team';

export function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-neutral-100 flex flex-col selection:bg-sky-500/20 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <Statistics />
        <About />
        <WhyParticipate />
        <ParticipantInfo />
        <Prizes />
        <Timeline />
        <Sponsors />
        <Legacy />
        <Announcements />
        <Venue />
        <FAQ />
        <Team />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
