"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  highlightLastWord = true,
  highlightClass = "text-secondary-400",
  className = "",
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const renderTitle = () => {
    if (!highlightLastWord || !title) return title;

    const words = title.split(" ");
    const lastWord = words.pop();

    return (
      <>
        {words.join(" ")}{" "}
        <span className={highlightClass}>{lastWord}</span>
      </>
    );
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <AnimatedSection delay={0.1} y={40}>
          <div className="flex items-center justify-center gap-3">
          {/* <hr className="brandHrLight w-10" /> */}
          <p className="text-secondary-500 text-xs tracking-[0.18em] uppercase mb-3">
            {eyebrow}
          </p>
          {/* <hr className="brandHrLight w-10" /> */}
          </div>
          
        </AnimatedSection>
      )}
      {title && (
        <AnimatedSection delay={0.2} y={40}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary">
            {renderTitle()}
          </h2>
        </AnimatedSection>
      )}
      {description && (
        <AnimatedSection delay={0.3} y={40}>
          <p className="text-gray-500 max-w-2xl leading-relaxed mb-14">
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}