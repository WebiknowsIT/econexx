import AnimatedSection from "@/components/AnimatedSection";

export default function LeadingSectors() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection delay={0.2}>
              <h2 className="editorial-title text-4xl text-gray-900 mb-4">
                Leading Sectors in the Unlisted Market
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-4 text-lg text-slate-600">
                Explore the sectors driving growth and investor interest across
                today’s unlisted market ecosystem.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

          {/* CARD 1 */}
          <AnimatedSection delay={0.1}>
            <SectorCard
              icon="🌾"
              title="Agriculture & Agrochemicals"
              count="5 Companies"
            />
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection delay={0.2}>
            <SectorCard
              icon="🌾"
              title="Agriculture & Plantations"
              count="1 Company"
            />
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection delay={0.3}>
            <SectorCard
              icon="✈️"
              title="Air Transport Services"
              count="1 Company"
            />
          </AnimatedSection>

          {/* CARD 4 */}
          <AnimatedSection delay={0.4}>
            <SectorCard
              icon="✈️"
              title="Airports"
              count="2 Companies"
            />
          </AnimatedSection>

          {/* CARD 5 */}
          <AnimatedSection delay={0.5}>
            <SectorCard
              icon="🍷"
              title="Alcoholic Beverages"
              count="3 Companies"
            />
          </AnimatedSection>

          {/* CARD 6 */}
          <AnimatedSection delay={0.6}>
            <SectorCard
              icon="👕"
              title="Apparel & Fashion"
              count="2 Companies"
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Sector Card Component */
/* ---------------------------------- */

function SectorCard({ icon, title, count }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 mx-auto rounded-xl border-2 border-primary-500 flex items-center justify-center bg-primary-50 group-hover:bg-primary-100 transition">
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className="mt-6 text-center font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-center text-sm text-slate-500">
        {count}
      </p>
    </div>
  );
}
