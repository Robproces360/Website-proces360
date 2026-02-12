'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
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
  Microscope,
  Ruler,
  Cog,
  Shield,
  Award,
  AlertTriangle,
  Gauge,
  Settings,
  FileText,
  Users,
  Zap,
  DollarSign
} from 'lucide-react';

export default function SixSigmaMKBPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary">
      {/* Breadcrumb */}
      <div className="bg-bg-secondary border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-text-secondary" />
            <Link href="/blog" className="text-text-secondary hover:text-primary-400 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 text-text-secondary" />
            <span className="text-text-primary">Six Sigma voor MKB</span>
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
              Procesoptimalisatie
            </span>
            <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
              Kwaliteitsmanagement
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Six Sigma voor MKB-Productiebedrijven: Kwaliteit zonder Bureaucratie
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Six Sigma hoeft geen dure, complexe exercitie te zijn. Ontdek hoe MKB-productiebedrijven
            met een pragmatische aanpak 70% minder uitval en 40% hogere klanttevredenheid realiseren.
            Met concrete tools, templates en een 12-weken implementatieplan.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary pb-8 border-b border-white/10">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Rob Derks</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime="2025-08-12">12 augustus 2025</time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>21 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-xl p-6 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">70%</div>
            <div className="text-sm text-text-secondary">Minder uitval gemiddeld</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-xl p-6 border border-accent-500/20">
            <div className="text-3xl font-bold text-accent-400 mb-2">3.4</div>
            <div className="text-sm text-text-secondary">Defecten per miljoen (doel)</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-6 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">12 wkn</div>
            <div className="text-sm text-text-secondary">Tot eerste resultaten</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">€50K+</div>
            <div className="text-sm text-text-secondary">Besparing per project</div>
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
              { href: "#wat-is-six-sigma", title: "1. Wat is Six Sigma (écht)?" },
              { href: "#dmaic-mkb", title: "2. DMAIC voor MKB: Praktische Aanpak" },
              { href: "#essentiële-tools", title: "3. De 7 Essentiële Six Sigma Tools" },
              { href: "#sigma-niveaus", title: "4. Sigma-niveaus Begrijpen" },
              { href: "#implementatie-plan", title: "5. 12-Weken Implementatieplan" },
              { href: "#case-studies", title: "6. Case Studies uit de Praktijk" },
              { href: "#valkuilen", title: "7. Valkuilen en Hoe te Vermijden" },
              { href: "#roi-berekenen", title: "8. ROI van Six Sigma Berekenen" },
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
          <section id="wat-is-six-sigma" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Target className="w-8 h-8 mr-3 text-primary-400" />
              1. Wat is Six Sigma (Écht)?
            </h2>

            <p className="text-text-secondary mb-6 leading-relaxed">
              Six Sigma is ontwikkeld door Motorola in de jaren &apos;80 en geperfectioneerd door General Electric
              onder Jack Welch. Maar waar grote corporaties hele afdelingen hebben voor kwaliteitsmanagement,
              hebben MKB-bedrijven een <strong className="text-text-primary">pragmatische, resultaatgerichte aanpak</strong> nodig.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Six Sigma in Één Zin</h3>
              <p className="text-text-secondary text-lg italic">
                &quot;Een datagedreven methodologie om procesvariatie te verminderen en defecten te elimineren,
                met als doel maximaal 3,4 defecten per miljoen mogelijkheden.&quot;
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-text-primary mb-4">De Sigma-Schaal Uitgelegd</h3>

            <p className="text-text-secondary mb-6">
              Het Griekse letter σ (sigma) staat voor standaardafwijking - een maat voor spreiding in data.
              Hoe hoger het sigma-niveau, hoe consistenter je proces:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-bg-secondary">
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Sigma</th>
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Defecten/Miljoen</th>
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Opbrengst</th>
                    <th className="border border-white/10 px-4 py-3 text-left text-text-primary">Typisch voor</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr>
                    <td className="border border-white/10 px-4 py-3">1σ</td>
                    <td className="border border-white/10 px-4 py-3">691.462</td>
                    <td className="border border-white/10 px-4 py-3">30,9%</td>
                    <td className="border border-white/10 px-4 py-3">Geen controle</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3">2σ</td>
                    <td className="border border-white/10 px-4 py-3">308.538</td>
                    <td className="border border-white/10 px-4 py-3">69,1%</td>
                    <td className="border border-white/10 px-4 py-3">Startend bedrijf</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3">3σ</td>
                    <td className="border border-white/10 px-4 py-3">66.807</td>
                    <td className="border border-white/10 px-4 py-3">93,3%</td>
                    <td className="border border-white/10 px-4 py-3">Gemiddeld MKB</td>
                  </tr>
                  <tr className="bg-bg-secondary/50">
                    <td className="border border-white/10 px-4 py-3 text-primary-400 font-semibold">4σ</td>
                    <td className="border border-white/10 px-4 py-3 text-primary-400">6.210</td>
                    <td className="border border-white/10 px-4 py-3 text-primary-400">99,38%</td>
                    <td className="border border-white/10 px-4 py-3 text-primary-400">Realistisch MKB-doel</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-3">5σ</td>
                    <td className="border border-white/10 px-4 py-3">233</td>
                    <td className="border border-white/10 px-4 py-3">99,98%</td>
                    <td className="border border-white/10 px-4 py-3">World-class</td>
                  </tr>
                  <tr className="bg-green-500/10">
                    <td className="border border-white/10 px-4 py-3 text-green-400 font-semibold">6σ</td>
                    <td className="border border-white/10 px-4 py-3 text-green-400">3,4</td>
                    <td className="border border-white/10 px-4 py-3 text-green-400">99,9997%</td>
                    <td className="border border-white/10 px-4 py-3 text-green-400">Het ultieme doel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Praktisch Advies voor MKB
              </h4>
              <p className="text-text-secondary">
                Voor de meeste MKB-productiebedrijven is <strong className="text-text-primary">4 sigma (99,38% opbrengst)</strong> een
                realistisch en kostenefficiënt doel. Het verschil tussen 3σ en 4σ levert vaak de grootste ROI op,
                terwijl 5σ of 6σ disproportioneel meer investering vraagt.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-text-primary mb-4 mt-8">Six Sigma vs. Lean: Wat is het Verschil?</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary-400" />
                  Six Sigma Focus
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Variatie verminderen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Defecten elimineren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Statistische analyse</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary-400 flex-shrink-0" />
                    <span>Kwaliteitsverbetering</span>
                  </li>
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-accent-400" />
                  Lean Focus
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Verspilling elimineren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Flow optimaliseren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Visueel management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent-400 flex-shrink-0" />
                    <span>Snelheidsverbetering</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-text-secondary">
              De beste resultaten behaal je met <strong className="text-text-primary">Lean Six Sigma</strong>:
              Lean voor snelheid en efficiëntie, Six Sigma voor kwaliteit en consistentie. In de praktijk
              worden beide methodologieën vaak gecombineerd toegepast.
            </p>
          </section>

          {/* Section 2 */}
          <section id="dmaic-mkb" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Cog className="w-8 h-8 mr-3 text-primary-400" />
              2. DMAIC voor MKB: Een Praktische Aanpak
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              DMAIC is het hart van Six Sigma: een gestructureerde probleemoplossingsmethode.
              Voor MKB-bedrijven heb ik een <strong className="text-text-primary">afgeslankte maar effectieve versie</strong> ontwikkeld
              die binnen 12 weken resultaat oplevert.
            </p>

            {/* DMAIC Steps */}
            <div className="space-y-6 mb-8">
              {/* Define */}
              <div className="bg-gradient-to-r from-red-500/10 to-transparent rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-400 font-bold">D</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Define - Definieer het Probleem</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Wat is precies het probleem? Welke impact heeft het? Wie zijn de stakeholders?
                </p>
                <div className="bg-bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">MKB-Deliverables (1-2 weken):</h4>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Project Charter (1 A4: probleem, scope, doel, team)</li>
                    <li>• SIPOC diagram (Suppliers, Inputs, Process, Outputs, Customers)</li>
                    <li>• Voice of Customer (VOC) - 5-10 klantgesprekken</li>
                    <li>• Kritieke Kwaliteitskenmerken (CTQs) gedefinieerd</li>
                  </ul>
                </div>
              </div>

              {/* Measure */}
              <div className="bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-400 font-bold">M</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Measure - Meet de Huidige Situatie</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Verzamel data om de baseline te bepalen. Zonder meten geen weten.
                </p>
                <div className="bg-bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">MKB-Deliverables (2-3 weken):</h4>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Meetplan met operationele definities</li>
                    <li>• Baseline data (minimaal 30 datapunten)</li>
                    <li>• Process Capability analyse (Cp, Cpk)</li>
                    <li>• Huidig sigma-niveau berekend</li>
                  </ul>
                </div>
              </div>

              {/* Analyze */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-400 font-bold">A</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Analyze - Analyseer de Grondoorzaken</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Identificeer de werkelijke oorzaken van het probleem, niet de symptomen.
                </p>
                <div className="bg-bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">MKB-Deliverables (2-3 weken):</h4>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Ishikawa (Visgraat) diagram</li>
                    <li>• 5x Waarom analyse voor top-oorzaken</li>
                    <li>• Pareto analyse (80/20 regel)</li>
                    <li>• Geverifieerde grondoorzaken (max 3-5)</li>
                  </ul>
                </div>
              </div>

              {/* Improve */}
              <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">I</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Improve - Implementeer Verbeteringen</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Ontwikkel en test oplossingen, rol succesvol uit naar productie.
                </p>
                <div className="bg-bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">MKB-Deliverables (3-4 weken):</h4>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Brainstorm sessie met team (oplossingen)</li>
                    <li>• Oplossingsmatrix (impact vs. effort)</li>
                    <li>• Pilot uitvoeren en resultaten meten</li>
                    <li>• Implementatieplan voor full rollout</li>
                  </ul>
                </div>
              </div>

              {/* Control */}
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">C</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Control - Borg de Verbetering</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Zorg dat verbeteringen blijvend zijn met monitoring en standaardisatie.
                </p>
                <div className="bg-bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">MKB-Deliverables (2-3 weken):</h4>
                  <ul className="text-text-secondary space-y-1">
                    <li>• Control chart voor continu monitoren</li>
                    <li>• Standaard werkprocedures (SWI&apos;s) bijgewerkt</li>
                    <li>• Reactieplan bij afwijkingen</li>
                    <li>• Overdracht aan process owner</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="essentiële-tools" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Settings className="w-8 h-8 mr-3 text-primary-400" />
              3. De 7 Essentiële Six Sigma Tools voor MKB
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Je hoeft geen Black Belt te zijn om krachtige Six Sigma tools te gebruiken.
              Deze 7 tools vormen de kern van elke succesvolle verbeterproject en zijn
              <strong className="text-text-primary"> perfect geschikt voor MKB-toepassing</strong>.
            </p>

            <div className="space-y-8">
              {/* Tool 1: Control Charts */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">1</span>
                    Control Charts (Regelkaarten)
                  </h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Essentieel</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Visualiseer procesgedrag over tijd en detecteer afwijkingen voordat ze problemen worden.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Wanneer gebruiken:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Continue procesmeting</li>
                      <li>• Detectie van trends</li>
                      <li>• Onderscheid normale vs. speciale variatie</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Types voor MKB:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• X-bar R chart (gemiddelde + range)</li>
                      <li>• I-MR chart (individuele metingen)</li>
                      <li>• P-chart (proportie defecten)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tool 2: Pareto */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">2</span>
                    Pareto Analyse
                  </h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Essentieel</span>
                </div>
                <p className="text-text-secondary mb-4">
                  De 80/20 regel: identificeer de 20% oorzaken die 80% van de problemen veroorzaken.
                </p>
                <div className="bg-primary-500/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-400 mb-2">Praktijkvoorbeeld:</h4>
                  <p className="text-text-secondary text-sm">
                    Een metaalbewerkingsbedrijf analyseerde 500 afkeurningen. Pareto toonde dat 3 van de
                    12 defectcategorieën (maatafwijking, oppervlaktefouten, verkeerde materiaal) 78% van
                    alle afkeur veroorzaakten. Focus op deze 3 leverde 65% reductie in totale afkeur.
                  </p>
                </div>
              </div>

              {/* Tool 3: Ishikawa */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">3</span>
                    Ishikawa Diagram (Visgraat)
                  </h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Essentieel</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Structureer oorzaken in categorieën: Machine, Mens, Methode, Materiaal, Meting, Milieu (6M&apos;s).
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Cog className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <span className="text-text-secondary text-sm">Machine</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                    <span className="text-text-secondary text-sm">Mens</span>
                  </div>
                  <div className="text-center">
                    <FileText className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <span className="text-text-secondary text-sm">Methode</span>
                  </div>
                </div>
              </div>

              {/* Tool 4: 5 Waarom */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">4</span>
                    5x Waarom Analyse
                  </h3>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Quick Win</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Graaf dieper dan symptomen door steeds &quot;waarom?&quot; te vragen tot je de grondoorzaak vindt.
                </p>
                <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
                  <h4 className="font-semibold text-text-primary mb-3">Voorbeeld:</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-text-secondary"><strong className="text-red-400">Probleem:</strong> Machine staat stil</p>
                    <p className="text-text-secondary"><strong className="text-orange-400">Waarom 1:</strong> De zekering is doorgebrand</p>
                    <p className="text-text-secondary"><strong className="text-yellow-400">Waarom 2:</strong> Er was overbelasting op de motor</p>
                    <p className="text-text-secondary"><strong className="text-lime-400">Waarom 3:</strong> Het lager zat vast</p>
                    <p className="text-text-secondary"><strong className="text-green-400">Waarom 4:</strong> Het lager was niet gesmeerd</p>
                    <p className="text-text-secondary"><strong className="text-primary-400">Waarom 5:</strong> Er is geen preventief onderhoudsschema → <strong className="text-text-primary">Grondoorzaak!</strong></p>
                  </div>
                </div>
              </div>

              {/* Tool 5: Process Capability */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">5</span>
                    Process Capability (Cp, Cpk)
                  </h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Geavanceerd</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Meet hoe goed je proces presteert ten opzichte van specificatiegrenzen.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
                    <h4 className="font-semibold text-text-primary mb-2">Cp (Potentieel)</h4>
                    <p className="text-text-secondary text-sm mb-2">Hoe breed is de spreiding t.o.v. specificatie?</p>
                    <p className="text-primary-400 font-mono">Cp = (USL - LSL) / 6σ</p>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4 border border-white/5">
                    <h4 className="font-semibold text-text-primary mb-2">Cpk (Actueel)</h4>
                    <p className="text-text-secondary text-sm mb-2">Hoeveel marge is er naar de dichtstbijzijnde grens?</p>
                    <p className="text-primary-400 font-mono">Cpk = min(CPU, CPL)</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-500/10 rounded-lg">
                  <p className="text-text-secondary text-sm">
                    <strong className="text-green-400">Vuistregel:</strong> Cpk ≥ 1.33 betekent een capabel proces.
                    Voor kritieke kenmerken streven naar Cpk ≥ 1.67.
                  </p>
                </div>
              </div>

              {/* Tool 6: FMEA */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">6</span>
                    FMEA (Failure Mode & Effects Analysis)
                  </h3>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Preventief</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Identificeer potentiële faalwijzen proactief en prioriteer preventieve maatregelen.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-bg-primary">
                        <th className="px-3 py-2 text-left text-text-primary">Component</th>
                        <th className="px-3 py-2 text-left text-text-primary">Ernst (S)</th>
                        <th className="px-3 py-2 text-left text-text-primary">Kans (O)</th>
                        <th className="px-3 py-2 text-left text-text-primary">Detectie (D)</th>
                        <th className="px-3 py-2 text-left text-text-primary">RPN</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-t border-white/10">
                        <td className="px-3 py-2">Tandwiel slijtage</td>
                        <td className="px-3 py-2">8</td>
                        <td className="px-3 py-2">6</td>
                        <td className="px-3 py-2">4</td>
                        <td className="px-3 py-2 text-red-400 font-bold">192</td>
                      </tr>
                      <tr className="border-t border-white/10 bg-bg-primary/50">
                        <td className="px-3 py-2">Sensor drift</td>
                        <td className="px-3 py-2">5</td>
                        <td className="px-3 py-2">4</td>
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2 text-yellow-400">60</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-text-secondary text-sm mt-3">
                  RPN = S × O × D. Focus op items met RPN &gt; 100 of Ernst ≥ 8.
                </p>
              </div>

              {/* Tool 7: Gage R&R */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary flex items-center">
                    <span className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400 font-bold">7</span>
                    Gage R&R (Meetsysteemanalyse)
                  </h3>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">Ondergewaardeerd</span>
                </div>
                <p className="text-text-secondary mb-4">
                  Valideer dat je meetsysteem betrouwbaar is voordat je conclusies trekt uit data.
                </p>
                <div className="bg-primary-500/10 rounded-lg p-4">
                  <p className="text-text-secondary">
                    <strong className="text-primary-400">Let op:</strong> Als je meetsysteem 30% van de variatie veroorzaakt,
                    kun je procesprestaties niet betrouwbaar beoordelen. Gage R&R moet &lt;10% zijn voor
                    kritieke metingen, &lt;30% voor algemene metingen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sigma-niveaus" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Gauge className="w-8 h-8 mr-3 text-primary-400" />
              4. Sigma-Niveaus Begrijpen en Berekenen
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Het sigma-niveau van je proces bepalen is essentieel voor benchmarking en doelstelling.
              Hier leer je het te berekenen en interpreteren.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Sigma-Niveau Berekenen in 4 Stappen</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Tel het aantal defecten (D)</h4>
                    <p className="text-text-secondary text-sm">Alle producten/diensten die niet aan specificatie voldoen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Tel het aantal eenheden (U)</h4>
                    <p className="text-text-secondary text-sm">Totaal geproduceerde items in de meetperiode</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Bepaal aantal mogelijke defecten per eenheid (O)</h4>
                    <p className="text-text-secondary text-sm">Hoeveel manieren kan één product defect zijn?</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Bereken DPMO en converteer naar sigma</h4>
                    <p className="text-text-secondary text-sm font-mono">DPMO = (D / (U × O)) × 1.000.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 mb-8 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                <Microscope className="w-5 h-5 mr-2 text-primary-400" />
                Rekenvoorbeeld
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p><strong className="text-text-primary">Situatie:</strong> Een machinefabriek produceert 10.000 onderdelen per maand.</p>
                <p><strong className="text-text-primary">Defecten gevonden:</strong> 45 onderdelen afgekeurd</p>
                <p><strong className="text-text-primary">Defectmogelijkheden per onderdeel:</strong> 5 (maatvoering, oppervlak, hardheid, vorm, kleur)</p>
                <div className="bg-bg-primary rounded-lg p-4 mt-4 font-mono text-sm">
                  <p>DPMO = (45 / (10.000 × 5)) × 1.000.000</p>
                  <p>DPMO = (45 / 50.000) × 1.000.000</p>
                  <p>DPMO = <span className="text-primary-400 font-bold">900</span></p>
                  <p className="mt-2 text-text-primary">→ Dit komt overeen met <span className="text-green-400 font-bold">4.6 sigma</span></p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Belangrijke Kanttekening
              </h4>
              <p className="text-text-secondary">
                De &quot;echte&quot; Six Sigma berekening houdt rekening met een 1.5σ shift voor langetermijn variatie.
                Dit betekent dat een proces dat korte termijn op 6σ presteert, op lange termijn op 4.5σ uitkomt.
                Voor praktische MKB-doeleinden is de korte-termijn sigma-berekening meestal voldoende.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="implementatie-plan" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-primary-400" />
              5. 12-Weken Implementatieplan voor MKB
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Dit bewezen implementatieplan helpt MKB-bedrijven om binnen één kwartaal hun eerste
              Six Sigma project succesvol af te ronden, zonder externe consultants.
            </p>

            <div className="space-y-6">
              {/* Week 1-2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-400 font-bold">1-2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Week 1-2: Voorbereiding & Define</h3>
                    <p className="text-text-secondary text-sm">Fundament leggen</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Activiteiten:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Selecteer het pilotproject (grootste pijn)</li>
                      <li>• Stel projectteam samen (3-5 mensen)</li>
                      <li>• Schrijf Project Charter</li>
                      <li>• Maak SIPOC diagram</li>
                      <li>• Verzamel Voice of Customer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Deliverables:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>✓ Goedgekeurd Project Charter</li>
                      <li>✓ Gedefinieerde CTQs</li>
                      <li>✓ Team kickoff gehouden</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 3-5 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-400 font-bold">3-5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Week 3-5: Measure</h3>
                    <p className="text-text-secondary text-sm">Data verzamelen en baseline bepalen</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Activiteiten:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Ontwikkel meetplan</li>
                      <li>• Valideer meetsysteem (Gage R&R indien nodig)</li>
                      <li>• Verzamel baseline data (min. 30 datapunten)</li>
                      <li>• Bereken huidige sigma-niveau</li>
                      <li>• Maak eerste control charts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Deliverables:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>✓ Baseline data verzameld</li>
                      <li>✓ Huidige Cp/Cpk berekend</li>
                      <li>✓ Sigma-niveau bepaald</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 6-7 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-400 font-bold">6-7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Week 6-7: Analyze</h3>
                    <p className="text-text-secondary text-sm">Grondoorzaken identificeren</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Activiteiten:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Voer Pareto analyse uit</li>
                      <li>• Maak Ishikawa diagram met team</li>
                      <li>• Doe 5x Waarom voor top-oorzaken</li>
                      <li>• Valideer hypotheses met data</li>
                      <li>• Prioriteer grondoorzaken</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Deliverables:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>✓ Top 3-5 grondoorzaken gevalideerd</li>
                      <li>✓ Data-onderbouwing voor elke oorzaak</li>
                      <li>✓ Prioritering vastgesteld</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 8-10 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">8-10</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Week 8-10: Improve</h3>
                    <p className="text-text-secondary text-sm">Oplossingen ontwikkelen en testen</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Activiteiten:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Brainstorm oplossingen per grondoorzaak</li>
                      <li>• Evalueer met impact/effort matrix</li>
                      <li>• Ontwerp pilot voor beste oplossing(en)</li>
                      <li>• Voer pilot uit en meet resultaten</li>
                      <li>• Verfijn en schaal succesvol op</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Deliverables:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>✓ Pilot succesvol afgerond</li>
                      <li>✓ Verbetering gemeten en gedocumenteerd</li>
                      <li>✓ Implementatieplan voor full rollout</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Week 11-12 */}
              <div className="bg-bg-secondary rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">11-12</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">Week 11-12: Control</h3>
                    <p className="text-text-secondary text-sm">Verbetering borgen</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Activiteiten:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Stel control charts in voor monitoring</li>
                      <li>• Update werkprocedures en instructies</li>
                      <li>• Train operators in nieuwe werkwijze</li>
                      <li>• Definieer reactieplan bij afwijkingen</li>
                      <li>• Draag over aan process owner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Deliverables:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>✓ Control plan actief</li>
                      <li>✓ Gedocumenteerde procedures</li>
                      <li>✓ Project closeout rapport</li>
                      <li>✓ ROI berekend en gerapporteerd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="case-studies" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-primary-400" />
              6. Case Studies: Six Sigma in MKB-Praktijk
            </h2>

            <div className="space-y-8">
              {/* Case 1 */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <Cog className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">Precisie Metaalbewerking BV - Verspaning</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Uitdaging:</h4>
                    <p className="text-text-secondary text-sm mb-4">
                      12% afkeurpercentage op CNC-gedraaide onderdelen door maatafwijkingen.
                      Kosten: €180.000/jaar aan uitval en herwerk.
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">Aanpak (DMAIC):</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Pareto: 68% maatfouten door 2 oorzaken</li>
                      <li>• Ishikawa: gereedschapsslijtage + temperatuurvariatie</li>
                      <li>• Oplossing: automatische gereedschapcompensatie + klimaatregeling</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Resultaten na 6 maanden:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Afkeur:</span>
                        <span className="text-green-400 font-semibold">12% → 2,8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Sigma-niveau:</span>
                        <span className="text-green-400 font-semibold">2.8σ → 4.1σ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Besparing:</span>
                        <span className="text-green-400 font-semibold">€138.000/jaar</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Investering:</span>
                        <span className="text-text-secondary">€45.000</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                        <span className="text-text-secondary">Terugverdientijd:</span>
                        <span className="text-primary-400 font-semibold">4 maanden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">FoodPack Nederland - Verpakkingsindustrie</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Uitdaging:</h4>
                    <p className="text-text-secondary text-sm mb-4">
                      Klachten over lekke verpakkingen (8 per 10.000). Risico op productveiligheid
                      en verlies van A-merk klant.
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">Aanpak (DMAIC):</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Gage R&R: meetsysteem 45% variatie → verbeterd</li>
                      <li>• 5x Waarom: sealgum inconsistente temperatuur</li>
                      <li>• Oplossing: PID-regeling + voorverwarmzone</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Resultaten na 4 maanden:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Lekklachten:</span>
                        <span className="text-blue-400 font-semibold">8 → 0,3 per 10.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Sigma-niveau:</span>
                        <span className="text-blue-400 font-semibold">3.9σ → 5.4σ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Klant behouden:</span>
                        <span className="text-blue-400 font-semibold">€2.1M/jaar omzet</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Investering:</span>
                        <span className="text-text-secondary">€28.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <Ruler className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-text-primary">Kunststof Techniek Oost - Spuitgieten</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Uitdaging:</h4>
                    <p className="text-text-secondary text-sm mb-4">
                      Hoge cyclustijdvariatie (22-35 sec) en 6% uitval door verzakkingen en
                      brandplekken in spuitgietproducten.
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">Aanpak (DMAIC):</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>• Control charts: 3 van 8 machines out-of-control</li>
                      <li>• DOE (Design of Experiments) op procesparameters</li>
                      <li>• Oplossing: geoptimaliseerde parameters + preventief onderhoud</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Resultaten na 5 maanden:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Cyclustijd:</span>
                        <span className="text-purple-400 font-semibold">28 ± 6 → 25 ± 1,5 sec</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Uitval:</span>
                        <span className="text-purple-400 font-semibold">6% → 1,2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">OEE:</span>
                        <span className="text-purple-400 font-semibold">62% → 78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Besparing:</span>
                        <span className="text-purple-400 font-semibold">€210.000/jaar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="valkuilen" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 mr-3 text-primary-400" />
              7. Valkuilen bij Six Sigma en Hoe te Vermijden
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Veel Six Sigma initiatieven mislukken niet door de methodologie, maar door de implementatie.
              Leer van de meest voorkomende fouten.
            </p>

            <div className="space-y-6">
              {/* Valkuil 1 */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Te Groot Project Kiezen</h3>
                    <p className="text-text-secondary mb-3">
                      Het eerste project proberen om de complete fabriek te transformeren in plaats van
                      een afgebakend probleem aan te pakken.
                    </p>
                    <div className="bg-bg-primary rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2">✓ Oplossing:</h4>
                      <p className="text-text-secondary text-sm">
                        Kies een project met maximaal 12 weken doorlooptijd, één duidelijke CTQ,
                        en meetbare baseline. Succes op klein project creëert momentum voor grotere projecten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valkuil 2 */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Alleen Tools, Geen Cultuur</h3>
                    <p className="text-text-secondary mb-3">
                      Focus op statistiek en tools zonder de onderliggende cultuur van continue
                      verbetering en datagedreven besluitvorming te bouwen.
                    </p>
                    <div className="bg-bg-primary rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2">✓ Oplossing:</h4>
                      <p className="text-text-secondary text-sm">
                        Betrek operators actief bij het project. Maak data visueel op de werkvloer.
                        Vier kleine successen. Six Sigma moet leven op de vloer, niet alleen in de boardroom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valkuil 3 */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Analyze Paralysis</h3>
                    <p className="text-text-secondary mb-3">
                      Eindeloos data verzamelen en analyseren zonder ooit naar de Improve fase te gaan.
                      &quot;We hebben nog niet genoeg data.&quot;
                    </p>
                    <div className="bg-bg-primary rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2">✓ Oplossing:</h4>
                      <p className="text-text-secondary text-sm">
                        Stel tijdslimieten per fase. 80% zekerheid is genoeg om te piloten.
                        Valideer met snelle experimenten in plaats van perfecte analyse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valkuil 4 */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Control Fase Vergeten</h3>
                    <p className="text-text-secondary mb-3">
                      Het project &quot;afronden&quot; na de Improve fase zonder adequate borging.
                      Binnen 6 maanden is het oude gedrag terug.
                    </p>
                    <div className="bg-bg-primary rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2">✓ Oplossing:</h4>
                      <p className="text-text-secondary text-sm">
                        Budget minimaal 20% van projecttijd voor Control. Implementeer visuele control charts.
                        Definieer een process owner die verantwoordelijk blijft na projectafsluiting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valkuil 5 */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Geen Management Support</h3>
                    <p className="text-text-secondary mb-3">
                      Six Sigma als &quot;iets van kwaliteit&quot; zonder actieve betrokkenheid van directie/MT.
                      Teamleden krijgen geen tijd vrijgemaakt.
                    </p>
                    <div className="bg-bg-primary rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2">✓ Oplossing:</h4>
                      <p className="text-text-secondary text-sm">
                        Zorg dat een MT-lid sponsor is van het project. Rapporteer wekelijks voortgang.
                        Koppel projectresultaten aan bedrijfsdoelstellingen en bonussen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="roi-berekenen" className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-primary-400" />
              8. ROI van Six Sigma Berekenen
            </h2>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Een goed onderbouwde business case is essentieel voor management buy-in.
              Hier is een praktische methode om de ROI van Six Sigma projecten te berekenen.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 mb-8 border border-white/10">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Kostencategorieën bij Slechte Kwaliteit (COPQ)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-3">Interne Faalkosten</h4>
                  <ul className="text-text-secondary text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      Uitval en scrap
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      Herwerk en reparatie
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      Stilstand door kwaliteitsproblemen
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      Extra inspectietijd
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-3">Externe Faalkosten</h4>
                  <ul className="text-text-secondary text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      Klachtenafhandeling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      Garantiekosten
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      Retouren en vervangingen
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                      Verloren klanten (verborgen)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-xl p-6 mb-8 border border-primary-500/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">ROI Rekenvoorbeeld</h3>

              <div className="space-y-4 text-text-secondary">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2">Huidige Situatie</h4>
                    <ul className="text-sm space-y-1">
                      <li>Productie: 50.000 stuks/jaar</li>
                      <li>Afkeur: 8% = 4.000 stuks</li>
                      <li>Kosten per afkeur: €25</li>
                      <li>Uitvalkosten: €100.000/jaar</li>
                      <li>+ Herwerk: €30.000/jaar</li>
                      <li>+ Klachten: €20.000/jaar</li>
                      <li className="font-semibold text-red-400 pt-2 border-t border-white/10">Totaal COPQ: €150.000/jaar</li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Na Six Sigma Project</h4>
                    <ul className="text-sm space-y-1">
                      <li>Productie: 50.000 stuks/jaar</li>
                      <li>Afkeur: 2% = 1.000 stuks</li>
                      <li>Kosten per afkeur: €25</li>
                      <li>Uitvalkosten: €25.000/jaar</li>
                      <li>+ Herwerk: €8.000/jaar</li>
                      <li>+ Klachten: €5.000/jaar</li>
                      <li className="font-semibold text-green-400 pt-2 border-t border-white/10">Totaal COPQ: €38.000/jaar</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-bg-secondary rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-text-primary mb-3">ROI Berekening</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-text-secondary">Jaarlijkse Besparing</p>
                      <p className="text-2xl font-bold text-green-400">€112.000</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Projectinvestering</p>
                      <p className="text-2xl font-bold text-text-primary">€35.000</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">ROI (Jaar 1)</p>
                      <p className="text-2xl font-bold text-primary-400">220%</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mt-3 text-center">
                    Terugverdientijd: 3,7 maanden
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-primary-400 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Benchmark: Typische Six Sigma ROI
              </h4>
              <p className="text-text-secondary mb-4">
                Volgens onderzoek van de American Society for Quality (ASQ) levert een gemiddeld Six Sigma project:
              </p>
              <ul className="text-text-secondary space-y-2">
                <li>• <strong className="text-text-primary">€50.000 - €175.000</strong> besparing per project</li>
                <li>• <strong className="text-text-primary">200-400%</strong> ROI in het eerste jaar</li>
                <li>• <strong className="text-text-primary">3-6 maanden</strong> terugverdientijd</li>
              </ul>
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
                  q: "Hebben we een Black Belt nodig om Six Sigma toe te passen?",
                  a: "Nee, voor de meeste MKB-projecten is een Green Belt niveau voldoende, of zelfs gewoon kennis van de basis DMAIC-tools. Black Belts zijn vooral waardevol voor complexe, statistische analyses of wanneer je meerdere projecten parallel wilt uitvoeren."
                },
                {
                  q: "Hoe lang duurt het om Six Sigma te implementeren?",
                  a: "Een eerste pilotproject kun je binnen 12 weken afronden. Voor een organisatiebrede cultuurverandering moet je 2-3 jaar rekenen. Start klein, bewijs de waarde, en schaal dan op."
                },
                {
                  q: "Wat kost Six Sigma implementatie voor een MKB?",
                  a: "Reken op €5.000-€15.000 voor een eerste project (training, tools, eventueel externe begeleiding eerste project). De meeste bedrijven verdienen dit binnen 6 maanden terug. Zonder externe hulp zijn de kosten vooral in tijd van medewerkers."
                },
                {
                  q: "Kunnen we Six Sigma combineren met Lean?",
                  a: "Absoluut, dat is zelfs aan te raden. Lean Six Sigma combineert het beste van beide: Lean voor snelheid en verspillingseliminatie, Six Sigma voor kwaliteit en variatiereductie. Start met Lean voor quick wins, gebruik Six Sigma voor complexere kwaliteitsproblemen."
                },
                {
                  q: "Wat is het verschil tussen Green Belt en Black Belt?",
                  a: "Green Belts werken part-time aan projecten naast hun reguliere functie, focussen op eenvoudigere analyses. Black Belts werken full-time aan Six Sigma, leiden complexe projecten, en coachen Green Belts. Voor MKB zijn 2-3 Green Belts vaak voldoende."
                },
                {
                  q: "Werkt Six Sigma ook voor dienstverlenende bedrijven?",
                  a: "Ja, Six Sigma is ook zeer effectief in dienstverlening. Denk aan doorlooptijd van orderafhandeling, foutpercentage in facturatie, klanttevredenheid. De tools zijn dezelfde, alleen de 'producten' zijn minder tastbaar."
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
                Conclusie: Six Sigma als Concurrentievoordeel voor MKB
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Six Sigma is geen exclusief domein voor grote multinationals. Met een pragmatische aanpak
                kunnen MKB-productiebedrijven dezelfde krachtige tools gebruiken om kwaliteit te verbeteren,
                kosten te verlagen en klanten te behouden. Het geheim zit niet in de complexiteit van de
                statistiek, maar in de discipline om data-gedreven beslissingen te nemen.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">70%</div>
                  <div className="text-sm text-text-secondary">Minder uitval haalbaar</div>
                </div>
                <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">12 weken</div>
                  <div className="text-sm text-text-secondary">Tot eerste resultaten</div>
                </div>
                <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-400">€50K+</div>
                  <div className="text-sm text-text-secondary">Besparing per project</div>
                </div>
              </div>
              <p className="text-text-secondary">
                Begin vandaag met het identificeren van je grootste kwaliteitsprobleem. Verzamel data.
                Analyseer de grondoorzaken. Test oplossingen. Borg de verbetering. En herhaal. Dat is
                Six Sigma in de praktijk.
              </p>
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
                  <p className="text-primary-400 text-sm mb-3">Procesoptimalisatie Expert | Proces360</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Rob combineert 15+ jaar ervaring in productieomgevingen met een pragmatische kijk op
                    kwaliteitsverbetering. Hij heeft Six Sigma projecten begeleid bij tientallen MKB-bedrijven
                    en gelooft dat de beste resultaten komen van eenvoudige, goed uitgevoerde verbeteringen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Klaar om kwaliteit te verbeteren met Six Sigma?
              </h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Ontdek hoe Proces360 je kan helpen bij het opzetten van een succesvol Six Sigma programma,
                van pilotproject tot organisatiebrede implementatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?subject=360scan"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Plan uw 360Scan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/diensten/procesoptimalisatie"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
                >
                  Bekijk Procesoptimalisatie
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
                  description: "Verhoog je Overall Equipment Effectiveness met bewezen methodieken.",
                  href: "/blog/oee-verbeteren-complete-gids",
                  tag: "OEE"
                },
                {
                  title: "Productie KPIs Meten",
                  description: "De 15 belangrijkste KPIs voor MKB-productiebedrijven.",
                  href: "/blog/productie-kpis-complete-gids",
                  tag: "KPIs"
                },
                {
                  title: "Procesoptimalisatie Roadmap",
                  description: "Van eerste analyse tot volledig geoptimaliseerde productie.",
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
                { href: "/diensten/procesoptimalisatie", title: "Procesoptimalisatie", desc: "Six Sigma en Lean implementatie" },
                { href: "/diensten/oee-verbetering", title: "OEE Verbetering", desc: "Verhoog machine-effectiviteit" },
                { href: "/diensten/cobot-integratie", title: "Cobot Integratie", desc: "Automatiseer repetitieve taken" },
                { href: "/diensten/industriele-automatisering", title: "Industriële Automatisering", desc: "End-to-end automatisering" },
                { href: "/diensten/productie-dashboards", title: "Productie Dashboards", desc: "Real-time kwaliteitsdata" },
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
        <BlogCTA />
      </article>
    </main>
  );
}
