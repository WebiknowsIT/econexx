"use client";

import { Search, ClipboardCheck, Wallet, BarChart2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Opportunities",
    description:
      "Explore our curated list of unlisted companies across fintech, EV, healthcare, and SaaS with detailed financials.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Place Your Order",
    description:
      "Select the company and quantity, complete KYC in minutes, and place your order securely through our verified platform.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Receive & Hold",
    description:
      "Shares are transferred to your demat account. Hold until IPO or secondary sale and realize your gains.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Track & Grow",
    description:
      "Monitor your portfolio live, receive quarterly updates, and get alerts on IPO filings and buyback opportunities.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-purple-50 px-6 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          eyebrow="— Process"
          title="How It Works"
          description="A seamless four-step journey from registration to owning pre-IPO shares in India's most exciting companies."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-100">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <AnimatedSection
                key={step.number}
                delay={0.4 + index * 0.1}
                y={50}
              >
                <div className="bg-white p-10 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="font-serif text-7xl font-bold text-primary-100 leading-none mb-6 select-none">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:bg-primary-200 transition">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
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