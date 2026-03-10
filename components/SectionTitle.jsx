"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  highlightLastWord = true,
  className = "",
}) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center mx-auto",
    right: "items-end text-right ml-auto",
  };

  const isDark = theme === "dark";

  const renderTitle = () => {
    if (!highlightLastWord || !title) return title;

    const words = title.split(" ");
    const lastWord = words.pop();

    return (
      <>
        {words.join(" ")}{" "}
        <span className="grad-brand">{lastWord}</span>
      </>
    );
  };

  return (
    <div className={`flex flex-col mb-12 ${alignment[align]} ${className}`}>
      {eyebrow && (
        <AnimatedSection delay={0.1} y={40}>
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-8 flex-shrink-0 ${isDark ? "hr-dark" : "hr-light"}`}/>

            <span
              className={`inline-block font-semibold uppercase rounded-full px-3 py-0.5 text-[.62rem]
              ${isDark ? "text-primary-300 tracking-widest" : "bg-primary-50 border border-primary-100 text-primary-500 tracking-[.1em]"}`}
              style={isDark ? {background: "rgba(122,61,154,.18)",border: "1px solid rgba(182,138,204,.22",}
                  : {}
              }
            >
              {eyebrow}
            </span>
            <div className={`w-8 flex-shrink-0 ${isDark ? "hr-dark" : "hr-light"}`}/>
          </div>
        </AnimatedSection>
      )}

      {title && (
        <AnimatedSection delay={0.2} y={40}>
          <h2 className={`font-bold mb-4 ${isDark ? "text-primary-50" : "text-primary-900"}`}
            style={{ fontSize: "2.75rem" }}
          >
            {renderTitle()}
          </h2>
        </AnimatedSection>
      )}

      {description && (
        <AnimatedSection delay={0.3} y={40}>
          <p
            className={`leading-relaxed max-w-2xl ${
              isDark ? "text-primary-400" : "text-gray-500"
            }`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}