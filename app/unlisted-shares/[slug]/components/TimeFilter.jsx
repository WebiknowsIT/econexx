const ranges = ["1M", "6M", "1Y", "3Y", "5Y", "MAX"];

export function TimeFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 mt-4">
      {ranges.map((r) => (
        <button
          key={r}
          onClick={() => onChange(r)}
          className={`px-4 py-1.5 rounded-md text-sm border
            ${
              active === r
                ? "bg-primary-600 text-white border-primary-600"
                : "border-gray-300 text-gray-600 hover:border-primary-600"
            }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
