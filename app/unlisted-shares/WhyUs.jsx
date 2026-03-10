"use client";
import {
  ShieldCheck,
  Zap,
  FileBarChart,
  UserCheck,
  Headphones,
  Star,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";



const advantages = [
  {
    icon: ShieldCheck,
    title: "SEBI Compliant",
    description:
      "All transactions are fully compliant with SEBI regulations. Your investments are secured with proper legal documentation.",
  },
  {
    icon: Zap,
    title: "Fast Settlement",
    description:
      "Shares transferred to your demat within 2–3 business days. No delays, no hidden wait times.",
  },
  {
    icon: FileBarChart,
    title: "Deep Research",
    description:
      "Every company comes with analyst reports, valuation models, and risk ratings so you invest with full confidence.",
  },
  {
    icon: UserCheck,
    title: "Verified Sellers",
    description:
      "We rigorously verify every seller's demat holdings before listing — zero fraud risk for buyers.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "One-on-one relationship managers available Mon–Sat for personalized guidance on every investment decision.",
  },
  {
    icon: Star,
    title: "Exclusive Access",
    description:
      "Get early access to pre-IPO rounds, ESOPs, and insider buybacks not available anywhere else.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-purple-50 px-6 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Advantages"
          title="Why Choose Econexx?"
          description="We're not just a marketplace — we're your trusted partner in
            unlisted market intelligence."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection
                key={item.title}
                delay={0.4 + index * 0.1}
                y={50}
              >
                <div className="bg-white rounded-2xl p-8 border border-primary-100 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300 group h-full">

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-200 transition">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}