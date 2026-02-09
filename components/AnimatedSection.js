"use client";

import { Children, cloneElement, isValidElement } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

export default function AnimatedSection({ children }) {
  const { ref, visible } = useInViewOnce();
  const child = Children.only(children);

  if (!isValidElement(child)) return children;

  return cloneElement(child, {
    ref,
    className: `
      ${child.props.className || ""}
      ${visible ? "animate-fade-slide-up" : ""}
    `,
  });
}
