// components/detail/tabs/PriceHistoryTab.jsx
import { useState } from "react";

const PERIODS = ["3M", "6M", "1Y", "All"];

export default function PriceHistoryTab({ share }) {
  const [activePeriod, setActivePeriod] = useState("6M");

  return (
    <div className="space-y-8">
      <div className="bg-white border border-primary-100 rounded-2xl p-7">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="font-serif text-2xl font-bold text-primary-900">Price History</h2>
          <div className="flex gap-2">
            {PERIODS.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={[
                  "text-xs px-3 py-1.5 rounded-lg border cursor-pointer transition-all",
                  activePeriod === p
                    ? "border-secondary-500 text-secondary-600 bg-secondary-50 font-semibold"
                    : "border-primary-200 text-primary-500 bg-white hover:bg-primary-50",
                ].join(" ")}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Line Chart */}
        <div className="relative mb-2">
          <svg viewBox="0 0 600 180" className="w-full" style={{ height: 180 }}>
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7A3D9A" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#7A3D9A" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B68ACC" />
                <stop offset="100%" stopColor="#F9A24F" />
              </linearGradient>
            </defs>
            {[36, 72, 108, 144].map((y) => (
              <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#F4EEF8" strokeWidth="1" />
            ))}
            <path
              fill="url(#chartGrad)"
              d="M0,140 C50,135 100,128 150,118 C200,108 230,100 280,88 C330,76 370,72 420,62 C470,52 530,46 600,38 L600,180 L0,180 Z"
            />
            <path
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              d="M0,140 C50,135 100,128 150,118 C200,108 230,100 280,88 C330,76 370,72 420,62 C470,52 530,46 600,38"
            />
            <circle cx="600" cy="38" r="5" fill="#F9A24F" stroke="white" strokeWidth="2" />
            <text x="4"   y="34"  fill="#B68ACC" fontSize="9" fontFamily="DM Sans">1,240</text>
            <text x="4"   y="106" fill="#B68ACC" fontSize="9" fontFamily="DM Sans">1,100</text>
            <text x="4"   y="142" fill="#B68ACC" fontSize="9" fontFamily="DM Sans">1,040</text>
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
              <text key={m} x={i * 110} y="174" fill="#B68ACC" fontSize="9" fontFamily="DM Sans">{m}</text>
            ))}
          </svg>
        </div>

        {/* Price Table */}
        <div className="overflow-x-auto rounded-xl border border-primary-100 mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-50 border-b border-primary-100">
                {["Period", "Open", "Close", "Change"].map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-xs text-primary-400 uppercase tracking-wider font-medium ${
                      i === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-primary-50">
              {share.priceHistory.map((row) => (
                <tr key={row.period} className="hover:bg-primary-50">
                  <td className="px-4 py-3 text-primary-700">{row.period}</td>
                  <td className="px-4 py-3 text-right text-primary-700">
                    ₹{row.open.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-primary-900">
                    ₹{row.close.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-3 text-right text-secondary-600 font-semibold">
                    +{row.changePct}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
