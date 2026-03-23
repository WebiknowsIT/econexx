'use client';

import AnimatedSection from '@/components/AnimatedSection';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const UPDATED = '23 March 2026';

const SECTIONS = [
  {
    id: 'intro',
    title: 'Terms & Conditions',
    content: [
      `Welcome to the website of Econexx Wealth Private Limited, operating under the brand name “PlanMoney” (“Company”, “we”, “our”, or “us”).`,
      `By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions.`
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    content: ['You confirm that:'],
    bullets: [
      'You are at least 18 years of age',
      'You are legally capable of entering into a binding contract',
      'You are not prohibited by any applicable law or regulation',
    ],
  },
  {
    id: 'services',
    title: 'Nature of Services',
    bullets: [
      'The Company provides information and facilitation services for financial products',
      'We act only as a facilitator and service provider',
      'We do not operate as a stock exchange or trading platform',
      'We do not execute trades on behalf of users',
    ],
  },
  {
    id: 'no-advice',
    title: 'No Investment Advice',
    content: [
      'All content is for informational and educational purposes only.'
    ],
    bullets: [
      'Nothing constitutes investment advice',
      'Nothing constitutes financial advice',
      'Nothing is a recommendation to buy or sell securities',
    ],
    bulletsAfter:
      'Users must consult a qualified or SEBI-registered advisor before making decisions.',
  },
  {
    id: 'regulatory',
    title: 'Regulatory Status',
    content: ['Econexx Wealth Private Limited (PlanMoney):'],
    bullets: [
      'Is not registered with SEBI as an Investment Advisor, Broker, or Portfolio Manager',
      'Does not provide regulated advisory services',
      'Does not guarantee compliance applicable to regulated intermediaries',
    ],
  },
  {
    id: 'responsibility',
    title: 'User Responsibilities',
    content: ['You agree that:'],
    bullets: [
      'You will conduct your own research and due diligence',
      'You understand investment risks',
      'You will not rely solely on website information',
    ],
  },
  {
    id: 'transactions',
    title: 'Transactions',
    content: ['Transactions may be facilitated through off-market arrangements.'],
    bullets: [
      'We do not guarantee execution of transactions',
      'We do not guarantee availability of securities',
      'We do not guarantee pricing accuracy',
    ],
  },
  {
    id: 'fees',
    title: 'Fees and Charges',
    bullets: [
      'Service or facilitation fees may be charged',
      'All charges are disclosed before engagement',
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    content: ['We may engage third-party providers for:'],
    bullets: [
      'KYC verification',
      'Payment processing',
      'Technology support',
    ],
    bulletsAfter:
      'We are not responsible for acts or omissions of third parties.',
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    content: [
      'All content, trademarks, and materials are owned by the Company and protected by law.',
      'Unauthorized use is strictly prohibited.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: ['To the maximum extent permitted by law:'],
    bullets: [
      'We are not liable for direct or indirect losses',
      'Including losses from investment decisions',
      'Market fluctuations or transaction delays',
    ],
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    content: [
      'You agree to indemnify the Company against claims arising from your use of the website or violation of terms.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension and Termination',
    bullets: [
      'We may suspend or terminate access',
      'We may restrict usage at our discretion',
    ],
  },
  {
    id: 'law',
    title: 'Governing Law and Jurisdiction',
    content: [
      'These Terms are governed by Indian law.',
      'Courts in Thane, Maharashtra have exclusive jurisdiction.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: [
      'We may update these Terms at any time. Continued use means acceptance.',
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
      {label && (
        <p className="text-sm font-semibold mb-2">{label}</p>
      )}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-[1.8]">
            <span
              className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#B68ACC' }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TermsPage() {
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
              <span
                className="text-[.62rem] font-semibold uppercase tracking-[.14em] px-3 py-1 rounded-full"
                style={{ background: 'rgba(122,61,154,.15)', border: '1px solid rgba(182,138,204,.2)', color: '#B68ACC' }}
              >
                Terms
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <div>
              <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50 mb-5">
                Terms & <span className="gradBrand">Conditions</span>
              </h1>
              <p className="text-base leading-relaxed text-primary-300 mb-5">
                Please read these terms carefully before using our platform.
              </p>
              <p className="text-xs text-primary-400">Last updated: {UPDATED}</p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="px-6 lg:px-16 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {SECTIONS.map((sec, i) => (
              <AnimatedSection key={sec.id} delay={i * 0.04}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[.6rem] font-bold tabular-nums flex-shrink-0"
                      style={{ color: '#CFB3E0', letterSpacing: '0.08em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="flex-1"
                      style={{ height: '1px', background: 'linear-gradient(90deg, #E6D9F0, transparent)' }}
                    />
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

                  {sec.bullets && (
                    <BulletList label={sec.bulletsLabel} items={sec.bullets} />
                  )}
                  {sec.bulletsAfter && (
                    <p className="mt-4 text-sm leading-[1.9]">{sec.bulletsAfter}</p>
                  )}

                  

                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className='mt-4 text-sm leading-[1.9] border-t pt-4'>
            <span className='font-bold'>*Disclaimer:</span> This Privacy Policy is intended to comply with Indian data protection laws. It is recommended to have this reviewed by a legal professional for final implementation, especially considering financial regulatory requirements.*
            </p>

          <AnimatedSection delay={0.2}>
            <div
              className="mt-14 p-7 rounded-2xl"
              style={{ background: '#F4EEF8', border: '1px solid #E6D9F0' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#4B226E' }}>
                For any queries, contact us at{' '}
                <a
                  href="mailto:team@econexxwealth.com"
                  className="font-semibold transition-colors text-primary"
                >
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
