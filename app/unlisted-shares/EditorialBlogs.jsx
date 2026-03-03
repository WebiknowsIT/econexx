import AnimatedSection from "@/components/AnimatedSection";

export default function EditorialBlogs() {
  return (
    <section className="py-24 bg-[#FCFCFD]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <AnimatedSection delay={0.2}>
              <h2 className="editorial-title text-4xl text-gray-900 mb-4">
                Unlisted Shares: Latest News & Updates
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Get timely insights on unlisted companies making headlines and
                impacting investor sentiment.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-10">

          {/* MAIN ARTICLE */}
          <AnimatedSection delay={0.4}>
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-8 bg-gray-200 aspect-[16/9] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <img
                  src="/images/blog1.jpg"
                  alt="Main Blog"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-xs font-bold">
                  MUST READ
                </span>
              </div>

              <div className="max-w-xl">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>Strategy</span> • <span>6 min read</span> •{" "}
                  <span>Dec 23, 2024</span>
                </div>

                <h3 className="editorial-title text-3xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  The Reverse Flip: How Startups are returning to India for IPO
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Analyzing the trend of externalized startups moving base back
                  to India to leverage the booming domestic capital markets...
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* SIDE ARTICLES */}
          <div className="lg:col-span-5 flex flex-col gap-10">

            <AnimatedSection delay={0.5}>
              <SideArticle
                image="/images/blog2.jpg"
                category="Banking"
                title="IKF Finance signals massive growth phase with new equity infusion"
                description="Valuation report analysis..."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <SideArticle
                image="/images/blog3.jpg"
                category="Technology"
                title="PlasmaGen Biosciences raises ₹150 Crore for global expansion"
                description="What this means for early investors..."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <SideArticle
                image="/images/blog4.jpg"
                category="Guide"
                title="How to safeguard your unlisted investments from online frauds"
                description="A checklist for new investors..."
              />
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Side Article Component */
/* ---------------------------------- */

function SideArticle({ image, category, title, description }) {
  return (
    <div className="flex gap-6 group cursor-pointer">
      <div className="w-32 h-32 flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <span className="text-xs font-bold text-primary-600 mb-2 block uppercase tracking-wide">
          {category}
        </span>

        <h4 className="font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors">
          {title}
        </h4>

        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}
