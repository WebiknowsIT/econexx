import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StockCard from "@/components/StockCard";

export default function PopularUnlistedShares() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <AnimatedSection delay={0.2}>
                <h2 className="editorial-title text-4xl text-gray-900 mb-4">
                  Popular Unlisted shares
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-gray-500">
                  Discover our top picks—popular unlisted shares investors
                  actively trade through our trusted platform
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.4}>
              <a
                href="##"
                className="text-primary-600 font-semibold flex items-center gap-2 hover:underline"
              >
                View All →
              </a>
            </AnimatedSection>
          </div>
        </AnimatedSection>

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
        </div>
      </div>
    </section>
  );
}
