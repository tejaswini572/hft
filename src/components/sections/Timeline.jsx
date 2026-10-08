import React from 'react';
import { Clock, Calendar, CheckCircle2, Circle } from 'lucide-react';
import { timelineData } from '../../data/timeline';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Timeline = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5" style={{ color: '#10b981' }} />;
      case 'active':
        return (
          <div className="relative w-5 h-5 flex items-center justify-center">
            <span className="absolute w-full h-full rounded-full animate-ping" style={{ background: 'rgba(214,26,112,0.50)' }} />
            <span className="relative w-3 h-3 rounded-full" style={{ background: '#D61A70' }} />
          </div>
        );
      default:
        return <Circle className="w-4 h-4" style={{ color: '#4A2E3E' }} />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded"
            style={{ background: 'rgba(16,185,129,0.10)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            Completed
          </span>
        );
      case 'active':
        return (
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
            style={{ background: 'rgba(214,26,112,0.12)', color: '#D61A70', border: '1px solid rgba(214,26,112,0.35)' }}
          >
            In Progress
          </span>
        );
      default:
        return (
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded"
            style={{ background: 'rgba(26,6,20,0.60)', color: '#7A5068', border: '1px solid rgba(93,27,64,0.40)' }}
          >
            Upcoming
          </span>
        );
    }
  };

  return (
    <section
      id="timeline"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: '#070206', borderTop: '1px solid rgba(93,27,64,0.35)' }}
    >
      <Container>
        <SectionHeader
          badge="Schedule & Milestones"
          title="Event Timeline"
          subtitle="A comprehensive chronological roadmap from initial application kickoff to final demo presentations."
          align="center"
        />

        <div className="max-w-4xl mx-auto relative pt-4">

          {/* Vertical spine — magenta gradient line */}
          <div
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px md:-translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(150,16,66,0.50) 20%, rgba(93,27,64,0.40) 80%, transparent)',
            }}
          />

          <div className="space-y-8 md:space-y-12 relative">
            {timelineData.milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Spine Node */}
                  <div
                    className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: '#12040E',
                      border: item.status === 'active'
                        ? '2px solid rgba(214,26,112,0.70)'
                        : '2px solid rgba(93,27,64,0.55)',
                      boxShadow: item.status === 'active' ? '0 0 14px rgba(214,26,112,0.30)' : 'none',
                    }}
                  >
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div
                      className="p-6 rounded-2xl transition-all duration-200"
                      style={{
                        background: 'linear-gradient(135deg, #1A0614, #12040E)',
                        border: item.status === 'active'
                          ? '1px solid rgba(214,26,112,0.35)'
                          : '1px solid rgba(93,27,64,0.40)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(214,26,112,0.35)';
                        e.currentTarget.style.boxShadow = '0 0 16px rgba(214,26,112,0.07)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = item.status === 'active'
                          ? 'rgba(214,26,112,0.35)'
                          : 'rgba(93,27,64,0.40)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: '#D61A70' }}>
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                          <span style={{ color: '#4A2E3E' }}>·</span>
                          <Clock className="w-3.5 h-3.5" style={{ color: '#7A5068' }} />
                          <span style={{ color: '#C4A5B5' }}>{item.time}</span>
                        </div>
                        {getStatusBadge(item.status)}
                      </div>

                      <h3
                        className="text-base sm:text-lg font-bold mb-1.5"
                        style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#7A5068' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-mono" style={{ color: '#4A2E3E' }}>
              * Times shown in {timelineData.timezone}. Subject to minor real-time logistical updates.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
