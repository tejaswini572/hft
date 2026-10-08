import React from 'react';
import { ArrowUpRight, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { navigationData } from '../../data/navigation';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background: 'linear-gradient(to bottom, #0A030A, #070206)',
        borderTop: '1px solid rgba(93,27,64,0.40)',
      }}
    >
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(214,26,112,0.35) 50%, transparent 100%)' }}
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

          {/* ── Column 1: Brand ────────────────────── */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: '#1A0614',
                  border: '1px solid rgba(214,26,112,0.30)',
                }}
              >
                <span
                  className="font-display font-extrabold text-[13px] leading-none"
                  style={{ color: '#D61A70' }}
                >
                  HFT
                </span>
              </div>
              <span
                className="font-display font-extrabold text-lg tracking-tight"
                style={{ color: '#FAEEF4' }}
              >
                HACK FOR TOMORROW
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#7A5068' }}>
              The flagship 24-hour offline hackathon of{' '}
              <span style={{ color: '#C4A5B5' }}>{eventConfig.festivalName}</span>, the annual
              techno-managerial fest of{' '}
              <span style={{ color: '#C4A5B5' }}>{eventConfig.shortInstitution}</span>.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#7A5068' }}>
              <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#D61A70' }} />
              <span>{eventConfig.venue.name}, {eventConfig.venue.city}</span>
            </div>
          </div>

          {/* ── Column 2: Navigation ───────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: '#C4A5B5' }}>
              Event Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationData.navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-150"
                    style={{ color: '#7A5068' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C4A5B5'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A5068'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Institutional ────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: '#C4A5B5' }}>
              Institutional
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationData.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors duration-150 group"
                    style={{ color: '#7A5068' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C4A5B5'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A5068'}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ──────────────────── */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: '#C4A5B5' }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${eventConfig.contact.email}`}
                className="flex items-center gap-2 transition-colors duration-150"
                style={{ color: '#7A5068' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D61A70'}
                onMouseLeave={e => e.currentTarget.style.color = '#7A5068'}
              >
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#D61A70' }} />
                <span>{eventConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${eventConfig.contact.generalPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 transition-colors duration-150"
                style={{ color: '#7A5068' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D61A70'}
                onMouseLeave={e => e.currentTarget.style.color = '#7A5068'}
              >
                <Phone className="w-4 h-4 shrink-0" style={{ color: '#D61A70' }} />
                <span>{eventConfig.contact.generalPhone}</span>
              </a>
            </div>

            <div className="pt-1">
              <p className="text-xs font-mono mb-3" style={{ color: '#7A5068' }}>Connect with Excel MEC:</p>
              <div className="flex items-center gap-2 flex-wrap">
                {navigationData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs rounded-md font-mono transition-all duration-150"
                    style={{
                      background: '#1A0614',
                      border: '1px solid rgba(93,27,64,0.45)',
                      color: '#7A5068',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(214,26,112,0.40)';
                      e.currentTarget.style.color = '#C4A5B5';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(93,27,64,0.45)';
                      e.currentTarget.style.color = '#7A5068';
                    }}
                    aria-label={social.name}
                  >
                    {social.name.split(' ')[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────── */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          style={{
            borderTop: '1px solid rgba(93,27,64,0.35)',
            color: '#4A2E3E',
          }}
        >
          <p>© {eventConfig.editionYear} Hack For Tomorrow. Excel, Govt. Model Engineering College. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Organized with{' '}
            <Heart className="w-3.5 h-3.5 fill-[#D61A70] text-[#D61A70] inline" />{' '}
            by the Excel MEC Student Body
          </p>
        </div>
      </Container>
    </footer>
  );
};
