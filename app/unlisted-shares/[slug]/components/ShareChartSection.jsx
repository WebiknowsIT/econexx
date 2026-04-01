'use client';

import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { filterChartData } from "@/utils/helper";
import StockPriceChart from "./StockPriceChart";
import { TimeFilter } from "./TimeFilter";

export default function ShareChartSection() {
  const { unlistedShareDetails } = useSelector((state) => state.unlistedShares);

  const [range, setRange] = useState("MAX");

  const priceHistory = unlistedShareDetails?.price_history || [];

  // ✅ Convert API → chart format
  const chartData = useMemo(() => {
    return priceHistory.map((item) => ({
      date: item.date, // already good format
      price: Number(item.price) || 0,
    }));
  }, [priceHistory]);

  // ✅ Apply filter (same logic as before)
  const filteredData = useMemo(() => {
    return filterChartData(chartData, range);
  }, [chartData, range]);

  return (
    <div>
      <div className="flex gap-10 justify-between items-center mb-4">
        <h2 className="font-serif text-2xl font-bold text-primary-900">
          Price History
        </h2>

        <TimeFilter active={range} onChange={setRange} />
      </div>

      {/* ✅ Handle empty state */}
      {filteredData.length ? (
        <StockPriceChart data={filteredData} />
      ) : (
        <p className="text-sm text-gray-500">
          No price history available
        </p>
      )}
    </div>
  );
}