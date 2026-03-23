"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function MarketMarquee() {
  const items = [
    { name: "NSE India", price: "₹1,950", change: "+1.3%", positive: true },
    { name: "CSK Unlisted", price: "₹206", change: "-2.8%" },
    { name: "OYO Stays", price: "₹27", change: "-3.5%" },
    { name: "HDB Finance", price: "₹1,120", change: "+0.8%", positive: true },
    { name: "Swiggy Pre-IPO", price: "₹455", change: "+2.1%", positive: true },
    { name: "CSK Unlisted", price: "₹206", change: "-2.8%" },
    { name: "OYO Stays", price: "₹27", change: "-3.5%" },
    { name: "OYO Stays", price: "₹27", change: "-3.5%" },
    { name: "HDB Finance", price: "₹1,120", change: "+0.8%", positive: true },
    { name: "Swiggy Pre-IPO", price: "₹455", change: "+2.1%", positive: true },
  ];

  return (
    <section className="border-y border-white/10 bg-primary/5 py-4 overflow-hidden">
      
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        speed={4000} 
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="marquee-swiper"
      >
        {[...items, ...items].map((item, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <MarqueeItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------- */
/* Marquee Item */
/* ---------------------------------- */

function MarqueeItem({ name, price, change, positive }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-gray-500 text-xs font-bold uppercase">
        {name}
      </span>

      <span className={positive ? "text-primary-400" : "text-rose-400"}>
        {price}
      </span>

      <span
        className={`text-[10px] ${
          positive
            ? "text-primary-500/60"
            : "text-rose-500/60"
        }`}
      >
        {change}
      </span>
    </div>
  );
}