"use client";
import { useEffect, useState } from "react";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

import DetailHero        from "./components/DetailHero";
import TabBar            from "./components/TabBar";
import BuySellBox        from "./components/BuySellBox";
import SimilarShares     from "./components/SimilarShares";
import CreateAlertCard     from "./components/CreateAlertCard";
import ValuationCard     from "./components/ValuationCard";
import OverviewTab       from "./components/tabs/OverviewTab";
import FinancialsTab     from "./components/tabs/FinancialsTab";
import PriceHistoryTab   from "./components/tabs/PriceHistoryTab";
import DocumentsTab      from "./components/tabs/DocumentsTab";

import PageLoader from "@/components/PageLoader";
import FAQs from "./components/FAQs";


import { useDispatch, useSelector } from "react-redux";
import {fetchUnlistedShareById} from "@/store/action/unlistedShareActions";

import { razorpayData, razorpayFaqs } from "./Data";

const FaqData = [
    {
        question:
            "How to Invest in Aditya Birla Sun Life Gold Fund Direct Growth?",
        answer:
            "You can invest online through the fund house website, AMC platforms, or via registered distributors. SIP and lump sum options are available.",
    },
    {
        question:
            "What kind of returns does Aditya Birla Sun Life Gold Fund Direct Growth provide?",
        answer:
            "Returns depend on gold price movements and market conditions. It is suitable for long-term diversification.",
    },
    {
        question:
            "How much expense ratio is charged by Aditya Birla Sun Life Gold Fund Direct Growth?",
        answer:
            "The expense ratio is charged as per SEBI guidelines and may change from time to time.",
    },
    {
        question:
            "What is the AUM of Aditya Birla Sun Life Gold Fund Direct Growth?",
        answer:
            "AUM refers to Assets Under Management and reflects the total market value of assets managed by the fund.",
    },
    {
        question:
            "How to Redeem Aditya Birla Sun Life Gold Fund Direct Growth?",
        answer:
            "Redemption can be done online through the AMC website or via your investment platform.",
    },
    {
        question:
            "Can I invest in SIP and Lump Sum of Aditya Birla Sun Life Gold Fund Direct Growth?",
        answer:
            "Yes, both SIP and lump sum investment options are available.",
    },
    {
        question:
            "What is the NAV of Aditya Birla Sun Life Gold Fund Direct Growth?",
        answer:
            "NAV represents the per-unit value of the fund and is updated daily on the AMC website.",
    },
];

export default function page() {

  const dispatch = useDispatch();
  const params = useParams();
  const slug = params?.slug;

  const { unlistedShareDetails, detailsStatus } = useSelector((state) => state.unlistedShares);
  //const id = params?.id;

  // ✅ extract id
  const id = slug?.split("-").pop();

  const [activeTab, setActiveTab] = useState("overview");
  
  const renderTab = () => {
    switch (activeTab) {
      case "overview":   return <OverviewTab     share={razorpayData} />;
      case "FundamentalsFinancials": return <FinancialsTab   share={unlistedShareDetails?.financial_documents} />;
      case "price":      return <PriceHistoryTab />;
      case "documents":  return <DocumentsTab    share={unlistedShareDetails} />;
      case "faq":        return (<FAQs data={FaqData} />);
      default:           return null;
    }
  };

   // ✅ Fetch data
  useEffect(() => {
    if (id) {
      dispatch(fetchUnlistedShareById(id));
    }
  }, [dispatch, id]);

  console.log("unlistedShareDetails", unlistedShareDetails);

  if (detailsStatus === "loading") return <PageLoader />;

  if (!unlistedShareDetails) {return <p className="text-center py-10">No Data Found</p>;}

  return (
    <> 
          <DetailHero share={razorpayData} data={unlistedShareDetails} />
          <TabBar active={activeTab} onChange={setActiveTab} />
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-10 items-start bg-white">
            <div className="flex-1 min-w-0">
              {renderTab()}
            </div>
            <div className="w-full lg:w-80 shrink-0 space-y-6">
              <BuySellBox share={razorpayData} />
              <CreateAlertCard />
              <ValuationCard />
            </div>
           
          </div>
          {/* <SimilarShares similar={razorpayData.similar} /> */}
        </>
  );
}