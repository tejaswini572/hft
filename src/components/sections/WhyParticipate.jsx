import React from 'react';
import { Sparkles, Users, Trophy, BookOpen, Rocket, Coffee } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const WhyParticipate = () => {
  const pillars = [
    {
      num: '01',
      title: 'Build Real Products',
      description: 'Transform theoretical concepts into tangible, deployable prototypes with direct mentorship from industry practitioners.',
      icon: <Sparkles className="w-5 h-5" style={{ color: '#D61A70' }} />
    },
    {
      num: '02',
      title: 'Network & Connect',
      description: 'Collaborate with ambitious developer peers from 50+ universities across India, sharing insights and establishing lasting technical bonds.',
      icon: <Users className="w-5 h-5" style={{ color: '#D61A70' }} />
    },
    {
      num: '03',
      title: 'Win Big & Earn Recognition',
      description: 'Compete for a ₹30,000+ prize pool, partner track bounties, certified merit accolades, and institutional prestige from Excel MEC.',
      icon: <Trophy className="w-5 h-5" style={{ color: '#D61A70' }} />
    },
    {
      num: '04',
      title: 'Learn New Skills',
      description: 'Access pre-hackathon workshop materials, explore modern tech stacks, and receive real-time architecture feedback from senior engineers.',
      icon: <BookOpen className="w-5 h-5" style={{ color: '#D61A70' }} />
    },
    {
      num: '05',
      title: 'Launch Your Career',
      description: 'Get noticed by top engineering firms and hiring managers looking for proven builders, adding a flagship project to your portfolio.',
      icon: <Rocket className="w-5 h-5" style={{ color: '#D61A70' }} />
    },
    {
      num: '06',
      title: 'Have Fun & Experience Campus Life',
      description: 'Enjoy 24 continuous hours of coding, midnight food, unlimited caffeine, music, and an electrifying campus atmosphere.',
      icon: <Coffee className="w-5 h-5" style={{ color: '#D61A70' }} />
    }
  ];

  return (
    <section
      id="why-participate"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: '#0A030A', borderTop: '1px solid rgba(93,27,64,0.35)' }}
    >
      <Container>
        <SectionHeader
          badge="Why HFT"
          title="More Than Just a Hackathon"
          subtitle="Discover what makes Hack For Tomorrow one of Kerala's most anticipated collegiate developer gatherings."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-7 rounded-2xl flex flex-col justify-between group transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #1A0614, #12040E)',
                border: '1px solid rgba(93,27,64,0.45)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(214,26,112,0.40)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(214,26,112,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(93,27,64,0.45)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Numbered index in magenta */}
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                    style={{
                      color: '#D61A70',
                      background: 'rgba(214,26,112,0.10)',
                      border: '1px solid rgba(214,26,112,0.25)',
                    }}
                  >
                    {pillar.num}
                  </span>
                  {/* Icon box */}
                  <div
                    className="p-2.5 rounded-xl group-hover:scale-110 transition-transform"
                    style={{
                      background: 'rgba(214,26,112,0.08)',
                      border: '1px solid rgba(214,26,112,0.20)',
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
                >
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed font-normal" style={{ color: '#7A5068' }}>
                  {pillar.description}
                </p>
              </div>

              <div
                className="pt-5 mt-5 flex items-center justify-between text-xs font-mono"
                style={{ borderTop: '1px solid rgba(93,27,64,0.30)' }}
              >
                <span style={{ color: '#4A2E3E' }}>HFT Pillar</span>
                <span
                  className="font-semibold transition-colors"
                  style={{ color: '#7A5068' }}
                >
                  Verified Perk →
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
