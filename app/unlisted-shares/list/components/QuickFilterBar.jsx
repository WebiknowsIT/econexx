"use client";

export default function QuickFilterBar({ active, onChange }) {
  const filters = [
    { label: "All", value: "All" },
    { label: "FinTech", value: "FinTech" },
    { label: "EV & Mobility", value: "EV" },
    { label: "HealthTech", value: "HealthTech" },
    { label: "EdTech", value: "EdTech" },
    { label: "SaaS & Cloud", value: "SaaS" },
    { label: "D2C & Consumer", value: "D2C" },
    { label: "Logistics", value: "Logistics" },
    { label: "✦ Exclusive", value: "Exclusive", exclusive: true },
  ];

  return (
    <div className="bg-white border-b border-primary-100 px-6 lg:px-16 py-3 sticky top-[80px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto tag-scroll">

        <span className="text-xs text-primary-400 shrink-0 mr-1">
          Quick:
        </span>

        {filters.map((item) => {
          const isActive = active === item.value;

          return (
            <button
              key={item.value}
              onClick={() => onChange(item.value)}
              className={`
                shrink-0 text-xs px-4 py-1.5 rounded-full border transition-colors cursor-pointer
                ${item.exclusive
                  ? "border-secondary-300 text-secondary-700 bg-secondary-50 hover:bg-secondary-100"
                  : isActive
                    ? "bg-primary-600 text-white border-primary-600"
                    : "border-primary-200 text-primary-600 hover:bg-primary-50"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}