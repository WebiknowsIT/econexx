// app/page.tsx

import Hero from "./Hero";
import MarketMarquee from "@/components/MarketMarquee";
import PopularUnlistedShares from "./FeaturedUnlistedShares";
import LeadingSectors from "./LeadingSectors";
import NewOpportunities from "./NewOpportunities";
import HistoricalIPO from "./HistoricalIPO";
import HowItWorks from "./HowItWorks";
import EditorialBlogs from "./EditorialBlogs";



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
      </main>
    </>
  );
}
