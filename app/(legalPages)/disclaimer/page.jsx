'use client';

import AnimatedSection from '@/components/AnimatedSection';

const UPDATED = '23 March 2026';

const SECTIONS = [
  {
    id: 'intro',
    title: 'Disclaimer',
    content: [
      `This Disclaimer governs your use of the website operated by Econexx Wealth Private Limited (PlanMoney).`,
    ],
  },
  {
    id: 'no-advice',
    title: 'No Investment Advice',
    content: [
      'All content is for informational and educational purposes only.'
    ],
    bullets: [
      'Not investment advice',
      'Not financial advice',
      'Not a trading recommendation',
    ],
    bulletsAfter:
      'Users should consult SEBI-registered professionals before making decisions.',
  },
  {
    id: 'non-sebi',
    title: 'Non-SEBI Registration',
    content: ['Econexx Wealth Private Limited (PlanMoney):'],
    bullets: [
      'Is not registered as Investment Advisor, Broker, or Portfolio Manager',
      'Does not offer regulated advisory services',
    ],
  },
  {
    id: 'platform',
    title: 'Nature of Platform',
    bullets: [
      'Operates as facilitation and information platform',
      'Does not execute trades',
      'Does not guarantee transactions',
      'Does not provide assured returns',
    ],
  },
  {
    id: 'risks',
    title: 'Investment Risks',
    bullets: [
      'Market risk',
      'Liquidity risk',
      'Credit risk',
      'Regulatory risk',
      'Unlisted securities have limited liquidity and higher volatility',
    ],
  },
  {
    id: 'returns',
    title: 'No Guarantee of Returns',
    bullets: [
      'Returns are not guaranteed',
      'Past performance does not indicate future results',
    ],
  },
  {
    id: 'accuracy',
    title: 'Accuracy of Information',
    content: [
      'We strive for accuracy but do not guarantee completeness or reliability. Information is provided on an “as-is” basis.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    bullets: [
      'No liability for direct or indirect losses',
      'No liability for investment losses or reliance on content',
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Content',
    content: [
      'We do not endorse or verify third-party content.',
    ],
  },
  {
    id: 'relationship',
    title: 'No Client Relationship',
    bullets: [
      'No advisor-client relationship',
      'No broker-client relationship',
      'No fiduciary duty',
    ],
  },
  {
    id: 'user',
    title: 'User Responsibility',
    bullets: [
      'Understand risks involved',
      'Conduct independent research',
      'Seek professional advice',
    ],
  },
  {
    id: 'caution',
    title: 'Regulatory Caution',
    content: [
      'Unlisted and off-market securities should be approached with caution.',
    ],
  },
  {
    id: 'updates',
    title: 'Updates to Disclaimer',
    content: [
      'We may modify this Disclaimer anytime. Continued use implies acceptance.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: [
      'Econexx Wealth Private Limited (PlanMoney)',
      'Email: team@econexxwealth.com',
      'Phone: 8108181602',
      'Registered Address: 09, Swami Samarth Krupa, Taloja By Pass, Near Hotel Nisarg, Dombivali East, Thane, Maharashtra - 421204',
    ],
  },
];

function BulletList({ label, items }) {
  return (
    <div className="mt-4">
      {label && <p className="text-sm font-semibold mb-2">{label}</p>}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-[1.8]">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#B68ACC' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DisclaimerPage() {
  return (
    <div className="bg-white text-[#220F34]">
      <section className="heroSection hero-glow gridBgDark noise bg-primary-900 relative px-6 lg:px-16 py-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(182,138,204,.04) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(182,138,204,.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">

          <AnimatedSection delay={0.08}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[.62rem] font-semibold uppercase tracking-[.14em] px-3 py-1 rounded-full" style={{ background: 'rgba(122,61,154,.15)', border: '1px solid rgba(182,138,204,.2)', color: '#B68ACC' }}>
                Disclaimer
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <div>
              <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50 mb-5">
                Disclaimer
              </h1>
              <p className="text-base leading-relaxed text-primary-300 mb-5">
                Please read this disclaimer carefully before using our platform.
              </p>
              <p className="text-xs text-primary-400">Last updated: {UPDATED}</p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <section className="px-6 lg:px-16 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {SECTIONS.map((sec, i) => (
              <AnimatedSection key={sec.id} delay={i * 0.04}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[.6rem] font-bold tabular-nums flex-shrink-0" style={{ color: '#CFB3E0', letterSpacing: '0.08em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1" style={{ height: '1px', background: 'linear-gradient(90deg, #E6D9F0, transparent)' }} />
                  </div>

                  <h2 className="font-bold mb-4 text-primary-600 text-lg">
                    {sec.title}
                  </h2>

                  {sec.content && (
                    <div className="space-y-3">
                      {sec.content.map((para, j) => (
                        <p key={j} className="text-sm leading-[1.9]">{para}</p>
                      ))}
                    </div>
                  )}

                  {sec.bullets && <BulletList items={sec.bullets} />}
                  {sec.bulletsAfter && (
                    <p className="mt-4 text-sm leading-[1.9]">{sec.bulletsAfter}</p>
                  )}

                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-14 p-7 rounded-2xl" style={{ background: '#F4EEF8', border: '1px solid #E6D9F0' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#4B226E' }}>
                For any queries, contact us at{' '}
                <a href="mailto:team@econexxwealth.com" className="font-semibold transition-colors text-primary">
                  team@econexxwealth.com
                </a>
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </div>
  );
}
