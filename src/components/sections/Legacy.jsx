import React from 'react';
import { History, Award, Users, Shield, Building, Sparkles } from 'lucide-react';
import { legacyData } from '../../data/legacy';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Legacy = () => {
  return (
    <section id="legacy" className="py-20 md:py-32 bg-[#08090d] border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="History & Tradition"
          title={legacyData.sectionTitle}
          subtitle={legacyData.sectionSubtitle}
        />

        <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-12">
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {legacyData.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {legacyData.milestoneEditions.map((edition, idx) => (
            <div
              key={edition.year}
              className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-extrabold text-white font-heading">
                    {edition.year}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-sky-400 font-bold">
                    {edition.theme}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-neutral-800/80 my-4 text-center">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block">Scale</span>
                    <span className="text-sm font-bold text-white font-heading mt-0.5 block">{edition.registrations}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block">Shortlist</span>
                    <span className="text-sm font-bold text-white font-heading mt-0.5 block">{edition.teamsShortlisted}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block">Rewards</span>
                    <span className="text-sm font-bold text-white font-heading mt-0.5 block">{edition.prizePool}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {edition.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Associated Partners:</span>
                <span className="text-neutral-300 font-semibold">{edition.topSponsors.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
