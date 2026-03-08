import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-emerald-950/20 to-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Join the Climate Intelligence Movement
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Access AI-powered climate insights, contribute to environmental research,
          and be part of the solution. Our data is open and our mission is clear.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Explore the Dashboard
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-emerald-600 px-8 py-3.5 rounded-xl font-semibold transition-all"
          >
            Learn About Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
}
