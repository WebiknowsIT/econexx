"use client";

import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";

export default function Toolbar({
  totalCount,
  sortValue,
  setSortValue,
  view,
  setView,
  onOpenDrawer,
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">

      {/* Left Side */}
      <div className="flex items-center gap-3">

        {/* Mobile Filter Button */}
        <button
          onClick={onOpenDrawer}
          className="lg:hidden flex items-center gap-2 text-sm border border-primary-200 px-4 py-2 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors bg-white"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        <p className="text-sm text-primary-400">
          <span className="font-semibold text-primary-900">
            {totalCount}
          </span>{" "}
          companies found
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Sort Dropdown */}
        <select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className="text-sm border border-primary-200 rounded-lg px-3 py-2 outline-none focus:border-primary-500 text-primary-700 bg-white cursor-pointer"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="return-desc">Return: Highest</option>
          <option value="demand-desc">Demand: Highest</option>
          <option value="name-asc">Name: A–Z</option>
        </select>

        {/* Grid / List Toggle */}
        <div className="flex border border-primary-200 rounded-lg overflow-hidden">

          <button
            onClick={() => setView("grid")}
            className={`p-2 transition-colors ${
              view === "grid"
                ? "bg-primary-600 text-white"
                : "bg-white text-primary-400 hover:bg-primary-50"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          <button
            onClick={() => setView("list")}
            className={`p-2 transition-colors ${
              view === "list"
                ? "bg-primary-600 text-white"
                : "bg-white text-primary-400 hover:bg-primary-50"
            }`}
          >
            <List className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  );
}