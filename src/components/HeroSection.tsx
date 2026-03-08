import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-emerald-950/20 to-gray-950" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-800/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-300 text-sm font-medium">
            AI-Powered Environmental Intelligence
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          WildTerminator
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Climate Vision
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Transforming scientific knowledge into structured awareness,
          measurable insight, and scalable climate solutions.
        </p>

        <p className="text-emerald-400/80 text-sm font-medium mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Wild and Rapid Action for the Globe and the Motherland.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
          >
            View Climate Dashboard
          </Link>
          <Link
            href="/ai-insights"
            className="w-full sm:w-auto bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-emerald-600 px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105"
          >
            Explore AI Insights
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {[
            { value: "5", label: "Research Divisions" },
            { value: "7+", label: "AI Models Active" },
            { value: "1.2B", label: "Data Points Analyzed" },
            { value: "24/7", label: "Global Monitoring" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
