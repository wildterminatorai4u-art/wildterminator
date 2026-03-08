import { ClimateMetric } from "@/lib/climate-data";

interface ClimateMetricCardProps {
  metric: ClimateMetric;
  index: number;
}

export default function ClimateMetricCard({ metric, index }: ClimateMetricCardProps) {
  const trendColor =
    metric.trend === "up"
      ? "text-red-400"
      : metric.trend === "down"
      ? "text-amber-400"
      : "text-emerald-400";

  const trendIcon =
    metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→";

  return (
    <div
      className="group bg-gray-900/60 backdrop-blur-sm border border-gray-800 hover:border-emerald-700/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{metric.icon}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-800 ${trendColor}`}>
          {trendIcon} {metric.trend}
        </span>
      </div>

      <h3 className="text-gray-300 text-sm font-medium mb-2">{metric.label}</h3>

      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-3xl font-bold text-white">{metric.value}</span>
        <span className="text-gray-400 text-sm">{metric.unit}</span>
      </div>

      <p className={`text-sm ${trendColor} mb-3`}>{metric.change}</p>

      <p className="text-gray-500 text-xs leading-relaxed">
        {metric.description}
      </p>
    </div>
  );
}
