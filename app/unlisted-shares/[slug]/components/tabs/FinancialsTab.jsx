// components/detail/tabs/FinancialsTab.jsx

export default function FinancialsTab({ share }) {
  const maxRevenue = Math.max(...share.revenueChart.map((r) => r.value));

  return (
    <div className="space-y-8">

      {/* Financial Table */}
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
          Financial Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary-100">
                <th className="text-left py-3 text-xs text-primary-400 uppercase tracking-wider font-medium">Metric</th>
                <th className="text-right py-3 text-xs text-primary-400 uppercase tracking-wider font-medium">FY 2022</th>
                <th className="text-right py-3 text-xs text-primary-400 uppercase tracking-wider font-medium">FY 2023</th>
                <th className="text-right py-3 text-xs text-primary-400 uppercase tracking-wider font-medium">FY 2024 (Est.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary-50">
              {share.financials.map((row) => (
                <tr key={row.metric} className="hover:bg-primary-50 transition-colors">
                  <td className="py-3.5 font-medium text-primary-900">{row.metric}</td>
                  <td className="py-3.5 text-right text-red-400">{row.fy22}</td>
                  <td className="py-3.5 text-right text-red-400">{row.fy23}</td>
                  <td className={`py-3.5 text-right font-semibold ${row.positiveLatest ? "text-secondary-600" : "text-primary-900"}`}>
                    {row.fy24e}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-primary-300 mt-4">
          * FY 2024 figures are analyst estimates. Past performance is not indicative of future results.
        </p>
      </div>

      {/* Revenue Bar Chart */}
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h3 className="font-semibold text-primary-900 mb-6">Revenue Growth (₹ Cr)</h3>
        <div className="flex items-end gap-4 h-40">
          {share.revenueChart.map((bar) => {
            const heightPct = Math.round((bar.value / maxRevenue) * 100);
            return (
              <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
                <div className={`text-xs ${bar.highlight ? "font-bold text-secondary-600" : "text-primary-400"}`}>
                  ₹{bar.value.toLocaleString("en-IN")}
                </div>
                <div
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${heightPct}%`,
                    background: bar.highlight
                      ? "linear-gradient(90deg,#F9A24F,#7A3D9A)"
                      : "linear-gradient(90deg,#7A3D9A,#F9A24F)",
                  }}
                />
                <div className={`text-xs ${bar.highlight ? "font-bold text-secondary-600" : "text-primary-400"}`}>
                  {bar.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shareholding */}
      <div className="bg-white border border-primary-100 rounded-2xl p-7">
        <h3 className="font-semibold text-primary-900 mb-5">Shareholding Pattern</h3>
        <div className="space-y-3">
          {share.shareholding.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-primary-700">{s.name}</span>
                <span className="font-semibold text-primary-900">{s.pct}%</span>
              </div>
              <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.pct}%`,
                    background: "linear-gradient(90deg,#7A3D9A,#F9A24F)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
