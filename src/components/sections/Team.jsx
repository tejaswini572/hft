import React from 'react';
import { Mail, Phone, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { teamData } from '../../data/team';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Team = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#08090d] border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Organizing Leads"
          title={teamData.sectionTitle}
          subtitle={teamData.sectionSubtitle}
          align="center"
        />

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {teamData.leadOrganizers.map((member) => (
            <div
              key={member.name}
              className="p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Avatar / Initials Lockup */}
                <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xl font-extrabold font-mono text-white mb-6 group-hover:border-sky-400/60 transition-colors">
                  {member.initials}
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-1">
                  {member.name}
                </h3>

                <p className="text-xs font-mono text-sky-400 font-semibold mb-6">
                  {member.role}
                </p>
              </div>

              {/* Action Links */}
              <div className="space-y-2 pt-6 border-t border-neutral-800/80 text-xs font-mono">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    Email
                  </span>
                  <span className="text-[11px] text-neutral-400 truncate max-w-[140px]">{member.email}</span>
                </a>

                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Call
                  </span>
                  <span className="text-[11px] text-neutral-400">{member.phone}</span>
                </a>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-sky-400 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                      </svg>
                      LinkedIn Profile
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* General Desk Hotline */}
        <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Institutional Support & Accreditation
          </p>
          <h4 className="text-lg font-bold text-white font-heading">
            {teamData.institutionalSupport.fest} • {teamData.institutionalSupport.college}
          </h4>
          <p className="text-xs text-neutral-400">
            For college partnerships, official sponsorship inquiries, or accommodation questions, contact <a href={`mailto:${teamData.institutionalSupport.inquiryEmail}`} className="text-sky-400 hover:underline font-mono">{teamData.institutionalSupport.inquiryEmail}</a> or call <a href={`tel:${teamData.institutionalSupport.generalPhone.replace(/\s+/g, '')}`} className="text-sky-400 hover:underline font-mono">{teamData.institutionalSupport.generalPhone}</a>.
          </p>
        </div>

      </Container>
    </section>
  );
};
