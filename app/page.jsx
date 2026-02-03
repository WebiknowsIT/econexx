// app/page.tsx

import MarketMarquee from "@/components/MarketMarquee";

import Hero from "@/components/Homepage/Hero";
import PopularUnlistedShares from "@/components/Homepage/PopularUnlistedShares";
import LeadingSectors from "@/components/Homepage/LeadingSectors";
import NewOpportunities from "@/components/Homepage/NewOpportunities";
import HistoricalIPO from "@/components/Homepage/HistoricalIPO";
import HowItWorks from "@/components/Homepage/HowItWorks";
import EditorialBlogs from "@/components/Homepage/EditorialBlogs";
import ShortVideos from "@/components/Homepage/ShortVideos";


export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <MarketMarquee />
        <PopularUnlistedShares />
        <LeadingSectors />
        <NewOpportunities />
        <HistoricalIPO />
        <HowItWorks />
        <EditorialBlogs />
        <ShortVideos />
      </main>
    </>
  );
}
