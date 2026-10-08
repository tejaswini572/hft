import React from 'react';
import { Sparkles, Wallet, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const About = () => {
  const getTrackIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-indigo-400" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-[#08090d] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="About HFT"
              title="Where Time Meets Innovation"
              subtitle="The flagship 24-hour collegiate hackathon of Excel, bringing together top student developers from across India to solve high-impact, real-world engineering challenges."
            />

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Organized under the aegis of <strong className="text-white font-semibold">Govt. Model Engineering College (MEC), Kochi</strong> and its annual techno-managerial fest <strong className="text-white font-semibold">Excel</strong>, Hack For Tomorrow provides an inclusive and collaborative platform for developers of all skill levels.
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
                <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Problem Tracks Hub (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                  Hacking Tracks
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-1">
                  Focus Themes for {eventConfig.editionYear}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Build prototypes across specialized technology domains or propose open solutions.
                </p>
              </div>

              <div className="space-y-3">
                {eventConfig.tracks.map((track) => (
                  <div
                    key={track.id}
                    className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition-colors group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 shrink-0 group-hover:scale-105 transition-transform">
                        {getTrackIcon(track.icon)}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                          {track.name}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors"
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
