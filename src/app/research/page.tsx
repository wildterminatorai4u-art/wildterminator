import type { Metadata } from "next";
import { researchDivisions } from "@/lib/climate-data";
import ResearchCard from "@/components/ResearchCard";

export const metadata: Metadata = {
  title: "Research Divisions | WildTerminator Climate Vision",
  description: "Explore our five core research divisions: Climate Science, Forest Conservation, Wildlife Observatory, Sustainable Systems, and Climate Hazards.",
};

export default function ResearchPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Core Research
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Research Divisions
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Five specialized research divisions working at the intersection of AI,
            data engineering, and environmental science to develop evidence-based
            solutions for global climate challenges.
          </p>
        </div>
      </section>

      {/* Research Division Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchDivisions.map((division, index) => (
            <ResearchCard key={division.id} division={division} index={index} />
          ))}
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-emerald-950/30 to-teal-950/30 border border-emerald-800/30 rounded-2xl p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              AI & Environmental Intelligence Division
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Our dedicated AI Research & Development Division powers all five research
              areas with cutting-edge capabilities including climate data modeling, carbon
              emission trend analysis, biodiversity risk prediction, environmental pattern
              recognition, forest loss data processing, climate hazard forecasting, and
              sustainable systems simulation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "7+", label: "AI Modules" },
                { value: "1.2B", label: "Data Points" },
                { value: "24/7", label: "Processing" },
                { value: "94.7%", label: "Model Accuracy" },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-gray-900/40 rounded-xl p-4">
                  <div className="text-xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-3">Research Methodology</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            All WildTerminator research is conducted with the highest standards of
            scientific integrity. Our data is sourced exclusively from internationally
            recognized climate and environmental research bodies and peer-reviewed
            publications. We maintain scientific neutrality and data transparency as
            foundational principles in all research activities.
          </p>
        </div>
      </section>
    </div>
  );
}
