import React from 'react';
import { Clock, Calendar, CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { timelineData } from '../../data/timeline';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Timeline = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'active':
        return <div className="w-4 h-4 rounded-full bg-sky-400 animate-ping" />;
      default:
        return <Circle className="w-4 h-4 text-neutral-500" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-400 border border-emerald-800/40">Completed</span>;
      case 'active':
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/40 font-bold">In Progress</span>;
      default:
        return <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">Upcoming</span>;
    }
  };

  return (
    <section id="timeline" className="py-20 md:py-32 bg-[#08090d] border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Schedule & Milestones"
          title="Event Timeline"
          subtitle="A comprehensive chronological roadmap from initial application kickoff to final demo presentations."
          align="center"
        />

        <div className="max-w-4xl mx-auto relative pt-4">
          
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-neutral-800 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12 relative">
            {timelineData.milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Spine Node Icon */}
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center">
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                          <span className="text-neutral-600">•</span>
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          <span className="text-neutral-300">{item.time}</span>
                        </div>
                        {getStatusBadge(item.status)}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-mono text-neutral-400">
              * Times shown in {timelineData.timezone}. Subject to minor real-time logistical updates during the event.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
