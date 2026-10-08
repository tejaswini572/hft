import React from 'react';
import { Bell, ArrowUpRight, Pin, Calendar, Tag } from 'lucide-react';
import { announcementsData } from '../../data/announcements';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Announcements = () => {
  if (!announcementsData || announcementsData.length === 0) {
    return null;
  }

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'Registration':
        return 'bg-emerald-950/50 text-emerald-400 border-emerald-800/50';
      case 'Important':
        return 'bg-rose-950/50 text-rose-400 border-rose-800/50';
      case 'Schedule':
        return 'bg-amber-950/50 text-amber-400 border-amber-800/50';
      case 'Shortlisting':
        return 'bg-sky-950/50 text-sky-400 border-sky-800/50';
      default:
        return 'bg-neutral-900 text-neutral-300 border-neutral-800';
    }
  };

  return (
    <section id="announcements" className="py-20 md:py-28 bg-neutral-950/60 border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Notice Board"
          title="Official Announcements"
          subtitle="Stay informed with real-time updates regarding registrations, problem track briefs, and schedule milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcementsData.map((ann) => (
            <div
              key={ann.id}
              className={`p-6 rounded-2xl bg-neutral-900/80 border ${
                ann.isPinned ? 'border-sky-500/40' : 'border-neutral-800'
              } flex flex-col justify-between hover:border-neutral-700 transition-colors`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(ann.category)}`}>
                    {ann.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>{ann.date}</span>
                    {ann.isPinned && <Pin className="w-3 h-3 text-sky-400 rotate-45 ml-1" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-heading mb-2">
                  {ann.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {ann.content}
                </p>
              </div>

              {ann.linkText && ann.linkUrl && (
                <div className="pt-4 mt-6 border-t border-neutral-800/60">
                  <a
                    href={ann.linkUrl}
                    target={ann.linkUrl.startsWith('http') ? '_blank' : '_self'}
                    rel={ann.linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors group"
                  >
                    <span>{ann.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
