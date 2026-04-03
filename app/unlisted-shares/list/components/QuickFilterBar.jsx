"use client";

export default function QuickFilterBar({
  categories = [],
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="bg-white border-b border-primary-100 px-6 lg:px-16 py-3 sticky top-[80px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto tag-scroll">

        <span className="text-xs text-primary-400 shrink-0 mr-1">
          Quick:
        </span>

        {/* ✅ ALL BUTTON */}
        <button
          onClick={() => onSelectCategory("")}
          className={`
            shrink-0 text-xs px-4 py-1.5 rounded-full border transition-colors cursor-pointer
            ${
              selectedCategory === ""
                ? "bg-secondary-600 text-white border-secondary-600"
                : "border-primary-200 text-primary-600 hover:bg-primary-50"
            }
          `}
        >
          All
        </button>

        {categories.map((item) => {
          const isActive = selectedCategory === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`
                shrink-0 text-xs px-4 py-1.5 rounded-full border transition-colors cursor-pointer
                ${
                  isActive
                    ? "bg-secondary-600 text-white border-secondary-600"
                    : "border-primary-200 text-primary-600 hover:bg-primary-50"
                }
              `}
            >
              {item.icon} {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}