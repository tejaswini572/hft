import React from 'react';
import { Sparkles, Wallet, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const About = () => {
  const getTrackIcon = (iconName) => {
    const iconStyle = { color: '#D61A70' };
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" style={iconStyle} />;
      case 'Wallet':   return <Wallet   className="w-5 h-5" style={iconStyle} />;
      case 'Code':     return <Code     className="w-5 h-5" style={iconStyle} />;
      case 'Rocket':   return <Rocket   className="w-5 h-5" style={iconStyle} />;
      default:         return <Sparkles className="w-5 h-5" style={iconStyle} />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#070206' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="About HFT"
              title="Where Time Meets Innovation"
              subtitle="The flagship 24-hour collegiate hackathon of Excel, bringing together top student developers from across India to solve high-impact, real-world engineering challenges."
            />

            <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal" style={{ color: '#C4A5B5' }}>
              <p>
                Organized under the aegis of <strong style={{ color: '#FAEEF4', fontWeight: 600 }}>Govt. Model Engineering College (MEC), Kochi</strong> and its annual techno-managerial fest <strong style={{ color: '#FAEEF4', fontWeight: 600 }}>Excel</strong>, Hack For Tomorrow provides an inclusive and collaborative platform for developers of all skill levels.
              </p>
              
              <p>
                Over 24 continuous hours, participants work alongside seasoned industry mentors and alumni engineers to conceptualize, architect, and ship functional technical prototypes in an energetic offline environment.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "100% Free offline campus hackathon",
                "Mentorship from leading software firms",
                "Cross-college team collaborations",
                "Direct exposure to recruiter networks"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#C4A5B5' }}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#D61A70' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Problem Tracks Hub (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-6 sm:p-8 space-y-6"
              style={{
                background: 'linear-gradient(135deg, #1A0614, #12040E)',
                border: '1px solid rgba(93,27,64,0.50)',
              }}
            >
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: '#D61A70' }}>
                  Hacking Tracks
                </span>
                <h3 className="text-xl font-bold mt-1" style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}>
                  Focus Themes for {eventConfig.editionYear}
                </h3>
                <p className="text-xs mt-1" style={{ color: '#7A5068' }}>
                  Build prototypes across specialized technology domains or propose open solutions.
                </p>
              </div>

              <div className="space-y-3">
                {eventConfig.tracks.map((track) => (
                  <div
                    key={track.id}
                    className="p-4 rounded-xl transition-all duration-150 group"
                    style={{
                      background: 'rgba(7,2,6,0.50)',
                      border: '1px solid rgba(93,27,64,0.35)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(214,26,112,0.35)';
                      e.currentTarget.style.background = 'rgba(26,6,20,0.70)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(93,27,64,0.35)';
                      e.currentTarget.style.background = 'rgba(7,2,6,0.50)';
                    }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="p-2.5 rounded-lg shrink-0"
                        style={{
                          background: 'rgba(214,26,112,0.10)',
                          border: '1px solid rgba(214,26,112,0.25)',
                        }}
                      >
                        {getTrackIcon(track.icon)}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold" style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}>
                          {track.name}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: '#7A5068' }}>
                          {track.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#prizes"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors"
                  style={{ color: '#D61A70' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F42E88'}
                  onMouseLeave={e => e.currentTarget.style.color = '#D61A70'}
                >
                  <span>View Track Bounties & Prize Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
