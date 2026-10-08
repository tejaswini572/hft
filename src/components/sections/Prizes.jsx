import React from 'react';
import { Trophy, Medal, Award, Check, Sparkles, Coffee, Utensils, FileCheck, ArrowUpRight } from 'lucide-react';
import { prizesData } from '../../data/prizes';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Prizes = () => {
  const firstPrize = prizesData.podium.find((p) => p.rank === 1);
  const secondPrize = prizesData.podium.find((p) => p.rank === 2);
  const thirdPrize = prizesData.podium.find((p) => p.rank === 3);

  return (
    <section id="prizes" className="py-20 md:py-32 bg-neutral-950/60 border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Rewards & Accolades"
          title={`Win ${prizesData.totalPrizePool} in Prizes`}
          subtitle="Compete for cash rewards, accredited championship trophies, partner bounties, and developer merchandise."
          align="center"
        />

        {/* Podium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto mb-16">
          
          {/* 2nd Place (Silver) */}
          <div className="order-2 md:order-1 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 mb-6">
                <Medal className="w-6 h-6 text-neutral-300" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                {secondPrize?.title.split('—')[0]}
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1 mb-4">
                {secondPrize?.amount}
              </h3>

              <p className="text-xs text-neutral-400 mb-6">
                {secondPrize?.description}
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                {secondPrize?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 1st Place (Gold / Dominant) */}
          <div className="order-1 md:order-2 p-8 sm:p-10 rounded-2xl bg-neutral-900 border-2 border-sky-400/80 hover:border-sky-400 transition-all shadow-xl shadow-sky-500/5 relative flex flex-col justify-between md:-translate-y-4">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
              <span className="px-3 py-1 rounded-full bg-sky-400 text-neutral-950 font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                Grand Winner
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
                <Trophy className="w-8 h-8 text-sky-400" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                {firstPrize?.title.split('—')[0]}
              </span>

              <h3 className="text-4xl sm:text-5xl font-black text-white font-heading mt-1 mb-4">
                {firstPrize?.amount}
              </h3>

              <p className="text-xs text-neutral-300 mb-6 font-medium">
                {firstPrize?.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-neutral-800">
                {firstPrize?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200 font-medium">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3rd Place (Bronze) */}
          <div className="order-3 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-500 mb-6">
                <Award className="w-6 h-6 text-amber-500" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                {thirdPrize?.title.split('—')[0]}
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1 mb-4">
                {thirdPrize?.amount}
              </h3>

              <p className="text-xs text-neutral-400 mb-6">
                {thirdPrize?.description}
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                {thirdPrize?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Partner Track Bounties */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold font-mono shrink-0">
                ETH
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">
                  Partner Ecosystem Track
                </span>
                <h4 className="text-base font-bold text-white font-heading">
                  ETHIndia Ethereum Ecosystem Track — {prizesData.partnerTracks[0].bounty}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {prizesData.partnerTracks[0].description}
                </p>
              </div>
            </div>

            <a
              href="https://ethindia.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono font-medium text-white transition-colors shrink-0 inline-flex items-center gap-1"
            >
              <span>Track Guide</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* General Participant Perks Ticker */}
        <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 max-w-4xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold text-center mb-4">
            Guaranteed Perks for Every Finalist Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {prizesData.generalPerks.map((perk) => (
              <div key={perk.title} className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                <p className="text-xs font-bold text-white mb-0.5">{perk.title}</p>
                <p className="text-[11px] text-neutral-400 leading-tight">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};
