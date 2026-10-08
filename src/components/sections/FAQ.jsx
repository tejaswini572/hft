import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { faqData } from '../../data/faq';
import { eventConfig } from '../../data/eventConfig';
import { Container } from '../layout/Container';
import { SectionHeader } from '../layout/SectionHeader';

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = activeCategory === 'All'
    ? faqData.faqs
    : faqData.faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: '#0A030A', borderTop: '1px solid rgba(93,27,64,0.35)' }}
    >
      <Container>
        <SectionHeader
          badge="Clarifications"
          title={faqData.sectionTitle}
          subtitle={faqData.sectionSubtitle}
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {faqData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all cursor-pointer"
              style={{
                background: activeCategory === cat ? '#D61A70' : '#1A0614',
                border: activeCategory === cat
                  ? '1px solid rgba(214,26,112,0.60)'
                  : '1px solid rgba(93,27,64,0.45)',
                color: activeCategory === cat ? '#FAEEF4' : '#7A5068',
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(214,26,112,0.25)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: isOpen ? '#1A0614' : 'rgba(26,6,20,0.50)',
                  border: isOpen
                    ? '1px solid rgba(214,26,112,0.30)'
                    : '1px solid rgba(93,27,64,0.40)',
                  boxShadow: isOpen ? '0 0 20px rgba(214,26,112,0.07)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer select-none"
                  aria-expanded={isOpen}
                  style={{ focusVisibleOutline: '2px solid #F42E88' }}
                >
                  <span
                    className="text-base sm:text-lg font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}
                  >
                    {faq.question}
                  </span>

                  <div
                    className="p-1.5 rounded-lg shrink-0 transition-transform duration-200"
                    style={{
                      background: isOpen ? 'rgba(214,26,112,0.15)' : 'rgba(93,27,64,0.25)',
                      border: '1px solid rgba(93,27,64,0.40)',
                      color: isOpen ? '#D61A70' : '#7A5068',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed font-normal"
                    style={{
                      color: '#C4A5B5',
                      borderTop: '1px solid rgba(93,27,64,0.30)',
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div
          className="max-w-xl mx-auto p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{
            background: 'rgba(26,6,20,0.70)',
            border: '1px solid rgba(93,27,64,0.45)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(214,26,112,0.10)',
                border: '1px solid rgba(214,26,112,0.25)',
              }}
            >
              <MessageSquare className="w-5 h-5" style={{ color: '#D61A70' }} />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ fontFamily: 'var(--font-display)', color: '#FAEEF4' }}>
                Still have questions?
              </p>
              <p className="text-xs" style={{ color: '#7A5068' }}>
                Our organizing team is available 24/7 to assist.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${eventConfig.contact.email}`}
            className="px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0"
            style={{
              background: '#D61A70',
              color: '#FAEEF4',
              boxShadow: '0 4px 14px rgba(214,26,112,0.30)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#F42E88'}
            onMouseLeave={e => e.currentTarget.style.background = '#D61A70'}
          >
            Contact Organizer Desk
          </a>
        </div>

      </Container>
    </section>
  );
};
