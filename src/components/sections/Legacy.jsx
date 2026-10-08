import React from 'react';
import { History, Award, Users, Shield, Building, Sparkles } from 'lucide-react';
import { legacyData } from '../../data/legacy';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Legacy = () => {
  return (
    <section id="legacy" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0A030A' }}>
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[450px] h-[300px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(150, 16, 66, 0.12) 0%, rgba(10, 3, 10, 0) 70%)' }}
      />

      <Container>
        <SectionHeader
          badge="History & Tradition"
          title={legacyData.sectionTitle}
          subtitle={legacyData.sectionSubtitle}
        />

        <div
          className="p-8 rounded-2xl border mb-12"
          style={{
            backgroundColor: '#1A0614',
            borderColor: 'rgba(93, 27, 64, 0.45)',
          }}
        >
          <p className="text-sm sm:text-base leading-relaxed font-normal" style={{ color: '#C4A5B5' }}>
            {legacyData.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {legacyData.milestoneEditions.map((edition, idx) => (
            <div
              key={edition.year}
              className="p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
              style={{
                backgroundColor: '#1A0614',
                borderColor: 'rgba(93, 27, 64, 0.45)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.45)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.45)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-extrabold font-display" style={{ color: '#FAEEF4' }}>
                    {edition.year}
                  </span>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded font-bold border"
                    style={{
                      backgroundColor: 'rgba(214, 26, 112, 0.15)',
                      borderColor: 'rgba(214, 26, 112, 0.35)',
                      color: '#F42E88',
                    }}
                  >
                    {edition.theme}
                  </span>
                </div>

                <div
                  className="grid grid-cols-3 gap-2 py-4 border-y my-4 text-center"
                  style={{ borderColor: 'rgba(93, 27, 64, 0.4)' }}
                >
                  <div>
                    <span className="text-xs font-mono uppercase block" style={{ color: '#C4A5B5' }}>Scale</span>
                    <span className="text-sm font-bold font-display mt-0.5 block" style={{ color: '#FAEEF4' }}>{edition.registrations}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase block" style={{ color: '#C4A5B5' }}>Shortlist</span>
                    <span className="text-sm font-bold font-display mt-0.5 block" style={{ color: '#FAEEF4' }}>{edition.teamsShortlisted}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase block" style={{ color: '#C4A5B5' }}>Rewards</span>
                    <span className="text-sm font-bold font-display mt-0.5 block" style={{ color: '#F42E88' }}>{edition.prizePool}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {edition.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm" style={{ color: '#C4A5B5' }}>
                      <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#F42E88' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: 'rgba(93, 27, 64, 0.4)', color: '#7A5068' }}>
                <span>Associated Partners:</span>
                <span className="font-semibold" style={{ color: '#C4A5B5' }}>{edition.topSponsors.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

