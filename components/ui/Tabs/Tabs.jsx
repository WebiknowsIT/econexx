'use client';

import { useState } from "react";

/**
 * Tailwind-only Tabs
 *
 * @param {Array} items - [{ key, label, children, disabled }]
 * @param {string} defaultActiveKey
 * @param {string} className
 * @param {string} tabListClassName
 * @param {string} tabClassName
 * @param {string} activeTabClassName
 * @param {string} contentClassName
 * @param {function} onChange
 */


export default function Tabs({
  items = [],
  defaultActiveKey,
  className = "",
  tabListClassName = "",
  tabClassName = "",
  activeTabClassName = "",
  contentClassName = "",
  onChange,
}) {
  const [active, setActive] = useState(
    defaultActiveKey || items[0]?.key
  );

  const handleChange = (key) => {
    setActive(key);
    onChange?.(key);
  };

  return (
    <div className={className}>
      {/* Tabs Header */}
      <div
        className={`flex gap-6 border-b border-gray-200 ${tabListClassName}`}
      >
        {items.map((tab) => {
          const isActive = active === tab.key;
          const isDisabled = tab.disabled;

          return (
            <button
              key={tab.key}
              onClick={() => !isDisabled && handleChange(tab.key)}
              disabled={isDisabled}
              className={`
                relative pb-3 text-sm font-medium transition cursor-pointer 
                ${
                  isDisabled
                    ? "text-gray-300 cursor-not-allowed"
                    : isActive
                    ? `text-primary-600 ${activeTabClassName}`
                    : "text-gray-500 hover:text-primary-600"
                }
                ${tabClassName}
              `}
            >
              {tab.label}

              {/* Active underline */}
              {isActive && (
                <span className="absolute left-0 -bottom-px h-[2px] w-full bg-primary-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className={`pt-6 ${contentClassName}`}>
        {items.find((t) => t.key === active)?.children}
      </div>
    </div>
  );
}
