"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ReusableSlider from "@/components/ReusableSlider";
import { SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "Corporate bonds through Econexx helped me generate steady income beyond traditional FDs.",
      author: "Rajesh Kumar",
      designation: "Senior Executive",
    },
    {
      id: 2,
      quote:
        "Their unlisted share allocation gave me early access to a high-growth company before IPO.",
      author: "Priya Sharma",
      designation: "Entrepreneur",
    },
    {
      id: 3,
      quote:
        "The IPO advisory helped me make informed decisions instead of emotional investments.",
      author: "Amit Patel",
      designation: "Business Owner",
    },
    {
      id: 4,
      quote:
        "These guys have a good track record, so it was a no-brainer for me to invest about 4 lakhs in their first issue. I'll also recommend to my family & friends to invest.",
      author: "Lakshminarayanan Iyer",
      designation: "Investor",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary">
              Trusted by <span className="text-secondary-300">Growth-Focused</span> Investors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by 1,50,000+ customers
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials Slider */}
        <AnimatedSection delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <ReusableSlider
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={true}
              delay={5000}
              navigation={false}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              onSwiper={setSwiperInstance}
              className="testimonial-slider"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="text-center px-8 py-12">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <Quote className="w-12 h-12 text-secondary-500" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-200 pt-6 inline-block">
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </ReusableSlider>

            {/* Custom Navigation Buttons - Left */}
            <button
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-600 flex items-center justify-center transition-colors z-10"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Custom Navigation Buttons - Right */}
            <button
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-600 flex items-center justify-center transition-colors z-10"
              onClick={() => swiperInstance?.slideNext()}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
