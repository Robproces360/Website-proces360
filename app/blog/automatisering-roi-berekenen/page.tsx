'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Target,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  DollarSign,
  Settings,
  AlertTriangle,
  Award,
  FileText,
  Calculator,
  PieChart,
  TrendingDown,
  Percent,
  Clock3,
  Users,
  Factory,
  Package,
  Wrench,
  LineChart,
  CircleDollarSign,
  Scale,
  Building,
  BadgeCheck
} from 'lucide-react';

export default function AutomatiseringROIPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Breadcrumb */}
      <div className="bg-bg-secondary border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-text-secondary" />
            <Link href="/blog" className="text-text-secondary hover:text-primary-400 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 text-text-secondary" />
            <span className="text-text-primary">Automatisering ROI Berekenen</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
              Industriële Automatisering
            </span>
            <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
              Business Case
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Automatisering ROI Berekenen: Investeren met Zekerheid [Complete Gids 2025]
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Hoe bereken je de werkelijke ROI van automatisering? Van TCO-analyse tot verborgen
            kostenposten en risicofactoren. Met praktische rekentools, templates en benchmarks
            voor MKB-productiebedrijven.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-white/10">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime="2025-11-11">11 november 2025</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>20 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-xl p-6 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">18-24</div>
            <div className="text-sm text-text-secondary">Maanden gem. terugverdientijd</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-xl p-6 border border-accent-500/20">
            <div className="text-3xl font-bold text-accent-400 mb-2">150-300%</div>
            <div className="text-sm text-text-secondary">Typische 5-jaars ROI</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">30-50%</div>
            <div className="text-sm text-text-secondary">Arbeidskosten besparing</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">20%</div>
            <div className="text-sm text-text-secondary">Verborgen kosten (typisch)</div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-secondary rounded-xl p-6 mb-12 border border-white/10">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary-400" />
            Inhoudsopgave
          </h2>
          <nav className="grid md:grid-cols-2 gap-2">
            {[
              { href: "#roi-basics", title: "1. ROI Basics: Wat Meet Je?" },
              { href: "#tco-model", title: "2. TCO Model voor Automatisering" },
              { href: "#besparingen", title: "3. Alle Besparingscategorieën" },
              { href: "#verborgen-kosten", title: "4. Verborgen Kosten Ontmaskerd" },
              { href: "#terugverdientijd", title: "5. Terugverdientijd Berekenen" },
              { href: "#risico-analyse", title: "6. Risico's en Gevoeligheid" },
              { href: "#benchmarks", title: "7. Branche Benchmarks" },
              { href: "#case-studies", title: "8. Case Studies met Cijfers" },
              { href: "#faq", title: "Veelgestelde Vragen" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-primary-400 transition-colors py-1"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none">

          {/* Section 1 */}
          <section id="roi-basics" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Calculator className="w-8 h-8 mr-3 text-primary-400" />
              1. ROI Basics: Wat Meet Je Precies?
            </h2>

            <p className="text-text-secondary mb-6 leading-relaxed">
              ROI (Return on Investment) klinkt eenvoudig, maar bij automatiseringsprojecten
              zijn er meerdere manieren om rendement te meten. Kies de juiste metrics voor
              jouw situatie.
            </p>

            <div className="space-y-6 mb-8">
              {/* ROI */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Percent className="w-6 h-6 text-primary-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">ROI (Return on Investment)</h3>
                  </div>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs">Meest gebruikt</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Het percentage rendement op je investering over een bepaalde periode.
                </p>
                <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm">
                  <p className="text-primary-400">ROI = ((Totale Besparingen - Totale Investering) / Totale Investering) × 100%</p>
                </div>
                <p className="text-text-secondary text-sm mt-3">
                  <strong className="text-text-primary">Voorbeeld:</strong> €200.000 besparing op €100.000 investering = 100% ROI
                </p>
              </div>

              {/* Payback Period */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Clock3 className="w-6 h-6 text-accent-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">Payback Period (Terugverdientijd)</h3>
                  </div>
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs">Praktisch</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Hoe lang duurt het voordat de investering is terugverdiend door besparingen?
                </p>
                <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm">
                  <p className="text-accent-400">Payback = Totale Investering / Jaarlijkse Besparing</p>
                </div>
                <p className="text-text-secondary text-sm mt-3">
                  <strong className="text-text-primary">Voorbeeld:</strong> €100.000 / €50.000 per jaar = 2 jaar payback
                </p>
              </div>

              {/* NPV */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <LineChart className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">NPV (Net Present Value)</h3>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Financieel Correct</span>
                </div>
                <p className="text-text-secondary mb-4">
                  De waarde van toekomstige cashflows in hedendaagse euro&apos;s, rekening houdend met
                  de tijdswaarde van geld.
                </p>
                <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm">
                  <p className="text-green-400">NPV = Σ (Cashflow_t / (1 + r)^t) - Initiële Investering</p>
                </div>
                <p className="text-text-secondary text-sm mt-3">
                  <strong className="text-text-primary">Regel:</strong> NPV &gt; 0 betekent dat de investering waarde creëert
                </p>
              </div>

              {/* IRR */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">IRR (Internal Rate of Return)</h3>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Vergelijken</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Het disconteringspercentage waarbij NPV = 0. Handig om projecten onderling te vergelijken.
                </p>
                <p className="text-text-secondary text-sm">
                  <strong className="text-text-primary">Regel:</strong> IRR &gt; kostprijs kapitaal (bijv. 8-12%) = goede investering
                </p>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Welke Metric Gebruiken?
              </h4>
              <p className="text-text-secondary">
                Voor MKB-automatisering raden we aan: <strong className="text-text-primary">Payback Period</strong> voor
                snelle beslissingen, <strong className="text-text-primary">5-jaars ROI</strong> voor de business case,
                en <strong className="text-text-primary">NPV</strong> als je financiële goedkeuring nodig hebt van
                bank of investeerders.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="tco-model" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <PieChart className="w-8 h-8 mr-3 text-primary-400" />
              2. TCO Model: Alle Kosten in Kaart
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Total Cost of Ownership (TCO) gaat verder dan alleen de aanschafprijs.
              Een realistische business case bevat alle kosten over de gehele levensduur.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">TCO Componenten voor Automatisering</h3>

              {/* Initial Investment */}
              <div className="mb-6">
                <h4 className="font-semibold text-red-400 mb-3 flex items-center">
                  <CircleDollarSign className="w-5 h-5 mr-2" />
                  Initiële Investering (CAPEX)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h5 className="font-semibold text-text-primary mb-2">Hardware</h5>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Robot/cobot/machine</li>
                      <li>• End-of-arm tooling (gripper, etc.)</li>
                      <li>• Veiligheidsafscherming</li>
                      <li>• Sensoren en vision systemen</li>
                      <li>• Transporteurs en fixtures</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h5 className="font-semibold text-text-primary mb-2">Soft Costs</h5>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Engineering en integratie</li>
                      <li>• Programmering</li>
                      <li>• Installatie en commissioning</li>
                      <li>• Training personeel</li>
                      <li>• Projectmanagement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Operating Costs */}
              <div className="mb-6">
                <h4 className="font-semibold text-yellow-400 mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Operationele Kosten (OPEX) - Per Jaar
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h5 className="font-semibold text-text-primary mb-2">Onderhoud</h5>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Preventief onderhoud (1-3% van hardware/jaar)</li>
                      <li>• Reserveonderdelen</li>
                      <li>• Service contracten</li>
                      <li>• Onverwachte reparaties</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h5 className="font-semibold text-text-primary mb-2">Operatie</h5>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Energie (€500-€2.000/jaar typisch)</li>
                      <li>• Consumables (gripper-pads, etc.)</li>
                      <li>• Software licenties</li>
                      <li>• Operatortoezicht</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hidden Costs */}
              <div>
                <h4 className="font-semibold text-orange-400 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Vaak Vergeten Kosten
                </h4>
                <div className="bg-orange-500/10 rounded-lg p-4">
                  <ul className="text-text-secondary text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-2"></span>
                      <span><strong className="text-text-primary">Aanpassingen bestaande infrastructuur:</strong> Elektra, perslucht, vloer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-2"></span>
                      <span><strong className="text-text-primary">Productiviteitsverlies opstartfase:</strong> 2-8 weken aanloopverliezen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-2"></span>
                      <span><strong className="text-text-primary">Change management:</strong> Tijd voor omscholen en acceptatie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 mt-2"></span>
                      <span><strong className="text-text-primary">Scope creep:</strong> Extra features tijdens implementatie (+10-25%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* TCO Example */}
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">TCO Rekenvoorbeeld: Cobot Machine Belading</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bg-secondary">
                      <th className="px-4 py-2 text-left text-text-primary">Kostenpost</th>
                      <th className="px-4 py-2 text-right text-text-primary">Bedrag</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-2 font-semibold text-text-primary" colSpan={2}>Initiële Investering</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Cobot (UR10e)</td>
                      <td className="px-4 py-2 text-right">€35.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Gripper + tooling</td>
                      <td className="px-4 py-2 text-right">€8.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Integratie + programmering</td>
                      <td className="px-4 py-2 text-right">€18.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Veiligheid + installatie</td>
                      <td className="px-4 py-2 text-right">€6.000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Training</td>
                      <td className="px-4 py-2 text-right">€3.000</td>
                    </tr>
                    <tr className="bg-primary-500/10">
                      <td className="px-4 py-2 font-semibold text-primary-400">Subtotaal CAPEX</td>
                      <td className="px-4 py-2 text-right font-semibold text-primary-400">€70.000</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="px-4 py-2 font-semibold text-text-primary" colSpan={2}>Jaarlijkse Operatie (OPEX)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Onderhoud (2%)</td>
                      <td className="px-4 py-2 text-right">€1.400</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Energie</td>
                      <td className="px-4 py-2 text-right">€800</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 pl-8">Consumables + licenties</td>
                      <td className="px-4 py-2 text-right">€500</td>
                    </tr>
                    <tr className="bg-accent-500/10">
                      <td className="px-4 py-2 font-semibold text-accent-400">Subtotaal OPEX/jaar</td>
                      <td className="px-4 py-2 text-right font-semibold text-accent-400">€2.700</td>
                    </tr>
                    <tr className="bg-green-500/10 border-t-2 border-white/20">
                      <td className="px-4 py-2 font-bold text-green-400">TCO 5 Jaar</td>
                      <td className="px-4 py-2 text-right font-bold text-green-400">€83.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="besparingen" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <TrendingDown className="w-8 h-8 mr-3 text-primary-400" />
              3. Alle Besparingscategorieën: Waar Zit de Waarde?
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Automatisering levert waarde op meerdere fronten. Hier zijn alle categorieën
              om te kwantificeren in je business case.
            </p>

            <div className="space-y-6">
              {/* Labor Savings */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-primary-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">1. Arbeidskosten Besparing</h3>
                  <span className="ml-auto px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs">Grootste Impact</span>
                </div>
                <p className="text-text-secondary mb-4">
                  De meest directe en meetbare besparing. Reken met totale loonkosten inclusief sociale lasten.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Berekening:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Bruto uurloon operator: €20-€30/uur</li>
                      <li>• + Sociale lasten (30%): €6-€9/uur</li>
                      <li>• = Totale loonkost: €26-€39/uur</li>
                      <li>• × Bespaarde uren per jaar</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Voorbeeld:</h4>
                    <p className="text-text-secondary text-sm">
                      1 FTE vrijmaken door automatisering:<br/>
                      €32/uur × 1.700 uur/jaar = <span className="text-primary-400 font-semibold">€54.400/jaar</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Productivity */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-accent-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">2. Productiviteitswinst</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Automatisering produceert vaak sneller en met minder stilstand dan handmatige operatie.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Hogere Output</h4>
                    <p className="text-text-secondary text-sm">
                      Robot cyclustijd vaak 20-40% korter dan handmatig
                    </p>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Langere Runtime</h4>
                    <p className="text-text-secondary text-sm">
                      24/7 mogelijkheid, geen pauzes, geen ziekteverzuim
                    </p>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Minder Stilstand</h4>
                    <p className="text-text-secondary text-sm">
                      Consistente cyclustijden, minder onverwachte stops
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <BadgeCheck className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">3. Kwaliteitsverbetering</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Minder variatie betekent minder uitval, minder herwerk, en minder klachten.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Directe Besparingen:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Minder scrap/uitval</li>
                      <li>• Minder herwerk</li>
                      <li>• Lagere inspectiekosten</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Indirecte Besparingen:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Minder klachten/retouren</li>
                      <li>• Lagere garantiekosten</li>
                      <li>• Behoud van klanten</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Safety */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">4. Veiligheid & Ergonomie</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Minder fysiek belastend werk betekent minder verzuim en arbeidsongeschiktheid.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <ul className="text-text-secondary text-sm space-y-2">
                    <li>• <strong className="text-text-primary">Verzuimreductie:</strong> Typisch 1-3% lager verzuim = €1.000-€5.000/FTE/jaar</li>
                    <li>• <strong className="text-text-primary">WIA-preventie:</strong> Langetermijnbesparingen door minder RSI, rugklachten</li>
                    <li>• <strong className="text-text-primary">Lagere verzekeringspremies:</strong> Minder claims = lagere premies</li>
                  </ul>
                </div>
              </div>

              {/* Flexibility */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <Factory className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">5. Capaciteit & Flexibiliteit</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Strategische waarde die moeilijker te kwantificeren is, maar essentieel voor groei.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Capaciteitsuitbreiding:</h4>
                    <p className="text-text-secondary text-sm">
                      Extra shifts draaien zonder extra personeel te vinden
                      (in krappe arbeidsmarkt cruciaal)
                    </p>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Klantbehoud:</h4>
                    <p className="text-text-secondary text-sm">
                      Orders aannemen die anders geweigerd zouden worden
                      door gebrek aan capaciteit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Summary */}
            <div className="mt-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Besparingen Samengevat: Typische Verdeling</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-3 bg-bg-primary rounded-lg">
                  <div className="text-xl font-bold text-primary-400">50-70%</div>
                  <div className="text-xs text-text-secondary">Arbeid</div>
                </div>
                <div className="p-3 bg-bg-primary rounded-lg">
                  <div className="text-xl font-bold text-accent-400">15-25%</div>
                  <div className="text-xs text-text-secondary">Productiviteit</div>
                </div>
                <div className="p-3 bg-bg-primary rounded-lg">
                  <div className="text-xl font-bold text-green-400">10-15%</div>
                  <div className="text-xs text-text-secondary">Kwaliteit</div>
                </div>
                <div className="p-3 bg-bg-primary rounded-lg">
                  <div className="text-xl font-bold text-yellow-400">5-10%</div>
                  <div className="text-xs text-text-secondary">Veiligheid</div>
                </div>
                <div className="p-3 bg-bg-primary rounded-lg">
                  <div className="text-xl font-bold text-purple-400">5-10%</div>
                  <div className="text-xs text-text-secondary">Overig</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="verborgen-kosten" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3 text-primary-400" />
              4. Verborgen Kosten Ontmaskerd
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Automatiseringsprojecten gaan vaak 15-30% over budget door kosten die niet in de
              initiële offerte zitten. Hier zijn de usual suspects.
            </p>

            <div className="space-y-6">
              {/* Infrastructure */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <Building className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">1. Infrastructuur Aanpassingen</h3>
                    <p className="text-text-secondary mb-3">
                      Bestaande fabriek is zelden klaar voor automatisering. Vaak nodig:
                    </p>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Elektra uitbreiding (3-fase, extra vermogen): €2.000-€15.000</li>
                      <li>• Perslucht uitbreiding: €1.000-€5.000</li>
                      <li>• Vloerversterking of -aanpassing: €1.000-€10.000</li>
                      <li>• Netwerk/WiFi uitbreiding: €500-€3.000</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-3 font-semibold">
                      Typisch budget: <span className="text-red-400">€5.000-€25.000</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Integration */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <Settings className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">2. Integratie Complexiteit</h3>
                    <p className="text-text-secondary mb-3">
                      Aansluiting op bestaande machines en systemen is zelden plug-and-play.
                    </p>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• PLC-aanpassingen bestaande machine: €2.000-€10.000</li>
                      <li>• ERP/MES-integratie: €5.000-€25.000</li>
                      <li>• Extra sensoren/vision voor complexe onderdelen: €3.000-€15.000</li>
                      <li>• Aangepaste fixtures per productvariatie: €1.000-€5.000/stuk</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-3 font-semibold">
                      Typisch budget: <span className="text-red-400">€10.000-€40.000</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Ramp-up */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <TrendingUp className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">3. Productiviteitsverlies Opstartfase</h3>
                    <p className="text-text-secondary mb-3">
                      De eerste weken na installatie draait productie niet op volle snelheid.
                    </p>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Week 1-2: Fine-tuning, 50% output</li>
                      <li>• Week 3-4: Operator training, 70% output</li>
                      <li>• Week 5-8: Optimalisatie, 85% output</li>
                      <li>• Week 9+: Normaal niveau (95%+)</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-3 font-semibold">
                      Geschat productieverlies: <span className="text-red-400">€5.000-€20.000</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Change Management */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <Users className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">4. Change Management</h3>
                    <p className="text-text-secondary mb-3">
                      Mensen zijn vaak de grootste uitdaging, niet de technologie.
                    </p>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Extra training en coaching: €2.000-€8.000</li>
                      <li>• Weerstand en vertraagde acceptatie: moeilijk te kwantificeren</li>
                      <li>• Herplaatsing of uitstroom personeel: variable kosten</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-3 font-semibold">
                      Typisch budget: <span className="text-red-400">€3.000-€10.000</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Scope Creep */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <Package className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">5. Scope Creep</h3>
                    <p className="text-text-secondary mb-3">
                      &quot;Als we toch bezig zijn, kunnen we ook meteen...&quot;
                    </p>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Extra productvarianten toevoegen</li>
                      <li>• Uitbreiding naar upstream/downstream processen</li>
                      <li>• Hogere eisen aan cyclustijd of kwaliteit</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-3 font-semibold">
                      Typisch: <span className="text-red-400">+10-25% van oorspronkelijk budget</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Pro Tip: Buffer Inbouwen
              </h4>
              <p className="text-text-secondary">
                Voeg <strong className="text-text-primary">15-25% contingency</strong> toe aan je initiële budget.
                Dit is geen pessimisme maar realisme. Projecten die &quot;on budget&quot; eindigen hebben bijna
                altijd een buffer gehad.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="terugverdientijd" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Clock3 className="w-8 h-8 mr-3 text-primary-400" />
              5. Terugverdientijd Berekenen: Praktische Methode
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              De terugverdientijd is vaak de belangrijkste metric voor MKB-beslissers.
              Hier is een stap-voor-stap methode.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Berekeningsstappen</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Bepaal Totale Investering (TCO initieel)</h4>
                    <p className="text-text-secondary text-sm">Hardware + software + integratie + training + contingency</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Bereken Jaarlijkse Brutobesparing</h4>
                    <p className="text-text-secondary text-sm">Arbeid + productiviteit + kwaliteit + overig</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Trek Jaarlijkse OPEX Af</h4>
                    <p className="text-text-secondary text-sm">Onderhoud + energie + consumables</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Bereken Netto Jaarlijkse Besparing</h4>
                    <p className="text-text-secondary text-sm">Brutobesparing - OPEX = Netto Cashflow</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-400 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Deel Investering door Netto Besparing</h4>
                    <p className="text-text-secondary text-sm">Payback = Investering / Netto Jaarlijkse Besparing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Example */}
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Compleet Rekenvoorbeeld</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-3">Investering</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-text-secondary">
                      <span>Cobot + tooling + integratie</span>
                      <span>€70.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Infrastructuur aanpassingen</span>
                      <span>€8.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Contingency (15%)</span>
                      <span>€11.700</span>
                    </div>
                    <div className="flex justify-between font-semibold text-text-primary pt-2 border-t border-white/10">
                      <span>Totale Investering</span>
                      <span>€89.700</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-400 mb-3">Jaarlijkse Besparingen</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-text-secondary">
                      <span>Arbeid (0,8 FTE × €54.000)</span>
                      <span>€43.200</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Productiviteitswinst (15%)</span>
                      <span>€12.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Kwaliteitsverbetering</span>
                      <span>€6.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>- OPEX (onderhoud, energie)</span>
                      <span>-€2.700</span>
                    </div>
                    <div className="flex justify-between font-semibold text-green-400 pt-2 border-t border-white/10">
                      <span>Netto Jaarlijkse Besparing</span>
                      <span>€58.500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-bg-secondary rounded-lg p-4 text-center">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-text-secondary">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-400">18,4 maanden</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">5-Jaars ROI</p>
                    <p className="text-2xl font-bold text-green-400">226%</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">5-Jaars Netto Waarde</p>
                    <p className="text-2xl font-bold text-accent-400">€202.800</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="risico-analyse" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Scale className="w-8 h-8 mr-3 text-primary-400" />
              6. Risico&apos;s en Gevoeligheidsanalyse
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Een business case is gebaseerd op aannames. Wat als die aannames niet kloppen?
              Test de robuustheid van je ROI.
            </p>

            <div className="space-y-6 mb-8">
              {/* Sensitivity Analysis */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Gevoeligheidsanalyse: Key Variables</h3>
                <p className="text-text-secondary mb-4">
                  Test wat er gebeurt als deze factoren 20% slechter uitvallen dan verwacht:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-bg-primary">
                        <th className="px-4 py-2 text-left text-text-primary">Variable</th>
                        <th className="px-4 py-2 text-right text-text-primary">Base Case</th>
                        <th className="px-4 py-2 text-right text-text-primary">-20% Scenario</th>
                        <th className="px-4 py-2 text-right text-text-primary">Impact op Payback</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-2">Arbeidskosten besparing</td>
                        <td className="px-4 py-2 text-right">€43.200</td>
                        <td className="px-4 py-2 text-right">€34.560</td>
                        <td className="px-4 py-2 text-right text-red-400">+4 maanden</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-2">Investering</td>
                        <td className="px-4 py-2 text-right">€89.700</td>
                        <td className="px-4 py-2 text-right">€107.640</td>
                        <td className="px-4 py-2 text-right text-red-400">+4 maanden</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-2">Productiviteitswinst</td>
                        <td className="px-4 py-2 text-right">€12.000</td>
                        <td className="px-4 py-2 text-right">€9.600</td>
                        <td className="px-4 py-2 text-right text-yellow-400">+1 maand</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-2">OPEX</td>
                        <td className="px-4 py-2 text-right">€2.700</td>
                        <td className="px-4 py-2 text-right">€3.240</td>
                        <td className="px-4 py-2 text-right text-green-400">&lt;1 maand</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Scenario Analysis */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Scenario Analyse</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Best Case</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Installatie op tijd</li>
                      <li>• Extra shift snel operationeel</li>
                      <li>• Scope blijft gelijk</li>
                    </ul>
                    <p className="text-green-400 font-semibold mt-3">Payback: 14 mnd</p>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-400 mb-2">Base Case</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Kleine vertragingen</li>
                      <li>• Normale leercurve</li>
                      <li>• Beperkte scope creep</li>
                    </ul>
                    <p className="text-yellow-400 font-semibold mt-3">Payback: 18 mnd</p>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2">Worst Case</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Grote vertragingen</li>
                      <li>• Significante scope creep</li>
                      <li>• Technische problemen</li>
                    </ul>
                    <p className="text-red-400 font-semibold mt-3">Payback: 28 mnd</p>
                  </div>
                </div>
              </div>

              {/* Key Risks */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Top 5 Risico&apos;s bij Automatisering ROI</h3>
                <div className="space-y-3">
                  {[
                    { risk: "Lagere productmix dan gepland", impact: "Minder draaiuren = langere payback", mitigation: "Conservatief plannen, flexibele opstelling" },
                    { risk: "Integratiecomplexiteit onderschat", impact: "20-40% hogere kosten", mitigation: "Gedetailleerd vooronderzoek, vaste prijs contract" },
                    { risk: "Personeel verzet tegen verandering", impact: "Vertraagde adoptie, sabotage", mitigation: "Vroeg betrekken, duidelijke communicatie" },
                    { risk: "Technologie past niet bij toepassing", impact: "Complete project failure", mitigation: "Proof of concept, referentiebezoeken" },
                    { risk: "Marktomstandigheden veranderen", impact: "Verminderde volumes", mitigation: "Flexibele oplossing, staged investment" },
                  ].map((item, index) => (
                    <div key={index} className="bg-bg-primary rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-text-primary">{item.risk}</h4>
                        <span className="text-red-400 text-sm">{item.impact}</span>
                      </div>
                      <p className="text-text-secondary text-sm">
                        <span className="text-green-400">Mitigatie:</span> {item.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="benchmarks" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <BarChart3 className="w-8 h-8 mr-3 text-primary-400" />
              7. Branche Benchmarks: Wat is Normaal?
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Vergelijk je business case met branchegemiddelden om te zien of je aannames realistisch zijn.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-bg-secondary">
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Automatiseringstype</th>
                    <th className="border border-white/10 px-4 py-3 text-center text-text-primary">Investering</th>
                    <th className="border border-white/10 px-4 py-3 text-center text-text-primary">Payback</th>
                    <th className="border border-white/10 px-4 py-3 text-center text-text-primary">5-jr ROI</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Cobot machine belading</td>
                    <td className="border border-white/10 px-4 py-3 text-center">€50-90K</td>
                    <td className="border border-white/10 px-4 py-3 text-center">12-24 mnd</td>
                    <td className="border border-white/10 px-4 py-3 text-center text-green-400">150-300%</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Cobot palletiseren</td>
                    <td className="border border-white/10 px-4 py-3 text-center">€40-70K</td>
                    <td className="border border-white/10 px-4 py-3 text-center">10-18 mnd</td>
                    <td className="border border-white/10 px-4 py-3 text-center text-green-400">200-400%</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Industriële robot lassen</td>
                    <td className="border border-white/10 px-4 py-3 text-center">€100-200K</td>
                    <td className="border border-white/10 px-4 py-3 text-center">18-36 mnd</td>
                    <td className="border border-white/10 px-4 py-3 text-center text-green-400">100-200%</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Geautom. assemblage lijn</td>
                    <td className="border border-white/10 px-4 py-3 text-center">€150-400K</td>
                    <td className="border border-white/10 px-4 py-3 text-center">24-48 mnd</td>
                    <td className="border border-white/10 px-4 py-3 text-center text-yellow-400">80-150%</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Vision inspectie systeem</td>
                    <td className="border border-white/10 px-4 py-3 text-center">€30-80K</td>
                    <td className="border border-white/10 px-4 py-3 text-center">8-18 mnd</td>
                    <td className="border border-white/10 px-4 py-3 text-center text-green-400">200-500%</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">AGV/AMR logistiek</td>
                    <td className="border border-white/10 px-4 py-3 text-center">€60-120K</td>
                    <td className="border border-white/10 px-4 py-3 text-center">18-30 mnd</td>
                    <td className="border border-white/10 px-4 py-3 text-center text-green-400">120-250%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary-400 mb-3">Goede ROI Indicatoren</h3>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Payback &lt; 24 maanden
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    5-jaars ROI &gt; 150%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    IRR &gt; 20%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Positieve NPV bij 10% discount rate
                  </li>
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-red-400 mb-3">Waarschuwingssignalen</h3>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                    Payback &gt; 36 maanden
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                    ROI sterk afhankelijk van 1 factor
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                    Geen contingency ingepland
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                    &quot;Zachte&quot; besparingen &gt; 50% van ROI
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="case-studies" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-primary-400" />
              8. Case Studies met Echte Cijfers
            </h2>

            <div className="space-y-8">
              {/* Case 1 */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <Factory className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">MetaalPartners BV - CNC Automatisering</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie & Investering:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• 3 CNC draaibanken, handmatige belading</li>
                      <li>• 2 operators per shift nodig</li>
                      <li>• UR10e cobot met vision: €72.000</li>
                      <li>• Integratie + fixtures: €28.000</li>
                      <li>• <strong>Totaal: €100.000</strong></li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">ROI Realisatie (na 24 mnd):</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Arbeidsbesparing:</span>
                        <span className="text-green-400">€98.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">OEE verbetering:</span>
                        <span className="text-green-400">€24.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Kwaliteit:</span>
                        <span className="text-green-400">€12.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">- OPEX:</span>
                        <span className="text-red-400">-€6.000</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t border-white/10">
                        <span className="text-text-primary">Netto na 24 mnd:</span>
                        <span className="text-green-400">€128.000</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span className="text-text-primary">Payback gerealiseerd:</span>
                        <span className="text-green-400">16 maanden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">FoodPack Solutions - Palletiseren</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie & Investering:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Handmatig palletiseren, 2.000 dozen/dag</li>
                      <li>• 2 FTE&apos;s volledig toegewijd</li>
                      <li>• FANUC palletiseercel: €95.000</li>
                      <li>• Transporteur + integratie: €55.000</li>
                      <li>• <strong>Totaal: €150.000</strong></li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">ROI Realisatie (na 24 mnd):</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Arbeidsbesparing (1,6 FTE):</span>
                        <span className="text-blue-400">€172.800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Ergonomie/verzuim:</span>
                        <span className="text-blue-400">€8.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">- OPEX:</span>
                        <span className="text-red-400">-€10.000</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t border-white/10">
                        <span className="text-text-primary">Netto na 24 mnd:</span>
                        <span className="text-blue-400">€170.800</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span className="text-text-primary">Payback gerealiseerd:</span>
                        <span className="text-blue-400">21 maanden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 - Less Successful */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">TechAssembly (Geanonimiseerd) - Lessen Geleerd</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Business Case vs. Realiteit:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Gepland: €80.000 investering, 14 mnd payback</li>
                      <li>• Werkelijk: €115.000 (+44% door scope creep)</li>
                      <li>• Ramp-up duurde 12 weken i.p.v. 4</li>
                      <li>• Productvarianten bleken complexer</li>
                      <li>• <strong>Werkelijke payback: 28 maanden</strong></li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Lessons Learned:</h4>
                    <ul className="text-text-secondary text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2"></span>
                        <span>Proof of concept met échte productvarianten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2"></span>
                        <span>Freeze scope vóór contractondertekening</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2"></span>
                        <span>Realistische ramp-up tijd inplannen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-2"></span>
                        <span>Minimaal 20% contingency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-primary-400" />
              Veelgestelde Vragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Welke payback periode is acceptabel voor automatisering?",
                  a: "Voor MKB is 18-24 maanden een gezonde payback. Minder dan 12 maanden is excellent, meer dan 36 maanden is risicovol. Let op: grote strategische voordelen kunnen een langere payback rechtvaardigen."
                },
                {
                  q: "Hoe ga ik om met 'zachte' besparingen in mijn ROI?",
                  a: "Zachte besparingen (ergonomie, flexibiliteit, klantbehoud) zijn reëel maar moeilijk te kwantificeren. Regel: bouw je business case primair op 'harde' besparingen (arbeid, output, kwaliteit). Zachte voordelen zijn bonus, niet de basis."
                },
                {
                  q: "Moet ik subsidies meenemen in mijn ROI berekening?",
                  a: "Ja, maar wees voorzichtig. Bereken eerst de ROI zonder subsidie om de inherente waarde te zien. Als het project alleen winstgevend is mét subsidie, is het risicovol. Subsidies zijn bonus, niet fundament."
                },
                {
                  q: "Hoe bereken ik de waarde van capaciteitsuitbreiding?",
                  a: "Dit is lastig omdat het afhankelijk is van extra omzet die je kunt genereren. Aanpak: bereken de marginale winst op extra productie × verwachte extra orders. Wees conservatief - alleen meenemen als er concrete vraag is."
                },
                {
                  q: "Wat als de technologie veroudert binnen 5 jaar?",
                  a: "Automatiseringsapparatuur gaat typisch 10-15+ jaar mee. Software/interface kan sneller verouderen maar is vaak te updaten. Risico is beperkt als je kiest voor gevestigde leveranciers met lange support trajecten."
                },
                {
                  q: "Hoe vergelijk ik verschillende automatiseringsopties?",
                  a: "Bereken voor elke optie de 5-jaars TCO en NPV met dezelfde aannames. Kies niet alleen op laagste investering - een duurdere oplossing met betere ROI is vaak de betere keuze. Vergelijk ook flexibiliteit en uitbreidbaarheid."
                },
              ].map((item, index) => (
                <div key={index} className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{item.q}</h3>
                  <p className="text-text-secondary">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 border border-primary-500/20">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Conclusie: Investeer met Data, Niet met Gevoel
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Een solide ROI-analyse is het verschil tussen een succesvol automatiseringsproject
                en een duur leermomenten. Neem de tijd om alle kosten en besparingen te kwantificeren,
                test je aannames met scenario&apos;s, en bouw voldoende buffer in. De beste business cases
                zijn conservatief maar nog steeds overtuigend.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-xl font-bold text-primary-400">18-24 mnd</div>
                  <div className="text-xs text-text-secondary">Gezonde payback</div>
                </div>
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-xl font-bold text-primary-400">15-25%</div>
                  <div className="text-xs text-text-secondary">Contingency buffer</div>
                </div>
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-xl font-bold text-primary-400">&gt;150%</div>
                  <div className="text-xs text-text-secondary">5-jaars ROI doel</div>
                </div>
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-xl font-bold text-primary-400">3 scenarios</div>
                  <div className="text-xs text-text-secondary">Test robuustheid</div>
                </div>
              </div>
            </div>
          </section>

          {/* Author Box */}
          <section className="mb-16">
            <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">Rob Derks</h3>
                  <p className="text-primary-400 text-sm mb-3">Automatisering & ROI Expert | Proces360</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Rob heeft 50+ automatiseringsprojecten begeleid en zag de goede, de slechte en de
                    tegenvallende business cases. Zijn focus: realistische ROI-berekeningen die standhouden
                    in de praktijk, niet alleen op papier.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Hulp nodig bij je Automatisering Business Case?
              </h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Laat ons je helpen met een realistische ROI-analyse. We berekenen de business case
                voor jouw specifieke situatie, inclusief alle verborgen kosten en risico&apos;s.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Gratis ROI Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/diensten/industriele-automatisering"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
                >
                  Bekijk Automatisering Diensten
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Gerelateerde Artikelen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cobot Terugverdientijd Berekenen",
                  description: "Specifieke ROI-calculator voor cobot-investeringen.",
                  href: "/blog/cobot-terugverdientijd-berekenen",
                  tag: "Cobots"
                },
                {
                  title: "Automatisering Roadmap MKB",
                  description: "Plan je automatiseringsstrategie stap voor stap.",
                  href: "/blog/automatisering-roadmap-mkb",
                  tag: "Strategie"
                },
                {
                  title: "Cobot vs Industriële Robot",
                  description: "Kies de juiste technologie voor jouw situatie.",
                  href: "/blog/cobot-vs-industriele-robot",
                  tag: "Keuze"
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="bg-bg-secondary rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-colors group"
                >
                  <span className="text-xs text-primary-400 font-medium">{article.tag}</span>
                  <h3 className="text-lg font-semibold text-text-primary mt-2 mb-2 group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Ontdek Onze Diensten</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/diensten/industriele-automatisering", title: "Industriële Automatisering", desc: "Complete automatisering trajecten" },
                { href: "/diensten/cobot-integratie", title: "Cobot Integratie", desc: "Van ROI-analyse tot implementatie" },
                { href: "/diensten/procesoptimalisatie", title: "Procesoptimalisatie", desc: "Bereid voor op automatisering" },
                { href: "/diensten/oee-verbetering", title: "OEE Verbetering", desc: "Maximaliseer automatisering ROI" },
                { href: "/diensten/productie-dashboards", title: "Productie Dashboards", desc: "Track automatisering prestaties" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center p-4 bg-bg-secondary rounded-lg border border-white/10 hover:border-primary-500/50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-text-primary group-hover:text-primary-400 transition-colors">
                      {link.title}
                    </div>
                    <div className="text-sm text-text-secondary">{link.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-primary-400 transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
