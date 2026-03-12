'use client';

import AnimatedSection from '@/components/AnimatedSection';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const UPDATED = 'January 1, 2025';

const SECTIONS = [
  {
    id: 'general',
    title: 'General Disclaimer',
    content: [
      `The information provided on the EconexxWealth platform (unlistededge.com) is for general informational and educational purposes only. Nothing on this website constitutes financial advice, investment advice, trading advice, or any other form of professional advice.`,
      `EconexxWealth is not a registered investment advisor, portfolio manager, or stockbroker under the Securities and Exchange Board of India (SEBI) regulations for the purposes of providing personalised investment recommendations. All content on this platform should be independently verified before being acted upon.`,
    ],
  },
  {
    id: 'unlisted-shares',
    title: 'Unlisted Shares — Buy & Sell',
    content: [
      `EconexxWealth facilitates the buying and selling of unlisted equity shares as an intermediary platform. Unlisted shares are securities not listed or traded on any recognised stock exchange such as BSE or NSE, and are therefore not subject to the same level of regulatory oversight, price discovery mechanisms, or liquidity standards as listed securities.`,
      `Investments in unlisted shares carry a high degree of risk, including but not limited to: illiquidity, lack of a transparent secondary market, difficulty in determining fair value, company-specific operational and financial risks, and the possibility of total loss of invested capital.`,
      `Past transaction prices or indicative valuations shown on the platform are not guaranteed and do not assure future prices. EconexxWealth does not guarantee the completion of any buy or sell transaction and shall not be liable for any failed, delayed, or disputed transactions.`,
    ],
  },
  {
    id: 'ipo-consultancy',
    title: 'IPO & Pre-IPO Consultancy',
    content: [
      `EconexxWealth provides informational and consultancy services related to Initial Public Offerings (IPOs) and pre-IPO investment opportunities. All information shared regarding upcoming IPOs, grey market premiums (GMP), subscription status, allotment probabilities, and company fundamentals is sourced from publicly available data and is provided on an as-is basis.`,
      `Pre-IPO investments involve additional risks beyond those of listed securities. There is no guarantee that a company will complete its IPO, list on schedule, or list at a price above the pre-IPO acquisition cost. DRHP filings and SEBI approvals are subject to change, withdrawal, or delay. EconexxWealth is not responsible for any losses arising from reliance on IPO-related information or consultancy provided on this platform.`,
      `Our consultancy services are not a substitute for independent due diligence. Investors are strongly advised to read the company's Draft Red Herring Prospectus (DRHP), consult their financial advisor, and assess their own risk tolerance before investing in any pre-IPO or IPO opportunity.`,
    ],
  },
  {
    id: 'bonds',
    title: 'Bonds & Fixed Income Instruments',
    content: [
      `EconexxWealth provides information and access to bonds, Non-Convertible Debentures (NCDs), and other fixed income instruments. While fixed income instruments are generally considered lower risk than equities, they are not risk-free.`,
      `Risks associated with bonds and NCDs include credit risk (the issuer's ability to make interest and principal payments), interest rate risk (changes in market interest rates affecting bond prices), liquidity risk (difficulty in selling the instrument before maturity), and reinvestment risk. Bonds rated below investment grade carry substantially higher default risk.`,
      `Yield figures, coupon rates, and maturity dates shown on the platform are indicative and subject to change. EconexxWealth does not guarantee interest payments or the return of principal on any fixed income instrument offered or discussed on this platform.`,
    ],
  },
  {
    id: 'no-guarantee',
    title: 'No Guarantee of Returns',
    content: [
      `EconexxWealth does not guarantee any specific return, yield, or profit on any investment facilitated or discussed on this platform. Any projected returns, historical performance data, indicative pricing, or growth estimates shared are for illustrative purposes only and do not constitute a promise or assurance of future results.`,
      `Actual returns may differ materially from projections due to market conditions, regulatory changes, macroeconomic factors, company performance, interest rate movements, and other factors beyond our control. You should not invest money you cannot afford to lose.`,
    ],
  },
  {
    id: 'not-financial-advice',
    title: 'Not Financial or Legal Advice',
    content: [
      `All content, articles, reports, valuations, and communications on the EconexxWealth platform are provided for informational purposes only and do not constitute personalised financial, legal, tax, or accounting advice. The information is general in nature and may not be suitable for your specific financial situation, risk appetite, or investment objectives.`,
      `You should consult a SEBI-registered investment advisor, chartered accountant, or qualified legal counsel before making any investment decision. EconexxWealth disclaims all liability for decisions made based on information available on this platform without independent professional advice.`,
    ],
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Compliance Disclaimer',
    content: [
      `Econexx Wealth Pvt Ltd. operates in compliance with applicable laws and regulations of India. However, the regulatory landscape for unlisted securities, pre-IPO instruments, and alternative investments is evolving. Changes in SEBI regulations, tax laws, FEMA guidelines, or other applicable legislation may affect the availability, structure, or tax treatment of investments facilitated on this platform.`,
      `EconexxWealth is not responsible for any regulatory changes that impact existing or planned investments. It is the investor's responsibility to remain informed about applicable laws and to ensure their investments comply with their specific regulatory obligations, including those related to NRI investments, foreign portfolio investments, and domestic tax filings.`,
    ],
  },
  {
    id: 'accuracy',
    title: 'Accuracy of Information',
    content: [
      `While EconexxWealth makes reasonable efforts to ensure the accuracy and timeliness of information published on this platform, we do not warrant that all information is complete, accurate, current, or free from errors. Company financials, share prices, bond yields, and other data are sourced from public filings, company disclosures, and third-party data providers and may not reflect the most current status.`,
      `EconexxWealth reserves the right to modify, correct, or remove any information on the platform at any time without prior notice. Users are encouraged to independently verify all material information before making investment decisions.`,
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links & Content',
    content: [
      `This platform may contain links to third-party websites, DRHP documents, company filings, research reports, or external resources. EconexxWealth does not endorse, control, or take responsibility for the accuracy, completeness, or legality of any third-party content. Any reliance on such external content is entirely at your own risk.`,
    ],
  },
  {
    id: 'limitation',
    title: 'Limitation of Liability',
    content: [
      `To the maximum extent permitted by applicable law, Econexx Wealth Pvt Ltd., its directors, officers, employees, partners, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:`,
    ],
    bullets: [
      'Use of or inability to use the platform or its services',
      'Investment decisions made based on information available on the platform',
      'Loss of capital in unlisted shares, pre-IPO investments, or bond instruments',
      'Failed, delayed, or disputed transactions',
      'Regulatory changes affecting investments or services',
      'Unauthorised access to or alteration of your data or transactions',
      'Any other matter relating to the platform or its services',
    ],
    bulletsAfter: `Our total liability in any circumstance shall not exceed the fees paid by you to EconexxWealth in the three months preceding the event giving rise to the claim.`,
  },
  {
    id: 'jurisdiction',
    title: 'Jurisdictional Restrictions',
    content: [
      `The services and information on this platform are intended solely for residents of India. Access to or use of this platform by persons outside India may be restricted by the laws or regulations of their respective jurisdictions. It is the user's sole responsibility to ensure that their use of this platform and any investments made comply with all applicable laws in their jurisdiction.`,
      `EconexxWealth makes no representation that the services or investment opportunities available on this platform are appropriate or available for use in any location outside India.`,
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Disclaimer',
    content: [
      `EconexxWealth reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page. We recommend reviewing this Disclaimer periodically. Your continued use of the platform after any changes constitutes your acceptance of the revised Disclaimer.`,
    ],
  },
];

// ─── BULLET LIST ──────────────────────────────────────────────────────────────

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

export default function DisclaimerPage() {
  return (
    <div className="bg-white text-[#220F34]">

      {/* ── HERO ── */}
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
                Legal
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <div>
              <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50 mb-5">
                <span className="gradBrand">Disclaimer</span>
              </h1>
              <p className="text-base leading-relaxed text-primary-300 mb-5">
                Please read this disclaimer carefully before using the EconexxWealth platform or acting on any information related to unlisted shares, IPO consultancy, or bond investments.
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
                  {/* number + rule */}
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

                  {/* title */}
                  <h2 className="font-bold mb-4 text-primary-600 text-lg">
                    {sec.title}
                  </h2>

                  {/* paragraphs */}
                  {sec.content && (
                    <div className="space-y-3">
                      {sec.content.map((para, j) => (
                        <p key={j} className="text-sm leading-[1.9]">{para}</p>
                      ))}
                    </div>
                  )}

                  {/* bullets */}
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

          {/* contact note */}
          <AnimatedSection delay={0.2}>
            <div
              className="mt-14 p-7 rounded-2xl"
              style={{ background: '#F4EEF8', border: '1px solid #E6D9F0' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#4B226E' }}>
                For clarifications on any statement in this disclaimer, write to us at{' '}
                <a
                  href="mailto:legal@econexxwealth.com"
                  className="font-semibold transition-colors text-primary"
                >
                  legal@econexxwealth.com
                </a>{' '}
                and we will respond within 5 business days.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </div>
  );
}