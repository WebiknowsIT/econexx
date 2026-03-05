// components/detail/TabBar.jsx

const TABS = [
  { key: "overview",   label: "Overview" },
  { key: "financials", label: "Financials" },
  { key: "price",      label: "Price History" },
  { key: "documents",  label: "Documents" },
  { key: "faq",        label: "FAQ" },
];

export default function TabBar({ active, onChange }) {
  return (
    <div className="bg-white border-b border-primary-100 sticky top-[80px] z-40 px-6 lg:px-16">
      <div
        className="max-w-7xl mx-auto flex gap-1 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={[
              "text-sm px-5 py-4 whitespace-nowrap font-medium cursor-pointer bg-transparent border-0 border-b-2 transition-colors",
              active === tab.key
                ? "text-secondary-700 border-secondary-400"
                : "text-gray-500 border-transparent hover:text-primary-700",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
