"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const DEFAULT_STEPS = [
  {
    id: 1,
    step: 1,
    title: "Consultation",
    description: "Understand your financial goals, risk appetite, and return expectations.",
  },
  {
    id: 2,
    step: 2,
    title: "Portfolio Strategy",
    description: "We recommend a customized allocation across bonds, unlisted shares, or IPO opportunities.",
  },
  {
    id: 3,
    step: 3,
    title: "Execution & Support",
    description: "End-to-end assistance in documentation, allocation, and ongoing advisory.",
  },
];

const HowItWorks = ({ data }) => {
  const content = data || {
    badge: "STEPS",
    title: "How It Works?",
    subtitle: "Simple. Structured. Transparent.",
    items: DEFAULT_STEPS,
  };

  const steps = content.items?.length ? content.items : DEFAULT_STEPS;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          align="center"
          eyebrow={content.badge}
          title={content.title}
          description={content.subtitle}
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0" style={{ left: '8%', right: '8%' }} />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <AnimatedSection key={step.id || index} delay={0.2 + index * 0.1}>
                <div className="text-center relative">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center relative z-10 border-4 border-gray-50">
                      <span className="text-2xl font-bold text-white">
                        {step.step ?? index + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-primary">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
