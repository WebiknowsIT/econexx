// data/razorpayData.js

export const razorpayData = {
  id: "razorpay",
  name: "Razorpay",
  initials: "R",
  sector: "FinTech",
  stage: "Series F",
  description:
    "India's leading full-stack payments solution, powering 8M+ businesses with payment gateway, payroll, banking, and lending products.",
  location: "Bangalore, India",
  founded: "2014",
  employees: "3,000+",
  price: 1240,
  return6m: 18.4,
  valuation: "₹62,250 Cr",
  demand: 94,
  available: true,
  isin: "INE0Z9801016",
  faceValue: "₹1 per share",
  depository: "CDSL / NSDL",
  lotSize: 100,
  lastUpdated: "Today, 11:30 AM",

  highlights: [
    "Market leader in Indian payment gateway with 35%+ market share",
    "3× revenue growth over last 3 years, approaching profitability",
    "Expanding into Southeast Asia (Malaysia, Singapore rollout)",
    "IPO buzz — expected filing within 12–18 months",
    "Strong brand moat among developers and SMEs",
  ],

  risks: [
    "Intense competition from PhonePe, Paytm, and BillDesk",
    "Regulatory exposure — RBI policy changes on payment aggregators",
    "No guaranteed IPO timeline; liquidity is limited pre-listing",
    "Global macro headwinds may compress fintech valuations",
  ],

  overallRisk: 52,
  riskLiquidity: "Low",
  riskMarket: "Medium",
  riskRegulatory: "Medium",
  riskOperational: "Low",

  investors: [
    "Sequoia Capital", "Tiger Global", "GIC Singapore",
    "Y Combinator", "Matrix Partners", "Alkeon Capital", "Lone Pine Capital",
  ],

  milestones: [
    { year: "2025", title: "IPO Filing Anticipated",             description: "Expected DRHP filing with SEBI, targeting ₹8,000–10,000 Cr IPO.", highlight: true },
    { year: "2022", title: "Series F — $7.5B Valuation",        description: "Raised $375M at $7.5B valuation led by Lone Pine Capital & Alkeon." },
    { year: "2021", title: "Launched RazorpayX & Razorpay Capital", description: "Expanded into neobanking for businesses and MSME lending products." },
    { year: "2020", title: "Unicorn Status — $1B+ Valuation",   description: "Crossed unicorn threshold with Series D funding round." },
    { year: "2014", title: "Founded — YC W15 Batch",            description: "Started in Jaipur by Harshil Mathur & Shashank Kumar, joined Y Combinator." },
  ],

  financials: [
    { metric: "Revenue",              fy22: "₹1,194 Cr", fy23: "₹2,280 Cr", fy24e: "₹3,800 Cr", positiveLatest: false },
    { metric: "Gross Profit",         fy22: "₹480 Cr",   fy23: "₹1,050 Cr", fy24e: "₹1,720 Cr", positiveLatest: false },
    { metric: "EBITDA",               fy22: "-₹490 Cr",  fy23: "-₹210 Cr",  fy24e: "+₹95 Cr",   positiveLatest: true },
    { metric: "Net Loss / Profit",    fy22: "-₹538 Cr",  fy23: "-₹278 Cr",  fy24e: "+₹34 Cr",   positiveLatest: true },
    { metric: "Total Payment Volume", fy22: "₹6.2L Cr",  fy23: "₹8.8L Cr",  fy24e: "₹11.5L Cr", positiveLatest: false },
    { metric: "Active Merchants",     fy22: "5.2M",       fy23: "6.8M",       fy24e: "8.1M",       positiveLatest: false },
  ],

  revenueChart: [
    { label: "FY21",  value: 520 },
    { label: "FY22",  value: 1194 },
    { label: "FY23",  value: 2280 },
    { label: "FY24E", value: 3800, highlight: true },
  ],

  shareholding: [
    { name: "Founders",            pct: 32 },
    { name: "Sequoia Capital",     pct: 18 },
    { name: "Tiger Global",        pct: 14 },
    { name: "GIC Singapore",       pct: 10 },
    { name: "Other Institutional", pct: 26 },
  ],

  priceHistory: [
    { period: "Jun 2025", open: 1190, close: 1240, changePct: 4.2 },
    { period: "May 2025", open: 1150, close: 1190, changePct: 3.5 },
    { period: "Apr 2025", open: 1120, close: 1150, changePct: 2.7 },
    { period: "Mar 2025", open: 1100, close: 1120, changePct: 1.8 },
    { period: "Feb 2025", open: 1070, close: 1100, changePct: 2.8 },
    { period: "Jan 2025", open: 1048, close: 1070, changePct: 2.1 },
  ],

  documents: [
    { title: "Analyst Research Report — Q1 2025",  meta: "PDF · 24 pages · Updated Jun 2025",        icon: "file-text",    locked: false },
    { title: "Valuation Model — DCF & Comparables", meta: "XLSX · 8 sheets · Updated May 2025",      icon: "bar-chart-2",  locked: false },
    { title: "KYC & Due Diligence Checklist",       meta: "PDF · 6 pages · SEBI Guidelines",          icon: "shield-check", locked: false },
    { title: "Audited Financials FY2023",           meta: "PDF · 48 pages · CA Certified",            icon: "lock",         locked: true  },
    { title: "Transfer Agreement Template",         meta: "DOCX · Legal document · Lawyer Reviewed",  icon: "lock",         locked: true  },
  ],

  similar: [
    { name: "Groww",            sector: "FinTech",   stage: "Pre-IPO",   price: 92,  return6m: 17.3, demand: 89 },
    { name: "Open Financial",   sector: "FinTech",   stage: "Series D+", price: 52,  return6m: 7.9,  demand: 71 },
    { name: "slice",            sector: "FinTech",   stage: "Series B",  price: 38,  return6m: 33.0, demand: 90, exclusive: true },
    { name: "Navi Technologies",sector: "InsurTech", stage: "Pre-IPO",   price: 10,  return6m: 9.4,  demand: 91 },
  ],
};

// ── FAQ data shaped for your existing <FAQ> component ──────────────────────
export const razorpayFaqs = [
  {
    id: 1,
    question: "What is the minimum number of shares I can buy?",
    answer: (
      <p>Minimum order is 10 shares (₹12,400 at current price). There is no upper limit on order quantity, subject to seller availability.</p>
    ),
  },
  {
    id: 2,
    question: "How long does the transfer take after payment?",
    answer: (
      <p>Typically 2–3 business days via off-market transfer (DP instruction). You will receive a confirmation SMS from your depository (CDSL/NSDL) once shares are credited.</p>
    ),
  },
  {
    id: 3,
    question: "When is Razorpay expected to go public?",
    answer: (
      <p>Industry sources suggest a DRHP filing in late 2025 or early 2026, with a potential listing in 2026. Timelines may change based on market conditions and regulatory approvals.</p>
    ),
  },
  {
    id: 4,
    question: "What tax will I pay on gains from Razorpay shares?",
    answer: (
      <p>Unlisted shares held for more than 24 months are taxed at 20% with indexation (LTCG). Shares held under 24 months are taxed as STCG at your applicable income tax slab rate.</p>
    ),
  },
  {
    id: 5,
    question: "Can I sell my Razorpay shares before the IPO?",
    answer: (
      <p>Yes. You can list your shares for sale on our platform at any time. Given the high demand, Razorpay shares typically see strong secondary market interest.</p>
    ),
  },
];
