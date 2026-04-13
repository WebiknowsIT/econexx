'use client';

import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ShareholdingPattern() {
  const { unlistedShareDetails } = useSelector(
    (state) => state.unlistedShares
  );

  // ✅ FIX: correct API path (array)
  const shareholding = unlistedShareDetails?.shareholding || [];

  // ✅ Convert array → sorted years
  const years = useMemo(
    () =>
      shareholding
        .map((item) => item.year)
        .sort((a, b) => b - a), // latest first
    [shareholding]
  );

  // ✅ Default selected year (safe)
  const [year, setYear] = useState(null);

  useEffect(() => {
    if (years.length > 0) {
      setYear(years[0]);
    }
  }, [years]);

  // ✅ Get selected year data
  const yearData =
    shareholding.find((item) => item.year === year)?.items || [];

  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Shareholding Pattern
      </h2>

      {/* ✅ Year Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {years.map((y) => (
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

      {/* ✅ Data */}
      <div className="space-y-4">
        {yearData.map((item, index) => {
          const percentage = Number(item.percentage) || 0;

          return (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">
                  {item.entity_name}
                </span>
                <span>{percentage.toFixed(2)}%</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}