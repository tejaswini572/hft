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
    <section id="participant-info" className="py-20 md:py-32 bg-[#08090d] border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Participant Guide"
          title="Practical Information Hub"
          subtitle={participantInfoData.sectionSubtitle}
        />

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 w-fit mb-8 overflow-x-auto max-w-full">
          {[
            { id: 'guidelines', label: 'Core Guidelines & Team Rules' },
            { id: 'checklist', label: 'Hardware & Gear Checklist' },
            { id: 'criteria', label: 'Evaluation & Judging Metrics' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Guidelines Grid */}
        {activeTab === 'guidelines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {participantInfoData.guidelines.map((guide) => (
              <div
                key={guide.id}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white font-heading">
                    {guide.title}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-950/50 border border-sky-800/40 text-sky-400 font-semibold">
                    {guide.badge}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {guide.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-10">
            <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-sky-400" />
              What to Pack & Bring Along
            </h3>
            <p className="text-sm text-neutral-400 mb-6">
              Review this quick checklist to ensure a seamless check-in and productive 24 hours on campus.
            </p>

            <div className="divide-y divide-neutral-800/80">
              {participantInfoData.checklist.map((item, idx) => (
                <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-mono font-bold text-neutral-400">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.item}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:pl-8">
                    <span className="text-xs text-neutral-400 font-normal">
                      {item.note}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold shrink-0 ${
                      item.required 
                        ? 'bg-rose-950/50 text-rose-300 border border-rose-800/50' 
                        : 'bg-neutral-800 text-neutral-400'
                    }`}>
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
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono text-sky-400">
                      {crit.weight}
                    </span>
                    <Scale className="w-4 h-4 text-neutral-500" />
                  </div>
                  <h4 className="text-base font-bold text-white font-heading mb-2">
                    {crit.name}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-800/60 text-[10px] font-mono text-neutral-500">
                  Judged by Industry Panel
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Official Rulebook Download Card */}
        <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                {participantInfoData.rulebook.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                {participantInfoData.rulebook.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
            <Button
              variant="secondary"
              size="md"
              onClick={handleRulebookAction}
              icon={<Download className="w-4 h-4 text-sky-400" />}
            >
              Download Rulebook (PDF)
            </Button>
            
            {downloadNotice && (
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1 animate-in fade-in">
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
