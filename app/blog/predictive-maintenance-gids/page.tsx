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
  Gauge,
  AlertTriangle,
  Award,
  FileText,
  Activity,
  Cpu,
  Wifi,
  Database,
  Bell,
  Thermometer,
  Radio,
  LineChart,
  Wrench,
  Timer,
  AlertCircle,
  TrendingDown,
  PieChart
} from 'lucide-react';

export default function PredictiveMaintenancePage() {
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
            <span className="text-text-primary">Predictive Maintenance</span>
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
              OEE Verbetering
            </span>
            <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
              Condition Monitoring
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Predictive Maintenance: Van Reactief naar Voorspellend Onderhoud [Complete Gids 2025]
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Stop met onverwachte stilstand. Leer hoe predictive maintenance werkt, welke sensoren
            en technologieën je nodig hebt, en implementeer voorspellend onderhoud in je MKB-productie
            met dit praktische stappenplan.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-white/10">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime="2025-10-14">14 oktober 2025</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>22 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-xl p-6 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">70%</div>
            <div className="text-sm text-text-secondary">Minder ongeplande stilstand</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-xl p-6 border border-accent-500/20">
            <div className="text-3xl font-bold text-accent-400 mb-2">25%</div>
            <div className="text-sm text-text-secondary">Lagere onderhoudskosten</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
            <div className="text-sm text-text-secondary">Langere waarschuwingstijd</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">20%</div>
            <div className="text-sm text-text-secondary">Langere machinelevensduur</div>
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
              { href: "#onderhoudsniveaus", title: "1. Van Reactief naar Predictief" },
              { href: "#hoe-werkt-het", title: "2. Hoe Werkt Predictive Maintenance?" },
              { href: "#sensoren", title: "3. Sensoren & Technologieën" },
              { href: "#algoritmes", title: "4. AI & Machine Learning" },
              { href: "#implementatie", title: "5. Stappenplan Implementatie" },
              { href: "#use-cases", title: "6. Use Cases per Machinetype" },
              { href: "#roi-berekenen", title: "7. ROI van Predictive Maintenance" },
              { href: "#case-studies", title: "8. Case Studies MKB" },
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
          <section id="onderhoudsniveaus" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-primary-400" />
              1. Van Reactief naar Predictief: De Onderhoudspiramide
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              De evolutie van onderhoud kent vier niveaus. De meeste MKB-bedrijven zitten vast
              tussen niveau 1 en 2. Predictive maintenance (niveau 3) is nu ook voor MKB bereikbaar
              dankzij betaalbare sensoren en cloud-AI.
            </p>

            <div className="space-y-6 mb-8">
              {/* Level 1 */}
              <div className="bg-gradient-to-r from-red-500/10 to-transparent rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Niveau 1: Reactief Onderhoud</h3>
                    <p className="text-red-400 text-sm">&quot;Run to failure&quot;</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-3">
                  Repareren wanneer het kapot gaat. Geen planning, hoge kosten door spoedonderdelen
                  en productiestilstand.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Typische downtime impact:</span>
                  <span className="text-red-400 font-semibold">€5.000-€50.000 per incident</span>
                </div>
              </div>

              {/* Level 2 */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                    <Timer className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Niveau 2: Preventief Onderhoud</h3>
                    <p className="text-yellow-400 text-sm">&quot;Time-based maintenance&quot;</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-3">
                  Vast schema: elke X draaiuren of Y maanden onderhoud uitvoeren, ongeacht de werkelijke conditie.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Probleem:</span>
                  <span className="text-yellow-400">30% van onderdelen vroegtijdig vervangen (verspilling)</span>
                </div>
              </div>

              {/* Level 3 */}
              <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <Activity className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Niveau 3: Predictive Maintenance</h3>
                    <p className="text-green-400 text-sm">&quot;Condition-based maintenance&quot;</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-3">
                  Sensoren monitoren de werkelijke conditie. AI voorspelt wanneer onderhoud écht nodig is.
                  Onderhoud precies op tijd, niet te vroeg, niet te laat.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Resultaat:</span>
                  <span className="text-green-400 font-semibold">70% minder ongeplande stilstand</span>
                </div>
              </div>

              {/* Level 4 */}
              <div className="bg-gradient-to-r from-primary-500/10 to-transparent rounded-xl p-6 border-l-4 border-primary-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <Cpu className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Niveau 4: Prescriptive Maintenance</h3>
                    <p className="text-primary-400 text-sm">&quot;AI-driven optimization&quot;</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-3">
                  Het systeem voorspelt niet alleen wanneer, maar geeft ook aanbevelingen over
                  hoe te repareren en optimaliseert het productieschema automatisch.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Status:</span>
                  <span className="text-primary-400">Cutting-edge, vooral bij grote OEMs</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Focus voor MKB: Niveau 3
              </h4>
              <p className="text-text-secondary">
                Predictive maintenance (niveau 3) is de sweet spot voor MKB. Het is bewezen technologie,
                betaalbaar, en levert directe ROI. Niveau 4 is interessant voor de toekomst, maar
                nog niet praktisch voor de meeste MKB-bedrijven.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="hoe-werkt-het" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Settings className="w-8 h-8 mr-3 text-primary-400" />
              2. Hoe Werkt Predictive Maintenance?
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Predictive maintenance combineert sensoren, dataverwerking en machine learning om
              de resterende levensduur (Remaining Useful Life - RUL) van componenten te voorspellen.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">De 4 Stappen van PdM</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Radio className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">1. Data Acquisitie</h4>
                    <p className="text-text-secondary text-sm">
                      Sensoren meten trillingen, temperatuur, stroom, geluid, druk en andere parameters
                      continu of op regelmatige intervallen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Database className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">2. Data Processing</h4>
                    <p className="text-text-secondary text-sm">
                      Ruwe sensordata wordt gefilterd, geaggregeerd en getransformeerd naar bruikbare
                      features voor analyse (edge computing of cloud).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <LineChart className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">3. Analytics & Prediction</h4>
                    <p className="text-text-secondary text-sm">
                      Machine learning modellen vergelijken huidige patronen met historische data
                      en faalpatronen om degradatie te detecteren en RUL te voorspellen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Bell className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">4. Action & Alert</h4>
                    <p className="text-text-secondary text-sm">
                      Automatische alerts naar onderhoudsteam, werkorders aanmaken, en integratie
                      met productieplanning voor optimale timing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* P-F Curve */}
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 mb-8 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">De P-F Curve: Het Kernprincipe</h3>
              <p className="text-text-secondary mb-4">
                De P-F curve (Potential failure to Functional failure) is het fundament van predictive maintenance.
                Het toont hoe een component degradeert van gezond naar falen.
              </p>
              <div className="bg-bg-primary rounded-lg p-4 mb-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-text-secondary"><strong className="text-green-400">P-punt:</strong> Eerste detecteerbaar symptoom (trillingen nemen toe)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-text-secondary"><strong className="text-yellow-400">Degradatie:</strong> Conditie verslechtert meetbaar over tijd</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-text-secondary"><strong className="text-red-400">F-punt:</strong> Functionele faling - machine stopt</span>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                <strong className="text-primary-400">P-F interval:</strong> De tijd tussen P en F is je window of opportunity.
                Predictive maintenance detecteert het P-punt vroeg, zodat je weken of maanden de tijd hebt
                om onderhoud te plannen in plaats van uren of minuten.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sensoren" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Radio className="w-8 h-8 mr-3 text-primary-400" />
              3. Sensoren & Technologieën voor Predictive Maintenance
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              De juiste sensoren kiezen is cruciaal. Hier zijn de belangrijkste technologieën
              voor condition monitoring in productiemachines.
            </p>

            <div className="space-y-6">
              {/* Vibration */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Activity className="w-6 h-6 text-primary-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">Vibratieanalyse</h3>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Meest gebruikt</span>
                </div>
                <p className="text-text-secondary mb-4">
                  De gouden standaard voor roterende machines. Detecteert onbalans, misalignment,
                  lagerslijtage, en tandwielschade weken tot maanden voor falen.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Toepassingen:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Elektromotoren</li>
                      <li>• Pompen en compressoren</li>
                      <li>• Spindels (CNC)</li>
                      <li>• Tandwielkasten</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Kosten indicatie:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Basis sensor: €200-€500</li>
                      <li>• Wireless IoT sensor: €300-€800</li>
                      <li>• Professioneel systeem: €1.500-€5.000</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Temperature */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Thermometer className="w-6 h-6 text-red-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">Temperatuurmonitoring</h3>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Laagdrempelig</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Abnormale temperatuur is vaak een vroeg symptoom van wrijving, overbelasting of
                  elektrische problemen. Eenvoudig te implementeren.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Toepassingen:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Lagers en assen</li>
                      <li>• Elektrische panelen</li>
                      <li>• Hydrauliek</li>
                      <li>• Proces monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Technologieën:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Thermokoppels: €10-€50</li>
                      <li>• PT100 sensoren: €30-€100</li>
                      <li>• Infrarood (IR) sensoren: €100-€500</li>
                      <li>• Thermografische camera&apos;s: €500-€5.000</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Current/Power */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">Stroomanalyse (MCSA)</h3>
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Non-invasief</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Motor Current Signature Analysis detecteert problemen in elektromotoren en
                  aangedreven apparatuur via het stroomsignaal - geen sensoren op de machine nodig.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Detecteert:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Rotor defecten</li>
                      <li>• Lagerslijtage</li>
                      <li>• Mechanische belasting</li>
                      <li>• Voedingsproblemen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Voordelen:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Geen montage op machine</li>
                      <li>• Installatie in schakelkast</li>
                      <li>• Retrofit-vriendelijk</li>
                      <li>• Kost €500-€2.000/motor</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Acoustic/Ultrasound */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Radio className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">Akoestische Emissie & Ultrasound</h3>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Geavanceerd</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Detecteert hoogfrequente geluiden die het menselijk oor niet hoort. Zeer vroege
                  detectie van wrijving, lekkage en elektrische ontladingen.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Toepassingen:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Lekkage detectie (lucht, gas)</li>
                      <li>• Langzaam draaiende lagers</li>
                      <li>• Elektrische ontladingen</li>
                      <li>• Smeringsproblemen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Kosten:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Handheld ultrasound: €2.000-€8.000</li>
                      <li>• Vaste sensoren: €500-€2.000/stuk</li>
                      <li>• Training noodzakelijk</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Oil Analysis */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Gauge className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-text-primary">Olieanalyse</h3>
                  </div>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Periodiek</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Analyse van smeerolie detecteert slijtagedeeltjes, vervuiling en olie-degradatie.
                  Traditioneel lab-based, nu ook met online sensoren.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Detecteert:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Metaaldeeltjes (slijtage)</li>
                      <li>• Water in olie</li>
                      <li>• Viscositeitsverandering</li>
                      <li>• Oxidatie</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Opties:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Lab analyse: €50-€150/monster</li>
                      <li>• Online deeltjesteller: €2.000-€8.000</li>
                      <li>• Online olie sensor: €1.000-€3.000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sensor Selection Guide */}
            <div className="mt-8 bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Startersadvies: Begin met Vibratie + Temperatuur
              </h4>
              <p className="text-text-secondary">
                Voor 80% van de MKB-toepassingen volstaat een combinatie van vibratie- en temperatuursensoren.
                Dit dekt de meeste faalwijzen in roterende machines. Investering per kritische machine:
                <strong className="text-text-primary"> €500-€1.500</strong> voor wireless IoT-sensoren met cloud analytics.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="algoritmes" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Cpu className="w-8 h-8 mr-3 text-primary-400" />
              4. AI & Machine Learning voor Predictive Maintenance
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Sensoren leveren data, maar de echte waarde zit in de intelligente analyse.
              Hier zijn de technieken die worden gebruikt om falen te voorspellen.
            </p>

            <div className="space-y-6 mb-8">
              {/* Technique 1 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Threshold Monitoring (Drempelwaarden)</h3>
                <p className="text-text-secondary mb-3">
                  De eenvoudigste vorm: alert wanneer een waarde boven een drempel komt
                  (bijv. temperatuur &gt;80°C of vibratie &gt;4 mm/s).
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">✓ Eenvoudig, geen ML nodig</span>
                  <span className="text-yellow-400 text-sm">⚠ Geen voorspelling, alleen detectie</span>
                </div>
              </div>

              {/* Technique 2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Anomaly Detection</h3>
                <p className="text-text-secondary mb-3">
                  ML-model leert wat &quot;normaal&quot; gedrag is en detecteert afwijkingen. Effectief voor
                  complexe systemen waar drempelwaarden niet werken.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">✓ Detecteert onbekende problemen</span>
                  <span className="text-yellow-400 text-sm">⚠ Vraagt 2-4 weken training data</span>
                </div>
              </div>

              {/* Technique 3 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Remaining Useful Life (RUL) Prediction</h3>
                <p className="text-text-secondary mb-3">
                  Geavanceerde modellen die voorspellen hoeveel uren/dagen een component nog meegaat.
                  Gebaseerd op degradatiepatronen en historische faaldata.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">✓ Optimale onderhoudsplanning</span>
                  <span className="text-yellow-400 text-sm">⚠ Vereist historische faaldata</span>
                </div>
              </div>

              {/* Technique 4 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Failure Mode Classification</h3>
                <p className="text-text-secondary mb-3">
                  Classificeert niet alleen dat er iets mis is, maar ook wát er mis is
                  (bijv. lager vs. onbalans vs. misalignment). Helpt bij diagnose.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">✓ Directe diagnose</span>
                  <span className="text-yellow-400 text-sm">⚠ Vereist gelabelde trainingsdata</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Praktische AI-Implementatie voor MKB</h3>
              <p className="text-text-secondary mb-4">
                Je hoeft geen data scientist in dienst te hebben. Moderne PdM-platforms bieden
                out-of-the-box AI-modellen:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-primary-400 mb-2">SKF Enlight</h4>
                  <p className="text-text-secondary text-sm">Ingebouwde modellen voor lagers en roterende machines</p>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-accent-400 mb-2">AWS IoT + Lookout</h4>
                  <p className="text-text-secondary text-sm">Auto-ML voor anomaly detection</p>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Azure Digital Twins</h4>
                  <p className="text-text-secondary text-sm">Pre-built models voor industriële assets</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="implementatie" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Target className="w-8 h-8 mr-3 text-primary-400" />
              5. Stappenplan: Predictive Maintenance Implementeren
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Een gestructureerde aanpak in 6 fasen zorgt voor succesvolle PdM-implementatie
              zonder overweldigende complexiteit.
            </p>

            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Criticality Analysis</h3>
                    <p className="text-text-secondary text-sm">Week 1-2</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Identificeer je meest kritieke assets. Niet elke machine verdient predictive maintenance.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Criteria voor selectie:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Impact op productie bij stilstand (bottleneck?)</li>
                    <li>• Reparatiekosten en levertijd onderdelen</li>
                    <li>• Historische faalfrequentie</li>
                    <li>• Veiligheidsrisico&apos;s</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Failure Mode Analysis</h3>
                    <p className="text-text-secondary text-sm">Week 2-3</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Begrijp hoe de geselecteerde machines kunnen falen en welke parameters dat voorspellen.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Per machine documenteren:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Kritieke componenten (lagers, aandrijving, etc.)</li>
                    <li>• Historische storingen en oorzaken</li>
                    <li>• Meetbare voorlopers van falen</li>
                    <li>• P-F interval schatting</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Sensor Selectie & Installatie</h3>
                    <p className="text-text-secondary text-sm">Week 3-5</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Kies de juiste sensoren op basis van de failure modes. Installeer en valideer.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Praktische tips:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Start met wireless IoT sensoren (makkelijke installatie)</li>
                    <li>• Plaats vibratiesensoren op lagerhuizen</li>
                    <li>• Temperatuursensoren op hotspots</li>
                    <li>• Zorg voor goede WiFi/LoRa dekking</li>
                  </ul>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Baseline & Training</h3>
                    <p className="text-text-secondary text-sm">Week 5-8</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Verzamel data onder normale operatie om een baseline te creëren. ML-modellen
                  hebben 2-4 weken nodig om &quot;normaal&quot; te leren.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Tijdens deze fase:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Documenteer operationele condities (snelheid, belasting)</li>
                    <li>• Noteer bekende issues/afwijkingen</li>
                    <li>• Verifieer data kwaliteit</li>
                    <li>• Stel initiële drempelwaarden in</li>
                  </ul>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Pilot & Fine-tuning</h3>
                    <p className="text-text-secondary text-sm">Week 8-12</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Run het systeem parallel aan bestaand onderhoud. Valideer voorspellingen en pas aan.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Focus op:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Reduceer false positives (onnodige alerts)</li>
                    <li>• Verifieer dat echte issues gedetecteerd worden</li>
                    <li>• Train operators in interpretatie dashboards</li>
                    <li>• Integreer met werkorder systeem</li>
                  </ul>
                </div>
              </div>

              {/* Phase 6 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Scale-up & Continuous Improvement</h3>
                    <p className="text-text-secondary text-sm">Maand 4+</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  Na succesvolle pilot: rol uit naar meer machines en blijf het systeem verbeteren.
                </p>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Continuous improvement:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Feed faaldata terug naar modellen</li>
                    <li>• Track KPIs (vermeden downtime, onderhoudskosten)</li>
                    <li>• Identificeer nieuwe toepassingen</li>
                    <li>• Deel kennis tussen shifts/teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="use-cases" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Settings className="w-8 h-8 mr-3 text-primary-400" />
              6. Use Cases per Machinetype
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Specifieke toepassingen en sensorkeuzes voor veelvoorkomende productie-equipment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* CNC */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Wrench className="w-5 h-5 mr-2 text-primary-400" />
                  CNC Machines
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-primary-400 font-semibold">Monitor:</span>
                    <span className="text-text-secondary"> Spindel, ballscrews, lagers</span>
                  </div>
                  <div>
                    <span className="text-primary-400 font-semibold">Sensoren:</span>
                    <span className="text-text-secondary"> Vibratie, temperatuur, stroomanalyse</span>
                  </div>
                  <div>
                    <span className="text-primary-400 font-semibold">P-F interval:</span>
                    <span className="text-text-secondary"> 2-8 weken</span>
                  </div>
                  <div>
                    <span className="text-primary-400 font-semibold">ROI driver:</span>
                    <span className="text-text-secondary"> Vermijden spindelcrash (€10-50K schade)</span>
                  </div>
                </div>
              </div>

              {/* Compressors */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Gauge className="w-5 h-5 mr-2 text-accent-400" />
                  Compressoren
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-accent-400 font-semibold">Monitor:</span>
                    <span className="text-text-secondary"> Lagers, kleppen, olie</span>
                  </div>
                  <div>
                    <span className="text-accent-400 font-semibold">Sensoren:</span>
                    <span className="text-text-secondary"> Vibratie, druk, olieanalyse</span>
                  </div>
                  <div>
                    <span className="text-accent-400 font-semibold">P-F interval:</span>
                    <span className="text-text-secondary"> 4-12 weken</span>
                  </div>
                  <div>
                    <span className="text-accent-400 font-semibold">ROI driver:</span>
                    <span className="text-text-secondary"> Fabrieksbrede impact bij falen</span>
                  </div>
                </div>
              </div>

              {/* Pumps */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-400" />
                  Pompen
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-green-400 font-semibold">Monitor:</span>
                    <span className="text-text-secondary"> Lagers, afdichtingen, cavitatie</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">Sensoren:</span>
                    <span className="text-text-secondary"> Vibratie, druk, flow</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">P-F interval:</span>
                    <span className="text-text-secondary"> 2-6 weken</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">ROI driver:</span>
                    <span className="text-text-secondary"> Processtilstand voorkomen</span>
                  </div>
                </div>
              </div>

              {/* Electric Motors */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Elektromotoren
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-yellow-400 font-semibold">Monitor:</span>
                    <span className="text-text-secondary"> Lagers, rotor, isolatie</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-semibold">Sensoren:</span>
                    <span className="text-text-secondary"> MCSA, vibratie, temperatuur</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-semibold">P-F interval:</span>
                    <span className="text-text-secondary"> 4-16 weken</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-semibold">ROI driver:</span>
                    <span className="text-text-secondary"> Lange levertijd vervanging</span>
                  </div>
                </div>
              </div>

              {/* Gearboxes */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-400" />
                  Tandwielkasten
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-purple-400 font-semibold">Monitor:</span>
                    <span className="text-text-secondary"> Tandwielen, lagers, olie</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Sensoren:</span>
                    <span className="text-text-secondary"> Vibratie, olieanalyse, temperatuur</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">P-F interval:</span>
                    <span className="text-text-secondary"> 8-24 weken</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">ROI driver:</span>
                    <span className="text-text-secondary"> Hoge vervangingskosten</span>
                  </div>
                </div>
              </div>

              {/* Conveyors */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
                  Transportbanden
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-orange-400 font-semibold">Monitor:</span>
                    <span className="text-text-secondary"> Lagers, band, aandrijving</span>
                  </div>
                  <div>
                    <span className="text-orange-400 font-semibold">Sensoren:</span>
                    <span className="text-text-secondary"> Vibratie, spanning, temperatuur</span>
                  </div>
                  <div>
                    <span className="text-orange-400 font-semibold">P-F interval:</span>
                    <span className="text-text-secondary"> 2-8 weken</span>
                  </div>
                  <div>
                    <span className="text-orange-400 font-semibold">ROI driver:</span>
                    <span className="text-text-secondary"> Lijnstop voorkomen</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="roi-berekenen" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-primary-400" />
              7. ROI van Predictive Maintenance Berekenen
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              De business case voor PdM is sterk, maar moet concreet gemaakt worden.
              Hier is een praktisch rekenmodel.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">ROI Componenten</h3>

              <div className="space-y-4">
                <div className="bg-red-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Huidige Kosten (zonder PdM)</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Ongeplande stilstand: productieverlies + spoedonderdelen</li>
                    <li>• Secundaire schade: een falend onderdeel beschadigt anderen</li>
                    <li>• Overmatig preventief onderhoud: te vroeg vervangen</li>
                    <li>• Inefficiënte planning: noodonderhoud verstoort productie</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Besparingen (met PdM)</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• 70% minder ongeplande stilstand</li>
                    <li>• 25-30% lagere onderhoudskosten</li>
                    <li>• 20% langere machinelevensduur</li>
                    <li>• Verbeterde planning (onderhoud in daluren)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Calculation Example */}
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 mb-8 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Rekenvoorbeeld: 5 Kritieke Machines</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-3">Kosten ZONDER PdM (per jaar)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-text-secondary">
                      <span>Ongeplande stilstand (3x/jaar, 8 uur, €500/uur)</span>
                      <span>€12.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Spoedonderdelen en -reparatie</span>
                      <span>€15.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Secundaire schade (1x/2 jaar)</span>
                      <span>€5.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Overmatig preventief onderhoud</span>
                      <span>€8.000</span>
                    </div>
                    <div className="flex justify-between font-semibold text-red-400 pt-2 border-t border-white/10">
                      <span>Totaal</span>
                      <span>€40.000/jaar</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-3">Kosten MET PdM (per jaar)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-text-secondary">
                      <span>Sensoren + platform (5 machines)</span>
                      <span>€6.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Resterende stilstand (70% reductie)</span>
                      <span>€3.600</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Gepland onderhoud (efficiënter)</span>
                      <span>€5.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Secundaire schade (bijna 0)</span>
                      <span>€500</span>
                    </div>
                    <div className="flex justify-between font-semibold text-green-400 pt-2 border-t border-white/10">
                      <span>Totaal</span>
                      <span>€15.100/jaar</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-bg-secondary rounded-lg p-4 text-center">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-text-secondary">Jaarlijkse Besparing</p>
                    <p className="text-2xl font-bold text-green-400">€24.900</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Initiële Investering</p>
                    <p className="text-2xl font-bold text-text-primary">€12.000</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-400">5,8 maanden</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="case-studies" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-primary-400" />
              8. Case Studies: Predictive Maintenance in MKB
            </h2>

            <div className="space-y-8">
              {/* Case 1 */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">Verspaning Van Dijk - CNC Atelier</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie:</h4>
                    <p className="text-text-secondary text-sm mb-3">
                      12 CNC machines, 3 spindelcrashes per jaar met gemiddeld €25.000 schade.
                      Onvoorspelbare stilstand verstoorde leverbetrouwbaarheid.
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">Oplossing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Vibratiesensoren op alle spindels</li>
                      <li>• Cloud-based analytics platform</li>
                      <li>• Investering: €28.000</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Resultaten na 18 maanden:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Spindelcrashes:</span>
                        <span className="text-green-400 font-semibold">3/jaar → 0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Ongeplande stilstand:</span>
                        <span className="text-green-400 font-semibold">-82%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Onderhoudskosten:</span>
                        <span className="text-green-400 font-semibold">-28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Besparing jaar 1:</span>
                        <span className="text-green-400 font-semibold">€67.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <Gauge className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">ChemProcess Benelux - Procesindustrie</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie:</h4>
                    <p className="text-text-secondary text-sm mb-3">
                      Kritieke pompen en compressoren in 24/7 chemisch proces.
                      Elk uur stilstand kost €8.000 aan productieverlies.
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">Oplossing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Vibratie + temperatuur op 25 assets</li>
                      <li>• Online olieanalyse op compressoren</li>
                      <li>• Investering: €65.000</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Resultaten na 12 maanden:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Vermeden stilstand:</span>
                        <span className="text-blue-400 font-semibold">42 uur</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Vermeden productieverlies:</span>
                        <span className="text-blue-400 font-semibold">€336.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Vermeden secundaire schade:</span>
                        <span className="text-blue-400 font-semibold">€45.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">ROI:</span>
                        <span className="text-blue-400 font-semibold">486%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <Activity className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">Agri-Pack Solutions - Verpakkingslijn</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Situatie:</h4>
                    <p className="text-text-secondary text-sm mb-3">
                      Seizoensgebonden productie met piek in oogstseizoen.
                      Falen tijdens piek = verloren omzet (geen inhaalcapaciteit).
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">Oplossing:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Monitoring aandrijflijnen en lagers</li>
                      <li>• Pre-season health check via sensoren</li>
                      <li>• Investering: €18.000</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Resultaten seizoen 2024:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Stilstand tijdens piek:</span>
                        <span className="text-purple-400 font-semibold">0 uur</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Issues pre-emptief opgelost:</span>
                        <span className="text-purple-400 font-semibold">4 stuks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Geschatte vermeden verlies:</span>
                        <span className="text-purple-400 font-semibold">€125.000</span>
                      </div>
                    </div>
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
                  q: "Hoe lang duurt het voordat predictive maintenance waarde levert?",
                  a: "De eerste alerts komen na 2-4 weken (baseline periode). Echte ROI - in de vorm van vermeden storingen - zie je typisch binnen 3-6 maanden. De meeste bedrijven halen terugverdientijd binnen 12 maanden."
                },
                {
                  q: "Werkt PdM ook voor oudere machines?",
                  a: "Ja, zelfs beter dan voor nieuwe machines. Oudere machines hebben meer faalwijzen en profiteren meer van monitoring. Retrofit sensoren zijn eenvoudig te installeren zonder aanpassing aan de machine."
                },
                {
                  q: "Hoeveel sensoren heb ik nodig per machine?",
                  a: "Typisch 2-4 sensoren per machine: 1-2 vibratiesensoren (op kritieke lagers) en 1-2 temperatuursensoren. Voor complexe machines (CNC, compressoren) soms meer. Begin met de kritieke componenten."
                },
                {
                  q: "Moet ik kiezen tussen cloud of on-premise?",
                  a: "Voor MKB is cloud meestal de beste keuze: lagere opstartkosten, automatische updates, en toegang tot geavanceerde AI zonder eigen data scientists. On-premise is vooral voor bedrijven met strikte data-residency eisen."
                },
                {
                  q: "Vervangt PdM preventief onderhoud volledig?",
                  a: "Niet volledig. Sommige onderhoudstaken (smering, filters) blijven time-based. PdM vervangt vooral de component-vervanging: in plaats van elke X uur vervangen, vervang je wanneer de sensor zegt dat het nodig is."
                },
                {
                  q: "Wat als ik geen historische faaldata heb?",
                  a: "Geen probleem. Start met anomaly detection (leert 'normaal' gedrag) en threshold monitoring. Na 1-2 jaar verzamel je vanzelf data over degradatie en falen die de modellen verbeteren."
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
                Conclusie: Stop met Reageren, Begin met Voorspellen
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Predictive maintenance is geen toekomstmuziek meer - het is vandaag beschikbaar en
                betaalbaar voor MKB-productiebedrijven. Met IoT-sensoren vanaf €300, cloud-AI platforms,
                en bewezen ROI binnen 12 maanden is er geen reden om te wachten. Begin klein met je
                meest kritieke machines en bouw van daaruit verder.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">70%</div>
                  <div className="text-xs text-text-secondary">Minder stilstand</div>
                </div>
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">25%</div>
                  <div className="text-xs text-text-secondary">Lagere kosten</div>
                </div>
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">&lt;12 mnd</div>
                  <div className="text-xs text-text-secondary">Terugverdientijd</div>
                </div>
                <div className="text-center p-3 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">€500+</div>
                  <div className="text-xs text-text-secondary">Startinvestering/machine</div>
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
                  <p className="text-primary-400 text-sm mb-3">OEE & Maintenance Expert | Proces360</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Rob heeft predictive maintenance programma&apos;s opgezet bij tientallen MKB-productiebedrijven.
                    Van sensorselectie tot AI-implementatie - zijn focus ligt op praktische oplossingen
                    die snel waarde leveren zonder overmatige complexiteit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Klaar voor Predictive Maintenance?
              </h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Plan een vrijblijvende PdM-scan. We analyseren je kritieke assets en geven
                een concreet implementatieadvies met ROI-berekening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Gratis PdM Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/diensten/oee-verbetering"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
                >
                  Bekijk OEE Verbetering
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
                  title: "OEE Verbeteren: Complete Gids",
                  description: "Verhoog beschikbaarheid met predictive maintenance.",
                  href: "/blog/oee-verbeteren-complete-gids",
                  tag: "OEE"
                },
                {
                  title: "Machine Learning in Productie",
                  description: "AI-toepassingen voor voorspellend onderhoud.",
                  href: "/blog/machine-learning-productie",
                  tag: "AI"
                },
                {
                  title: "Productie KPIs Complete Gids",
                  description: "MTBF, MTTR en andere maintenance KPIs.",
                  href: "/blog/productie-kpis-complete-gids",
                  tag: "KPIs"
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
                { href: "/diensten/oee-verbetering", title: "OEE Verbetering", desc: "Maximaliseer beschikbaarheid" },
                { href: "/diensten/procesoptimalisatie", title: "Procesoptimalisatie", desc: "Elimineer stilstand-oorzaken" },
                { href: "/diensten/productie-dashboards", title: "Productie Dashboards", desc: "Monitor machine health" },
                { href: "/diensten/industriele-automatisering", title: "Industriële Automatisering", desc: "Smart factory oplossingen" },
                { href: "/diensten/cobot-integratie", title: "Cobot Integratie", desc: "Automatiseer onderhoudstaken" },
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
