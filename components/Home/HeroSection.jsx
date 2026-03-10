"use client";
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CustomPopup from "@/components/ui/Popup/CustomPopup";
import Button from "@/components/ui/Button";
import { Calendar, Compass, Layers } from "lucide-react";

const HeroSection = () => {
  const [openVideo, setVideoOpen] = useState(false);
  return (
    <section className="pt-10 pb-0 overflow-hidden bg-primary-800 bg-cover bg-center no-repeat relative bg-[url('/images/bg-banner.png')]">
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
                Your Gateway to Exclusive{" "}
                <span className="text-secondary-300">Wealth.</span>{" "}
                Opportunities
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-sm md:text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
                Access high-yield{" "}
                <span className="text-secondary-300 ">Corporate Bonds</span>,
                exclusive ,{" "}
                <span className="text-secondary-300 ">Unlisted Shares</span> and{" "}
                <span className="text-secondary-300">
                  Expert Pre-IPO advisory
                </span>{" "}
                curated for serious investors seeking stable growth and
                strategic returns.
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

          {/* RIGHT CONTENT */}
          <AnimatedSection delay={0.3} y={0}>
            <div className="relative">
              {/* Glow Background */}
              {/* <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-50" /> */}

              {/* Main Card */}
              <div className="relative">
                {/* Play Button – zoomIn */}
                <AnimatedSection delay={0.45} y={0}>
                  <img src="images/banner-img.png" className="w-full" alt="" />
                </AnimatedSection>

                {/* Overlay */}
                {/* FLOATING CARD – zoomIn */}
                <AnimatedSection delay={0.6} y={0}>
                  <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-[90%]">
                    <div className="text-center mb-2  bg-white p-6 rounded-2xl shadow-xl border border-gray-50 transform hidden">
                      <h3 className="text-sm text-gray-500 mb-1">
                        See It In Action
                      </h3>
                      <p className="text-lg font-semibold text-gray-900">
                        Watch Our Quick Demo
                      </p>
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
          //title="Product Overview"
          //subTitle="Watch this quick demo"
          close={() => setVideoOpen(false)}
          size="w-full max-w-2xl"
          dimension="h-auto"
          scrollClass="overflow-hidden !p-0"
          bodyClass=""
          popupBody={renderEmbedVideo()}
        />
      )}
    </section>
  );
};

export default HeroSection;
