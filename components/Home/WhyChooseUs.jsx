"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { Shield, Target, Eye, TrendingUp } from "lucide-react";

const DEFAULT_REASONS = [
  {
    id: 1,
    icon: Shield,
    title: "Curated & Verified Opportunities",
    description: "We filter opportunities through structured due diligence and research frameworks.",
  },
  {
    id: 2,
    icon: Target,
    title: "Personalized Advisory Approach",
    description: "Every portfolio recommendation aligns with your financial goals and risk appetite.",
  },
  {
    id: 3,
    icon: Eye,
    title: "Transparent Process",
    description: "Clear communication, clear pricing, and clear strategy.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Long-Term Wealth Mindset",
    description: "We focus on sustainable compounding, not short-term speculation.",
  },
];

const ICONS = [Shield, Target, Eye, TrendingUp];

const WhyChooseUs = ({ data }) => {
  const content = data || {
    badge: "WHY CHOOSE US",
    title: "Why Serious Investors Choose Us",
    subtitle: "Built on trust, transparency, and a commitment to your financial success",
    items: DEFAULT_REASONS.map(({ id, title, description }) => ({ id, title, description })),
  };

  const reasons = content.items?.length ? content.items : DEFAULT_REASONS;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          align="center"
          eyebrow={content.badge}
          title={content.title}
          description={content.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = ICONS[index % ICONS.length] || Shield;
            return (
              <AnimatedSection key={reason.id || index} delay={0.2 + index * 0.1}>
                <div className="group text-center">
                  <div className="mb-6 flex justify-center">
                    <div
                      className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <IconComponent className="w-10 h-10 text-primary-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
