"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ReusableSlider from "@/components/ReusableSlider";
import { SwiperSlide } from "swiper/react";

const TESTIMONIALS = [
  {
    name: "Gopinath Damodaran",
    quote:
      "Transactions are lightning fast. Shares got credited immediately. Fair and genuine transaction.",
  },
  {
    name: "Nilesh Dahiwalkar",
    quote:
      "Excellent service and trustworthy. Last experience was awesome with buying my first private equity.",
  },
  {
    name: "Gopinath Damodaran",
    quote:
      "Transactions are lightning fast. Shares got credited immediately. Fair and genuine transaction.",
  },
  {
    name: "Nilesh Dahiwalkar",
    quote:
      "Excellent service and trustworthy. Last experience was awesome with buying my first private equity.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="HowItWorks"
      className="py-24 bg-gray-900 text-white overflow-hidden relative"
    >
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 skew-x-12 translate-x-24" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <AnimatedSection delay={0.1}>
            <div>
              <AnimatedSection delay={0.2}>
                <h2 className="editorial-title text-4xl mb-8">
                  Investing in private markets should be as simple as public markets.
                </h2>
              </AnimatedSection>

              <div className="">
                <AnimatedSection delay={0.3}>
                  <Step
                    number="1"
                    title="Connect with RM"
                    description="Our relationship managers help you discover the best price and quantity for your desired stock."
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <Step
                    number="2"
                    title="Payment & Processing"
                    description="Secure transaction processing with legal deal documentation for your protection."
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <Step
                    number="3"
                    title="Instant Transfer"
                    description="Shares are credited to your DEMAT account within 24 hours of deal completion."
                  />
                </AnimatedSection>

              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT TESTIMONIAL CARD */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">

              <AnimatedSection delay={0.4}>
                <h3 className="editorial-title text-2xl mb-8">
                  Investor Testimonials
                </h3>
              </AnimatedSection>

                          <ReusableSlider
                              slidesPerView={1}   // 2 columns
                              rows={2}            // ✅ 2 rows
                              spaceBetween={24}
                              autoplay
                              delay={3500}
                              pagination
                              className="pb-10"
                          >
                              {TESTIMONIALS.map((item, index) => (
                                  <SwiperSlide key={index}>
                                      <TestimonialCard {...item} />
                                  </SwiperSlide>
                              ))}
                          </ReusableSlider>


            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Step Component */
/* ---------------------------------- */

function Step({ number, title, description }) {
  return (
    <div className="flex gap-6 mb-8">
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Testimonial Card */
/* ---------------------------------- */

function TestimonialCard({ quote, name }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
      <p className="italic text-gray-300 mb-4">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full" />
        <div>
          <div className="font-bold text-sm">{name}</div>
          <div className="text-xs text-secondary-500 uppercase font-bold">
            Verified Investor
          </div>
        </div>
      </div>
    </div>
  );
}



