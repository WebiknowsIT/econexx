"use client";
import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What investment services does Econexx Wealth offer?",
      answer: (
        <>
          <p className="mb-3">
            Econexx Wealth provides curated access to three key investment segments:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Corporate Bonds for stable and predictable income</li>
            <li>Unlisted Shares for early access to high-growth companies</li>
            <li>Pre-IPO Consultancy for strategic IPO investment guidance</li>
          </ul>
          <p>
            Each opportunity is supported by structured research, due diligence, and personalized advisory.
          </p>
        </>
      ),
    },
    {
      id: 2,
      question: "Who should consider investing in these opportunities?",
      answer: (
        <p>
          Our services are designed for serious investors seeking diversification beyond traditional fixed deposits and public equities. Whether you aim for stable income, long-term growth, or tactical IPO gains, we help structure investments based on your financial goals and risk appetite.
        </p>
      ),
    },
    {
      id: 3,
      question: "Are these investments risky?",
      answer: (
        <p>
          Every investment carries some level of risk. Corporate bonds generally offer lower volatility and predictable returns, while unlisted shares and IPO investments may involve higher growth potential with corresponding risk. We provide transparent risk assessment and help you make informed decisions aligned with your profile.
        </p>
      ),
    },
    {
      id: 4,
      question: "How are opportunities selected?",
      answer: (
        <p>
          All investment opportunities go through a structured evaluation process that includes financial analysis, business model assessment, management review, and market positioning. Our focus is on quality, credibility, and long-term value creation.
        </p>
      ),
    },
    {
      id: 5,
      question: "What is the minimum investment amount?",
      answer: (
        <p>
          Minimum investment varies depending on the product category. Corporate bonds and unlisted shares may have different entry thresholds. Our advisory team provides clarity on eligibility and allocation during consultation.
        </p>
      ),
    },
    {
      id: 6,
      question: "How do I get started?",
      answer: (
        <>
          <p className="mb-3">Getting started is simple:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Schedule a consultation</li>
            <li>Discuss your financial goals and risk preferences</li>
            <li>Receive a tailored investment strategy</li>
            <li>Execute with guided support</li>
          </ol>
          <p className="mt-3">
            We ensure a smooth and transparent onboarding process.
          </p>
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary">
              Frequently Asked <span className="text-secondary-300">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know before investing with Econexx Wealth.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={faq.id} delay={0.1 + index * 0.05}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
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
                    {faq.answer}
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
