import React from 'react';
import { eventStatistics } from '../../data/statistics';
import { Container } from '../layout/Container';

export const Statistics = () => {
  return (
    <section className="border-y border-neutral-800 bg-neutral-950/80 py-12 relative overflow-hidden">
      <Container>
        {/* Main 4 Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {eventStatistics.stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`p-6 rounded-2xl bg-neutral-900/60 border ${
                stat.highlight ? 'border-neutral-700 bg-neutral-900/80' : 'border-neutral-800/80'
              } transition-colors hover:border-neutral-600`}
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-sm font-bold font-mono text-sky-400">
                    {stat.unit}
                  </span>
                )}
              </div>
              
              <h3 className="text-sm sm:text-base font-bold text-neutral-200 font-heading mb-1">
                {stat.label}
              </h3>
              
              <p className="text-xs text-neutral-400 leading-normal">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary metric ticker & attribution footnote */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start text-xs font-mono text-neutral-300">
            {eventStatistics.secondaryMetrics.map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">{m.value}</span>
                <span className="text-neutral-400">{m.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-neutral-400 text-center sm:text-right">
            * Verified historical figures from {eventStatistics.historicalLabel}
          </p>
        </div>
      </Container>
    </section>
  );
};
