'use client';

import AnimatedSection from '@/components/AnimatedSection';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const UPDATED = 'January 1, 2025';

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Privacy Policy',
    content: [
      `At Econexx Wealth Pvt Ltd., accessible from unlistededge.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Econexx Wealth Pvt Ltd. and how we use it.`,
      `If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Econexx Wealth Pvt Ltd. This policy is not applicable to any information collected offline or via channels other than this website.`,
    ],
  },
  {
    id: 'consent',
    title: 'Consent',
    content: [
      `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.`,
      `If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.`,
      `When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: [
      `We use the information we collect in various ways, including to:`,
    ],
    bullets: [
      'Provide, operate, and maintain our website',
      'Improve, personalize, and expand our website',
      'Understand and analyze how you use our website',
      'Develop new products, services, features, and functionality',
      'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes',
      'Send you emails',
      'Find and prevent fraud',
    ],
  },
  {
    id: 'log-files',
    title: 'Log Files',
    content: [
      `Econexx Wealth Pvt Ltd. follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
    ],
  },
  {
    id: 'dart-cookie',
    title: 'Google Double Click DART Cookie',
    content: [
      `Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL — https://policies.google.com/technologies/ads`,
    ],
  },
  {
    id: 'advertising-partners',
    title: 'Advertising Partners Privacy Policies',
    content: [
      `You may consult this list to find the Privacy Policy for each of the advertising partners of Econexx Wealth Pvt Ltd. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Econexx Wealth Pvt Ltd., which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.`,
      `Note that Econexx Wealth Pvt Ltd. has no access to or control over these cookies that are used by third-party advertisers.`,
    ],
  },
  {
    id: 'third-party',
    title: 'Third Party Privacy Policies',
    content: [
      `Econexx Wealth Pvt Ltd. Financial Service's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.`,
      `You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.`,
    ],
  },
  {
    id: 'ccpa',
    title: 'CCPA Privacy Rights (Do Not Sell My Personal Information)',
    content: [
      `Under the CCPA, among other rights, California consumers have the right to:`,
    ],
    bullets: [
      'Request that a business that collects a consumer\'s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.',
      'Request that a business delete any personal data about the consumer that a business has collected.',
      'Request that a business that sells a consumer\'s personal data, not sell the consumer\'s personal data.',
    ],
    bulletsAfter: `If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    id: 'gdpr',
    title: 'GDPR Data Protection Rights',
    content: [
      `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:`,
    ],
    bullets: [
      'The right to access — You have the right to request copies of your personal data. We may charge you a small fee for this service.',
      'The right to rectification — You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.',
      'The right to erasure — You have the right to request that we erase your personal data, under certain conditions.',
      'The right to restrict processing — You have the right to request that we restrict the processing of your personal data, under certain conditions.',
      'The right to object to processing — You have the right to object to our processing of your personal data, under certain conditions.',
      'The right to data portability — You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.',
    ],
    bulletsAfter: `If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
  },
  {
    id: 'children',
    title: "Children's Information",
    content: [
      `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.`,
      `Econexx Wealth Pvt Ltd. does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    content: [
      `We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.`,
    ],
  },
  {
    id: 'refund',
    title: 'Refund Policy',
    content: [
      `At Econexx Wealth Pvt Ltd., all our subscriptions, services and products are non-refundable. Any request in respect with the refund matters shall not be entertained.`,
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
                At Econexx Wealth Pvt Ltd., your privacy is a priority. This policy explains what information we collect, how we use it, and the rights you have as a visitor to our platform.
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
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
                <a
                  href="mailto:legal@econexxwealth.com"
                  className="font-semibold transition-colors text-primary"
                >
                  legal@econexxwealth.com
                </a>
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </div>
  );
}