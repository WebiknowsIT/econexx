'use client';

import { ArchiveIcon, ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

// Dummy data
const DATA = [
  {
    id: 1,
    company: "NSE India Limited Unlisted Shares",
    marketCap: 513562.5,
    chart: [120, 118, 130, 126, 140, 135],
  },
  {
    id: 2,
    company: "SBI Mutual Fund Unlisted Shares",
    marketCap: 157436.89,
    chart: [90, 92, 91, 94, 96, 102],
  },
  {
    id: 3,
    company: "Navara Energy (Formerly Essar Oil) Limited",
    marketCap: 134150.5,
    chart: [160, 158, 155, 152, 150, 149],
  },
  {
    id: 4,
    company: "Inox Clean Energy Limited",
    marketCap: 69953.3,
    chart: [60, 58, 62, 70, 72, 75],
  },
  {
    id: 5,
    company: "Capgemini Technology Services India Limited",
    marketCap: 64902.6,
    chart: [88, 85, 82, 80, 79, 78],
  },
  {
    id: 6,
    company: "Zepto Unlisted Shares",
    marketCap: 55024.04,
    chart: [45, 48, 52, 55, 60, 64],
  },
  {
    id: 7,
    company: "Anheuser Busch InBev (Sabmiller) India",
    marketCap: 48280.51,
    chart: [110, 110, 109, 108, 95, 92],
  },
  {
    id: 8,
    company: "OfBusiness (OFB) Tech Private Limited",
    marketCap: 43686.72,
    chart: [72, 70, 73, 74, 78, 82],
  },
  {
    id: 9,
    company: "OYO (Oravel Stays) Limited Unlisted Shares",
    marketCap: 37835.4,
    chart: [65, 60, 55, 58, 62, 61],
  },
  {
    id: 10,
    company: "Goa Shipyard Limited Unlisted Shares",
    marketCap: 35502.0,
    chart: [90, 95, 98, 96, 92, 94],
  },
  {
    id: 11,
    company: "HDB Financial Services Limited",
    marketCap: 82000.75,
    chart: [100, 102, 105, 108, 110, 112],
  },
  {
    id: 12,
    company: "Tata Capital Limited",
    marketCap: 92050.2,
    chart: [130, 128, 132, 135, 138, 140],
  },
  {
    id: 13,
    company: "Sterlite Power Transmission Limited",
    marketCap: 41220.15,
    chart: [85, 83, 80, 82, 84, 86],
  },
  {
    id: 14,
    company: "Imagine Marketing (boAt) Private Limited",
    marketCap: 38690.9,
    chart: [70, 75, 78, 80, 82, 85],
  },
  {
    id: 15,
    company: "Paytm Payments Bank Limited",
    marketCap: 29040.3,
    chart: [55, 53, 50, 48, 46, 44],
  },
];


export default function ScreenerResults() {
  const [sortKey, setSortKey] = useState("marketCap");
  const [sortDir, setSortDir] = useState("desc");
  const [page, setPage] = useState(1);
  const pageSize = 10;

//   const isUptrend = (chart) =>
//   chart[chart.length - 1] > chart[0];


  const sortedData = [...DATA].sort((a, b) => {
    const val =
      sortDir === "asc"
        ? a[sortKey] > b[sortKey]
        : a[sortKey] < b[sortKey];
    return val ? 1 : -1;
  });

  const paginated = sortedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="grid grid-cols-12 bg-primary-600 text-white text-sm font-semibold px-4 py-3 sticky top-0">
        <div
          className="col-span-4 cursor-pointer flex items-center gap-1"
          onClick={() => toggleSort("company")}
        >
          Company
          <SortIcon active={sortKey === "company"} dir={sortDir} />
        </div>

        <div className="col-span-4 text-center">Chart</div>

        <div
          className="col-span-4 text-right cursor-pointer flex justify-end items-center gap-1"
          onClick={() => toggleSort("marketCap")}
        >
          M.Cap (Cr)
          <SortIcon active={sortKey === "marketCap"} dir={sortDir} />
        </div>
      </div>

      {/* Rows */}
      {paginated.map((row, i) => (
        <div
          key={row.id}
          className={`grid grid-cols-12 px-4 py-4 items-center text-sm
            ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}
            hover:bg-green-50 transition`}
        >
          <div className="col-span-4 font-medium text-gray-900">
            {row.company}
          </div>

          <div className="col-span-4 flex justify-center">
            <div className="h-10 w-28">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={row.chart.map((v) => ({ v }))}
                >
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#7A3D9A"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-4 text-right text-gray-700">
            {row.marketCap.toLocaleString()}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 text-sm">
        <span className="text-gray-500">
          Showing 1 to {paginated.length} of {DATA.length} records
        </span>

        <div className="flex items-center gap-1">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ‹
          </button>

          <button className="px-3 py-1 bg-primary-600 text-white rounded">
            {page}
          </button>

          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            onClick={() => setPage(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

/* Sort Icon */
function SortIcon({ active, dir }) {
  if (!active) return <span className="text-white/50"><ArrowUpDown size={14} /></span>;
  return <span>{dir === "asc" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}</span>;
}
