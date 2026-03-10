"use client";
import { useState } from "react";

import { Info, Search ,FileText, ShieldCheck, TrendingUp, Clock ,
  CreditCard,
  GraduationCap,
  Landmark,
  Headphones,
  HeartPulse,
  Zap, 
  Tag,
  UserCheck,
  IndianRupee,
  AlertTriangle,
  CheckCircle,
  User,
  Phone,
  Mail,
  Building,
  Rocket,
  Send,
  Lock,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

import NewsCard from "../../components/NewsCard";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/Faq";

import Accordion from "@/components/ui/Accordion";

import { useRouter } from "next/navigation";
import DrhpStockCard from "./DrhpStockCard";



const stocks = [
  {
    id: 1,
    title: "A V Thomas & Co. Limited",
    category: "Unlisted Shares",
    price: "12500",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/ags_transact.jpg",
  },
  {
    id: 2,
    title: "ADIANCE TECHNOLOGIES",
    category: "Unlisted Shares",
    price: "2250",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/anand_rathi.jpg",
  },
  {
    id: 3,
    title: "Adtech Systems Limited",
    category: "Unlisted Shares",
    price: "65",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/aptus_value.jpg",
  },
  {
    id: 4,
    title: "Ambadi Investments Limited (Murugappa)",
    category: "Unlisted Shares",
    price: "0",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/barbeque_nation.png",
  },
  {
    id: 5,
    title: "Amol Minechem Limited",
    category: "Unlisted Shares",
    price: "900",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/csb-logo.png",
  },
  {
    id: 6,
    title: "Anglo-French Drugs & Industries Ltd",
    category: "Unlisted Shares",
    price: "0",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/csk_unlisted_shares.jpg",
  },
  {
    id: 7,
    title: "Anheuser Busch Inbev (Sabmiller) India Ltd",
    category: "Unlisted Shares",
    price: "475",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/delhivery.png",
  },
  {
    id: 8,
    title: "Anugraha Valve Castings Limited",
    category: "Unlisted Shares",
    price: "595",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/fractal_analytics.png",
  },
  {
    id: 9,
    title: "APL Metals Unlisted Shares",
    category: "Unlisted Shares",
    price: "18",
    change: "+12.5%",
    duration: "15D",
    badge: "ACTIVE",
    logo: "/images/stocks/nazara_tech-logo.png",
  },
  {
    id: 10,
    title: "Apollo Fashion International",
    category: "Unlisted Shares",
    price: "52",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/nse.png",
  },
  {
    id: 11,
    title: "Apollo Green Energy Limited",
    category: "Unlisted Shares",
    price: "84",
    change: "-2.33%",
    duration: "15D",
    badge: "VOLATILE",
    logo: "/images/stocks/pashupati_polytex.jpg",
  },
  {
    id: 12,
    title: "Arch Pharmalabs Limited",
    category: "Unlisted Shares",
    price: "85",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/paytm-logo.png",
  },
];

const NEWS_LIST = [
  {
    id: 1,
    title: "IKF Finance signals massive growth phase with new equity infusion",
    description:
      "SBI General Insurance operates on a straightforward model—collect premiums, pay claims over time, and invest the interim funds.",
    date: "03 Feb, 2026",
    views: 8,
    likes: 0,
    image: "/images/blog1.jpg",
    slug: "sbi-general-insurance-9mfy25-results",
  },
  {
    id: 2,
    title: "PlasmaGen Biosciences raises ₹150 Crore for global expansion",
    description:
      "Hero FinCorp, the NBFC arm of the Hero group, released its financials for the nine months ended December 2025.",
    date: "02 Feb, 2026",
    views: 91,
    likes: 2,
    image: "/images/blog2.jpg",
    slug: "hero-fincorp-9mfy26-results",
  },
  {
    id: 3,
    title: "How to safeguard your unlisted investments from online frauds",
    description:
      "After nearly a decade of waiting and regulatory hurdles, NSE is finally preparing to go public.",
    date: "31 Jan, 2026",
    views: 7169,
    likes: 8,
    image: "/images/blog3.jpg",
    slug: "nse-ipo-unlisted-market",
  },
];

const FaqData = [
  {
    "id": 1,
    "question": "What is a Draft Red Herring Prospectus (DRHP)?",
    "answer": "A Draft Red Herring Prospectus (DRHP) is a preliminary document filed by a company with SEBI before launching an IPO. It contains detailed information about the company’s business operations, financials, risks, and objectives of the issue, but does not include the final issue price or share quantity."
  },
  {
    "id": 2,
    "question": "Why is the DRHP important for investors in unlisted shares?",
    "answer": "The DRHP helps investors evaluate a company’s fundamentals, growth prospects, risks, and financial health before investing in its unlisted shares. It offers transparency and allows informed decision-making ahead of a potential IPO."
  },
  {
    "id": 3,
    "question": "How can I access a company’s DRHP?",
    "answer": "A company’s DRHP can be accessed on the SEBI website, stock exchange portals, or directly from the company’s official website once it is filed."
  },
  {
    "id": 4,
    "question": "What key information should I look for in a DRHP?",
    "answer": "Key information in a DRHP includes company overview, business model, industry analysis, financial statements, risk factors, management details, use of IPO proceeds, and legal or regulatory disclosures."
  },
  {
    "id": 5,
    "question": "Should I buy unlisted shares after the filing of DRHP?",
    "answer": "Buying unlisted shares after DRHP filing depends on factors such as company fundamentals, valuation, IPO prospects, and market conditions. Investors should assess risks carefully or consult a financial advisor before investing."
  }
];



export default function DrhpFiled() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");

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
                  Invest Before the IPO. <span className="gradBrand">Get In Early.</span>
                </h1>

                <p className="text-primary-400 text-lg leading-relaxed max-w-lg mb-6">
                 Access shares of companies that have filed their DRHP with SEBI — before they list on the exchange. Lock in pre-IPO prices and ride the listing gains.
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
                    <Search size={16} /> Browse Companies
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
                {[
                  { num: "24+", label: "DRHP Filed Companies" },
                  { num: "2.4×", label: "Avg. Listing Gain" },
                  { num: "₹10K", label: "Min. Investment"},
                  { num: "SEBI", label: "Registered Platform" },
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

  function renderWhatDrhp() {

  const steps = [
    {
      step: "Step 01",
      title: "DRHP Filed",
      icon: FileText,
      desc: "Company files a detailed prospectus with SEBI — financials, business model, risks, and IPO size all disclosed publicly.",
      bottomIcon: Clock,
      bottomText: "This is your entry window",
      iconStyle: {
        background: "linear-gradient(135deg,#F4EEF8,#E6D9F0)",
        border: "2px solid #CFB3E0"
      }
    },
    {
      step: "Step 02",
      title: "SEBI Review",
      icon: ShieldCheck,
      desc: "SEBI scrutinises the DRHP and issues observations. Company may revise pricing and lot size. Typically takes 30–75 days.",
      bottomIcon: Search,
      bottomText: "Regulatory due diligence",
      iconStyle: {
        background: "linear-gradient(135deg,#FFF4E8,#FFE6CC)",
        border: "2px solid #FFD1A3"
      }
    },
    {
      step: "Step 03",
      title: "IPO & Listing",
      icon: TrendingUp,
      desc: "Company opens for public subscription and lists on NSE/BSE. Pre-IPO investors who entered early see their position at listing price.",
      bottomIcon: TrendingUp,
      bottomText: "Listing gains realised here",
      highlight: true,
      iconStyle: {
        background: "linear-gradient(135deg,#F4EEF8,#CFB3E0)",
        border: "2px solid #9A5FB5"
      }
    }
  ];


  return (
    <section id="what-drhp" className="px-6 lg:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            align="center"
            eyebrow="Explainer"
            title="What is a DRHP?"
            description="A Draft Red Herring Prospectus is the first public signal that a company is heading to the stock market. It's the window where smart investors get in."
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
            {steps.map((item, i) => {

              const Icon = item.icon;
              const BottomIcon = item.bottomIcon;

              return (
                <div key={i} className="text-center px-8 pb-10 md:pb-0">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10" style={item.iconStyle}
                  >
                    <Icon size={32} className="text-primary-500" />
                  </div>

                  <span className="inline-block bg-primary-50 border border-primary-100 text-primary-500 font-semibold uppercase tracking-[.1em] text-[.6rem] px-2.5 py-0.5 rounded-full mb-3">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-primary-900 text-xl mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                  <div
                    className={`mt-4 inline-flex items-center gap-1.5 text-xs 
                      ${item.highlight ? "text-secondary-600" : "text-primary-400"}`
                    }
                  >
                    <BottomIcon size={12} />
                    {item.bottomText}
                  </div>
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

    const companies = [
      {
        name: "Razorpay",
        sector: "Fintech · Payments",
        category: "tech",
        price: "₹480",
        ipo: "₹600–650",
        drhp: "Jan 2025",
        min: "₹48,000",
        sub: 78,
        tag: "Hot",
        status: "SEBI Under Review",
        icon: CreditCard
      },
      {
        name: "PhysicsWallah",
        sector: "Edtech · E-learning",
        category: "tech",
        price: "₹1,120",
        ipo: "₹1,400–1,500",
        drhp: "Feb 2025",
        min: "₹56,000",
        sub: 45,
        tag: "New",
        status: "SEBI Under Review",
        icon: GraduationCap
      },
      {
        name: "Navi Technologies",
        sector: "Finance · Insurance",
        category: "finance",
        price: "₹315",
        ipo: "₹390–420",
        drhp: "Dec 2024",
        min: "₹31,500",
        sub: 62,
        tag: "DRHP",
        status: "Awaiting Approval",
        icon: Landmark
      },
      {
        name: "boAt Lifestyle",
        sector: "Consumer · Electronics",
        category: "consumer",
        price: "₹720",
        ipo: "₹900–960",
        drhp: "Mar 2025",
        min: "₹36,000",
        sub: 89,
        tag: "Hot",
        status: "SEBI Under Review",
        icon: Headphones
      },
      {
        name: "Pristyn Care",
        sector: "Healthcare · MedTech",
        category: "healthcare",
        price: "₹890",
        ipo: "₹1,050–1,100",
        drhp: "Feb 2025",
        min: "₹44,500",
        sub: 33,
        tag: "New",
        status: "Awaiting Approval",
        icon: HeartPulse
      },
      {
        name: "Sterlite Power",
        sector: "Infra · Power Transmission",
        category: "infra",
        price: "₹560",
        ipo: "₹680–720",
        drhp: "Jan 2025",
        min: "₹28,000",
        sub: 54,
        tag: "DRHP",
        status: "SEBI Under Review",
        icon: Zap
      }
    ];

    const filtered =
      activeFilter === "all"
        ? companies
        : companies.filter(c => c.category === activeFilter);

    const filters = ["all","tech","finance","consumer","healthcare","infra"];


    return (
      <section id="tracker" className="px-6 lg:px-16 py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionTitle
              align="center"
              eyebrow="Live Tracker"
              title="DRHP Filed Companies"
              description="Companies that have recently filed or are awaiting SEBI approval. Available for pre-IPO investment now."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 justify-center mb-10">

              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`fpill ${activeFilter === f ? "active" : ""}`}
                >
                  {f === "all" ? "All" : f.charAt(0).toUpperCase()+f.slice(1)}
                </button>
              ))}
            </div>
          </AnimatedSection>


          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((company, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.05} y={40}>
                <DrhpStockCard
                  company={company}
                  onInterest={() =>
                    document
                      .getElementById("interest")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderWhyPreIpo() {

  const benefits = [
    {
      icon: Tag,
      title: "Lower Entry Price",
      desc: "Pre-IPO shares are priced before institutional demand inflates the band. You buy at a discount to the eventual listing price.",
      box: "bg-primary-50 border-primary-100",
      iconBox: "border-primary-100 text-primary-500",
      hover: "hover:border-primary-200 hover:shadow-[0_12px_32px_rgba(122,61,154,.08)]"
    },
    {
      icon: TrendingUp,
      title: "Listing Day Gains",
      desc: "Historical data shows DRHP-stage investors average 2.4× returns at listing. Public IPO allottees often see 20–40% — you see multiples.",
      box: "bg-secondary-50 border-secondary-100",
      iconBox: "border-secondary-100 text-secondary-600",
      hover: "hover:border-secondary-200 hover:shadow-[0_12px_32px_rgba(196,114,34,.08)]"
    },
    {
      icon: ShieldCheck,
      title: "SEBI Regulated Path",
      desc: "Unlike grey market, DRHP-filed companies are on a regulated IPO track. Full financials are public. No guesswork on the company's legitimacy.",
      box: "bg-primary-50 border-primary-100",
      iconBox: "border-primary-100 text-primary-500",
      hover: "hover:border-primary-200 hover:shadow-[0_12px_32px_rgba(122,61,154,.08)]"
    }
  ];

  return (
    <section className="px-6 lg:px-16 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            align="center"
            eyebrow="Why Pre-IPO"
            title="Why Getting In Early Wins"
            description="By the time an IPO opens for public subscription, the best gains are already priced in. Pre-IPO investors lock the advantage."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} delay={0.1 + i * 0.08} y={40}>
                <div
                  className={`border rounded-2xl p-8 transition-all hover:-translate-y-1 ${item.box} ${item.hover}`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-white border flex items-center justify-center mb-5 ${item.iconBox}`}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="font-bold text-primary-900 mb-3 text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
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
    <section className="px-6 lg:px-16 py-24 heroSection hero-glow gridBgDark noise bg-primary-900">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            theme="dark"
            align="center"
            eyebrow="Track Record"
            title="Pre-IPO Entry vs Listing Price"
            description="Past companies where UnlistedEdge investors entered at the pre-IPO stage and their eventual listing gains."
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1} y={40}>
          <div
            className="rounded-2xl overflow-hidden"
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
                  style={{background: i % 2 === 0 ? "rgba(255,255,255,.02)" : "transparent"
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
              style={{background: "rgba(255,255,255,.03)",
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

  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Browse & Select",
      desc: "Explore DRHP-filed companies above. Filter by sector, check pre-IPO price, estimated band, and subscription status. Express interest in what appeals to you."
    },
    {
      num: "02",
      icon: UserCheck,
      title: "Complete KYC",
      desc: "Submit PAN, Aadhaar, and demat details. Our team verifies your KYC digitally — typically completed within 24 hours. One-time process for all future investments."
    },
    {
      num: "03",
      icon: IndianRupee,
      title: "Transfer Funds",
      desc: "Transfer the investment amount via NEFT/RTGS. Shares are transferred to your demat account within T+2 days after fund confirmation."
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Hold & Exit at Listing",
      desc: "Shares sit in your demat until the IPO lists. On listing day, sell at market price on NSE/BSE — or hold for long-term upside. Fully your decision.",
      accent: true
    }
  ];

  return (
    <section className="px-6 lg:px-16 py-24" style={{ background: "#0D0812" }}>

      <div className="max-w-5xl mx-auto">

        {/* Title */}

        <AnimatedSection>
          <SectionTitle
           theme="dark"
            align="center"
            eyebrow="Process"
            title="How to Invest in 4 Steps"
            description="From browsing to owning shares — the entire process takes under 48 hours."
          />
        </AnimatedSection>


        {/* Steps */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">

          {steps.map((step, i) => {

            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <AnimatedSection key={i} delay={0.1 + i * 0.1} y={40}>

                <div className="flex gap-6 items-start">

                  {/* Step Number */}

                  <div className="flex flex-col items-center">

                    <div
                      className="step-dot"
                      style={
                        step.accent
                          ? { background: "linear-gradient(135deg,#F9A24F,#C47222)" }
                          : {}
                      }
                    >
                      {step.num}
                    </div>
                    {!isLast && <div className="step-line mt-2" />}
                  </div>

                  <div className={isLast ? "" : "pb-10"}>
                    <h3 className="text-2xl font-bold text-primary-100 mb-2 flex items-center gap-2">
                      <Icon size={16} className="text-secondary-400" />
                      {step.title}
                    </h3>
                    <p className="text-primary-500 text-sm leading-relaxed">{step.desc}</p>
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

  const risks = [
    {
      title: "IPO May Be Delayed or Withdrawn",
      desc: "SEBI can reject or ask for revisions. The company may also withdraw its DRHP. In such cases, your principal is returned but no gains accrue.",
      variant: "risk-warn"
    },
    {
      title: "Lock-in Period Applies",
      desc: "Pre-IPO shares cannot be sold until the company lists. The lock-in period typically ranges from 6 months post-IPO for non-anchor investors.",
      variant: "risk-warn"
    },
    {
      title: "Listing Price Not Guaranteed",
      desc: "Market conditions, sector sentiment, and macroeconomic factors can cause a stock to list below the IPO price. Past performance is not a guarantee.",
      variant: "risk-info"
    },
    {
      title: "Illiquid Until Listing",
      desc: "Pre-IPO shares are not freely tradeable. Only invest capital you can comfortably hold for 6–18 months without needing liquidity.",
      variant: "risk-info"
    }
  ];

  const eligibility = [
    {
      title: "Resident Indian Individuals",
      desc: "PAN card + active demat account required"
    },
    {
      title: "NRIs (NRE/NRO Account)",
      desc: "Subject to FEMA compliance and company-specific limits"
    },
    {
      title: "HUFs & Partnership Firms",
      desc: "Entity PAN and authorised signatory documentation needed"
    }
  ];

  return (
    <section className="px-6 lg:px-16 py-24 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* Title */}

        <AnimatedSection>
          <SectionTitle
            align="center"
            eyebrow="Know Before You Invest"
            title="Risk & Eligibility"
            description="We believe informed investors make better decisions. Read this before you invest."
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

                  <div key={i} className={`risk-item ${risk.variant}`}>

                    <div className="font-semibold text-primary-800 text-sm mb-1">
                      {risk.title}
                    </div>

                    <p className="text-primary-500 text-xs leading-relaxed">
                      {risk.desc}
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

                    <CheckCircle
                      size={20}
                      className="text-secondary-500 flex-shrink-0 mt-0.5"
                    />

                    <div>

                      <div className="font-semibold text-primary-800 text-sm">
                        {item.title}
                      </div>

                      <div className="text-primary-400 text-xs mt-0.5">
                        {item.desc}
                      </div>

                    </div>

                  </div>

                ))}


                {/* Minimum Investment */}

                <div className="flex items-start gap-3 p-4 bg-secondary-50 border border-secondary-100 rounded-xl">

                  <Info
                    size={20}
                    className="text-secondary-600 flex-shrink-0 mt-0.5"
                  />

                  <div>

                    <div className="font-semibold text-primary-800 text-sm">
                      Minimum Investment
                    </div>

                    <div className="text-primary-400 text-xs mt-0.5">
                      Varies by company — typically ₹10,000 to ₹1,00,000 per lot
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}

function renderExpressInterest() {

  const companies = [
    "Razorpay",
    "PhysicsWallah",
    "Navi Technologies",
    "boAt Lifestyle",
    "Pristyn Care",
    "Sterlite Power",
    "Multiple / Not Sure Yet"
  ];

  const budgets = [
    "₹10,000 – ₹50,000",
    "₹50,000 – ₹2,00,000",
    "₹2,00,000 – ₹10,00,000",
    "₹10,00,000+"
  ];

  const trustPoints = [
    { icon: Lock, label: "Confidential" },
    { icon: Clock, label: "24hr response" },
    { icon: ShieldCheck, label: "No commitment" }
  ];

  return (
    <section id="interest" className="px-6 lg:px-16 py-24" style={{ background: "#0D0812" }}>

      <div className="max-w-2xl mx-auto">

        {/* Title */}

        <AnimatedSection>
          <SectionTitle
            theme="dark"
            align="center"
            eyebrow="Get In Early"
            title="Express Your Interest"
            description="Tell us which company interests you. Our team will reach out within 24 hours with allocation details and next steps."
          />
        </AnimatedSection>


        {/* Form Card */}

        <AnimatedSection delay={0.1}>

          <div className="glass-card noise rounded-2xl p-8 lg:p-10">

            <div className="relative z-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                {/* Name */}

                <div>
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <User size={12} /> Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
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
                    placeholder="you@example.com"
                    className="inp-dark"
                  />
                </div>


                {/* City */}

                <div>
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Building size={12} /> City
                  </label>

                  <input
                    type="text"
                    placeholder="Mumbai, Delhi, Bangalore…"
                    className="inp-dark"
                  />
                </div>


                {/* Company */}

                <div className="md:col-span-2">
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Rocket size={12} /> Company of Interest
                  </label>

                  <select className="inp-dark">

                    <option value="">Select a company…</option>

                    {companies.map((c, i) => (
                      <option key={i}>{c}</option>
                    ))}

                  </select>
                </div>


                {/* Budget */}

                <div className="md:col-span-2">
                  <label className="block text-xs text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <IndianRupee size={12} /> Investment Budget
                  </label>

                  <select className="inp-dark">

                    <option value="">Select range…</option>

                    {budgets.map((b, i) => (
                      <option key={i}>{b}</option>
                    ))}

                  </select>

                </div>

              </div>


              {/* Submit Button */}

              <Button size="lg" variant="secondary" className="w-full mb-5 flex items-center justify-center gap-2">
                <Send size={16} />
                Submit Expression of Interest
              </Button>


              {/* Trust Indicators */}

              <div className="flex items-center justify-center gap-6 text-xs text-white/50">

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

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
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
            title="Frequently Asked"
            highlightedTitle="Questions"
            subtitle="Everything you need to know before investing with Econexx Wealth."
            data={FaqData} 
          />

    

        
      </main>
    </>
  );
}
