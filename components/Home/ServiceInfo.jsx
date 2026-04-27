"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import ReusableSlider from "@/components/ReusableSlider";
import StockCard from "@/components/StockCard";
import BondCard from "@/components/BondCard";
import { SwiperSlide } from "swiper/react";
import { Calendar, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const ServiceInfo = () => {
  const [swiperInstances, setSwiperInstances] = React.useState({});

  const handleSwiperInit = (serviceId, swiper) => {
    setSwiperInstances((prev) => ({ ...prev, [serviceId]: swiper }));
  };

  // Unlisted Shares Data
  const unlistedStocks = [
    {
      title: "NSE",
      category: "Stock Exchange",
      price: 4500,
      change: "+12.5%",
      duration: "1Y",
      badge: "GROWTH",
      logo: "/images/stocks/nse.png",
    },
    {
      title: "Fractal Analytics",
      category: "Analytics",
      price: 3200,
      change: "+8.3%",
      duration: "6M",
      badge: "STABLE",
      logo: "/images/stocks/fractal_analytics.png",
    },
    {
      title: "CSK",
      category: "Sports",
      price: 2800,
      change: "+15.2%",
      duration: "1Y",
      badge: "HOT",
      logo: "/images/stocks/csk_unlisted_shares.jpg",
    },
  ];

  // Corporate Bonds Data
  const corporateBonds = [
    {
      title: "Navi Finserv",
      minInvestment: "1k",
      ytm: "10.25%",
      maturityLeft: "4 months",
      badge: "AAA",
      logo: "/images/stocks/nse.png",
      href: "/corporate-bonds",
    },
    {
      title: "Bajaj Finance",
      minInvestment: "5k",
      ytm: "9.2%",
      maturityLeft: "6 months",
      badge: "AAA",
      logo: "/images/stocks/fractal_analytics.png",
      href: "/corporate-bonds",
    },
    {
      title: "Shivalik Bank",
      minInvestment: "10k",
      ytm: "9.11%",
      maturityLeft: "8 months",
      badge: "AA",
      logo: "/images/stocks/csk_unlisted_shares.jpg",
      href: "/corporate-bonds",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Unlisted Shares",
      features: [
        "Curated private market opportunities",
        "Early-stage company access",
        "Pre-IPO allocation support",
        "Research-backed recommendations",
      ],
      cta: "Explore",
      ctaLink: "/unlisted-shares",
      type: "stocks",
    },
    {
      id: 2,
      title: "Corporate Bonds",
      features: [
        "AAA & AA-rated bond options",
        "Higher yields than traditional FDs",
        "Regular fixed income payouts",
        "Risk-balanced portfolio structuring",
      ],
      cta: "Explore",
      ctaLink: "/corporate-bonds",
      type: "bonds",
    },
  ];

  return (
    <section className="pb-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <SectionTitle
              align="left"
              eyebrow="Services"
              title="Our Core Services"
              description="Two pillars of wealth creation designed for investors"
            />
          </div>
          <div className="text-right">
            <Button variant="secondary" size="lg" href="/contact-us">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Button>
          </div>
        </div>
        

        {/* ✅ SIDE BY SIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.2 + index * 0.1}>
              <div className="bg-primary-700 p-6 rounded-2xl flex flex-col h-full relative">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-3xl text-white font-bold mb-4">{service.title}</h3>
                    <ul className="space-y-2 my-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-4 text-gray-200">
                        ✔ {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
                  

                  {/* <h5 className="text-white font-semibold mb-3">
                    What You Get:
                  </h5> */}

                  

                  <Button
                    variant="outline"
                    className="bg-white"
                    size="lg"
                    href={service.ctaLink}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {service.cta}
                  </Button>
                </div>
                

                {/* 🔹 SLIDER (BOTTOM) */}
                <div className="mt-6 relative">
                  {service.type === "stocks" && (
                    <>
                      <ReusableSlider
                        slidesPerView={1.5}
                        spaceBetween={20}
                        loop={true}
                        autoplay={true}
                        delay={3000}
                        navigation={false}
                        onSwiper={(swiper) =>
                          handleSwiperInit(service.id, swiper)
                        }
                      >
                        {unlistedStocks.map((stock, idx) => (
                          <SwiperSlide key={idx}>
                            <StockCard {...stock} />
                          </SwiperSlide>
                        ))}
                      </ReusableSlider>
                    </>
                  )}

                  {/* BOND SLIDER */}
                  {service.type === "bonds" && (
                    <>
                      <ReusableSlider
                        slidesPerView={1.5}
                        spaceBetween={20}
                        loop={true}
                        autoplay={true}
                        delay={3500}
                        navigation={false}
                        onSwiper={(swiper) =>
                          handleSwiperInit(service.id, swiper)
                        }
                      >
                        {corporateBonds.map((bond, idx) => (
                          <SwiperSlide key={idx}>
                            <BondCard {...bond} />
                          </SwiperSlide>
                        ))}
                      </ReusableSlider>
                    </>
                  )}

                  <div className="absolute -bottom-12 right-0 flex gap-3">
                    <button
                      className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center"
                      onClick={() =>
                        swiperInstances[service.id]?.slidePrev()
                      }
                    >
                      <ChevronLeft className="text-white" />
                    </button>

                    <button
                      className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center"
                      onClick={() =>
                        swiperInstances[service.id]?.slideNext()
                      }
                    >
                      <ChevronRight className="text-white" />
                    </button>
                  </div>

                </div>
              </div>

            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;