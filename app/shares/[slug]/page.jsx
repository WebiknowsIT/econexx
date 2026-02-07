import { notFound } from "next/navigation";


import BuySellCard from "./BuySellCard";
import ShareHeader from "./ShareHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ShareChartSection from "./ShareChartSection";
import CreateAlertCard from "./CreateAlertCard";
import ValuationCard from "./ValuationCard";
import AboutShare from "./AboutShare";
import Fundamentals from "./Fundamentals";
import FinancialsSection from "./FinancialsSection";
import ShareholdingPattern from "./ShareholdingPattern";
import PromotersManagement from "./PromotersManagement";
import DownloadSection from "./DownloadSection";
import FAQs from "./FAQs";

// Optional: server-side fetch
// async function getShareDetails(slug) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/shares/${slug}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) return null;
//   return res.json();
// }


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




export default function ShareDetailsPage({ params }) {
    const { slug } = params;

    //   const share = await getShareDetails(slug);
    //   if (!share) notFound();

    return (
        <div className="bg-white max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Shares", href: "/shares" },
                        { label: "Arohan Financial Services Unlisted Shares" }
                    ]}
                />
                <ShareHeader />

                <div className="space-y-6">
                    <ShareChartSection />
                    <AboutShare
                        title="About Arohan Financial Services Unlisted Shares"
                        points={[
                            "Arohan Financial is a leading NBFC-MFI with operations in financially under-penetrated Low Income States of India. They provide income generating loans and other financial inclusion related products to customers who have limited or no access to financial services.",
                            "Arohan Financial is a leading NBFC-MFI with operations in financially under-penetrated Low Income States of India. They provide income generating loans and other financial inclusion related products to customers who have limited or no access to financial services.",
                            "Started in the year 2006, Arohan Financial is the largest NBFC-MFI in Eastern India and the fifth largest NBFC-MFI in India in terms of Gross Loan Portfolio."
                        ]}
                    />
                    <Fundamentals data={fundamentalData} />
                    <FinancialsSection />
                    <ShareholdingPattern />
                    <PromotersManagement
                        data={[
                            {
                                name: "Sanjiv Nandan Sahaya",
                                designation: "Chairman & MD",
                                experience: "20+",
                                linkedin: "https://linkedin.com",
                            },
                            {
                                name: "Rajendra Sahay",
                                designation: "Director",
                                experience: "20+",
                                linkedin: "https://linkedin.com",
                            },
                            {
                                name: "Prakash Kumar Damani",
                                designation: "Director",
                                experience: "15+",
                                linkedin: "https://linkedin.com",
                            },
                        ]}
                    />
                    <DownloadSection />
                </div>
            </div>
            <div className="">
                <div className="space-y-6 sticky top-[90px]">
                    <BuySellCard />
                    <CreateAlertCard />
                    <ValuationCard />
                </div>
            </div>
        </div>
        <FAQs data={FaqData} />
        </div>

    );
}
