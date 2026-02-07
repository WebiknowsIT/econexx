export default function ActiveFilters({ filters, onRemove }) {
  if (!filters.length) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4">
      <h4 className="font-medium mb-2">Active Filters</h4>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <span
            key={f.key}
            className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm"
          >
            {f.label}
            <button onClick={() => onRemove(f.key)}>×</button>
          </span>
        ))}
      </div>
    </div>
  );
}
