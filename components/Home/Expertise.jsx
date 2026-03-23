import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PILLS = [
  { label: 'Corporate Bonds', color: 'orange' },
  { label: 'Unlisted Shares', color: 'purple' },
  { label: 'Pre-IPO Access',  color: 'orange' },
  { label: 'SEBI Compliant',  color: 'purple' },
];

// ─── RENDER FUNCTION ──────────────────────────────────────────────────────────

export default function ExpertiseSection() {
  return (
    <section className="px-6 lg:px-16 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: IMAGE ── */}
          <AnimatedSection>
            <div>

              {/* thin label row */}
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width: 28, height: 1, background: 'linear-gradient(90deg,transparent,#CFB3E0)' }} />
                <span
                  className="text-[.62rem] font-bold uppercase tracking-[.16em]"
                  style={{ color: '#9A5FB5' }}
                >
                  Econexx Wealth
                </span>
                <div className="flex-1" style={{ height: 1, background: 'linear-gradient(90deg,#CFB3E0,transparent)' }} />
              </div>

              {/* image frame */}
            
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: 28, height: 480 }}
              >
                <img
                  src="images/EnduringWealth.jpg"
                  alt="Financial Advisor"
                  className="object-cover w-full h-full fit-cover"
                  style={{ borderRadius: 28 }}
                />

                {/* gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 45%, rgba(13,8,18,.55) 100%)',
                    borderRadius: 28,
                  }}
                />

                {/* top-left orange corner */}
                <div
                  className="absolute top-4 left-4 pointer-events-none"
                  style={{
                    width: 36, height: 36,
                    borderTop: '2px solid rgba(249,162,79,.6)',
                    borderLeft: '2px solid rgba(249,162,79,.6)',
                    borderRadius: '4px 0 0 0',
                  }}
                />
                {/* bottom-right purple corner */}
                <div
                  className="absolute bottom-4 right-4 pointer-events-none"
                  style={{
                    width: 36, height: 36,
                    borderBottom: '2px solid rgba(182,138,204,.5)',
                    borderRight: '2px solid rgba(182,138,204,.5)',
                    borderRadius: '0 0 4px 0',
                  }}
                />
              </div>

              {/* floating stat card */}
              <div
                className="flex items-center gap-4 w-fit ml-auto relative z-10"
                style={{
                  marginTop: -28,
                  marginRight: -20,
                  background: '#fff',
                  border: '1px solid #EDE6F5',
                  borderRadius: 18,
                  padding: '16px 22px',
                  boxShadow: '0 16px 48px rgba(122,61,154,.12)',
                }}
              >
                <div className="text-center">
                  <div
                    className="font-bold leading-none"
                    style={{
                      fontSize: '1.7rem',
                      background: 'linear-gradient(135deg,#F9A24F,#C47222)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    ₹200Cr+
                  </div>
                  <div
                    className="text-[.6rem] uppercase tracking-[.1em] mt-0.5"
                    style={{ color: '#9A5FB5' }}
                  >
                    Volume Traded
                  </div>
                </div>
                <div style={{ width: 1, height: 36, background: '#EDE6F5' }} />
                <div className="text-center">
                  <div
                    className="font-bold leading-none"
                    style={{
                      fontSize: '1.7rem',
                      background: 'linear-gradient(135deg,#9A5FB5,#7A3D9A)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    50k+
                  </div>
                  <div
                    className="text-[.6rem] uppercase tracking-[.1em] mt-0.5"
                    style={{ color: '#9A5FB5' }}
                  >
                    Investors
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* ── RIGHT: TEXT ── */}
          <div>

            {/* eyebrow */}
            <AnimatedSection delay={0.08}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[.62rem] font-bold uppercase tracking-[.14em] px-3.5 py-1.5 rounded-full"
                  style={{
                    color: '#9A5FB5',
                    background: 'rgba(122,61,154,.08)',
                    border: '1px solid rgba(182,138,204,.25)',
                  }}
                >
                  Our Expertise
                </span>
              </div>
            </AnimatedSection>

            {/* headline */}
            <AnimatedSection delay={0.16}>
              <h2
                className="font-bold leading-[1.06] mb-5"
                style={{
                  fontSize: 'clamp(1.4rem, 4vw, 3rem)',
                  letterSpacing: '-.02em',
                  color: '#1A0A28',
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg,#F9A24F,#C47222)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Expertise
                </span>{' '}
                That Builds<br />
                Enduring{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg,#9A5FB5,#7A3D9A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Wealth
                </span>
              </h2>
            </AnimatedSection>

            {/* divider */}
            <AnimatedSection delay={0.2}>
              <div
                className="mb-5"
                style={{
                  height: 2, width: 64, borderRadius: 2,
                  background: 'linear-gradient(90deg,#F9A24F,#B68ACC)',
                }}
              />
            </AnimatedSection>

            {/* body copy */}
            <AnimatedSection delay={0.26}>
              <p
                className="leading-[1.85] mb-7 max-w-lg"
                style={{ fontSize: '.95rem', color: '#5C3B78' }}
              >
                At Econexx Wealth, we specialise in sophisticated financial instruments designed to diversify and strengthen your portfolio. From stable corporate bonds to high-growth unlisted shares and strategic IPO guidance, we provide curated access backed by research, due diligence, and experienced advisory.
              </p>
            </AnimatedSection>

            {/* feature pills */}
            <AnimatedSection delay={0.32}>
              <div className="flex flex-wrap gap-2 mb-7">
                {PILLS.map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[.72rem] font-semibold transition-all hover:-translate-y-0.5"
                    style={{
                      background: '#fff',
                      border: '1px solid #EDE6F5',
                      color: '#4B226E',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background:
                          pill.color === 'orange'
                            ? 'linear-gradient(135deg,#F9A24F,#C47222)'
                            : 'linear-gradient(135deg,#9A5FB5,#7A3D9A)',
                      }}
                    />
                    {pill.label}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* strategy banner */}
            <AnimatedSection delay={0.38}>
              <div
                className="relative overflow-hidden rounded-2xl p-7 mb-6"
                style={{
                  background: 'linear-gradient(125deg,#4B226E 0%,#7A3D9A 55%,#9A5FB5 100%)',
                }}
              >
                {/* decorative circles */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: 160, height: 160, borderRadius: '50%',
                    background: 'rgba(255,255,255,.04)',
                    top: -40, right: -20,
                  }}
                />
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: 100, height: 100, borderRadius: '50%',
                    background: 'rgba(255,255,255,.03)',
                    bottom: -20, right: 60,
                  }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255,255,255,.15)',
                      border: '1px solid rgba(255,255,255,.2)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-bold leading-snug"
                      style={{ fontSize: '1.05rem', color: '#fff', letterSpacing: '-.01em' }}
                    >
                      We don't just offer Products —
                    </p>
                    <p
                      className="font-bold leading-snug"
                      style={{ fontSize: '1.05rem' }}
                    >
                      <span
                        style={{
                          background: 'linear-gradient(135deg,#FFD580,#F9A24F)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        We Offer Strategy.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA buttons */}
            <AnimatedSection delay={0.46}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shares"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] text-[.85rem] font-bold no-underline transition-opacity hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg,#C47222,#F9A24F)',
                    color: '#0D0812',
                    letterSpacing: '.02em',
                  }}
                >
                  Explore Investments <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] text-[.85rem] font-bold no-underline transition-all hover:border-[#B68ACC] hover:bg-[#F8F3FC]"
                  style={{
                    background: '#fff',
                    border: '1.5px solid #E0D0EE',
                    color: '#7A3D9A',
                    letterSpacing: '.02em',
                  }}
                >
                  Talk to an Advisor
                </Link>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}