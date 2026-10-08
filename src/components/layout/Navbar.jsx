import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { eventConfig, EVENT_STATUS_ENUM } from '../../data/eventConfig';
import { navigationData } from '../../data/navigation';
import { Button } from '../ui/Button';
import { Container } from './Container';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const getCtaText = () => {
    switch (eventConfig.currentStatus) {
      case EVENT_STATUS_ENUM.REGISTRATIONS_OPEN:
        return 'Register on Devfolio';
      case EVENT_STATUS_ENUM.REGISTRATIONS_CLOSED:
        return 'Applications Closed';
      case EVENT_STATUS_ENUM.SHORTLISTING:
        return 'Shortlist Results';
      case EVENT_STATUS_ENUM.LIVE:
        return 'Hackathon Live';
      case EVENT_STATUS_ENUM.COMPLETED:
        return 'View Projects';
      default:
        return 'Coming Soon';
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo & Lockup */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
              aria-label="Hack For Tomorrow Home"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white group-hover:border-sky-400/60 transition-colors">
                <Terminal className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-white tracking-tight leading-none group-hover:text-sky-300 transition-colors">
                  HACK FOR TOMORROW
                </span>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase leading-tight mt-0.5">
                  {eventConfig.festivalName} • MEC
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
              {navigationData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTA */}
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

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden pt-20 bg-[#08090d]/95 backdrop-blur-lg animate-in fade-in duration-150">
          <Container className="h-full flex flex-col justify-between pb-8">
            <nav className="flex flex-col space-y-1 mt-4" aria-label="Mobile Navigation">
              {navigationData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-neutral-200 hover:text-white hover:bg-neutral-800/70 transition-colors flex items-center justify-between border-b border-neutral-900"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-neutral-500 font-mono">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-8 space-y-3 pt-4 border-t border-neutral-800">
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
              <div className="text-center">
                <p className="text-xs text-neutral-500 font-mono">
                  {eventConfig.institution}
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
