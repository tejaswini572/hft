import React from 'react';
import { MapPin, Navigation, Train, Plane, Bus, ArrowUpRight, ExternalLink } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';

export const Venue = () => {
  return (
    <section id="venue" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0A030A' }}>
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[350px] rounded-full pointer-events-none blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(150, 16, 66, 0.12) 0%, rgba(10, 3, 10, 0) 70%)' }}
      />

      <Container>
        <SectionHeader
          badge="Host Campus"
          title="Venue & Directions"
          subtitle="All 24 hours of Hack For Tomorrow will take place on campus at Govt. Model Engineering College, Thrikkakara, Kochi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Campus Details & Transit (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="p-8 rounded-2xl border space-y-4"
              style={{
                backgroundColor: '#1A0614',
                borderColor: 'rgba(93, 27, 64, 0.45)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(214, 26, 112, 0.15)',
                    borderColor: 'rgba(214, 26, 112, 0.4)',
                    color: '#F42E88',
                  }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display" style={{ color: '#FAEEF4' }}>
                    {eventConfig.venue.name}
                  </h3>
                  <p className="text-xs font-mono" style={{ color: '#C4A5B5' }}>
                    {eventConfig.venue.campusArea}, {eventConfig.venue.city}
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-xl border text-sm font-mono leading-relaxed"
                style={{
                  backgroundColor: '#260A1C',
                  borderColor: 'rgba(93, 27, 64, 0.5)',
                  color: '#C4A5B5',
                }}
              >
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
              <div
                className="p-5 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: '#1A0614',
                  borderColor: 'rgba(93, 27, 64, 0.45)',
                }}
              >
                <div className="flex items-center gap-2 mb-2" style={{ color: '#F42E88' }}>
                  <Train className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Metro Rail</span>
                </div>
                <p className="text-xs" style={{ color: '#C4A5B5' }}>
                  {eventConfig.venue.transitInfo.nearestMetro}
                </p>
              </div>

              <div
                className="p-5 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: '#1A0614',
                  borderColor: 'rgba(93, 27, 64, 0.45)',
                }}
              >
                <div className="flex items-center gap-2 mb-2" style={{ color: '#D61A70' }}>
                  <Bus className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Railway</span>
                </div>
                <p className="text-xs" style={{ color: '#C4A5B5' }}>
                  {eventConfig.venue.transitInfo.nearestRailway}
                </p>
              </div>

              <div
                className="p-5 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: '#1A0614',
                  borderColor: 'rgba(93, 27, 64, 0.45)',
                }}
              >
                <div className="flex items-center gap-2 mb-2" style={{ color: '#F59E0B' }}>
                  <Plane className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">Airport</span>
                </div>
                <p className="text-xs" style={{ color: '#C4A5B5' }}>
                  {eventConfig.venue.transitInfo.nearestAirport}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Campus Map Card (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="h-full min-h-[300px] rounded-2xl border p-8 flex flex-col justify-between relative overflow-hidden"
              style={{
                backgroundColor: '#1A0614',
                borderColor: 'rgba(214, 26, 112, 0.35)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: '#F42E88' }}>
                  Campus Navigation
                </span>
                
                <h4 className="text-2xl font-black font-display" style={{ color: '#FAEEF4' }}>
                  Govt. Model Engineering College
                </h4>

                <p className="text-sm leading-relaxed" style={{ color: '#C4A5B5' }}>
                  Located in Thrikkakara, Kochi, MEC is easily accessible via the Kochi Metro (Edappally / Pathadipalam stations) and direct bus routes from major transit hubs.
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono" style={{ color: '#FAEEF4' }}>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F42E88' }} />
                    <span>24-Hour Campus Security & Check-In Desk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F42E88' }} />
                    <span>High-Speed Wi-Fi & Dedicated Hacking Halls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F42E88' }} />
                    <span>On-Campus Rest Zones & Dining Facilities</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={eventConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl border font-bold text-xs font-mono flex items-center justify-between transition-all group"
                  style={{
                    backgroundColor: '#260A1C',
                    borderColor: 'rgba(93, 27, 64, 0.6)',
                    color: '#FAEEF4',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.6)';
                    e.currentTarget.style.backgroundColor = 'rgba(214, 26, 112, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.6)';
                    e.currentTarget.style.backgroundColor = '#260A1C';
                  }}
                >
                  <span>Open Coordinates in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: '#F42E88' }} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

