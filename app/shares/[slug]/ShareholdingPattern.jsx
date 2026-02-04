'use client';

import { useState } from "react";

const DATA = {
  2022: {
    promoters: 99.99,
    others: 0.01,
  },
  2023: {
    promoters: 98.5,
    others: 1.5,
  },
  2024: {
    promoters: 97.2,
    others: 2.8,
  },
};

export default function ShareholdingPattern() {
  const [year, setYear] = useState(2022);

  const { promoters, others } = DATA[year];

  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Shareholding Pattern
      </h2>
      <div className="flex gap-4 mb-6">
        {[2022, 2023, 2024].map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                year === y
                  ? "bg-primary-100 text-primary-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="mb-5">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">Promoters</span>
          <span>{promoters}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 rounded-full"
            style={{ width: `${promoters}%` }}
          />
        </div>
      </div>

      {/* Others */}
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">Others</span>
          <span>{others}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-400 rounded-full"
            style={{ width: `${others}%` }}
          />
        </div>
      </div>
    </div>
  );
}
