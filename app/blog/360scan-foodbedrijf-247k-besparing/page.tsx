'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Target,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Settings,
  Zap,
  Euro,
  AlertTriangle,
  ArrowRight,
  Factory,
  Timer,
  Package,
  Users,
  Bot,
  Gauge,
  ThermometerSun,
  Scale,
  Truck,
  ClipboardCheck,
  Wrench,
  LineChart
} from 'lucide-react';

export default function FoodCaseStudy247kPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary">
      {/* Breadcrumb */}
      <div className="bg-bg-secondary border-b border-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary-500 transition-colors">Home</Link>
            <ChevronRight size={16} className="text-text-muted" />
            <Link href="/blog" className="text-text-secondary hover:text-primary-500 transition-colors">Blog</Link>
            <ChevronRight size={16} className="text-text-muted" />
            <span className="text-text-primary">Foodbedrijf Case Study</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <Target size={14} className="mr-1" />
              Case Study
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              360Scan Verdieping
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Food Industry
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
            €247.000 Jaarlijks Besparingspotentieel bij Foodproducent
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Een uitgebreide 360Scan Verdieping bij een versproducent onthulde enorme kansen:
            3,2 FTE besparing door automatisering, 18% OEE-verhoging en procesverbeteringen
            die samen €247.000 per jaar opleveren — zonder grote investeringen.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-divider">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>3 februari 2026</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>12 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Results Banner */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">€247.000</div>
            <div className="text-green-100 text-sm">Jaarlijks besparingspotentieel</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">3,2 FTE</div>
            <div className="text-blue-100 text-sm">Besparing door automatisering</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">+18%</div>
            <div className="text-orange-100 text-sm">OEE-verhoging potentieel</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">8 maanden</div>
            <div className="text-purple-100 text-sm">Terugverdientijd investeringen</div>
          </div>
        </div>

        {/* Key Message Box */}
        <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border border-primary-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-primary-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                De kern van deze case
              </h3>
              <p className="text-text-secondary">
                Dit foodbedrijf draaide met 68 medewerkers, had moderne machines, maar besefte niet
                hoeveel capaciteit en efficiency op tafel bleef liggen. De 360Scan bracht in 10 dagen
                systematisch alle verbeterkansen in kaart — van eenvoudige procesaanpassingen tot
                automatiseringskansen met bewezen ROI.
              </p>
            </div>
          </div>
        </div>

        {/* De Situatie */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Factory className="w-8 h-8 text-primary-500" />
            De Uitgangssituatie
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            Een middelgrote versproducent — denk aan voorgesneden groenten, salades en maaltijdcomponenten —
            wilde weten waar verbeterpotentieel zat. Ze hadden recent geïnvesteerd in nieuwe verpakkingslijnen,
            maar merkten dat de verwachte output niet werd gehaald. De vraag: &quot;Ligt het aan de machines,
            aan onze mensen, of aan onze processen?&quot;
          </p>

          <div className="bg-bg-secondary rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Bedrijfsprofiel</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">68 medewerkers (productie: 52 FTE)</span>
              </div>
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">Versproducent / Food processing</span>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">3 productielijnen, 2 shifts</span>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">~€12M jaaromzet</span>
              </div>
              <div className="flex items-center gap-3">
                <ThermometerSun className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">Gekoelde productie (2-7°C)</span>
              </div>
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">IFS/BRC gecertificeerd</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
            <p className="text-orange-900 font-medium mb-1">De uitdaging</p>
            <p className="text-orange-800 text-sm">
              &quot;We hebben net €400.000 geïnvesteerd in een nieuwe verpakkingslijn, maar halen nog
              steeds niet de output die de leverancier beloofde. We weten niet of het aan de machine
              ligt of aan hoe wij ermee werken.&quot;
            </p>
          </div>
        </section>

        {/* De 360Scan Aanpak */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary-500" />
            De 360Scan Verdieping: 10 Dagen Analyse
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            Voor dit bedrijf kozen we de 360Scan Verdieping — een uitgebreide analyse over 10 werkdagen
            die verder gaat dan een standaard scan. We analyseerden niet alleen de nieuwe verpakkingslijn,
            maar alle drie de productielijnen, de logistieke flow en de ondersteunende processen.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D1-2
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Dag 1-2: Baseline meting & observatie</h4>
                <p className="text-text-secondary text-sm">
                  OEE-metingen per lijn, tijdstudies, materiaalstroomanalyse, gesprekken met lijnverantwoordelijken
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D3-4
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Dag 3-4: Diepte-analyse knelpunten</h4>
                <p className="text-text-secondary text-sm">
                  Stilstandanalyse, omsteltijden meten, kwaliteitsdata analyseren, handmatige werkzaamheden in kaart
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D5-6
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Dag 5-6: Automatiseringspotentieel</h4>
                <p className="text-text-secondary text-sm">
                  Identificeren van repetitieve taken, cobot-haalbaarheid, ROI-berekeningen per automatiseringskans
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D7-8
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Dag 7-8: Procesoptimalisatie & planning</h4>
                <p className="text-text-secondary text-sm">
                  Planning efficiency, batching strategie, onderhoudscyclus, shift-overdracht analyse
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D9-10
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Dag 9-10: Rapportage & roadmap</h4>
                <p className="text-text-secondary text-sm">
                  Bevindingen consolideren, business cases uitwerken, prioritering, presentatie aan directie
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Huidige OEE Analyse */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Gauge className="w-8 h-8 text-primary-500" />
            OEE-Analyse: Van 54% naar 72% Potentieel
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            De OEE-metingen onthulden een duidelijk beeld: de drie productielijnen presteerden
            gemiddeld op 54% OEE — ver onder de 65-75% die in de food industry als goed geldt.
            De nieuwe verpakkingslijn scoorde zelfs het slechtst met 48%.
          </p>

          <div className="bg-bg-secondary rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">OEE per productielijn</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-text-secondary">Lijn 1 - Snijlijn groenten</span>
                  <span className="text-text-primary font-semibold">58%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-text-secondary">Lijn 2 - Menginstallatie</span>
                  <span className="text-text-primary font-semibold">56%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-text-secondary">Lijn 3 - Verpakkingslijn (nieuw)</span>
                  <span className="text-text-primary font-semibold">48%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
              <div className="pt-4 border-t border-divider">
                <div className="flex justify-between mb-1">
                  <span className="text-text-secondary font-medium">Gemiddeld</span>
                  <span className="text-text-primary font-bold">54%</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-green-400 font-medium">Potentieel na verbeteringen</span>
                  <span className="text-green-400 font-bold">72%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">Beschikbaarheid: 71%</h4>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Lange omsteltijden (gem. 42 min)</li>
                <li>• Ongeplande stops (materiaal)</li>
                <li>• Shift-overdracht verliezen</li>
              </ul>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">Prestatie: 82%</h4>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Micro-stops bij sealen</li>
                <li>• Wachten op handmatige aanvoer</li>
                <li>• Suboptimale lijnsnelheid</li>
              </ul>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">Kwaliteit: 92%</h4>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Sealfouten bij productwissels</li>
                <li>• Gewichtsvariatie eerste batch</li>
                <li>• Labelfouten na omstelling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* De Bevindingen - FTE Besparing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary-500" />
            Bevinding 1: 3,2 FTE Besparing door Automatisering
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            De grootste ontdekking: meerdere handmatige taken konden geautomatiseerd worden met
            bewezen technologie. Niet futuristisch, maar cobots en eenvoudige mechanisatie die
            zich binnen 12-18 maanden terugverdienen.
          </p>

          {/* Automatiseringskans 1 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Cobot voor dozenopbouw & palletiseren</h3>
                  <p className="text-sm text-text-secondary">Einde verpakkingslijn</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-400">1,5 FTE</div>
                <div className="text-sm text-text-secondary">= €67.500/jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Twee medewerkers bouwen nu handmatig dozen op en stapelen gevulde dozen op pallets.
              Een cobot met vacuümgripper kan dit volledig overnemen — 24/7 consistent, zonder
              fysieke belasting voor medewerkers.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Investering</span>
                <div className="text-text-primary font-semibold">€55.000</div>
              </div>
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Terugverdientijd</span>
                <div className="text-text-primary font-semibold">10 maanden</div>
              </div>
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Implementatie</span>
                <div className="text-text-primary font-semibold">6-8 weken</div>
              </div>
            </div>
          </div>

          {/* Automatiseringskans 2 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Automatische weeglijn met afvoer</h3>
                  <p className="text-sm text-text-secondary">Kwaliteitscontrole output</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">0,8 FTE</div>
                <div className="text-sm text-text-secondary">= €36.000/jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Momenteel controleert een medewerker steekproefsgewijs het gewicht van verpakkingen.
              Een inline checkweigher met automatische reject kan dit 100% controleren, elimineert
              ondervulling-claims en reduceert overvulling (nu gem. 3,2% te veel product).
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Investering</span>
                <div className="text-text-primary font-semibold">€28.000</div>
              </div>
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Terugverdientijd</span>
                <div className="text-text-primary font-semibold">7 maanden</div>
              </div>
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Extra: overvulling</span>
                <div className="text-green-400 font-semibold">+€18.000/jaar</div>
              </div>
            </div>
          </div>

          {/* Automatiseringskans 3 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Automatische kratten-/bakkenpositionering</h3>
                  <p className="text-sm text-text-secondary">Begin snijlijn</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-400">0,9 FTE</div>
                <div className="text-sm text-text-secondary">= €40.500/jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Grondstof-bakken worden nu handmatig naar de snijlijn gereden en gepositioneerd.
              Een eenvoudig AGV-systeem (2 kleine AGV&apos;s) kan dit automatiseren en de aanvoer
              synchroon met de lijnsnelheid laten lopen.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Investering</span>
                <div className="text-text-primary font-semibold">€42.000</div>
              </div>
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Terugverdientijd</span>
                <div className="text-text-primary font-semibold">12 maanden</div>
              </div>
              <div className="bg-bg-primary rounded-lg p-3">
                <span className="text-text-secondary">Extra: minder stops</span>
                <div className="text-green-400 font-semibold">+€8.000/jaar</div>
              </div>
            </div>
          </div>

          {/* FTE Totaal */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Totaal FTE-besparing door automatisering</h3>
                <p className="text-blue-100">Medewerkers kunnen worden ingezet voor waardevollere taken</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">3,2 FTE</div>
                <div className="text-blue-100">€144.000/jaar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bevinding 2: OEE Quick Wins */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary-500" />
            Bevinding 2: OEE-verhoging zonder Grote Investeringen
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            Naast automatisering vonden we talloze procesverbeteringen die de OEE van 54% naar
            72% kunnen brengen — grotendeels met aanpassingen in werkwijze, training en kleine
            investeringen.
          </p>

          {/* Quick Win OEE 1 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">SMED omstelprogramma</h3>
                  <p className="text-sm text-text-secondary">Omsteltijd van 42 naar 18 minuten</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€38.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-3">
              De omsteltijden varieerden van 28 tot 65 minuten voor vergelijkbare productwissels.
              Door SMED-training, gestandaardiseerde werkwijze en voorbereiding tijdens productie
              kan dit naar gemiddeld 18 minuten.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 4 weken training + begeleiding, €3.500</span>
            </div>
          </div>

          {/* Quick Win OEE 2 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">TPM-programma operators</h3>
                  <p className="text-sm text-text-secondary">Autonomous Maintenance implementatie</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€24.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-3">
              Kleine storingen en vervuiling veroorzaken 12% van de stilstand. Door operators
              basisonderhoud te laten uitvoeren (schoonmaken, smeren, inspecteren) en hen
              eigenaarschap te geven, kan dit naar onder 4%.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 6 weken programma, €2.000 voor materiaal</span>
            </div>
          </div>

          {/* Quick Win OEE 3 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Verpakkingsmachine optimalisatie</h3>
                  <p className="text-sm text-text-secondary">Parameterinstelling en sealdruk</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€19.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-3">
              De nieuwe verpakkingslijn draait op standaard fabrieksinstellingen. Door de parameters
              te optimaliseren voor jullie specifieke producten en folie, kan de lijnsnelheid met
              15% omhoog zonder kwaliteitsverlies.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 2 dagen fabrikant + interne training, €1.800</span>
            </div>
          </div>

          {/* Quick Win OEE 4 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Shift-overdracht protocol</h3>
                  <p className="text-sm text-text-secondary">Gestructureerde overdracht & opstartprocedure</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€12.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-3">
              Tussen shifts gaat gemiddeld 25 minuten productietijd verloren door onduidelijke
              overdracht. Een gestructureerd protocol met overlap en visuele status-borden
              reduceert dit naar 8 minuten.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 2 weken, €800 voor borden en materiaal</span>
            </div>
          </div>

          {/* Quick Win OEE 5 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Materiaalplanning synchronisatie</h3>
                  <p className="text-sm text-text-secondary">Grondstoffen op tijd aan de lijn</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€10.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-3">
              Wachten op grondstoffen veroorzaakt 8% van de niet-geplande stilstand. Door het
              interne logistiek systeem te koppelen aan de productieplanning en buffer-locaties
              bij de lijnen in te richten.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 3 weken, €1.200 voor stellingen en labeling</span>
            </div>
          </div>

          {/* OEE Totaal */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Totaal OEE-verbeteringen</h3>
                <p className="text-orange-100">Van 54% naar 72% OEE (+18 procentpunt)</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">€103.000</div>
                <div className="text-orange-100">per jaar extra output</div>
              </div>
            </div>
          </div>
        </section>

        {/* Totaaloverzicht */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary-500" />
            Totaaloverzicht: €247.000 Jaarlijks Potentieel
          </h2>

          <div className="bg-bg-secondary rounded-xl overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-bg-primary">
                <tr>
                  <th className="text-left p-4 text-text-primary font-semibold">Categorie</th>
                  <th className="text-right p-4 text-text-primary font-semibold">Besparing/jaar</th>
                  <th className="text-right p-4 text-text-primary font-semibold">Investering</th>
                  <th className="text-right p-4 text-text-primary font-semibold">Terugverdientijd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                <tr>
                  <td className="p-4 text-text-secondary">Automatisering (3,2 FTE)</td>
                  <td className="p-4 text-right text-green-400 font-semibold">€144.000</td>
                  <td className="p-4 text-right text-text-secondary">€125.000</td>
                  <td className="p-4 text-right text-text-secondary">10 maanden</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">OEE-verbeteringen</td>
                  <td className="p-4 text-right text-green-400 font-semibold">€103.000</td>
                  <td className="p-4 text-right text-text-secondary">€9.300</td>
                  <td className="p-4 text-right text-text-secondary">&lt;1 maand</td>
                </tr>
                <tr className="bg-green-500/10">
                  <td className="p-4 text-text-primary font-bold">TOTAAL</td>
                  <td className="p-4 text-right text-green-400 font-bold text-xl">€247.000</td>
                  <td className="p-4 text-right text-text-primary font-semibold">€134.300</td>
                  <td className="p-4 text-right text-text-primary font-semibold">~8 maanden</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Belangrijke conclusie
                </h3>
                <p className="text-text-secondary">
                  De €103.000 aan OEE-verbeteringen vereist slechts €9.300 investering — bijna
                  pure winst vanaf maand 1. De automatiseringsinvesteringen van €125.000
                  verdienen zichzelf terug in 10 maanden en leveren daarna €144.000 per jaar op.
                  <strong className="text-text-primary"> Na het eerste jaar: €247.000 netto per jaar extra.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementatie Roadmap */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Voorgestelde Implementatie Roadmap
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xs text-text-secondary">Maand</div>
                <div className="text-2xl font-bold text-primary-500">1-2</div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Fase 1: Quick Wins</h4>
                <p className="text-text-secondary text-sm">
                  SMED-training, shift-overdracht protocol, materiaalplanning. Investering: €5.500.
                  Resultaat: €60.000/jaar direct effect.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xs text-text-secondary">Maand</div>
                <div className="text-2xl font-bold text-primary-500">3-4</div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Fase 2: TPM & Machine Optimalisatie</h4>
                <p className="text-text-secondary text-sm">
                  TPM-programma uitrollen, verpakkingslijn optimaliseren. Investering: €3.800.
                  Resultaat: €43.000/jaar extra.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xs text-text-secondary">Maand</div>
                <div className="text-2xl font-bold text-primary-500">4-6</div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Fase 3: Automatisering Checkweigher</h4>
                <p className="text-text-secondary text-sm">
                  Inline checkweigher installeren. Investering: €28.000.
                  Resultaat: €54.000/jaar (incl. overvulling reductie).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xs text-text-secondary">Maand</div>
                <div className="text-2xl font-bold text-primary-500">6-9</div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Fase 4: Cobot Palletiseren</h4>
                <p className="text-text-secondary text-sm">
                  Cobot-cel voor dozenopbouw en palletiseren. Investering: €55.000.
                  Resultaat: €67.500/jaar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-xs text-text-secondary">Maand</div>
                <div className="text-2xl font-bold text-primary-500">9-12</div>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Fase 5: AGV-systeem</h4>
                <p className="text-text-secondary text-sm">
                  Automatische materiaal aanvoer met AGV&apos;s. Investering: €42.000.
                  Resultaat: €48.500/jaar (FTE + minder stops).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="mb-12">
          <blockquote className="bg-bg-secondary border-l-4 border-primary-500 rounded-r-xl p-6">
            <p className="text-lg text-text-primary italic mb-4">
              &quot;We dachten dat onze nieuwe verpakkingslijn het probleem was. Bleek dat we hem gewoon
              niet optimaal gebruikten. De 360Scan gaf ons niet alleen inzicht in wat er misging,
              maar ook een concrete roadmap om €247.000 per jaar te realiseren. De quick wins draaien
              al — we zitten nu op 62% OEE en dat groeit elke maand.&quot;
            </p>
            <footer className="text-text-secondary">
              — Operations Manager, versproducent
            </footer>
          </blockquote>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Wat zit er verborgen in uw foodproductie?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Of u nu verse producten, maaltijden of ingrediënten produceert — er zit vrijwel
              altijd meer potentieel dan u denkt. Een 360Scan brengt het objectief in kaart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/360scan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Bekijk 360Scan pakketten
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Plan een kennismaking
              </Link>
            </div>
          </div>
        </section>

        {/* Related Article */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Gerelateerde case study</h3>
          <Link href="/blog/360scan-case-69k-besparing" className="block bg-bg-secondary rounded-xl p-6 hover:border-primary-500/50 border border-transparent transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">€69.000+ Besparingspotentieel Ontdekt met Eén 360Scan</h4>
                <p className="text-sm text-text-secondary">Metaalbewerkingsbedrijf vindt €69.000 met kleine ingrepen</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary-500 flex-shrink-0" />
            </div>
          </Link>
        </section>

        {/* Back to blog */}
        <div className="pt-8 border-t border-divider">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Terug naar alle artikelen
          </Link>
        </div>
        <BlogCTA />
      </article>
    </main>
  );
}
