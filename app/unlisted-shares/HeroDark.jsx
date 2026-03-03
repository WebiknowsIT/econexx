"use client";

import { useState } from "react";

import { Sparkles, TrendingUp, PlayCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CustomPopup from "@/components/ui/Popup/CustomPopup"
import Button from "@/components/ui/Button";


export default function HeroSection() {

  const [openVideo, setVideoOpen] = useState(false); 
  
  function renderEmbedVideo() {
    return (
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <iframe
          src="https://www.youtube.com/shorts/rQrtlKz1ToM"
          title="YouTube video player"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 py-10 bg-primary-900 overflow-hidden hero-glow">
      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection delay={0.1} y={-30}>
          <div className="inline-flex items-center gap-2 border border-secondary-500 text-secondary-400 text-xs tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Pre-IPO & Unlisted Securities
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.2} y={40}>
          <h1
            className="font-bold text-white leading-[1.07] mb-6"
            style={{ fontSize: "clamp(1rem,5vw,3.5rem)" }}
          >
            Access High-Growth Unlisted  <br />
            <span className="grad-hero">Investment Opportunities</span>
          </h1>
        </AnimatedSection>

        {/* Sub Text */}
        <AnimatedSection delay={0.3} y={40}>
          <p className="text-primary-300 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            Access exclusive unlisted shares of high-growth companies before
            they hit the public market. Institutional-grade deals, simplified
            for smart investors.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.4} y={40}>
          <div className="flex gap-4 justify-center flex-wrap">

            <Button href="/unlisted-shares/list" variant="primary" className="px-9 py-4 text-base">
              <TrendingUp className="w-4 h-4 mr-2" />
              Explore Shares
            </Button>

            <Button 
              variant="outlineLight" 
              className="px-9 py-4 text-base" 
              onClick={() => setVideoOpen(true)}
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              Learn More
            </Button>

          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.5} y={60}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="text-4xl font-bold grad-hero mb-1">
                ₹480Cr+
              </div>
              <div className="text-primary-400 text-xs tracking-[0.12em] uppercase">
                Assets Under Trade
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold grad-hero mb-1">
                12,000+
              </div>
              <div className="text-primary-400 text-xs tracking-[0.12em] uppercase">
                Registered Investors
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold grad-hero mb-1">
                200+
              </div>
              <div className="text-primary-400 text-xs tracking-[0.12em] uppercase">
                Unlisted Companies
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold grad-hero mb-1">
                97%
              </div>
              <div className="text-primary-400 text-xs tracking-[0.12em] uppercase">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </AnimatedSection>

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
}