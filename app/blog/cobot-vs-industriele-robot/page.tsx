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
  Users,
  Settings,
  Scale,
  Gauge,
  Box,
  Cog,
  AlertTriangle,
  Award,
  FileText,
  Factory,
  Cpu,
  Hand,
  RefreshCw,
  Timer,
  Package
} from 'lucide-react';

export default function CobotVsRobotPage() {
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
            <span className="text-text-primary">Cobot vs Industriële Robot</span>
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
              Cobot Integratie
            </span>
            <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
              Automatisering
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Cobot vs Industriële Robot: De Ultieme Keuzegids voor MKB [2025]
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Cobot of traditionele robot? De juiste keuze hangt af van je specifieke situatie.
            Deze complete gids helpt je de beste beslissing te nemen met een objectieve vergelijking,
            beslisboom, en praktijkvoorbeelden uit Nederlandse productiebedrijven.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-white/10">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime="2025-09-16">16 september 2025</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>19 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-xl p-6 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">€25-50K</div>
            <div className="text-sm text-text-secondary">Cobot instapprijs</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-xl p-6 border border-accent-500/20">
            <div className="text-3xl font-bold text-accent-400 mb-2">€75-250K</div>
            <div className="text-sm text-text-secondary">Industriële robot totaal</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">5-16 kg</div>
            <div className="text-sm text-text-secondary">Cobot payload range</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+ kg</div>
            <div className="text-sm text-text-secondary">Robot max payload</div>
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
              { href: "#fundamentele-verschillen", title: "1. Fundamentele Verschillen Uitgelegd" },
              { href: "#vergelijkingstabel", title: "2. Complete Vergelijkingstabel" },
              { href: "#wanneer-cobot", title: "3. Wanneer Kies je een Cobot?" },
              { href: "#wanneer-robot", title: "4. Wanneer Kies je een Industriële Robot?" },
              { href: "#beslisboom", title: "5. Beslisboom: 7 Vragen" },
              { href: "#kostenvergelijking", title: "6. TCO Kostenvergelijking" },
              { href: "#case-studies", title: "7. Case Studies MKB" },
              { href: "#toekomst", title: "8. De Toekomst: Convergentie" },
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
          <section id="fundamentele-verschillen" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Scale className="w-8 h-8 mr-3 text-primary-400" />
              1. Fundamentele Verschillen Uitgelegd
            </h2>

            <p className="text-text-secondary mb-6 leading-relaxed">
              De termen &quot;cobot&quot; en &quot;robot&quot; worden vaak door elkaar gebruikt, maar er zijn fundamentele
              verschillen die bepalen welke technologie geschikt is voor jouw situatie.
            </p>

            {/* Cobot Definition */}
            <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-xl p-6 mb-6 border border-primary-500/20">
              <div className="flex items-center mb-4">
                <Hand className="w-8 h-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold text-text-primary">Collaborative Robot (Cobot)</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Een <strong className="text-text-primary">collaboratieve robot</strong> is ontworpen om veilig
                samen te werken met mensen in een gedeelde werkruimte, zonder fysieke afscherming.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary-400 mb-2">Kerneigenschappen:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Kracht- en snelheidsbeperking</li>
                    <li>• Ingebouwde veiligheidssensoren</li>
                    <li>• Intuïtieve programmering (hand-guiding)</li>
                    <li>• Compacte, lichtgewicht constructie</li>
                    <li>• Flexibele inzet en herplaatsing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-400 mb-2">Typische Toepassingen:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Machine belading</li>
                    <li>• Pick & place</li>
                    <li>• Assemblage</li>
                    <li>• Verpakken</li>
                    <li>• Kwaliteitsinspectie</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Robot Definition */}
            <div className="bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-xl p-6 mb-8 border border-accent-500/20">
              <div className="flex items-center mb-4">
                <Factory className="w-8 h-8 text-accent-400 mr-3" />
                <h3 className="text-xl font-semibold text-text-primary">Industriële Robot</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Een <strong className="text-text-primary">industriële robot</strong> is ontworpen voor maximale
                snelheid, precisie en payload in een afgeschermde cel, gescheiden van menselijke werknemers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-accent-400 mb-2">Kerneigenschappen:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Hoge snelheid en precisie</li>
                    <li>• Grote payloads (tot 2000+ kg)</li>
                    <li>• Groot werkbereik</li>
                    <li>• 24/7 onbemande productie</li>
                    <li>• Robuuste constructie</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-400 mb-2">Typische Toepassingen:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Lassen (spot, MIG, TIG)</li>
                    <li>• Palletiseren</li>
                    <li>• Spuiten en coaten</li>
                    <li>• Zware handling</li>
                    <li>• High-speed assembly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Difference Visual */}
            <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Het Kernverschil in Één Beeld</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-500/10 rounded-lg">
                  <Users className="w-12 h-12 text-primary-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-text-primary mb-2">Cobot</h4>
                  <p className="text-text-secondary text-sm">
                    Mens en robot werken <strong className="text-primary-400">samen</strong> in dezelfde ruimte.
                    De robot past zich aan de mens aan.
                  </p>
                </div>
                <div className="text-center p-4 bg-accent-500/10 rounded-lg">
                  <Shield className="w-12 h-12 text-accent-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-text-primary mb-2">Industriële Robot</h4>
                  <p className="text-text-secondary text-sm">
                    Robot werkt <strong className="text-accent-400">autonoom</strong> in een afgeschermde cel.
                    De omgeving past zich aan de robot aan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="vergelijkingstabel" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <BarChart3 className="w-8 h-8 mr-3 text-primary-400" />
              2. Complete Vergelijkingstabel: Cobot vs Robot
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Een objectieve vergelijking op alle relevante criteria helpt je de juiste keuze te maken.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-bg-secondary">
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Criterium</th>
                    <th className="border border-white/10 px-4 py-3 text-left text-primary-400">Cobot</th>
                    <th className="border border-white/10 px-4 py-3 text-left text-accent-400">Industriële Robot</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Payload</td>
                    <td className="border border-white/10 px-4 py-3">3-25 kg (meest 5-16 kg)</td>
                    <td className="border border-white/10 px-4 py-3">5-2300 kg</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Snelheid</td>
                    <td className="border border-white/10 px-4 py-3">Max 1-1,5 m/s (veiligheidsbeperkt)</td>
                    <td className="border border-white/10 px-4 py-3">Tot 10+ m/s</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Herhaalbaarheid</td>
                    <td className="border border-white/10 px-4 py-3">±0.02-0.1 mm</td>
                    <td className="border border-white/10 px-4 py-3">±0.01-0.05 mm</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Bereik</td>
                    <td className="border border-white/10 px-4 py-3">500-1850 mm</td>
                    <td className="border border-white/10 px-4 py-3">500-4700 mm</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Veiligheid</td>
                    <td className="border border-white/10 px-4 py-3 text-green-400">Inherent veilig (ISO/TS 15066)</td>
                    <td className="border border-white/10 px-4 py-3 text-yellow-400">Afscherming vereist</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Installatie</td>
                    <td className="border border-white/10 px-4 py-3">Dagen tot weken</td>
                    <td className="border border-white/10 px-4 py-3">Weken tot maanden</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Programmering</td>
                    <td className="border border-white/10 px-4 py-3">Hand-guiding, visueel, laagdrempelig</td>
                    <td className="border border-white/10 px-4 py-3">Tekstueel, specialistische kennis</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Flexibiliteit</td>
                    <td className="border border-white/10 px-4 py-3 text-green-400">Hoog - snel te herplaatsen</td>
                    <td className="border border-white/10 px-4 py-3 text-yellow-400">Laag - vaste opstelling</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Investering (robot)</td>
                    <td className="border border-white/10 px-4 py-3">€25.000-€65.000</td>
                    <td className="border border-white/10 px-4 py-3">€30.000-€150.000+</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Totale cel kosten</td>
                    <td className="border border-white/10 px-4 py-3">€35.000-€85.000</td>
                    <td className="border border-white/10 px-4 py-3">€75.000-€300.000+</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3 font-semibold">Vloeroppervlak</td>
                    <td className="border border-white/10 px-4 py-3">Klein (geen afscherming)</td>
                    <td className="border border-white/10 px-4 py-3">Groot (incl. afscherming)</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 font-semibold">Levensduur</td>
                    <td className="border border-white/10 px-4 py-3">10-15 jaar</td>
                    <td className="border border-white/10 px-4 py-3">15-25 jaar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Belangrijke Nuance
              </h4>
              <p className="text-text-secondary">
                De grenzen vervagen: moderne cobots worden krachtiger (tot 25 kg payload) terwijl industriële
                robots vaker met collaboratieve modi worden uitgerust. Toch blijft het <strong className="text-text-primary">primaire
                ontwerpprincipe</strong> (samenwerking vs. snelheid) het belangrijkste onderscheid.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="wanneer-cobot" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Hand className="w-8 h-8 mr-3 text-primary-400" />
              3. Wanneer Kies je een Cobot?
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Cobots zijn ideaal voor specifieke scenario&apos;s. Hier zijn de situaties waarin een cobot
              de beste keuze is.
            </p>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Beperkte Ruimte</h3>
                    <p className="text-text-secondary">
                      Je hebt geen ruimte voor een afgeschermde robotcel. Cobots kunnen direct naast
                      bestaande werkplekken worden geplaatst.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Mens-Robot Samenwerking</h3>
                    <p className="text-text-secondary">
                      Het proces vereist dat mens en robot samenwerken: de robot doet het zware/repetitieve
                      werk, de mens doet de fijne afwerking of kwaliteitscontrole.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Hoge Productmix / Lage Volumes</h3>
                    <p className="text-text-secondary">
                      Je produceert veel verschillende producten in kleine series. Cobots zijn snel
                      om te programmeren en her te plaatsen voor nieuwe taken.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Beperkt Budget / Eerste Automatisering</h3>
                    <p className="text-text-secondary">
                      Je wilt starten met automatisering zonder grote investering. Cobots hebben
                      lagere totale kosten en een snellere ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 5 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Geen In-House Robot Expertise</h3>
                    <p className="text-text-secondary">
                      Je hebt geen gespecialiseerde robotprogrammeurs in dienst. Cobots kunnen door
                      operators worden geprogrammeerd na een korte training.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 6 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Lichte Producten (&lt;16 kg)</h3>
                    <p className="text-text-secondary">
                      Je werkt met producten onder de 16 kg. Dit dekt de meeste assemblage-,
                      verpakkings- en inspectieworkflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary-400" />
                Top 5 Cobot-Toepassingen in MKB
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center mr-2 text-primary-400 text-sm font-bold">1</span>
                    Machine belading (CNC, spuitgiet)
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center mr-2 text-primary-400 text-sm font-bold">2</span>
                    Palletiseren kleine dozen
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center mr-2 text-primary-400 text-sm font-bold">3</span>
                    Schroeven/monteren
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center mr-2 text-primary-400 text-sm font-bold">4</span>
                    Lijmen en doseren
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center mr-2 text-primary-400 text-sm font-bold">5</span>
                    Kwaliteitsinspectie met camera
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="wanneer-robot" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Factory className="w-8 h-8 mr-3 text-primary-400" />
              4. Wanneer Kies je een Industriële Robot?
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Industriële robots zijn onverslaanbaar in specifieke toepassingen. Kies een traditionele
              robot wanneer:
            </p>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Hoge Cyclustijden / Snelheid</h3>
                    <p className="text-text-secondary">
                      Je hebt cyclustijden onder de 3-5 seconden nodig. Industriële robots zijn
                      3-5x sneller dan cobots dankzij onbeperkte snelheid.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Box className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Zware Lasten (&gt;25 kg)</h3>
                    <p className="text-text-secondary">
                      Je werkt met producten boven 25 kg. Industriële robots zijn beschikbaar tot
                      2300 kg payload voor zware handling en palletiseren.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Settings className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Lassen, Spuiten, Gevaarlijke Omgevingen</h3>
                    <p className="text-text-secondary">
                      Het proces is inherent gevaarlijk (spatten, dampen, hitte). Industriële robots
                      in afgesloten cellen zijn de enige optie voor lassen en spuiten.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Hoge Volumes / Constante Productie</h3>
                    <p className="text-text-secondary">
                      Je produceert hoge volumes van hetzelfde product. De hogere investering wordt
                      terugverdiend door maximale output en 24/7 beschikbaarheid.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 5 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Extreme Precisie (&lt;0.02mm)</h3>
                    <p className="text-text-secondary">
                      Je hebt herhaalbaarheid onder 0.02mm nodig. Industriële robots bieden
                      ±0.01mm herhaalbaarheid voor precisie-assemblage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scenario 6 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Gauge className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Groot Werkbereik (&gt;1.8m)</h3>
                    <p className="text-text-secondary">
                      Je moet een groot werkgebied bedienen. Industriële robots zijn beschikbaar
                      met bereik tot 4.7 meter voor grote werkstukken of palletiseren.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-xl p-6 border border-accent-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <Factory className="w-5 h-5 mr-2 text-accent-400" />
                Top 5 Industriële Robot Toepassingen
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center mr-2 text-accent-400 text-sm font-bold">1</span>
                    Spot- en booglassen (automotive)
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center mr-2 text-accent-400 text-sm font-bold">2</span>
                    Palletiseren zware zakken/dozen
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center mr-2 text-accent-400 text-sm font-bold">3</span>
                    Verfspuiten/coaten
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center mr-2 text-accent-400 text-sm font-bold">4</span>
                    High-speed pick & place
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <span className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center mr-2 text-accent-400 text-sm font-bold">5</span>
                    Machinehandling (persen, gieten)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="beslisboom" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Target className="w-8 h-8 mr-3 text-primary-400" />
              5. Beslisboom: 7 Vragen voor de Juiste Keuze
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Beantwoord deze 7 vragen om te bepalen welk type robot het beste past bij jouw situatie.
            </p>

            <div className="space-y-4">
              {/* Question 1 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Wat is het gewicht van je producten?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">&lt;16 kg</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot mogelijk</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">&gt;25 kg</span>
                        <p className="text-text-secondary text-sm mt-1">→ Industriële robot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Wat is je gewenste cyclustijd?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">&gt;5 seconden</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot geschikt</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">&lt;3 seconden</span>
                        <p className="text-text-secondary text-sm mt-1">→ Industriële robot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Moet de robot samenwerken met mensen?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">Ja, in dezelfde ruimte</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot vereist</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">Nee, volledig autonoom</span>
                        <p className="text-text-secondary text-sm mt-1">→ Beide mogelijk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Is het proces gevaarlijk (lassen, spuiten)?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">Nee, veilig proces</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot mogelijk</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">Ja, gevaarlijk</span>
                        <p className="text-text-secondary text-sm mt-1">→ Industriële robot + cel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Heb je ruimte voor een afgeschermde cel?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">Nee, beperkte ruimte</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot voorkeur</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">Ja, voldoende ruimte</span>
                        <p className="text-text-secondary text-sm mt-1">→ Beide mogelijk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 6 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Hoe vaak wissel je van product/taak?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">Dagelijks/wekelijks</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot (flexibiliteit)</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">Zelden (&lt;1x/maand)</span>
                        <p className="text-text-secondary text-sm mt-1">→ Beide mogelijk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 7 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Wat is je budget (inclusief integratie)?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <span className="text-primary-400 font-semibold">&lt;€80.000</span>
                        <p className="text-text-secondary text-sm mt-1">→ Cobot realistischer</p>
                      </div>
                      <div className="p-3 bg-accent-500/10 rounded-lg">
                        <span className="text-accent-400 font-semibold">&gt;€100.000</span>
                        <p className="text-text-secondary text-sm mt-1">→ Industriële robot mogelijk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Score */}
            <div className="mt-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Snelle Score</h3>
              <p className="text-text-secondary mb-4">
                Tel je antwoorden: Meer antwoorden links (groen) = <span className="text-primary-400 font-semibold">Cobot</span>.
                Meer antwoorden rechts (blauw) = <span className="text-accent-400 font-semibold">Industriële robot</span>.
              </p>
              <p className="text-text-secondary text-sm">
                <strong className="text-text-primary">Let op:</strong> Vraag 3 (samenwerking) en 4 (gevaarlijk proces)
                zijn vaak doorslaggevend en kunnen andere factoren overschrijven.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="kostenvergelijking" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-primary-400" />
              6. TCO Kostenvergelijking (Total Cost of Ownership)
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              De aanschafprijs is slechts een deel van het verhaal. Hier is een realistische
              vergelijking van de totale kosten over 5 jaar.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-bg-secondary">
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Kostenpost</th>
                    <th className="border border-white/10 px-4 py-3 text-right text-primary-400">Cobot</th>
                    <th className="border border-white/10 px-4 py-3 text-right text-accent-400">Industriële Robot</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr>
                    <td className="border border-white/10 px-4 py-3">Robot + controller</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€35.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€55.000</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3">Gripper/tooling</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€8.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€12.000</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3">Veiligheidsafscherming</td>
                    <td className="border border-white/10 px-4 py-3 text-right text-green-400">€0-2.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€15.000</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3">Integratie & engineering</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€15.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€35.000</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3">Installatie & commissioning</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€5.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€12.000</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3">Training</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€2.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€6.000</td>
                  </tr>
                  <tr className="bg-primary-500/10 font-semibold">
                    <td className="border border-white/10 px-4 py-3">Initiële Investering</td>
                    <td className="border border-white/10 px-4 py-3 text-right text-primary-400">€65.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right text-accent-400">€135.000</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3">Onderhoud (5 jaar)</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€8.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€15.000</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3">Energie (5 jaar)</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€3.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€8.000</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3">Herprogrammering (5 jaar)</td>
                    <td className="border border-white/10 px-4 py-3 text-right text-green-400">€2.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right">€12.000</td>
                  </tr>
                  <tr className="bg-green-500/10 font-semibold">
                    <td className="border border-white/10 px-4 py-3">TCO 5 Jaar</td>
                    <td className="border border-white/10 px-4 py-3 text-right text-primary-400">€78.000</td>
                    <td className="border border-white/10 px-4 py-3 text-right text-accent-400">€170.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-400 mb-3">Cobot Kostenvoordelen</h3>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Geen of minimale afscherming nodig</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Snellere installatie (dagen vs. weken)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Herprogrammering door eigen personeel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Lager energieverbruik</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent-500/10 border border-accent-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-accent-400 mb-3">Industriële Robot Waardepropositie</h3>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Hogere output = lagere cost-per-part</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Langere levensduur (20+ jaar)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Betere ROI bij hoge volumes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>24/7 onbemande productie mogelijk</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                ROI Break-Even Analyse
              </h4>
              <p className="text-text-secondary">
                Bij een besparing van €50/uur door automatisering: een cobot van €65K verdient zich terug in
                <strong className="text-text-primary"> 1.300 uur (~8 maanden bij 1 shift)</strong>. Een industriële robot van
                €135K heeft <strong className="text-text-primary">2.700 uur (~17 maanden)</strong> nodig. Maar: als de robot
                2x zo snel is, wordt de terugverdientijd weer gelijk.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="case-studies" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-primary-400" />
              7. Case Studies: MKB-Bedrijven en Hun Keuze
            </h2>

            <div className="space-y-8">
              {/* Case 1: Cobot */}
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-3">
                    <Hand className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Koos voor: Cobot</h3>
                    <p className="text-text-secondary text-sm">Metaalbewerking Janssen BV - CNC Machine Belading</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• 2 CNC draaibanken, wisselende producten</li>
                      <li>• Onderdelen 0,5-8 kg</li>
                      <li>• Operator deed ook kwaliteitscontrole</li>
                      <li>• Beperkte vloerruimte</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Oplossing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Universal Robots UR10e cobot</li>
                      <li>• Mobiele opstelling op wielen</li>
                      <li>• Investering: €58.000 totaal</li>
                      <li>• ROI: 11 maanden</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-bg-primary rounded-lg">
                  <p className="text-text-secondary text-sm italic">
                    &quot;De cobot bedient nu beide machines terwijl onze operator zich focust op kwaliteit en
                    programmeren. We schakelen makkelijk tussen producten - dat was cruciaal voor ons.&quot;
                  </p>
                </div>
              </div>

              {/* Case 2: Robot */}
              <div className="bg-gradient-to-br from-accent-500/10 to-accent-600/5 rounded-xl p-6 border border-accent-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center mr-3">
                    <Factory className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Koos voor: Industriële Robot</h3>
                    <p className="text-text-secondary text-sm">Palletisering Plus - Logistiek & Verpakking</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• 3.000 dozen/dag palletiseren</li>
                      <li>• Dozen 5-25 kg</li>
                      <li>• Vaste productlijn, weinig variatie</li>
                      <li>• Ruimte beschikbaar voor cel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Oplossing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• KUKA KR 60 palletiseerrobot</li>
                      <li>• Afgeschermde cel met lichtschermen</li>
                      <li>• Investering: €145.000 totaal</li>
                      <li>• ROI: 14 maanden</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-bg-primary rounded-lg">
                  <p className="text-text-secondary text-sm italic">
                    &quot;Een cobot was te langzaam voor onze volumes. De industriële robot doet 12 dozen per
                    minuut, een cobot maximaal 5. Het prijsverschil verdient zich snel terug bij onze volumes.&quot;
                  </p>
                </div>
              </div>

              {/* Case 3: Hybrid */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                    <RefreshCw className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Koos voor: Beide</h3>
                    <p className="text-text-secondary text-sm">TechAssembly Nederland - Elektronicaproductie</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Cobot toepassing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Schroefassemblage op werkbank</li>
                      <li>• Operator voert componenten aan</li>
                      <li>• Veel productvariaties</li>
                      <li>• DOBOT CR5 - €42.000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Robot toepassing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• High-speed SMD pick & place</li>
                      <li>• 20.000+ plaatsingen/uur</li>
                      <li>• Volledig geautomatiseerde lijn</li>
                      <li>• FANUC LR Mate - €95.000</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-bg-primary rounded-lg">
                  <p className="text-text-secondary text-sm italic">
                    &quot;De juiste tool voor de juiste job. Cobots waar flexibiliteit telt, industriële robots
                    waar snelheid cruciaal is. Samen verhoogden we onze output met 65%.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="toekomst" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-primary-400" />
              8. De Toekomst: Convergentie van Cobot en Robot
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              De grenzen tussen cobots en industriële robots vervagen snel. Hier zijn de trends
              die de komende jaren de markt zullen bepalen.
            </p>

            <div className="space-y-6">
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Industriële Robots met Collaborative Modes
                    </h3>
                    <p className="text-text-secondary">
                      FANUC CRX, ABB GoFa, KUKA LBR series: traditionele robotfabrikanten lanceren
                      cobots met hogere payloads en snelheden dan typische cobots, maar met
                      collaboratieve veiligheidsmodi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-accent-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Cobots met Industriële Prestaties
                    </h3>
                    <p className="text-text-secondary">
                      Universal Robots UR20 en UR30 (tot 30 kg payload), Techman TM25 series:
                      cobots worden steeds krachtiger zonder de gebruiksvriendelijkheid op te offeren.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Slimme Veiligheidssystemen
                    </h3>
                    <p className="text-text-secondary">
                      3D-visiesystemen en AI-gebaseerde safety zones maken het mogelijk om industriële
                      robots veilig zonder hekwerk te laten opereren - op volle snelheid als er
                      niemand in de buurt is, vertraagd bij menselijke aanwezigheid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start">
                  <Timer className="w-6 h-6 text-purple-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Robots-as-a-Service (RaaS)
                    </h3>
                    <p className="text-text-secondary">
                      Lease- en abonnementsmodellen maken beide typen robots toegankelijker.
                      Betaal per geproduceerd product of per uur, zonder grote initiële investering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Advies voor 2025-2027
              </h4>
              <p className="text-text-secondary">
                Kies vandaag op basis van je huidige needs, niet op basis van toekomstige productfeatures.
                Zowel cobots als industriële robots hebben bewezen technologie met jarenlange support.
                De &quot;perfecte hybride&quot; robot bestaat nog niet - en als die komt, kun je upgraden.
              </p>
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
                  q: "Kan een cobot net zo snel zijn als een industriële robot?",
                  a: "Nee, niet in collaboratieve modus. Cobots zijn beperkt tot ~1,5 m/s arm snelheid vanwege ISO/TS 15066 veiligheidsstandaarden. Industriële robots halen 10+ m/s. Sommige cobots hebben een 'industriële modus' achter afscherming, maar dan verlies je het cobot-voordeel."
                },
                {
                  q: "Hebben cobots echt geen afscherming nodig?",
                  a: "Niet altijd, maar vaak wel aanvullende veiligheidsmaatregelen. Een risicoanalyse bepaalt wat nodig is: soms volstaat een cobot, soms zijn extra sensoren of lichte hekken nodig. Het hangt af van de gripper, het product, en de snelheid waarmee gewerkt wordt."
                },
                {
                  q: "Welke merken zijn het populairst voor cobots vs. robots?",
                  a: "Cobots: Universal Robots domineert (~50% marktaandeel), gevolgd door FANUC CRX, Techman, DOBOT, en ABB GoFa. Industriële robots: FANUC, KUKA, ABB, en Yaskawa zijn de Big 4 met decennia ervaring en wereldwijde support."
                },
                {
                  q: "Kan ik een cobot later upgraden naar een industriële robot?",
                  a: "Niet direct - het zijn verschillende machines. Maar je cobot-investering is niet verloren: de cobot kan naar een andere taak verplaatst worden terwijl je een industriële robot installeert voor de high-volume taak. Dit is een veelgebruikt groeipad."
                },
                {
                  q: "Wat als ik twijfel tussen beide?",
                  a: "Begin met de toepassing die de duidelijkste ROI heeft. Vaak is dat een cobot voor een eerste automatisering vanwege lagere kosten en risico. Na succesvolle implementatie heb je ervaring om te bepalen of industriële robots nodig zijn voor andere toepassingen."
                },
                {
                  q: "Hoe zit het met programmering - moet ik een expert inhuren?",
                  a: "Voor cobots: nee, de meeste operators kunnen na 1-2 dagen training eenvoudige programma's maken. Voor industriële robots: ja, initiële programmering vereist specialistische kennis, al wordt dit ook makkelijker met grafische interfaces."
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
                Conclusie: De Juiste Robot voor Jouw Productie
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Er is geen universeel &quot;beste&quot; keuze tussen cobot en industriële robot. De beste robot
                is degene die aansluit bij jouw specifieke situatie: payload, snelheid, flexibiliteit,
                budget, en ruimte. Voor veel MKB-bedrijven is een cobot de ideale eerste stap in
                automatisering, terwijl industriële robots onverslaanbaar blijven voor high-volume,
                high-speed toepassingen.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-primary-400 mb-2">Kies Cobot als...</h3>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Flexibiliteit belangrijk is</li>
                    <li>• Mens-robot samenwerking nodig is</li>
                    <li>• Budget &lt;€80K beschikbaar is</li>
                    <li>• Producten &lt;16 kg wegen</li>
                  </ul>
                </div>
                <div className="bg-accent-500/10 rounded-lg p-4">
                  <h3 className="font-semibold text-accent-400 mb-2">Kies Industriële Robot als...</h3>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Maximale snelheid vereist is</li>
                    <li>• Producten &gt;25 kg wegen</li>
                    <li>• Hoge volumes gedraaid worden</li>
                    <li>• Proces gevaarlijk is (lassen/spuiten)</li>
                  </ul>
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
                  <p className="text-primary-400 text-sm mb-3">Cobot & Automatisering Specialist | Proces360</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Rob heeft 50+ cobot- en robotimplementaties begeleid bij MKB-productiebedrijven.
                    Hij helpt bedrijven de juiste automatiseringsoplossing te kiezen op basis van
                    hun specifieke situatie, niet op basis van hype of verkooppraatjes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Hulp nodig bij het kiezen tussen cobot en robot?
              </h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Plan een vrijblijvende automatiseringsscan. We analyseren je situatie en geven
                onafhankelijk advies over de beste oplossing voor jouw productie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Gratis Automatiseringsscan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/diensten/cobot-integratie"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
                >
                  Bekijk Cobot Integratie
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
                  description: "Bereken de ROI van je cobot-investering met onze calculator.",
                  href: "/blog/cobot-terugverdientijd-berekenen",
                  tag: "ROI"
                },
                {
                  title: "Cobots in Productie: Complete Gids",
                  description: "Alles over cobots in de maakindustrie voor MKB.",
                  href: "/blog/cobots-in-productie-complete-gids",
                  tag: "Cobots"
                },
                {
                  title: "Automatisering Roadmap MKB",
                  description: "Van eerste stap tot volledig geautomatiseerde productie.",
                  href: "/blog/automatisering-roadmap-mkb",
                  tag: "Strategie"
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
                { href: "/diensten/cobot-integratie", title: "Cobot Integratie", desc: "Van selectie tot implementatie" },
                { href: "/diensten/industriele-automatisering", title: "Industriële Automatisering", desc: "Complete automatiseringsoplossingen" },
                { href: "/diensten/procesoptimalisatie", title: "Procesoptimalisatie", desc: "Optimaliseer voor automatisering" },
                { href: "/diensten/oee-verbetering", title: "OEE Verbetering", desc: "Maximaliseer robot-effectiviteit" },
                { href: "/diensten/productie-dashboards", title: "Productie Dashboards", desc: "Monitor robot prestaties" },
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
