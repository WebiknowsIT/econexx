"use client";
import React from "react";
import { Calendar, TrendingUp } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";



const CTASection = () => {
  return (
    <section className="heroSection hero-glow gridBgDark noise bg-primary-900 py-20 overflow-hidden bg-cover bg-center no-repeat relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          className="md:w-2/4"
          theme="dark"
          align="center"
          eyebrow="journey"
          title="Start your alternate investment journey today."
          description="Our advisors are here to help you make confident and informed investment decisions."
        />

        <AnimatedSection delay={0.1}>
          <div className="text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact-us">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Button>

              <Button variant="ghost" size="lg" href="/unlisted-shares">
                <TrendingUp className="w-4 h-4 mr-2" />
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
