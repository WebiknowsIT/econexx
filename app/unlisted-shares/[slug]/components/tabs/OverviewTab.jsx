// components/detail/tabs/OverviewTab.jsx

import { AlertTriangle, BarChart2, Building2, Check, Minus, Star, TrendingUp, Users } from "lucide-react";

const RISK_COLOR = {
  Low:    "text-emerald-600",
  Medium: "text-amber-600",
  High:   "text-red-500",
};

// ── Key Stats ────────────────────────────────────────────────────────────────
function KeyStats({ share }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <Building2 className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">{share.valuation}</div>
        <div className="text-xs text-primary-400 mt-1">Valuation</div>
      </div>
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <Users className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">8M+</div>
        <div className="text-xs text-primary-400 mt-1">Business Clients</div>
      </div>
      <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
         <TrendingUp className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">+{share.return6m}%</div>
        <div className="text-xs text-primary-600 mt-1">6M Return</div>
      </div>
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <BarChart2 className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">{share.demand}%</div>
        <div className="text-xs text-primary-400 mt-1">Demand</div>
      </div>
    </div>
  );
}

// ── About ────────────────────────────────────────────────────────────────────
function About({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h2 className="text-2xl font-bold text-primary-900 mb-4">
        About {share.name}
      </h2>
      <p className="text-sm leading-relaxed mb-4">
        {share.name} is India's leading payments and business banking platform. Founded in {share.founded} by
        Harshil Mathur and Shashank Kumar, it has grown to become one of India's most valuable fintech startups,
        processing over ₹10 lakh crore in payments annually.
      </p>
      <p className="text-sm leading-relaxed mb-4">
        The company offers a full stack of financial services — from payment gateway and subscriptions to payroll
        processing, corporate cards, and instant settlements. Its neo-banking product RazorpayX and lending arm
        Razorpay Capital have significantly expanded revenue streams beyond payments.
      </p>
      <p className="text-sm leading-relaxed">
        Backed by marquee investors including Sequoia Capital, Tiger Global, and GIC Singapore, {share.name} achieved
        unicorn status in 2020 and its valuation has grown to {share.valuation} as of its {share.stage} round.
      </p>
    </div>
  );
}

// ── Highlights & Risks ───────────────────────────────────────────────────────
function HighlightsRisks({ share }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h3 className="font-semibold text-primary-900 mb-5 flex items-center gap-2">
          <Star className="w-4 h-4 text-secondary-600" /> Investment Highlights
        </h3>
        <ul className="space-y-3">
          {share.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-green-600 text-xs font-bold">
                <Check className="w-3"/>
              </div>
              <span className="text-sm">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h3 className="font-semibold text-primary-900 mb-5 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-secondary-600" /> Risk Factors
        </h3>
        <ul className="space-y-3">
          {share.risks.map((r, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-600 text-xs font-bold">
                <Minus className="w-3"/>
              </div>
              <span className="text-sm">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Risk Meter ───────────────────────────────────────────────────────────────
function RiskMeter({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-6">Risk Assessment</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs text-primary-500 mb-1.5">
            <span className="text-slate-700">Overall Risk</span>
            <span className="font-semibold text-amber-600">Moderate</span>
          </div>
          <div className="h-3 bg-primary-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${share.overallRisk}%`,
                background: "linear-gradient(90deg,#22c55e,#f59e0b,#ef4444)",
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {[
            { label: "Liquidity Risk",    value: share.riskLiquidity },
            { label: "Market Risk",       value: share.riskMarket },
            { label: "Regulatory Risk",   value: share.riskRegulatory },
            { label: "Operational Risk",  value: share.riskOperational },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className={`font-semibold text-sm mb-1 ${RISK_COLOR[value]}`}>{value}</div>
              <div className="text-xs text-slate-700">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Demand Bar ───────────────────────────────────────────────────────────────
function DemandBar({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-primary-900">Current Demand</h3>
        <span className="text-xs text-secondary-700 bg-secondary-100 border border-secondary-200 px-3 py-1 rounded-full font-semibold">
          Very High
        </span>
      </div>
      <div className="flex justify-between text-xs text-slate-700 mb-1.5">
        <span>Buyer interest vs. available supply</span>
        <span className="font-bold text-primary-700 text-base">{share.demand}%</span>
      </div>
      <div className="h-4 bg-primary-100 rounded-full overflow-hidden mb-3">
        <div
          className="h-full rounded-full animate-shimmer"
          style={{
            width: `${share.demand}%`,
            background: "linear-gradient(90deg,#7A3D9A,#F9A24F)",
          }}
        />
      </div>
      <p className="text-xs text-slate-700">
        Based on active buy orders in the last 6 Months. High demand may mean limited availability at current prices.
      </p>
    </div>
  );
}

// ── Investors ────────────────────────────────────────────────────────────────
function Investors({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-5">Key Investors &amp; Backers</h3>
      <div className="flex flex-wrap gap-3">
        {share.investors.map((inv) => (
          <span
            key={inv}
            className="bg-primary-50 border border-primary-100 text-primary-700 text-sm px-4 py-2 rounded-xl"
          >
            {inv}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Milestones ───────────────────────────────────────────────────────────────
function Milestones({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-6">Company Milestones</h3>
      <div className="space-y-0">
        {share.milestones.map((m, i) => (
          <div key={i} className="relative pl-9 pb-7 last:pb-0">
            {/* Connector line */}
            {i < share.milestones.length - 1 && (
              <div
                className="absolute left-[11px] top-7 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom,#F9A24F,#FFF4E8)" }}
              />
            )}
            {/* Dot */}
            <div
              className={`absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center ${
                m.highlight ? "bg-secondary-500" : "bg-primary-600"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div
              className={`text-xs font-semibold mb-0.5 flex items-center gap-1 ${
                m.highlight ? "text-secondary-600" : "text-primary-600"
              }`}
            >
              {m.highlight && (
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block" />
              )}
              {m.year}{m.highlight ? " — Expected" : ""}
            </div>
            <div className="font-semibold text-primary-900 text-sm">{m.title}</div>
            <p className="text-xs text-slate-700 mt-0.5">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function OverviewTab({ share }) {
  return (
    <div className="space-y-8">
      <KeyStats share={share} />
      <About share={share} />
      <HighlightsRisks share={share} />
      <RiskMeter share={share} />
      <DemandBar share={share} />
      <Investors share={share} />
      <Milestones share={share} />
    </div>
  );
}
