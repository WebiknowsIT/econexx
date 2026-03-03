"use client";

import { motion } from "framer-motion";

import AnimatedSection from "../../components/AnimatedSection";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "Unlisted shares of MSEI plunge as revival optimism fades; price drops 65% since December",
    date: "Aug 2023",
    excerpt:
      "Shares of Metropolitan Stock Exchange of India (MSEI) have seen a sharp fall as optimism around revival faded.",
    image: "/images/blog1.jpg",
  },
  {
    title: "NSE shareholder count crosses 100,000 mark; stock rallies over 30% in a year",
    date: "Jul 2023",
    excerpt:
      "The number of NSE shareholders has crossed the one-lakh milestone, reflecting strong demand.",
    image: "/images/blog2.jpg",
  },
  {
    title: "Can Swiggy’s High Valuation Stand Up To The IPO Test? Here’s What Grey Market Indicates",
    date: "Jun 2023",
    excerpt:
      "As Swiggy gears up for a potential IPO, grey market signals offer mixed indications.",
    image: "/images/blog3.jpg",
  },
  {
    title: "High Returns: Unlisted shares join the bull run; prices spurt sharply",
    date: "May 2023",
    excerpt:
      "Unlisted shares have seen strong momentum amid increasing investor participation.",
    image: "/images/blog4.jpg",
  },
];

export default function MediaCoverage() {
  return (
    <div className="w-full text-gray-800">

      <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Media <span className="text-[var(--color-primary-500)]">Coverage</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Where experts speak. Our insights, founders, and research from
                <span className="font-medium text-gray-800"> Econexxwealth </span>
                are featured across leading financial publications.
              </p>

              <div className="mt-8">
                <Button variant="primary">Explore Coverage</Button>
              </div>
            </div>
          </AnimatedSection>
          <motion.img
              src="/images/media.png"
              alt="Econexxwealth Media Coverage"
              className="rounded-lg"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {articles.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-[240px_1fr] gap-8 bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 mb-8">
                  
                  <img
                    src={item.image || 'images/blog1.jpg'}
                    alt={item.title}
                    className="rounded-lg object-cover w-full h-40 md:h-full"
                  />

                  <div>
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <h3 className="mt-2 text-xl font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm">
                      {item.excerpt}
                    </p>

                    <button className="mt-4 text-sm font-medium text-[var(--color-primary-500)] hover:underline">
                      Read Full Article →
                    </button>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          <AnimatedSection delay={0.3}>
            <div className="mt-14 flex items-center justify-center gap-2">

              {/* Previous */}
              <button
                className="px-4 py-2 rounded-lg border text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                disabled
              >
                <ChevronLeft />
              </button>

              {/* Page Numbers */}
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-9 h-9 rounded-full text-sm font-medium transition
          ${page === 2
                      ? "bg-[var(--color-primary-500)] text-white"
                      : "border text-gray-700 hover:bg-gray-100"
                    }
        `}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button className="px-4 py-2 rounded-lg border text-sm text-gray-600 hover:bg-gray-100"> 
                <ChevronRight />
              </button>

            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
