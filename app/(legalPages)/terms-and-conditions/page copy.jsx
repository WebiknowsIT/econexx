'use client';

import AnimatedSection from '@/components/AnimatedSection';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const UPDATED = 'January 1, 2025';

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Terms and Conditions',
    content: [
      `These terms and conditions outline the rules and regulations for the use of EconexxWealth Website. By accessing this website we assume you accept these terms and conditions.`,
      `Do not continue to use EconexxWealth if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person logs on to this website and compliant with the Company's terms and conditions.`,
      `"The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.`,
      `All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to, prevailing law of India.`,
      `Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`,
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      `We employ the use of cookies. By accessing EconexxWealth, you agreed to use cookies in agreement with EconexxWealth's Privacy Policy.`,
      `Most interactive websites use cookies to let us retrieve the user's details for each visit.`,
      `Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`,
    ],
  },
  {
    id: 'license',
    title: 'License',
    content: [
      `Unless otherwise stated, EconexxWealth and/or its licensors own the intellectual property rights for all material on EconexxWealth. All intellectual property rights are reserved. You may access this from EconexxWealth for your own personal use subject to restrictions set in these terms and conditions.`,
    ],
    bullets: [
      'Republish material from EconexxWealth',
      'Sell, rent or sub-license material from EconexxWealth',
      'Reproduce, duplicate or copy material from EconexxWealth',
      'Redistribute content from EconexxWealth',
    ],
    bulletsLabel: 'You must not:',
  },
  {
    id: 'comments',
    title: 'Comments',
    content: [
      `This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. EconexxWealth does not filter, edit, publish or review Comments prior to their presence on the website.`,
      `Comments do not reflect the views and opinions of EconexxWealth, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.`,
      `To the extent permitted by applicable laws, EconexxWealth shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.`,
      `EconexxWealth reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.`,
    ],
    bullets: [
      'You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;',
      'The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;',
      'The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy',
      'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.',
    ],
    bulletsLabel: 'You warrant and represent that:',
    bulletsAfter: `You hereby grant EconexxWealth a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.`,
  },
  {
    id: 'hyperlinking',
    title: 'Hyperlinking to our Content',
    content: [
      `The following organizations may link to our Website without prior written approval:`,
    ],
    bullets: [
      'Government agencies;',
      'Search engines;',
      'News organizations;',
      'Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and',
      'System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.',
    ],
    bulletsAfter: `These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.`,
    content2: [
      `We may consider and approve other link requests from the following types of organizations:`,
    ],
    bullets2: [
      'commonly-known consumer and/or business information sources;',
      'dot.com community sites;',
      'associations or other groups representing charities;',
      'online directory distributors;',
      'internet portals;',
      'accounting, law and consulting firms; and',
      'educational institutions and trade associations.',
    ],
    bullets2After: `We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of EconexxWealth; and (d) the link is in the context of general resource information. These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site. If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to EconexxWealth. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2–3 weeks for a response.`,
    content3: [
      `Approved organizations may hyperlink to our Website as follows:`,
    ],
    bullets3: [
      'By use of our corporate name; or',
      'By use of the uniform resource locator being linked to; or',
      'By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party\'s site.',
    ],
    bullets3After: `No use of EconexxWealth logo or other artwork will be allowed for linking absent a trademark license agreement.`,
  },
  {
    id: 'iframes',
    title: 'iFrames',
    content: [
      `Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.`,
    ],
  },
  {
    id: 'content-liability',
    title: 'Content Liability',
    content: [
      `We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.`,
      `No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`,
    ],
  },
  {
    id: 'your-privacy',
    title: 'Your Privacy',
    content: [
      `Please read our Privacy Policy.`,
    ],
  },
  {
    id: 'reservation',
    title: 'Reservation of Rights',
    content: [
      `We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.`,
      `We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.`,
    ],
  },
  {
    id: 'removal',
    title: 'Removal of Links from our Website',
    content: [
      `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.`,
      `We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`,
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
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
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

export default function TermsAndConditionsPage() {
  return (
    <div className='bg-white text-[#220F34]'>
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
              Terms &amp;{' '} <span className='gradBrand'>Conditions</span>
            </h1>
            <p className="text-base leading-relaxed text-primary-300 mb-5">
              These terms and conditions outline the rules and regulations for the use of the EconexxWealth website. By accessing this website you accept these terms in full.
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

                  {/* bullets block 1 */}
                  {sec.bullets && (
                    <BulletList label={sec.bulletsLabel} items={sec.bullets} />
                  )}
                  {sec.bulletsAfter && (
                    <p className="mt-4 text-sm leading-[1.9]">{sec.bulletsAfter}</p>
                  )}

                  {/* content block 2 */}
                  {sec.content2 && (
                    <div className="mt-4 space-y-3">
                      {sec.content2.map((para, j) => (
                        <p key={j} className="text-sm leading-[1.9]">{para}</p>
                      ))}
                    </div>
                  )}
                  {sec.bullets2 && (
                    <BulletList items={sec.bullets2} />
                  )}
                  {sec.bullets2After && (
                    <p className="mt-4 text-sm leading-[1.9]">
                      {sec.bullets2After}
                    </p>
                  )}

                  {/* content block 3 */}
                  {sec.content3 && (
                    <div className="mt-4 space-y-3">
                      {sec.content3.map((para, j) => (
                        <p key={j} className="text-sm leading-[1.9]">{para}</p>
                      ))}
                    </div>
                  )}
                  {sec.bullets3 && (
                    <BulletList items={sec.bullets3} />
                  )}
                  {sec.bullets3After && (
                    <p className="mt-4 text-sm leading-[1.9]">
                      {sec.bullets3After}
                    </p>
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
                Questions about these terms? Write to us at{' '}
                <a href="mailto:legal@econexxwealth.com"
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