import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

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
            <div className="StockCard group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-primary-100">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden">
                  <Image
                    src="/images/stocks/nse.png"
                    alt="NSE India"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <span className="px-2 py-1 rounded bg-primary-50 text-primary-700 text-[10px] font-bold">
                  STABLE
                </span>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                NSE India Limited Unlisted Shares
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Exchange & Data Services
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">₹1,950</span>
                <span className="text-sm font-medium text-primary-600">+1.3%</span>
                <span className="text-sm font-medium text-primary-600">15D</span>
              </div>
            </div>
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection delay={0.2}>
            <div className="StockCard group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-primary-100">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden">
                  <Image
                    src="/images/stocks/csk_unlisted_shares.jpg"
                    alt="CSK Unlisted"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 text-[10px] font-bold">
                  HOT DEAL
                </span>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                CSK Unlisted Shares
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Sports & Entertainment
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">₹206.00</span>
                <span className="text-sm font-medium text-red-500">-3.5%</span>
                <span className="text-sm font-medium text-red-500">15D</span>
              </div>
            </div>
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection delay={0.3}>
            <div className="StockCard group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all hover:border-primary-100">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 p-1 rounded-md flex items-center justify-center border border-gray-100 overflow-hidden">
                  <Image
                    src="/images/stocks/prisma_global.png"
                    alt="Prisma Global"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <span className="px-2 py-1 rounded bg-primary-50 text-primary-700 text-[10px] font-bold">
                  TRENDING
                </span>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                Prisma Global Limited (Prism AI)
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Technology
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">₹06.00</span>
                <span className="text-sm font-medium text-red-500">-2.8%</span>
                <span className="text-sm font-medium text-red-500">15D</span>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
