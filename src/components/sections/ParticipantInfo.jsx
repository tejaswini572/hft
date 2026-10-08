import React, { useState } from 'react';
import { ShieldCheck, Users, CheckCircle, Download, FileText, Check, AlertCircle, Info, Laptop, Scale } from 'lucide-react';
import { participantInfoData } from '../../data/participantInfo';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';
import { Button } from '../ui/Button';

export const ParticipantInfo = () => {
  const [activeTab, setActiveTab] = useState('guidelines'); // 'guidelines' | 'checklist' | 'criteria'
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleRulebookAction = () => {
    if (eventConfig.links.rulebookPdfUrl) {
      window.open(eventConfig.links.rulebookPdfUrl, '_blank');
    } else {
      setDownloadNotice(true);
      setTimeout(() => setDownloadNotice(false), 4000);
    }
  };

  return (
    <section id="participant-info" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#070206' }}>
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[350px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(150, 16, 66, 0.12) 0%, rgba(7, 2, 6, 0) 70%)' }}
      />

      <Container>
        <SectionHeader
          badge="Participant Guide"
          title="Practical Information Hub"
          subtitle={participantInfoData.sectionSubtitle}
        />

        {/* Tab Switcher */}
        <div
          className="flex items-center gap-2 p-1.5 rounded-xl border w-fit mb-8 overflow-x-auto max-w-full backdrop-blur-md"
          style={{ backgroundColor: '#1A0614', borderColor: 'rgba(93, 27, 64, 0.5)' }}
        >
          {[
            { id: 'guidelines', label: 'Core Guidelines & Team Rules' },
            { id: 'checklist', label: 'Hardware & Gear Checklist' },
            { id: 'criteria', label: 'Evaluation & Judging Metrics' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer font-display"
                style={{
                  backgroundColor: isActive ? '#D61A70' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#C4A5B5',
                  boxShadow: isActive ? '0 2px 12px rgba(214, 26, 112, 0.4)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Guidelines Grid */}
        {activeTab === 'guidelines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {participantInfoData.guidelines.map((guide) => (
              <div
                key={guide.id}
                className="p-6 sm:p-8 rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: '#1A0614',
                  borderColor: 'rgba(93, 27, 64, 0.45)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.45)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-display" style={{ color: '#FAEEF4' }}>
                    {guide.title}
                  </h3>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-md border font-semibold"
                    style={{
                      backgroundColor: 'rgba(214, 26, 112, 0.15)',
                      borderColor: 'rgba(214, 26, 112, 0.35)',
                      color: '#F42E88',
                    }}
                  >
                    {guide.badge}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {guide.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: '#C4A5B5' }}>
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#F42E88' }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Checklist */}
        {activeTab === 'checklist' && (
          <div
            className="p-6 sm:p-8 rounded-2xl border mb-10"
            style={{
              backgroundColor: '#1A0614',
              borderColor: 'rgba(93, 27, 64, 0.45)',
            }}
          >
            <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2" style={{ color: '#FAEEF4' }}>
              <Laptop className="w-5 h-5" style={{ color: '#F42E88' }} />
              What to Pack & Bring Along
            </h3>
            <p className="text-sm mb-6" style={{ color: '#C4A5B5' }}>
              Review this quick checklist to ensure a seamless check-in and productive 24 hours on campus.
            </p>

            <div className="divide-y" style={{ borderColor: 'rgba(93, 27, 64, 0.35)' }}>
              {participantInfoData.checklist.map((item, idx) => (
                <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold"
                      style={{ backgroundColor: '#260A1C', color: '#D61A70' }}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: '#FAEEF4' }}>
                      {item.item}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:pl-8">
                    <span className="text-xs font-normal" style={{ color: '#C4A5B5' }}>
                      {item.note}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold shrink-0 border ${
                        item.required 
                          ? 'bg-[rgba(214,26,112,0.15)] text-[#F42E88] border-[rgba(214,26,112,0.4)]' 
                          : 'bg-[#260A1C] text-[#C4A5B5] border-transparent'
                      }`}
                    >
                      {item.required ? 'Mandatory' : 'Optional'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Evaluation Criteria */}
        {activeTab === 'criteria' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {participantInfoData.evaluationCriteria.map((crit) => (
              <div
                key={crit.name}
                className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300"
                style={{
                  backgroundColor: '#1A0614',
                  borderColor: 'rgba(93, 27, 64, 0.45)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(214, 26, 112, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(93, 27, 64, 0.45)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono" style={{ color: '#F42E88' }}>
                      {crit.weight}
                    </span>
                    <Scale className="w-4 h-4" style={{ color: '#7A5068' }} />
                  </div>
                  <h4 className="text-base font-bold font-display mb-2" style={{ color: '#FAEEF4' }}>
                    {crit.name}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#C4A5B5' }}>
                    {crit.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t text-[10px] font-mono" style={{ borderColor: 'rgba(93, 27, 64, 0.4)', color: '#7A5068' }}>
                  Judged by Industry Panel
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Official Rulebook Download Card */}
        <div
          className="rounded-2xl border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: '#1A0614',
            borderColor: 'rgba(214, 26, 112, 0.35)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div
              className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0"
              style={{
                backgroundColor: 'rgba(214, 26, 112, 0.15)',
                borderColor: 'rgba(214, 26, 112, 0.35)',
                color: '#F42E88',
              }}
            >
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-display" style={{ color: '#FAEEF4' }}>
                {participantInfoData.rulebook.title}
              </h4>
              <p className="text-xs sm:text-sm max-w-xl" style={{ color: '#C4A5B5' }}>
                {participantInfoData.rulebook.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
            <Button
              variant="secondary"
              size="md"
              onClick={handleRulebookAction}
              icon={<Download className="w-4 h-4" style={{ color: '#F42E88' }} />}
            >
              Download Rulebook (PDF)
            </Button>
            
            {downloadNotice && (
              <span className="text-xs font-mono flex items-center gap-1 animate-in fade-in" style={{ color: '#F59E0B' }}>
                <Info className="w-3.5 h-3.5" />
                Latest edition guidelines active above; final PDF published closer to kickoff.
              </span>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

