'use client';

import { useState } from "react";
import { filterChartData } from "../../../utils/helper";
import StockPriceChart from "./StockPriceChart";
import { TimeFilter } from "./TimeFilter";


const dummyChartData = [
  { date: "2021-01", price: 320 },
  { date: "2021-03", price: 290 },
  { date: "2021-06", price: 275 },
  { date: "2021-09", price: 275 },
  { date: "2021-12", price: 240 },

  { date: "2022-03", price: 240 },
  { date: "2022-06", price: 220 },
  { date: "2022-09", price: 220 },
  { date: "2022-12", price: 220 },

  { date: "2023-02", price: 185 },
  { date: "2023-04", price: 220 },
  { date: "2023-06", price: 145 },
  { date: "2023-08", price: 135 },
  { date: "2023-10", price: 165 },
  { date: "2023-12", price: 185 },

  { date: "2024-03", price: 185 },
  { date: "2024-06", price: 185 },
  { date: "2024-09", price: 185 },
  { date: "2024-12", price: 260 },

  { date: "2025-03", price: 275 },
  { date: "2025-06", price: 275 },
  { date: "2025-09", price: 260 },
  { date: "2025-12", price: 225 },

  { date: "2026-02", price: 245 },
];


export default function ShareChartSection() {
  const [range, setRange] = useState("MAX");

  const filteredData = filterChartData(dummyChartData, range);

  return (
    <div className="">
      <StockPriceChart data={filteredData} />
      <TimeFilter active={range} onChange={setRange} />
    </div>
  );
}
