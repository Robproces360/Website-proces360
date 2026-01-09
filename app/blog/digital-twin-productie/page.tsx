'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Layers,
  Monitor,
  Cpu,
  BarChart3,
  Settings,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Database,
  Wifi,
  Box,
  RefreshCw,
  Eye,
  Play,
  Gauge,
  Shield,
  Factory,
  ArrowRight,
  LineChart,
  Search
} from 'lucide-react';

export default function DigitalTwinProductiePage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Breadcrumb */}
      <div className="bg-bg-secondary border-b border-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary-500 transition-colors">Home</Link>
            <ChevronRight size={16} className="text-text-muted" />
            <Link href="/blog" className="text-text-secondary hover:text-primary-500 transition-colors">Blog</Link>
            <ChevronRight size={16} className="text-text-muted" />
            <span className="text-text-primary">Digital Twin Productie</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <Layers size={14} className="mr-1" />
              Industrie 4.0
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Cornerstone Content
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Digital Twin in Productie: Virtuele Fabriek voor Echte Resultaten
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Hoe MKB-productiebedrijven digital twins inzetten om processen te simuleren,
            bottlenecks te voorspellen en beslissingen te valideren voordat ze de
            productievloer raken. Complete gids met implementatieplan en ROI-analyse.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-divider">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>9 december 2025</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>22 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">25-30%</div>
            <div className="text-purple-100 text-sm">Minder ongeplande stops</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">15-20%</div>
            <div className="text-blue-100 text-sm">Hogere productiviteit</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">30-50%</div>
            <div className="text-green-100 text-sm">Snellere time-to-market</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">10-15%</div>
            <div className="text-orange-100 text-sm">Lagere operationele kosten</div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-secondary rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Inhoudsopgave</h2>
          <nav className="grid md:grid-cols-2 gap-2">
            {[
              { href: "#wat-is-digital-twin", title: "1. Wat is een Digital Twin?" },
              { href: "#niveaus", title: "2. De 5 Volwassenheidsniveaus" },
              { href: "#architectuur", title: "3. Technische Architectuur" },
              { href: "#toepassingen", title: "4. Toepassingen in Productie" },
              { href: "#implementatie", title: "5. Implementatieplan 6 Fasen" },
              { href: "#technologie-stack", title: "6. Technologie Stack" },
              { href: "#cases", title: "7. Praktijkcases MKB" },
              { href: "#roi", title: "8. ROI-Analyse" },
              { href: "#valkuilen", title: "9. 7 Valkuilen Vermijden" },
              { href: "#faq", title: "10. Veelgestelde Vragen" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-500 hover:text-primary-600 hover:underline"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-text-secondary leading-relaxed">
            &quot;Voordat we deze productielijn ombouwen voor het nieuwe product, kunnen we simuleren
            of het gaat werken?&quot; Deze vraag van een productieleider leidde tot de implementatie
            van hun eerste digital twin—en bespaarde uiteindelijk €180.000 aan vermeden fouten.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            Een <strong>digital twin</strong> is een virtuele replica van je fysieke productieomgeving:
            machines, processen, materiaalstromen en zelfs medewerkers. Deze replica wordt continu
            gevoed met real-time data en stelt je in staat om te simuleren, te voorspellen en te
            optimaliseren—zonder risico voor de echte productie.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <p className="text-purple-900 font-medium mb-2">
              Kernbelofte Digital Twin
            </p>
            <p className="text-purple-800">
              &quot;Test 100 scenario&apos;s virtueel voordat je één wijziging fysiek doorvoert.
              Maak fouten in de simulatie, niet op de productievloer.&quot;
            </p>
          </div>
        </section>

        {/* Section 1: What is Digital Twin */}
        <section id="wat-is-digital-twin" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            1. Wat is een Digital Twin?
          </h2>

          <p className="text-text-secondary mb-6">
            Een digital twin is meer dan een 3D-model of dashboard. Het is een dynamische,
            data-gedreven representatie die in real-time synchroniseert met de fysieke werkelijkheid.
          </p>

          <div className="bg-bg-secondary rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              De 3 Kerncomponenten
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Box className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Fysieke Asset</h4>
                <p className="text-text-secondary text-sm">
                  De echte machine, productielijn of complete fabriek met sensoren
                  die data verzamelen over status, prestaties en omgeving.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Virtueel Model</h4>
                <p className="text-text-secondary text-sm">
                  De digitale replica inclusief geometrie, gedrag, fysica en
                  relaties met andere systemen. Leeft in de cloud of on-premise.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Data-connectie</h4>
                <p className="text-text-secondary text-sm">
                  Bi-directionele datastroom die fysiek en virtueel synchroniseert:
                  sensoren → model → insights → acties → fysiek.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Digital Twin vs. Andere Technologieën
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Technologie</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Doel</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Real-time?</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Simulatie?</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Predictief?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">CAD Model</td>
                  <td className="p-4 text-text-secondary">Ontwerp & documentatie</td>
                  <td className="p-4 text-red-600">Nee</td>
                  <td className="p-4 text-yellow-600">Beperkt</td>
                  <td className="p-4 text-red-600">Nee</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">SCADA/HMI</td>
                  <td className="p-4 text-text-secondary">Monitoring & besturing</td>
                  <td className="p-4 text-green-600">Ja</td>
                  <td className="p-4 text-red-600">Nee</td>
                  <td className="p-4 text-red-600">Nee</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Simulatiesoftware</td>
                  <td className="p-4 text-text-secondary">What-if analyse</td>
                  <td className="p-4 text-red-600">Nee</td>
                  <td className="p-4 text-green-600">Ja</td>
                  <td className="p-4 text-yellow-600">Beperkt</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">IoT Platform</td>
                  <td className="p-4 text-text-secondary">Data verzameling</td>
                  <td className="p-4 text-green-600">Ja</td>
                  <td className="p-4 text-red-600">Nee</td>
                  <td className="p-4 text-yellow-600">Beperkt</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="p-4 font-semibold text-purple-800">Digital Twin</td>
                  <td className="p-4 text-purple-700">Volledig begrip & optimalisatie</td>
                  <td className="p-4 text-green-600 font-medium">Ja</td>
                  <td className="p-4 text-green-600 font-medium">Ja</td>
                  <td className="p-4 text-green-600 font-medium">Ja</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-blue-900 mb-1">Inzicht</p>
                <p className="text-blue-800 text-sm">
                  De digital twin combineert de beste eigenschappen van al deze technologieën
                  en voegt voorspellende capaciteiten toe. Het is niet &quot;óf CAD óf IoT&quot; maar
                  een integratie van beide plus intelligentie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Maturity Levels */}
        <section id="niveaus" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            2. De 5 Volwassenheidsniveaus van Digital Twins
          </h2>

          <p className="text-text-secondary mb-8">
            Niet elke digital twin is even geavanceerd. De meeste MKB-bedrijven starten
            op niveau 1-2 en groeien geleidelijk naar hogere niveaus.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                level: 1,
                name: "Descriptive Twin",
                description: "Real-time visualisatie van huidige status",
                capabilities: ["3D visualisatie van assets", "Live data dashboards", "Alarmering bij afwijkingen"],
                example: "Je ziet op een scherm welke machines draaien, met welke snelheid, en of er alarmen zijn.",
                color: "blue",
                effort: "Laag"
              },
              {
                level: 2,
                name: "Informative Twin",
                description: "Historische analyse en rapportage",
                capabilities: ["Trend analyses", "Performance benchmarking", "Root cause identification"],
                example: "Je kunt teruggaan in de tijd: 'Wat gebeurde er vorige week toen machine 3 uitviel?'",
                color: "green",
                effort: "Laag-Medium"
              },
              {
                level: 3,
                name: "Predictive Twin",
                description: "Voorspelling van toekomstige toestanden",
                capabilities: ["Predictive maintenance", "Demand forecasting", "Quality prediction"],
                example: "Het systeem voorspelt dat de motor over 3 weken onderhoud nodig heeft.",
                color: "purple",
                effort: "Medium"
              },
              {
                level: 4,
                name: "Prescriptive Twin",
                description: "Aanbevelingen voor optimale acties",
                capabilities: ["Optimalisatie suggesties", "Scenario planning", "Automated recommendations"],
                example: "Het systeem adviseert: 'Verplaats onderhoud naar vrijdag voor minimale impact.'",
                color: "orange",
                effort: "Medium-Hoog"
              },
              {
                level: 5,
                name: "Autonomous Twin",
                description: "Zelfoptimaliserende systemen",
                capabilities: ["Closed-loop optimization", "Self-healing systemen", "Autonome besluitvorming"],
                example: "Het systeem past automatisch productieparameters aan op basis van kwaliteitsmetingen.",
                color: "red",
                effort: "Hoog"
              }
            ].map((item) => (
              <div key={item.level} className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-${item.color}-500 text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                    {item.level}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold text-${item.color}-900`}>
                      Niveau {item.level}: {item.name}
                    </h3>
                    <p className={`text-${item.color}-700 text-sm`}>{item.description}</p>
                  </div>
                  <span className={`ml-auto px-3 py-1 bg-${item.color}-100 text-${item.color}-800 rounded-full text-xs font-medium`}>
                    Implementatie: {item.effort}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className={`text-${item.color}-900 font-medium text-sm mb-2`}>Mogelijkheden:</p>
                    <ul className="space-y-1">
                      {item.capabilities.map((cap, idx) => (
                        <li key={idx} className={`flex items-center gap-2 text-${item.color}-800 text-sm`}>
                          <CheckCircle size={14} className={`text-${item.color}-600`} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={`text-${item.color}-900 font-medium text-sm mb-2`}>Praktijkvoorbeeld:</p>
                    <p className={`text-${item.color}-800 text-sm italic`}>&quot;{item.example}&quot;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h4 className="font-semibold text-text-primary mb-4">Aanbevolen Groeipad voor MKB</h4>
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                <p className="text-text-secondary">Start</p>
                <p className="text-xs text-text-muted">3-6 maanden</p>
              </div>
              <ArrowRight className="text-gray-400" />
              <div className="text-center">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                <p className="text-text-secondary">Basis</p>
                <p className="text-xs text-text-muted">+6 maanden</p>
              </div>
              <ArrowRight className="text-gray-400" />
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                <p className="text-text-secondary">Optimaal</p>
                <p className="text-xs text-text-muted">+12 maanden</p>
              </div>
              <ArrowRight className="text-gray-400 hidden md:block" />
              <div className="text-center hidden md:block">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">4-5</div>
                <p className="text-text-secondary">Geavanceerd</p>
                <p className="text-xs text-text-muted">Toekomst</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Architecture */}
        <section id="architectuur" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            3. Technische Architectuur Digital Twin
          </h2>

          <p className="text-text-secondary mb-8">
            Een digital twin-architectuur bestaat uit meerdere lagen die samenwerken
            om data te verzamelen, te verwerken en om te zetten in inzichten.
          </p>

          <div className="bg-bg-secondary rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              5-Laags Architectuur
            </h3>

            <div className="space-y-4">
              {/* Layer 5: Application */}
              <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-300">
                <div className="flex items-center gap-3 mb-2">
                  <Monitor className="text-purple-600" size={24} />
                  <h4 className="font-semibold text-purple-900">Laag 5: Applicatie & Visualisatie</h4>
                </div>
                <p className="text-purple-800 text-sm mb-2">
                  Gebruikersinterface, dashboards, 3D visualisatie, alerts
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">3D Viewer</span>
                  <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">Dashboards</span>
                  <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">Reports</span>
                  <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">Alerts</span>
                </div>
              </div>

              {/* Layer 4: Analytics */}
              <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="text-blue-600" size={24} />
                  <h4 className="font-semibold text-blue-900">Laag 4: Analytics & AI</h4>
                </div>
                <p className="text-blue-800 text-sm mb-2">
                  Machine learning, simulatie-engines, optimalisatie-algoritmes
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">ML Models</span>
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">Simulatie</span>
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">Optimalisatie</span>
                  <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">Predictive</span>
                </div>
              </div>

              {/* Layer 3: Digital Twin Platform */}
              <div className="bg-green-100 rounded-lg p-4 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="text-green-600" size={24} />
                  <h4 className="font-semibold text-green-900">Laag 3: Digital Twin Platform</h4>
                </div>
                <p className="text-green-800 text-sm mb-2">
                  Twin modellen, relaties, gedragsmodellen, state management
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">Asset Models</span>
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">Relationships</span>
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">Physics</span>
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">History</span>
                </div>
              </div>

              {/* Layer 2: Data Platform */}
              <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-300">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="text-yellow-600" size={24} />
                  <h4 className="font-semibold text-yellow-900">Laag 2: Data Platform</h4>
                </div>
                <p className="text-yellow-800 text-sm mb-2">
                  Dataopslag, stream processing, ETL, data quality
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">Time Series DB</span>
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">Data Lake</span>
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">Streaming</span>
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">Integration</span>
                </div>
              </div>

              {/* Layer 1: Edge & Connectivity */}
              <div className="bg-orange-100 rounded-lg p-4 border-2 border-orange-300">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="text-orange-600" size={24} />
                  <h4 className="font-semibold text-orange-900">Laag 1: Edge & Connectivity</h4>
                </div>
                <p className="text-orange-800 text-sm mb-2">
                  Sensoren, PLC&apos;s, gateways, edge computing, protocollen
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">Sensoren</span>
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">PLC/SCADA</span>
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">OPC-UA</span>
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">MQTT</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Data Flow in een Digital Twin
          </h3>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <h4 className="font-medium text-text-primary mb-2">Verzamelen</h4>
              <p className="text-text-secondary text-sm">
                Sensoren meten temperatuur, trillingen, snelheid, energie etc.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-600 font-bold">2</span>
              </div>
              <h4 className="font-medium text-text-primary mb-2">Verwerken</h4>
              <p className="text-text-secondary text-sm">
                Edge devices filteren, aggregeren en streamen data naar cloud.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-medium text-text-primary mb-2">Modelleren</h4>
              <p className="text-text-secondary text-sm">
                Digital twin platform update virtuele modellen in real-time.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h4 className="font-medium text-text-primary mb-2">Acteren</h4>
              <p className="text-text-secondary text-sm">
                Insights triggeren alerts, rapporten of automatische acties.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Applications */}
        <section id="toepassingen" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            4. Toepassingen van Digital Twins in Productie
          </h2>

          <p className="text-text-secondary mb-8">
            Digital twins bieden waarde in elke fase van de productie lifecycle.
            Hier zijn de meest impactvolle toepassingen voor MKB-bedrijven.
          </p>

          <div className="space-y-6 mb-8">
            {/* Application 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="text-purple-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    1. Real-time Productie Monitoring
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Volledige zichtbaarheid op je productievloer vanuit één unified view.
                    Zie direct welke machines draaien, met welke efficiency, en waar problemen ontstaan.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-text-primary">OEE per machine</p>
                      <p className="text-xs text-text-muted">Live beschikbaarheid, performance, kwaliteit</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-text-primary">Productiestatus</p>
                      <p className="text-xs text-text-muted">Orders, batches, cyclustijden</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-text-primary">Energieverbruik</p>
                      <p className="text-xs text-text-muted">Per machine en productielijn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="text-green-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    2. Productie Simulatie & Planning
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Test scenario&apos;s voordat je ze uitvoert. Simuleer productieplanningen,
                    ombouwtijden, nieuwe producten en capaciteitsveranderingen virtueel.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-text-primary mb-2">Use Cases:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2 text-text-secondary text-sm">
                          <CheckCircle size={14} className="text-green-500" />
                          Nieuwe productlijn simuleren
                        </li>
                        <li className="flex items-center gap-2 text-text-secondary text-sm">
                          <CheckCircle size={14} className="text-green-500" />
                          Layout wijzigingen testen
                        </li>
                        <li className="flex items-center gap-2 text-text-secondary text-sm">
                          <CheckCircle size={14} className="text-green-500" />
                          Capaciteitsplanning optimaliseren
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-900 font-medium text-sm mb-1">Resultaat:</p>
                      <p className="text-green-800 text-sm">
                        30-50% snellere time-to-market voor nieuwe producten door
                        virtuele validatie vooraf.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="text-blue-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    3. Predictive Maintenance
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Voorspel wanneer machines onderhoud nodig hebben op basis van
                    real-time conditiedata en historische patronen.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 mb-1">25-30%</p>
                      <p className="text-xs text-blue-800">Minder ongeplande stops</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 mb-1">15-20%</p>
                      <p className="text-xs text-blue-800">Lagere onderhoudskosten</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 mb-1">2-3x</p>
                      <p className="text-xs text-blue-800">Langere asset levensduur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-orange-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    4. Kwaliteitsoptimalisatie
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Correleer procesparameters met productkwaliteit. Identificeer
                    welke machine-instellingen leiden tot de beste kwaliteit.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-orange-900 font-medium text-sm mb-2">Voorbeeld:</p>
                    <p className="text-orange-800 text-sm">
                      &quot;De digital twin ontdekte dat een combinatie van temperatuur (185°C),
                      druk (4.2 bar) en koeltijd (12 sec) de afkeur met 40% reduceerde.
                      Dit zou handmatig maanden geduurd hebben om te ontdekken.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-yellow-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    5. Energie-optimalisatie
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Monitor en optimaliseer energieverbruik op machine- en procesniveau.
                    Identificeer inefficiënties en besparingsmogelijkheden.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-text-primary mb-2">Analyses:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2 text-text-secondary text-sm">
                          <CheckCircle size={14} className="text-yellow-500" />
                          Piekverbruik identificatie
                        </li>
                        <li className="flex items-center gap-2 text-text-secondary text-sm">
                          <CheckCircle size={14} className="text-yellow-500" />
                          Standby verbruik detectie
                        </li>
                        <li className="flex items-center gap-2 text-text-secondary text-sm">
                          <CheckCircle size={14} className="text-yellow-500" />
                          Optimale inschakelvolgorde
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <p className="text-yellow-900 font-medium text-sm mb-1">Besparing:</p>
                      <p className="text-yellow-800 text-sm">
                        Typisch 10-20% energiebesparing door inzicht
                        in verbruikspatronen en optimalisatie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Implementation Plan */}
        <section id="implementatie" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            5. Digital Twin Implementatieplan: 6 Fasen
          </h2>

          <p className="text-text-secondary mb-8">
            Een succesvolle digital twin implementatie vereist een gestructureerde aanpak.
            Dit 6-fasen plan heeft bewezen effectief te zijn voor MKB-productiebedrijven.
          </p>

          <div className="space-y-6 mb-8">
            {/* Phase 1 */}
            <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 1: Assessment & Strategie</h3>
                  <p className="text-text-muted text-sm">4-6 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Bepaal business case en doelstellingen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Inventariseer huidige data infrastructuur
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Identificeer pilot use case (1 lijn/machine)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Selecteer technologie partners
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-900 mb-2">Deliverables:</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Digital twin roadmap</li>
                    <li>• Business case met ROI-projectie</li>
                    <li>• Pilot scope definitie</li>
                    <li>• Vendor shortlist</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 2: Data Foundation</h3>
                  <p className="text-text-muted text-sm">6-8 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Installeer ontbrekende sensoren
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Configureer data connectiviteit (OPC-UA, MQTT)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Implementeer data platform (cloud/edge)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Valideer datakwaliteit en -volledigheid
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-900 mb-2">Success Criteria:</p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• &gt;95% data uptime</li>
                    <li>• &lt;5 sec latency</li>
                    <li>• Alle kritische datapunten beschikbaar</li>
                    <li>• Data quality baseline gemeten</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 3: Twin Modellering</h3>
                  <p className="text-text-muted text-sm">8-12 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Bouw asset models (machines, lijnen)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Definieer relaties en dependencies
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Implementeer gedragsmodellen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Koppel real-time data aan twin
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-purple-900 mb-2">Model Types:</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Geometrisch (3D/2D representatie)</li>
                    <li>• Functioneel (wat doet de asset)</li>
                    <li>• Gedrag (hoe reageert het)</li>
                    <li>• Relaties (invloed op andere assets)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 4: Visualisatie & Analytics</h3>
                  <p className="text-text-muted text-sm">6-8 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Bouw real-time dashboards
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Implementeer 3D visualisatie (optioneel)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Configureer alerts en notifications
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Ontwikkel eerste analytics use cases
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-orange-900 mb-2">Dashboard Views:</p>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Fabriek overview (bird&apos;s eye)</li>
                    <li>• Machine detail view</li>
                    <li>• OEE analytics</li>
                    <li>• Alarm management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 5: Pilot & Validatie</h3>
                  <p className="text-text-muted text-sm">8-12 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      Draai pilot op geselecteerde lijn
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      Train operators en engineers
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      Verzamel feedback en issues
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                      Meet en valideer ROI
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-red-900 mb-2">Validatie Checkpoints:</p>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Twin accuraatheid &gt;95%</li>
                    <li>• Gebruikersadoptie &gt;80%</li>
                    <li>• Meetbare verbeteringen</li>
                    <li>• Go/no-go voor uitrol</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 6: Scale & Optimize</h3>
                  <p className="text-text-muted text-sm">Ongoing</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Rol uit naar overige lijnen/machines
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Voeg geavanceerde analytics toe
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Integreer met ERP/MES systemen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Continue optimalisatie cyclus
                    </li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-indigo-900 mb-2">Uitbreidingen:</p>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Predictive maintenance modellen</li>
                    <li>• Simulatie capabilities</li>
                    <li>• Supply chain integratie</li>
                    <li>• Multi-site deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-yellow-900 mb-1">Kritieke Succesfactoren</p>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• <strong>Executive sponsorship</strong> - Zonder commitment van management stopt het project</li>
                  <li>• <strong>Data quality first</strong> - Garbage in = garbage out, investeer in datakwaliteit</li>
                  <li>• <strong>Start klein</strong> - Pilot bewijst waarde voordat je opschaalt</li>
                  <li>• <strong>Change management</strong> - Mensen moeten de twin willen gebruiken</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Technology Stack */}
        <section id="technologie-stack" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            6. Technologie Stack voor MKB
          </h2>

          <p className="text-text-secondary mb-8">
            Je hebt geen enterprise-budget nodig voor een digital twin. Hier zijn
            pragmatische technologiekeuzes per budgetniveau.
          </p>

          <div className="space-y-6 mb-8">
            {/* Budget Level 1 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-900">Starter Stack</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  €25K - €75K
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-green-900 mb-2">Componenten:</p>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      <span><strong>Connectiviteit:</strong> Node-RED + MQTT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      <span><strong>Data Platform:</strong> InfluxDB + Grafana</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      <span><strong>Twin Platform:</strong> Custom of lightweight</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      <span><strong>Visualisatie:</strong> Grafana dashboards</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-900 mb-2">Geschikt voor:</p>
                  <p className="text-sm text-green-800">
                    Bedrijven die willen starten met basic monitoring en OEE tracking
                    op 1-3 machines. Niveau 1-2 digital twin.
                  </p>
                </div>
              </div>
            </div>

            {/* Budget Level 2 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Growth Stack</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  €75K - €200K
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Componenten:</p>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      <span><strong>Connectiviteit:</strong> Kepware + OPC-UA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      <span><strong>Data Platform:</strong> Azure IoT Hub / AWS IoT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      <span><strong>Twin Platform:</strong> Azure Digital Twins / AWS TwinMaker</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      <span><strong>Analytics:</strong> Power BI + Azure ML</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Geschikt voor:</p>
                  <p className="text-sm text-blue-800">
                    Groeiende MKB&apos;s die een complete productielijn willen monitoren
                    met predictive capabilities. Niveau 2-3 digital twin.
                  </p>
                </div>
              </div>
            </div>

            {/* Budget Level 3 */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-900">Enterprise Stack</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  €200K+
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-2">Componenten:</p>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      <span><strong>Platform:</strong> Siemens MindSphere / PTC ThingWorx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      <span><strong>Simulatie:</strong> Tecnomatix / FlexSim</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      <span><strong>3D Twin:</strong> Unity/Unreal + Nvidia Omniverse</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      <span><strong>AI/ML:</strong> Custom models + MLOps</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-2">Geschikt voor:</p>
                  <p className="text-sm text-purple-800">
                    Grote productiebedrijven die volledige fabrieken willen digitaliseren
                    met geavanceerde simulatie en AI. Niveau 3-5 digital twin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h4 className="font-semibold text-text-primary mb-4">Aanbevolen Start voor MKB</h4>
            <p className="text-text-secondary mb-4">
              Voor de meeste MKB-productiebedrijven adviseren we de <strong>Growth Stack</strong>:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Schaalbaar van 1 machine naar complete fabriek
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Pay-as-you-grow cloud model (geen grote upfront investering)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Bewezen technologieën met goede support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Uitbreidbaar naar niveau 4-5 wanneer nodig
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7: Case Studies */}
        <section id="cases" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            7. Praktijkcases: Digital Twins in MKB
          </h2>

          <div className="space-y-8">
            {/* Case 1 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Case 1: Metaalbewerker - Productielijn Twin
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Bedrijf</p>
                    <p className="font-medium text-text-primary">Precisie metaalbewerking</p>
                    <p className="text-sm text-text-secondary">65 medewerkers, €12M omzet</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Uitdaging</p>
                    <p className="font-medium text-text-primary">Ongeplande machine stilstand</p>
                    <p className="text-sm text-text-secondary">8% productieverlies door storingen</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Investering</p>
                    <p className="font-medium text-text-primary">€85.000</p>
                    <p className="text-sm text-text-secondary">Twin voor 5 CNC machines</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-text-primary mb-2">Implementatie:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Trillingssensoren op alle spindels geïnstalleerd</li>
                    <li>• Real-time OEE monitoring per machine</li>
                    <li>• Predictive maintenance model voor spindel slijtage</li>
                    <li>• Automatische alerts bij afwijkend trilpatroon</li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 mb-1">65%</p>
                    <p className="text-xs text-green-800">Minder ongeplande stops</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">€145K</p>
                    <p className="text-xs text-blue-800">Jaarlijkse besparing</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">7 mnd</p>
                    <p className="text-xs text-purple-800">Terugverdientijd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Case 2: Kunststofverwerker - Spuitgiet Simulatie Twin
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Bedrijf</p>
                    <p className="font-medium text-text-primary">Kunststof spuitgieten</p>
                    <p className="text-sm text-text-secondary">45 medewerkers, €8M omzet</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Uitdaging</p>
                    <p className="font-medium text-text-primary">Lange opstarttijd nieuwe producten</p>
                    <p className="text-sm text-text-secondary">4-6 weken per nieuwe mal</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Investering</p>
                    <p className="font-medium text-text-primary">€120.000</p>
                    <p className="text-sm text-text-secondary">Simulatie + proces twin</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-text-primary mb-2">Implementatie:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Digitale replica van 8 spuitgietmachines</li>
                    <li>• Simulatiemodel voor nieuwe producten/mallen</li>
                    <li>• Procesparameter optimalisatie via twin</li>
                    <li>• Kwaliteitsvoorspelling op basis van settings</li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 mb-1">45%</p>
                    <p className="text-xs text-green-800">Kortere opstarttijd</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">35%</p>
                    <p className="text-xs text-blue-800">Minder opstartafval</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">12 mnd</p>
                    <p className="text-xs text-purple-800">Terugverdientijd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Case 3: Voedselverpakker - Complete Fabriek Twin
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Bedrijf</p>
                    <p className="font-medium text-text-primary">Voedselverpakking</p>
                    <p className="text-sm text-text-secondary">120 medewerkers, €25M omzet</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Uitdaging</p>
                    <p className="font-medium text-text-primary">Complexe lijnbalancering</p>
                    <p className="text-sm text-text-secondary">7 gekoppelde machines, veel productwissels</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Investering</p>
                    <p className="font-medium text-text-primary">€220.000</p>
                    <p className="text-sm text-text-secondary">Complete lijn twin + simulatie</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-text-primary mb-2">Implementatie:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Twin van complete verpakkingslijn (7 machines)</li>
                    <li>• Real-time bottleneck identificatie</li>
                    <li>• Productieplanning simulatie</li>
                    <li>• Energie-optimalisatie module</li>
                    <li>• Omsteltijd optimalisatie</li>
                  </ul>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 mb-1">18%</p>
                    <p className="text-xs text-green-800">Hogere output</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">25%</p>
                    <p className="text-xs text-blue-800">Kortere omsteltijd</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600 mb-1">15%</p>
                    <p className="text-xs text-yellow-800">Energiebesparing</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">14 mnd</p>
                    <p className="text-xs text-purple-800">Terugverdientijd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: ROI Analysis */}
        <section id="roi" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            8. ROI-Analyse Digital Twin
          </h2>

          <p className="text-text-secondary mb-8">
            De ROI van een digital twin komt uit meerdere bronnen. Hier is een
            framework om de business case voor jouw situatie te berekenen.
          </p>

          <div className="bg-bg-secondary rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Typische Besparingscategorieën
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-text-primary border-b">Categorie</th>
                    <th className="text-left p-4 font-semibold text-text-primary border-b">Bron van Besparing</th>
                    <th className="text-center p-4 font-semibold text-text-primary border-b">Typisch %</th>
                    <th className="text-right p-4 font-semibold text-text-primary border-b">Voorbeeld €10M omzet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Minder downtime</td>
                    <td className="p-4 text-text-secondary">Predictive maintenance, snellere diagnose</td>
                    <td className="p-4 text-center">25-40%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€50-80K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Hogere OEE</td>
                    <td className="p-4 text-text-secondary">Bottleneck eliminatie, optimalisatie</td>
                    <td className="p-4 text-center">5-15%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€75-150K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Lagere afkeur</td>
                    <td className="p-4 text-text-secondary">Kwaliteitsvoorspelling, procesoptimalisatie</td>
                    <td className="p-4 text-center">15-30%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€30-60K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Snellere NPI</td>
                    <td className="p-4 text-text-secondary">Virtuele validatie nieuwe producten</td>
                    <td className="p-4 text-center">30-50%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€25-50K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Energiebesparing</td>
                    <td className="p-4 text-text-secondary">Verbruiksoptimalisatie</td>
                    <td className="p-4 text-center">10-20%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€15-30K/jaar</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-4 font-semibold text-green-900" colSpan={2}>Totale Potentiële Besparing</td>
                    <td className="p-4 text-center text-green-900 font-semibold">-</td>
                    <td className="p-4 text-right text-green-600 font-bold">€195-370K/jaar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            ROI Rekenvoorbeeld
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <BarChart3 className="text-blue-500" size={20} />
                Investering (eenmalig + recurring)
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Platform & software</td>
                    <td className="py-2 text-right font-medium">€65.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Hardware (sensoren, edge)</td>
                    <td className="py-2 text-right font-medium">€25.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Implementatie & configuratie</td>
                    <td className="py-2 text-right font-medium">€35.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Training</td>
                    <td className="py-2 text-right font-medium">€10.000</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-2 font-medium">Totaal Initieel</td>
                    <td className="py-2 text-right font-bold">€135.000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Jaarlijkse licentie & support</td>
                    <td className="py-2 text-right font-medium">€25.000/jaar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="text-green-500" size={20} />
                Opbrengsten (conservatieve schatting)
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Minder ongeplande stilstand</td>
                    <td className="py-2 text-right font-medium text-green-600">+€60.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">OEE verbetering (+8%)</td>
                    <td className="py-2 text-right font-medium text-green-600">+€95.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Kwaliteitsverbetering</td>
                    <td className="py-2 text-right font-medium text-green-600">+€35.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Energiebesparing</td>
                    <td className="py-2 text-right font-medium text-green-600">+€20.000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 font-medium">Totaal Jaarlijks</td>
                    <td className="py-2 text-right font-bold text-green-600">€210.000/jaar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h4 className="font-semibold text-purple-900 mb-4">ROI Berekening</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-purple-700 mb-1">Netto Besparing Jaar 1</p>
                <p className="text-2xl font-bold text-purple-900">€50.000</p>
                <p className="text-xs text-purple-600">(€210K - €135K - €25K)</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-purple-700 mb-1">Jaarlijks Rendement</p>
                <p className="text-2xl font-bold text-purple-900">€185.000</p>
                <p className="text-xs text-purple-600">(€210K - €25K support)</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-purple-700 mb-1">Terugverdientijd</p>
                <p className="text-2xl font-bold text-purple-900">~9 maanden</p>
                <p className="text-xs text-purple-600">(na initiële implementatie)</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-purple-700 mb-1">3-jaars ROI</p>
                <p className="text-2xl font-bold text-purple-900">311%</p>
                <p className="text-xs text-purple-600">(€555K rendement / €135K invest)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Pitfalls */}
        <section id="valkuilen" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            9. 7 Valkuilen bij Digital Twin Implementatie
          </h2>

          <div className="space-y-4">
            {[
              {
                number: 1,
                title: "Te groot beginnen",
                problem: "Complete fabriek willen digitaliseren in één keer",
                solution: "Start met één machine of lijn. Bewijs waarde voordat je opschaalt.",
                icon: Target
              },
              {
                number: 2,
                title: "Data quality onderschatten",
                problem: "Uitgaan dat bestaande data compleet en betrouwbaar is",
                solution: "Investeer in datakwaliteit voordat je gaat modelleren. Garbage in = garbage out.",
                icon: Database
              },
              {
                number: 3,
                title: "Technologie boven use case",
                problem: "Cool platform kopen zonder duidelijk probleem om op te lossen",
                solution: "Definieer eerst concrete use cases en meetbare doelen, kies dan technologie.",
                icon: Cpu
              },
              {
                number: 4,
                title: "IT en OT silos",
                problem: "IT-team bouwt twin los van operations",
                solution: "Cross-functioneel team met operators, engineers én IT. Samen verantwoordelijk.",
                icon: Layers
              },
              {
                number: 5,
                title: "Change management vergeten",
                problem: "Twin gebouwd maar niemand gebruikt het",
                solution: "Investeer in training, maak het onderdeel van dagelijkse werkprocessen.",
                icon: RefreshCw
              },
              {
                number: 6,
                title: "Perfectie nastreven",
                problem: "Wachten tot model 100% accuraat is",
                solution: "80% accuraat en live is beter dan 100% accuraat over 2 jaar. Itereer.",
                icon: Gauge
              },
              {
                number: 7,
                title: "Geen eigenaar aanwijzen",
                problem: "Twin wordt niemands verantwoordelijkheid",
                solution: "Wijs een Digital Twin Owner aan die het model actueel houdt en uitbreidt.",
                icon: Shield
              }
            ].map((pitfall) => (
              <div key={pitfall.number} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pitfall.icon className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {pitfall.number}. {pitfall.title}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-red-900 mb-1">Valkuil:</p>
                        <p className="text-sm text-red-800">{pitfall.problem}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-900 mb-1">Oplossing:</p>
                        <p className="text-sm text-green-800">{pitfall.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            10. Veelgestelde Vragen over Digital Twins
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Wat kost een digital twin voor een MKB-productiebedrijf?",
                a: "Een basis digital twin voor monitoring van enkele machines start vanaf €25.000-50.000. Een meer geavanceerde twin met predictive capabilities voor een complete productielijn ligt tussen €75.000-200.000. De exacte kosten hangen af van het aantal assets, gewenste functionaliteit en bestaande infrastructuur."
              },
              {
                q: "Hoe lang duurt een digital twin implementatie?",
                a: "Een pilot op één machine of lijn duurt typisch 3-6 maanden. Een complete fabriek-brede implementatie kan 12-18 maanden duren. We adviseren altijd te starten met een pilot van 3-4 maanden om waarde te bewijzen voordat je opschaalt."
              },
              {
                q: "Hebben we speciale IT-kennis nodig voor een digital twin?",
                a: "Voor de implementatie is technische expertise nodig, die je kunt inhuren of uitbesteden. Voor het dagelijks gebruik zijn moderne digital twin platforms zo ontworpen dat operators en engineers ze kunnen gebruiken zonder diepgaande IT-kennis. Training is wel essentieel."
              },
              {
                q: "Kunnen we onze bestaande machines koppelen aan een digital twin?",
                a: "Ja, vrijwel alle machines kunnen worden aangesloten. Moderne machines met open protocollen (OPC-UA, MQTT) zijn eenvoudig. Oudere machines kunnen via retrofit sensoren en gateways worden ontsloten. De kosten en complexiteit variëren per machine."
              },
              {
                q: "Wat is het verschil tussen een digital twin en een SCADA/MES systeem?",
                a: "SCADA en MES zijn operationele systemen voor monitoring en productiebesturing. Een digital twin voegt daar simulatie, voorspelling en 'what-if' analyses aan toe. Je kunt een digital twin bouwen bovenop je bestaande SCADA/MES infrastructuur."
              },
              {
                q: "Hoe accuraat moet een digital twin zijn?",
                a: "Dit hangt af van het gebruik. Voor monitoring is 90-95% accuraatheid voldoende. Voor kritieke simulaties (bijv. safety) streef je naar >98%. Start met een 'good enough' model en verbeter iteratief op basis van vergelijking met werkelijke data."
              },
              {
                q: "Kunnen we klein beginnen met een digital twin?",
                a: "Absoluut, en dat adviseren we ook. Start met een 'descriptive twin' (niveau 1-2) voor één kritieke machine of bottleneck. Bewijs waarde, leer van de implementatie, en schaal dan uit naar meer assets en geavanceerdere capabilities."
              },
              {
                q: "Is een digital twin ook nuttig voor kleine series en high-mix productie?",
                a: "Juist daar kan de waarde hoog zijn. Bij veel productwissels helpt simulatie om omsteltijden te optimaliseren en nieuwe producten sneller op te starten. De twin 'onthoudt' optimale settings voor elk product."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-bg-secondary rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.q}</h3>
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Klaar om je Fabriek te Digitaliseren?
            </h2>
            <p className="text-purple-100 mb-6">
              Een digital twin is geen science fiction meer—het is een bewezen technologie
              die MKB-productiebedrijven helpt om slimmere beslissingen te nemen,
              problemen te voorkomen en concurrerend te blijven.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold mb-1">Start klein</p>
                <p className="text-purple-200 text-sm">Eén machine, concrete use case</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold mb-1">Bewijs waarde</p>
                <p className="text-purple-200 text-sm">Meetbare resultaten in 3 maanden</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold mb-1">Schaal op</p>
                <p className="text-purple-200 text-sm">Uitbreiden naar hele fabriek</p>
              </div>
            </div>
            <p className="text-purple-100 text-sm">
              Proces360 helpt MKB-productiebedrijven met de volledige digital twin journey:
              van assessment en pilot tot fabriek-brede uitrol.
            </p>
          </div>
        </section>

        {/* Author Box */}
        <section className="mb-12">
          <div className="bg-bg-secondary rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                RD
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Rob Derks</h3>
                <p className="text-primary-500 text-sm mb-2">Oprichter Proces360</p>
                <p className="text-text-secondary text-sm">
                  Rob heeft 15+ jaar ervaring in productieoptimalisatie en Industrie 4.0.
                  Hij heeft digital twin projecten begeleid bij tientallen MKB-productiebedrijven,
                  van eerste pilot tot fabriek-brede implementaties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Benieuwd wat een Digital Twin voor jouw bedrijf kan betekenen?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Plan een vrijblijvend gesprek om de mogelijkheden voor jouw productieomgeving te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Plan een Gesprek
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/diensten/productie-dashboards"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg border-2 border-white hover:bg-primary-700 transition-colors"
              >
                Bekijk Dashboard Diensten
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Gerelateerde Artikelen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Predictive Maintenance: Complete Gids",
                description: "Van reactief naar voorspellend onderhoud met sensoren en AI.",
                href: "/blog/predictive-maintenance-gids",
                category: "Maintenance"
              },
              {
                title: "Machine Learning in Productie",
                description: "Praktische AI-toepassingen voor MKB-productiebedrijven.",
                href: "/blog/machine-learning-productie",
                category: "AI & ML"
              },
              {
                title: "Productie KPIs Meten & Verbeteren",
                description: "De belangrijkste metrics voor productieoptimalisatie.",
                href: "/blog/productie-kpis-meten",
                category: "KPIs"
              }
            ].map((article, index) => (
              <Link key={index} href={article.href} className="group">
                <div className="bg-bg-secondary rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                  <span className="text-xs font-medium text-primary-500 mb-2 block">{article.category}</span>
                  <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="border-t border-divider pt-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Ontdek onze Diensten</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/diensten/procesoptimalisatie" className="text-primary-500 hover:text-primary-600 hover:underline text-sm">
              Procesoptimalisatie
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/diensten/oee-verbetering" className="text-primary-500 hover:text-primary-600 hover:underline text-sm">
              OEE Verbetering
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/diensten/cobot-integratie" className="text-primary-500 hover:text-primary-600 hover:underline text-sm">
              Cobot Integratie
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/diensten/industriele-automatisering" className="text-primary-500 hover:text-primary-600 hover:underline text-sm">
              Industriële Automatisering
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/diensten/productie-dashboards" className="text-primary-500 hover:text-primary-600 hover:underline text-sm">
              Productie Dashboards
            </Link>
          </div>
        </section>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-divider">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Terug naar alle artikelen
          </Link>
        </div>
      </article>
    </main>
  );
}
