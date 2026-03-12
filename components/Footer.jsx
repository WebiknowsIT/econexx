'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, TrendingUp, Shield } from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const NAV_COLS = [
  {
    heading: 'Market',
    links: [
      { label: 'Unlisted Shares',   href: '/unlisted-shares'   },
      { label: 'Pre-IPO Stocks', href: '/pre-ipo-stocks'   },
      { label: 'Smart Screener',     href: '/smart-screener' },
      { label: 'Bonds',        href: '/bonds'    },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',        href: '/about-us'   },
      { label: 'Partner With Us', href: '/partner-with-us' },
      { label: 'Contact Us',      href: '/contact-us' },
      { label: 'Insights',      href: '/news-and-insights' },
      // { label: 'SEBI Guidelines',      href: '/sebi' },
      { label: 'FAQ',             href: '/faq'      },
    ],
  },
];

const SOCIALS = [
  {
    label: 'LinkedIn', href: 'https://linkedin.com',
    paths: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>,
  },
  {
    label: 'Twitter', href: 'https://twitter.com',
    paths: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>,
  },
  {
    label: 'Instagram', href: 'https://instagram.com',
    paths: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>,
  },
  {
    label: 'YouTube', href: 'https://youtube.com',
    paths: <><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></>,
  },
];

const CONTACT = [
  { Icon: MapPin, text: 'Level 12, One BKC Tower, Mumbai – 400 051' },
  { Icon: Phone,  text: '+91 98765 43210'                            },
  { Icon: Mail,   text: 'hello@unlistededge.com'                     },
];

const LEGAL = [
  { label: 'Privacy Policy',     href: '/privacy-policy'      },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Disclaimer',         href: '/disclaimer'           },
];

const STATS = [
  { value: '50,000+', label: 'Investors'  },
  { value: '₹200Cr+', label: 'Traded'    },
  { value: '500+',    label: 'Companies' },
];

// ─── FOOTER A — DARK VAULT ────────────────────────────────────────────────────

export default function FooterA() {
  const [email, setEmail]           = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <footer className='hero-glow gridBgDark noise bg-[#08040F]'>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
            <AnimatedSection delay={0.05}>
              <div>
                <div className="mb-6">
                  <Image src="/images/Logo.png" alt="UnlistedEdge" height={50} width={200} priority className="w-auto h-[44px]" />
                </div>
                <p className="text-sm leading-relaxed mb-7 text-primary-300">
                 India's premier gateway to private markets. We help investors discover, buy &amp; sell unlisted shares, access high-potential pre-IPO opportunities, and grow wealth through curated bonds — all in one transparent platform. SEBI compliant, expert-backed, and trusted by 50,000+ investors across India.
                </p>
                
              </div>
            </AnimatedSection>

            {/* nav cols */}
            {NAV_COLS.map((col, i) => (
              <AnimatedSection key={col.heading} delay={0.1 + i * 0.07}>
                <div>
                  <h5 className="text-[.62rem] font-bold uppercase tracking-[.16em] mb-5 text-secondary-500">
                    {col.heading}
                  </h5>
                  <ul className="space-y-3.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link 
                          href={l.href} 
                          className="text-sm no-underline transition-colors text-primary-300 hover:text-primary-500"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}

            <div>
              <AnimatedSection delay={0.05}>
              <div>
                <h5 className="text-[.62rem] font-bold uppercase tracking-[.16em] mb-5 text-secondary-500">
                   Contact
                  </h5>
                <div className="space-y-2.5 mb-7">
                  {CONTACT.map((c) => (
                    <div key={c.text} className="flex items-start gap-2.5 text-xs text-primary-300">
                      <c.Icon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-primary-300" />
                      <span>{c.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: 'rgba(182,138,204,.07)', border: '1px solid rgba(182,138,204,.1)', color: '#7A3D9A' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(182,138,204,.3)'; e.currentTarget.style.color = '#B68ACC'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(182,138,204,.1)'; e.currentTarget.style.color = '#7A3D9A'; }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {s.paths}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            </div>
          </div>

          {/* ── NEWSLETTER ── */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-2xl p-7 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{ background: 'rgba(122,61,154,.06)', border: '1px solid rgba(182,138,204,.1)' }}>
              <div>
                <p className="font-semibold mb-1 text-[#F4EEF8]">
                  Get unlisted deals &amp; IPO alerts in your inbox
                </p>
                <p className="text-xs text-primary-300">
                  Weekly pulse on new arrivals, price moves &amp; IPO openings.
                </p>
              </div>
              {!subscribed ? (
                <div className="flex gap-2 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 md:w-60 rounded-xl px-4 py-2.5 text-sm outline-none"
                    style={{
                      background: 'rgba(255,255,255,.05)',
                      border: '1px solid rgba(182,138,204,.18)',
                      color: '#E6D9F0',
                      fontFamily: 'inherit',
                    }}
                  />
                  <button
                    onClick={() => email.trim() && setSubscribed(true)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold flex-shrink-0 transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg,#C47222,#F9A24F)', color: '#0D0812', fontFamily: 'inherit' }}
                  >
                    Subscribe <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="px-5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ background: 'rgba(34,197,94,.1)', border: '1px solid rgba(34,197,94,.2)', color: '#4ade80' }}>
                  ✓ You're subscribed!
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* ── BOTTOM BAR ── */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-8"
              style={{ borderTop: '1px solid rgba(182,138,204,.07)' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 flex-shrink-0 text-primary-300" />
                <p className="text-xs text-primary-300">
                  © 2025 Econexx Wealth Pvt Ltd. · SEBI Registered · Investments subject to market risk.
                </p>
              </div>
              <div className="flex items-center gap-5">
                {LEGAL.map((l, i) => (
                  <span key={l.label} className="flex items-center gap-5">
                    <Link 
                      href={l.href} 
                      className="text-xs no-underline transition-colors text-primary-300 hover:text-primary-500">
                      {l.label}
                    </Link>
                    {i < LEGAL.length - 1 && <span style={{ color: '#2A1040' }}>·</span>}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>

      {/* ── WHATSAPP FAB ── */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center z-50 transition-transform hover:scale-110"
        style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 8px 32px rgba(37,211,102,.35)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
        </svg>
      </a>
    </>
  );
}