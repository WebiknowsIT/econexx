"use client";

import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function ReusableSlider({
  children,
  slidesPerView = 4,
  spaceBetween = 30,
  loop = true,
  autoplay = true,
  delay = 2500,
  breakpoints = {},
  navigation = false,
  pagination = false,
  rows = 1,              // ✅ NEW
  className = "",
}) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Grid]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      grid={{ rows: rows, fill: "row" }}   // ✅ KEY LINE
      loop={rows === 1 ? loop : false} // ⚠️ loop + grid conflict
      autoplay={
        autoplay
          ? {
              delay,
              disableOnInteraction: false,
            }
          : false
      }
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      breakpoints={breakpoints}
      className={className}
    >
      {children}
    </Swiper>
  );
}
