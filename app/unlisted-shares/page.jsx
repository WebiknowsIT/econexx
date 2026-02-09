"use client";

import PageHeader from "../../components/PageHeader";
import ShortVideos from "@/components/Homepage/ShortVideos";
import StockCard from "../../components/StockCard";
import NewsCard from "../../components/NewsCard";
import Button from "../../components/ui/Button";
import AnimatedSection from "../../components/AnimatedSection";
const stocks = [
  {
    id: 1,
    title: "A V Thomas & Co. Limited",
    category: "Unlisted Shares",
    price: "12500",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/ags_transact.jpg",
  },
  {
    id: 2,
    title: "ADIANCE TECHNOLOGIES",
    category: "Unlisted Shares",
    price: "2250",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/anand_rathi.jpg",
  },
  {
    id: 3,
    title: "Adtech Systems Limited",
    category: "Unlisted Shares",
    price: "65",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/aptus_value.jpg",
  },
  {
    id: 4,
    title: "Ambadi Investments Limited (Murugappa)",
    category: "Unlisted Shares",
    price: "0",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/barbeque_nation.png",
  },
  {
    id: 5,
    title: "Amol Minechem Limited",
    category: "Unlisted Shares",
    price: "900",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/csb-logo.png",
  },
  {
    id: 6,
    title: "Anglo-French Drugs & Industries Ltd",
    category: "Unlisted Shares",
    price: "0",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/csk_unlisted_shares.jpg",
  },
  {
    id: 7,
    title: "Anheuser Busch Inbev (Sabmiller) India Ltd",
    category: "Unlisted Shares",
    price: "475",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/delhivery.png",
  },
  {
    id: 8,
    title: "Anugraha Valve Castings Limited",
    category: "Unlisted Shares",
    price: "595",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/fractal_analytics.png",
  },
  {
    id: 9,
    title: "APL Metals Unlisted Shares",
    category: "Unlisted Shares",
    price: "18",
    change: "+12.5%",
    duration: "15D",
    badge: "ACTIVE",
    logo: "/images/stocks/nazara_tech-logo.png",
  },
  {
    id: 10,
    title: "Apollo Fashion International",
    category: "Unlisted Shares",
    price: "52",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/nse.png",
  },
  {
    id: 11,
    title: "Apollo Green Energy Limited",
    category: "Unlisted Shares",
    price: "84",
    change: "-2.33%",
    duration: "15D",
    badge: "VOLATILE",
    logo: "/images/stocks/pashupati_polytex.jpg",
  },
  {
    id: 12,
    title: "Arch Pharmalabs Limited",
    category: "Unlisted Shares",
    price: "85",
    change: "+0.00%",
    duration: "15D",
    badge: "STABLE",
    logo: "/images/stocks/paytm-logo.png",
  },
];

const NEWS_LIST = [
  {
    id: 1,
    title: "IKF Finance signals massive growth phase with new equity infusion",
    description:
      "SBI General Insurance operates on a straightforward model—collect premiums, pay claims over time, and invest the interim funds.",
    date: "03 Feb, 2026",
    views: 8,
    likes: 0,
    image: "/images/blog1.jpg",
    slug: "sbi-general-insurance-9mfy25-results",
  },
  {
    id: 2,
    title: "PlasmaGen Biosciences raises ₹150 Crore for global expansion",
    description:
      "Hero FinCorp, the NBFC arm of the Hero group, released its financials for the nine months ended December 2025.",
    date: "02 Feb, 2026",
    views: 91,
    likes: 2,
    image: "/images/blog2.jpg",
    slug: "hero-fincorp-9mfy26-results",
  },
  {
    id: 3,
    title: "How to safeguard your unlisted investments from online frauds",
    description:
      "After nearly a decade of waiting and regulatory hurdles, NSE is finally preparing to go public.",
    date: "31 Jan, 2026",
    views: 7169,
    likes: 8,
    image: "/images/blog3.jpg",
    slug: "nse-ipo-unlisted-market",
  },
];

export default function UnlistedShares() {

 const renderBlogs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="editorial-title text-4xl text-gray-900 mb-4">
            Unlisted Shares in News
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Latest insights, results, and major developments from India’s unlisted market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_LIST.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button variant="secondary" href="/news">
            View More News
          </Button>
        </div>

      </div>
    </section>
  )
 }

  return (
    <>
      <main className="">
        <PageHeader
          backgroundImage="images/banners.jpg"
          overlay="bg-black/50"
          badge="🔒 Trusted Unlisted Marketplace"
          title="Unlisted Shares Price List"
          //highlight="Price List"
          description="Explore verified unlisted companies with transparent pricing, expert support, and secure transaction execution."
          primaryText="Register Now"
          secondaryText="View Price List"
          onPrimaryClick={() => console.log("Register clicked")}
          onSecondaryClick={() => console.log("View price list clicked")}
        />

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stocks.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <StockCard key={item.id} {...item} />
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center py-6">
              <AnimatedSection delay={0.2}>
                <Button variant="secondary">View More</Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {renderBlogs()}



        <ShortVideos />

        
      </main>
    </>
  );
}
