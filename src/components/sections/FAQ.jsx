import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Mail, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faq';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const filteredFaqs = activeCategory === 'All'
    ? faqData.faqs
    : faqData.faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-neutral-950/60 border-t border-neutral-800/80 relative overflow-hidden">
      <Container>
        <SectionHeader
          badge="Clarifications"
          title={faqData.sectionTitle}
          subtitle={faqData.sectionSubtitle}
          align="center"
        />

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {faqData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-neutral-950 shadow-md'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900 border-neutral-700'
                    : 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-heading">
                    {faq.question}
                  </span>
                  
                  <div className={`p-1 rounded-lg bg-neutral-800 text-neutral-300 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-neutral-700 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal border-t border-neutral-800/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-heading">Still have questions?</p>
              <p className="text-xs text-neutral-400">Our organizing team is available 24/7 to assist.</p>
            </div>
          </div>

          <a
            href={`mailto:${eventConfig.contact.email}`}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-bold font-mono transition-colors shrink-0"
          >
            Contact Organizer Desk
          </a>
        </div>

      </Container>
    </section>
  );
};
