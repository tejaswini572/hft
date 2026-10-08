import React from 'react';
import { Bell, ArrowUpRight, Pin, Calendar, Tag } from 'lucide-react';
import { announcementsData } from '../../data/announcements';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Announcements = () => {
  if (!announcementsData || announcementsData.length === 0) {
    return null;
  }

  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'Registration':
        return { backgroundColor: 'rgba(214, 26, 112, 0.15)', borderColor: 'rgba(214, 26, 112, 0.4)', color: '#F42E88' };
      case 'Important':
        return { backgroundColor: 'rgba(150, 16, 66, 0.2)', borderColor: 'rgba(150, 16, 66, 0.5)', color: '#FAEEF4' };
      case 'Schedule':
        return { backgroundColor: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.4)', color: '#FCD34D' };
      case 'Shortlisting':
        return { backgroundColor: 'rgba(214, 26, 112, 0.2)', borderColor: 'rgba(214, 26, 112, 0.5)', color: '#FAEEF4' };
      default:
        return { backgroundColor: '#260A1C', borderColor: 'rgba(93, 27, 64, 0.4)', color: '#C4A5B5' };
    }
  };

  return (
    <section id="announcements" className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#070206' }}>
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
              className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300"
              style={{
                backgroundColor: '#1A0614',
                borderColor: ann.isPinned ? 'rgba(214, 26, 112, 0.6)' : 'rgba(93, 27, 64, 0.45)',
                boxShadow: ann.isPinned ? '0 0 20px rgba(214, 26, 112, 0.2)' : '0 4px 20px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = ann.isPinned ? 'rgba(214, 26, 112, 0.6)' : 'rgba(93, 27, 64, 0.45)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border"
                    style={getCategoryBadgeStyle(ann.category)}
                  >
                    {ann.category}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: '#C4A5B5' }}>
                    <Calendar className="w-3 h-3" style={{ color: '#C4A5B5' }} />
                    <span>{ann.date}</span>
                    {ann.isPinned && <Pin className="w-3 h-3 rotate-45 ml-1" style={{ color: '#F42E88' }} />}
                  </div>
                </div>

                <h3 className="text-base font-bold font-display mb-2" style={{ color: '#FAEEF4' }}>
                  {ann.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed font-normal" style={{ color: '#C4A5B5' }}>
                  {ann.content}
                </p>
              </div>

              {ann.linkText && ann.linkUrl && (
                <div className="pt-4 mt-6 border-t" style={{ borderColor: 'rgba(93, 27, 64, 0.4)' }}>
                  <a
                    href={ann.linkUrl}
                    target={ann.linkUrl.startsWith('http') ? '_blank' : '_self'}
                    rel={ann.linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-colors group"
                    style={{ color: '#F42E88' }}
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

