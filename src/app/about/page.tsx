import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | WildTerminator Climate Vision",
  description: "Learn about WildTerminator - an independent, non-profit environmental research and education initiative advancing climate science through AI-driven intelligence.",
};

const values = [
  {
    icon: "🔬",
    title: "Scientific Integrity",
    description: "All research adheres to the highest standards of scientific rigor, sourced from peer-reviewed publications and internationally recognized research bodies.",
  },
  {
    icon: "📊",
    title: "Data Transparency",
    description: "Complete transparency in our data sources, methodologies, and findings. Open access to processed environmental intelligence for all.",
  },
  {
    icon: "🌱",
    title: "Non-Profit Commitment",
    description: "Dedicated to environmental mission over financial gain. All resources directed toward advancing climate science and awareness.",
  },
  {
    icon: "⚡",
    title: "Technological Responsibility",
    description: "Ethical application of AI and technology in service of environmental understanding and climate action.",
  },
  {
    icon: "🌍",
    title: "Respect for Nature",
    description: "Deep reverence for natural systems drives our research, conservation efforts, and sustainability initiatives.",
  },
  {
    icon: "🎯",
    title: "Rapid but Rational Action",
    description: "Urgency in addressing climate challenges balanced with evidence-based, carefully reasoned approaches.",
  },
];

const milestones = [
  {
    phase: "Foundation",
    status: "current",
    items: [
      "Establish core research divisions",
      "Deploy AI environmental intelligence models",
      "Launch climate data dashboard",
      "Build initial research team",
    ],
  },
  {
    phase: "Growth",
    status: "upcoming",
    items: [
      "Expand to five output interface systems",
      "Launch Carbon Intelligence APIs",
      "Develop extinction risk modeling tools",
      "Build environmental data visualization platforms",
    ],
  },
  {
    phase: "Maturity",
    status: "future",
    items: [
      "Publish independent climate reports",
      "Partner with academic institutions",
      "Develop open environmental intelligence tools",
      "Support global awareness and sustainability",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Our Mission & Vision
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            WildTerminator is an independent, fully non-profit environmental research
            and education initiative dedicated to advancing climate science, biodiversity
            conservation, forest ecosystem protection, and AI-driven environmental intelligence.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-emerald-950/30 to-teal-950/30 border border-emerald-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Vision</h2>
            <p className="text-emerald-400 font-medium text-sm mb-4">
              Wild and Rapid Action for the Globe and the Motherland.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              To build a globally trusted environmental intelligence platform that
              transforms scientific knowledge into structured awareness, measurable
              insight, and scalable climate solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
            <ul className="space-y-3">
              {[
                "Deliver science-based climate education",
                "Conduct independent R&D on climate change mitigation",
                "Integrate AI systems with environmental data modeling",
                "Promote forest conservation and biodiversity protection",
                "Analyze extinction drivers and ecological imbalance",
                "Develop structured awareness programs for communities",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Core Values</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            The principles that guide every aspect of our research, technology development, and public engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-gray-900/60 border border-gray-800 hover:border-emerald-700/50 rounded-2xl p-6 transition-all duration-300"
            >
              <span className="text-3xl mb-3 block">{value.icon}</span>
              <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Development Roadmap</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Our phased approach to building a comprehensive environmental intelligence platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 ${
                milestone.status === "current"
                  ? "bg-emerald-950/30 border-2 border-emerald-700/50"
                  : "bg-gray-900/60 border border-gray-800"
              }`}
            >
              <div className="flex items-center space-x-2 mb-4">
                {milestone.status === "current" && (
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                )}
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    milestone.status === "current" ? "text-emerald-400" : "text-gray-500"
                  }`}
                >
                  {milestone.status === "current" ? "Current Phase" : milestone.status === "upcoming" ? "Next Phase" : "Long-term"}
                </span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{milestone.phase}</h3>
              <ul className="space-y-2">
                {milestone.items.map((item, j) => (
                  <li key={j} className="flex items-start space-x-2 text-sm text-gray-300">
                    <span className={`mt-0.5 flex-shrink-0 ${milestone.status === "current" ? "text-emerald-500" : "text-gray-600"}`}>
                      {milestone.status === "current" ? "●" : "○"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Institutional Positioning</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            WildTerminator operates as an independent environmental research and education
            initiative. We do not claim government affiliation or institutional endorsement.
            All scientific data is sourced from internationally recognized climate and
            environmental research bodies and peer-reviewed publications.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            Scientific integrity and transparency remain our foundational principles.
            WildTerminator stands for authenticity, scientific neutrality, and responsible innovation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950/30 to-teal-950/30 border border-emerald-800/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Explore Our Platform
          </h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
            Discover AI-powered climate insights, explore our research divisions,
            and access real-time environmental data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              View Dashboard
            </Link>
            <Link
              href="/ai-insights"
              className="w-full sm:w-auto bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-emerald-600 px-8 py-3 rounded-xl font-semibold transition-all"
            >
              AI Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
