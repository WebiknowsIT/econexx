'use client';

import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { request } from "@/services/Request";
import * as url from "@/utils/Url";




import {
  Clock, ShieldCheck, UserCheck,
  Phone, Mail, Headphones, User, MapPin, Tag,
  IndianRupee, MessageSquare, Send, Lock,
  Building2, Users, Share2, Linkedin, Twitter,
  Instagram, Youtube, CheckCircle, Facebook
} from 'lucide-react';

import { useDispatch, useSelector } from "react-redux";

import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import Button from "@/components/ui/Button";
import '@/styles/contact.css';

const API = request(url.BASE_URL);


const HERO_DATA = {
  tagline: 'Get In Touch',
  headline: ["We'd Love to", 'Hear From', 'You.'],
  subtext:
    "Whether you're an investor with a question, a partner looking to collaborate, or just curious about unlisted equities — our team is here and happy to help.",
  promises: [
    { Icon: ShieldCheck, text: 'Your details are', highlight: '100% confidential' },
    { Icon: UserCheck, text: 'Speak directly with a', highlight: 'senior advisor' },
  ],
  stats: [
    { value: '600+', label: 'Happy Investors' },
    { value: '24 hours', label: 'Response Time' },
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
  timePills: ['Morning (9–12)', 'Afternoon (12–4)', 'Evening (4–7)', 'Anytime'],
};

const SIDEBAR_DATA = {
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', time: null },
  ],
  desks: [
    { initials: 'IN', name: 'Investor Relations', email: 'invest@econexx.com', color: 'purple' },
    { initials: 'PA', name: 'Partner Alliances', email: 'partner@econexx.com', color: 'orange' },
    { initials: 'CS', name: 'Customer Support', email: 'support@econexx.com', color: 'purple' },
  ],
};

const SOCIAL_ICONS = {
  facebook: { Icon: Facebook, label: "Facebook" },
  twitter: { Icon: Twitter, label: "Twitter / X" },
  linkedin: { Icon: Linkedin, label: "LinkedIn" },
  instagram: { Icon: Instagram, label: "Instagram" },
  youtube: { Icon: Youtube, label: "YouTube" },
};

export default function ContactPage() {

  const dispatch = useDispatch();
  const { footer, footerStatus } = useSelector((state) => state.company);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    city: "",
    talk_about: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [selectedTime, setSelectedTime] = useState('Afternoon (12–4)');
  const [openIndex, setOpenIndex] = useState(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmitAPI = async () => {

  if (!form.full_name.trim()) {toast.error("Full name required");
    return;
  }

  if (!form.phone.trim()) {toast.error("Phone required");
    return;
  }

  if (!form.email.trim()) {toast.error("Email required");
    return;
  }

  if (!isValidEmail(form.email)) {toast.error("Invalid email");
    return;
  }

  if (!form.talk_about.trim()) {toast.error("Select topic");
    return;
  }

  try {
    setLoading(true);

    const res = await API.post("/api/contact", form);

    if (res?.success) {
      toast.success("Message sent successfully");
      setForm({
        full_name: "",
        phone: "",
        email: "",
        city: "",
        talk_about: "",
        message: "",
      });
    } else {
      toast.error(res?.message || "Something went wrong");
    }

  } catch (error) {
    toast.error(error?.message || error?.errors?.message?.[0] || "Network error");
  } finally {
    setLoading(false);
  }
};


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
                      {p.text}{''}
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
                    <span className="text-primary-400 text-xs uppercase tracking-widest">
                      Helpline
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary-50">
                    {footer?.site_info?.contact_phone || "+91 8010009625"}
                  </div>
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
                  <div className="text-2xl font-bold text-primary-50">
                    {footer?.site_info?.contact_email || "info@econexxwealth.com"}
                  </div>
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

  function renderContactForm() {
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
                          value={form.full_name}
                          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
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
                        value={form.talk_about}
                        onChange={(e) => setForm({ ...form, talk_about: e.target.value })}
                        className={`inp${errors.topic ? ' error' : ''}`}
                      >
                        <option value="">Select a topic…</option>
                        {FORM_DATA.topics.map((t) => <option key={t}>{t}</option>)}
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
                      onClick={handleSubmitAPI}
                      disabled={loading}
                    >
                      <Send className="w-4 h-4" />{loading ? "Sending..." : "Send Message"}
                    </Button>

                    <div className="flex items-center justify-center gap-6 text-xs text-primary-400">
                      <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> Confidential</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 24hr reply</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> No spam ever</span>
                    </div>
                  </div>
                
              </AnimatedSection>
            </div>
            <div className="space-y-5">
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
                      <div className="font-semibold text-primary-800 text-sm">
                        {footer?.site_info?.site_name || "EconexxWealth"}
                      </div>
                      <div className="text-primary-400 text-xs">Mumbai, India</div>
                    </div>
                  </div>
                  <p className="text-primary-600 text-sm leading-relaxed mb-4">
                    Registered Address: {" "}{footer?.site_info?.office_address || "NA"}
                  </p>
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
                    {footer?.social?.map(({ label, url }) => {
                      const social = SOCIAL_ICONS[label.toLowerCase()];
                      if (!social) return null;
                      const { Icon, label: displayLabel } = social;
                      return (
                        <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="social-pill">
                          <Icon className="w-3.5 h-3.5" /> {displayLabel}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main>
      {renderHero()}
      {renderContactForm()}
    </main>
  );
}
