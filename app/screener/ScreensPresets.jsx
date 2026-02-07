
import ScreenPresetCard from "./ScreenPresetCard";

export const SCREEN_PRESETS = [
  {
    key: "hot-growth",
    title: "Hot Growth Picks",
    badge: { text: "Trending", color: "red" },
    filters: {
      revenueCagr: { min: 20 },
      patCagr: { min: 25 },
      pe: { max: 40 },
    },
    points: [
      "Revenue Growth (3-Year CAGR): > 20%",
      "PAT Growth (3-Year CAGR): > 25%",
      "PE Ratio (Optional): < 40",
    ],
  },
  {
    key: "dividend",
    title: "Stable Dividend Payers",
    badge: { text: "Safe", color: "blue" },
    filters: {
      dividendYears: { min: 3 },
      npm: { min: 10 },
      roe: { min: 15 },
      debtEquity: { max: 0.5 },
    },
    points: [
      "Consistent Dividend History: Paid for 3+ consecutive years",
      "Net Profit Margin: > 10%",
      "ROE: > 15%",
      "Debt-to-Equity Ratio: < 0.5",
    ],
  },
  {
    key: "value",
    title: "Undervalued Value Picks",
    badge: { text: "Value", color: "purple" },
    filters: {
      pb: { max: 2 },
      pe: { max: 15 },
      patYoY: { min: 10 },
    },
    points: [
      "Low P/B (<2) and PE (<15) hint at undervaluation",
      "Positive PAT growth YoY (>10%)",
      "Ideal for value investors seeking re-rating",
    ],
  },
];


export default function ScreensPresets({ onRunPreset }) {
  return (
    <section className="mt-4">
      <div className="mb-4">
        <h2 className="text-md font-semibold">Sample Screens</h2>
        <p className="text-sm text-gray-500">
          (If applied, all other filters will be removed)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SCREEN_PRESETS.map((preset) => (
          <ScreenPresetCard
            key={preset.key}
            preset={preset}
            onRun={onRunPreset}
          />
        ))}
      </div>
    </section>
  );
}
