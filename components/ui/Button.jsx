"use client";

import Link from "next/link";

export default function Button(props) {
  const baseClass =
  "inline-flex items-center justify-center cursor-pointer rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";


  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30 focus:ring-primary-500",
    secondary: "border border-secondary-500 bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-600",
    outlineLight: "border border-white/30 text-white hover:bg-white/10 focus:ring-white",
    outline: "border border-primary-500 text-primary-500 hover:border-secondary-500 hover:bg-secondary-500 hover:text-white focus:ring-white",
    ghost:"text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const className = `
    ${baseClass}
    ${variants[props.variant || "primary"]}
    ${sizes[props.size || "sm"]}
    ${props.className || ""}
  `;

  // 🔗 Link button (href wins)
  if (props.href) {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  // 🟦 Action button
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${className} ${
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {props.children}
    </button>
  );
}
