import React, { useState } from 'react';
import { Calendar, MapPin, ArrowUpRight, ArrowDown, ChevronRight, ShieldCheck, Utensils, Award, Sparkles } from 'lucide-react';
import { eventConfig, EVENT_STATUS_ENUM } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { StatusBadge } from '../ui/StatusBadge';
import { Countdown } from '../ui/Countdown';
import { CalendarModal } from '../ui/CalendarModal';

export const Hero = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const getPrimaryCta = () => {
    switch (eventConfig.currentStatus) {
      case EVENT_STATUS_ENUM.REGISTRATIONS_OPEN:
        return {
          text: 'Register on Devfolio',
          href: eventConfig.links.registrationUrl,
          disabled: false,
          target: '_blank'
        };
      case EVENT_STATUS_ENUM.REGISTRATIONS_CLOSED:
        return {
          text: 'Registrations Closed',
          href: eventConfig.links.registrationUrl,
          disabled: true,
          target: '_blank'
        };
      case EVENT_STATUS_ENUM.SHORTLISTING:
        return {
          text: 'View Shortlist Status',
          href: '#announcements',
          disabled: false,
          target: '_self'
        };
      case EVENT_STATUS_ENUM.LIVE:
        return {
          text: 'Live Project Portal',
          href: eventConfig.links.devfolioUrl,
          disabled: false,
          target: '_blank'
        };
      case EVENT_STATUS_ENUM.COMPLETED:
        return {
          text: 'Explore Winning Projects',
          href: '#prizes',
          disabled: false,
          target: '_self'
        };
      default:
        return {
          text: 'Coming Soon',
          href: '#about',
          disabled: false,
          target: '_self'
        };
    }
  };

  const primaryCta = getPrimaryCta();

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center tech-grid-pattern overflow-hidden">
      {/* Subtle radial ambient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Institution / Fest Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="font-semibold text-white">{eventConfig.festivalName}</span>
              <span className="text-neutral-600">•</span>
              <span>{eventConfig.shortInstitution}</span>
            </div>

            {/* Dominant Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                HACK FOR <br />
                <span className="text-neutral-300">
                  TOMORROW
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
              Where <span className="text-white font-semibold underline decoration-sky-500/60 underline-offset-4">time</span> bends to innovation. <br className="hidden sm:inline" />
              <span className="text-neutral-200 font-semibold">24 hours</span> to shape the future of technology.
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-sm text-neutral-200">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span className="font-medium">{eventConfig.dates.display}</span>
              </div>

              <a
                href={eventConfig.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-sm text-neutral-200 hover:border-neutral-700 hover:text-sky-300 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>MEC Thrikkakara, Kochi</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                href={primaryCta.href}
                target={primaryCta.target}
                size="lg"
                variant="primary"
                disabled={primaryCta.disabled}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                {primaryCta.text}
              </Button>

              <Button
                href="#about"
                size="lg"
                variant="secondary"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                Explore Event
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsCalendarModalOpen(true)}
                icon={<Calendar className="w-4 h-4 text-sky-400" />}
              >
                Add to Calendar
              </Button>
            </div>

            {/* Quick trust metrics indicator */}
            <div className="pt-3 flex items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Free Registration
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-amber-400" />
                Meals & Caffeine Included
              </span>
            </div>
          </div>

          {/* Right Column: Event Overview Terminal Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 md:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800/80">
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Event Status & Countdown
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    Official 24-Hour Timer
                  </p>
                </div>
                <StatusBadge status={eventConfig.currentStatus} />
              </div>

              {/* Countdown Component */}
              <div className="py-2 flex justify-center mb-6">
                <Countdown
                  targetDate={eventConfig.dates.countdownTarget}
                  isConfirmed={eventConfig.dates.isDateConfirmed}
                />
              </div>

              {/* Quick Perks Grid */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                <p className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                  Event Inclusions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-300">
                    <Utensils className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Free Full Meals</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-300">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Coffee & Snacks</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-300">
                    <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>MEC Certificates</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>₹30K+ Prize Pool</span>
                  </div>
                </div>
              </div>

              {/* Secondary devfolio helper */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-mono">Platform Partner:</span>
                <span className="font-semibold text-white">Devfolio</span>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Calendar Modal Component */}
      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
      />
    </section>
  );
};
