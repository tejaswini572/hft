import React, { useState } from 'react';
import { Calendar, MapPin, ArrowUpRight, ArrowDown, ShieldCheck, Utensils, Award, Sparkles } from 'lucide-react';
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
        return { text: 'Register on Devfolio', href: eventConfig.links.registrationUrl, disabled: false, target: '_blank' };
      case EVENT_STATUS_ENUM.REGISTRATIONS_CLOSED:
        return { text: 'Registrations Closed', href: eventConfig.links.registrationUrl, disabled: true, target: '_blank' };
      case EVENT_STATUS_ENUM.SHORTLISTING:
        return { text: 'View Shortlist Status', href: '#announcements', disabled: false, target: '_self' };
      case EVENT_STATUS_ENUM.LIVE:
        return { text: 'Live Project Portal', href: eventConfig.links.devfolioUrl, disabled: false, target: '_blank' };
      case EVENT_STATUS_ENUM.COMPLETED:
        return { text: 'Explore Winning Projects', href: '#prizes', disabled: false, target: '_self' };
      default:
        return { text: 'Coming Soon', href: '#about', disabled: false, target: '_self' };
    }
  };

  const primaryCta = getPrimaryCta();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-44 md:pb-32 flex items-center overflow-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      {/* ── Atmospheric Background Layers ─────────────────── */}
      {/* Deep crimson radial glow — focal point behind content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 65% at 50% 45%, rgba(150,16,66,0.28) 0%, rgba(90,8,40,0.15) 40%, transparent 75%)',
        }}
      />
      {/* Subtle dot matrix — technical atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hft-dot-pattern opacity-60"
      />
      {/* Left edge crimson bloom */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,8,45,0.22) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      {/* Right edge bloom */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(80,5,35,0.18) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />
      {/* Bottom fade to next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg-primary))' }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">

          {/* ── Left: Main Content (7 cols) ─────────────── */}
          <div className="lg:col-span-7 space-y-7">

            {/* Festival Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(26, 6, 20, 0.90)',
                borderColor: 'rgba(214, 26, 112, 0.28)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#D61A70', boxShadow: '0 0 6px rgba(214,26,112,0.8)' }}
              />
              <span className="font-mono text-xs font-semibold" style={{ color: '#C4A5B5' }}>
                {eventConfig.festivalName}
              </span>
              <span style={{ color: '#4A2E3E' }}>·</span>
              <span className="font-mono text-xs" style={{ color: '#7A5068' }}>
                {eventConfig.shortInstitution}
              </span>
            </div>

            {/* ── Main Headline ─────────────────────────── */}
            <div className="space-y-1">
              <h1
                className="leading-[0.95] tracking-tight"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
              >
                {/* "HACK FOR" in primary text */}
                <span
                  className="block"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: '#FAEEF4',
                    textShadow: '0 0 60px rgba(214,26,112,0.12)',
                  }}
                >
                  HACK FOR
                </span>
                {/* "TOMORROW" in magenta — poster-faithful */}
                <span
                  className="block"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: '#D61A70',
                    textShadow: '0 0 80px rgba(214,26,112,0.35)',
                  }}
                >
                  TOMORROW
                </span>
              </h1>

              {/* Tagline */}
              <p
                className="text-lg sm:text-xl mt-4 max-w-lg leading-relaxed"
                style={{ color: '#C4A5B5' }}
              >
                Innovate Today,&nbsp;
                <span style={{ color: '#FAEEF4', fontWeight: 600 }}>Impact Tomorrow.</span>
                &nbsp;24 hours to shape the future.
              </p>
            </div>

            {/* ── Metadata Pills ────────────────────────── */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border-subtle)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <Calendar className="w-4 h-4" style={{ color: '#D61A70' }} />
                <span className="font-medium" style={{ color: '#FAEEF4' }}>
                  {eventConfig.dates.display}
                </span>
              </div>

              <a
                href={eventConfig.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm group transition-all duration-200"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border-subtle)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: '#D61A70' }} />
                <span>MEC Thrikkakara, Kochi</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* ── CTA Row ───────────────────────────────── */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href={primaryCta.href}
                target={primaryCta.target}
                size="lg"
                variant="primary"
                disabled={primaryCta.disabled}
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                {primaryCta.text}
              </Button>

              <Button
                href="#about"
                size="lg"
                variant="outline"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                Explore Event
              </Button>

              <button
                onClick={() => setIsCalendarModalOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
                style={{ color: '#7A5068' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C4A5B5'}
                onMouseLeave={e => e.currentTarget.style.color = '#7A5068'}
                aria-label="Add to Calendar"
              >
                <Calendar className="w-4 h-4" />
                <span>Add to Calendar</span>
              </button>
            </div>

            {/* ── Trust Micro-Copy ──────────────────────── */}
            <div
              className="flex flex-wrap items-center gap-5 text-xs font-mono pt-1"
              style={{ color: '#7A5068' }}
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: '#10b981' }} />
                100% Free Entry
              </span>
              <span style={{ color: '#4A2E3E' }}>·</span>
              <span className="flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5" style={{ color: '#D61A70' }} />
                Meals Included
              </span>
              <span style={{ color: '#4A2E3E' }}>·</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" style={{ color: '#D61A70' }} />
                ₹30K+ Prize Pool
              </span>
            </div>
          </div>

          {/* ── Right: Event Status Card (5 cols) ─────── */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1A0614 0%, #12040E 100%)',
                border: '1px solid rgba(93,27,64,0.55)',
                boxShadow: '0 4px 40px rgba(7,2,6,0.70), inset 0 1px 0 rgba(214,26,112,0.08)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(214,26,112,0.50), transparent)' }}
              />

              {/* Card Header */}
              <div
                className="flex items-center justify-between pb-6 mb-6"
                style={{ borderBottom: '1px solid rgba(93,27,64,0.40)' }}
              >
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
                  >
                    Event Countdown
                  </h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: '#7A5068' }}>
                    Official 24-Hour Timer
                  </p>
                </div>
                <StatusBadge status={eventConfig.currentStatus} />
              </div>

              {/* Countdown */}
              <div className="py-2 flex justify-center mb-6">
                <Countdown
                  targetDate={eventConfig.dates.countdownTarget}
                  isConfirmed={eventConfig.dates.isDateConfirmed}
                />
              </div>

              {/* Inclusions Grid */}
              <div
                className="space-y-3 pt-5"
                style={{ borderTop: '1px solid rgba(93,27,64,0.40)' }}
              >
                <p className="text-[11px] font-mono font-semibold uppercase tracking-widest" style={{ color: '#7A5068' }}>
                  Event Inclusions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: <Utensils className="w-3.5 h-3.5 shrink-0" />, label: 'Full Meals' },
                    { icon: <Sparkles className="w-3.5 h-3.5 shrink-0" />, label: 'Coffee & Snacks' },
                    { icon: <Award className="w-3.5 h-3.5 shrink-0" />, label: 'MEC Certificate' },
                    { icon: <ShieldCheck className="w-3.5 h-3.5 shrink-0" />, label: '₹30K+ Prizes' },
                  ].map(({ icon, label }) => (
                    <div
                      key={label}
                      className="p-2.5 rounded-lg flex items-center gap-2 text-xs"
                      style={{
                        background: 'rgba(7,2,6,0.50)',
                        border: '1px solid rgba(93,27,64,0.30)',
                        color: '#C4A5B5',
                      }}
                    >
                      <span style={{ color: '#D61A70' }}>{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div
                className="mt-5 pt-4 flex items-center justify-between text-xs"
                style={{ borderTop: '1px solid rgba(93,27,64,0.40)' }}
              >
                <span className="font-mono" style={{ color: '#7A5068' }}>Platform Partner:</span>
                <span className="font-bold" style={{ color: '#FAEEF4' }}>Devfolio</span>
              </div>
            </div>
          </div>

        </div>
      </Container>

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
      />
    </section>
  );
};
