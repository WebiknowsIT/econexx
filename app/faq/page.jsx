'use client';

import { useState } from 'react';
import { HelpCircle, Plus, Minus, Search } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import '@/styles/contact.css';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'all',         label: 'All' },
  { id: 'general',     label: 'General' },
  { id: 'process',     label: 'Process' },
  { id: 'unlisted',    label: 'Unlisted Shares' },
  { id: 'risk',        label: 'Risks' },
  { id: 'investment',  label: 'Investment' },
  { id: 'technical',   label: 'Technical' },
  { id: 'fees',        label: 'Fees & Charges' },
  { id: 'liquidity',   label: 'Liquidity' },
  { id: 'security',    label: 'Security' },
  { id: 'onboarding',  label: 'Getting Started' },
  { id: 'contact',     label: 'Contact' },
];

const FAQS = [
  {
    id: 1,
    cat: 'general',
    q: 'What does PlanMoney do?',
    a: 'PlanMoney is a platform operated by Econexx Wealth Private Limited that helps investors access opportunities in unlisted shares, bonds, and other financial products through a structured and guided process.',
  },
  {
    id: 2,
    cat: 'general',
    q: 'Is PlanMoney a SEBI-registered entity?',
    a: 'No. PlanMoney is not registered with SEBI as an investment advisor, broker, or portfolio manager. We act as a facilitation and support platform.',
  },
  {
    id: 3,
    cat: 'general',
    q: 'Do you give stock tips or investment advice?',
    a: 'No. We do not provide stock tips or investment advice. All information shared is for awareness and educational purposes only. You should consult a qualified financial advisor before making any decisions.',
  },
  {
    id: 4,
    cat: 'general',
    q: 'What kind of investment opportunities do you offer?',
    a: 'We provide access and assistance in unlisted shares (pre-IPO companies), corporate bonds, fixed income products, and select private market opportunities.',
  },
  {
    id: 5,
    cat: 'process',
    q: 'How does the process work?',
    a: 'We share opportunities, assist with documentation, and coordinate transactions. Investments are completed via legal off-market transfers and banking channels.',
  },
  {
    id: 6,
    cat: 'unlisted',
    q: 'What are unlisted shares?',
    a: 'Unlisted shares are shares of companies not traded on stock exchanges. These include pre-IPO companies, private companies, and growth-stage businesses.',
  },
  {
    id: 7,
    cat: 'unlisted',
    q: 'Why do investors consider unlisted shares?',
    a: 'Investors consider them for early-stage entry before IPO and long-term value creation, though they come with higher risk and lower liquidity.',
  },
  {
    id: 8,
    cat: 'risk',
    q: 'What are the risks involved?',
    a: 'Investments involve market risk, liquidity risk, price uncertainty, and regulatory changes. Unlisted investments are particularly illiquid and volatile.',
  },
  {
    id: 9,
    cat: 'general',
    q: 'Do you guarantee returns or exits?',
    a: 'No. We do not guarantee returns, liquidity, or exit opportunities under any circumstances.',
  },
  {
    id: 10,
    cat: 'investment',
    q: 'What is the minimum investment?',
    a: 'Minimum investment depends on the opportunity and availability. Our team will guide you accordingly.',
  },
  {
    id: 11,
    cat: 'process',
    q: 'How are transactions completed?',
    a: 'Transactions are executed off-market with proper documentation and settled through demat and banking systems.',
  },
  {
    id: 12,
    cat: 'technical',
    q: 'What is ISIN and why is it required?',
    a: 'ISIN is a unique identification number for securities, enabling demat holding, transfer, and tracking.',
  },
  {
    id: 13,
    cat: 'technical',
    q: 'Do you assist in ISIN generation?',
    a: 'Yes, we assist with documentation, coordination with depositories/RTAs, and the dematerialisation process.',
  },
  {
    id: 14,
    cat: 'fees',
    q: 'Are there any charges?',
    a: 'Yes, we may charge facilitation or service fees. All charges are communicated clearly before proceeding.',
  },
  {
    id: 15,
    cat: 'liquidity',
    q: 'Can I sell my investment anytime?',
    a: 'Liquidity depends on market demand. Unlisted shares may not have immediate buyers and exit timelines can vary.',
  },
  {
    id: 16,
    cat: 'security',
    q: 'Is my money safe?',
    a: 'Transactions are processed through standard banking and demat systems. However, investments are subject to market risks.',
  },
  {
    id: 17,
    cat: 'security',
    q: 'Is my personal data secure?',
    a: 'Yes. We follow reasonable data protection practices. Refer to our Privacy Policy for details.',
  },
  {
    id: 18,
    cat: 'general',
    q: 'Do you work with third parties?',
    a: 'Yes, we work with KYC agencies, payment processors, and technology providers where necessary.',
  },
  {
    id: 19,
    cat: 'general',
    q: 'Who should invest through PlanMoney?',
    a: 'Investors who understand financial risks, seek alternative opportunities, and are willing to make informed decisions.',
  },
  {
    id: 20,
    cat: 'onboarding',
    q: 'How can I get started?',
    a: 'Contact us via phone/email, submit your details on the website, and connect with our team for onboarding.',
  },
  {
    id: 21,
    cat: 'contact',
    q: 'How can I contact you?',
    a: 'Econexx Wealth Private Limited (PlanMoney), Email: team@econexxwealth.com, Phone: 8108181602, Address: Dombivali East, Thane, Maharashtra - 421204.',
  },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <AnimatedSection delay={index * 0.04}>
      <div
        className="rounded-2xl overflow-hidden transition-all"
        style={{
          border: isOpen ? '1px solid rgba(182,138,204,.35)' : '1px solid #EDE6F5',
          background: isOpen ? 'rgba(244,238,248,.6)' : '#fff',
        }}
      >
        <button
          onClick={onToggle}
          className="w-full px-7 py-5 flex items-center justify-between text-left"
          style={{ fontFamily: 'inherit' }}
        >
          <div className="flex items-center gap-4 pr-4">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[.58rem] font-bold flex-shrink-0 tabular-nums"
              style={
                isOpen
                  ? { background: 'linear-gradient(135deg,#7A3D9A,#9A5FB5)', color: '#fff' }
                  : { background: '#F4EEF8', color: '#9A5FB5' }
              }
            >
              {String(faq.id).padStart(2, '0')}
            </span>
            <span
              className="font-semibold text-sm leading-snug"
              style={{ color: isOpen ? '#220F34' : '#3E1C5C' }}
            >
              {faq.q}
            </span>
          </div>
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
            style={
              isOpen
                ? { background: 'rgba(122,61,154,.12)', color: '#7A3D9A' }
                : { background: '#F4EEF8', color: '#9A5FB5' }
            }
          >
            {isOpen
              ? <Minus className="w-3.5 h-3.5" />
              : <Plus  className="w-3.5 h-3.5" />
            }
          </div>
        </button>

        {isOpen && (
          <div className="px-7 pb-6">
            <div
              className="h-px mb-5"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(182,138,204,.3), transparent)' }}
            />
            <p className="text-sm leading-[1.9]" style={{ color: '#4B226E' }}>
              {faq.a}
            </p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId]                 = useState(null);
  const [query, setQuery]                   = useState('');

  const filtered = FAQS.filter((f) => {
    const matchCat = activeCategory === 'all' || f.cat === activeCategory;
    const matchQ   = !query.trim() || f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <main>

      {/* ── HERO ── */}
      <section className="heroSection hero-glow gridBgDark noise bg-primary-900 relative py-14 px-6 lg:px-16 overflow-hidden">
        {/* decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full border float-anim"
          style={{ borderColor: 'rgba(122,61,154,.1)' }} />
        <div className="absolute top-40 right-32 w-56 h-56 rounded-full border"
          style={{ borderColor: 'rgba(182,138,204,.06)' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border"
          style={{ borderColor: 'rgba(122,61,154,.07)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">

            <AnimatedSection>
              <div className="flex items-center gap-2 mb-6">
                <span className="tag-dark">Help Center</span>
                <span className="tag-sec">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
                  {FAQS.length || ''} questions answered
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <h1
                className="font-bold leading-[1.04] mb-6 text-primary-50"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Frequently Asked{' '}
                <span className="grad-brand">Questions.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <p className="text-primary-400 text-lg leading-relaxed mb-10">
                Everything you need to know about unlisted shares, pre-IPO investing, bonds, KYC, and payments — answered in one place.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
      <div
        className="sticky top-0 z-30 px-6 lg:px-16 py-4 overflow-x-auto"
        style={{
          background: '#fff',
          borderBottom: '1px solid #EDE6F5',
          scrollbarWidth: 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                className="px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
                style={
                  isActive
                    ? { background: 'linear-gradient(135deg,#7A3D9A,#9A5FB5)', color: '#fff' }
                    : { background: '#F4EEF8', color: '#7A3D9A' }
                }
              >
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="ml-1.5 text-[.58rem] opacity-70">
                    {FAQS.filter((f) => f.cat === cat.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── FAQ LIST ── */}
      <section className="px-6 lg:px-16 py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto">

          {/* result count */}
          {query && (
            <AnimatedSection>
              <p className="text-sm mb-8" style={{ color: '#9A5FB5' }}>
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for{' '}
                <span className="font-semibold" style={{ color: '#220F34' }}>"{query}"</span>
              </p>
            </AnimatedSection>
          )}

          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  index={i}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div
                className="text-center py-20 rounded-2xl"
                style={{ background: '#fff', border: '1px solid #EDE6F5' }}
              >
                <HelpCircle className="w-10 h-10 mx-auto mb-4" style={{ color: '#CFB3E0' }} />
                <p className="font-semibold mb-1" style={{ color: '#220F34' }}>No results found</p>
                <p className="text-sm" style={{ color: '#9A5FB5' }}>
                  Try a different search term or browse all questions.
                </p>
                <button
                  onClick={() => { setQuery(''); setActiveCategory('all'); }}
                  className="mt-5 px-5 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ background: '#F4EEF8', color: '#7A3D9A', fontFamily: 'inherit' }}
                >
                  Clear filters
                </button>
              </div>
            </AnimatedSection>
          )}

          {/* still have questions CTA */}
          <AnimatedSection delay={0.2}>
            <div
              className="mt-16 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
              style={{
                background: 'linear-gradient(135deg, rgba(122,61,154,.08) 0%, rgba(196,114,34,.05) 100%)',
                border: '1px solid rgba(182,138,204,.18)',
              }}
            >
              <div>
                <p
                  className="font-bold text-lg mb-1"
                  style={{ color: '#220F34' }}
                >
                  Still have a question?
                </p>
                <p className="text-sm" style={{ color: '#7A3D9A' }}>
                  Our team typically responds within 24 hours — reach out any time.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 no-underline"
                  style={{
                    background: 'linear-gradient(135deg,#C47222,#F9A24F)',
                    color: '#0D0812',
                  }}
                >
                  Contact Us
                </a>
                <a
                  href="mailto:support@unlistededge.com"
                  className="px-6 py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-80 no-underline"
                  style={{
                    background: '#fff',
                    border: '1px solid #E6D9F0',
                    color: '#7A3D9A',
                  }}
                >
                  Email Support
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </main>
  );
}