"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeaderDark({
  breadcrumb = [],
  tag = "",
  title = "",
  highlight = "",
  description = "",
  stats = [],
}) {

  const renderTitle = () => {
    if (!title) return title;
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
    <div className="bg-primary-900 py-12 px-6 lg:px-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 120%,rgba(122,61,154,0.35) 0%,transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {breadcrumb.length > 0 && (
          <div className="flex items-center gap-2 text-primary-400 text-xs mb-5">
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary-200 transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary-300">
                    {item.label}
                  </span>
                )}

                {index !== breadcrumb.length - 1 && (
                  <ChevronRight className="w-3 h-3" />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            {tag && (
              <p className="text-secondary-400 text-xs tracking-[0.18em] uppercase mb-3">
                — {tag}
              </p>
            )}

            {title && (
              <h1 className="font-bold text-white mb-3"
                style={{ fontSize: "clamp(1.2rem,4vw,2.5rem)" }}
              >
                {renderTitle()}
              </h1>
            )}

            

            {description && (
              <p className="text-primary-300 max-w-lg leading-relaxed text-sm">
                {description}
              </p>
            )}
          </div>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="flex gap-6 shrink-0">
              {stats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold grad-hero">
                    {item.number}
                  </div>
                  <div className="text-primary-400 text-xs tracking-wider uppercase mt-1">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}