"use client";

import { temperatureData, seaLevelData, emissionsBySource } from "@/lib/climate-data";

function TemperatureChart() {
  const maxTemp = Math.max(...temperatureData.map((d) => d.temp));
  const minTemp = Math.min(...temperatureData.map((d) => d.temp));
  const range = maxTemp - minTemp;

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
      <h3 className="text-white font-bold text-lg mb-1">Global Temperature Anomaly</h3>
      <p className="text-gray-400 text-sm mb-6">Degrees Celsius above pre-industrial baseline (1850-1900)</p>

      <div className="space-y-3">
        {temperatureData.map((d, i) => {
          const width = ((d.temp - minTemp) / range) * 100;
          const color =
            d.temp > 1.0
              ? "from-red-500 to-red-600"
              : d.temp > 0.6
              ? "from-orange-500 to-red-500"
              : d.temp > 0.3
              ? "from-amber-500 to-orange-500"
              : "from-yellow-500 to-amber-500";

          return (
            <div key={i} className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm w-12 text-right font-mono">{d.year}</span>
              <div className="flex-1 bg-gray-800 rounded-full h-6 relative overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 flex items-center justify-end pr-2`}
                  style={{ width: `${Math.max(width, 8)}%` }}
                >
                  <span className="text-white text-xs font-bold">+{d.temp}°C</span>
                </div>
              </div>
              <span className="text-gray-500 text-xs w-16 text-right">{d.co2} ppm</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
        <span className="text-gray-500 text-xs">Source: NASA GISS, NOAA</span>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-1 bg-yellow-500 rounded" />
          <span className="text-gray-500 text-xs">Low</span>
          <span className="w-3 h-1 bg-orange-500 rounded" />
          <span className="text-gray-500 text-xs">Medium</span>
          <span className="w-3 h-1 bg-red-500 rounded" />
          <span className="text-gray-500 text-xs">High</span>
        </div>
      </div>
    </div>
  );
}

function SeaLevelChart() {
  const maxLevel = Math.max(...seaLevelData.map((d) => d.level));

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
      <h3 className="text-white font-bold text-lg mb-1">Sea Level Rise</h3>
      <p className="text-gray-400 text-sm mb-6">Cumulative change in mm since 1993 (satellite era)</p>

      <div className="flex items-end justify-between h-48 px-2">
        {seaLevelData.map((d, i) => {
          const height = (d.level / maxLevel) * 100;
          return (
            <div key={i} className="flex flex-col items-center flex-1 group">
              <span className="text-emerald-400 text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                +{d.level}mm
              </span>
              <div className="w-full max-w-8 relative">
                <div
                  className="bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm transition-all duration-500 hover:from-blue-500 hover:to-cyan-300 mx-auto"
                  style={{ height: `${Math.max(height, 3)}%`, minHeight: "4px", maxWidth: "24px" }}
                />
              </div>
              <span className="text-gray-500 text-xs mt-2 transform -rotate-45 origin-top-left">{d.year}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800">
        <span className="text-gray-500 text-xs">Source: NASA Sea Level Portal, Satellite Altimetry</span>
      </div>
    </div>
  );
}

function EmissionsChart() {
  const total = emissionsBySource.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
      <h3 className="text-white font-bold text-lg mb-1">Global Emissions by Sector</h3>
      <p className="text-gray-400 text-sm mb-6">Percentage of total greenhouse gas emissions by source</p>

      <div className="space-y-4">
        {emissionsBySource.map((d, i) => {
          const percentage = (d.value / total) * 100;
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-300 text-sm font-medium">{d.source}</span>
                <span className="text-gray-400 text-sm">{d.value}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: d.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <span className="text-gray-500 text-xs">Source: Climate Watch, World Resources Institute</span>
      </div>
    </div>
  );
}

export { TemperatureChart, SeaLevelChart, EmissionsChart };
