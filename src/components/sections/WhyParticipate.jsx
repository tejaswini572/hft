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
      icon: <Sparkles className="w-5 h-5 text-sky-400" />
    },
    {
      num: '02',
      title: 'Network & Connect',
      description: 'Collaborate with ambitious developer peers from 50+ universities across India, sharing insights and establishing lasting technical bonds.',
      icon: <Users className="w-5 h-5 text-indigo-400" />
    },
    {
      num: '03',
      title: 'Win Big & Earn Recognition',
      description: 'Compete for a ₹30,000+ prize pool, partner track bounties, certified merit accolades, and institutional prestige from Excel MEC.',
      icon: <Trophy className="w-5 h-5 text-amber-400" />
    },
    {
      num: '04',
      title: 'Learn New Skills',
      description: 'Access pre-hackathon workshop materials, explore modern tech stacks, and receive real-time architecture feedback from senior engineers.',
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />
    },
    {
      num: '05',
      title: 'Launch Your Career',
      description: 'Get noticed by top engineering firms and hiring managers looking for proven builders, adding a star flagship project to your portfolio.',
      icon: <Rocket className="w-5 h-5 text-purple-400" />
    },
    {
      num: '06',
      title: 'Have Fun & Experience Campus Life',
      description: 'Enjoy 24 continuous hours of coding, midnight food, unlimited caffeine, music, and an electrifying campus atmosphere.',
      icon: <Coffee className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <section id="why-participate" className="py-20 md:py-32 bg-neutral-950/60 border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Why HFT"
          title="More Than Just a Hackathon"
          subtitle="Discover what makes Hack For Tomorrow one of Kerala's most anticipated collegiate developer gatherings."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group hover:bg-neutral-900/90"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-sky-400 px-2.5 py-1 rounded-md bg-sky-950/40 border border-sky-800/40">
                    {pillar.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-3 group-hover:text-sky-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/50 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>HFT Pillar</span>
                <span className="text-neutral-400 group-hover:text-sky-400 transition-colors font-semibold">Verified Perk</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
