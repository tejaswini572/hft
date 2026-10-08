import React from 'react';
import { Mail, Phone, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { teamData } from '../../data/team';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const Team = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#070206' }}>
      {/* Background radial glow */}
      <div
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[350px] rounded-full pointer-events-none blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(214, 26, 112, 0.1) 0%, rgba(7, 2, 6, 0) 70%)' }}
      />

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
              className="p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group"
              style={{
                backgroundColor: '#1A0614',
                borderColor: 'rgba(93, 27, 64, 0.45)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.45)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.45)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Avatar / Initials Lockup */}
                <div
                  className="w-16 h-16 rounded-2xl border flex items-center justify-center text-xl font-extrabold font-mono mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: '#260A1C',
                    borderColor: 'rgba(214, 26, 112, 0.35)',
                    color: '#FAEEF4',
                    boxShadow: '0 4px 15px rgba(214, 26, 112, 0.2)',
                  }}
                >
                  {member.initials}
                </div>

                <h3 className="text-xl font-bold font-display mb-1" style={{ color: '#FAEEF4' }}>
                  {member.name}
                </h3>

                <p className="text-xs font-mono font-semibold mb-6" style={{ color: '#F42E88' }}>
                  {member.role}
                </p>
              </div>

              {/* Action Links */}
              <div className="space-y-2 pt-6 border-t text-xs font-mono" style={{ borderColor: 'rgba(93, 27, 64, 0.4)' }}>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-between p-2.5 rounded-xl border transition-colors"
                  style={{
                    backgroundColor: '#260A1C',
                    borderColor: 'rgba(93, 27, 64, 0.3)',
                    color: '#C4A5B5',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.5)';
                    e.currentTarget.style.color = '#FAEEF4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.3)';
                    e.currentTarget.style.color = '#C4A5B5';
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" style={{ color: '#F42E88' }} />
                    Email
                  </span>
                  <span className="text-[11px] truncate max-w-[140px]" style={{ color: '#C4A5B5' }}>{member.email}</span>
                </a>

                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl border transition-colors"
                  style={{
                    backgroundColor: '#260A1C',
                    borderColor: 'rgba(93, 27, 64, 0.3)',
                    color: '#C4A5B5',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.5)';
                    e.currentTarget.style.color = '#FAEEF4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.3)';
                    e.currentTarget.style.color = '#C4A5B5';
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" style={{ color: '#10B981' }} />
                    Call
                  </span>
                  <span className="text-[11px]" style={{ color: '#C4A5B5' }}>{member.phone}</span>
                </a>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border transition-colors"
                    style={{
                      backgroundColor: '#260A1C',
                      borderColor: 'rgba(93, 27, 64, 0.3)',
                      color: '#C4A5B5',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.5)';
                      e.currentTarget.style.color = '#FAEEF4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.3)';
                      e.currentTarget.style.color = '#C4A5B5';
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 fill-current" style={{ color: '#F42E88' }} viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                      </svg>
                      LinkedIn Profile
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#7A5068' }} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* General Support Box */}
        <div
          className="p-8 rounded-2xl border max-w-3xl mx-auto text-center space-y-3"
          style={{
            backgroundColor: '#1A0614',
            borderColor: 'rgba(93, 27, 64, 0.45)',
          }}
        >
          <p className="text-xs font-mono uppercase tracking-wider font-semibold" style={{ color: '#C4A5B5' }}>
            Institutional Support & Accreditation
          </p>
          <h4 className="text-lg font-bold font-display" style={{ color: '#FAEEF4' }}>
            {teamData.institutionalSupport.fest} • {teamData.institutionalSupport.college}
          </h4>
          <p className="text-xs" style={{ color: '#C4A5B5' }}>
            For college partnerships, official sponsorship inquiries, or accommodation questions, contact <a href={`mailto:${teamData.institutionalSupport.inquiryEmail}`} className="hover:underline font-mono" style={{ color: '#F42E88' }}>{teamData.institutionalSupport.inquiryEmail}</a> or call <a href={`tel:${teamData.institutionalSupport.generalPhone.replace(/\s+/g, '')}`} className="hover:underline font-mono" style={{ color: '#F42E88' }}>{teamData.institutionalSupport.generalPhone}</a>.
          </p>
        </div>

      </Container>
    </section>
  );
};

