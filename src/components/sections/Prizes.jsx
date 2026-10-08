import React from 'react';
import { Trophy, Medal, Award, Check, ArrowUpRight } from 'lucide-react';
import { prizesData } from '../../data/prizes';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Prizes = () => {
  const firstPrize  = prizesData.podium.find((p) => p.rank === 1);
  const secondPrize = prizesData.podium.find((p) => p.rank === 2);
  const thirdPrize  = prizesData.podium.find((p) => p.rank === 3);

  const cardBase = {
    background: 'linear-gradient(135deg, #1A0614 0%, #12040E 100%)',
    border: '1px solid rgba(93,27,64,0.50)',
    borderRadius: '1rem',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <section
      id="prizes"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: '#0A030A', borderTop: '1px solid rgba(93,27,64,0.35)' }}
    >
      {/* Soft crimson glow behind podium */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(150,16,66,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <Container className="relative z-10">
        <SectionHeader
          badge="Rewards & Accolades"
          title={`Win ${prizesData.totalPrizePool} in Prizes`}
          subtitle="Compete for cash rewards, accredited championship trophies, partner bounties, and developer merchandise."
          align="center"
        />

        {/* ── Podium Layout ──────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto mb-12">

          {/* 2nd Place */}
          <div
            className="order-2 md:order-1 p-6 sm:p-8 flex flex-col justify-between"
            style={cardBase}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(120,35,80,0.70)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(214,26,112,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(93,27,64,0.50)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(93,27,64,0.30)', border: '1px solid rgba(93,27,64,0.55)' }}
              >
                <Medal className="w-6 h-6" style={{ color: '#C4A5B5' }} />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: '#7A5068' }}>
                {secondPrize?.title.split('—')[0]}
              </span>

              <h3
                className="text-3xl sm:text-4xl font-extrabold mt-1 mb-4"
                style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
              >
                {secondPrize?.amount}
              </h3>

              <p className="text-xs mb-6" style={{ color: '#7A5068' }}>
                {secondPrize?.description}
              </p>

              <ul className="space-y-2.5 pt-4" style={{ borderTop: '1px solid rgba(93,27,64,0.35)' }}>
                {secondPrize?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#C4A5B5' }}>
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#961042' }} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 1st Place (Dominant — elevated) */}
          <div
            className="order-1 md:order-2 p-8 sm:p-10 flex flex-col justify-between md:-translate-y-5 relative"
            style={{
              background: 'linear-gradient(150deg, #220918 0%, #12040E 100%)',
              border: '1.5px solid rgba(214,26,112,0.55)',
              borderRadius: '1.125rem',
              boxShadow: '0 8px 48px rgba(214,26,112,0.16), inset 0 1px 0 rgba(214,26,112,0.12)',
              transition: 'box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 12px 56px rgba(214,26,112,0.25), inset 0 1px 0 rgba(214,26,112,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 8px 48px rgba(214,26,112,0.16), inset 0 1px 0 rgba(214,26,112,0.12)';
            }}
          >
            {/* Grand Winner tag */}
            <div className="absolute top-0 right-4 transform -translate-y-1/2">
              <span
                className="px-3 py-1 rounded-full font-mono text-[11px] font-extrabold uppercase tracking-wider"
                style={{
                  background: '#D61A70',
                  color: '#FAEEF4',
                  boxShadow: '0 4px 14px rgba(214,26,112,0.45)',
                }}
              >
                Grand Winner
              </span>
            </div>

            {/* Top magenta accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-[1px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(214,26,112,0.60), transparent)' }}
            />

            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: 'rgba(214,26,112,0.12)',
                  border: '1px solid rgba(214,26,112,0.35)',
                }}
              >
                <Trophy className="w-8 h-8" style={{ color: '#D61A70' }} />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: '#D61A70' }}>
                {firstPrize?.title.split('—')[0]}
              </span>

              <h3
                className="text-4xl sm:text-5xl font-black mt-1 mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#FAEEF4',
                  textShadow: '0 0 30px rgba(214,26,112,0.20)',
                }}
              >
                {firstPrize?.amount}
              </h3>

              <p className="text-xs font-medium mb-6" style={{ color: '#C4A5B5' }}>
                {firstPrize?.description}
              </p>

              <ul className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(93,27,64,0.40)' }}>
                {firstPrize?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium" style={{ color: '#FAEEF4' }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#D61A70' }} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3rd Place */}
          <div
            className="order-3 p-6 sm:p-8 flex flex-col justify-between"
            style={cardBase}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(120,35,80,0.70)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(214,26,112,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(93,27,64,0.50)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(93,27,64,0.30)', border: '1px solid rgba(93,27,64,0.55)' }}
              >
                <Award className="w-6 h-6" style={{ color: '#961042' }} />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: '#7A5068' }}>
                {thirdPrize?.title.split('—')[0]}
              </span>

              <h3
                className="text-3xl sm:text-4xl font-extrabold mt-1 mb-4"
                style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
              >
                {thirdPrize?.amount}
              </h3>

              <p className="text-xs mb-6" style={{ color: '#7A5068' }}>
                {thirdPrize?.description}
              </p>

              <ul className="space-y-2.5 pt-4" style={{ borderTop: '1px solid rgba(93,27,64,0.35)' }}>
                {thirdPrize?.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#C4A5B5' }}>
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#961042' }} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* ── ETHIndia Partner Track ─────────────── */}
        <div className="max-w-4xl mx-auto mb-10">
          <div
            className="p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'rgba(26,6,20,0.70)',
              border: '1px solid rgba(93,27,64,0.45)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold font-mono text-sm shrink-0"
                style={{
                  background: 'rgba(150,16,66,0.15)',
                  border: '1px solid rgba(150,16,66,0.30)',
                  color: '#961042',
                }}
              >
                ETH
              </div>
              <div>
                <span className="text-xs font-mono uppercase font-semibold" style={{ color: '#961042' }}>
                  Partner Ecosystem Track
                </span>
                <h4
                  className="text-base font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
                >
                  ETHIndia Ethereum Track — {prizesData.partnerTracks[0].bounty}
                </h4>
                <p className="text-xs mt-0.5" style={{ color: '#7A5068' }}>
                  {prizesData.partnerTracks[0].description}
                </p>
              </div>
            </div>

            <a
              href="https://ethindia.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono font-medium inline-flex items-center gap-1.5 shrink-0 transition-all duration-150"
              style={{
                background: '#1A0614',
                border: '1px solid rgba(93,27,64,0.55)',
                color: '#C4A5B5',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(214,26,112,0.40)';
                e.currentTarget.style.color = '#FAEEF4';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(93,27,64,0.55)';
                e.currentTarget.style.color = '#C4A5B5';
              }}
            >
              <span>Track Guide</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── Finalist Perks ────────────────────── */}
        <div
          className="p-6 rounded-2xl max-w-4xl mx-auto"
          style={{
            background: 'rgba(7,2,6,0.50)',
            border: '1px solid rgba(93,27,64,0.35)',
          }}
        >
          <p
            className="text-xs font-mono uppercase tracking-widest font-semibold text-center mb-4"
            style={{ color: '#7A5068' }}
          >
            Guaranteed Perks for Every Finalist Team
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {prizesData.generalPerks.map((perk) => (
              <div
                key={perk.title}
                className="p-3 rounded-xl"
                style={{
                  background: 'rgba(26,6,20,0.60)',
                  border: '1px solid rgba(93,27,64,0.30)',
                }}
              >
                <p className="text-xs font-bold mb-0.5" style={{ color: '#FAEEF4' }}>{perk.title}</p>
                <p className="text-[11px] leading-tight" style={{ color: '#7A5068' }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};
