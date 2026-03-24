"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { getIcon } from "@/utils/iconMap";

export default function WhyChoose({data}) {
  return (
    <section id="why" className="bg-purple-50 px-6 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Advantages"
          title={data?.title}
          description={data?.subtitle}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.items.map((item, index) => {
            const Icon = getIcon(item.icon);
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