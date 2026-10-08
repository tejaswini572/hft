import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { eventConfig, EVENT_STATUS_ENUM } from '../../data/eventConfig';
import { navigationData } from '../../data/navigation';
import { Button } from '../ui/Button';
import { Container } from './Container';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => setIsMobileMenuOpen(false);

  const getCtaText = () => {
    switch (eventConfig.currentStatus) {
      case EVENT_STATUS_ENUM.REGISTRATIONS_OPEN:   return 'Register Now';
      case EVENT_STATUS_ENUM.REGISTRATIONS_CLOSED: return 'Applications Closed';
      case EVENT_STATUS_ENUM.SHORTLISTING:         return 'Shortlist Results';
      case EVENT_STATUS_ENUM.LIVE:                 return 'Hackathon Live';
      case EVENT_STATUS_ENUM.COMPLETED:            return 'View Projects';
      default:                                     return 'Coming Soon';
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070206]/92 backdrop-blur-xl border-b border-[rgba(93,27,64,0.50)] py-3 shadow-[0_4px_24px_rgba(7,2,6,0.70)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">

            {/* Brand Lockup */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F42E88] rounded-lg"
              aria-label="Hack For Tomorrow Home"
            >
              {/* HFT monogram pill */}
              <div className="w-9 h-9 rounded-lg bg-[#1A0614] border border-[rgba(214,26,112,0.35)] flex items-center justify-center group-hover:border-[#D61A70] group-hover:shadow-[0_0_12px_rgba(214,26,112,0.25)] transition-all duration-200">
                <span className="font-display font-extrabold text-[13px] text-[#D61A70] leading-none tracking-tight">HFT</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[15px] text-[#FAEEF4] tracking-tight leading-none group-hover:text-[#F42E88] transition-colors duration-200">
                  HACK FOR TOMORROW
                </span>
                <span className="text-[10px] font-mono text-[#7A5068] tracking-widest uppercase leading-tight mt-0.5">
                  {eventConfig.festivalName} · MEC
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main Navigation">
              {navigationData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-md text-[13px] font-medium text-[#C4A5B5] hover:text-[#FAEEF4] hover:bg-[#1A0614] transition-all duration-150 relative group"
                >
                  {link.label}
                  {/* Magenta underline on hover */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D61A70] rounded-full group-hover:w-4 transition-all duration-200" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                href={eventConfig.links.registrationUrl}
                target="_blank"
                size="sm"
                variant="primary"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                {getCtaText()}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#C4A5B5] hover:text-[#FAEEF4] hover:bg-[#1A0614] border border-transparent hover:border-[rgba(93,27,64,0.50)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F42E88]"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 xl:hidden pt-[72px] bg-[#070206]/97 backdrop-blur-xl"
          style={{ animation: 'fadeIn 0.15s ease' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D61A70] to-transparent opacity-40" />
          <Container className="h-full flex flex-col justify-between pb-10">
            <nav className="flex flex-col space-y-1 mt-6" aria-label="Mobile Navigation">
              {navigationData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="px-4 py-3.5 rounded-xl text-base font-semibold text-[#C4A5B5] hover:text-[#FAEEF4] hover:bg-[#1A0614] border border-transparent hover:border-[rgba(93,27,64,0.45)] transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#7A5068] text-sm">→</span>
                </a>
              ))}
            </nav>

            <div className="space-y-4 pt-6 border-t border-[rgba(93,27,64,0.45)]">
              <Button
                href={eventConfig.links.registrationUrl}
                target="_blank"
                size="lg"
                variant="primary"
                className="w-full"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={handleNavLinkClick}
              >
                {getCtaText()}
              </Button>
              <p className="text-center text-xs font-mono text-[#7A5068]">
                {eventConfig.institution}
              </p>
            </div>
          </Container>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
};
