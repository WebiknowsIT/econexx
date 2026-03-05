// components/detail/ShareDetailPage.jsx
// Your existing <FAQ> component is used directly for the FAQ tab.
"use client";
import { useState }      from "react";

import DetailHero        from "./components/DetailHero";
import TabBar            from "./components/TabBar";
import BuySellBox        from "./components/BuySellBox";
import SimilarShares     from "./components/SimilarShares";
import OverviewTab       from "./components/tabs/OverviewTab";
import FinancialsTab     from "./components/tabs/FinancialsTab";
import PriceHistoryTab   from "./components/tabs/PriceHistoryTab";
import DocumentsTab      from "./components/tabs/DocumentsTab";
import FAQ from "@/components/ui/Faq";

export default function ShareDetailPage1({ share, faqData }) {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview":   return <OverviewTab     share={share} />;
      case "financials": return <FinancialsTab   share={share} />;
      case "price":      return <PriceHistoryTab share={share} />;
      case "documents":  return <DocumentsTab    share={share} />;
      case "faq":
        return (
          <FAQ
            title="Frequently Asked"
            highlightedTitle="Questions"
            subtitle={`Everything you need to know before investing in ${share.name}.`}
            data={faqData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <> 
      <DetailHero share={share} />
      <TabBar active={activeTab} onChange={setActiveTab} />
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 min-w-0">
          {renderTab()}
        </div>
        <BuySellBox share={share} />
      </div>
      <SimilarShares similar={share.similar} />
    </>
  );
}
