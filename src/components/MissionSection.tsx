import Link from "next/link";
import { researchDivisions } from "@/lib/climate-data";

export default function MissionSection() {
  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Five Research Divisions, One Planet
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            WildTerminator integrates AI with environmental science across five
            specialized research divisions to drive evidence-based climate action.
          </p>
        </div>

        {/* Division cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchDivisions.map((division) => (
            <div
              key={division.id}
              className="group bg-gray-900/40 border border-gray-800 hover:border-emerald-700/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div className={`h-1 w-16 bg-gradient-to-r ${division.color} rounded-full mb-4`} />
              <span className="text-2xl">{division.icon}</span>
              <h3 className="text-white font-bold text-lg mt-3 mb-2">
                {division.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {division.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {division.topics.slice(0, 3).map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border border-emerald-800/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Explore All Research</h3>
            <p className="text-gray-400 text-sm mb-4">
              Dive deep into our research divisions and discover evidence-based insights.
            </p>
            <Link
              href="/research"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              View Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
