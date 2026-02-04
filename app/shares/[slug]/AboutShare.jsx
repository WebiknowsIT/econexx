'use client';

import { useState } from "react";

export default function AboutShare({ title, points = [] }) {
  const [expanded, setExpanded] = useState(false);

  const visiblePoints = expanded ? points : points.slice(0, 2);

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-3">
        {title}
      </h2>

      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        {visiblePoints.map((text, index) => (
          <p key={index}>
            <span className="font-medium mr-1">
              {String.fromCharCode(65 + index)}&#41;
            </span>
            {text}
          </p>
        ))}
      </div>

      {points.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-medium text-primary-600 hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
