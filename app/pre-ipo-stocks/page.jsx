"use client";
import { useEffect, useState } from "react";
import { getIcon } from "@/utils/iconMap";

import { Search, Info, AlertTriangle, UserCheck, CheckCircle, Clock, ShieldCheck, Lock, Rocket, Send, User, Phone, Mail, Building, IndianRupee } from "lucide-react";

import PageLoader from '@/components/PageLoader';
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/Faq";

import { useRouter } from "next/navigation";
import DrhpStockCard from "./DrhpStockCard";

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {fetchPreIpoLanding, expressPreIpoInterest, fetchPreIpoCompanies
} from "@/store/action/preIpoActions";
import { resetInterestState } from "@/store/slices/preIpoSlice";

import { highlightLastWords } from "@/utils/helper"




export default function DrhpFiled() {

  const store = useSelector(connectToStore, shallowEqual);
  const dispatch = useDispatch()
  const router = useRouter();

  const isLoggedIn = true;

  const [activeFilter, setActiveFilter] = useState("all");
  const [form, setForm] = useState({
    company_id: "",
    full_name: "",
    phone: "",
    email: "",
    city: "",
    investment_budget: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      alert("Please login first");
      return;
    }

    // Basic validation
    if (!form.company_id || !form.full_name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    dispatch(expressPreIpoInterest(form));
  };


  useEffect(() => {
    dispatch(fetchPreIpoLanding());
    dispatch(fetchPreIpoCompanies());
  }, [dispatch]);


  useEffect(() => {
  if (store.interestSuccess) {
    setForm({
      company_id: "",
      full_name: "",
      phone: "",
      email: "",
      city: "",
      investment_budget: "",
    });

    dispatch(resetInterestState());
  }
}, [store.interestSuccess]);

  function renderHero() {
    const { landingData, loading } = store;
    const banner = landingData?.banner;
    if (loading) return null;

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
                    DRHP Filed
                  </span>
                  <span
                    className="inline-block font-semibold uppercase tracking-widest text-[.62rem] px-3 py-0.5 rounded-full text-secondary-400"
                    style={{
                      background: "rgba(196,114,34,.12)",
                      border: "1px solid rgba(249,162,79,.22)",
                    }}
                  >
                    Live Listings
                  </span>
                </div>

                <h1 className="heroTitle font-bold leading-[1.05] mb-6 text-primary-50">
                  {highlightLastWords(banner?.title, "gradBrand", 1)}
                </h1>

                <p className="text-primary-400 text-lg leading-relaxed max-w-lg mb-6">
                  {banner?.subtitle}
                </p>

                <AnimatedSection delay={0.3} y={30}>
                  <div className="fu3 flex gap-4 flex-wrap">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="flex items-center gap-2"
                      onClick={() =>
                        document
                          .getElementById("tracker")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <Search size={16} /> Browse Companies
                    </Button>

                    <Button
                      variant="ghost"
                      size="lg"
                      className="flex items-center gap-2"
                      onClick={() =>
                        document
                          .getElementById("what-drhp")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <Info size={16} />
                      What is DRHP?
                    </Button>

                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>



            {/* STATS */}
            <AnimatedSection delay={0.35} y={40}>
              <div className="grid grid-cols-2 gap-4 pb-2">
                {banner?.items.map((stat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-[.875rem]"
                    style={{
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(182,138,204,.1)",
                    }}
                  >
                    <div className="text-3xl font-bold text-secondary-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-primary-500 text-xs uppercase tracking-wider">
                      {stat.title}
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

  function renderWhatDrhp() {
    const { landingData, loading } = store;
    const how_it_works = landingData?.how_it_works;
    if (loading) return null;
    return (
      <section id="what-drhp" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionTitle
              align="center"
              eyebrow="Explainer"
              title={how_it_works?.title}
              description={how_it_works?.subtitle}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} y={40}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              <div
                className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px"
                style={{ background: "linear-gradient(90deg,#CFB3E0,#F9A24F)" }}
              />

              <div
                className="hidden md:block absolute top-10 left-[16.67%] right-[50%] h-px"
                style={{ background: "#CFB3E0" }}
              />

              <div
                className="hidden md:block absolute top-10 left-[50%] right-[16.67%] h-px"
                style={{ background: "linear-gradient(90deg,#CFB3E0,#F9A24F)" }}
              />
              {how_it_works?.items.map((item, i) => {
                const Icon = getIcon(item.icon);
                const BottomIcon = item.bottomIcon;

                return (
                  <div key={i} className="text-center px-8 pb-10 md:pb-0">
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10 bg-gradient-to-br from-[#F4EEF8] to-[#E6D9F0] border-2 border-[#CFB3E0]"
                    >
                      <Icon size={32} className="text-primary-500" />
                    </div>
                    <span className="inline-block bg-primary-50 border border-primary-100 text-primary-500 font-semibold uppercase tracking-[.1em] text-[.6rem] px-2.5 py-0.5 rounded-full mb-3">
                      Step {item.order}
                    </span>
                    <h3 className="font-bold text-primary-900 text-xl mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }


  function renderDrhpTracker(activeFilter, setActiveFilter) {
    const { landingData, loading } = store;

    const drhpData = landingData?.drhp_companies;
    const drhpCompanies = drhpData?.items || [];

    if (!landingData && loading) return null;

    // 🔽 Generate dynamic filters from API (based on sector)
    const filters = [
      "all",
      ...new Set(
        drhpCompanies.map((c) => c.sector?.toLowerCase()).filter(Boolean)
      ),
    ];

    // 🔽 Transform API → UI format
    const companies = drhpCompanies.map((item) => ({
      id: item.id,
      name: item.name,
      sector: item.sector,
      category: item.sector?.toLowerCase(), // ✅ using sector now
      price: `₹${item.pre_ipo_price}`,
      ipo: `₹${item.est_ipo_band}`,
      drhp: new Date(item.drhp_filing_date).toLocaleDateString(),
      min: `₹${item.min_investment}`,
      sub: item.subscription_percent || 0,
      tag: item.drhp_tag || item.drhp_status,
      status: item.drhp_status,
      logo_url: item.logo_url, // fallback icon
    }));

    // 🔽 Apply filter
    const filtered =
      activeFilter === "all"
        ? companies
        : companies.filter((c) => c.category === activeFilter);

    return (
      <section id="tracker" className="px-6 lg:px-16 py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <AnimatedSection>
            <SectionTitle
              align="center"
              eyebrow="Live Tracker"
              title={drhpData?.title}
              description={drhpData?.subtitle}
            />
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`fpill ${activeFilter === f ? "active" : ""}`}
                >
                  {f === "all"
                    ? "All"
                    : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((company, i) => (
              <div key={company.id || i}>
                <DrhpStockCard
                  company={company}
                  onInterest={() =>
                    document
                      .getElementById("interest")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderWhyPreIpo() {
    const { landingData, loading } = store;

    const whyData = landingData?.why_get_early;
    const benefits = whyData?.items || [];

    if (!landingData && loading) return null;

    return (
      <section className="px-6 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <AnimatedSection>
            <SectionTitle
              align="center"
              eyebrow="Why Pre-IPO"
              title={whyData?.title}
              description={whyData?.subtitle}
            />
          </AnimatedSection>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, i) => {
              const Icon = getIcon(item.icon);

              const isSecondary = i === 1;

              const box = isSecondary
                ? "bg-secondary-50 border-secondary-100"
                : "bg-primary-50 border-primary-100";

              const iconBox = isSecondary
                ? "border-secondary-100 text-secondary-600"
                : "border-primary-100 text-primary-500";

              const hover = isSecondary
                ? "hover:border-secondary-200 hover:shadow-[0_12px_32px_rgba(196,114,34,.08)]"
                : "hover:border-primary-200 hover:shadow-[0_12px_32px_rgba(122,61,154,.08)]";

              return (
                <AnimatedSection key={i} delay={0.1 + i * 0.08} y={40}>
                  <div
                    className={`border rounded-2xl p-8 transition-all hover:-translate-y-1 ${box} ${hover}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white border flex items-center justify-center mb-5 ${iconBox}`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="font-bold text-primary-900 mb-3 text-xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function renderPreIpoTrackRecord() {

    const records = [
      {
        company: "Zomato",
        sector: "Consumer · Food Delivery",
        entry: "₹52",
        listing: "₹126",
        gain: "+142%",
        bar: 72
      },
      {
        company: "Nykaa",
        sector: "Consumer · Beauty",
        entry: "₹850",
        listing: "₹2,001",
        gain: "+135%",
        bar: 88
      },
      {
        company: "Delhivery",
        sector: "Logistics · Supply Chain",
        entry: "₹280",
        listing: "₹493",
        gain: "+76%",
        bar: 55
      },
      {
        company: "Paytm",
        sector: "Fintech · Payments",
        entry: "₹1,100",
        listing: "₹1,950",
        gain: "+77%",
        bar: 30
      }
    ];

    return (
      <section className="px-6 lg:px-16 py-24 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionTitle
              align="center"
              eyebrow="Track Record"
              title="Pre-IPO Entry vs Listing Price"
              description="Past companies where UnlistedEdge investors entered at the pre-IPO stage and their eventual listing gains."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} y={40}>
            <div
              className="rounded-2xl heroSection hero-glow gridBgDark noise bg-primary-900 overflow-hidden"
              style={{ border: "1px solid rgba(182,138,204,.1)" }}
            >
              <div
                className="grid grid-cols-5 px-6 py-4 text-xs uppercase text-secondary-500 tracking-widest font-semibold"
                style={{
                  background: "rgba(255,255,255,.04)",
                  borderBottom: "1px solid rgba(182,138,204,.08)",
                }}
              >
                <div className="col-span-2">Company</div>
                <div className="text-right">Entry Price</div>
                <div className="text-right">Listing Price</div>
                <div className="text-right">Gain</div>
              </div>


              {/* Rows */}

              <div className="divide-y">

                {records.map((item, i) => (

                  <div
                    key={i}
                    className="grid grid-cols-5 px-6 py-5 items-center"
                    style={{
                      background: i % 2 === 0 ? "rgba(255,255,255,.02)" : "transparent"
                    }}
                  >
                    <div className="col-span-2">
                      <div className="font-semibold text-primary-100 text-sm">{item.company}</div>
                      <div className="text-primary-500 text-xs mt-0.5">{item.sector}</div>
                      <div className="mt-2 w-full max-w-[140px]">
                        <div className="gain-bar" style={{ width: `${item.bar}%` }} />
                      </div>
                    </div>
                    <div className="text-right text-lg font-bold text-primary-300">
                      {item.entry}
                    </div>


                    {/* Listing */}

                    <div className="text-right text-lg font-bold text-primary-100">
                      {item.listing}
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-secondary-400">{item.gain}</span>
                      <div className="text-primary-500 text-xs">at listing</div>
                    </div>
                  </div>
                ))}

              </div>
              <div
                className="px-6 py-4 flex items-center gap-2 text-xs text-white"
                style={{
                  background: "rgba(255,255,255,.03)",
                  borderTop: "1px solid rgba(182,138,204,.08)",
                }}
              >

                <Info size={14} className="flex-shrink-0" />
                Past performance is not indicative of future results. Entry prices
                are indicative pre-IPO averages. Listing prices as on Day 1 close.

              </div>

            </div>

          </AnimatedSection>

        </div>

      </section>
    );
  }

  function renderHowToInvestSteps() {
    const { landingData, loading } = store;

    const stepsData = landingData?.how_to_invest;
    const steps = stepsData?.items || [];

    if (!landingData && loading) return null;

    return (
      <section className="px-6 lg:px-16 py-24 heroSection hero-glow gridBgDark noise bg-primary-900">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionTitle
              theme="dark"
              align="center"
              eyebrow="Process"
              title={stepsData?.title}
              description={stepsData?.subtitle}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            {steps.map((step, i) => {
              const Icon = getIcon(step.icon);
              const isLast = i === steps.length - 1;

              return (
                <AnimatedSection key={i} delay={0.1 + i * 0.1} y={40}>
                  <div className="flex gap-6 items-start">

                    <div className="flex flex-col items-center">
                      <div className="step-dot">
                        {String(step.order).padStart(2, "0")}
                      </div>
                      {!isLast && <div className="step-line mt-2" />}
                    </div>

                    <div className={isLast ? "" : "pb-10"}>
                      <h3 className="text-2xl font-bold text-primary-100 mb-2 flex items-center gap-2">
                        <Icon size={16} className="text-secondary-400" />
                        {step.title}
                      </h3>

                      <p className="text-primary-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
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

 function renderRiskEligibility() {
  const { landingData, loading } = store;

  const data = landingData?.risk_eligibility;
  const risks = data?.risks || [];
  const eligibility = data?.eligibility || [];

  if (!landingData && loading) return null;

  return (
    <section className="px-6 lg:px-16 py-24 bg-white">
      <div className="max-w-5xl mx-auto">

        <AnimatedSection>
          <SectionTitle
            align="center"
            eyebrow="Know Before You Invest"
            title={data?.title}
            description={data?.subtitle}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} y={40}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Risks */}
            <div>
              <h3 className="font-serif font-bold text-primary-900 text-xl mb-6 flex items-center gap-2">
                <AlertTriangle size={20} className="text-secondary-500" />
                Key Risks
              </h3>

              <div className="space-y-5">
                {risks.map((risk, i) => (
                  <div key={i} className="risk-item">
                    <div className="font-semibold text-primary-800 text-sm mb-1">
                      {risk.title}
                    </div>
                    <p className="text-primary-500 text-xs leading-relaxed">
                      {risk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h3 className="font-serif font-bold text-primary-900 text-xl mb-6 flex items-center gap-2">
                <UserCheck size={20} className="text-primary-500" />
                Who Can Invest
              </h3>

              <div className="space-y-4">
                {eligibility.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-primary-50 border border-primary-100 rounded-xl"
                  >
                    <CheckCircle size={20} className="text-secondary-500 mt-0.5" />

                    <div>
                      <div className="font-semibold text-primary-800 text-sm">
                        {item.title}
                      </div>
                      <div className="text-primary-400 text-xs mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Minimum Investment */}
                {data?.eligibility?.find(e => e.title === "Minimum Investment") && (
                  <div className="flex items-start gap-3 p-4 bg-secondary-50 border border-secondary-100 rounded-xl">
                    <Info size={20} className="text-secondary-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary-800 text-sm">
                        Minimum Investment
                      </div>
                      <div className="text-primary-400 text-xs mt-0.5">
                        {data.eligibility.find(e => e.title === "Minimum Investment")?.description}
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

function renderExpressInterest() {
 
  const { companies, interestLoading,interestError,interestSuccess } = store;
  
  const budgets = [
    "₹10,000 – ₹50,000",
    "₹50,000 – ₹2,00,000",
    "₹2,00,000 – ₹10,00,000",
    "₹10,00,000+",
  ];
  const trustPoints = [
    { icon: Lock, label: "Confidential" },
    { icon: Clock, label: "24hr response" },
    { icon: ShieldCheck, label: "No commitment" },
  ];

  

  return (
    <section
      id="interest"
      className="px-6 lg:px-16 py-24  heroSection hero-glow gridBgDark noise bg-primary-900"
    >
      <div className="max-w-2xl mx-auto">

        <AnimatedSection>
          <SectionTitle
            theme="dark"
            align="center"
            eyebrow="Get In Early"
            title="Express Your Interest"
            description="Tell us which company interests you."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card noise rounded-2xl p-8 lg:p-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

              {/* Name */}
              <div>
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <User size={12} /> Full Name
                </label>
                <input
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  className="inp-dark"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Phone size={12} /> Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="inp-dark"
                  placeholder="9999999999"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Mail size={12} /> Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="inp-dark"
                  placeholder="email@example.com"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Building size={12} /> City
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="inp-dark"
                  placeholder="Mumbai"
                />
              </div>

              {/* Company */}
              <div className="md:col-span-2">
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Rocket size={12} /> Company
                </label>
                <select
                  name="company_id"
                  value={form.company_id}
                  onChange={handleChange}
                  className="inp-dark"
                >
                  <option value="">Select company</option>
                  {companies?.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="md:col-span-2">
                <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <IndianRupee size={12} /> Budget
                </label>
                <select
                  name="investment_budget"
                  value={form.investment_budget}
                  onChange={handleChange}
                  className="inp-dark"
                >
                  <option value="">Select budget</option>
                  {budgets.map((b, i) => (
                    <option key={i} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Submit */}
            <Button
              size="lg" 
              variant="secondary" 
              className="w-full mb-5 flex items-center justify-center gap-2"
              onClick={handleSubmit}
              disabled={interestLoading}

            >
              <Send size={16} />
              {interestLoading ? "Submitting..." : "Submit Expression of Interest"}
            </Button>

            {interestSuccess && (
                <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
                  ✅ Your interest has been submitted successfully!
                </div>
              )}

              {interestError && (
                <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
                  ❌ {interestError?.message || "Something went wrong. Please try again."}
                </div>
              )}

            {/* Trust */}
            <div className="flex justify-center gap-6 text-xs text-white/50">
              {trustPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <span key={i} className="flex items-center gap-1.5">
                    <Icon size={12} />
                    {item.label}
                  </span>
                );
              })}
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

if (store.loading) {
  return <PageLoader />;
}

  return (
    <>
      <main className="">

        {renderHero()}
        {renderWhatDrhp()}
        {renderDrhpTracker(activeFilter, setActiveFilter)}
        {renderWhyPreIpo()}
        {renderPreIpoTrackRecord()}
        {renderHowToInvestSteps()}
        {renderRiskEligibility()}
        {renderExpressInterest()}
        <FAQ
          title={store?.landingData?.faq?.title}
          //highlightedTitle="Questions"
          subtitle={store?.landingData?.faq?.subtitle}
          data={store?.landingData?.faq?.items}
        />




      </main>
    </>
  );
}

function connectToStore(store) {
  return {
    landingData: store.preIpoShares?.landingData,
    loading: store.preIpoShares?.loading,
    error: store.preIpoShares?.error,
    companies: store.preIpoShares?.companies,
    companiesLoading: store.preIpoShares?.companiesLoading,
    companiesError: store.preIpoShares?.companiesError,
    interestLoading: store.preIpoShares?.interestLoading,
    interestSuccess: store.preIpoShares?.interestSuccess,
    interestError: store.preIpoShares?.interestError,
  };
}
