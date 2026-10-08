import React from 'react';
import { ArrowUpRight, Handshake, Mail, ExternalLink, Shield } from 'lucide-react';
import { sponsorsData } from '../../data/sponsors';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';

export const Sponsors = () => {
  return (
    <section id="partners" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#070206', borderTop: '1px solid rgba(93,27,64,0.35)' }}>
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
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: '#D61A70' }}>
                  {tier.tierName}
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(93,27,64,0.40)' }} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl flex flex-col justify-between group transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #1A0614, #12040E)',
                      border: '1px solid rgba(93,27,64,0.45)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(214,26,112,0.40)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(214,26,112,0.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(93,27,64,0.45)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <span
                          className="text-[11px] font-mono px-2 py-0.5 rounded font-medium"
                          style={{ background: 'rgba(93,27,64,0.30)', color: '#C4A5B5', border: '1px solid rgba(93,27,64,0.35)' }}
                        >
                          {sponsor.tag}
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: '#7A5068' }} />
                      </div>

                      <h4
                        className="text-base sm:text-lg font-bold mb-2"
                        style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
                      >
                        {sponsor.name}
                      </h4>

                      <p className="text-xs leading-relaxed" style={{ color: '#7A5068' }}>
                        {sponsor.description}
                      </p>
                    </div>

                    <div
                      className="pt-4 mt-6 flex items-center justify-between text-[11px] font-mono"
                      style={{ borderTop: '1px solid rgba(93,27,64,0.30)', color: '#7A5068' }}
                    >
                      <span>{sponsor.role}</span>
                      <span className="font-semibold" style={{ color: '#D61A70' }}>Visit Site</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor Callout Banner */}
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
            style={{ background: 'linear-gradient(135deg, #1A0614, #12040E)', border: '1px solid rgba(93,27,64,0.50)' }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(214,26,112,0.10)', border: '1px solid rgba(214,26,112,0.25)' }}
              >
                <Handshake className="w-6 h-6" style={{ color: '#D61A70' }} />
              </div>
              <div>
                <h4 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}>
                  {sponsorsData.sponsorshipCta.heading}
                </h4>
                <p className="text-xs sm:text-sm max-w-lg mt-1" style={{ color: '#7A5068' }}>
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
