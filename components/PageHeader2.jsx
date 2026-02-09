"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/ui/Button";

export default function PageHeader2({
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  stats = [],
  extraClass = "",
  image,
}) {
  return (
    <section className={`bg-gradient-to-br from-purple-50 via-white to-orange-50 py-20 ${extraClass}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <AnimatedSection>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-[var(--color-primary-500)]">
                    {highlight}
                  </span>
                </>
              )}
            </h1>

            {subtitle && (
              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                {subtitle}
              </p>
            )}

            {/* CTA BUTTONS */}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <Button
                    variant="primary"
                    onClick={primaryCta.onClick}
                  >
                    {primaryCta.label}
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    variant="outline"
                    onClick={secondaryCta.onClick}
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {/* STATS */}
            {stats.length > 0 && (
              <div className="mt-10 flex gap-10">
                {stats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.value}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* ================= RIGHT IMAGE ================= */}
        {image && (
          <AnimatedSection delay={0.15}>
            <div className="relative flex justify-center">
              <motion.img
              src={image.src}
              alt={image.alt || "Hero Illustration"}
              className="w-full max-w-lg"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
