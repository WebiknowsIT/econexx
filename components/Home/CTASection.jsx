"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Elements/Buttons";

const CTASection = () => {
  return (
    <section className="py-20 overflow-hidden bg-primary-800 bg-cover bg-center no-repeat relative bg-[url('/images/bg-banner.png')]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-primary leading-tight">
              Start your alternate investment <br />
              journey today.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Our advisors are here to help you make confident and informed investment decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" href="/contact-us">
                Schedule a Consultation
              </Button>
              <Button variant="light" href="/unlisted-shares">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
