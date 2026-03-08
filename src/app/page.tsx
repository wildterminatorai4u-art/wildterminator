import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";
import { climateMetrics } from "@/lib/climate-data";
import ClimateMetricCard from "@/components/ClimateMetricCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Climate Metrics Section */}
      <section className="py-20 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Live Climate Data
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              The Planet at a Glance
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Key environmental indicators powered by AI-processed data from
              leading climate research institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {climateMetrics.map((metric, index) => (
              <ClimateMetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <MissionSection />
      <CTASection />
    </>
  );
}
