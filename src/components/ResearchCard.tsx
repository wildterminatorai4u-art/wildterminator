import { ResearchDivision } from "@/lib/climate-data";

interface ResearchCardProps {
  division: ResearchDivision;
  index: number;
}

export default function ResearchCard({ division, index }: ResearchCardProps) {
  return (
    <div
      id={division.id}
      className="group bg-gray-900/60 backdrop-blur-sm border border-gray-800 hover:border-emerald-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${division.color}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-3xl mb-2 block">{division.icon}</span>
            <h3 className="text-xl font-bold text-white mt-2">{division.title}</h3>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {division.description}
        </p>

        {/* Topics */}
        <div className="mb-5">
          <h4 className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Research Areas
          </h4>
          <ul className="space-y-2">
            {division.topics.map((topic, i) => (
              <li key={i} className="flex items-start space-x-2 text-sm text-gray-400">
                <span className="text-emerald-500 mt-0.5">&#8226;</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-800">
          {division.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-emerald-400">{stat.value}</div>
              <div className="text-gray-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
