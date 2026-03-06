// components/detail/tabs/PriceHistoryTab.jsx
import { useState } from "react";
import ShareChartSection from "../ShareChartSection";

export default function PriceHistoryTab({ share }) {

  return (
    <div className="space-y-8">
      <div className="bg-white border border-primary-100 rounded-2xl px-7 py-5">
        <ShareChartSection />
        {/* Price Table */}
        {/* <div className="overflow-x-auto rounded-xl border border-primary-100 mt-4">
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
        </div> */}

      </div>
    </div>
  );
}
