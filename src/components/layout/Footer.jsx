import React from 'react';
import { Terminal, ArrowUpRight, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { navigationData } from '../../data/navigation';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-16 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4 text-sky-400" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                HACK FOR TOMORROW
              </span>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              The flagship 24-hour offline hackathon of {eventConfig.festivalName}, the annual techno-managerial fest of {eventConfig.shortInstitution}.
            </p>
            
            <div className="pt-2 text-xs font-mono text-neutral-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{eventConfig.venue.name}, {eventConfig.venue.city}</span>
            </div>
          </div>

          {/* Column 2: Quick Anchors */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neutral-200 uppercase tracking-wider">
              Event Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navigationData.navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neutral-200 uppercase tracking-wider">
              Institutional & Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navigationData.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neutral-200 uppercase tracking-wider">
              Inquiries & Socials
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${eventConfig.contact.email}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{eventConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${eventConfig.contact.generalPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{eventConfig.contact.generalPhone}</span>
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs font-mono text-neutral-400 mb-2">Connect with Excel MEC:</p>
              <div className="flex items-center gap-2 flex-wrap">
                {navigationData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                    aria-label={social.name}
                  >
                    {social.name.split(' ')[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {eventConfig.editionYear} Hack For Tomorrow (HFT). Excel, Govt. Model Engineering College. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Organized with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> by the Excel MEC Student Body
          </p>
        </div>
      </Container>
    </footer>
  );
};
