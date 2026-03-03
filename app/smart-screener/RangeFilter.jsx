import Input from "@/components/ui/Input/Input";

export default function RangeFilter({
  label,
  min,
  max,
  onChange,
  onRemove,
  required = false,
}) {
  return (
    <div className="space-y-1 relative">
      {/* Label + Remove */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">
          {label}
          {required && (
            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              Required
            </span>
          )}
        </label>

        {!required && (
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-gray-600 text-sm"
            title={`Remove ${label}`}
          >
            ✕
          </button>
        )}
      </div>

      {/* Inputs */}
      <div className="flex gap-2">
        <Input
          className="input-styled"
          type="number"
          placeholder="Min"
          value={min}
          onChange={(e) => onChange({ min: e.target.value, max })}
        />
        <Input
          className="input-styled"
          type="number"
          placeholder="Max"
          value={max}
          onChange={(e) => onChange({ min, max: e.target.value })}
        />
      </div>
    </div>
  );
}
