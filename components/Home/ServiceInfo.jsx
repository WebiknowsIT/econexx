"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import ReusableSlider from "@/components/ReusableSlider";
import StockCard from "@/components/StockCard";
import BondCard from "@/components/BondCard";
import { SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const ServiceInfo = () => {
  const [swiperInstances, setSwiperInstances] = React.useState({});

  const handleSwiperInit = (serviceId, swiper) => {
    setSwiperInstances(prev => ({ ...prev, [serviceId]: swiper }));
  };

  // Sample stock data for Unlisted Shares slider
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
    {
      title: "Delhivery",
      category: "Logistics",
      price: 1850,
      change: "+6.7%",
      duration: "3M",
      badge: "STABLE",
      logo: "/images/stocks/delhivery.png",
    },
    {
      title: "Barbeque Nation",
      category: "Hospitality",
      price: 2100,
      change: "+9.4%",
      duration: "6M",
      badge: "GROWTH",
      logo: "/images/stocks/barbeque_nation.png",
    },
  ];

  // Sample bond data for Corporate Bonds slider
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
    {
      title: "HDFC Ltd",
      minInvestment: "25k",
      ytm: "8.75%",
      maturityLeft: "12 months",
      badge: "AAA",
      logo: "/images/stocks/csb-logo.png",
      href: "/corporate-bonds",
    },
    {
      title: "Tata Capital",
      minInvestment: "10k",
      ytm: "9.5%",
      maturityLeft: "5 months",
      badge: "AA+",
      logo: "/images/stocks/delhivery.png",
      href: "/corporate-bonds",
    },
  ];

  const services = [
    {
      id: 1,
      color: "green",
      title: "Unlisted Shares",
      subtitle: "Access Growth Before It Goes Public",
      description:
        "Invest in promising companies before they hit the stock exchange. Gain exclusive exposure to pre-IPO and private market opportunities with strong growth potential.",
      features: [
        "Curated private market opportunities",
        "Early-stage company access",
        "Pre-IPO allocation support",
        "Research-backed recommendations",
      ],
      cta: "View Unlisted Opportunities",
      ctaLink: "/unlisted-shares",
      bgGradient: "from-white to-gray-50",
      accentColor: "text-secondary-500",
      buttonVariant: "primary",
      logos: [
        { src: "/images/stocks/nse.png", alt: "NSE" },
        { src: "/images/stocks/fractal_analytics.png", alt: "Fractal" },
        { src: "/images/stocks/csk_unlisted_shares.jpg", alt: "CSK" },
        { src: "/images/stocks/csb-logo.png", alt: "HDFC Securities" },
        { src: "/images/stocks/delhivery.png", alt: "Boat" },
        { src: "/images/stocks/barbeque_nation.png", alt: "SBI AMC" },
      ],
      trustBadge: "Trusted by over 1,50,000 users",
    },
    {
      id: 2,
      color: "yellow",
      title: "Corporate Bonds",
      subtitle: "A Smarter Alternative to Fixed Deposits",
      description:
        "Earn predictable and stable returns with high-quality corporate and government-backed bonds. Designed for investors seeking consistent income and capital protection.",
      features: [
        "AAA & AA-rated bond options",
        "Higher yields than traditional FDs",
        "Regular fixed income payouts",
        "Risk-balanced portfolio structuring",
      ],
      cta: "Explore Bond Options",
      ctaLink: "/corporate-bonds",
      bgGradient: "from-gray-50 to-white",
      accentColor: "text-secondary-500",
      buttonVariant: "primary",
      partners: [
        { name: "Bajaj Finserv", rate: "9.2% pa", logo: "/images/partners/bajaj.png" },
        { name: "Shivalik", rate: "9.11% pa", logo: "/images/partners/shivalik.png" },
      ],
    },
    {
      id: 3,
      color: "blue",
      title: "Pre-IPO Consultancy",
      subtitle: "Strategic IPO Investment Advisory",
      description:
        "Navigate IPO investments with confidence. Our advisory team provides in-depth analysis, risk assessment, and application support for upcoming public offerings.",
      features: [
        "IPO research & ratings",
        "Application assistance",
        "Portfolio positioning advice",
        "Market timing insights",
      ],
      cta: "Book IPO Consultation",
      ctaLink: "/contact-us",
      bgGradient: "from-white to-gray-50",
      accentColor: "text-secondary-500",
      buttonVariant: "se",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          align="center"
          eyebrow="Services"
          title="Our Core Services"
          description="Three pillars of wealth creation designed for sophisticated investors"
        />
        {/* Services Grid */}
        <div className="space-y-16  mb-4">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.2 + index * 0.1}>
              <div className={`grid lg:grid-cols-12 gap-8 ${service.id === 3 ? 'bg-white' : 'bg-primary-700'} py-8 px-7 rounded-2xl items-center`}>
                <div className="absolute bottom-0 right-0 w-80 h-80 opacity-70 pointer-events-none">
                  <img src="/images/corner-shape-silver.svg" alt="" class="w-full h-full opacity-20" />
                </div>
                  <div className={`col-span-12 lg:col-span-5 ${service.id === 3 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className={`text-3xl md:text-4xl ${service.id === 3 ? 'text-gray-900' : 'text-white'} font-bold font-primary`}>
                        {service.title}
                      </h3>
                    </div>
     
                    <div className="mb-4">
                      <h5 className={`font-semibold ${service.id === 3 ? 'text-gray-900' : 'text-white'} my-3`}>
                        What You Get:
                      </h5>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className={service.id === 3 ? 'text-gray-700' : 'text-gray-200'}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                     <Button 
                      variant="secondary" 
                      size="lg"
                      href={service.ctaLink}
                      className="mt-2 w-auto text-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {service.cta}
                    </Button>
                  </div>
       
                    
                  </div>

                  {/* Right Content - Visual Elements */}
                  <div className={`col-span-12 lg:col-span-7 relative ${service.id === 3 ? 'lg:order-1' : ''}`}>
                    {/* Unlisted Shares - Stock Cards Slider */}
                    {service.logos && (
                      <div className="relative pb-16">
                        <div className="unlisted-slider">
                          <ReusableSlider
                            slidesPerView={2}
                            spaceBetween={20}
                            loop={true}
                            autoplay={true}
                            delay={3000}
                            navigation={false}
                            breakpoints={{
                              640: { slidesPerView: 2 },
                              1024: { slidesPerView: 2 },
                            }}
                            onSwiper={(swiper) => handleSwiperInit(service.id, swiper)}
                          >
                            {unlistedStocks.map((stock, idx) => (
                              <SwiperSlide key={idx}>
                                <StockCard
                                  title={stock.title}
                                  category={stock.category}
                                  price={stock.price}
                                  change={stock.change}
                                  duration={stock.duration}
                                  badge={stock.badge}
                                  logo={stock.logo}
                                />
                              </SwiperSlide>
                            ))}
                          </ReusableSlider>
                        </div>
                        
                        {/* Custom Navigation Buttons */}
                        <div className="absolute bottom-0 right-0 flex gap-3 z-10">
                          <button 
                            className="swiper-button-prev-custom w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                            onClick={() => swiperInstances[service.id]?.slidePrev()}
                          >
                            <ChevronLeft className="w-5 h-5 text-white" />
                          </button>
                          <button 
                            className="swiper-button-next-custom w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                            onClick={() => swiperInstances[service.id]?.slideNext()}
                          >
                            <ChevronRight className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Corporate Bonds - Bond Cards Slider */}
                    {service.partners && (
                      <div className="relative pb-16">
                        <div className="bonds-slider">
                          <ReusableSlider
                            slidesPerView={2}
                            spaceBetween={20}
                            loop={true}
                            autoplay={true}
                            delay={3500}
                            navigation={false}
                            breakpoints={{
                              640: { slidesPerView: 2 },
                              1024: { slidesPerView: 2 },
                            }}
                            onSwiper={(swiper) => handleSwiperInit(service.id, swiper)}
                          >
                            {corporateBonds.map((bond, idx) => (
                              <SwiperSlide key={idx}>
                                <BondCard
                                  title={bond.title}
                                  minInvestment={bond.minInvestment}
                                  ytm={bond.ytm}
                                  maturityLeft={bond.maturityLeft}
                                  badge={bond.badge}
                                  logo={bond.logo}
                                  href={bond.href}
                                />
                              </SwiperSlide>
                            ))}
                          </ReusableSlider>
                        </div>
                        
                        {/* Custom Navigation Buttons */}
                        <div className="absolute bottom-0 right-0 flex gap-3 z-10">
                          <button 
                            className="w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                            onClick={() => swiperInstances[service.id]?.slidePrev()}
                          >
                            <ChevronLeft className="w-5 h-5 text-white" />
                          </button>
                          <button 
                            className="w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-600 flex items-center justify-center transition-colors"
                            onClick={() => swiperInstances[service.id]?.slideNext()}
                          >
                            <ChevronRight className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Pre-IPO Consultancy - Image */}
                    {!service.logos && !service.partners && (
                      <div className="rounded-2xl overflow-hidden">
                        <img 
                          src="/images/pre-ipo.png" 
                          alt="Pre-IPO Consultancy" 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    )}
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
