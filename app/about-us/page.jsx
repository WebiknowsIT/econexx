'use client';

import React from 'react';
import {
  TrendingUp, Users, Target, Shield, Heart,
  Building2, Landmark, Star, Globe, Award, Clock,
  CheckCircle, Linkedin, Twitter,
  BookOpen, Lightbulb, Handshake, BarChart2, Lock,
  ChevronRight,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import '@/styles/AboutPage.css';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const metrics = [
  { value: '₹2,400Cr+', label: 'Capital Deployed',    sub: 'Across all products' },
  { value: '8,500+',    label: 'Investors Served',     sub: 'And growing daily' },
  { value: '500+',      label: 'Stocks Listed',        sub: 'Unlisted + Pre-IPO' },
  { value: '100%',      label: 'On-time Payments',     sub: 'Since inception' },
  { value: '11.2%',     label: 'Avg. Bond Yield',      sub: 'vs 7% FD benchmark' },
  { value: '4 hrs',     label: 'Avg. Response Time',   sub: 'Our team, any day' },
];

const values = [
  {
    icon: Shield,
    box: 'iconBox',
    title: 'Integrity First',
    body: 'Every instrument on our platform is SEBI-regulated and independently rated. We list only what we would personally invest in.',
  },
  {
    icon: Lightbulb,
    box: 'iconBoxSec',
    title: 'Radical Transparency',
    body: 'No hidden fees. No buried fine print. Every yield, risk, and payout is disclosed upfront — so you can decide with full clarity.',
  },
  {
    icon: Users,
    box: 'iconBox',
    title: 'Investor First',
    body: 'We are not a marketplace that simply lists products. We curate, vet, and own every recommendation we make to our investors.',
  },
  {
    icon: Globe,
    box: 'iconBoxSec',
    title: 'Democratising Access',
    body: 'Institutional-grade investments — pre-IPO equity, bonds, NCDs — were locked to HNIs. We are changing that, starting from ₹1,000.',
  },
  {
    icon: TrendingUp,
    box: 'iconBox',
    title: 'Long-term Thinking',
    body: 'We are not chasing transaction volume. We are building multi-decade relationships with investors who trust us with their wealth.',
  },
  {
    icon: Heart,
    box: 'iconBoxSec',
    title: 'Community Driven',
    body: 'Our roadmap is shaped by our investors. Product features, new listings, and educational content all come from real conversations.',
  },
];

const team = [
  {
    initial: 'A', name: 'Arjun Mehta', role: 'Co-founder & CEO',
    bio: 'Ex-Goldman Sachs. 12 years in fixed income and equity capital markets.',
    initialBg: 'linear-gradient(135deg,rgba(122,61,154,.14),rgba(75,34,110,.08))',
    initialBorder: 'rgba(122,61,154,.2)', initialColor: '#7A3D9A',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initial: 'P', name: 'Priya Nair', role: 'Co-founder & CTO',
    bio: 'Built fintech infrastructure at Razorpay. IIT Bombay CS, 2012.',
    initialBg: 'rgba(196,114,34,.08)',
    initialBorder: 'rgba(196,114,34,.22)', initialColor: '#C47222',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initial: 'R', name: 'Rohit Verma', role: 'Head of Research',
    bio: 'CFA charterholder. Formerly CRISIL — 9 years rating corporate debt.',
    initialBg: 'rgba(16,185,129,.06)',
    initialBorder: 'rgba(16,185,129,.18)', initialColor: '#059669',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initial: 'S', name: 'Sneha Kapoor', role: 'Head of Investor Relations',
    bio: 'Ex-Zerodha. 7 years building trust with retail investors at scale.',
    initialBg: 'rgba(99,102,241,.06)',
    initialBorder: 'rgba(99,102,241,.18)', initialColor: '#6366f1',
    social: { linkedin: '#', twitter: '#' },
  },
];

const journey = [
  { year: '2019', accent: false, title: 'The Problem Spotted',       body: 'Our founders struggled to access unlisted stocks and high-yield bonds as retail investors. The products existed — but the access did not.' },
  { year: '2020', accent: false, title: 'Platform Founded',          body: 'Econexxwealth incorporated. First 50 investors onboarded. ₹2.4 Cr deployed in our first bond tranche — fully on-time maturity.' },
  { year: '2021', accent: false, title: 'SEBI Registration',         body: 'Obtained Investment Adviser and Research Analyst licences. Built our compliance framework from the ground up.' },
  { year: '2022', accent: true,  title: 'Bond Platform Launched',    body: 'Launched fixed-income marketplace with 12 curated bonds. ₹200 Cr deployed by year-end. Zero defaults.' },
  { year: '2023', accent: false, title: 'Screener & Pre-IPO',        body: '500+ unlisted stocks indexed. Smart Screener with 20+ filters launched. Pre-IPO pipeline established with 30 issuers.' },
  { year: '2024', accent: true,  title: '8,500 Investors & Growing', body: 'Crossed ₹2,400 Cr cumulative deployment. Expanded team to 45. Began Series A conversations.' },
];

const partners = [
  { name: 'HDFC Ltd.',        Icon: Building2 },
  { name: 'NHAI',             Icon: Landmark  },
  { name: 'Tata Capital',     Icon: Building2 },
  { name: 'Muthoot Finance',  Icon: Building2 },
  { name: 'REC Limited',      Icon: Landmark  },
  { name: 'NSE / BSE Listed', Icon: BarChart2  },
  { name: 'CRISIL Rated',     Icon: Award     },
  { name: 'SEBI Registered',  Icon: Shield    },
];

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export default function AboutPage() {


  function renderHero() {
    return (
      <section className="heroSection hero-glow gridBgDark noise bg-primary-900 py-10">
        <div className="heroRing1 floatAnim" />
        <div className="heroRing2 floatAnimD" />
        <div className="heroRing3" />

        <div className="heroInner">
          <div style={{ maxWidth: '44rem' }}>
            <div className="fu flex items-center gap-2 mb-7">
              <span className="tagDark">Our Story</span>
              <span className="tagSecDark">SEBI Registered</span>
            </div>

            {/* Headline */}
            <h1 className="fu1 heroTitle">
              We're Making <span className="gradBrand">Institutional-Grade</span> Investing Accessible to Every Indian
            </h1>

            <p className="fu2 heroCopy">
              Econexxwealth was founded with a single belief — that pre-IPO equity, curated bonds, and smart fixed income shouldn't be the privilege of the ultra-wealthy. We're changing that.
            </p>

            {/* CTAs */}
            <div className="fu3 flex gap-4 flex-wrap mb-14">
              <button
                className="btnCta px-9 py-4 rounded-xl text-base"
                onClick={() => document.getElementById('about-team')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users size={16} /> Meet the Team
              </button>
              <button
                className="btnGhostDark px-9 py-4 rounded-xl text-base"
                onClick={() => document.getElementById('about-journey')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen size={16} /> Our Journey
              </button>
            </div>

            {/* Stat strip */}
            <div className="fu4 flex items-center gap-8 flex-wrap">
              {[
                { num: '2019',    label: 'Founded'          },
                { num: '45+',     label: 'Team Members'     },
                { num: '₹2,400Cr', label: 'Deployed'        },
                { num: '8,500+',  label: 'Investors'        },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="statSep" />}
                  <div>
                    <div className="statNum grad-hero">{s.num}</div>
                    <div className="statLabel">{s.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Floating card — right side */}
        <div className="heroFloatCard">
          <div className="glassCardDark featuredCard noise rounded-2xl p-6">
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '.75rem',
                    background: 'linear-gradient(135deg,#7A3D9A,#4B226E)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <TrendingUp size={16} style={{ color: '#F9A24F' }} />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F4EEF8' }}>
                    Econexxwealth
                  </div>
                  <div style={{ fontSize: '.65rem', color: 'rgba(182,138,204,.6)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                    Since 2019
                  </div>
                </div>
              </div>

              <hr className="brandHrDark" style={{ marginBottom: '1.25rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
                {[
                  { icon: Shield,   label: 'SEBI Registered RIA',    color: '#4ade80' },
                  { icon: Award,    label: 'CRISIL Partner',          color: '#F9A24F' },
                  { icon: Lock,     label: 'Bank-grade SSL + 2FA',    color: '#B68ACC' },
                  { icon: CheckCircle, label: '100% Payment Record',  color: '#4ade80' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={14} style={{ color, flexShrink: 0 }} />
                    <span style={{ fontSize: '.78rem', color: '#E6D9F0', fontWeight: 500 }}>{label}</span>
                  </div>
                ))}
              </div>

              <hr className="brandHrDark" style={{ margin: '1.25rem 0' }} />

              <div className="flex items-center justify-between">
                <span style={{ fontSize: '.7rem', color: 'rgba(182,138,204,.5)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  Trust Score
                </span>
                <span className="" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F9A24F' }}>
                  4.9 / 5
                </span>
              </div>
              <div className="progressTrack" style={{ marginTop: '.5rem', marginBottom: 0 }}>
                <div className="fillBar" style={{ width: '98%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── renderMetrics ────────────────────────────── */
  function renderMetrics() {
    return (
      <section className="sectionAlt py-14 px-6">
        <div className="max-w-7xl mx-auto">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="By the Numbers"
              title="The Impact We've Made"
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="metricBox">
                <div className="metricValue">{m.value}</div>
                <div className="metricLabel">{m.label}</div>
                <div className="metricSub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderMission() {
    return (
      <section className="sectionWhite gridBgLight relative overflow-hidden py-14 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag">Mission</span>
              <h2 className="sectionHeadline mt-5" style={{ fontSize: 'clamp(1rem, 3vw, 2.75rem)' }}>
                Wealth Creation Made <span className="gradBrand">Accessible</span>
              </h2>
              <p className="mb-6">
                For decades, the highest-returning investments — pre-IPO equity, curated bonds, structured products — were available only to those with the right contacts or a minimum ₹1 crore cheque.
              </p>
              <p className="mb-8">
                We built Econexxwealth to collapse that gap. Every product on our platform starts at ₹1,000, carries a SEBI-regulated wrapper, and is vetted by our in-house research desk before it reaches you.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  'SEBI Registered Investment Adviser (RIA)',
                  'CRISIL-rated instruments only',
                  'Real-time pricing and live GMP data',
                  'Demat-linked — no offline paperwork',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="checkCircle">
                      <CheckCircle size={12} style={{ color: '#C47222' }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Target,    box: 'iconBoxSec',
                  title: 'Our Vision',
                  body: 'To be India\'s most trusted platform for alternative and pre-IPO investments — where every investor, regardless of net worth, gets the same quality of access.',
                },
                {
                  icon: Handshake, box: 'iconBox',
                  title: 'Our Promise',
                  body: 'We will never list an instrument we haven\'t personally vetted. We will always disclose our conflicts. And we will always put your returns above our revenue.',
                },
              ].map(({ icon: Icon, box, title, body }) => (
                <div key={title} className="lightCard rounded-2xl p-7">
                  <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div className={box} style={{ flexShrink: 0 }}>
                      <Icon size={18} style={{ color: box === 'iconBoxSec' ? '#C47222' : '#7A3D9A' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1025' }}>{title}</h3>
                      <p className="sectionSubtext text-sm">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── renderValues ─────────────────────────────── */
  function renderValues() {
    return (
      <section
        id="about-values"
        className="relative overflow-hidden py-14 px-6"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(122,61,154,.08) 0%, transparent 70%), #0D0812',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(182,138,204,.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="What We Stand For"
              title="Our Core Values"
              theme="dark"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, box, title, body }) => (
              <div key={title} className="valueCard">
                <div className={`${box} mb-5`} style={{
                  background: box === 'iconBoxSec' ? 'rgba(196,114,34,.12)' : 'rgba(122,61,154,.18)',
                  border: `1px solid ${box === 'iconBoxSec' ? 'rgba(196,114,34,.25)' : 'rgba(182,138,204,.22)'}`,
                }}>
                  <Icon size={18} style={{ color: box === 'iconBoxSec' ? '#F9A24F' : '#B68ACC' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#F4EEF8' }}>{title}</h3>
                <p style={{ fontSize: '.875rem', lineHeight: 1.75, color: 'rgba(182,138,204,.6)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── renderTeam ───────────────────────────────── */
  function renderTeam() {
    return (
      <section id="about-team" className="sectionWhite dotBgLight relative py-14 px-6">
        <div className="max-w-7xl mx-auto relative z-10">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="The People"
              title="Meet the Founding Team"
              description="Ex-Goldman, IIT, CRISIL. Operators who've lived the problem they're solving."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="teamCard p-7">
                <div
                  className="teamAvatar"
                  style={{
                    background: member.initialBg,
                    border: `1.5px solid ${member.initialBorder}`,
                    color: member.initialColor,
                  }}
                >
                  {member.initial}
                </div>

                <h3 className="text-xl font-bold mb-0.5" style={{ color: '#1a1025' }}>{member.name}</h3>
                <div className="tag" style={{ marginBottom: '.75rem', display: 'inline-block' }}>{member.role}</div>
                <p style={{ fontSize: '.8rem', color: '#4B226E', lineHeight: 1.65, marginBottom: '1.25rem' }}>{member.bio}</p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    className="flex items-center justify-center rounded-lg transition-all"
                    style={{ width: '2rem', height: '2rem', background: 'rgba(122,61,154,.08)', border: '1px solid rgba(122,61,154,.15)', color: '#7A3D9A' }}
                  >
                    <Linkedin size={13} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="flex items-center justify-center rounded-lg transition-all"
                    style={{ width: '2rem', height: '2rem', background: 'rgba(122,61,154,.08)', border: '1px solid rgba(122,61,154,.15)', color: '#7A3D9A' }}
                  >
                    <Twitter size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring nudge */}
          <div className="lightCard featuredCard rounded-2xl p-8 mt-10 flex flex-wrap items-center justify-between gap-6">
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div className="tag" style={{ marginBottom: '.75rem' }}>We're Hiring</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a1025' }}>
                Join the team shaping India's investment future
              </h3>
              <p style={{ fontSize: '.875rem', color: '#4B226E' }}>
                Open roles in research, engineering, and investor relations.
              </p>
            </div>
            <button className="btnCta px-8 py-3.5 rounded-xl text-sm" style={{ flexShrink: 0 }}>
              View Open Roles <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ── renderJourney ────────────────────────────── */
  function renderJourney() {
    return (
      <section id="about-journey" className="sectionAlt gridBgLight relative py-14 px-6">
        <div className="max-w-3xl mx-auto relative z-10">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="Timeline"
              title="Our Journey So Far"
            />
          </AnimatedSection>

          {/* Timeline */}
          <div>
            {journey.map((item, i) => {
              const isLast = i === journey.length - 1;
              return (
                <div key={item.year}>
                  <div className="timelineItem">
                    <div className="flex flex-col items-center">
                      <div className={`timelineDot ${item.accent ? 'timelineDot--accent' : ''}`}>
                        {item.year.slice(2)}
                      </div>
                      {!isLast && <div className="timelineConnector" />}
                    </div>

                    <div className={`lightCard rounded-2xl p-6 flex-1 ${isLast ? 'mb-0' : 'mb-6'}`}>
                      <div style={{ position: 'relative', zIndex: 10 }}>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="font-bold"
                            style={{ fontSize: '1.5rem', color: item.accent ? '#C47222' : '#7A3D9A' }}
                          >
                            {item.year}
                          </span>
                          {item.accent && (
                            <span className="tagSecDark">
                              <Star size={10} /> Milestone
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1025' }}>{item.title}</h3>
                        <p className="sectionSubtext text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /* ── renderPartners ───────────────────────────── */
  function renderPartners() {
    return (
      <section className="sectionWhite py-14 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <AnimatedSection delay={0.1} y={30}>
            <SectionTitle
              align="center"
              eyebrow="Trusted By"
              title="Partners & Issuers"
            />
          </AnimatedSection>

          {/* Marquee */}
          <div className="marqueeWrap">
            <div className="marqueeTrack">
              {[...partners, ...partners].map(({ name, Icon }, i) => (
                <div key={i} className="logoChip">
                  <Icon size={14} style={{ color: '#9A5FB5' }} />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Shield,       label: 'SEBI Registered',   sub: 'Investment Adviser & Research Analyst' },
              { icon: Award,        label: 'CRISIL Partner',     sub: 'Independent credit assessment on all bonds' },
              { icon: Lock,         label: 'Bank-grade Security',sub: '256-bit SSL, 2FA, and encrypted data storage' },
              { icon: CheckCircle,  label: 'BSE / NSE Listed',   sub: 'All instruments exchange-registered' },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="metricBox text-left"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '.875rem', padding: '1.25rem' }}
              >
                <div className="iconBox" style={{ flexShrink: 0 }}>
                  <Icon size={16} style={{ color: '#7A3D9A' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '.875rem', color: '#1a1025', marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: '.7rem', color: '#9A5FB5', lineHeight: 1.5 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Page assembly ────────────────────────────── */
  return (
    <div className="aboutPage">
      {renderHero()}
      {renderMetrics()}
      {renderMission()}
      {renderValues()}
      {/* {renderTeam()} */}
      {renderJourney()}
      {renderPartners()}
    </div>
  );
}