'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
  LayoutGrid,
  Timer,
  Target,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Shuffle,
  BarChart3,
  Settings,
  Zap,
  Users,
  Package,
  Truck,
  ClipboardList,
  GitBranch,
  Layers,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Shield,
  LineChart,
  Box,
  Factory,
  Gauge
} from 'lucide-react';

export default function ProductieplanningOptimalisatiePage() {
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
            <span className="text-text-primary">Productieplanning Optimalisatie</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <LayoutGrid size={14} className="mr-1" />
              Procesoptimalisatie
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Cornerstone Content
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Productieplanning Optimalisatie: Van Chaos naar Controle
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Hoe MKB-maakbedrijven hun productieplanning transformeren van Excel-chaos
            naar voorspelbare, geoptimaliseerde scheduling. Complete gids met methoden,
            tools en implementatiestrategieën.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-divider">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>7 januari 2026</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>24 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">20-35%</div>
            <div className="text-blue-100 text-sm">Kortere doorlooptijden</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">15-25%</div>
            <div className="text-green-100 text-sm">Hogere machinebezetting</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">40-60%</div>
            <div className="text-purple-100 text-sm">Minder spoedorders</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">95%+</div>
            <div className="text-orange-100 text-sm">Leverbetrouwbaarheid</div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-secondary rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Inhoudsopgave</h2>
          <nav className="grid md:grid-cols-2 gap-2">
            {[
              { href: "#planningsproblemen", title: "1. De 8 Planningsproblemen" },
              { href: "#planningsniveaus", title: "2. De 3 Planningsniveaus" },
              { href: "#scheduling-methoden", title: "3. Scheduling Methoden" },
              { href: "#capaciteitsplanning", title: "4. Capaciteitsplanning Optimaliseren" },
              { href: "#software-tools", title: "5. Planning Software & APS" },
              { href: "#implementatie", title: "6. Implementatieplan 5 Fasen" },
              { href: "#best-practices", title: "7. 10 Best Practices" },
              { href: "#cases", title: "8. Praktijkcases MKB" },
              { href: "#roi", title: "9. ROI-Analyse" },
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
            &quot;Elke ochtend begin ik met het herschikken van de planning vanwege spoedorders,
            machinestoringen of materiaal dat niet op tijd is.&quot; Herkenbaar? Je bent niet alleen.
            Uit onderzoek blijkt dat 67% van MKB-maakbedrijven nog steeds plaat met Excel of
            vergelijkbare tools, wat leidt tot suboptimale beslissingen en constante brandjes blussen.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            Effectieve productieplanning is geen luxe maar noodzaak. Het bepaalt je leverbetrouwbaarheid,
            machinebezetting, voorraden en uiteindelijk je winstgevendheid. In deze gids delen we
            bewezen methoden om van reactieve planning naar proactieve optimalisatie te gaan.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <p className="text-blue-900 font-medium mb-2">
              Kernbelofte Planningsoptimalisatie
            </p>
            <p className="text-blue-800">
              &quot;Plan niet om te plannen, plan om te presteren. Een goede planning
              voorkomt 80% van de operationele problemen voordat ze ontstaan.&quot;
            </p>
          </div>
        </section>

        {/* Section 1: Planning Problems */}
        <section id="planningsproblemen" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            1. De 8 Meest Voorkomende Planningsproblemen
          </h2>

          <p className="text-text-secondary mb-8">
            Voordat we naar oplossingen kijken, is het belangrijk de symptomen te herkennen.
            Hier zijn de meest voorkomende planningsproblemen in MKB-maakbedrijven.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                problem: "Te veel spoedorders",
                symptoms: ["Constante herplanning", "Stress in productie", "Overwerk"],
                impact: "20-30% efficiencyverlies",
                icon: AlertCircle,
                color: "red"
              },
              {
                problem: "Onbetrouwbare levertijden",
                symptoms: ["Klachten van klanten", "Boetes/claims", "Verloren orders"],
                impact: "Klantverlies, reputatieschade",
                icon: Truck,
                color: "orange"
              },
              {
                problem: "Lage machinebezetting",
                symptoms: ["Machines staan stil", "Hoge kosten per stuk", "Onbenutte capaciteit"],
                impact: "15-25% capaciteitsverlies",
                icon: Factory,
                color: "yellow"
              },
              {
                problem: "Hoge voorraden",
                symptoms: ["Veel onderhanden werk", "Kapitaalbeslag", "Ruimtegebrek"],
                impact: "Te veel werkkapitaal",
                icon: Package,
                color: "purple"
              },
              {
                problem: "Bottleneck blindheid",
                symptoms: ["Werk hoopt op bij één station", "Wachttijden", "Onbalans"],
                impact: "Doorlooptijd x2 of meer",
                icon: GitBranch,
                color: "blue"
              },
              {
                problem: "Planning op onderbuik",
                symptoms: ["Geen data-gedreven beslissingen", "Afhankelijk van ervaring"],
                impact: "Suboptimale keuzes",
                icon: Lightbulb,
                color: "green"
              },
              {
                problem: "Slechte communicatie",
                symptoms: ["Productie weet niet wat komt", "Verkoop overpromises"],
                impact: "Vertraging en frustratie",
                icon: Users,
                color: "indigo"
              },
              {
                problem: "Excel-spaghetti",
                symptoms: ["Meerdere versies", "Geen real-time updates", "Handmatig werk"],
                impact: "Fouten en tijdverlies",
                icon: ClipboardList,
                color: "gray"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-5`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                    <item.icon className={`text-${item.color}-600`} size={20} />
                  </div>
                  <h3 className={`font-semibold text-${item.color}-900`}>{item.problem}</h3>
                </div>
                <ul className={`text-${item.color}-800 text-sm mb-2 space-y-1`}>
                  {item.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 bg-${item.color}-500 rounded-full`}></span>
                      {symptom}
                    </li>
                  ))}
                </ul>
                <p className={`text-${item.color}-700 text-sm font-medium`}>
                  Impact: {item.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-red-900 mb-1">De Kosten van Slechte Planning</p>
                <p className="text-red-800 text-sm">
                  Uit onderzoek bij 200 MKB-maakbedrijven blijkt dat suboptimale planning gemiddeld
                  <strong> 8-15% van de omzet</strong> kost aan inefficiëntie, te hoge voorraden,
                  gemiste orders en klantverlies. Voor een €10M bedrijf is dat €800K-1,5M per jaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Planning Levels */}
        <section id="planningsniveaus" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            2. De 3 Planningsniveaus
          </h2>

          <p className="text-text-secondary mb-8">
            Effectieve productieplanning werkt op drie niveaus die naadloos op elkaar aansluiten.
            De meeste problemen ontstaan door gebrek aan samenhang tussen deze niveaus.
          </p>

          <div className="space-y-6 mb-8">
            {/* Level 1: Strategic */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-purple-500 text-white rounded-xl flex items-center justify-center">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">
                    Niveau 1: Strategische Planning (S&OP)
                  </h3>
                  <p className="text-purple-700">Horizon: 3-18 maanden | Frequentie: Maandelijks</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-2">Focus:</p>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      Afstemming vraag en capaciteit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      Investerings- en personeelsbeslissingen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      Productfamilies en seizoenspatronen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      Make-or-buy beslissingen
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-200/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-purple-900 mb-2">Output:</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Sales & Operations Plan</li>
                    <li>• Capaciteitsplan per maand</li>
                    <li>• Voorraadstrategie</li>
                    <li>• Investerings roadmap</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 2: Tactical */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                  <LayoutGrid size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    Niveau 2: Tactische Planning (MPS/MRP)
                  </h3>
                  <p className="text-blue-700">Horizon: 1-12 weken | Frequentie: Wekelijks</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Focus:</p>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      Master Production Schedule (MPS)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      Material Requirements Planning (MRP)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      Capaciteit per werkstation/week
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      Inkooporders en leveranciers
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-200/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-900 mb-2">Output:</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Productieplan per week/artikel</li>
                    <li>• Inkooporders</li>
                    <li>• Capaciteitsoverzicht</li>
                    <li>• Levertijdbevestigingen</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 3: Operational */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center">
                  <Timer size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900">
                    Niveau 3: Operationele Planning (Scheduling)
                  </h3>
                  <p className="text-green-700">Horizon: 1-7 dagen | Frequentie: Dagelijks/Continu</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-green-900 mb-2">Focus:</p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Volgorde bepalen per machine
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Omsteltijden minimaliseren
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Bottleneck management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Real-time bijsturen
                    </li>
                  </ul>
                </div>
                <div className="bg-green-200/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-900 mb-2">Output:</p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Werkorder volgorde per machine</li>
                    <li>• Start- en eindtijden</li>
                    <li>• Operatorallocatie</li>
                    <li>• Real-time updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h4 className="font-semibold text-text-primary mb-4">De Planning Piramide</h4>
            <div className="flex flex-col items-center">
              <div className="w-32 h-16 bg-purple-500 rounded-t-lg flex items-center justify-center text-white text-sm font-medium">
                S&OP
              </div>
              <div className="w-48 h-16 bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                MPS / MRP
              </div>
              <div className="w-64 h-16 bg-green-500 rounded-b-lg flex items-center justify-center text-white text-sm font-medium">
                Scheduling
              </div>
            </div>
            <p className="text-center text-text-secondary text-sm mt-4">
              Elk niveau stuurt het onderliggende niveau aan. Problemen op operationeel niveau
              zijn vaak symptomen van tekortkomingen op tactisch of strategisch niveau.
            </p>
          </div>
        </section>

        {/* Section 3: Scheduling Methods */}
        <section id="scheduling-methoden" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            3. Scheduling Methoden: Welke Past bij Jou?
          </h2>

          <p className="text-text-secondary mb-8">
            Er zijn verschillende scheduling methoden, elk met eigen sterktes.
            De juiste keuze hangt af van je productieomgeving.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Methode</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Geschikt voor</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Voordelen</th>
                  <th className="text-left p-4 font-semibold text-text-primary border-b">Nadelen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">
                    <span className="font-medium">FIFO</span>
                    <p className="text-xs text-text-muted">First In First Out</p>
                  </td>
                  <td className="p-4 text-text-secondary text-sm">Eenvoudige processen, standaard producten</td>
                  <td className="p-4 text-text-secondary text-sm">Eenvoudig, eerlijk</td>
                  <td className="p-4 text-text-secondary text-sm">Negeert deadlines en prioriteiten</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">
                    <span className="font-medium">EDD</span>
                    <p className="text-xs text-text-muted">Earliest Due Date</p>
                  </td>
                  <td className="p-4 text-text-secondary text-sm">Strakke deadlines, klantorders</td>
                  <td className="p-4 text-text-secondary text-sm">Minimaliseert te laat leveren</td>
                  <td className="p-4 text-text-secondary text-sm">Negeert bewerkingstijd</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">
                    <span className="font-medium">SPT</span>
                    <p className="text-xs text-text-muted">Shortest Processing Time</p>
                  </td>
                  <td className="p-4 text-text-secondary text-sm">High-mix, veel kleine orders</td>
                  <td className="p-4 text-text-secondary text-sm">Maximaliseert doorvoer</td>
                  <td className="p-4 text-text-secondary text-sm">Grote orders schuiven door</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">
                    <span className="font-medium">CR</span>
                    <p className="text-xs text-text-muted">Critical Ratio</p>
                  </td>
                  <td className="p-4 text-text-secondary text-sm">Dynamische omgevingen</td>
                  <td className="p-4 text-text-secondary text-sm">Combineert tijd en deadline</td>
                  <td className="p-4 text-text-secondary text-sm">Complexer te berekenen</td>
                </tr>
                <tr className="border-b bg-blue-50">
                  <td className="p-4">
                    <span className="font-medium text-blue-800">Drum-Buffer-Rope</span>
                    <p className="text-xs text-blue-600">Theory of Constraints</p>
                  </td>
                  <td className="p-4 text-blue-800 text-sm">Duidelijke bottleneck</td>
                  <td className="p-4 text-blue-800 text-sm">Focust op constraint</td>
                  <td className="p-4 text-blue-800 text-sm">Vereist bottleneck identificatie</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-4">
                    <span className="font-medium text-green-800">APS Optimalisatie</span>
                    <p className="text-xs text-green-600">Advanced Planning</p>
                  </td>
                  <td className="p-4 text-green-800 text-sm">Complexe productie, veel constraints</td>
                  <td className="p-4 text-green-800 text-sm">Globaal optimum</td>
                  <td className="p-4 text-green-800 text-sm">Investering en implementatie</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Deep Dive: Drum-Buffer-Rope (DBR)
          </h3>

          <div className="bg-bg-secondary rounded-xl p-6 mb-8">
            <p className="text-text-secondary mb-4">
              DBR is een van de meest effectieve methoden voor MKB-productie. Het komt uit de
              Theory of Constraints en focust alle planning op de bottleneck.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">D</span>
                  </div>
                  <h4 className="font-semibold text-red-900">Drum</h4>
                </div>
                <p className="text-red-800 text-sm">
                  De bottleneck bepaalt het tempo. Plan deze resource 100% benut.
                  Dit is het &apos;ritme&apos; van je fabriek.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">B</span>
                  </div>
                  <h4 className="font-semibold text-blue-900">Buffer</h4>
                </div>
                <p className="text-blue-800 text-sm">
                  Tijdbuffers vóór de bottleneck zorgen dat deze nooit stilvalt.
                  Beschermt tegen variatie in upstream processen.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">R</span>
                  </div>
                  <h4 className="font-semibold text-green-900">Rope</h4>
                </div>
                <p className="text-green-800 text-sm">
                  Material release gesynchroniseerd met bottleneck.
                  Voorkomt overproductie en WIP-opbouw.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Praktijktip:</strong> Identificeer je bottleneck door te kijken waar werk
                ophoopt. Dit is vaak de meest bezette machine, de langste cyclustijd, of het
                station met de meeste wachtrij.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Scheduling Heuristieken voor Omsteltijden
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                <Shuffle className="text-blue-500" size={20} />
                Campagne Planning
              </h4>
              <p className="text-text-secondary text-sm mb-3">
                Groepeer vergelijkbare producten om omsteltijden te minimaliseren.
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-blue-800 text-sm">
                  <strong>Voorbeeld:</strong> Alle witte producten eerst, dan alle gekleurde.
                  Bespaart 30-50% omsteltijd.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                <GitBranch className="text-green-500" size={20} />
                Sequencing Matrix
              </h4>
              <p className="text-text-secondary text-sm mb-3">
                Bepaal optimale volgorde op basis van product-naar-product omsteltijden.
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-800 text-sm">
                  <strong>Voorbeeld:</strong> A→B: 15 min, B→A: 45 min. Plan A→B, nooit B→A
                  als het kan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Capacity Planning */}
        <section id="capaciteitsplanning" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            4. Capaciteitsplanning Optimaliseren
          </h2>

          <p className="text-text-secondary mb-8">
            Capaciteitsplanning is de brug tussen wat je verkoopt en wat je kunt maken.
            Het gaat om het balanceren van vraag en aanbod op de juiste tijdschaal.
          </p>

          <div className="bg-bg-secondary rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              De Capaciteitsbalans
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-blue-600" size={28} />
                </div>
                <h4 className="font-medium text-text-primary mb-2">Vraag (Demand)</h4>
                <p className="text-text-secondary text-sm">
                  Orders, forecasts, seizoenspatronen, promoties
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RefreshCw className="text-gray-600" size={28} />
                </div>
                <h4 className="font-medium text-text-primary mb-2">Balanceren</h4>
                <p className="text-text-secondary text-sm">
                  Capaciteitsplanning, flexibiliteit, buffers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Factory className="text-green-600" size={28} />
                </div>
                <h4 className="font-medium text-text-primary mb-2">Capaciteit (Supply)</h4>
                <p className="text-text-secondary text-sm">
                  Machines, mensen, uitbesteding, voorraad
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Rough-Cut Capacity Planning (RCCP)
          </h3>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <p className="text-text-secondary mb-4">
              RCCP is een snelle methode om te checken of je MPS uitvoerbaar is
              op kritieke resources.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left font-medium">Resource</th>
                    <th className="p-3 text-center font-medium">Week 1</th>
                    <th className="p-3 text-center font-medium">Week 2</th>
                    <th className="p-3 text-center font-medium">Week 3</th>
                    <th className="p-3 text-center font-medium">Week 4</th>
                    <th className="p-3 text-center font-medium">Capaciteit/week</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">CNC Frezen</td>
                    <td className="p-3 text-center bg-green-100">35u (88%)</td>
                    <td className="p-3 text-center bg-yellow-100">42u (105%)</td>
                    <td className="p-3 text-center bg-red-100">48u (120%)</td>
                    <td className="p-3 text-center bg-green-100">32u (80%)</td>
                    <td className="p-3 text-center">40u</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Lassen</td>
                    <td className="p-3 text-center bg-green-100">28u (70%)</td>
                    <td className="p-3 text-center bg-green-100">30u (75%)</td>
                    <td className="p-3 text-center bg-yellow-100">38u (95%)</td>
                    <td className="p-3 text-center bg-green-100">25u (63%)</td>
                    <td className="p-3 text-center">40u</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Assemblage</td>
                    <td className="p-3 text-center bg-yellow-100">72u (90%)</td>
                    <td className="p-3 text-center bg-red-100">88u (110%)</td>
                    <td className="p-3 text-center bg-red-100">96u (120%)</td>
                    <td className="p-3 text-center bg-green-100">64u (80%)</td>
                    <td className="p-3 text-center">80u</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 rounded"></div>
                <span>&lt;90% OK</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-100 rounded"></div>
                <span>90-100% Aandacht</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 rounded"></div>
                <span>&gt;100% Probleem</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-text-primary mb-4">
            5 Manieren om Capaciteitsproblemen op te Lossen
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Werk naar voren halen",
                description: "Plan werk eerder in als er ruimte is in voorgaande weken.",
                icon: ArrowLeft,
                effort: "Laag"
              },
              {
                title: "Overwerk plannen",
                description: "Extra uren of weekendwerk voor piekmomenten.",
                icon: Clock,
                effort: "Medium"
              },
              {
                title: "Uitbesteden",
                description: "Breng werk onder bij leveranciers of toeleveranciers.",
                icon: Truck,
                effort: "Medium"
              },
              {
                title: "Levertijd onderhandelen",
                description: "Vraag klant om latere leverdatum voor niet-kritieke orders.",
                icon: Users,
                effort: "Laag"
              },
              {
                title: "Tijdelijke capaciteit",
                description: "Extra machines huren of uitzendkrachten inzetten.",
                icon: Factory,
                effort: "Hoog"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="text-primary-500" size={20} />
                  <h4 className="font-medium text-text-primary">{item.title}</h4>
                </div>
                <p className="text-text-secondary text-sm mb-2">{item.description}</p>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-text-muted">
                  Inspanning: {item.effort}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Software & APS */}
        <section id="software-tools" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            5. Planning Software & APS Systemen
          </h2>

          <p className="text-text-secondary mb-8">
            Van Excel naar gespecialiseerde software: de juiste tool maakt een wereld van verschil.
            Hier is een overzicht van oplossingen per niveau en budget.
          </p>

          <div className="space-y-6 mb-8">
            {/* Level 1: Basic */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">Niveau 1: Gestructureerde Excel/Sheets</h3>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Gratis - €5K</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Kenmerken:</p>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-gray-500" />
                      Gestandaardiseerde templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-gray-500" />
                      Gantt charts in Excel
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-gray-500" />
                      Capaciteitsoverzichten
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Geschikt voor:</p>
                  <p className="text-sm text-text-secondary">
                    Kleine bedrijven (&lt;20 medewerkers), eenvoudige productie, weinig
                    parallelle processen. Eerste stap om discipline te krijgen.
                  </p>
                </div>
              </div>
            </div>

            {/* Level 2: ERP Planning */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Niveau 2: ERP Planning Module</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">€10K - €50K</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Voorbeelden:</p>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Exact Globe/Online</li>
                    <li>• SAP Business One</li>
                    <li>• Microsoft Dynamics 365 BC</li>
                    <li>• Ridder iQ</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Kenmerken:</p>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      MRP functionaliteit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      Basis capaciteitsplanning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      Integratie met voorraad/inkoop
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 3: Specialized Planning */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-900">Niveau 3: Dedicated Planning Software</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">€25K - €100K</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-green-900 mb-2">Voorbeelden:</p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Asprova</li>
                    <li>• Opcenter APS (Siemens)</li>
                    <li>• JobBOSS²</li>
                    <li>• Productoo</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-900 mb-2">Kenmerken:</p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Visuele scheduling (drag & drop)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Finite capacity planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      What-if simulatie
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 4: Advanced APS */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-900">Niveau 4: Advanced Planning & Scheduling (APS)</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">€75K - €250K+</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-2">Voorbeelden:</p>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li>• Dassault DELMIA Quintiq</li>
                    <li>• ORTEC</li>
                    <li>• Kinaxis</li>
                    <li>• Blue Yonder</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-2">Kenmerken:</p>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      Geavanceerde optimalisatie-algoritmes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      Multi-constraint scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-600" />
                      AI/ML voorspellingen
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-yellow-900 mb-1">Advies voor MKB</p>
                <p className="text-yellow-800 text-sm">
                  De meeste MKB-maakbedrijven (20-200 medewerkers) zijn het beste gediend met
                  <strong> Niveau 2 of 3</strong>. APS is vaak overkill en te duur voor de
                  complexiteit. Focus eerst op discipline in planning voordat je investeert in
                  geavanceerde tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Implementation Plan */}
        <section id="implementatie" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            6. Implementatieplan: 5 Fasen naar Betere Planning
          </h2>

          <p className="text-text-secondary mb-8">
            Een succesvolle planningsverbetering is geen software-project maar een
            transformatie. Volg dit 5-fasen plan voor duurzame resultaten.
          </p>

          <div className="space-y-6 mb-8">
            {/* Phase 1 */}
            <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 1: Diagnose & Baseline</h3>
                  <p className="text-text-muted text-sm">2-4 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Meet huidige KPIs (leverbetrouwbaarheid, doorlooptijd, bezetting)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Analyseer huidige planningsproces (wie, wat, wanneer)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Identificeer bottlenecks en pijnpunten
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      Bepaal root causes van spoedorders
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-900 mb-2">Deliverables:</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Baseline KPI rapport</li>
                    <li>• Planningsproces flowchart</li>
                    <li>• Top 10 verbeterpunten</li>
                    <li>• Business case voor verbetering</li>
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
                  <h3 className="text-lg font-semibold text-text-primary">Fase 2: Proces Standaardisatie</h3>
                  <p className="text-text-muted text-sm">4-6 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Definieer planning horizons en frequenties
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Standaardiseer basisdata (cyclustijden, omsteltijden)
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Creëer planningsregels en -principes
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      Definieer rollen en verantwoordelijkheden
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-900 mb-2">Deliverables:</p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Planningsprocedures (S&OP, MPS, scheduling)</li>
                    <li>• Basisdata schema en standaarden</li>
                    <li>• RACI matrix planning</li>
                    <li>• Vergaderstructuur</li>
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
                  <h3 className="text-lg font-semibold text-text-primary">Fase 3: Data Foundation</h3>
                  <p className="text-text-muted text-sm">4-8 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Opschonen en valideren basisdata in ERP
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Meten en vastleggen werkelijke cyclustijden
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Vastleggen omsteltijd matrices
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      Definiëren werkcentra en capaciteiten
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-purple-900 mb-2">Success Criteria:</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• &gt;90% nauwkeurigheid cyclustijden</li>
                    <li>• Alle kritieke resources gedefinieerd</li>
                    <li>• Routings up-to-date in systeem</li>
                    <li>• Data governance procedure</li>
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
                  <h3 className="text-lg font-semibold text-text-primary">Fase 4: Tool Implementatie</h3>
                  <p className="text-text-muted text-sm">6-12 weken</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Selecteer en configureer planning tool
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Integreer met ERP en andere systemen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Train planners en key users
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                      Pilot draai en bijstellen
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-orange-900 mb-2">Checkpoints:</p>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Tool geconfigureerd voor kernprocessen</li>
                    <li>• ERP-integratie werkt beide kanten</li>
                    <li>• Planners kunnen zelfstandig werken</li>
                    <li>• Pilot succesvol op 1 afdeling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white border-l-4 border-indigo-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Fase 5: Continu Verbeteren</h3>
                  <p className="text-text-muted text-sm">Ongoing</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-2">Activiteiten:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Wekelijks planning review meeting
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Maandelijkse KPI-analyse en actieplannen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Root cause analyse bij afwijkingen
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                      Iteratieve procesverbetering
                    </li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-indigo-900 mb-2">Continue KPIs:</p>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Leverbetrouwbaarheid (target: &gt;95%)</li>
                    <li>• Plan adherence (target: &gt;90%)</li>
                    <li>• Spoedorder % (target: &lt;10%)</li>
                    <li>• Doorlooptijd trend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Best Practices */}
        <section id="best-practices" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            7. 10 Best Practices voor Productieplanning
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                number: 1,
                title: "Plan de bottleneck, niet alles",
                description: "Focus je detailplanning op de constraint. Andere stations volgen.",
                category: "Strategie"
              },
              {
                number: 2,
                title: "Freeze periods instellen",
                description: "Maak de planning vast binnen een bepaalde horizon (bijv. 3 dagen).",
                category: "Discipline"
              },
              {
                number: 3,
                title: "Buffer capaciteit behouden",
                description: "Plan niet boven 85-90%. Houd ruimte voor variatie en spoedorders.",
                category: "Capaciteit"
              },
              {
                number: 4,
                title: "Visueel plannen",
                description: "Gebruik planningsborden of software met Gantt charts. Zichtbaarheid helpt.",
                category: "Tools"
              },
              {
                number: 5,
                title: "Dagstarts met planning review",
                description: "Begin elke dag met 15 min planning check. Voorkom verrassingen.",
                category: "Routine"
              },
              {
                number: 6,
                title: "Spoedorder protocol",
                description: "Definieer wanneer iets écht spoed is en wat de procedure is.",
                category: "Proces"
              },
              {
                number: 7,
                title: "Single point of truth",
                description: "Eén systeem, één versie van de planning. Geen parallelle Excels.",
                category: "Data"
              },
              {
                number: 8,
                title: "Meet plan vs. actie",
                description: "Vergelijk gepland met gerealiseerd. Leer van afwijkingen.",
                category: "KPIs"
              },
              {
                number: 9,
                title: "Cyclustijden blijven meten",
                description: "Data veroudert. Hervalideer regelmatig je basisdata.",
                category: "Data"
              },
              {
                number: 10,
                title: "Betrek productie bij planning",
                description: "Planners moeten regelmatig op de werkvloer komen. En vice versa.",
                category: "Cultuur"
              }
            ].map((item) => (
              <div key={item.number} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600 flex-shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <span className="text-xs text-primary-500 font-medium">{item.category}</span>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Case Studies */}
        <section id="cases" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            8. Praktijkcases: Planningsoptimalisatie in MKB
          </h2>

          <div className="space-y-8">
            {/* Case 1 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Case 1: Machinebouwer - Van Excel naar Visuele Planning
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Bedrijf</p>
                    <p className="font-medium text-text-primary">Machinebouw (engineer-to-order)</p>
                    <p className="text-sm text-text-secondary">85 medewerkers, €15M omzet</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Uitdaging</p>
                    <p className="font-medium text-text-primary">68% leverbetrouwbaarheid</p>
                    <p className="text-sm text-text-secondary">Continu herplannen, geen overzicht</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Investering</p>
                    <p className="font-medium text-text-primary">€45.000</p>
                    <p className="text-sm text-text-secondary">Planning software + implementatie</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-text-primary mb-2">Aanpak:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Visuele planning software met Gantt charts</li>
                    <li>• Cyclustijden gemeten en gevalideerd</li>
                    <li>• Wekelijkse S&OP meeting ingevoerd</li>
                    <li>• Spoedorder protocol met extra kosten</li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 mb-1">94%</p>
                    <p className="text-xs text-green-800">Leverbetrouwbaarheid (was 68%)</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">-35%</p>
                    <p className="text-xs text-blue-800">Minder doorlooptijd</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">6 mnd</p>
                    <p className="text-xs text-purple-800">Terugverdientijd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Case 2: Plaatwerker - Drum-Buffer-Rope Implementatie
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Bedrijf</p>
                    <p className="font-medium text-text-primary">Plaatwerk en laswerk</p>
                    <p className="text-sm text-text-secondary">45 medewerkers, €7M omzet</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Uitdaging</p>
                    <p className="font-medium text-text-primary">Bottleneck bij lasersnijder</p>
                    <p className="text-sm text-text-secondary">WIP explosie, lange wachttijden</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Investering</p>
                    <p className="font-medium text-text-primary">€15.000</p>
                    <p className="text-sm text-text-secondary">Consultancy + training</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-text-primary mb-2">Aanpak:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Lasersnijder als &apos;Drum&apos; geïdentificeerd</li>
                    <li>• Tijdbuffer van 4 uur vóór laser</li>
                    <li>• Material release gesynchroniseerd (Rope)</li>
                    <li>• SMED toegepast voor snellere omsteltijden</li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 mb-1">-45%</p>
                    <p className="text-xs text-green-800">WIP reductie</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">+22%</p>
                    <p className="text-xs text-blue-800">Doorvoer laser</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">3 mnd</p>
                    <p className="text-xs text-purple-800">Terugverdientijd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
                <h3 className="text-lg font-semibold text-white">
                  Case 3: Elektronicaproducent - S&OP Transformatie
                </h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Bedrijf</p>
                    <p className="font-medium text-text-primary">Elektronische assemblage</p>
                    <p className="text-sm text-text-secondary">120 medewerkers, €20M omzet</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Uitdaging</p>
                    <p className="font-medium text-text-primary">Slechte vraagvoorspelling</p>
                    <p className="text-sm text-text-secondary">Overcapaciteit én stockouts</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Investering</p>
                    <p className="font-medium text-text-primary">€65.000</p>
                    <p className="text-sm text-text-secondary">S&OP proces + APS software</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-text-primary mb-2">Aanpak:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Maandelijkse S&OP cyclus ingevoerd</li>
                    <li>• Demand planning met klant forecasts</li>
                    <li>• Rolling 12-maanden capaciteitsplanning</li>
                    <li>• APS voor finite scheduling</li>
                  </ul>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 mb-1">-55%</p>
                    <p className="text-xs text-green-800">Minder spoedorders</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 mb-1">+18%</p>
                    <p className="text-xs text-blue-800">Hogere bezetting</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600 mb-1">-25%</p>
                    <p className="text-xs text-yellow-800">Voorraadniveau</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 mb-1">10 mnd</p>
                    <p className="text-xs text-purple-800">Terugverdientijd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: ROI Analysis */}
        <section id="roi" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            9. ROI-Analyse Planningsoptimalisatie
          </h2>

          <p className="text-text-secondary mb-8">
            De ROI van betere planning komt uit meerdere bronnen. Hier is een framework
            om de business case voor jouw situatie op te bouwen.
          </p>

          <div className="bg-bg-secondary rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Besparingscategorieën
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-text-primary border-b">Categorie</th>
                    <th className="text-left p-4 font-semibold text-text-primary border-b">Bron van Besparing</th>
                    <th className="text-center p-4 font-semibold text-text-primary border-b">Typisch Range</th>
                    <th className="text-right p-4 font-semibold text-text-primary border-b">€10M Productie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Hogere machinebezetting</td>
                    <td className="p-4 text-text-secondary text-sm">Minder wachttijd, betere scheduling</td>
                    <td className="p-4 text-center">+10-20%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€80-160K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Kortere doorlooptijden</td>
                    <td className="p-4 text-text-secondary text-sm">Minder WIP, betere flow</td>
                    <td className="p-4 text-center">-20-35%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€40-80K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Minder spoedorders</td>
                    <td className="p-4 text-text-secondary text-sm">Overwerk, verstoringen vermeden</td>
                    <td className="p-4 text-center">-40-60%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€50-100K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Lagere voorraadkosten</td>
                    <td className="p-4 text-text-secondary text-sm">Minder WIP en veiligheidsvoorraad</td>
                    <td className="p-4 text-center">-15-30%</td>
                    <td className="p-4 text-right text-green-600 font-medium">€30-60K/jaar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Betere leverbetrouwbaarheid</td>
                    <td className="p-4 text-text-secondary text-sm">Minder claims, behoud klanten</td>
                    <td className="p-4 text-center">+10-25pp</td>
                    <td className="p-4 text-right text-green-600 font-medium">€25-75K/jaar</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-4 font-semibold text-green-900" colSpan={2}>Totale Potentiële Besparing</td>
                    <td className="p-4 text-center text-green-900 font-semibold">-</td>
                    <td className="p-4 text-right text-green-600 font-bold">€225-475K/jaar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <BarChart3 className="text-blue-500" size={20} />
                Typische Investering
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Planning software</td>
                    <td className="py-2 text-right font-medium">€15.000-50.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Implementatie & configuratie</td>
                    <td className="py-2 text-right font-medium">€20.000-40.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Training & change management</td>
                    <td className="py-2 text-right font-medium">€10.000-20.000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Procesoptimalisatie consultancy</td>
                    <td className="py-2 text-right font-medium">€15.000-30.000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 font-medium">Totaal</td>
                    <td className="py-2 text-right font-bold">€60.000-140.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-4">Typische Terugverdientijd</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-800 text-sm">Kleine optimalisaties (Excel)</span>
                    <span className="text-blue-900 font-medium">1-3 maanden</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-800 text-sm">Planning software</span>
                    <span className="text-blue-900 font-medium">6-12 maanden</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-800 text-sm">APS implementatie</span>
                    <span className="text-blue-900 font-medium">12-18 maanden</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            10. Veelgestelde Vragen over Productieplanning
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Hoeveel tijd kost het om een goede planning op te zetten?",
                a: "Een basisverbetering (gestructureerde Excel, vaste vergaderingen, standaard procedures) kun je in 4-8 weken realiseren. Een volledige transformatie met software en proceswijzigingen duurt typisch 4-6 maanden. Focus op quick wins terwijl je aan de fundamenten werkt."
              },
              {
                q: "Kunnen we planningsoptimalisatie combineren met onze huidige ERP?",
                a: "Absoluut. De meeste ERP-systemen hebben basisplanningsfunctionaliteit die vaak onderbenut wordt. Start met het optimaal gebruiken van wat je hebt. Als je meer nodig hebt, kun je dedicated planning software toevoegen die integreert met je ERP."
              },
              {
                q: "Hoe gaan we om met spoedorders in een geoptimaliseerde planning?",
                a: "Spoedorders zijn niet te voorkomen, maar wel te managen. Best practices: (1) Definieer strikte criteria voor wat écht spoed is, (2) Bouw 10-15% buffer capaciteit in, (3) Hanteer hogere prijzen voor spoed, (4) Analyseer root causes om spoed te voorkomen."
              },
              {
                q: "Is APS software niet te complex voor ons MKB?",
                a: "Volledige APS-systemen zijn inderdaad vaak overkill voor MKB (&lt;200 medewerkers). Kijk naar 'lightweight' planning tools die visuele scheduling en finite capacity bieden zonder de complexiteit van enterprise APS. De 80/20 regel geldt: 80% van de waarde met 20% van de features."
              },
              {
                q: "Hoe krijgen we productie mee in de planningsverandering?",
                a: "Betrek operators vanaf dag 1. Laat ze meedenken over oplossingen voor hun dagelijkse frustraties. Maak de planning visueel en toegankelijk op de werkvloer. Vier successen samen. Change management is minstens zo belangrijk als de technische oplossing."
              },
              {
                q: "Wat is de ideale planningshorizon voor MKB-productie?",
                a: "Dit hangt af van je doorlooptijd en levertijden. Vuistregel: Je tactische planning (MPS) moet minstens 2x je langste doorlooptijd vooruit kijken. Je dagelijkse scheduling focust op 1-2 weken. S&OP kijkt 3-12 maanden vooruit."
              },
              {
                q: "Hoe meten we of onze planning verbetert?",
                a: "De belangrijkste KPIs: (1) Leverbetrouwbaarheid (% op tijd geleverd), (2) Plan adherence (gerealiseerd vs. gepland), (3) Doorlooptijd, (4) Machinebezetting, (5) % spoedorders, (6) WIP niveau. Meet deze maandelijks en volg de trend."
              },
              {
                q: "Kunnen we klein beginnen met planningsverbetering?",
                a: "Zeker, en dat raden we aan. Begin met één productielijn of één productfamilie. Los daar de problemen op, bewijs waarde, en breid dan uit. Dit 'pilot' approach minimaliseert risico en bouwt ervaring op."
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
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Van Chaos naar Controle in je Productieplanning
            </h2>
            <p className="text-blue-100 mb-6">
              Betere planning is geen kwestie van complexe software maar van
              discipline, duidelijke processen en de juiste tools. Start vandaag
              met het opbouwen van de fundamenten.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold mb-1">Week 1</p>
                <p className="text-blue-200 text-sm">Meet je baseline KPIs</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold mb-1">Week 4</p>
                <p className="text-blue-200 text-sm">Standaardiseer je processen</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold mb-1">Week 12</p>
                <p className="text-blue-200 text-sm">Eerste meetbare resultaten</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Proces360 helpt MKB-maakbedrijven met het optimaliseren van hun
              productieplanning: van quick wins tot volledige transformaties.
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
                  Rob heeft 15+ jaar ervaring in productieoptimalisatie. Hij heeft
                  tientallen MKB-maakbedrijven geholpen hun planning te transformeren
                  van Excel-chaos naar gestructureerde, betrouwbare processen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Klaar om je Productieplanning naar het Volgende Niveau te Brengen?
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
                href="/diensten/procesoptimalisatie"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg border-2 border-white hover:bg-primary-700 transition-colors"
              >
                Bekijk Procesoptimalisatie
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
                title: "OEE Verbeteren: Complete Gids",
                description: "Maximaliseer je machine-effectiviteit met bewezen methoden.",
                href: "/blog/oee-verbeteren",
                category: "OEE"
              },
              {
                title: "Digital Twin in Productie",
                description: "Simuleer en optimaliseer je productie virtueel.",
                href: "/blog/digital-twin-productie",
                category: "Industrie 4.0"
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
