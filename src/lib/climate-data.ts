export interface ClimateMetric {
  label: string;
  value: string;
  unit: string;
  change: string;
  trend: "up" | "down" | "stable";
  description: string;
  icon: string;
}

export interface ResearchDivision {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: string[];
  color: string;
  stats: { label: string; value: string }[];
}

export interface AIInsight {
  id: string;
  title: string;
  category: string;
  severity: "critical" | "warning" | "info" | "positive";
  summary: string;
  details: string;
  confidence: number;
  source: string;
  date: string;
}

export const climateMetrics: ClimateMetric[] = [
  {
    label: "Global Temperature Rise",
    value: "1.45",
    unit: "°C above pre-industrial",
    change: "+0.08°C from last year",
    trend: "up",
    description: "Average global surface temperature anomaly compared to 1850-1900 baseline",
    icon: "🌡️",
  },
  {
    label: "CO₂ Concentration",
    value: "425",
    unit: "ppm",
    change: "+2.5 ppm annually",
    trend: "up",
    description: "Atmospheric carbon dioxide concentration measured at Mauna Loa Observatory",
    icon: "🏭",
  },
  {
    label: "Sea Level Rise",
    value: "3.7",
    unit: "mm/year",
    change: "Accelerating since 1993",
    trend: "up",
    description: "Global mean sea level rise rate measured by satellite altimetry",
    icon: "🌊",
  },
  {
    label: "Arctic Sea Ice",
    value: "4.2",
    unit: "million km²",
    change: "-13% per decade",
    trend: "down",
    description: "September Arctic sea ice minimum extent decline rate",
    icon: "🧊",
  },
  {
    label: "Forest Loss",
    value: "4.1",
    unit: "million hectares/year",
    change: "Tropical forests most affected",
    trend: "up",
    description: "Annual primary forest loss in tropical regions",
    icon: "🌲",
  },
  {
    label: "Species at Risk",
    value: "44,000+",
    unit: "species threatened",
    change: "+28% since 2000",
    trend: "up",
    description: "Species classified as threatened on the IUCN Red List",
    icon: "🦁",
  },
];

export const researchDivisions: ResearchDivision[] = [
  {
    id: "climate-science",
    title: "Climate Science & Mitigation",
    icon: "🔬",
    description:
      "Analyzing greenhouse gas dynamics, carbon cycle imbalances, and developing mitigation pathways through advanced modeling and simulation.",
    topics: [
      "Greenhouse gas dynamics (CO₂, CH₄, N₂O)",
      "Carbon cycle imbalance analysis",
      "Anthropogenic forcing quantification",
      "Mitigation pathway modeling",
      "Climate system simulation",
    ],
    color: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Models Running", value: "24" },
      { label: "Data Points", value: "1.2B" },
      { label: "Accuracy", value: "94.7%" },
    ],
  },
  {
    id: "forest-conservation",
    title: "Forest & Ecosystem Conservation",
    icon: "🌳",
    description:
      "Studying deforestation drivers, carbon sink depletion, and developing ecosystem restoration models for biodiversity stabilization.",
    topics: [
      "Deforestation driver analysis",
      "Carbon sink depletion tracking",
      "Ecosystem restoration modeling",
      "Biodiversity stabilization strategies",
      "Reforestation impact assessment",
    ],
    color: "from-green-500 to-emerald-500",
    stats: [
      { label: "Areas Monitored", value: "1,200+" },
      { label: "Hectares Tracked", value: "850M" },
      { label: "Restoration Projects", value: "47" },
    ],
  },
  {
    id: "wildlife-observatory",
    title: "Wildlife & Extinction Observatory",
    icon: "🦎",
    description:
      "Conducting species vulnerability analysis, habitat destruction impact studies, and ecological collapse risk factor research.",
    topics: [
      "Species vulnerability scoring",
      "Habitat destruction impact analysis",
      "Ecological collapse risk modeling",
      "Evidence-based biodiversity research",
      "Population trend monitoring",
    ],
    color: "from-amber-500 to-orange-500",
    stats: [
      { label: "Species Tracked", value: "15,000+" },
      { label: "Risk Assessments", value: "3,200" },
      { label: "Habitats Mapped", value: "890" },
    ],
  },
  {
    id: "sustainable-systems",
    title: "Sustainable Systems & Food Impact",
    icon: "🌾",
    description:
      "Examining environmental footprints of food systems, livestock emissions, and resource utilization for sustainable development.",
    topics: [
      "Food system environmental footprint",
      "Livestock methane emission analysis",
      "Industrial agriculture assessment",
      "Water resource evaluation",
      "Land use optimization modeling",
    ],
    color: "from-teal-500 to-green-500",
    stats: [
      { label: "Supply Chains", value: "500+" },
      { label: "Emission Sources", value: "2,100" },
      { label: "Alternatives Modeled", value: "180" },
    ],
  },
  {
    id: "climate-hazards",
    title: "Climate Hazards & Catastrophe Research",
    icon: "⚡",
    description:
      "Investigating extreme weather patterns including heatwaves, wildfires, floods, typhoons, and drought systems for catastrophe forecasting.",
    topics: [
      "Heatwave prediction systems",
      "Wildfire risk modeling",
      "Flood dynamics simulation",
      "Typhoon intensity forecasting",
      "Drought system analysis",
    ],
    color: "from-red-500 to-orange-500",
    stats: [
      { label: "Events Tracked", value: "10,000+" },
      { label: "Forecasting Models", value: "36" },
      { label: "Alert Accuracy", value: "91.3%" },
    ],
  },
];

export const aiInsights: AIInsight[] = [
  {
    id: "1",
    title: "Accelerated Arctic Ice Melt Pattern Detected",
    category: "Climate Science",
    severity: "critical",
    summary:
      "AI analysis of satellite imagery reveals Arctic ice melt rates have exceeded projected models by 15% in the current season.",
    details:
      "Our deep learning models analyzing multi-spectral satellite data from 2024-2026 show a consistent acceleration in Arctic sea ice loss that outpaces even the most aggressive IPCC AR6 projections. The pattern suggests a potential tipping point mechanism involving albedo feedback loops that current models underestimate. Recommended: Urgent revision of sea-level rise projections for coastal regions.",
    confidence: 92,
    source: "WildTerminator AI Climate Lab",
    date: "2026-03-06",
  },
  {
    id: "2",
    title: "Amazon Deforestation Hotspot Prediction",
    category: "Forest Conservation",
    severity: "warning",
    summary:
      "Machine learning models predict 3 new deforestation hotspots in the Brazilian Amazon based on road network expansion patterns.",
    details:
      "By analyzing road construction permits, satellite land use changes, and historical deforestation patterns, our predictive models have identified three regions with 87% probability of significant forest loss within the next 18 months. These areas collectively represent approximately 12,000 hectares of primary rainforest and are home to at least 4 endangered species. Early intervention could prevent an estimated 8.4 million tonnes of CO₂ emissions.",
    confidence: 87,
    source: "WildTerminator Forest AI",
    date: "2026-03-04",
  },
  {
    id: "3",
    title: "Coral Reef Recovery Signal in Pacific",
    category: "Wildlife Observatory",
    severity: "positive",
    summary:
      "AI underwater monitoring systems detect early signs of coral recovery in protected marine areas of the Western Pacific.",
    details:
      "Computer vision analysis of over 50,000 underwater survey images from 12 marine protected areas in the Western Pacific shows a 23% increase in live coral cover compared to 2023 baselines. The recovery pattern correlates strongly with reduced ocean temperature stress in Q3-Q4 2025, combined with effective local management of fishing pressure and pollution sources. This provides evidence that well-managed protected areas can support reef resilience.",
    confidence: 89,
    source: "WildTerminator Ocean AI",
    date: "2026-03-02",
  },
  {
    id: "4",
    title: "Methane Emission Anomaly in Southeast Asia",
    category: "Sustainable Systems",
    severity: "warning",
    summary:
      "Atmospheric monitoring AI detected unexpected methane concentration spikes over rice paddy regions that don't match agricultural cycle predictions.",
    details:
      "Our atmospheric monitoring neural network, processing data from multiple satellite methane sensors, has identified persistent methane anomalies over major rice-producing regions in Southeast Asia. The emissions exceed agricultural model predictions by 30-45%, suggesting either unreported industrial sources or a shift in decomposition patterns potentially linked to changing water management practices. Further ground-truth investigation recommended.",
    confidence: 78,
    source: "WildTerminator Emissions AI",
    date: "2026-02-28",
  },
  {
    id: "5",
    title: "Wildfire Season Severity Forecast: 2026",
    category: "Climate Hazards",
    severity: "critical",
    summary:
      "Ensemble AI models project a 40% increase in wildfire-prone conditions across Mediterranean Europe and Western North America for summer 2026.",
    details:
      "Our ensemble of 12 wildfire prediction models, integrating soil moisture data, vegetation indices, historical fire patterns, and seasonal climate forecasts, projects significantly elevated wildfire risk for the upcoming summer season. Key risk factors include below-average winter precipitation in California, persistent drought conditions in southern Europe, and above-average spring temperatures. Pre-positioning of firefighting resources in identified hotspot zones is strongly recommended.",
    confidence: 85,
    source: "WildTerminator Hazard AI",
    date: "2026-02-25",
  },
  {
    id: "6",
    title: "Carbon Sequestration Efficiency Breakthrough",
    category: "Climate Science",
    severity: "info",
    summary:
      "AI-optimized reforestation models show that strategic species selection can increase carbon sequestration rates by up to 35%.",
    details:
      "Using reinforcement learning to optimize tree species combinations and planting configurations, our models demonstrate that current reforestation projects could significantly enhance their carbon capture efficiency. The AI system evaluated over 2 million species-configuration combinations against local climate and soil conditions, identifying optimal mixes that maximize both carbon sequestration and biodiversity co-benefits. Implementation guides are being prepared for 15 pilot regions.",
    confidence: 91,
    source: "WildTerminator Carbon AI",
    date: "2026-02-20",
  },
];

export const temperatureData = [
  { year: "1980", temp: 0.26, co2: 339 },
  { year: "1985", temp: 0.12, co2: 346 },
  { year: "1990", temp: 0.45, co2: 354 },
  { year: "1995", temp: 0.46, co2: 361 },
  { year: "2000", temp: 0.42, co2: 370 },
  { year: "2005", temp: 0.68, co2: 380 },
  { year: "2010", temp: 0.72, co2: 390 },
  { year: "2015", temp: 0.90, co2: 401 },
  { year: "2020", temp: 1.02, co2: 414 },
  { year: "2025", temp: 1.35, co2: 425 },
];

export const emissionsBySource = [
  { source: "Energy", value: 73.2, color: "#ef4444" },
  { source: "Agriculture", value: 11.8, color: "#f59e0b" },
  { source: "Industry", value: 5.2, color: "#8b5cf6" },
  { source: "Transport", value: 3.8, color: "#3b82f6" },
  { source: "Buildings", value: 3.5, color: "#06b6d4" },
  { source: "Other", value: 2.5, color: "#6b7280" },
];

export const seaLevelData = [
  { year: "1993", level: 0 },
  { year: "1997", level: 12 },
  { year: "2001", level: 22 },
  { year: "2005", level: 35 },
  { year: "2009", level: 48 },
  { year: "2013", level: 62 },
  { year: "2017", level: 78 },
  { year: "2021", level: 97 },
  { year: "2025", level: 112 },
];
