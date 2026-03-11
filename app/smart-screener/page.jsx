"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Search,
  SlidersHorizontal,
  Zap,
  Filter,
  Building2,
  Flame,
  Cpu,
  Landmark,
  IndianRupee,
  ShieldCheck,
  FileText,
  BarChart2,
  CircleDollarSign,
  PieChart,
  X,
  BookmarkPlus,
  Bookmark,
  Rocket,
  ArrowUp,
  LogIn,
  CreditCard,
  GraduationCap,
  HeartPulse,
  Car,
  ShoppingBag,
  Glasses,
  Check,
  Percent,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";


// ─────────────────────────────────────────────────────────────────────────────
// DATA — dummy JSON (replace with API fetch later)
//
// To connect real API:
//   Option A (Server Component): const res = await fetch("https://api.yoursite.com/stocks");
//                                const STOCKS = await res.json();
//   Option B (Client): useEffect(() => { fetch("/api/stocks").then(r=>r.json()).then(setStocks) }, [])
//
// Expected shape per stock object:
// {
//   id: number,
//   name: string,
//   sector: string,          // "Tech" | "Finance" | "Consumer" | "Healthcare" | "Infra" | "Logistics"
//   price: number,           // ₹ per share
//   gmp: number,             // Grey Market Premium %
//   revGrowth: number,       // Revenue growth YoY %
//   mcap: number,            // Market cap in Cr (raw number for sorting)
//   mcapLabel: string,       // Display string e.g. "₹50,000 Cr"
//   status: string,          // "DRHP Filed" | "SEBI Approved" | "Unlisted"
//   profit: string,          // "PAT+" | "EBITDA+"
//   tag: string,             // "hot" | "new" | "drhp"  (badge style key)
//   icon: string,            // lucide icon name key (see ICON_MAP below)
//   desc: string,            // short description
//   drhp: string,            // "Jan 2025" or "N/A"
//   minInv: string,          // "₹48,000"
//   ipoband: string,         // "₹600–650" or "N/A"
//   sub: number,             // subscription % (0 = hide bar)
// }
// ─────────────────────────────────────────────────────────────────────────────
import stocksData from "./stocks.json";

const STOCKS = stocksData;

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_FILTERS = {
  sector: "All",
  status: "All",
  gmp: "Any",
  rev: "Any",
  profit: "Any",
  mcap: "Any",
};

// Map stock.icon string → Lucide component
// When adding new icon keys from the API, add them here
const ICON_MAP = {
  "credit-card": CreditCard,
  "graduation-cap": GraduationCap,
  "landmark": Landmark,
  "heart-pulse": HeartPulse,
  "zap": Zap,
  "car": Car,
  "shopping-bag": ShoppingBag,
  "glasses": Glasses,
  "trending-up": TrendingUp,
  // headphones has no lucide equivalent — inline SVG fallback
  "headphones": ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
};

// Preset screen definitions
// To add a new preset: push an entry here — no other code changes needed
const PRESETS = [
  {
    key: "hot-preipo",
    icon: Flame,
    iconColor: "#C47222",
    iconBg: "rgba(196,114,34,.1)",
    iconBorder: "rgba(249,162,79,.2)",
    title: "Hot Pre-IPO",
    sub: "GMP >20% · DRHP filed",
    count: 12,
    filters: { status: "DRHP Filed", gmp: "GMP > 20%" },
  },
  {
    key: "profitable-tech",
    icon: Cpu,
    iconColor: "#9A5FB5",
    iconBg: "rgba(122,61,154,.1)",
    iconBorder: "rgba(182,138,204,.2)",
    title: "Profitable Tech",
    sub: "PAT+ve · Tech sector",
    count: 18,
    filters: { sector: "Tech", profit: "PAT Positive" },
  },
  {
    key: "high-growth",
    icon: TrendingUp,
    iconColor: "#9A5FB5",
    iconBg: "rgba(122,61,154,.1)",
    iconBorder: "rgba(182,138,204,.2)",
    title: "High Growth",
    sub: "Revenue >50% YoY",
    count: 24,
    filters: { rev: "Rev > 40%" },
  },
  {
    key: "under-500",
    icon: IndianRupee,
    iconColor: "#C47222",
    iconBg: "rgba(196,114,34,.1)",
    iconBorder: "rgba(249,162,79,.2)",
    title: "Under ₹500",
    sub: "Price < ₹500/share",
    count: 41,
    filters: {},
  },
  {
    key: "finance",
    icon: Landmark,
    iconColor: "#9A5FB5",
    iconBg: "rgba(122,61,154,.1)",
    iconBorder: "rgba(182,138,204,.2)",
    title: "Fintech Focus",
    sub: "Finance · NBFC · Payments",
    count: 29,
    filters: { sector: "Finance" },
  },
  {
    key: "sebi-approved",
    icon: ShieldCheck,
    iconColor: "#9A5FB5",
    iconBg: "rgba(122,61,154,.1)",
    iconBorder: "rgba(182,138,204,.2)",
    title: "SEBI Approved",
    sub: "DRHP cleared · IPO soon",
    count: 7,
    filters: { status: "SEBI Approved" },
  },
];

// Filter chip definitions
// To add a new filter: push an entry here + add filter key to DEFAULT_FILTERS + applyFilters()
const FILTER_DEFS = [
  {
    key: "sector",
    label: "Sector",
    Icon: Building2,
    options: ["All", "Tech", "Finance", "Consumer", "Healthcare", "Infra", "Logistics"],
    defaultVal: "All",
  },
  {
    key: "status",
    label: "Status",
    Icon: FileText,
    options: ["All", "DRHP Filed", "SEBI Approved", "Unlisted"],
    defaultVal: "All",
  },
  {
    key: "gmp",
    label: "GMP",
    Icon: Percent,
    options: ["Any", "GMP > 10%", "GMP > 20%", "GMP > 30%"],
    defaultVal: "Any",
  },
  {
    key: "rev",
    label: "Revenue Growth",
    Icon: BarChart2,
    options: ["Any", "Rev > 20%", "Rev > 40%", "Rev > 60%"],
    defaultVal: "Any",
  },
  {
    key: "profit",
    label: "Profit",
    Icon: CircleDollarSign,
    options: ["Any", "PAT Positive", "EBITDA Positive"],
    defaultVal: "Any",
  },
  {
    key: "mcap",
    label: "Mkt Cap",
    Icon: PieChart,
    options: ["Any", "< ₹1000Cr", "₹1000–10000Cr", "> ₹10000Cr"],
    defaultVal: "Any",
  },
];

// Table column config
const TABLE_COLUMNS = [
  { label: "Company",    key: "name",      align: "left"   },
  { label: "Sector",     key: "sector",    align: "left"   },
  { label: "Price",      key: "price",     align: "right"  },
  { label: "GMP",        key: "gmp",       align: "right"  },
  { label: "Rev Growth", key: "revGrowth", align: "right"  },
  { label: "Mkt Cap",    key: "mcap",      align: "right"  },
  { label: "Status",     key: "status",    align: "center" },
  { label: "Profit",     key: "profit",    align: "center" },
];

// Badge styles per tag value
const TAG_STYLES = {
  hot:  { background: "rgba(196,114,34,.1)", border: "1px solid rgba(249,162,79,.25)", color: "#C47222" },
  drhp: { background: "rgba(122,61,154,.1)", border: "1px solid rgba(122,61,154,.2)",  color: "#7A3D9A" },
  new:  { background: "rgba(74,222,128,.1)", border: "1px solid rgba(74,222,128,.25)", color: "#16a34a" },
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function applyFilters(stocks, filters, query) {
  return stocks.filter((s) => {
    if (filters.sector !== "All" && s.sector !== filters.sector) return false;
    if (filters.status !== "All" && s.status !== filters.status) return false;
    if (filters.gmp === "GMP > 10%" && s.gmp <= 10) return false;
    if (filters.gmp === "GMP > 20%" && s.gmp <= 20) return false;
    if (filters.gmp === "GMP > 30%" && s.gmp <= 30) return false;
    if (filters.rev === "Rev > 20%" && s.revGrowth <= 20) return false;
    if (filters.rev === "Rev > 40%" && s.revGrowth <= 40) return false;
    if (filters.rev === "Rev > 60%" && s.revGrowth <= 60) return false;
    if (filters.profit === "PAT Positive"    && s.profit !== "PAT+") return false;
    if (filters.profit === "EBITDA Positive" && s.profit !== "EBITDA+" && s.profit !== "PAT+") return false;
    if (query && !s.name.toLowerCase().includes(query.toLowerCase()) &&
        !s.sector.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });
}

function StockIcon({ icon, className, style }) {
  const Icon = ICON_MAP[icon] || TrendingUp;
  return <Icon className={className} style={style} />;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function UnlistedEdgePage() {
  const [filters, setFilters]             = useState(DEFAULT_FILTERS);
  const [searchQuery, setSearchQuery]     = useState("");
  const [heroQuery, setHeroQuery]         = useState("");
  const [sortCol, setSortCol]             = useState(-1);
  const [sortAsc, setSortAsc]             = useState(true);
  const [spotlightStock, setSpotlightStock] = useState(null);
  const [activePreset, setActivePreset]   = useState("hot-preipo");
  const [openDrop, setOpenDrop]           = useState(null);
  const [showBackTop, setShowBackTop]     = useState(false);
  const screenerRef = useRef(null);

  // Derive filtered + sorted list
  const filtered = (() => {
    let data = applyFilters(STOCKS, filters, searchQuery);
    if (sortCol >= 0) {
      const key = TABLE_COLUMNS[sortCol].key;
      data = [...data].sort((a, b) =>
        sortAsc ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1)
      );
    }
    return data;
  })();

  // Scroll + click-outside listeners
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!e.target.closest("[data-dropdown]")) setOpenDrop(null);
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const scrollToScreener = () =>
    screenerRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleHeroSearch = () => {
    setSearchQuery(heroQuery);
    scrollToScreener();
  };

  const handleSort = (colIndex) => {
    if (sortCol === colIndex) setSortAsc(!sortAsc);
    else { setSortCol(colIndex); setSortAsc(true); }
  };

  const handlePreset = (key, partialFilters) => {
    setActivePreset(key);
    setFilters({ ...DEFAULT_FILTERS, ...partialFilters });
    scrollToScreener();
  };

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery("");
    setHeroQuery("");
  };

  // ── Shared styles ──────────────────────────────────────────────────────────

  const ctaBtn = {
    background: "linear-gradient(135deg,#C47222,#F9A24F)",
    color: "#0D0812",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(249,162,79,.25)",
    fontWeight: 700,
  };

  const ghostBtn = {
    background: "transparent",
    border: "1px solid rgba(182,138,204,.28)",
    color: "#B68ACC",
    cursor: "pointer",
  };

  const lightBtn = {
    background: "transparent",
    border: "1.5px solid #E6D9F0",
    color: "#7A3D9A",
    cursor: "pointer",
    fontWeight: 600,
  };


  function renderHero() {
    const floatCards = [
      { label: "Top GMP",     value: "+34%", sub: "Razorpay",           pos: { left: "3%",  top: "28%" },    delay: "0s",   pulse: true  },
      { label: "Rev Growth",  value: "+68%", sub: "Fintech avg · YoY",  pos: { right: "3%", top: "24%" },    delay: "0.5s", pulse: false },
      { label: "Filters",     value: "20+",  sub: "Screening metrics",  pos: { left: "5%",  bottom: "22%" }, delay: "1s",   pulse: false },
      { label: "Coverage",    value: "500+", sub: "Unlisted stocks",    pos: { right: "4%", bottom: "24%" }, delay: "1.5s", pulse: false },
    ];

    const heroStats = [
      { value: "500+", label: "Stocks"   },
      { value: "20+",  label: "Metrics"  },
      { value: "Live", label: "Updates"  },
      { value: "Free", label: "No Login" },
    ];

    const suggestions = [
      "High GMP stocks",
      "DRHP filed 2025",
      "Profitable fintech",
      "Under ₹500 price",
      "Revenue > ₹500Cr",
      "Pre-IPO tech",
    ];

    return (
      <section
        className="heroSection hero-glow gridBgDark noise bg-primary-900 relative overflow-hidden flex items-center py-14">
    
        <style>{`
          @keyframes ring-pulse { 0%,100%{transform:scale(1);opacity:.15}50%{transform:scale(1.08);opacity:.07} }
          @keyframes float-up-down { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }
          @keyframes pulse-dot { 0%,100%{opacity:.6}50%{opacity:1} }
        `}</style>

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none MONU"
          style={{
            backgroundImage: "radial-gradient(circle,rgba(182,138,204,.08) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Rings */}
        {[680, 460].map((size, i) => (
          <div key={size} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full border"
              style={{
                width: size, height: size,
                borderColor: i === 0 ? "rgba(122,61,154,.12)" : "rgba(182,138,204,.07)",
                animation: `ring-pulse 4s ${i}s ease-in-out infinite`,
              }}
            />
          </div>
        ))}

        {/* Floating cards */}
        {floatCards.map((card, i) => (
          <div
            key={i}
            className="absolute px-4 py-3 rounded-2xl backdrop-blur-xl"
            style={{
              ...card.pos,
              background: "linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))",
              border: "1px solid rgba(182,138,204,.14)",
              animation: `float-up-down ${6 + i}s ${card.delay} ease-in-out infinite`,
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              {card.pulse ? (
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 inline-block"
                  style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
                />
              ) : (
                <TrendingUp className="w-3 h-3" style={{ color: "#F9A24F" }} />
              )}
              <span
                className="text-[.6rem] uppercase tracking-widest"
                style={{ color: "rgba(182,138,204,.6)" }}
              >
                {card.label}
              </span>
            </div>
            <div className="font-bold text-2xl" style={{color: "#F9A24F" }}>
              {card.value}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(182,138,204,.5)" }}>
              {card.sub}
            </div>
          </div>
        ))}

        {/* Main content */}
        <div className="max-w-3xl mx-auto relative z-10 w-full text-center px-6">
          {/* Tags */}
          <div className="flex items-center justify-center gap-2 mb-7">
            <span
              className="text-[.62rem] font-semibold uppercase tracking-[.12em] px-3 py-0.5 rounded-full"
              style={{ background: "rgba(122,61,154,.18)", border: "1px solid rgba(182,138,204,.22)", color: "#B68ACC" }}
            >
              Smart Screener
            </span>
            <span
              className="text-[.62rem] font-semibold uppercase tracking-[.12em] px-3 py-0.5 rounded-full"
              style={{ background: "rgba(196,114,34,.12)", border: "1px solid rgba(249,162,79,.22)", color: "#F9A24F" }}
            >
              Beta
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bold text-white mb-5 leading-[1.04]"
            style={{fontSize: "clamp(1rem,4.5vw,3.2rem)" }}
          >
            Screen Every Unlisted Stock <span className="gradBrand">Instantly.</span>
          </h1>

          <p className="text-md text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
            Search by company name, or apply 20+ filters — GMP, sector, revenue
            growth, valuation — to find exactly what you're looking for.
          </p>

          {/* Search bar */}
          <div
            className="flex items-center gap-3 px-5 py-4 mb-6 mx-auto max-w-2xl rounded-2xl transition-all"
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1.5px solid rgba(182,138,204,.2)",
            }}
          >
            <Search className="w-5 h-5 flex-shrink-0" style={{ color: "rgba(182,138,204,.5)" }} />
            <input
              type="text"
              value={heroQuery}
              onChange={(e) => setHeroQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleHeroSearch()}
              placeholder="Search company name, sector, or metric…"
              className="bg-transparent border-none outline-none w-full text-base"
              style={{ color: "#E6D9F0", fontFamily: "'DM Sans', sans-serif" }}
            />
            <button
              onClick={handleHeroSearch}
              className="flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm transition-all"
              style={ctaBtn}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" /> Screen
            </button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs flex items-center gap-1 mr-1 text-primary-300">
              <Zap className="w-3 h-3 text-secondary-400" /> Try:
            </span>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setHeroQuery(s)}
                className="text-[.72rem] font-medium px-3 py-1 rounded-full transition-all"
                style={{
                  background: "rgba(122,61,154,.12)",
                  border: "1px solid rgba(182,138,204,.16)",
                  color: "#B68ACC",
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderSavedScreens() {
    return (
      <section className="px-6 lg:px-16 py-16 bg-[#F4EEF8]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
              align="center"
              eyebrow="Saved Screens"
              title="Start With a Preset Screen"
              //description=""
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRESETS.map((preset) => {
              const isActive = activePreset === preset.key;
              const PresetIcon = preset.icon;

              return (
                <div
                  key={preset.key}
                  onClick={() => handlePreset(preset.key, preset.filters)}
                  className="relative overflow-hidden p-4 rounded-2xl cursor-pointer transition-all"
                  style={{
                    background: isActive ? "#F4EEF8" : "#fff",
                    border: `1.5px solid ${isActive ? "#B68ACC" : "#E6D9F0"}`,
                    boxShadow: isActive ? "0 12px 32px rgba(122,61,154,.1)" : "none",
                    transform: isActive ? "translateY(-2px)" : "none",
                  }}
                >
                  {/* Active accent line */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 right-0"
                      style={{ height: 3, background: "linear-gradient(90deg,#7A3D9A,#F9A24F)" }}
                    />
                  )}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: preset.iconBg, border: `1px solid ${preset.iconBorder}` }}
                  >
                    <PresetIcon className="w-4 h-4" style={{ color: preset.iconColor }} />
                  </div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#31164A" }}>
                    {preset.title}
                  </div>
                  <div className="text-xs" style={{ color: "#9A5FB5" }}>{preset.sub}</div>
                  <div className="mt-3 text-[.65rem] font-semibold" style={{ color: "#E38A34" }}>
                    {preset.count} stocks
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function renderFilterBar() {
    return (
      <div className="px-6 lg:px-16 py-3 shadow-sm bg-white border-b border-[#E6D9F0] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs text-primary-300 uppercase tracking-widest flex-shrink-0 mr-1">
            Filters:
          </span>

          {/* Filter chips — driven by FILTER_DEFS constant */}
          {FILTER_DEFS.map((f) => {
            const currentVal = filters[f.key];
            const isActive   = currentVal !== f.defaultVal;
            const isOpen     = openDrop === f.key;

            return (
              <div key={f.key} className="relative flex-shrink-0" data-dropdown>
                <button
                  onClick={() => setOpenDrop(isOpen ? null : f.key)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all whitespace-nowrap"
                  style={{
                    background: isActive ? "#7A3D9A" : "transparent",
                    border: `1px solid ${isActive ? "#7A3D9A" : "#E6D9F0"}`,
                    color: isActive ? "#fff" : "#7A3D9A",
                    cursor: "pointer",
                  }}
                >
                  <f.Icon className="w-3 h-3" />
                  {isActive ? currentVal : f.label}
                  <span style={{ fontSize: ".6rem", opacity: 0.6 }}>▾</span>
                </button>

                {isOpen && (
                  <div
                    className="absolute overflow-hidden rounded-2xl"
                    style={{
                      top: "calc(100% + 6px)",
                      left: 0,
                      minWidth: 200,
                      background: "#fff",
                      border: "1px solid #E6D9F0",
                      boxShadow: "0 16px 40px rgba(122,61,154,.12)",
                      zIndex: 50,
                    }}
                  >
                    {f.options.map((opt) => {
                      const isPicked = currentVal === opt;
                      return (
                        <div
                          key={opt}
                          onClick={() => {
                            setFilters((prev) => ({ ...prev, [f.key]: opt }));
                            setOpenDrop(null);
                          }}
                          className="flex items-center gap-2 px-3 py-2 text-xs cursor-pointer transition-all"
                          style={{
                            background: isPicked ? "#F4EEF8" : "transparent",
                            color: isPicked ? "#7A3D9A" : "#4B226E",
                            fontWeight: isPicked ? 600 : 400,
                          }}
                        >
                          {isPicked && <Check className="w-3 h-3" />}
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-px h-5 flex-shrink-0" style={{ background: "#E6D9F0" }} />

          {/* Result count */}
          <span className="text-xs flex-shrink-0 ml-2 text-primary-300">
            <span className="font-semibold text-primary-900">{filtered.length}</span> results
          </span>

          {/* Clear */}
          <Button
            variant="outline"
            onClick={clearFilters}
            className="flex items-center gap-1 ml-auto flex-shrink-0"
          >
            <X className="w-3 h-3" /> Clear
          </Button>
        </div>
      </div>
    );
  }

  function renderTable() {
    return (
      <div
        className="overflow-x-auto rounded-2xl"
        style={{ border: "1px solid #E6D9F0", boxShadow: "0 1px 4px rgba(122,61,154,.06)" }}
      >
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          {/* Head — driven by TABLE_COLUMNS constant */}
          <thead>
            <tr>
              {TABLE_COLUMNS.map((col, i) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(i)}
                  className="cursor-pointer select-none whitespace-nowrap"
                  style={{
                    background: "#F4EEF8",
                    fontSize: ".68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "#7A3D9A",
                    padding: "11px 14px",
                    borderBottom: "1px solid #E6D9F0",
                    textAlign: col.align,
                    borderRadius:
                      i === 0 ? "16px 0 0 0"
                      : i === TABLE_COLUMNS.length - 1 ? "0 16px 0 0"
                      : undefined,
                  }}
                >
                  {col.label}
                  <span style={{ opacity: sortCol === i ? 1 : 0.35, marginLeft: 4, fontSize: ".55rem" }}>
                    {sortCol === i ? (sortAsc ? "▲" : "▼") : "⇅"}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filtered.map((stock) => (
              <tr
                key={stock.id}
                onClick={() => setSpotlightStock(stock)}
                className="cursor-pointer transition-all"
                style={{ borderBottom: "1px solid #F4EEF8" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F9F5FC")}
                onMouseLeave={(e) => (e.currentTarget.style.background = spotlightStock?.id === stock.id ? "#F4EEF8" : "transparent")}
              >
                {/* Company */}
                <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(122,61,154,.1)", border: "1px solid rgba(182,138,204,.15)" }}
                    >
                      <StockIcon icon={stock.icon} className="w-3.5 h-3.5" style={{ color: "#7A3D9A" }} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: "#220F34" }}>{stock.name}</span>
                  </div>
                </td>

                {/* Sector */}
                <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#F4EEF8", color: "#7A3D9A" }}>
                    {stock.sector}
                  </span>
                </td>

                {/* Price */}
                <td style={{ padding: "13px 14px", textAlign: "right", verticalAlign: "middle" }}>
                  <span className="font-bold text-sm" style={{ color: "#220F34" }}>
                    ₹{stock.price.toLocaleString()}
                  </span>
                </td>

                {/* GMP */}
                <td style={{ padding: "13px 14px", textAlign: "right", verticalAlign: "middle" }}>
                  <span className="text-sm font-bold" style={{ color: "#16a34a" }}>+{stock.gmp}%</span>
                </td>

                {/* Rev Growth */}
                <td style={{ padding: "13px 14px", textAlign: "right", verticalAlign: "middle" }}>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: stock.revGrowth >= 50 ? "#16a34a" : "#31164A" }}
                  >
                    +{stock.revGrowth}%
                  </span>
                </td>

                {/* Mkt Cap */}
                <td style={{ padding: "13px 14px", textAlign: "right", verticalAlign: "middle", fontSize: ".83rem", color: "#4B226E" }}>
                  {stock.mcapLabel}
                </td>

                {/* Status badge */}
                <td style={{ padding: "13px 14px", textAlign: "center", verticalAlign: "middle" }}>
                  <span
                    className="text-[.58rem] font-bold uppercase tracking-[.1em] px-2 py-0.5 rounded-full"
                    style={TAG_STYLES[stock.tag] || TAG_STYLES.drhp}
                  >
                    {stock.status}
                  </span>
                </td>

                {/* Profit */}
                <td style={{ padding: "13px 14px", textAlign: "center", verticalAlign: "middle" }}>
                  <span
                    className="flex items-center justify-center gap-1 text-xs font-semibold"
                    style={{ color: stock.profit === "PAT+" ? "#16a34a" : "#d97706" }}
                  >
                    {stock.profit === "PAT+" ? "✓" : "–"} {stock.profit}
                  </span>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={TABLE_COLUMNS.length} className="text-center py-12" style={{ color: "rgba(122,61,154,.5)", fontSize: ".9rem" }}>
                  No stocks match your filters.{" "}
                  <button
                    onClick={clearFilters}
                    className="underline cursor-pointer bg-transparent border-none"
                    style={{ color: "#7A3D9A" }}
                  >
                    Clear filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  function renderScreener() {
    return (
      <section id="screener" className="bg-white" ref={screenerRef}>
        {renderFilterBar()}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
          {renderTable()}
          <div
            className="mt-4 flex items-center justify-between flex-wrap gap-2 px-1 text-primary-500"
            style={{ fontSize: ".75rem"}}
          >
            <span>Click any row to view full stock details</span>
            <span>
              Showing{" "}
              <b className="text-primary-900">{filtered.length}</b> of {STOCKS.length} stocks
            </span>
          </div>
        </div>
      </section>
    );
  }

  function renderDetailPopup() {
    const s = spotlightStock;

    const keyNumbers = s
      ? [
          { label: "Pre-IPO Price",  value: `₹${s.price.toLocaleString()}`, bg: "#F4EEF8", color: "#220F34"  },
          { label: "Est. IPO Band",  value: s.ipoband !== "N/A" ? s.ipoband : "Unlisted", bg: "#FFF4E8", color: "#C47222"  },
          { label: "GMP",            value: `+${s.gmp}%`,                   bg: "#F4EEF8", color: "#16a34a"  },
          { label: "Rev Growth YoY", value: `+${s.revGrowth}%`,             bg: "#F4EEF8", color: "#E38A34"  },
        ]
      : [];

    const detailRows = s
      ? [
          { label: "Market Cap",   value: s.mcapLabel,  color: "#31164A" },
          { label: "Min Investment",value: s.minInv,    color: "#31164A" },
          { label: "DRHP Filed",   value: s.drhp,       color: "#31164A" },
          { label: "Profitability", value: s.profit,    color: s.profit === "PAT+" ? "#16a34a" : "#d97706" },
        ]
      : [];

    return (
      <>
        {/* Backdrop */}
        <div
          onClick={() => setSpotlightStock(null)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(13,8,18,.35)",
            backdropFilter: "blur(2px)",
            zIndex: 99,
            opacity: s ? 1 : 0,
            pointerEvents: s ? "auto" : "none",
            transition: "opacity .3s",
          }}
        />

        {/* Panel */}
        <div
          style={{
            position: "fixed", top: 0, right: 0,
            width: 420, maxWidth: "100vw", height: "100vh",
            background: "#fff",
            borderLeft: "1px solid #E6D9F0",
            zIndex: 100,
            transform: s ? "translateX(0)" : "translateX(100%)",
            transition: "transform .32s cubic-bezier(.4,0,.2,1)",
            overflowY: "auto",
            boxShadow: "-20px 0 60px rgba(122,61,154,.1)",
          }}
        >
          {s && (
            <>
              {/* Header */}
              <div
                className="px-7 py-6 flex items-start justify-between gap-3"
                style={{ background: "linear-gradient(135deg,#220F34,#3E1C5C)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(182,138,204,.15)",
                      border: "1px solid rgba(182,138,204,.2)",
                    }}
                  >
                    <StockIcon icon={s.icon} className="w-6 h-6" style={{ color: "#E6D9F0" }} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-2xl mb-0.5">
                      {s.name}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(182,138,204,.6)" }}>
                      {s.sector} · {s.status}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSpotlightStock(null)}
                  className="p-1 bg-transparent border-none cursor-pointer"
                  style={{ color: "rgba(182,138,204,.6)" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Key numbers grid */}
              <div className="grid grid-cols-2 gap-3 px-7 py-5" style={{ borderBottom: "1px solid #E6D9F0" }}>
                {keyNumbers.map((kn) => (
                  <div key={kn.label} className="rounded-xl p-4" style={{ background: kn.bg }}>
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(122,61,154,.5)" }}>
                      {kn.label}
                    </div>
                    <div className="font-bold text-2xl" style={{ color: kn.color }}>
                      {kn.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* About */}
              <div className="px-7 py-5" style={{ borderBottom: "1px solid #E6D9F0" }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(122,61,154,.5)" }}>
                  About
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4B226E" }}>{s.desc}</p>
              </div>

              {/* Details */}
              <div className="px-7 py-5" style={{ borderBottom: "1px solid #E6D9F0" }}>
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(122,61,154,.5)" }}>
                  Details
                </div>
                <div className="space-y-3">
                  {detailRows.map((row) => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span style={{ color: "rgba(122,61,154,.6)" }}>{row.label}</span>
                      <span className="font-semibold" style={{ color: row.color }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscription bar (only shown when sub > 0) */}
              {s.sub > 0 && (
                <div className="px-7 py-5" style={{ borderBottom: "1px solid #E6D9F0" }}>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(122,61,154,.5)" }}>
                    Subscription
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span style={{ color: "rgba(122,61,154,.6)" }}>Slots filled</span>
                    <span className="font-bold" style={{ color: "#E38A34" }}>{s.sub}%</span>
                  </div>
                  <div className="w-full rounded-full" style={{ background: "#E6D9F0", height: 5 }}>
                    <div
                      className="rounded-full"
                      style={{
                        width: `${s.sub}%`,
                        height: 5,
                        background: "linear-gradient(90deg,#7A3D9A,#F9A24F)",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="px-7 py-6 flex flex-col gap-3">
                <button
                  className="w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all"
                  style={ctaBtn}
                >
                  <Rocket className="w-4 h-4" /> Express Interest in {s.name}
                </button>
                <button
                  className="w-full py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all"
                  style={lightBtn}
                >
                  <Bookmark className="w-3.5 h-3.5" /> Save to Watchlist
                </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  function renderHowItWorks() {
    const steps = [
      {
        num: "01",
        title: "Set Your Filters",
        body: "Choose from 20+ metrics — sector, price range, GMP, revenue growth, profitability, and more. Or pick a saved screen to start instantly.",
        gradient: "linear-gradient(135deg,#7A3D9A,#9A5FB5)",
      },
      {
        num: "02",
        title: "Explore Results",
        body: "See matching stocks in a sortable table. Click any row for a detailed spotlight — financials, DRHP status, pre-IPO price, and analyst notes.",
        gradient: "linear-gradient(135deg,#F9A24F,#C47222)",
      },
      {
        num: "03",
        title: "Invest",
        body: "Express interest directly from the spotlight panel, or save to your watchlist and track it over time. Our team follows up within 24 hours.",
        gradient: "linear-gradient(135deg,#7A3D9A,#9A5FB5)",
      },
    ];

    return (
      <section className="px-6 lg:px-16 py-24 heroSection hero-glow gridBgDark noise bg-primary-900">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
              theme="dark"
              align="center"
              eyebrow="How It Works"
              title="Find Your Ideal Stock in 3 Steps"
              description="No signup. No friction. Just filter, discover, and invest."
            />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="flex items-center justify-center mx-auto mb-5 font-bold text-xl text-white rounded-full"
                  style={{
                    width: 52, height: 52,
                    background: step.gradient,
                    boxShadow: "0 4px 14px rgba(122,61,154,.3)",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-xl mb-3" style={{color: "#E6D9F0" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(182,138,204,.55)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <div>
      {renderHero()}
      {renderSavedScreens()}
      {renderScreener()}
      {renderHowItWorks()}
      {renderDetailPopup()}
    </div>
  );
}
