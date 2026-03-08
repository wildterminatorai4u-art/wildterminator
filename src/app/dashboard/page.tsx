import type { Metadata } from "next";
import { climateMetrics } from "@/lib/climate-data";
import ClimateMetricCard from "@/components/ClimateMetricCard";
import { TemperatureChart, SeaLevelChart, EmissionsChart } from "@/components/ClimateChart";

export const metadata: Metadata = {
  title: "Climate Dashboard | WildTerminator Climate Vision",
  description: "Interactive climate data dashboard with real-time environmental metrics, temperature trends, and emissions analysis.",
};

export default function DashboardPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">Live Data Feed</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Climate Dashboard
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Real-time environmental metrics and climate data visualizations powered by
            AI-processed data from NASA, NOAA, IPCC, and other leading research institutions.
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Key Indicators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {climateMetrics.map((metric, index) => (
            <ClimateMetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white mb-6">Data Visualizations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TemperatureChart />
          <SeaLevelChart />
        </div>
        <EmissionsChart />
      </section>

      {/* Data Sources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-bold text-lg mb-3">Data Sources & Methodology</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            All climate data presented on this dashboard is sourced from internationally
            recognized climate research bodies and peer-reviewed publications. Our AI models
            process and validate data from multiple sources to ensure accuracy and reliability.
          </p>
          <div className="flex flex-wrap gap-3">
            {["NASA GISS", "NOAA", "IPCC AR6", "WRI", "IUCN Red List", "Global Forest Watch"].map(
              (source) => (
                <span
                  key={source}
                  className="text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-800/30 px-3 py-1.5 rounded-lg"
                >
                  {source}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
