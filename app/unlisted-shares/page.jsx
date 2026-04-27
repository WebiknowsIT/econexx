"use client";

import "@/styles/unlisted.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnlistedLanding } from "@/store/action/unlistedShareActions";

import HeroDark from "./HeroDark";
import MarketMarquee from "@/components/MarketMarquee";
import HowItWorks from "./HowItWorksLight";
import PopularUnlistedShares from "./FeaturedUnlistedShares";
import WhyUs from "./WhyUs";
import FAQ from "@/components/ui/Faq";
import Testimonials from "@/components/Home/Testimonials";
import Newsletter from "./Newsletter";

import PageLoader from '@/components/PageLoader';

export default function UnlistedShares() {

    const dispatch = useDispatch();
    const { unlistedLanding, landingStatus } = useSelector((state) => state.unlistedShares);

    useEffect(() => {
        if (landingStatus === "idle") {
            dispatch(fetchUnlistedLanding());
        }
    }, [landingStatus]);

    if (landingStatus === "loading") return <PageLoader />;

  return (
    <>
    <HeroDark data={unlistedLanding?.banner} />
    <MarketMarquee />
    <PopularUnlistedShares data={unlistedLanding?.featured_unlisted_shares} />
    <HowItWorks data={unlistedLanding?.how_it_works} />
    <WhyUs data={unlistedLanding?.why_choose} />
    <Testimonials />
    <FAQ 
        title={unlistedLanding?.faqs?.title}
        subtitle={unlistedLanding?.faqs?.subtitle}
        data={unlistedLanding?.faqs?.items} 
    />
    <Newsletter />
        
 
    </>
  );
}