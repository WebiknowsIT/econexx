import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StockCard from "@/components/StockCard";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function FeaturedUnlistedShares() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <SectionTitle
            eyebrow="— Shares"
            title="Featured Unlisted Shares"
            description="Hand-picked opportunities across high-conviction sectors with strong growth potential."
          />
          <AnimatedSection delay={0.4}>
            <Button className="mb-14" href="/unlisted-shares/list" variant="outline">
              View All <ArrowRight className="ms-2" size={18} />
            </Button>
          </AnimatedSection>
        </div>
      


        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <AnimatedSection delay={0.1}>
            <StockCard
            id={1}
            title="NSE India Limited Unlisted Shares"
            category= "Exchange & Data Services"
            price= "12500"
            change= "+1.3%"
            duration= "15D"
            badge= "STABLE"
            logo= "/images/stocks/nse.png"
            />
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection delay={0.2}>
            <StockCard
            id={1}
            title="CSK Unlisted Shares"
            category= "Sports & Entertainment"
            price= "206.00"
            change= "-3.5%"
            duration= "15D"
            badge= "HOT DEAL"
            logo= "/images/stocks/csk_unlisted_shares.jpg"
            />
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection delay={0.3}>
            <StockCard
              id={1}
              title="Prisma Global Limited (Prism AI)"
              category="Technology"
              price="06.00"
              change="-2.8%"
              duration="15D"
              badge="TRENDING"
              logo="/images/stocks/prisma_global.png"
            />
          </AnimatedSection>
          {/* CARD 1 */}
          <AnimatedSection delay={0.1}>
            <StockCard
            id={1}
            title="NSE India Limited Unlisted Shares"
            category= "Exchange & Data Services"
            price= "12500"
            change= "+1.3%"
            duration= "15D"
            badge= "STABLE"
            logo= "/images/stocks/nse.png"
            />
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection delay={0.2}>
            <StockCard
            id={1}
            title="CSK Unlisted Shares"
            category= "Sports & Entertainment"
            price= "206.00"
            change= "-3.5%"
            duration= "15D"
            badge= "HOT DEAL"
            logo= "/images/stocks/csk_unlisted_shares.jpg"
            />
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection delay={0.3}>
            <StockCard
              id={1}
              title="Prisma Global Limited (Prism AI)"
              category="Technology"
              price="06.00"
              change="-2.8%"
              duration="15D"
              badge="TRENDING"
              logo="/images/stocks/prisma_global.png"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
