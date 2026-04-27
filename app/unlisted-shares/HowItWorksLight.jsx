"use client";

import { getIcon } from "@/utils/iconMap";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";


export default function HowItWorks({data}) {
  return (
    <section
      id="HowItWorks"
      className="bg-purple-100 px-6 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          eyebrow="Process"
          title={data?.title}
          description={data?.subtitle}
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-100">
          {data?.items.map((step, index) => {

            const Icon = getIcon(step.icon);
            return (
              <AnimatedSection
                key={step.order}
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