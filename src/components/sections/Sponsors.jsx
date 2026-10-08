import React from 'react';
import { ArrowUpRight, Handshake, Mail, ExternalLink, Shield } from 'lucide-react';
import { sponsorsData } from '../../data/sponsors';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';

export const Sponsors = () => {
  return (
    <section id="partners" className="py-20 md:py-32 bg-neutral-950/60 border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Ecosystem Backers"
          title={sponsorsData.sectionTitle}
          subtitle={sponsorsData.sectionSubtitle}
          align="center"
        />

        <div className="space-y-12 max-w-5xl mx-auto mb-16">
          {sponsorsData.tiers.map((tier) => (
            <div key={tier.tierId} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  {tier.tierName}
                </span>
                <div className="flex-1 h-px bg-neutral-800" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-600 hover:bg-neutral-900 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-medium">
                          {sponsor.tag}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white font-heading mb-2 group-hover:text-sky-300 transition-colors">
                        {sponsor.name}
                      </h4>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {sponsor.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>{sponsor.role}</span>
                      <span className="text-sky-400 font-semibold group-hover:underline">Visit Site</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor Callout Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-heading">
                  {sponsorsData.sponsorshipCta.heading}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mt-1">
                  {sponsorsData.sponsorshipCta.subheading}
                </p>
              </div>
            </div>

            <Button
              href={`mailto:${sponsorsData.sponsorshipCta.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Hack%20For%20Tomorrow`}
              variant="primary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            >
              {sponsorsData.sponsorshipCta.buttonText}
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
};
