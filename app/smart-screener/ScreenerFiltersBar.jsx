import Button from "../../components/ui/Button";
import RangeFilter from "./RangeFilter";

export default function ScreenerFiltersBar({
  filters,
  visibleFilters, // ✅ ADD THIS
  onChange,
  onRemoveRange,
  onApply,
  onReset,
  onAddMore,
}) {

  // const pe = filters.pe || { min: "", max: "" };
  // const pb = filters.pb || { min: "", max: "" };
  // const roce = filters.roce || { min: "", max: "" };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
      <h3 className="text-md font-semibold">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Market Cap – always visible */}
        <RangeFilter
          label="Market Cap (₹ Cr)"
          required
          min={filters.marketCap.min}
          max={filters.marketCap.max}
          onChange={(v) => onChange("marketCap", v)}
        />

        {visibleFilters.pe && (
          <RangeFilter
            label="P/E Ratio"
            min={filters.pe.min}
            max={filters.pe.max}
            onChange={(v) => onChange("pe", v)}
            onRemove={() => onRemoveRange("pe")}
          />
        )}

        {visibleFilters.pb && (
          <RangeFilter
            label="P/B Ratio"
            min={filters.pb.min}
            max={filters.pb.max}
            onChange={(v) => onChange("pb", v)}
            onRemove={() => onRemoveRange("pb")}
          />
        )}

        {visibleFilters.roce && (
          <RangeFilter
            label="ROCE (%)"
            min={filters.roce.min}
            max={filters.roce.max}
            onChange={(v) => onChange("roce", v)}
            onRemove={() => onRemoveRange("roce")}
          />
        )}
      </div>


      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={onAddMore}
          className="text-sm"
        >
          + Add More Filters
        </Button>

        <div className="flex gap-3">
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-600"
          >
            Reset
          </button>
          <Button
            variant="secondary"
            onClick={onApply}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
