import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StockCard from "@/components/StockCard";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function FeaturedUnlistedShares({data}) {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <SectionTitle
            eyebrow="Shares"
            title={data?.title}
            description={data?.subtitle}
          />
          <AnimatedSection delay={0.4}>
            <Button className="mb-14" href="/unlisted-shares/list" variant="outline">
              View All <ArrowRight className="ms-2" size={18} />
            </Button>
          </AnimatedSection>
        </div>
      


        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {data?.items.map((items, i) => (
            <AnimatedSection key={items.id} delay={0.1}>
              <StockCard
                id={items.id}
                title={items.name}
                category={items.category}
                price={items.sell_price}
                change={items.price_change_percent || 'NA'}
                duration={items.price_change_period || 'NA'}
                badge="STABLE"
                logo={items.image_url || "/images/stocks/nse.png"}
              />
            </AnimatedSection>
          ))}

    
          
        </div>
      </div>
    </section>
  );
}
