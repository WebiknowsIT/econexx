
'use client';
import {useSelector } from "react-redux";

// components/detail/tabs/FinancialsTab.jsx
import Fundamentals from "./../Fundamentals"
import FinancialsSection from "./../FinancialsSection"
import ShareholdingPattern from "./../ShareholdingPattern"
import PromotersManagement from "./../PromotersManagement"

export default function FinancialsTab() {

  const { unlistedShareDetails } = useSelector((state) => state.unlistedShares);
  const promoters = unlistedShareDetails?.promoters || [];

  const fundamentalData = [
    { label: "APL Metals Unlisted Shares Price", value: "₹ 18" },
    { label: "Market Cap (in cr.)", value: "₹ 19" },

    { label: "Shares Price", value: "Per Equity Share" },
    { label: "P/E Ratio", value: "N/A" },

    { label: "Lot Size", value: "5000 Shares" },
    { label: "P/B Ratio", value: "0.33" },

    { label: "52 Week High", value: "₹ 18" },
    { label: "Debt to Equity", value: "2.81" },

    { label: "52 Week Low", value: "₹ 8" },
    { label: "ROE (%)", value: "-20.96", negative: true },

    { label: "Depository", value: "NSDL & CDSL" },
    { label: "Book Value", value: "53.81" },

    { label: "PAN Number", value: "AACCA4246P" },
    { label: "Face Value", value: "10" },

    { label: "ISIN Number", value: "INE578e01019" },
    { label: "Total Shares", value: "10726387" },

    { label: "CIN", value: "L24224WB1948PLC017455" },
    { label: "RTA", value: "M/S Niche Technologies Private Limited" },
];

  return (
    <div className="space-y-8">
      <Fundamentals data={fundamentalData} />
      <FinancialsSection />
      <ShareholdingPattern />
      <PromotersManagement data={promoters} />

    </div>
  );
}
