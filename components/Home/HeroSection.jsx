"use client";
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CustomPopup from "@/components/ui/Popup/CustomPopup";
import Button from "@/components/ui/Button";
import { Calendar, Layers } from "lucide-react";

const HeroSection = ({ banner }) => {
  const [openVideo, setVideoOpen] = useState(false);
  const title = banner?.title || "Your Gateway to Exclusive Wealth. Opportunities";
  const subtitle =
    banner?.subtitle ||
    "Access high-yield Corporate Bonds, exclusive , Unlisted Shares and Expert Pre-IPO advisory curated for serious investors seeking stable growth and strategic returns.";
  const imageUrl = banner?.image_url || "images/banner-img.png";

  return (
    <section
      className={`pt-10 pb-0 overflow-hidden bg-primary-800 bg-cover bg-center no-repeat relative ${
        banner?.image_url ? "" : "bg-[url('/images/bg-banner.png')]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="pb-10">
            <AnimatedSection delay={0.1} y={-30}>
              <span className="inline-flex editorial-title font items-center gap-2 px-3 py-2 rounded-full bg-secondary-50 text-secondary-900 text-xs font-semibold tracking-wider mb-6 tracking-tighter">
                <span className="relative flex h-[10px] w-[10px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-secondary-500" />
                </span>
                India's #1 Institutional Access for Retail
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="editorial-title text-3xl lg:text-6xl text-white leading-[1.1] mb-8 font-bold">
                {title.split(" ").map((word, index, array) =>
                  index === array.length - 2 ? (
                    <span key={word} className="text-secondary-300">
                      {word}
                    </span>
                  ) : (
                    word + (index < array.length - 1 ? " " : "")
                  )
                )}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-sm md:text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
                {subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  <Layers className="w-4 h-4 mr-2" /> Explore Our Services
                </Button>
                <Button variant="ghost" href="#HowItWorks">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} y={0}>
            <div className="relative">
              <div className="relative">
                <AnimatedSection delay={0.45} y={0}>
                  <img src={imageUrl} className="w-full" alt="Homepage banner" />
                </AnimatedSection>

                <AnimatedSection delay={0.6} y={0}>
                  <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-[90%]">
                    <div className="text-center mb-2  bg-white p-6 rounded-2xl shadow-xl border border-gray-50 transform hidden">
                      <h3 className="text-sm text-gray-500 mb-1">See It In Action</h3>
                      <p className="text-lg font-semibold text-gray-900">Watch Our Quick Demo</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {openVideo && (
        <CustomPopup
          close={() => setVideoOpen(false)}
          size="w-full max-w-2xl"
          dimension="h-auto"
          scrollClass="overflow-hidden !p-0"
          bodyClass=""
          popupBody={null}
        />
      )}
    </section>
  );
};

export default HeroSection;
