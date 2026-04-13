
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

  return (
    <div className="space-y-8">
      <Fundamentals data={unlistedShareDetails?.fundamental_details} />
      <FinancialsSection />
      <ShareholdingPattern />
      <PromotersManagement data={promoters} />

    </div>
  );
}
