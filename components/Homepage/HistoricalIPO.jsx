import AnimatedSection from "@/components/AnimatedSection";


const IPO_ROWS = [
  {
    name: "Paytm",
    logo: "/images/stocks/paytm-logo.png",
    unlisted: "₹ 800 – 3500",
    ipo: "₹ 2150",
    cmp: "₹ 1324.7",
    change: "▼ -38.39%",
    positive: false,
  },
  {
    name: "Nazara Tech",
    logo: "/images/stocks/nazara_tech-logo.png",
    unlisted: "₹ 200 – 750",
    ipo: "₹ 550",
    cmp: "₹ 239.25",
    change: "▼ -56.5%",
    positive: false,
  },
  {
    name: "Barbeque Nation",
    logo: "/images/stocks/barbeque_nation.png",
    unlisted: "₹ 510 – 1000",
    ipo: "₹ 500",
    cmp: "₹ 189.75",
    change: "▼ -62.05%",
    positive: false,
  },
  {
    name: "CSB Bank",
    logo: "/images/stocks/csb-logo.png",
    unlisted: "₹ 150 – 210",
    ipo: "₹ 195",
    cmp: "₹ 421.1",
    change: "▲ 115.95%",
    positive: true,
  },
  {
    name: "AGS Transact",
    logo: "/images/stocks/ags_transact.jpg",
    unlisted: "₹ 225 – 575",
    ipo: "₹ 175",
    cmp: "₹ 4.11",
    change: "▼ -97.65%",
    positive: false,
  },
  {
    name: "Anand Rathi Wealth Services",
    logo: "/images/stocks/anand_rathi.jpg",
    unlisted: "₹ 175 – 400",
    ipo: "₹ 275",
    cmp: "₹ 3062.5",
    change: "▲ 1013.64%",
    positive: true,
  },
  {
    name: "Aptus Value Housing Finance",
    logo: "/images/stocks/aptus_value.jpg",
    unlisted: "₹ 350 – 420",
    ipo: "₹ 353",
    cmp: "₹ 282.25",
    change: "▼ -20.04%",
    positive: false,
  },
  {
    name: "Suryoday SFB",
    logo: "/images/stocks/suryoday_small_finance.png",
    unlisted: "₹ 175 – 350",
    ipo: "₹ 305",
    cmp: "₹ 140.53",
    change: "▼ -53.92%",
    positive: false,
  },
  {
    name: "UTI AMC",
    logo: "/images/stocks/uti_amc.jpg",
    unlisted: "₹ 750 – 1100",
    ipo: "₹ 554",
    cmp: "₹ 1134.7",
    change: "▲ 104.82%",
    positive: true,
  },
  {
    name: "Delhivery",
    logo: "/images/stocks/delhivery.png",
    unlisted: "₹ 650 – 900",
    ipo: "₹ 487",
    cmp: "₹ 406.1",
    change: "▼ -16.61%",
    positive: false,
  },
];

export default function HistoricalIPO() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <AnimatedSection delay={0.2}>
              <h2 className="editorial-title text-4xl text-gray-900 mb-4">
                Historical IPO Performance of Unlisted Shares
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-4 text-lg text-slate-600">
                Review past IPO performance to understand trends, returns,
                and risks before investing.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* TABLE CARD */}
        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-primary-50 border-b border-slate-200">
                  <tr className="text-slate-600">
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      Unlisted Share Price
                    </th>
                    <th className="px-6 py-4 text-right font-semibold">
                      IPO Price
                    </th>
                    <th className="px-6 py-4 text-right font-semibold">CMP</th>
                    <th className="px-6 py-4 text-right font-semibold">
                      Gain / Loss
                    </th>
                  </tr>
                </thead>

                {/* BODY — NO ANIMATION (IMPORTANT) */}
                <tbody className="divide-y divide-slate-200">
                  {IPO_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div className="flex gap-1 items-center">
                          <div className="w-8 h-8 border border-slate-200 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                            <img src={row.logo} alt={row.name} className="w-auto h-full" />
                          </div>
                          {row.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">{row.unlisted}</td>
                      <td className="px-6 py-4 text-right">{row.ipo}</td>
                      <td className="px-6 py-4 text-right">{row.cmp}</td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            row.positive
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {row.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TABLE FOOTER */}
            <AnimatedSection delay={0.5}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 bg-primary/5 border-t border-slate-200">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <select className="border border-slate-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-primary-500">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  <span>Showing 1–10 of 37 records</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    className="px-3 py-1.5 rounded-md border border-slate-300 text-slate-600 disabled:opacity-50"
                    disabled
                  >
                    ‹
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-primary-600 text-white font-medium">
                    1
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-100">
                    2
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-100">
                    3
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-100">
                    4
                  </button>
                  <button className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-100">
                    ›
                  </button>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}



