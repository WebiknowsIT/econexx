"use client";

import { Children, cloneElement, isValidElement, Fragment } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

/**
 * AnimatedSection - Wraps content with fade-slide-up animation on scroll
 * 
 * Usage:
 * ✅ Single child:
 * <AnimatedSection>
 *   <div>Content</div>
 * </AnimatedSection>
 * 
 * ✅ Multiple children (auto-wrapped):
 * <AnimatedSection>
 *   <div>One</div>
 *   <div>Two</div>
 * </AnimatedSection>
 * 
 * @param {React.ReactNode} children - Content to animate
 * @param {number} delay - Animation delay in seconds (optional)
 * @returns {React.ReactElement}
 */
export default function AnimatedSection({ children, delay = 0 }) {
  const { ref, visible } = useInViewOnce();
  
  // Get array of children
  const childrenArray = Children.toArray(children).filter(Boolean);
  
  // If no children, return null
  if (childrenArray.length === 0) {
    return null;
  }

  // If single child
  if (childrenArray.length === 1) {
    const child = childrenArray[0];
    
    if (!isValidElement(child)) {
      return child;
    }

    return cloneElement(child, {
      ref,
      className: `
        ${child.props.className || ""}
        ${visible ? "animate-fade-slide-up" : ""}
      `,
      style: {
        ...child.props.style,
        animationDelay: delay ? `${delay}s` : undefined,
      },
    });
  }

  // Multiple children - wrap in div with animation applied
  return (
    <div
      ref={ref}
      className={`${visible ? "animate-fade-slide-up" : ""}`}
      style={{
        animationDelay: delay ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}
