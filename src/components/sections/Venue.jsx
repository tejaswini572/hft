import React from 'react';
import { MapPin, Navigation, Train, Plane, Bus, ArrowUpRight, ExternalLink } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';

export const Venue = () => {
  return (
    <section id="venue" className="py-20 md:py-32 bg-[#08090d] border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Host Campus"
          title="Venue & Directions"
          subtitle="All 24 hours of Hack For Tomorrow will take place on campus at Govt. Model Engineering College, Thrikkakara, Kochi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Campus Details & Transit (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {eventConfig.venue.name}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    {eventConfig.venue.campusArea}, {eventConfig.venue.city}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-sm text-neutral-300 font-mono leading-relaxed">
                {eventConfig.venue.fullAddress}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href={eventConfig.venue.googleMapsUrl}
                  target="_blank"
                  variant="primary"
                  size="md"
                  icon={<Navigation className="w-4 h-4" />}
                >
                  Get Google Maps Directions
                </Button>

                <Button
                  href={eventConfig.links.collegeWebsite}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  College Website
                </Button>
              </div>
            </div>

            {/* Transit Proximity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-sky-400 mb-2">
                  <Train className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Metro Rail</span>
                </div>
                <p className="text-xs text-neutral-300">
                  {eventConfig.venue.transitInfo.nearestMetro}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                  <Bus className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Railway</span>
                </div>
                <p className="text-xs text-neutral-300">
                  {eventConfig.venue.transitInfo.nearestRailway}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <Plane className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Airport</span>
                </div>
                <p className="text-xs text-neutral-300">
                  {eventConfig.venue.transitInfo.nearestAirport}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Campus Map Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[300px] rounded-2xl bg-neutral-900/80 border border-neutral-800 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-sky-400 tracking-wider">
                  Campus Navigation
                </span>
                
                <h4 className="text-2xl font-black text-white font-heading">
                  Govt. Model Engineering College
                </h4>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  Located in Thrikkakara, Kochi, MEC is easily accessible via the Kochi Metro (Edappally / Pathadipalam stations) and direct bus routes from major transit hubs.
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>24-Hour Campus Security & Check-In Desk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>High-Speed Wi-Fi & Dedicated Hacking Halls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>On-Campus Rest Zones & Dining Facilities</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={eventConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs font-mono flex items-center justify-between transition-colors group"
                >
                  <span>Open Coordinates in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
