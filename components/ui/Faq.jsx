"use client";
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { ChevronDown } from "lucide-react";

const FAQ = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know.",
  data = [] 
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}

        <SectionTitle
          align="center"
          eyebrow="FAQs"
          title={`${title}`}
          description={subtitle}
        />


        {/* FAQ Items */}
        <div className="space-y-4">
          {data.map((faq, index) => (
            <AnimatedSection key={faq.id || index} delay={0.1 + index * 0.05}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors text-gray-900 hover:text-secondary-500"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold pr-4">
                    {faq.question || faq.Question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer || faq.Answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;