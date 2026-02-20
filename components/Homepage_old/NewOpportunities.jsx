import AnimatedSection from "@/components/AnimatedSection";
import StockCard from "../StockCard";

export default function NewOpportunities() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">

            <div>
              <AnimatedSection delay={0.2}>
                <h2 className="editorial-title text-4xl text-gray-900 mb-4">
                  New Opportunities Added
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-gray-500">
                  Browse the latest unlisted shares and take the next step toward
                  long-term portfolio growth.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.4}>
              <a
                href="##"
                className="text-primary-600 font-semibold flex items-center gap-2 hover:underline"
              >
                View All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
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
              title="S3V Vascular Technologies Limited"
              category= "Exchange & Data Services"
              price= "395"
              change= "+20.3%"
              duration= "6M"
              badge= "STABLE"
              logo= "/images/stocks/s3v_vascular_technologies.png"
              />
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection delay={0.2}>
            <StockCard
              id={2}
              title="Pashupati Polytex Private Limited"
              category= "Sports & Entertainment"
              price= "280"
              change= "-0.5%"
              duration= "6M"
              badge= "HOT DEAL"
              logo= "/images/stocks/pashupati_polytex.jpg"
              />
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection delay={0.3}>
            <StockCard
              id={2}
              title="Fractal Analytics Limited"
              category= "Technology"
              price= "900"
              change= "0.8%"
              duration= "6M"
              badge= "TRENDING"
              logo= "/images/stocks/fractal_analytics.png"
              />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}


