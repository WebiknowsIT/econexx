'use client';

import { useState, useEffect } from 'react';
import {
  Clock, ShieldCheck, UserCheck,
  Phone, Mail, Headphones, User, MapPin, Tag,
  IndianRupee, MessageSquare, Send, Lock,
  Building2, Users, Share2, Linkedin, Twitter,
  Instagram, Youtube, CheckCircle,
} from 'lucide-react';

import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import FAQ from "@/components/ui/Faq";
import Button from "@/components/ui/Button";

import '@/styles/contact.css';

// ─── DUMMY DATA ────────────────────────────────────────────────────────────────

const HERO_DATA = {
  tagline:  'Get In Touch',
  headline: ["We'd Love to", 'Hear From', 'You.'],
  subtext:
    "Whether you're an investor with a question, a partner looking to collaborate, or just curious about unlisted equities — our team is here and happy to help.",
  promises: [
    { Icon: Clock,       text: 'Typical response time:', highlight: 'under 24 hours'    },
    { Icon: ShieldCheck, text: 'Your details are',       highlight: '100% confidential' },
    { Icon: UserCheck,   text: 'Speak directly with a',  highlight: 'senior advisor'    },
  ],
  stats: [
    { value: '600+', label: 'Happy Investors' },
    { value: '< 25  Mins',   label: 'Response Time'   },
  ],
};

const FORM_DATA = {
  topics: [
    'Investing in Unlisted Shares',
    'Pre-IPO Opportunities',
    'Bond Investments',
    'Partner / Referral Program',
    'Selling My Unlisted Shares',
    'Account / KYC Issue',
    'Something Else',
  ],
  budgets: [
    '₹10,000 – ₹1,00,000',
    '₹1,00,000 – ₹5,00,000',
    '₹5,00,000 – ₹25,00,000',
    '₹25,00,000+',
  ],
  timePills: ['Morning (9–12)', 'Afternoon (12–4)', 'Evening (4–7)', 'Anytime'],
};

const SIDEBAR_DATA = {
  office: {
    name:    'Headquarters',
    city:    'Mumbai, India',
    address: ['Registered Address: 09,', 'Swami Samarth Krupa, Taloja By Pass,', 'Near Hotel Nisarg, Dombivali East, Thane, Maharashtra - 421204'],
  },
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday',        time: '10:00 AM – 5:00 PM' },
    { day: 'Sunday',          time: null },
  ],
  desks: [
    { initials: 'IN', name: 'Investor Relations', email: 'invest@econexx.com',  color: 'purple' },
    { initials: 'PA', name: 'Partner Alliances',  email: 'partner@econexx.com', color: 'orange' },
    { initials: 'CS', name: 'Customer Support',   email: 'support@econexx.com', color: 'purple' },
  ],
  socials: [
    { Icon: Linkedin,  label: 'LinkedIn'    },
    { Icon: Twitter,   label: 'Twitter / X' },
    { Icon: Instagram, label: 'Instagram'   },
    { Icon: Youtube,   label: 'YouTube'     },
  ],
};

const contactFaqs = [
  {
    id: 1,
    question: "How can I contact Econexx?",
    answer: (
      <p>
        You can contact the Econexx team through the contact form on this
        page, by email, or by calling our support number. Our team will
        respond to your inquiry and guide you with the appropriate
        information regarding investments, partnerships, or general
        assistance.
      </p>
    ),
  },
  {
    id: 2,
    question: "How quickly will I receive a response?",
    answer: (
      <p>
        We typically respond to all inquiries within 24 hours during
        business days. For urgent investment or transaction-related
        queries, our team may reach out even sooner to assist you.
      </p>
    ),
  },
  {
    id: 3,
    question: "Can I schedule a consultation with your team?",
    answer: (
      <p>
        Yes. You can request a consultation through the contact form.
        One of our investment specialists will connect with you to
        discuss pre-IPO opportunities, bonds, or other investment
        options based on your requirements.
      </p>
    ),
  },
  {
    id: 4,
    question: "What information should I include in my inquiry?",
    answer: (
      <p>
        When submitting a contact request, it is helpful to include your
        name, phone number, email, and a brief description of your
        query. This helps our team understand your requirements and
        provide a more accurate response.
      </p>
    ),
  },
  {
    id: 5,
    question: "Can I contact Econexx for partnership or business inquiries?",
    answer: (
      <p>
        Absolutely. If you are interested in partnerships, collaborations,
        or institutional opportunities, you can mention it in your message.
        Our partnership team will review your request and get in touch
        with you.
      </p>
    ),
  },
  {
    id: 6,
    question: "Is my information kept confidential?",
    answer: (
      <p>
        Yes. All information submitted through our contact form is kept
        strictly confidential and used only to respond to your inquiry.
        We do not share your personal information with third parties
        without your consent.
      </p>
    ),
  },
];




function renderHero() {
  return (
    <section className="heroSection hero-glow gridBgDark noise bg-primary-900 relative py-14 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full border float-anim"
        style={{ borderColor: 'rgba(122,61,154,.1)' }} />
      <div className="absolute top-40 right-32 w-56 h-56 rounded-full border"
        style={{ borderColor: 'rgba(182,138,204,.06)' }} />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border"
        style={{ borderColor: 'rgba(122,61,154,.07)' }} />
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-6">
                <span className="tag-dark">{HERO_DATA.tagline}</span>
                <span className="tag-sec">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
                  We reply in 24hrs
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <h1 className="font-bold leading-[1.04] mb-6 text-primary-50"
                style={{ fontSize: 'clamp(1rem, 5vw, 3.5rem)' }}
              >
                {HERO_DATA.headline[0]} {' '}
                {HERO_DATA.headline[1]}
                 <span className="grad-brand">{HERO_DATA.headline[2]}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.24}>
              <p className="text-primary-400 text-lg leading-relaxed max-w-lg mb-10">
                {HERO_DATA.subtext}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.36}>
              <div className="flex flex-col gap-3">
                {HERO_DATA.promises.map((p) => (
                  <div key={p.highlight} className="flex items-center gap-3 text-primary-300 text-sm">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(122,61,154,.2)', border: '1px solid rgba(182,138,204,.2)' }}
                    >
                      <p.Icon className="w-4 h-4" />
                    </div>
                    {p.text}{' '}
                    <span className="text-secondary-400 font-semibold ml-1">{p.highlight}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* right: contact grid */}
          <AnimatedSection delay={0.18}>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="col-span-2 p-5 rounded-[.875rem]"
                style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(182,138,204,.1)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-4 h-4 text-secondary-400" />
                  <span className="text-primary-400 text-xs uppercase tracking-widest">Helpline</span>
                </div>
                <div className="text-2xl font-bold text-primary-50">+91 8108181602</div>
                <div className="text-primary-500 text-xs mt-1">Mon–Sat · 9 AM – 7 PM IST</div>
              </div>

              <div
                className="col-span-2 p-5 rounded-[.875rem]"
                style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(182,138,204,.1)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-4 h-4 text-secondary-400" />
                  <span className="text-primary-400 text-xs uppercase tracking-widest">Email</span>
                </div>
                <div className="text-2xl font-bold text-primary-50">team@econexxwealth.com</div>
                <div className="text-primary-500 text-xs mt-1">General enquiries</div>
              </div>

              {HERO_DATA.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-[.875rem]"
                  style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(182,138,204,.1)' }}
                >
                  <div className="text-3xl font-bold text-secondary-400 mb-1">{s.value}</div>
                  <div className="text-primary-500 text-xs uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

function renderContactForm({
  form, setForm, errors, setErrors,
  submitted, setSubmitted,
  selectedTime, setSelectedTime,
}) {
  const required = ['name', 'phone', 'email', 'topic'];

  function handleSubmit() {
    const newErrors = {};
    required.forEach((k) => { if (!form[k]?.trim()) newErrors[k] = true; });
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: '', phone: '', email: '', city: '', topic: '', budget: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setSelectedTime('Afternoon (12–4)');
  }

  return (
    <section id="contact-form" className="px-6 lg:px-16 py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <AnimatedSection>
              <SectionTitle
                //align="center"
                eyebrow="Send a Message"
                title="Tell Us What You Need"
                description="Fill in the form and one of our advisors will get back to you personally within 24 hours."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              {!submitted ? (
                <div className="rounded-2xl p-8 lg:p-10 border border-primary-100 bg-white/70">

                  {/* name + phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <User className="w-3 h-3" /> Full Name <span className="text-secondary-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`inp${errors.name ? ' error' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Phone className="w-3 h-3" /> Phone <span className="text-secondary-600">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`inp${errors.phone ? ' error' : ''}`}
                      />
                    </div>
                  </div>

                  {/* email + city */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Mail className="w-3 h-3" /> Email <span className="text-secondary-600">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`inp${errors.email ? ' error' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> City
                      </label>
                      <input
                        type="text"
                        placeholder="Mumbai, Delhi, Bangalore…"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="inp"
                      />
                    </div>
                  </div>

                  {/* topic */}
                  <div className="mb-5">
                    <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Tag className="w-3 h-3" /> I want to talk about <span className="text-secondary-600">*</span>
                    </label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className={`inp${errors.topic ? ' error' : ''}`}
                    >
                      <option value="">Select a topic…</option>
                      {FORM_DATA.topics.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* budget */}
                  <div className="mb-5">
                    <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <IndianRupee className="w-3 h-3" /> Investment Budget (optional)
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="inp"
                    >
                      <option value="">Select range…</option>
                      {FORM_DATA.budgets.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>

                  {/* message */}
                  <div className="mb-7">
                    <label className="block text-xs text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3" /> Your Message
                    </label>
                    <textarea
                      placeholder="Tell us more about what you're looking for, any specific companies or questions you have…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="inp"
                    />
                  </div>

                  <Button
                    size="lg"
                    variant="secondary"
                    type="button"
                    className="w-full flex items-center justify-center gap-2 mb-5"
                    onClick={handleSubmit}
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </Button>

                  <div className="flex items-center justify-center gap-6 text-xs text-primary-400">
                    <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> Confidential</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 24hr reply</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> No spam ever</span>
                  </div>
                </div>
              ) : (
                /* success state */
                <div
                  className="flex flex-col items-center justify-center text-center py-16 px-8 border border-primary-100 rounded-2xl"
                  style={{ background: '#F4EEF8' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(34,197,94,.1)', border: '2px solid rgba(34,197,94,.25)' }}
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 mb-3">Message Sent!</h3>
                  <p className="text-primary-500 leading-relaxed max-w-sm">
                    Thank you for reaching out. One of our advisors will call or email you within 24 hours.
                  </p>
                  <button className="btn-cta px-8 py-3 rounded-xl text-sm mt-8" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* ── RIGHT: INFO SIDEBAR ── */}
          <div className="space-y-5">

            {/* office */}
            <AnimatedSection>
              <div className="office-card !bg-white/70 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(122,61,154,.12)', border: '1px solid rgba(182,138,204,.2)' }}
                  >
                    <Building2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-800 text-sm">{SIDEBAR_DATA.office.name}</div>
                    <div className="text-primary-400 text-xs">{SIDEBAR_DATA.office.city}</div>
                  </div>
                </div>
                <p className="text-primary-600 text-sm leading-relaxed mb-4">
                  {SIDEBAR_DATA.office.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < SIDEBAR_DATA.office.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                {/* <a href="#map" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-500 hover:text-primary-700 transition-colors no-underline">
                  <MapPin className="w-3 h-3" /> View on map ↓
                </a> */}
              </div>
            </AnimatedSection>

            {/* hours */}
            <AnimatedSection delay={0.08}>
              <div className="office-card !bg-white/70 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(196,114,34,.1)', border: '1px solid rgba(249,162,79,.2)' }}
                  >
                    <Clock className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div className="font-semibold text-primary-800 text-sm">Working Hours</div>
                </div>
                <div className="space-y-2.5">
                  {SIDEBAR_DATA.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-primary-500">{h.day}</span>
                      <span className={`font-semibold ${h.time ? 'text-primary-800' : 'text-primary-400'}`}>
                        {h.time ?? 'Closed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* desks */}
            <AnimatedSection delay={0.16}>
              <div className="office-card !bg-white/70 p-7">
                <div className="font-semibold text-primary-800 text-sm mb-5 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary-400" /> Dedicated Desks
                </div>
                <div className="space-y-4">
                  {SIDEBAR_DATA.desks.map((d) => (
                    <div key={d.initials} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                        style={
                          d.color === 'orange'
                            ? { background: 'linear-gradient(135deg,#F9A24F,#C47222)', color: '#0D0812' }
                            : { background: 'linear-gradient(135deg,#7A3D9A,#9A5FB5)', color: '#fff' }
                        }
                      >
                        {d.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary-800">{d.name}</div>
                        <div className="text-xs text-primary-400">{d.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* socials */}
            <AnimatedSection delay={0.24}>
              <div className="office-card !bg-white/70 p-7">
                <div className="font-semibold text-primary-800 text-sm mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-primary-400" /> Follow Us
                </div>
                <div className="flex flex-wrap gap-2">
                  {SIDEBAR_DATA.socials.map((s) => (
                    <a key={s.label} href="#" className="social-pill">
                      <s.Icon className="w-3.5 h-3.5" /> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [form, setForm]                   = useState({ name: '', phone: '', email: '', city: '', topic: '', budget: '', message: '' });
  const [errors, setErrors]               = useState({});
  const [submitted, setSubmitted]         = useState(false);
  const [selectedTime, setSelectedTime]   = useState('Afternoon (12–4)');
  const [openIndex, setOpenIndex]         = useState(null);

  return (
    <main>
      {renderHero()}
      {renderContactForm({ form, setForm, errors, setErrors, submitted, setSubmitted, selectedTime, setSelectedTime })}
      <FAQ 
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know before investing with Econexx Wealth."
        data={contactFaqs} 
      />
    </main>
  );
}
