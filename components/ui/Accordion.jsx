'use client';

import { useState } from "react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-gray-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-gray-800">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Content */}
            {isOpen && (
              <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
