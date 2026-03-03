'use client';

import { useState } from "react";

const CATEGORIES = [
    {
        key: "profitability",
        label: "Profitability Ratio",
        options: [
            { key: "gpm", label: "Gross Profit Margin (%)" },
            { key: "ebitda", label: "EBITDA Margin (%)" },
            { key: "npm", label: "Net Profit Margin (%)" },
            { key: "roe", label: "Return on Equity (ROE) (%)" },
            { key: "roce", label: "ROCE (%)" },
        ],
    },
    {
        key: "leverage",
        label: "Leverage & Solvency Ratio",
        options: [
            { key: "de", label: "Debt to Equity" },
            { key: "icr", label: "Interest Coverage Ratio" },
        ],
    },
    {
        key: "valuation",
        label: "Valuation Ratio",
        options: [
            { key: "pe", label: "P/E Ratio" },
            { key: "pb", label: "P/B Ratio" },
        ],
    },
];

export default function AddFiltersDrawer({
    open,
    onClose,
    onAddFilter,
}) {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

    if (!open) return null; // 🔴 default CLOSED

    return (
        <div className="fixed inset-0 z-50 bg-black/30">
            <div className="absolute right-0 top-0 h-full w-full md:w-[600px] bg-white">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                    <h3 className="font-semibold text-lg">Add More Filters</h3>
                    <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>

                <div className="flex h-screen">
                    <div className="w-1/3 border-r border-slate-200 p-4">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat)}
                                className={`w-full text-left px-3 py-2 rounded-md mb-1 text-sm
                ${activeCategory.key === cat.key
                                        ? "bg-green-50 text-green-700 border-l-4 border-green-600"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 p-6">
                        <h4 className="font-semibold text-lg mb-1">
                            {activeCategory.label}
                        </h4>
                        <p className="text-sm text-gray-500 mb-4">
                            Select filters to auto-apply them to your stock search
                        </p>

                        <div className="space-y-3">
                            {activeCategory.options.map((opt) => (
                                <label
                                    key={opt.key}
                                    className="flex items-center gap-3 text-sm"
                                >
                                    <input
                                        type="checkbox"
                                        className="accent-primary-600"
                                        onChange={() =>
                                            onAddFilter(opt.key, opt.label)
                                        }
                                    />
                                    {opt.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
