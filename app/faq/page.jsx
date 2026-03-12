'use client';

import { useState } from 'react';
import { HelpCircle, Plus, Minus, Search } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import '@/styles/contact.css';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'all',       label: 'All'              },
  { id: 'general',   label: 'General'          },
  { id: 'unlisted',  label: 'Unlisted Shares'  },
  { id: 'ipo',       label: 'Pre-IPO & IPO'    },
  { id: 'bonds',     label: 'Bonds'            },
  { id: 'kyc',       label: 'KYC & Account'    },
  { id: 'payments',  label: 'Payments'         },
];

const FAQS = [
  // general
  {
    id: 1, cat: 'general',
    q: 'What is EconexxWealth / UnlistedEdge?',
    a: 'EconexxWealth (operating as UnlistedEdge) is India\'s premier platform for buying and selling unlisted shares, accessing pre-IPO investment opportunities, and investing in bonds and fixed income instruments. We connect retail and HNI investors with private market opportunities that were previously accessible only to institutional players.',
  },
  {
    id: 2, cat: 'general',
    q: 'Is EconexxWealth a SEBI-registered entity?',
    a: 'Yes. Econexx Wealth Pvt Ltd. operates in compliance with applicable SEBI regulations and Indian securities laws. All transactions facilitated through our platform adhere to regulatory requirements including KYC norms, reporting obligations, and investor protection guidelines.',
  },
  {
    id: 3, cat: 'general',
    q: 'Who can invest through UnlistedEdge?',
    a: 'Any Indian resident above the age of 18 with a valid PAN card, Aadhaar, and a DEMAT account can invest through UnlistedEdge. NRI investors may also participate subject to additional compliance requirements under FEMA guidelines. We serve retail investors, HNIs, family offices, and corporate treasuries.',
  },
  {
    id: 4, cat: 'general',
    q: 'How do I get started on the platform?',
    a: 'Getting started is simple. Register on the platform, complete your KYC by submitting your PAN, Aadhaar, and bank details, and link your DEMAT account. Once verified, you can browse available opportunities and place your first investment. Our team is available to assist you through the onboarding process.',
  },

  // unlisted
  {
    id: 5, cat: 'unlisted',
    q: 'What are unlisted shares?',
    a: 'Unlisted shares are equity shares of companies that are not listed or traded on any recognised stock exchange like BSE or NSE. These are shares of private companies, subsidiaries of listed companies, or companies in the pre-listing stage. They offer investors the opportunity to participate in a company\'s growth before it becomes publicly listed.',
  },
  {
    id: 6, cat: 'unlisted',
    q: 'How are unlisted share prices determined?',
    a: 'Unlisted share prices are determined based on factors such as the company\'s last fundraising valuation, comparable listed peer multiples, financial performance, growth trajectory, and prevailing demand and supply in the secondary market. Unlike listed stocks, there is no real-time exchange price — indicative prices are updated regularly on our platform based on market activity.',
  },
  {
    id: 7, cat: 'unlisted',
    q: 'How are unlisted shares transferred to my DEMAT account?',
    a: 'Once payment is confirmed, the unlisted shares are transferred to your DEMAT account through an off-market transfer via CDSL or NSDL. The typical settlement period is T+2 to T+5 working days depending on the company and seller. You will receive a confirmation once the shares are credited to your account.',
  },
  {
    id: 8, cat: 'unlisted',
    q: 'What are the risks of investing in unlisted shares?',
    a: 'Unlisted shares carry risks including illiquidity (no guaranteed secondary market), price opacity, lack of real-time price discovery, company-specific operational risks, and the possibility of total loss of capital. Investors should conduct thorough due diligence and invest only the amount they can afford to remain locked in for an uncertain period.',
  },
  {
    id: 9, cat: 'unlisted',
    q: 'What is the minimum investment amount for unlisted shares?',
    a: 'The minimum investment varies by company and the number of shares available. Typically, minimum lot sizes start from ₹10,000 to ₹25,000 depending on the share price. Some high-demand companies may have higher minimum lot sizes. Specific lot size details are mentioned on each company\'s listing page.',
  },

  // ipo
  {
    id: 10, cat: 'ipo',
    q: 'What is a Pre-IPO investment?',
    a: 'A Pre-IPO investment allows you to buy shares of a company before it conducts its Initial Public Offering (IPO) and lists on a stock exchange. If the company lists successfully at a higher price than your acquisition cost, you stand to gain significant returns. However, there is no guarantee of an IPO or of listing above the pre-IPO price.',
  },
  {
    id: 11, cat: 'ipo',
    q: 'What is a DRHP and why does it matter?',
    a: 'A Draft Red Herring Prospectus (DRHP) is a preliminary IPO filing submitted to SEBI by a company intending to go public. It contains detailed information about the company\'s business, financials, risk factors, and the proposed use of IPO proceeds. Filing a DRHP signals that a company has initiated the IPO process, though approval and listing are not guaranteed.',
  },
  {
    id: 12, cat: 'ipo',
    q: 'Can I apply for IPOs directly through UnlistedEdge?',
    a: 'UnlistedEdge currently provides IPO consultancy, research, and pre-IPO investment facilitation. For applying directly to IPOs through ASBA or UPI, you would need to use your bank or broker. Our platform focuses on helping you identify and access pre-IPO opportunities before the public listing.',
  },
  {
    id: 13, cat: 'ipo',
    q: 'What happens to my pre-IPO shares after the company lists?',
    a: 'Once the company lists on a stock exchange, your pre-IPO shares become listed equity shares and are freely tradeable on BSE or NSE subject to any lock-in period applicable under SEBI regulations. Typically, pre-IPO investors may be subject to a lock-in of 6 months from the date of listing. After the lock-in, you can sell your shares on the open market.',
  },

  // bonds
  {
    id: 14, cat: 'bonds',
    q: 'What types of bonds are available on UnlistedEdge?',
    a: 'We offer a curated selection of corporate bonds, Non-Convertible Debentures (NCDs), secured and unsecured debentures, and government securities. Opportunities are available across credit ratings, tenures, and yield profiles to suit different risk appetites and investment horizons.',
  },
  {
    id: 15, cat: 'bonds',
    q: 'Are bond investments safe?',
    a: 'Bonds are generally considered lower risk than equities, but they are not risk-free. Key risks include credit risk (the issuer\'s ability to repay), interest rate risk (bond prices move inversely to interest rates), and liquidity risk. Secured bonds backed by company assets carry lower risk compared to unsecured debentures. Always review the credit rating and issuer financials before investing.',
  },
  {
    id: 16, cat: 'bonds',
    q: 'What returns can I expect from bonds?',
    a: 'Bond returns depend on the type, credit rating, and tenure. Investment-grade corporate bonds typically offer yields in the range of 8%–12% per annum, while higher-yield (lower-rated) bonds may offer more but carry greater default risk. Actual returns depend on the coupon rate and your holding period. All yield figures on the platform are indicative.',
  },
  {
    id: 17, cat: 'bonds',
    q: 'How is interest from bonds taxed in India?',
    a: 'Interest income from bonds and NCDs is taxed as per your applicable income tax slab rate. Capital gains on sale of bonds before maturity are taxed as short-term or long-term capital gains depending on the holding period. We recommend consulting a chartered accountant for advice specific to your tax situation.',
  },

  // kyc
  {
    id: 18, cat: 'kyc',
    q: 'What KYC documents are required?',
    a: 'You will need to submit a copy of your PAN card, Aadhaar card (for address verification), a cancelled cheque or bank statement, and your DEMAT account details (DP ID and Client ID). For NRI investors, additional documents such as passport and NRE/NRO bank details are required.',
  },
  {
    id: 19, cat: 'kyc',
    q: 'How long does KYC verification take?',
    a: 'KYC verification is typically completed within 24–48 business hours of submitting all required documents. You will receive an email confirmation once your account is verified. If additional documents are required, our team will reach out to you directly.',
  },
  {
    id: 20, cat: 'kyc',
    q: 'Can I invest without a DEMAT account?',
    a: 'A DEMAT account is mandatory for investing in unlisted shares and pre-IPO opportunities as shares are held and transferred in dematerialised form through CDSL or NSDL. For bond investments, requirements may vary. If you do not have a DEMAT account, our team can guide you through opening one with a registered depository participant.',
  },

  // payments
  {
    id: 21, cat: 'payments',
    q: 'What payment methods are accepted?',
    a: 'We accept NEFT, RTGS, and IMPS bank transfers. All payments must be made directly from your verified bank account registered during KYC. We do not accept cash, third-party payments, or cryptocurrency. Payment details are provided at the time of transaction confirmation.',
  },
  {
    id: 22, cat: 'payments',
    q: 'What is the refund policy?',
    a: 'All subscriptions, advisory service fees, and platform charges are non-refundable once availed. For transaction payments — if a deal falls through before settlement — amounts will be refunded to your registered bank account within 5–7 business days. Please contact support@unlistededge.com for any payment-related queries.',
  },
  {
    id: 23, cat: 'payments',
    q: 'How are my funds kept safe?',
    a: 'Client funds are held in designated accounts and are not commingled with company operational funds. All transactions are conducted via regulated banking channels. Our platform uses SSL/TLS encryption for all data transmissions. We do not store your full bank account or card details on our servers.',
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
                  23 questions answered
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
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
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
                  <span
                    className="ml-1.5 text-[.58rem] opacity-70"
                  >
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