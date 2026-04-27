"use client";

import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function MarketMarquee() {

  // ✅ GET DATA FROM STORE
  const { unlistedLanding, landingStatus } = useSelector(
    (state) => state.unlistedShares
  );

  // ✅ MAP DATA FROM API (using featured shares from landing)
  const items =
    unlistedLanding?.featured_unlisted_shares?.items?.map((item) => {
      const price = item.sell_price || 0;

      // fallback if API doesn't give change
      const changeVal =
        item.price_change ??
        item.pe_ratio ??
        0;

      return {
        name: item.share_name || item.company_name || "Unknown",
        price: `₹${price}`,
        change: `${changeVal >= 0 ? "+" : ""}${changeVal}%`,
        positive: changeVal >= 0,
      };
    }) || [];

  // ✅ STRICT RENDER CONDITION (NO EMPTY UI)
  if (landingStatus === "loading") return null;
  if (!items.length) return null;

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
          pauseOnMouseEnter: false,
        }}
        className="marquee-swiper"
      >
        {/* duplicate for infinite loop smoothness */}
        {[...items, ...items].map((item, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <MarqueeItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* smooth linear animation */}
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
    <div className="flex gap-4 items-center whitespace-nowrap">
      
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