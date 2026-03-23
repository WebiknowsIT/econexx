'use client';

import AnimatedSection from '@/components/AnimatedSection';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const UPDATED = '23 March 2026';

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Privacy Policy',
    content: [
      `This Privacy Policy describes how Econexx Wealth Private Limited, operating under the brand name “PlanMoney”, collects, uses, and protects your personal information when you use our website and services.`,
      `We are committed to safeguarding your data in accordance with applicable Indian laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act).`,
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      `We may collect personal and non-personal information from you.`
    ],
    bullets: [
      'Full name, mobile number, and email address',
      'PAN and KYC details (where required)',
      'Financial and investment-related information',
      'IP address, browser type, and device details',
      'Website usage data via cookies and analytics tools',
    ],
  },
  {
    id: 'purpose',
    title: 'Purpose of Data Collection',
    bullets: [
      'Providing financial and related services',
      'Processing transactions and subscriptions',
      'Client onboarding and KYC compliance',
      'Communication via calls, SMS, WhatsApp, and email',
      'Improving our platform and user experience',
      'Meeting legal and regulatory requirements',
    ],
  },
  {
    id: 'consent',
    title: 'Consent',
    content: [
      `By using our website, you consent to the collection and use of your data as per this policy.`,
      `You may withdraw your consent at any time by contacting us.`
    ],
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing and Disclosure',
    content: [
      `We do not sell or rent your personal data.`
    ],
    bullets: [
      'Regulatory authorities if required under law',
      'KYC agencies, depositories, and financial intermediaries',
      'Payment gateways and technology providers',
      'Authorized partners under confidentiality obligations',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      `We implement reasonable security practices to protect your data.`
    ],
    bullets: [
      'Secure storage systems',
      'Access control mechanisms',
      'Encryption and monitoring',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies Policy',
    content: [
      `We use cookies to enhance functionality and analyze user behavior.`,
      `You may disable cookies through your browser settings.`
    ],
  },
  {
    id: 'rights',
    title: 'Your Rights (DPDP Act, 2023)',
    bullets: [
      'Access your personal data',
      'Request correction or updates',
      'Request deletion of your data',
      'Withdraw consent',
      'File a grievance',
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: [
      `We retain your information only as long as necessary for providing services and complying with legal requirements.`
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    content: [
      `Our website may contain links to third-party sites. We are not responsible for their privacy practices.`
    ],
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Advisory Disclaimer',
    content: [
      `Econexx Wealth Private Limited (PlanMoney) is not a SEBI-registered investment advisor, broker, or portfolio manager unless explicitly stated.`,
      `All content is for informational and educational purposes only.`
    ],
  },
  {
    id: 'risk',
    title: 'Risk Disclosure',
    bullets: [
      'Investments are subject to market risks',
      'Returns are not guaranteed',
      'Past performance does not indicate future results',
      'Unlisted investments carry higher risk and lower liquidity',
    ],
  },
  {
    id: 'updates',
    title: 'Updates to This Policy',
    content: [
      `We may update this Privacy Policy periodically. Updates will be posted on this page.`
    ],
  },
  {
    id: 'grievance',
    title: 'Grievance Officer',
    content: [
      `Name: Aishwarya Shinde`,
      `Email: aishwarya.shidne@econexxwealth.com`,
      `Phone: 8108181602`,
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      `Econexx Wealth Private Limited`,
      `Email: team@econexxwealth.com`,
      `Phone: 8108181602`,
      `Registered Address: 09, Swami Samarth Krupa, Taloja By Pass, Near Hotel Nisarg, Dombivali East, Thane, Maharashtra - 421204`,
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

export default function PrivacyPolicyPage() {
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
                Privacy
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <div>
              <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50 mb-5">
                Privacy <span className="gradBrand">Policy</span>
              </h1>
              <p className="text-base leading-relaxed text-primary-300 mb-5">
                At Econexx Wealth Pvt Ltd., your privacy is a priority. This policy explains what information we collect, how we use it, and your rights.
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

          <AnimatedSection delay={0.2}>
            <div
              className="mt-14 p-7 rounded-2xl"
              style={{ background: '#F4EEF8', border: '1px solid #E6D9F0' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#4B226E' }}>
                If you have any questions, contact us at{' '}
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