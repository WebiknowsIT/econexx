"use client";

export default function SidebarFilters({
  filters,
  setFilters,
  clearFilters,
}) {

  const toggleArrayValue = (key, value) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((v) => v !== value)
          : [...prev[key], value],
      };
    });
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-36">
      <div className="bg-white border border-primary-100 rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-primary-50 px-5 py-4 border-b border-primary-100 flex items-center justify-between">
          <span className="font-semibold text-primary-900 text-sm">
            Filters
          </span>
          <button
            onClick={clearFilters}
            className="text-xs text-primary-400 hover:text-primary-600 transition-colors"
          >
            Clear all
          </button>
        </div>

        {/* Search */}
        <div className="px-5 py-4 border-b border-primary-100">
          <label className="block text-xs text-primary-400 tracking-widest uppercase mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Company name..."
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                search: e.target.value,
              }))
            }
            className="w-full px-3 py-2 text-sm border border-primary-200 rounded-lg outline-none focus:border-primary-500 bg-primary-50"
          />
        </div>

        {/* Sector */}
        <div className="px-5 py-4 border-b border-primary-100">
          <label className="block text-xs text-primary-400 tracking-widest uppercase mb-3">
            Sector
          </label>
          <div className="space-y-2">
            {[
              "FinTech",
              "EV",
              "HealthTech",
              "EdTech",
              "SaaS",
              "D2C",
              "Logistics",
              "InsurTech",
            ].map((sector) => (
              <label
                key={sector}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.sectors.includes(sector)}
                  onChange={() =>
                    toggleArrayValue("sectors", sector)
                  }
                  className="accent-primary-500 w-3.5 h-3.5 rounded"
                />
                <span className="text-sm text-primary-700">
                  {sector}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Stage */}
        <div className="px-5 py-4 border-b border-primary-100">
          <label className="block text-xs text-primary-400 tracking-widest uppercase mb-3">
            Stage
          </label>
          <div className="space-y-2">
            {["Pre-IPO", "Series A", "Series B", "Series D+", "ESOP"].map(
              (stage) => (
                <label
                  key={stage}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.stages.includes(stage)}
                    onChange={() =>
                      toggleArrayValue("stages", stage)
                    }
                    className="accent-primary-500 w-3.5 h-3.5 rounded"
                  />
                  <span className="text-sm text-primary-700">
                    {stage}
                  </span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Return */}
        <div className="px-5 py-4 border-b border-primary-100">
          <label className="block text-xs text-primary-400 tracking-widest uppercase mb-3">
            6M Return
          </label>
          <div className="space-y-2">
            {[
              { label: "All", value: "all" },
              { label: "Positive only", value: "positive" },
              { label: "+20% and above", value: "high" },
            ].map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={filters.returnFilter === opt.value}
                  onChange={() =>
                    setFilters((prev) => ({
                      ...prev,
                      returnFilter: opt.value,
                    }))
                  }
                  className="accent-primary-500 w-3.5 h-3.5"
                />
                <span className="text-sm text-primary-700">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="px-5 py-4">
          <label className="block text-xs text-primary-400 tracking-widest uppercase mb-3">
            Availability
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.exclusive}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    exclusive: e.target.checked,
                  }))
                }
                className="accent-secondary-500 w-3.5 h-3.5 rounded"
              />
              <span className="text-sm text-primary-700">
                Exclusive deals only
              </span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.available}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    available: e.target.checked,
                  }))
                }
                className="accent-primary-500 w-3.5 h-3.5 rounded"
              />
              <span className="text-sm text-primary-700">
                Available now
              </span>
            </label>
          </div>
        </div>

      </div>
    </aside>
  );
}