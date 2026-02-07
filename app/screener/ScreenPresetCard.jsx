import Button from "@/components/ui/Button";
import { ChartColumnIncreasing, FireExtinguisher, TrendingUp } from "lucide-react";

export default function ScreenPresetCard({ preset, onRun }) {
    const badgeColors = {
        red: "bg-red-100 text-red-600",
        blue: "bg-blue-100 text-blue-600",
        purple: "bg-purple-100 text-purple-600",
    };

    return (
        <div className="border border-slate-200 bg-white rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition">
            <div>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full p- ${badgeColors[preset.badge.color]}`}>
                            <TrendingUp className="" size={16} />
                        </div>
                        <h3 className="font-semibold text-md">{preset.title}</h3>
                    </div>
                    <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${badgeColors[preset.badge.color]}`}
                    > 
                     {preset.badge.text}
                    </span>
                </div>

                <ul className="space-y-2 text-sm text-gray-700">
                    {preset.points.map((p, i) => (
                        <li key={i} className="flex gap-2">
                            <span>•</span>
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                className="mt-6 w-full"
                variant="primary"
                onClick={() => onRun(preset)}
            >
                Run Screen
            </Button>
        </div>
    );
}
