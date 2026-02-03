'use client';

import Link from 'next/link';
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
  Users
} from 'lucide-react';

export default function CaseStudy69kBesparingPage() {
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
            <span className="text-text-primary">360Scan Case Study</span>
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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              360Scan Resultaat
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
            €69.000+ Besparingspotentieel Ontdekt met Eén 360Scan
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Hoe een MKB-maakbedrijf in slechts één dag ontdekte waar meer dan €69.000
            aan jaarlijkse besparingen verborgen zat — met kleine, praktische ingrepen
            die direct uitvoerbaar waren.
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
              <span>6 min leestijd</span>
            </div>
          </div>
        </header>

        {/* Key Results Banner */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">€69.000+</div>
            <div className="text-green-100 text-sm">Jaarlijks besparingspotentieel</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">1 dag</div>
            <div className="text-blue-100 text-sm">Doorlooptijd 360Scan</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-1">5 quick wins</div>
            <div className="text-orange-100 text-sm">Direct uitvoerbaar</div>
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
                De kern van dit verhaal
              </h3>
              <p className="text-text-secondary">
                Grote besparingen zitten vaak niet in grote investeringen. Dit bedrijf ontdekte
                dat kleine aanpassingen in werkwijze, omsteltijden en materiaalflow samen
                meer dan €69.000 per jaar konden opleveren — zonder nieuwe machines of grote projecten.
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
            Een metaalbewerkingsbedrijf met 35 medewerkers kwam bij ons met een herkenbaar
            verhaal: &quot;We draaien goed, maar we hebben het gevoel dat er meer in zit.&quot;
            De machines draaiden, orders werden geleverd, maar de directeur had het gevoel
            dat de productie niet optimaal liep.
          </p>

          <div className="bg-bg-secondary rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Bedrijfsprofiel</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">35 medewerkers</span>
              </div>
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">Metaalbewerking / Verspaning</span>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">High-mix, low-volume productie</span>
              </div>
              <div className="flex items-center gap-3">
                <Euro className="w-5 h-5 text-primary-500" />
                <span className="text-text-secondary">~€4M jaaromzet</span>
              </div>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">
            Het bedrijf had geen grote problemen — geen brandjes die geblust moesten worden.
            Maar juist daarom was het lastig om te zien waar verbeterpotentieel zat.
            Ze besloten een 360Scan te laten uitvoeren om objectief in kaart te brengen
            waar de kansen lagen.
          </p>
        </section>

        {/* De 360Scan Aanpak */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary-500" />
            De 360Scan Aanpak
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            In één dag hebben we een complete doorlichting gedaan van de productie.
            Niet met dikke rapporten en maandenlange analyses, maar met concrete observaties
            op de werkvloer, gesprekken met operators en een scherpe blik op de cijfers.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Ochtend: Werkvloer observatie</h4>
                <p className="text-text-secondary text-sm">
                  Meelopen met operators, omstelprocessen observeren, materiaalstromen in kaart brengen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Middag: Data-analyse</h4>
                <p className="text-text-secondary text-sm">
                  Productiecijfers analyseren, OEE berekenen, stilstandoorzaken identificeren
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-bg-secondary rounded-lg p-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Einde dag: Bevindingen presenteren</h4>
                <p className="text-text-secondary text-sm">
                  Concrete quick wins presenteren met geschatte impact en implementatie-aanpak
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* De Bevindingen */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary-500" />
            De 5 Quick Wins: €69.000+ Besparing
          </h2>

          <p className="text-text-secondary mb-8 leading-relaxed">
            Wat we vonden waren geen grote verborgen problemen, maar vijf concrete
            verbeterpunten die samen een enorme impact hadden. Het mooie: geen van deze
            verbeteringen vereiste grote investeringen.
          </p>

          {/* Quick Win 1 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">1. Omsteltijd CNC-freesmachines</h3>
                  <p className="text-sm text-text-secondary">SMED-principes toepassen</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€28.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              De omsteltijden varieerden enorm tussen operators — van 25 tot 55 minuten voor
              dezelfde productwissel. Door de beste werkwijze te standaardiseren en gereedschap
              vooraf klaar te zetten, kon de gemiddelde omsteltijd met 40% omlaag.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 2-3 weken, geen investering nodig</span>
            </div>
          </div>

          {/* Quick Win 2 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">2. Materiaalflow optimalisatie</h3>
                  <p className="text-sm text-text-secondary">Loopafstanden en zoektijd reduceren</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€18.500</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Operators liepen gemiddeld 45 minuten per dag om materiaal te zoeken en te halen.
              Door een eenvoudige herinrichting van de werkvloer en duidelijke labeling kon dit
              naar 15 minuten — 30 minuten productietijd per operator per dag gewonnen.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 1 weekend, ~€2.000 investering</span>
            </div>
          </div>

          {/* Quick Win 3 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">3. Afkeur reduceren lasersnijder</h3>
                  <p className="text-sm text-text-secondary">Eerste-stuk controle verbeteren</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€12.000</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              De lasersnijder had een afkeurpercentage van 4,2%, voornamelijk door fouten in
              de eerste stukken van een serie. Een simpele checklist en meetprotocol voor
              eerste-stuk vrijgave bracht dit terug naar onder 1,5%.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 1 week, geen investering nodig</span>
            </div>
          </div>

          {/* Quick Win 4 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">4. Preventief onderhoud schema</h3>
                  <p className="text-sm text-text-secondary">Van reactief naar gepland onderhoud</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€7.500</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Ongeplande stilstand door kleine storingen kostte gemiddeld 6 uur per week.
              Een basisschema voor dagelijks en wekelijks preventief onderhoud — uitgevoerd
              door de operators zelf — reduceerde dit naar minder dan 2 uur per week.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: 2 weken, ~€500 voor checklists/borden</span>
            </div>
          </div>

          {/* Quick Win 5 */}
          <div className="bg-bg-secondary border border-divider rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">5. Planning volgorde optimalisatie</h3>
                  <p className="text-sm text-text-secondary">Slimmer clusteren van orders</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-500">€3.200</div>
                <div className="text-sm text-text-secondary">per jaar</div>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              Orders werden gepland op binnenkomst, niet op efficiëntie. Door orders met
              vergelijkbare setups te clusteren en de volgorde te optimaliseren, werden
              15% minder omstellingen per week nodig.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-text-secondary">Implementatie: Direct, aanpassing werkwijze planner</span>
            </div>
          </div>

          {/* Totaal */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Totaal besparingspotentieel</h3>
                <p className="text-green-100">5 quick wins, minimale investeringen</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">€69.200</div>
                <div className="text-green-100">per jaar</div>
              </div>
            </div>
          </div>
        </section>

        {/* De Reactie */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary-500" />
            De Reactie van de Directeur
          </h2>

          <blockquote className="bg-bg-secondary border-l-4 border-primary-500 rounded-r-xl p-6 mb-6">
            <p className="text-lg text-text-primary italic mb-4">
              &quot;Ik dacht dat we wel goed bezig waren, en dat klopt ook. Maar wat me verbaasde
              is hoeveel geld we op tafel lieten liggen met kleine dingen die we over het hoofd
              zagen. Geen van deze verbeteringen vraagt een grote investering — het is vooral
              een kwestie van anders werken.&quot;
            </p>
            <footer className="text-text-secondary">
              — Directeur metaalbewerkingsbedrijf
            </footer>
          </blockquote>

          <p className="text-text-secondary leading-relaxed">
            Dit is precies waarom de 360Scan zo waardevol is. Niet omdat er altijd grote
            problemen zijn, maar omdat een frisse, objectieve blik ziet wat je zelf over
            het hoofd ziet. Na 10 jaar werken in dezelfde productie word je blind voor
            inefficiënties die een buitenstaander direct opvallen.
          </p>
        </section>

        {/* Wat We Leerden */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Wat Deze Case Ons Leert
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Kleine dingen tellen op
              </h3>
              <p className="text-text-secondary text-sm">
                5 &quot;kleine&quot; verbeteringen samen waren goed voor €69.000+ per jaar.
                Geen enkele individueel spectaculair, maar samen enorm impactvol.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Je hoeft niet ziek te zijn om beter te worden
              </h3>
              <p className="text-text-secondary text-sm">
                Dit bedrijf draaide prima. Toch zat er €69.000 verborgen potentieel.
                Optimalisatie is geen brandjes blussen — het is continu verbeteren.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Euro className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                ROI binnen weken
              </h3>
              <p className="text-text-secondary text-sm">
                De totale investering voor alle 5 verbeteringen was onder €3.000.
                Bij €69.000 jaarlijkse besparing is de terugverdientijd minder dan 2 weken.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Externe blik is waardevol
              </h3>
              <p className="text-text-secondary text-sm">
                Na jaren in dezelfde omgeving zie je inefficiënties niet meer.
                Een objectieve 360Scan brengt in één dag in kaart wat je zelf mist.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Hoeveel verborgen potentieel zit er in jouw productie?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Een 360Scan brengt in één dag objectief in kaart waar jouw verbeterkansen liggen.
              Geen dikke rapporten, maar concrete quick wins met directe impact.
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
      </article>
    </main>
  );
}
