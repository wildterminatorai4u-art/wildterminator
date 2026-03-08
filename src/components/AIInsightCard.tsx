import { AIInsight } from "@/lib/climate-data";

interface AIInsightCardProps {
  insight: AIInsight;
  index: number;
}

const severityConfig = {
  critical: {
    bg: "bg-red-950/30",
    border: "border-red-800/40",
    badge: "bg-red-900/50 text-red-300",
    dot: "bg-red-400",
    label: "Critical",
  },
  warning: {
    bg: "bg-amber-950/30",
    border: "border-amber-800/40",
    badge: "bg-amber-900/50 text-amber-300",
    dot: "bg-amber-400",
    label: "Warning",
  },
  info: {
    bg: "bg-blue-950/30",
    border: "border-blue-800/40",
    badge: "bg-blue-900/50 text-blue-300",
    dot: "bg-blue-400",
    label: "Info",
  },
  positive: {
    bg: "bg-emerald-950/30",
    border: "border-emerald-800/40",
    badge: "bg-emerald-900/50 text-emerald-300",
    dot: "bg-emerald-400",
    label: "Positive",
  },
};

export default function AIInsightCard({ insight, index }: AIInsightCardProps) {
  const config = severityConfig[insight.severity];

  return (
    <div
      className={`${config.bg} border ${config.border} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={`w-2 h-2 rounded-full ${config.dot} animate-pulse`} />
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.badge}`}>
            {config.label}
          </span>
          <span className="text-gray-500 text-xs">{insight.category}</span>
        </div>
        <span className="text-gray-500 text-xs">{insight.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-3">{insight.title}</h3>

      {/* Summary */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {insight.summary}
      </p>

      {/* Details */}
      <details className="group/details">
        <summary className="text-emerald-400 text-sm cursor-pointer hover:text-emerald-300 transition-colors">
          View detailed analysis
        </summary>
        <p className="text-gray-400 text-sm leading-relaxed mt-3 pl-3 border-l-2 border-gray-700">
          {insight.details}
        </p>
      </details>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800/50">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-400 text-xs">
              Confidence: {insight.confidence}%
            </span>
          </div>
        </div>
        <span className="text-gray-500 text-xs">{insight.source}</span>
      </div>
    </div>
  );
}
