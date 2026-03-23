'use client';

import React, { useState } from 'react';
import {
  TrendingUp, Building2, Landmark, FileBadge, ShieldCheck, Clock,
  IndianRupee, Calendar, Flag, Layers, Star, Zap, Lock, Wallet,
  Target, Search, BarChart2, CalendarCheck, UserCheck, CreditCard,
  Smile, Send, User, Phone, Mail, Briefcase, MessageCircle,
  Check, PlayCircle, ArrowRightCircle, FileText, ClipboardCheck
} from 'lucide-react';

import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import '@/styles/Bondspage.css';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const bonds = [
  {
    id: 1, type: 'corp',
    initial: 'H', initialBg: 'linear-gradient(135deg,rgba(122,61,154,.12),rgba(75,34,110,.08))',
    initialBorder: 'rgba(122,61,154,.15)', initialColor: '#7A3D9A',
    name: 'HDFC Ltd. NCD', category: 'Corporate Bond', CategoryIcon: Building2,
    yield: '11.5%', rating: 'AA+', ratingClass: 'rAaa',
    tenor: '36 Months', min: '₹10,000', payout: 'Monthly',
    maturity: 'Mar 2027', available: '₹18.4 Cr', sub: 74,
    featured: false,
  },
  {
    id: 2, type: 'govt',
    initial: 'N', initialBg: 'rgba(16,185,129,.06)',
    initialBorder: 'rgba(16,185,129,.18)', initialColor: '#059669',
    name: 'NHAI Bond 2026', category: 'PSU / Govt Bond', CategoryIcon: Landmark,
    yield: '8.75%', rating: 'AAA', ratingClass: 'rAaa',
    tenor: '24 Months', min: '₹5,000', payout: 'Quarterly',
    maturity: 'Jun 2026', available: '₹42.1 Cr', sub: 51,
    featured: false,
  },
  {
    id: 3, type: 'ncd',
    initial: 'M', initialBg: 'rgba(196,114,34,.08)',
    initialBorder: 'rgba(196,114,34,.22)', initialColor: '#C47222',
    name: 'Muthoot Finance NCD', category: 'Non-Convertible Debenture', CategoryIcon: FileBadge,
    yield: '12.5%', rating: 'AA', ratingClass: 'rAa',
    tenor: '60 Months', min: '₹10,000', payout: 'Monthly',
    maturity: 'Dec 2029', available: '₹9.2 Cr', sub: 91,
    featured: true,
  },
  {
    id: 4, type: 'corp',
    initial: 'T', initialBg: 'rgba(99,102,241,.06)',
    initialBorder: 'rgba(99,102,241,.18)', initialColor: '#6366f1',
    name: 'Tata Capital Bond', category: 'Corporate Bond', CategoryIcon: Building2,
    yield: '10.25%', rating: 'AAA', ratingClass: 'rAaa',
    tenor: '48 Months', min: '₹25,000', payout: 'Annual',
    maturity: 'Sep 2028', available: '₹28.7 Cr', sub: 38,
    featured: false,
  },
  {
    id: 5, type: 'govt',
    initial: 'R', initialBg: 'rgba(245,158,11,.06)',
    initialBorder: 'rgba(245,158,11,.2)', initialColor: '#d97706',
    name: 'REC Limited Bond', category: 'Govt. Backed PSU', CategoryIcon: Landmark,
    yield: '9.4%', rating: 'AAA', ratingClass: 'rAaa',
    tenor: '60 Months', min: '₹10,000', payout: 'Quarterly',
    maturity: 'Jan 2030', available: '₹55 Cr', sub: 22,
    featured: false,
  },
  {
    id: 6, type: 'ncd',
    initial: 'S', initialBg: 'rgba(239,68,68,.06)',
    initialBorder: 'rgba(239,68,68,.15)', initialColor: '#dc2626',
    name: 'Shriram Finance NCD', category: 'Non-Convertible Debenture', CategoryIcon: FileBadge,
    yield: '11.8%', rating: 'AA+', ratingClass: 'rAaa',
    tenor: '36 Months', min: '₹10,000', payout: 'Monthly',
    maturity: 'Aug 2027', available: '₹11.6 Cr', sub: 62,
    featured: false,
  },
];

const benefits = [
  { icon: Lock,      box: 'iconBox',    title: 'Capital Protection',   body: 'Your principal is legally secured. SEBI-regulated bonds ensure issuer obligations are binding — your money is protected by law.' },
  { icon: TrendingUp, box: 'iconBoxSec', title: 'Predictable Returns',  body: 'Your interest rate is locked at purchase. Whether markets rally or crash — your yield doesn\'t change. Sleep easy.' },
  { icon: Wallet,    box: 'iconBox',    title: 'Regular Income',        body: 'Monthly, quarterly, or annual payouts. Bonds create a salary-like income stream — ideal for retirees and passive earners.' },
  { icon: Landmark,  box: 'iconBox',    title: 'SEBI Regulated',        body: 'All bonds listed on BSE/NSE. Rated by CRISIL, ICRA, and CARE. Every issuer thoroughly vetted before listing on our platform.' },
  { icon: Target,    box: 'iconBoxSec', title: 'Beat FD Returns',       body: 'Average FD rates hover at 7%. Our curated bonds offer 9–12.5% p.a. — significantly higher with comparable safety ratings.' },
  { icon: Zap,       box: 'iconBox',    title: 'Start from ₹1,000',    body: 'Institutional-grade bonds previously locked to HNIs — now accessible to every Indian investor starting from just ₹1,000.' },
];

const steps = [
  { num: '01', icon: UserCheck,   title: 'Complete KYC',     body: 'Link your PAN and Aadhaar. Verification takes under 5 minutes. Demat auto-linked and verified.',      accent: false },
  { num: '02', icon: Search,      title: 'Pick Your Bond',   body: 'Browse 50+ curated bonds. Filter by yield, tenor, and rating. Use our calculator for exact returns.',  accent: false },
  { num: '03', icon: CreditCard,  title: 'Transfer Funds',   body: 'Pay via UPI, NEFT, or RTGS. From ₹1,000. Funds held in regulated escrow until bond is allocated.',    accent: false },
  { num: '04', icon: Smile,       title: 'Earn & Relax',     body: 'Bonds credited to demat within 2 days. Interest hits your bank on schedule — every month.',            accent: true  },
];

/* ─────────────────────────────────────────────
   BOND CARD (light)
   ───────────────────────────────────────────── */
function BondCard({ bond }) {
  const { CategoryIcon } = bond;
  const isHot = bond.sub >= 90;

  return (
    <div className={`lightCard ${bond.featured ? 'featuredCard' : ''} rounded-2xl p-6 flex flex-col`}>
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Featured badge */}
        {bond.featured && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
            <span className={'tagSec'} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Star size={12} /> Featured
            </span>
          </div>
        )}

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', marginTop: bond.featured ? '0.25rem' : 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              className={'bondAvatar'}
              style={{ background: bond.initialBg, border: `1px solid ${bond.initialBorder}`, color: bond.initialColor }}
            >
              {bond.initial}
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#1a1025', fontSize: '0.95rem' }}>{bond.name}</div>
              <div style={{ fontSize: '0.75rem', color: '#9A5FB5', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CategoryIcon size={12} /> {bond.category}
              </div>
            </div>
          </div>
          <div
            className={'yieldPillLight'}
            style={{ borderRadius: '0.5rem', padding: '0.6rem 0.9rem', textAlign: 'center', flexShrink: 0, marginTop: bond.featured ? '1.75rem' : 0 }}
          >
            <div className={'fontSerif'} style={{ fontSize: bond.yield.length > 5 ? '1.25rem' : '1.5rem', fontWeight: 700, color: '#C47222', lineHeight: 1, marginBottom: '2px' }}>
              {bond.yield}
            </div>
            <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9E5A18' }}>p.a.</div>
          </div>
        </div>

        <hr className={'brandHrLight'} style={{ marginBottom: '1rem' }} />

        {/* Grid details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 1rem', fontSize: '0.75rem', marginBottom: '1.25rem', flex: 1 }}>
          {[
            { icon: ShieldCheck, label: 'Rating',       value: bond.rating, cls: bond.ratingClass },
            { icon: Clock,       label: 'Tenor',        value: bond.tenor },
            { icon: IndianRupee, label: 'Min. Amount',  value: bond.min },
            { icon: Calendar,    label: 'Payout',       value: bond.payout },
            { icon: Flag,        label: 'Maturity',     value: bond.maturity },
            { icon: Layers,      label: 'Available',    value: bond.available },
          ].map(({ icon: Icon, label, value, cls }) => (
            <div key={label}>
              <div className={'labelRowLight'}><Icon size={12} /> {label}</div>
              {cls
                ? <div className={cls}>{value}</div>
                : <div style={{ fontWeight: 600, color: '#1a1025' }}>{value}</div>
              }
            </div>
          ))}
        </div>

        {/* Subscription bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '6px' }}>
          <span style={{ color: '#9A5FB5' }}>Subscription</span>
          {isHot
            ? <span style={{ color: '#16a34a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}><Zap size={12} /> {bond.sub}% — Closing Soon</span>
            : <span style={{ fontWeight: 600, color: '#4B226E' }}>{bond.sub}%</span>
          }
        </div>
        <div className={'progressTrack'}>
          <div className={isHot ? 'fillBarHot' : 'fillBar'} style={{ width: `${bond.sub}%` }} />
        </div>

        <Button href="#BuyABond" variant="secondary" className="px-9 py-4 text-base w-full">
          {bond.featured ? <ArrowRightCircle size={14} /> : <FileText size={14} />}
          Buy Now
        </Button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export default function BondsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredBonds = bonds.filter(b => activeFilter === 'all' || b.type === activeFilter);


  function renderBondsHero() {
    return (
      <section
        id="bonds-hero"
        className={`heroSection hero-glow gridBgDark noise bg-primary-900 py-10  overflow-hidden `}
      >
        {/* Decorative rings */}
        <div className={`heroRing1 floatAnim`} />
        <div className={`heroRing2 floatAnimD`} />
        <div className={'heroRing3'} />

        <div className={'heroInner'}>
          <div style={{ maxWidth: '42rem' }}>
            <div className={`fu flex items-center gap-2 mb-7`}>
              <span className={'tagDark'}>Fixed Income</span>
              <span className={'tagSecDark'}>SEBI Regulated</span>
            </div>
            <h1 className={`fu1 heroTitle`}>
              Earn Predictable Returns with <span className={'gradBrand'}>Premium Bonds</span>
            </h1>
            <p className={`fu2 heroCopy`}>
              Access curated corporate and government bonds with yields up to{' '}
              <strong className='text-secondary-500'>12.5% p.a.</strong> — institutional-grade fixed income, now for every investor.
            </p>

            <div className={`fu3 flex gap-4 flex-wrap mb-14`}>
              <button
                className={`btnCta px-9 py-4 rounded-xl text-base`}
                style={{ borderRadius: '0.75rem', padding: '1rem 2.25rem', fontSize: '1rem' }}
                onClick={() => document.getElementById('bonds-listings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Search size={16} /> Browse Bonds
              </button>
              <button
                className={`btnGhostDark px-9 py-4 rounded-xl text-base`}
                style={{ borderRadius: '0.75rem', padding: '1rem 2.25rem', fontSize: '1rem' }}
                onClick={() => document.getElementById('bonds-how')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PlayCircle size={16} /> How It Works
              </button>
            </div>
            <div className={`fu4 flex items-center gap-8 flex-wrap`}>
              {[
                { num: '₹2,400Cr+', label: 'Capital Deployed' },
                { num: '11.2%', label: 'Avg. Yield p.a.' },
                { num: '100%', label: 'On-time Payments' },
                { num: '8,500+', label: 'Investors' },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className={'statSep'} key={`sep-${i}`} />}
                  <div key={s.label}>
                    <div className={'statNum grad-hero'}>{s.num}</div>
                    <div className={'statLabel'}>{s.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className={`heroFloatCard floatCard`}>
          <div className={`glassCardDark featuredCard noise rounded-2xl p-6`}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div>
                  <span className={'tagSecDark'} style={{ display: 'block', marginBottom: '0.5rem' }}>★ Featured</span>
                  <div className={'fontSerif'} style={{ fontSize: '1.125rem', fontWeight: 700, color: '#F4EEF8' }}>HDFC Ltd. NCD</div>
                  <div style={{ color: '#7A3D9A', fontSize: '0.7rem', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Building2 size={12} /> Corporate · 36 Months
                  </div>
                </div>
                <div className={'yieldPillDark'} style={{ borderRadius: '0.75rem', padding: '0.75rem 1rem', textAlign: 'center' }}>
                  <div className={'fontSerif'} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F9A24F', lineHeight: 1, marginBottom: '4px' }}>11.5%</div>
                  <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7A3D9A' }}>p.a.</div>
                </div>
              </div>
              <hr className={'brandHrDark'} style={{ marginBottom: '1rem' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.75rem', marginBottom: '1.25rem' }}>
                {[
                  { icon: IndianRupee, label: 'Min. Investment', val: '₹10,000' },
                  { icon: Flag, label: 'Maturity', val: 'Mar 2027' },
                  { icon: Calendar, label: 'Payout', val: 'Monthly' },
                  { icon: ShieldCheck, label: 'Rating', val: 'AA+', green: true },
                ].map(({ icon: Icon, label, val, green }) => (
                  <div key={label}>
                    <div className={'labelRowDark'}><Icon size={12} /> {label}</div>
                    {green
                      ? <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '0.7rem' }}>{val}</div>
                      : <div style={{ fontWeight: 600, color: '#E6D9F0' }}>{val}</div>
                    }
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '6px' }}>
                <span style={{ color: '#7A3D9A' }}>Subscription</span>
                <span style={{ fontWeight: 600, color: '#B68ACC' }}>74%</span>
              </div>
              <div className={'progressTrackDark'}>
                <div className={'fillBar'} style={{ width: '74%' }} />
              </div>
              <button
                className={'btnCta'}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', fontSize: '0.875rem', justifyContent: 'center' }}
              >
                <FileText size={14} /> Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function HowItWorks() {

    const steps = [
  {
    number: "01",
    icon: Search,
    title: "Create Your Account",
    description:
      "Register quickly and set up your profile securely to begin your investment journey.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Complete Your KYC",
    description:
      "Verify your identity with PAN and Aadhaar to unlock full access to the platform.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Explore Bond Options",
    description:
      "Browse curated corporate and government bonds based on your goals and risk profile.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Invest and Track Easily",
    description:
      "Invest securely and monitor your bond portfolio directly from your dashboard.",
  },
];

    return (
      <section
        id="how"
        className="bg-purple-50 px-6 lg:px-16 py-24"
      >
        <div className="max-w-7xl mx-auto">
  
          <SectionTitle
            eyebrow="Process"
            title="How It Works"
            description="A seamless four-step journey—from registration to investing in corporate and government bonds across India."
          />
  
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-100">
            {steps.map((step, index) => {
              const Icon = step.icon;
  
              return (
                <AnimatedSection
                  key={step.number}
                  delay={0.4 + index * 0.1}
                  y={50}
                >
                  <div className="bg-white px-8 py-10 h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="font-serif text-7xl font-bold text-primary-100 leading-none mb-6 select-none">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:bg-primary-200 transition">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
  
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
  
        </div>
      </section>
    );
  }

  function renderBondsList() {
    return (
      <section id="bonds-listings" className={'sectionAlt py-14'}>
        <div className='max-w-7xl mx-auto px-6'>
          <AnimatedSection delay={0.1} y={30}>
            <div className='flex flex-wrap items-end justify-between gap-6 mb-12'>
              <SectionTitle
                eyebrow="Live Listings"
                title="Available Bonds"
              //description=""
              />
              <div className='flex flex-wrap gap-3'>
                {[['all', 'All Bonds'], ['corp', 'Corporate'], ['govt', 'Govt / PSU'], ['ncd', 'NCD']].map(([val, label]) => (
                  <button
                    key={val}
                    className={`fpill ${activeFilter === val ? 'active' : ''}`}
                    onClick={() => setActiveFilter(val)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5'>
            {filteredBonds.map((bond, index) => (
              <AnimatedSection key={bond.id} delay={0.1 + index * 0.08} y={40}>
                <BondCard bond={bond} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderBondsBenefits() {
    return (
      <section id="bonds-benefits" className="sectionWhite gridBgLight relative overflow-hidden py-14 px-6">
        <div className="max-w-7xl mx-auto relative z-10">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="Why Bonds?"
              title="The Power of Fixed Income"
              description="Know your returns before you invest. No market volatility — just predictable, compounding income."
            />
          </AnimatedSection>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {benefits.map(({ icon: Icon, box, title, body }, index) => (
              <AnimatedSection key={title} delay={0.2 + index * 0.1} y={40}>
                <div className="lightCard rounded-2xl p-8">
                  <div className="relative z-10">

                    <div className={`${box} mb-6`}>
                      <Icon
                        size={20}
                        className={box === "iconBoxSec" ? "text-[#C47222]" : "text-[#7A3D9A]"}
                      />
                    </div>

                    <h3 className="fontSerif text-xl font-bold text-[#1a1025] mb-3">
                      {title}
                    </h3>

                    <p className="sectionSubtext text-sm">
                      {body}
                    </p>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderBondsFeatures() {
    return (
      <section id="bonds-features" className="bg-white py-14 px-6">
        <div className="max-w-7xl mx-auto">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="Platform"
              title="Built for Serious Investors"
              className="mb-8"
            //description=""
            />
          </AnimatedSection>

          {/* Feature 1 */}
          <AnimatedSection delay={0.15} y={40}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
              <div>
                <span className="tag">Smart Discovery</span>
                <h3 className="fontSerif text-[2.5rem] font-bold text-[#1a1025] mt-5 mb-5 leading-[1.1]">
                  Find the Right Bond<br />
                  <em className="gradBrand not-italic">in Seconds</em>
                </h3>

                <p className="sectionSubtext mb-6">
                  Filter by yield, tenor, rating, and payout. Our screener surfaces what matters — no financial jargon, just clarity.
                </p>

                <ul className="flex flex-col gap-3">
                  {[
                    "Real-time yield calculator",
                    "Credit rating decoded clearly",
                    "FD vs Bond comparison built-in",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#4B226E]"
                    >
                      <div className="checkCircle">
                        <Check size={12} className="text-[#C47222]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lightCard rounded-2xl p-6 text-sm">
                <div className="relative z-10">
                  <div className="text-[0.7rem] uppercase tracking-[0.1em] mb-4 flex items-center gap-2 text-[#9A5FB5]">
                    <BarChart2 size={14} /> Yield Comparison
                  </div>

                  <div className="flex flex-col gap-3">

                    <div className="compareHighlight">
                      <span className="font-semibold text-[#1a1025]">HDFC NCD</span>
                      <span className="fontSerif text-xl font-bold text-[#C47222]">
                        11.50%
                      </span>
                    </div>

                    <div className="comparePlain">
                      <span className="text-[#6b5b7e]">SBI FD (5yr)</span>
                      <span className="text-[#9A5FB5]">6.80%</span>
                    </div>

                    <div className="comparePlain">
                      <span className="text-[#6b5b7e]">PPF</span>
                      <span className="text-[#9A5FB5]">7.10%</span>
                    </div>

                    <div className="compareHighlight">
                      <span className="font-semibold text-[#1a1025]">REC Bond</span>
                      <span className="fontSerif text-xl font-bold text-[#C47222]">
                        9.40%
                      </span>
                    </div>

                    <hr className="brandHrLight" />

                    <div className="compareTotal">
                      <span className="flex items-center gap-2 text-[#4B226E]">
                        <TrendingUp size={14} className="text-[#C47222]" /> Extra vs FD
                      </span>

                      <span className="fontSerif text-lg font-bold text-[#C47222]">
                        +4.70% p.a.
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* Feature 2 */}
          <AnimatedSection delay={0.15} y={40}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="order-2 lg:order-1 lightCard rounded-2xl p-6">
                <div className="relative z-10">
                  <div className="text-[0.7rem] uppercase tracking-[0.1em] mb-5 flex items-center gap-2 text-[#9A5FB5]">
                    <CalendarCheck size={14} /> Payout Schedule · HDFC NCD
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      {
                        date: "Jul 2025",
                        label: "Monthly Interest",
                        amount: "₹958",
                        status: "Credited",
                        final: false,
                      },
                      {
                        date: "Aug 2025",
                        label: "Monthly Interest",
                        amount: "₹958",
                        status: "Scheduled",
                        final: false,
                      },
                      {
                        date: "Mar 2027",
                        label: "Principal + Interest",
                        amount: "₹1,10,958",
                        status: "Maturity",
                        final: true,
                      },
                    ].map((row) => (
                      <div
                        key={row.date}
                        className={row.final ? "payoutFinal" : "payoutRow"}
                      >
                        <div>
                          <div
                            className={`text-[0.7rem] mb-[2px] ${row.final ? "text-[#C47222]" : "text-[#9A5FB5]"
                              }`}
                          >
                            {row.date}
                          </div>

                          <div className="text-sm font-semibold text-[#1a1025]">
                            {row.label}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="fontSerif text-lg font-bold text-[#C47222]">
                            {row.amount}
                          </div>

                          <div
                            className={`text-[0.7rem] ${row.final ? "text-[#C47222]" : "text-[#9A5FB5]"
                              }`}
                          >
                            {row.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="tag">Transparent Payouts</span>

                <h3 className="fontSerif text-[2.5rem] font-bold text-[#1a1025] mt-5 mb-5 leading-[1.1]">
                  Know Every Rupee<br />
                  <em className="gradBrand not-italic">Before You Invest</em>
                </h3>

                <p className="sectionSubtext mb-6">
                  Exact payout dates and amounts, pre-calculated before you commit. No fine print, no surprises — ever.
                </p>

                <ul className="flex flex-col gap-3">
                  {[
                    "Auto-calculated interest schedule",
                    "Direct bank credit on payout date",
                    "Tax certificate auto-generated",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#4B226E]"
                    >
                      <div className="checkCircle">
                        <Check size={12} className="text-[#C47222]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  function renderBondsHow() {
    return (
      <section id="bonds-how" className="sectionWhite dotBgLight relative py-14 px-6">
        <div className="max-w-4xl mx-auto relative z-10">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="Process"
              title="Invest in 4 Simple Steps"
              description="From signup to first payout — usually under a week."
            />
          </AnimatedSection>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-y-0 gap-x-16">
            {steps.map((step, i) => {
              const { icon: StepIcon } = step;
              const isLast = i === steps.length - 1;
              return (
                <AnimatedSection key={step.num} delay={0.15 + i * 0.12} y={40}>
                  <div className="flex gap-7 items-start">

                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-[1.1rem] shrink-0 border-2
                  ${step.accent
                            ? "bg-[rgba(196,114,34,.06)] border-[rgba(196,114,34,.35)] text-[#C47222]"
                            : "border-[rgba(122,61,154,.3)] text-[#7A3D9A]"
                          }`}
                      >
                        {step.num}
                      </div>

                      {!isLast && <div className="stepLine mt-2" />}
                    </div>

                    <div className={isLast ? "" : "pb-10"}>
                      <h3 className="fontSerif text-2xl font-bold text-[#1a1025] mb-2 flex items-center gap-2">
                        <StepIcon size={16} className="text-[#C47222]" />
                        {step.title}
                      </h3>

                      <p className="sectionSubtext leading-[1.7]">
                        {step.body}
                      </p>
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </section>
    );
  }

  function renderBondsApply() {
    return (
      <section id="BuyABond" className="sectionAlt relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(122,61,154,.04)_0%,transparent_70%)]"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="Start Investing"
              title="Buy a Bond"
              description="Express interest and our team will reach out within 4 business hours."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} y={40}>
            <div className="lightCard rounded-2xl p-10">
              <div className="relative z-10">

                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 mb-5">
                  {[
                    { icon: User, label: "Full Name", type: "text", placeholder: "Arjun Sharma" },
                    { icon: Phone, label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
                    { icon: Mail, label: "Email", type: "email", placeholder: "arjun@email.com" },
                    { icon: IndianRupee, label: "Investment Amount", type: "text", placeholder: "₹1,00,000" },
                  ].map(({ icon: FIcon, label, type, placeholder }) => (
                    <div key={label}>
                      <label className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.1em] text-[#7A3D9A] mb-2">
                        <FIcon size={12} /> {label}
                      </label>

                      <input
                        type={type}
                        placeholder={placeholder}
                        className="inp"
                      />
                    </div>
                  ))}

                  <div className="col-span-full">
                    <label className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.1em] text-[#7A3D9A] mb-2">
                      <Briefcase size={12} /> Preferred Bond
                    </label>

                    <select className="inp">
                      <option>Select a bond...</option>
                      <option>HDFC Ltd. NCD — 11.5% p.a.</option>
                      <option>Muthoot Finance NCD — 12.5% p.a.</option>
                      <option>NHAI Bond — 8.75% p.a.</option>
                      <option>Tata Capital Bond — 10.25% p.a.</option>
                      <option>REC Limited Bond — 9.4% p.a.</option>
                      <option>Shriram Finance NCD — 11.8% p.a.</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.1em] text-[#7A3D9A] mb-2">
                    <MessageCircle size={12} /> Message (Optional)
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Any questions or requirements..."
                    className="inp resize-none"
                  />
                </div>

                <Button variant="secondary" className="px-9 py-4 text-base w-full">
                  <Send size={16} /> Submit Application
                </Button>

                <div className="flex items-center justify-center gap-6 mt-5 text-xs text-[#9A5FB5]">
                  <span className="flex items-center gap-1.5">
                    <Lock size={12} /> Bank-grade SSL
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Landmark size={12} /> SEBI Registered
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> 4hr response
                  </span>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <div className='text-[#1a1025]'>
      {renderBondsHero()}
      {HowItWorks()}
      {renderBondsList()}
      {renderBondsBenefits()}
      {renderBondsFeatures()}
      {renderBondsHow()}
      {renderBondsApply()}
    </div>
  );
}