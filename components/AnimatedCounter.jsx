"use client";
import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end, label, duration = 2000, prefix = "", suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      if (typeof end === "number") {
        setCount(Math.floor(progress * end));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref}>
      <h3 className="font-primary text-3xl md:text-5xl md:text-5xl font-semibold text-primary-700 mb-2">
        {prefix}
        {count}
        <span className="text-[20px]">{suffix}</span>
      </h3>
      {label && <p className="text-gray-600 text-[1rem]">{label}</p>}
    </div>
  );
};

export default AnimatedCounter;
