import AnimatedSection from "@/components/AnimatedSection";

export default function NewOpportunities() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
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
            <OpportunityCard
              image="/images/stocks/s3v_vascular_technologies.png"
              tag="STABLE"
              tagClass="bg-primary-50 text-primary-700"
              title="S3V Vascular Technologies Limited"
              category="Exchange & Data Services"
              price="₹395"
              change="+20.3%"
              period="6M"
              positive
            />
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection delay={0.2}>
            <OpportunityCard
              image="/images/stocks/pashupati_polytex.jpg"
              tag="HOT DEAL"
              tagClass="bg-amber-50 text-amber-700"
              title="Pashupati Polytex Private Limited"
              category="Sports & Entertainment"
              price="₹280.00"
              change="-0.5%"
              period="6M"
            />
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection delay={0.3}>
            <OpportunityCard
              image="/images/stocks/fractal_analytics.png"
              tag="TRENDING"
              tagClass="bg-primary-50 text-primary-700"
              title="Fractal Analytics Limited"
              category="Technology"
              price="₹900.00"
              change="0.8%"
              period="6M"
              positive
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Reusable Opportunity Card */
/* ---------------------------------- */

function OpportunityCard({
  image,
  tag,
  tagClass,
  title,
  category,
  price,
  change,
  period,
  positive,
}) {
  return (
    <div className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-primary-100">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden">
          <img src={image} alt={title} className="w-auto h-full" />
        </div>
        <span className={`px-2 py-1 rounded text-[10px] font-bold ${tagClass}`}>
          {tag}
        </span>
      </div>

      <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4">{category}</p>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">{price}</span>
        <span
          className={`text-sm font-medium ${
            positive ? "text-primary-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span
          className={`text-sm font-medium ${
            positive ? "text-primary-600" : "text-red-500"
          }`}
        >
          {period}
        </span>
      </div>
    </div>
  );
}
