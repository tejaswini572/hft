import React from 'react';
import { eventStatistics } from '../../data/statistics';
import { Container } from '../layout/Container';

export const Statistics = () => {
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0A030A, #12040E)',
        borderTop: '1px solid rgba(93,27,64,0.35)',
        borderBottom: '1px solid rgba(93,27,64,0.35)',
      }}
    >
      {/* Faint dot matrix */}
      <div className="absolute inset-0 hft-dot-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        {/* Main 4 Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-8">
          {eventStatistics.stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl transition-all duration-200 group"
              style={{
                background: stat.highlight
                  ? 'linear-gradient(135deg, #1A0614, #12040E)'
                  : 'rgba(26, 6, 20, 0.60)',
                border: stat.highlight
                  ? '1px solid rgba(214,26,112,0.35)'
                  : '1px solid rgba(93,27,64,0.40)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(214,26,112,0.45)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(214,26,112,0.10)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = stat.highlight
                  ? 'rgba(214,26,112,0.35)'
                  : 'rgba(93,27,64,0.40)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: stat.highlight ? '#F42E88' : '#D61A70',
                    textShadow: stat.highlight ? '0 0 30px rgba(214,26,112,0.30)' : 'none',
                  }}
                >
                  {stat.value}
                </span>
                {stat.unit && (
                  <span
                    className="text-sm font-bold font-mono"
                    style={{ color: stat.highlight ? '#F42E88' : '#961042' }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>

              <h3
                className="text-sm sm:text-base font-bold mb-1"
                style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
              >
                {stat.label}
              </h3>

              <p className="text-xs leading-normal" style={{ color: '#7A5068' }}>
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Metrics Ticker */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(93,27,64,0.30)' }}
        >
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start text-xs font-mono">
            {eventStatistics.secondaryMetrics.map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="font-bold" style={{ color: '#D61A70' }}>{m.value}</span>
                <span style={{ color: '#7A5068' }}>{m.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-center sm:text-right" style={{ color: '#4A2E3E' }}>
            * Verified historical figures from {eventStatistics.historicalLabel}
          </p>
        </div>
      </Container>
    </section>
  );
};
