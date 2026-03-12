"use client";
import { useState } from "react";
import {
  ArrowRight,
  FileText,
  Handshake,
  IndianRupee,
  TrendingUp,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  Bell,
  FilePlus,
  UserCheck,
  Calculator, 
  Info,
  User,
  Phone,
  Mail,
  Briefcase,
  Layers,
  Users,
  MessageCircle,
  Send,
  Lock,
  Clock,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/ui/Faq";



export default function PartnerPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    message: ''
  });

  const benefitCards = [
    {
      icon: ShieldCheck,
      title: "SEBI Compliant Platform",
      text: "All products are fully regulated. You and your clients get legal protections that come only with a compliant platform.",
      style: "primary"
    },
    {
      icon: TrendingUp,
      title: "High-Yield Products",
      text: "Offer pre-IPO equity and bonds yielding up to 12.5% — exclusive products your clients can't access anywhere else.",
      style: "primary"
    },
    {
      icon: Zap,
      title: "48-Hour Onboarding",
      text: "Apply, verify, and go live in under 48 hours. Our partner team handles every step of the documentation for you.",
      style: "primary"
    },
    {
      icon: LayoutDashboard,
      title: "Partner Dashboard",
      text: "Track every referral, live transaction status, and commission earned in real time. Your own portal, always on.",
      style: "secondary",
      label: "Your Toolkit"
    },
    {
      icon: FileText,
      title: "White-label Reports",
      text: "Client-ready pitch decks, product one-pagers, and portfolio reports — all co-branded with your identity.",
      style: "secondary",
      label: "Your Toolkit"
    },
    {
      icon: Bell,
      title: "Daily Market Updates",
      text: "Morning deal alerts, yield changes, and new listings — so you're always the first to inform your clients.",
      style: "secondary",
      label: "Your Toolkit"
    }
  ];

  const steps = [
    {
      num: "01",
      icon: FilePlus,
      title: "Apply Online",
      text: "Fill out the partner application below. Takes 5 minutes. We review every submission within 24 hours.",
      line: true
    },
    {
      num: "02",
      icon: UserCheck,
      title: "Get Verified",
      text: "Submit your PAN, SEBI registration (if applicable), and bank details. Compliance cleared in 48 hours.",
      line: true
    },
    {
      num: "03",
      icon: LayoutDashboard,
      title: "Access Your Dashboard",
      text: "Get your unique referral link, partner portal access, and marketing kit. Your relationship manager onboards you personally.",
      line: true
    },
    {
      num: "04",
      icon: IndianRupee,
      title: "Earn Every Month",
      text: "Refer, close, earn. Commissions credited directly to your bank account every month — no minimum threshold.",
      accent: true
    }
  ];

  const partnerFaqs = [
  {
    id: 1,
    question: "Who can become an Econexx partner?",
    answer: (
      <p>
        Financial advisors, wealth managers, CA firms, family offices, and
        investment consultants can apply to become an Econexx partner. Anyone
        with a network of investors interested in pre-IPO shares and fixed
        income products can benefit from our partnership program.
      </p>
    ),
  },
  {
    id: 2,
    question: "Do I need a SEBI license to partner with Econexx?",
    answer: (
      <p>
        A SEBI registration is preferred for certain advisory activities,
        but it is not mandatory for referral-based partnerships. Our team
        will guide you through the compliance requirements based on your
        business model and services offered to clients.
      </p>
    ),
  },
  {
    id: 3,
    question: "How do partners earn commissions?",
    answer: (
      <p>
        Partners earn commissions when their referred clients invest through
        Econexx. Once a transaction is completed, your commission is tracked
        in your partner dashboard and paid directly to your bank account on a
        monthly basis.
      </p>
    ),
  },
  {
    id: 4,
    question: "How long does the partner onboarding process take?",
    answer: (
      <p>
        The onboarding process typically takes 24–48 hours. After submitting
        your application and required documents such as PAN and bank details,
        our compliance team verifies the information and activates your
        partner account.
      </p>
    ),
  },
  {
    id: 5,
    question: "What tools and support will I receive as a partner?",
    answer: (
      <p>
        Partners receive access to a dedicated dashboard, referral links,
        product updates, client-ready pitch decks, and white-label reports.
        Our partner team also provides ongoing support to help you close
        deals and grow your client base.
      </p>
    ),
  },
  {
    id: 6,
    question: "When and how are commissions paid?",
    answer: (
      <p>
        Commissions are calculated based on completed client transactions and
        are credited directly to your registered bank account every month.
        You can track all earnings and referrals in real time through your
        partner dashboard.
      </p>
    ),
  },
];

 const earningCards = [
    {
      invest: "₹10L",
      earn: "₹15,000",
      label: "One client · One deal"
    },
    {
      invest: "₹50L",
      earn: "₹75,000",
      label: "One client · One deal",
      highlight: true
    },
    {
      invest: "₹1Cr",
      earn: "₹1.5L",
      label: "One client · One deal"
    }
  ];

  function renderHero() {
    return (
      <section className="heroSection hero-glow gridBgDark noise bg-primary-900 py-10 px-6 lg:px-16 overflow-hidden">
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full border float"
          style={{ borderColor: "rgba(122,61,154,.1)" }}
        />
        <div
          className="absolute top-40 right-32 w-56 h-56 rounded-full border"
          style={{ borderColor: "rgba(182,138,204,.06)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border"
          style={{ borderColor: "rgba(122,61,154,.07)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

            <AnimatedSection delay={0.2} y={40}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="inline-block font-semibold uppercase tracking-widest text-[.62rem] px-3 py-0.5 rounded-full text-primary-300"
                    style={{
                      background: "rgba(122,61,154,.18)",
                      border: "1px solid rgba(182,138,204,.22)",
                    }}
                  >
                    Partnership
                  </span>
                  <span
                    className="inline-block font-semibold uppercase tracking-widest text-[.62rem] px-3 py-0.5 rounded-full text-secondary-400"
                    style={{
                      background: "rgba(196,114,34,.12)",
                      border: "1px solid rgba(249,162,79,.22)",
                    }}
                  >
                    Now Open
                  </span>
                </div>

                <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50">
                  Grow Together with <span className="gradBrand">EconexxWealth</span>
                </h1>

                <p className="text-primary-400 text-lg leading-relaxed max-w-lg mb-6">
                  Refer investors from your network and earn a flat 1.5% commission on every successful transaction — no tiers, no minimums, just straightforward earnings.
                </p>

                <AnimatedSection delay={0.3} y={30}>
                <div className="fu3 flex gap-4 flex-wrap">

                  <Button
                    variant="secondary"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() =>
                      document
                        .getElementById("apply")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Handshake size={16} />
                    Become a Partner
                  </Button>

                  <Button 
                    variant="ghost"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() =>
                      document
                        .getElementById("earn")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <IndianRupee size={16} />
                    See How You Earn
                  </Button>

                </div>
              </AnimatedSection>
              </div>
            </AnimatedSection>

                          

            {/* STATS */}
            <AnimatedSection delay={0.35} y={40}>
              <div className="grid grid-cols-2 gap-4 pb-2">
                {[
                  { num: "₹2,400Cr+", label: "Capital Deployed" },
                  { num: "8,500+", label: "Active Investors" },
                  { num: "1.5%", label: "Flat Commission" },
                  { num: "48 hrs", label: "Onboarding Time" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-[.875rem]"
                    style={{
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(182,138,204,.1)",
                    }}
                  >
                    <div className="text-3xl font-bold text-secondary-400 mb-1">
                      {stat.num}
                    </div>
                    <div className="text-primary-500 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    )
  }

  function renderBenefits() {
    return (
      <section className="px-6 lg:px-16 py-24 bg-primary-50">

        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <AnimatedSection>
              <SectionTitle
                align="center"
                eyebrow="What You Get"
                title="Everything You Need to Succeed"
                description="We've built the platform, compliance, and tools — so you can focus entirely on your clients and your earnings."
              />
          </AnimatedSection>


          {/* Cards Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitCards.map((card, i) => {
              const Icon = card.icon;
              const isSecondary = card.style === "secondary";
              return (
                <AnimatedSection key={i} delay={0.1 + i * 0.1} y={40}>

                  <div
                    className={`bg-white rounded-2xl p-8 transition-all hover:-translate-y-1
                    ${isSecondary
                      ? "border border-secondary-100 hover:border-secondary-200 hover:shadow-[0_12px_32px_rgba(196,114,34,.08)]"
                      : "border border-primary-100 hover:border-primary-200 hover:shadow-[0_12px_32px_rgba(122,61,154,.08)]"
                    }`}
                  >

                    <div className="flex items-start gap-4">

                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border
                        ${isSecondary
                          ? "bg-secondary-50 border-secondary-100"
                          : "bg-primary-50 border-primary-100"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={
                            isSecondary
                              ? "text-secondary-600"
                              : "text-primary-500"
                          }
                        />
                      </div>

                      {/* Content */}
                      <div>

                        {card.label && (
                          <div className="text-[.6rem] font-semibold uppercase tracking-widest text-secondary-500 mb-1.5">
                            {card.label}
                          </div>
                        )}

                        <h3 className="font-bold text-primary-900 mb-2 text-xl">{card.title}</h3>
                        <p className="text-sm leading-relaxed">{card.text}</p>

                      </div>

                    </div>

                  </div>

                </AnimatedSection>
              );
            })}

          </div>

        </div>

      </section>
    );
  }

  function renderProcess() {
    return (
      <section className="px-6 lg:px-16 py-24" style={{ background: "#0D0812" }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionTitle
                theme="dark"
                align="center"
                eyebrow="Process"
                title="Up & Running in 4 Steps"
                description="From application to your first payout — typically under a week."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={i} delay={0.1 + i * 0.1} y={40}>
                  <div className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="step-dot">{step.num}</div>
                      {step.line && <div className="step-line mt-2"></div>}
                    </div>
                    <div className={step.line ? "pb-10" : ""}>
                      <h3 className="text-2xl font-bold text-primary-100 mb-2 flex items-center gap-2">
                        <Icon size={16} className="text-secondary-400" />
                        {step.title}
                      </h3>
                      <p className="text-primary-500 leading-relaxed text-sm">{step.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function renderSecurePlatform () {
    return (
      <section className="py-8 bg-primary-500 text-white text-center">
          <p className="font-medium text-sm">
            1000+ Partners • Secure Platform • India’s #1 Pre-IPO Marketplace
          </p>
        </section>
    )
  }

  function renderPartnerEarnings() {

  return (
    <section id="earn" className="px-6 lg:px-16 py-24 bg-primary-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            align="center"
            eyebrow="Earnings"
            title="See How Much You Can Earn"
            description="Flat 1.5% commission on every deal your referral closes. No hidden deductions — credited directly to your bank every month."
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1} y={40}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {earningCards.map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 text-center transition-all hover:-translate-y-1
                ${
                  card.highlight
                    ? "border-2 relative hover:shadow-[0_20px_50px_rgba(122,61,154,.12)]"
                    : "border border-primary-100 hover:border-primary-200 hover:shadow-[0_12px_32px_rgba(122,61,154,.08)]"
                } bg-white`}
                style={
                  card.highlight
                    ? {
                        borderColor: "#F9A24F",
                        boxShadow: "0 8px 30px rgba(249,162,79,.1)"
                      }
                    : {}
                }
              >

                {card.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="inline-block font-semibold uppercase tracking-widest text-[.6rem] px-3 py-1 rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#F9A24F,#C47222)",
                        color: "#fff"
                      }}
                    >
                      Most Common
                    </span>
                  </div>
                )}

                <div className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-4">
                  Your Referral Invests
                </div>
                <div className="text-4xl font-bold text-primary-800 mb-1">{card.invest}</div>
                <div className="text-primary-300 text-sm mb-6">{card.label}</div>
                <div className="h-px bg-primary-50 mb-6"></div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-2">
                  You Earn
                </div>
                <div className="text-4xl font-bold text-secondary-500 mb-1">{card.earn}</div>
                <div className="text-primary-400 text-xs">@ 1.5% commission</div>
              </div>

            ))}

          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2} y={40}>
          <div className="bg-white border border-primary-100 rounded-2xl p-7 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-secondary-50 border border-secondary-100 flex items-center justify-center flex-shrink-0">
              <Calculator size={20} className="text-secondary-600" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="font-bold text-primary-900 text-xl mb-1">
                Refer multiple clients and it compounds fast
              </div>

              <div className="text-primary-500 text-sm">
                5 clients × ₹50L average =
                <span className="font-bold text-secondary-600">
                  {" "}₹3.75L earned
                </span>{" "}
                in a single month. Payouts are direct bank transfer, every
                month without a minimum threshold.
              </div>

            </div>

            <Button
              variant="primary"
              className="flex-shrink-0 px-7 py-3.5 text-sm flex items-center gap-2 whitespace-nowrap"
              onClick={() =>
                document
                  .getElementById("apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Handshake size={16} />
              Start Earning
            </Button>

          </div>

        </AnimatedSection>


        {/* Disclaimer */}

        <AnimatedSection delay={0.3}>

          <p className="text-center text-primary-400 text-xs mt-5 flex items-center justify-center gap-1.5">

            <Info size={12} />

            Commission calculated on gross transaction value.
            GST applicable as per current rates.

          </p>

        </AnimatedSection>

      </div>

    </section>
  );
}

function renderPartnerApply() {
  return (
    <section
      id="apply"
      className="px-6 lg:px-16 py-24"
      style={{ background: "#0D0812" }}
    >
      <div className="max-w-2xl mx-auto">

        {/* Title */}

        <AnimatedSection>
          <SectionTitle
            theme="dark"
            align="center"
            eyebrow="Apply Now"
            title="Start Your Partner Journey"
            description="Fill in the details below. Our team will reach out within 24 hours to guide you through the rest."
          />
        </AnimatedSection>
        {/* Form */}

        <AnimatedSection delay={0.1} y={40}>
          <div className="glass-card noise rounded-2xl p-8 lg:p-10">
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <User size={12} /> Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Rohit Khandelwal"
                    className="inp-dark"
                  />
                </div>


                {/* Phone */}
                <div>
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Phone size={12} /> Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="inp-dark"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Mail size={12} /> Email
                  </label>

                  <input
                    type="email"
                    placeholder="rohit@example.com"
                    className="inp-dark"
                  />
                </div>


                {/* Profession */}
                <div>
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Briefcase size={12} /> Current Profession
                  </label>

                  <input
                    type="text"
                    placeholder="Financial Advisor, CA, Banker…"
                    className="inp-dark"
                  />
                </div>


                {/* Program */}
                <div className="md:col-span-2">
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Layers size={12} /> Partnership Program
                  </label>

                  <select
                    className="inp-dark"
                    style={{ background: "rgba(255,255,255,.04)" }}
                  >
                    <option>Select a program…</option>
                    <option>Referral Partner</option>
                    <option>Wealth Distributor</option>
                    <option>Institutional Alliance</option>
                  </select>
                </div>


                {/* Client Base */}
                <div className="md:col-span-2">
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Users size={12} /> Estimated Client Base
                  </label>

                  <select
                    className="inp-dark"
                    style={{ background: "rgba(255,255,255,.04)" }}
                  >
                    <option>Select range…</option>
                    <option>Less than 25 clients</option>
                    <option>25 – 100 clients</option>
                    <option>100 – 500 clients</option>
                    <option>500+ clients</option>
                  </select>
                </div>

              </div>


              {/* Message */}

              <div className="mb-7">
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <MessageCircle size={12} /> Tell Us About Yourself
                </label>

                <textarea
                  rows={3}
                  placeholder="Your background, why you'd like to partner, any specific requirements…"
                  className="inp-dark resize-none"
                ></textarea>
              </div>


              {/* Submit */}

              <Button
                variant="secondary"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <Send size={16} /> Submit Application
              </Button>


              {/* Footer Info */}

              <div className="flex items-center justify-center gap-6 mt-5 text-xs text-primary-600">

                <span className="flex items-center gap-1.5">
                  <Lock size={12} /> Confidential
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> 24hr response
                </span>

                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={12} /> No commitment
                </span>

              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}



  return (
    <main>
      <div className="w-full text-gray-800">
        {renderHero()}
        {renderBenefits()}
        {renderProcess()}
        <Testimonials />
        {renderSecurePlatform()}
        {renderPartnerEarnings()}
        {renderPartnerApply()}
        <FAQ 
          title="Frequently Asked"
          highlightedTitle="Questions"
          subtitle="Everything you need to know before investing with Econexx Wealth."
          data={partnerFaqs} 
        />

        {/* <ContactSection /> */}
      </div>
    </main>
  );
}
