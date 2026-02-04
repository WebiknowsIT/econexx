"use client";

import Button from "./ui/Button";

export default function PageHeader(props) {
  return (
    <section className={`relative flex items-center ${props.minHeight || "min-h-[320px]"}`}>
      <div className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url('${props.backgroundImage}')`,}}
      />

      <div className={`absolute inset-0 ${props.overlay || "bg-black/50"}`} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center">

          {props.badge && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white text-xs font-semibold mb-6">
              {props.badge}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {props.title}
            {props.highlight && (
              <span className="text-primary-400"> {props.highlight}</span>
            )}
          </h1>

          {props.description && (
            <p className="text-gray-200 text-lg mb-10 md:px-28">
              {props.description}
            </p>
          )}

          {(props.primaryText || props.secondaryText) && (
            <div className="flex flex-wrap justify-center gap-4">
              {props.primaryText && (
                <Button variant="secondary" onClick={props.onPrimaryClick}>{props.primaryText}</Button>
              )}

              {props.secondaryText && (
                <Button variant="outlineLight" onClick={props.onSecondaryClick}>{props.secondaryText}</Button>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
