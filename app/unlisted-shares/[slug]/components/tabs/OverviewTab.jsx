// components/detail/tabs/OverviewTab.jsx

import {
  AlertTriangle,
  BarChart2,
  Building2,
  Check,
  Minus,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const RISK_COLOR = {
  Low: "text-emerald-600",
  Medium: "text-amber-600",
  High: "text-red-500",
};


function KeyStats({ share }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <Building2 className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">
          {share.banner?.items?.market_cap || "—"}Cr
        </div>
        <div className="text-xs text-primary-400 mt-1">Market Cap</div>
      </div>

      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <Users className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">
          {share.clients || "1M+"}
        </div>
        <div className="text-xs text-primary-400 mt-1">Business Clients</div>
      </div>

      <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <TrendingUp className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">
          {share.highlights?.six_month_return || 0}%
        </div>
        <div className="text-xs text-primary-600 mt-1">6M Return</div>
      </div>

      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 text-center">
        <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
          <BarChart2 className="w-4 h-4 text-primary-600" />
        </div>
        <div className="text-2xl font-bold text-primary-700">
          {share.demand || 10}%
        </div>
        <div className="text-xs text-primary-400 mt-1">Demand</div>
      </div>
      
    </div>
  );
}

function About({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h2 className="text-2xl font-bold text-primary-900 mb-4">
        About {share.share?.name}
      </h2>

      {share?.content?.description_html && (
        <div
          className="text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: share.content?.description_html }}
        />
      )}
    </div>
  );
}

function HighlightsRisks({ share }) {
  // ✅ Convert API string → array safely
  const highlightsList = Array.isArray(share.highlights)
    ? share.highlights
    : typeof share.highlights === "string"
    ? share.highlights
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const risksList = Array.isArray(share.risks)
    ? share.risks
    : typeof share.risks === "string"
    ? share.risks
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Highlights */}
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h3 className="font-semibold text-primary-900 mb-5 flex items-center gap-2">
          <Star className="w-4 h-4 text-secondary-600" />
          Investment Highlights
        </h3>

        <ul className="space-y-3">
          {(highlightsList.length > 0
            ? highlightsList
            : ["Strong growth", "Market leader"]
          ).map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 text-green-600">
                <Check className="w-3" />
              </div>
              <span className="text-sm">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Risks */}
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h3 className="font-semibold text-primary-900 mb-5 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-secondary-600" />
          Risk Factors
        </h3>

        <ul className="space-y-3">
          {(risksList.length > 0
            ? risksList
            : ["Market volatility", "Liquidity risk"]
          ).map((r, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 text-amber-600">
                <Minus className="w-3" />
              </div>
              <span className="text-sm">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RiskMeter({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-6">Risk Assessment</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span>Overall Risk</span>
            <span className="font-semibold text-amber-600">Moderate</span>
          </div>

          <div className="h-3 bg-primary-100 rounded-full">
            <div
              className="h-full"
              style={{
                width: `${share.overallRisk || 60}%`,
                background:
                  "linear-gradient(90deg,#22c55e,#f59e0b,#ef4444)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DemandBar({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-4">
        Current Demand
      </h3>

      <div className="text-sm mb-2">
        {share.demand || 0}% Buyer Interest
      </div>

      <div className="h-4 bg-primary-100 rounded-full">
        <div
          className="h-full"
          style={{
            width: `${share.demand || 0}%`,
            background: "linear-gradient(90deg,#7A3D9A,#F9A24F)",
          }}
        />
      </div>
    </div>
  );
}

function Investors({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-5">
        Key Investors & Backers
      </h3>

      <div className="flex flex-wrap gap-3">
        {(share.investors || ["Sequoia Capital", "Tiger Global","GIC Singapore","Y Combinator","Matrix Partners","Lone Pine Capital","Alkeon Capital"]).map((inv) => (
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

function Milestones({ share }) {
  return (
    <div className="bg-white border border-primary-100 rounded-2xl p-7">
      <h3 className="font-semibold text-primary-900 mb-6">
        Company Milestones
      </h3>

      <div className="space-y-4">
        {(share.milestones || []).map((m, i) => (
          <div key={i}>
            <div className="text-xs text-primary-600">
              {m.year}
            </div>
            <div className="font-semibold text-sm">{m.title}</div>
            <div className="text-xs text-slate-600">
              {m.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OverviewTab({ share }) {
  return (
    <div className="space-y-8">
      <KeyStats share={share} />
      <About share={share} />
      <HighlightsRisks share={share} />
      {/* <RiskMeter share={share} /> */}
      {/* <DemandBar share={share} /> */}
      {/* <Investors share={share} /> */}
      {/* <Milestones share={share} /> */}
    </div>
  );
}