"use client";

import "@/styles/unlisted.css";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUnlistedShares } from "@/store/action/unlistedShareActions";

import HeroDark from "./HeroDark";
import MarketMarquee from "@/components/MarketMarquee";
import HowItWorks from "./HowItWorksLight";
import PopularUnlistedShares from "./FeaturedUnlistedShares";
import WhyUs from "./WhyUs";
import FAQ from "@/components/ui/Faq";
import Testimonials from "@/components/Home/Testimonials";
import Newsletter from "./Newsletter";

export default function UnlistedShares() {

//   const dispatch = useDispatch();
//   const { unlistedShares, loading } = useSelector((state) => state.unlistedShares);

//   useEffect(() => {
//     dispatch(fetchUnlistedShares({ page: 1 }));
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;

//   console.log("unlistedShares", unlistedShares);
  

    const econexxFaqs = [
        {
            id: 1,
            question: "What are unlisted shares?",
            answer: (
                <p>
                    Unlisted shares are equity shares of companies that are not yet listed on any stock exchange like NSE or BSE. These are typically pre-IPO companies, startups, or SMEs that have not undergone a public offering yet.
                </p>
            ),
        },
        {
            id: 2,
            question: "Is investing in unlisted shares legal in India?",
            answer: (
                <p>
                    Yes, buying and selling unlisted shares is completely legal in India. Transactions are done through off-market transfers with proper documentation, and all capital gains are taxable as per Income Tax rules.
                </p>
            ),
        },
        {
            id: 3,
            question: "What is the minimum investment amount?",
            answer: (
                <p>
                    The minimum investment varies by company, but typically starts from ₹25,000–₹50,000. Some exclusive pre-IPO deals may have higher minimums. Check each company's listing for specific details.
                </p>
            ),
        },
        {
            id: 4,
            question: "How are shares transferred to my demat account?",
            answer: (
                <p>
                    Shares are transferred via off-market transfer (DP instruction slip) directly from the seller's demat to your demat account. This process typically takes 2–3 business days after payment confirmation.
                </p>
            ),
        },
        {
            id: 5,
            question: "What are the risks involved?",
            answer: (
                <p>
                    Unlisted shares are relatively illiquid compared to listed stocks. There's no guaranteed IPO timeline, and valuations can fluctuate. We recommend investing only a portion of your portfolio and diversifying across companies.
                </p>
            ),
        },
        {
            id: 6,
            question: "Can I sell my shares before an IPO?",
            answer: (
                <p>
                    Yes. You can sell your unlisted shares to other buyers through our platform at any time. Liquidity depends on market demand for that particular company's shares at the time of sale.
                </p>
            ),
        },
    ];

  return (
    <>
      <HeroDark />
      <MarketMarquee />
      <HowItWorks />
      <PopularUnlistedShares />
      <WhyUs />
      <Testimonials />
      <FAQ 
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know before investing with Econexx Wealth."
        data={econexxFaqs} 
      />
        <Newsletter />
        
 
    </>
  );
}