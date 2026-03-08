import Link from "next/link";

const footerLinks = {
  platform: [
    { href: "/dashboard", label: "Climate Dashboard" },
    { href: "/research", label: "Research Divisions" },
    { href: "/ai-insights", label: "AI Insights" },
    { href: "/about", label: "About Us" },
  ],
  research: [
    { href: "/research#climate-science", label: "Climate Science" },
    { href: "/research#forest-conservation", label: "Forest Conservation" },
    { href: "/research#wildlife-observatory", label: "Wildlife Observatory" },
    { href: "/research#sustainable-systems", label: "Sustainable Systems" },
    { href: "/research#climate-hazards", label: "Climate Hazards" },
  ],
  resources: [
    { href: "#", label: "Documentation" },
    { href: "#", label: "API Reference" },
    { href: "#", label: "Research Papers" },
    { href: "#", label: "Open Data" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                WT
              </div>
              <div>
                <div className="text-white font-bold text-sm">WildTerminator</div>
                <div className="text-emerald-400 text-xs">Climate Vision</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              An independent, non-profit environmental research and education
              initiative advancing climate science through AI-driven intelligence.
            </p>
            <p className="text-gray-500 text-xs">
              Data. Science. Nature. Action.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Research</h3>
            <ul className="space-y-2">
              {footerLinks.research.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} WildTerminator Climate Vision. Non-profit
            environmental research initiative.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-gray-500 text-xs">
              Scientific Integrity &bull; Data Transparency &bull; Non-Profit
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
