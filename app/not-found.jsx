'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { Home, Search, ArrowRight, TrendingUp, BarChart2, Landmark } from 'lucide-react';
import '@/styles/contact.css';

// ─── QUICK LINKS ──────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { Icon: TrendingUp, label: 'All Shares',   href: '/shares',   desc: 'Browse unlisted equity'  },
  { Icon: BarChart2,  label: 'Pre-IPO List', href: '/preipo',   desc: 'Upcoming IPO plays'      },
  { Icon: Landmark,   label: 'Bonds',        href: '/bonds',    desc: 'Fixed income instruments' },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function NotFound() {
  const [tick, setTick] = useState(0);

  // subtle counter animation for the 404 digits
  useEffect(() => {
    const t = setTimeout(() => setTick(1), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="heroSection hero-glow gridBgDark noise bg-primary-900 relative flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(182,138,204,.04) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(182,138,204,.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* decorative circles */}
      <div
        className="absolute top-24 right-16 w-72 h-72 rounded-full border float-anim pointer-events-none"
        style={{ borderColor: 'rgba(122,61,154,.1)' }}
      />
      <div
        className="absolute bottom-24 left-16 w-48 h-48 rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(182,138,204,.06)' }}
      />
      <div
        className="absolute top-1/2 left-8 w-24 h-24 rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(122,61,154,.07)' }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* 404 number */}
        <AnimatedSection>
          <div className="relative mb-4 select-none">
            <span
              className="font-serif font-bold leading-none"
              style={{
                fontSize: 'clamp(3rem, 18vw, 10rem)',
                background: 'linear-gradient(135deg, rgba(182,138,204,.12) 0%, rgba(182,138,204,.04) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
              }}
            >
              404
            </span>
            {/* glow layer */}
            <span
              className="absolute inset-0 font-serif font-bold leading-none pointer-events-none"
              style={{
                fontSize: 'clamp(3rem, 18vw, 10rem)',
                background: 'linear-gradient(135deg,#B68ACC,#F9A24F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
                opacity: tick ? 0.18 : 0,
                transition: 'opacity 1.2s ease',
                filter: 'blur(18px)',
              }}
            >
              404
            </span>
          </div>
        </AnimatedSection>

        {/* tag */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-2 mb-6">
            <span className="tag-dark">Page Not Found</span>
          </div>
        </AnimatedSection>

        {/* headline */}
        <AnimatedSection delay={0.18}>
          <h1
            className="font-bold leading-[1.06] mb-5 text-primary-50"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            Oops! The page you’re looking for {' '}
            <span className="grad-brand">isn’t here.</span>
          </h1>
        </AnimatedSection>

        {/* subtext */}
        <AnimatedSection delay={0.26}>
          <p className="text-primary-400 text-base leading-relaxed mb-10 max-w-md">
            The page you're looking for doesn't exist or may have been moved. Let's get you back to the market.
          </p>
        </AnimatedSection>

        {/* CTA buttons */}
        <AnimatedSection delay={0.34}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold no-underline transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg,#C47222,#F9A24F)',
                color: '#0D0812',
              }}
            >
              <Home className="w-4 h-4" /> Back to Home
            </Link>
            <Link
              href="/unlisted-shares"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold no-underline transition-all"
              style={{
                background: 'rgba(182,138,204,.08)',
                border: '1px solid rgba(182,138,204,.2)',
                color: '#B68ACC',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(182,138,204,.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(182,138,204,.2)')}
            >
              Browse Shares <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}