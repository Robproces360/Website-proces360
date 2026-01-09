'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Calculator, CheckCircle, AlertTriangle, TrendingUp, Target, BarChart3, Settings, Factory, Wrench, Lightbulb, Award, FileText, HelpCircle, ArrowRight, Bot } from 'lucide-react';

export default function OEEArticlePage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar blog
          </Link>
        </nav>

        {/* Meta */}
        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full mb-4">
            OEE & Procesoptimalisatie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            OEE Verbeteren: De Complete Gids voor Productiebedrijven in 2025
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Alles wat je moet weten over Overall Equipment Effectiveness: van berekening tot praktische verbetermethodes.
            Inclusief 8 praktijkcases, benchmark-data, en een bewezen stappenplan om van 55% naar 85%+ OEE te gaan.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Rob Derks
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              15 april 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              25 min leestijd
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Inhoudsopgave</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#wat-is-oee" className="hover:text-primary-500 transition-colors">1. Wat is OEE? Definitie en Belang</a></li>
            <li><a href="#oee-berekenen" className="hover:text-primary-500 transition-colors">2. OEE Berekenen: Formules en Voorbeelden</a></li>
            <li><a href="#oee-benchmarks" className="hover:text-primary-500 transition-colors">3. OEE Benchmarks per Industrie</a></li>
            <li><a href="#6-grote-verliezen" className="hover:text-primary-500 transition-colors">4. De 6 Grote Verliezen (TPM)</a></li>
            <li><a href="#praktijkcases" className="hover:text-primary-500 transition-colors">5. 8 Praktijkcases: Van 45% naar 85% OEE</a></li>
            <li><a href="#oee-verbeteren" className="hover:text-primary-500 transition-colors">6. OEE Verbeteren: 15 Bewezen Strategieën</a></li>
            <li><a href="#oee-meten" className="hover:text-primary-500 transition-colors">7. OEE Meten: Tools en Dashboards</a></li>
            <li><a href="#veelgemaakte-fouten" className="hover:text-primary-500 transition-colors">8. 10 Veelgemaakte Fouten bij OEE</a></li>
            <li><a href="#implementatie" className="hover:text-primary-500 transition-colors">9. OEE Implementatie Stappenplan</a></li>
            <li><a href="#faq" className="hover:text-primary-500 transition-colors">10. Veelgestelde Vragen (FAQ)</a></li>
            <li><a href="#aan-de-slag" className="hover:text-primary-500 transition-colors">11. Direct aan de Slag</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          {/* Intro */}
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> De gemiddelde MKB-fabriek scoort een OEE van 45-55%.
              World-class fabrieken scoren 85%+. Het verschil? <strong>€100.000 tot €500.000 per jaar</strong> aan onbenutte capaciteit.
              In dit artikel leer je precies hoe je van gemiddeld naar excellent gaat, met bewezen methodes uit 50+ OEE-projecten.
            </p>
          </div>

          {/* Section 1 */}
          <section id="wat-is-oee" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-500" />
              1. Wat is OEE? Definitie en Belang
            </h2>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">OEE staat voor Overall Equipment Effectiveness</strong> – in het Nederlands:
              Totale Effectiviteit van Apparatuur. Het is wereldwijd dé standaard KPI om te meten hoe effectief je productieapparatuur
              daadwerkelijk wordt ingezet ten opzichte van het theoretisch maximum.
            </p>
            <p className="text-gray-300 mb-4">
              OEE combineert drie kritieke factoren in één percentage:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Beschikbaarheid (Availability)</strong> – Hoeveel % van de geplande productietijd draait de machine daadwerkelijk? (Uitval door storingen, omstellen, opstarten)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Prestatie (Performance)</strong> – Draait de machine op de theoretische maximale snelheid? (Micro-stops, vertraagde cyclustijd)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Kwaliteit (Quality)</strong> – Hoeveel % van de output is direct goed? (Geen afkeur, uitval, of herwerk)</span>
              </li>
            </ul>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Waarom is OEE Zo Belangrijk?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Verborgen Fabriek Ontdekken</p>
                    <p className="text-gray-400 text-sm">OEE maakt zichtbaar dat je fabriek vaak maar op 50-60% van de werkelijke capaciteit draait.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Data-Gedreven Beslissingen</p>
                    <p className="text-gray-400 text-sm">Objectieve meting in plaats van buikgevoel. Focus verbeterenergie waar het het meeste oplevert.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Investering Uitstellen</p>
                    <p className="text-gray-400 text-sm">OEE van 55% naar 75% = 36% meer output uit dezelfde machines. Geen nieuwe investering nodig.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Standaard Benchmark</p>
                    <p className="text-gray-400 text-sm">OEE is universeel – vergelijk prestaties tussen machines, lijnen, shifts en zelfs bedrijven.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300">
              Het mooie van OEE is dat het de <strong className="text-white">&quot;verborgen fabriek&quot;</strong> zichtbaar maakt.
              Je denkt misschien dat je fabriek op 80% capaciteit draait, maar als je echt gaat meten,
              blijkt de OEE vaak 50-60% te zijn. Dat betekent dat er 40-50% capaciteit onbenut blijft –
              zonder dat je een extra machine hoeft te kopen.
            </p>
          </section>

          {/* Section 2 */}
          <section id="oee-berekenen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-primary-500" />
              2. OEE Berekenen: Formules en Voorbeelden
            </h2>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-2xl font-mono text-primary-500 text-center mb-4">
                OEE = Beschikbaarheid × Prestatie × Kwaliteit
              </p>
              <p className="text-gray-400 text-center text-sm">
                Alle drie factoren zijn een percentage (0-100%). OEE is dus altijd lager dan de laagste factor.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">De Drie OEE-Componenten Uitgelegd</h3>

            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-400 mb-2">Beschikbaarheid (Availability)</h4>
                <p className="font-mono text-green-400 mb-2">= (Draaitijd / Geplande productietijd) × 100%</p>
                <p className="text-gray-300 text-sm">Meet hoeveel van de geplande tijd de machine daadwerkelijk draaide. Verlies komt van: storingen, omsteltijd, wachttijd, opstarten.</p>
                <p className="text-gray-400 text-xs mt-2">Voorbeeld: 480 min gepland, 420 min gedraaid = 87.5% beschikbaarheid</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Prestatie (Performance)</h4>
                <p className="font-mono text-yellow-400 mb-2">= (Werkelijke output / Theoretische output) × 100%</p>
                <p className="text-gray-300 text-sm">Meet of de machine op nominale snelheid draait. Verlies komt van: micro-stops, vertraagde cyclustijd, lager tempo.</p>
                <p className="text-gray-400 text-xs mt-2">Voorbeeld: 3150 stuks geproduceerd, 4200 theoretisch mogelijk = 75% prestatie</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Kwaliteit (Quality)</h4>
                <p className="font-mono text-blue-400 mb-2">= (Goede producten / Totaal geproduceerd) × 100%</p>
                <p className="text-gray-300 text-sm">Meet hoeveel van de output direct goed is. Verlies komt van: afkeur, herwerk, opstartuitval.</p>
                <p className="text-gray-400 text-xs mt-2">Voorbeeld: 3055 goed van 3150 geproduceerd = 97% kwaliteit</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Compleet Rekenvoorbeeld</h3>
            <p className="text-gray-300 mb-4">
              Stel je hebt een CNC-freesmachine met de volgende gegevens voor één shift:
            </p>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-bg-primary rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Beschikbaarheid</p>
                  <p className="text-3xl font-bold text-green-500">87.5%</p>
                  <p className="text-xs text-gray-500 mt-2">420 van 480 minuten gedraaid</p>
                  <p className="text-xs text-gray-600 mt-1">60 min verloren aan storingen en omstellen</p>
                </div>
                <div className="text-center p-4 bg-bg-primary rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Prestatie</p>
                  <p className="text-3xl font-bold text-yellow-500">75%</p>
                  <p className="text-xs text-gray-500 mt-2">3150 stuks van 4200 theoretisch</p>
                  <p className="text-xs text-gray-600 mt-1">Machine draait onder nominale snelheid</p>
                </div>
                <div className="text-center p-4 bg-bg-primary rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Kwaliteit</p>
                  <p className="text-3xl font-bold text-blue-500">97%</p>
                  <p className="text-xs text-gray-500 mt-2">3055 goed van 3150 stuks</p>
                  <p className="text-xs text-gray-600 mt-1">95 stuks afkeur (3%)</p>
                </div>
              </div>
              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">OEE Score</p>
                <p className="text-4xl font-bold text-primary-500">63.7%</p>
                <p className="text-sm text-gray-400 mt-2">0.875 × 0.75 × 0.97 = 0.637</p>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">Belangrijke Inzicht</h4>
                  <p className="text-gray-300 m-0">
                    Elk onderdeel lijkt &quot;acceptabel&quot; (87.5%, 75%, 97%), maar gecombineerd verlies je <strong className="text-white">meer dan een derde</strong> van je productiecapaciteit.
                    Dit is de kracht van OEE: het maakt de multiplicatieve impact van kleine verliezen zichtbaar.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300">
              Dit voorbeeld toont een typische MKB-situatie. De grootste winst zit hier in <strong className="text-white">Prestatie (75%)</strong>.
              Door micro-stops te elimineren en cyclustijd te optimaliseren, kun je naar 85%+ prestatie.
              Dat verhoogt de OEE van 63.7% naar 73.9% – een stijging van 16% output uit dezelfde machine.
            </p>
          </section>

          {/* Section 3 */}
          <section id="oee-benchmarks" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-500" />
              3. OEE Benchmarks per Industrie
            </h2>
            <p className="text-gray-300 mb-6">
              Wat is een &quot;goede&quot; OEE? Dit hangt af van je industrie, producttype en productiecomplexiteit.
              Hier zijn realistische benchmarks gebaseerd op data uit honderden productiebedrijven:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-red-500 mb-2">&lt;50%</p>
                <p className="text-white font-medium">Slecht</p>
                <p className="text-sm text-gray-400 mt-2">Veel ruimte voor verbetering. Urgente actie nodig. Focus op de &quot;laaghangend fruit&quot;.</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-yellow-500 mb-2">50-70%</p>
                <p className="text-white font-medium">Gemiddeld</p>
                <p className="text-sm text-gray-400 mt-2">Typisch voor MKB. Structurele verbeteringen mogelijk. Quick wins beschikbaar.</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-green-500 mb-2">85%+</p>
                <p className="text-white font-medium">World-Class</p>
                <p className="text-sm text-gray-400 mt-2">Excellente prestatie. Focus verschuift naar behoud en fine-tuning.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">OEE Benchmarks per Sector</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-bold">Industrie</th>
                    <th className="text-left py-4 px-4 text-red-400 font-bold">Typisch MKB</th>
                    <th className="text-left py-4 px-4 text-yellow-400 font-bold">Goed</th>
                    <th className="text-left py-4 px-4 text-green-400 font-bold">World-Class</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Metaalbewerking (CNC)</td>
                    <td className="py-4 px-4">45-55%</td>
                    <td className="py-4 px-4">65-75%</td>
                    <td className="py-4 px-4">80-85%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Kunststof spuitgieten</td>
                    <td className="py-4 px-4">55-65%</td>
                    <td className="py-4 px-4">70-80%</td>
                    <td className="py-4 px-4">85-90%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Voedingsindustrie</td>
                    <td className="py-4 px-4">50-60%</td>
                    <td className="py-4 px-4">65-75%</td>
                    <td className="py-4 px-4">80-85%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Farmaceutisch</td>
                    <td className="py-4 px-4">40-50%</td>
                    <td className="py-4 px-4">55-65%</td>
                    <td className="py-4 px-4">70-80%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Assemblage</td>
                    <td className="py-4 px-4">55-65%</td>
                    <td className="py-4 px-4">70-80%</td>
                    <td className="py-4 px-4">85-92%</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Verpakkingslijnen</td>
                    <td className="py-4 px-4">50-60%</td>
                    <td className="py-4 px-4">70-80%</td>
                    <td className="py-4 px-4">85-95%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <p className="text-white m-0">
                <strong>Belangrijk:</strong> Een score van 100% OEE is theoretisch onhaalbaar en ook niet wenselijk.
                Het zou betekenen: nul stilstand, perfecte snelheid, nul defecten – altijd.
                Streven naar 85% is realistisch en excellent. Boven 90% worden verbeteringen exponentieel duurder.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="6-grote-verliezen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary-500" />
              4. De 6 Grote Verliezen (TPM)
            </h2>
            <p className="text-gray-300 mb-6">
              Het Total Productive Maintenance (TPM) framework definieert 6 categorieën van OEE-verlies.
              Door te begrijpen waar je verlies zit, kun je gericht verbeteren. Hier is een gedetailleerd overzicht:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-red-400 mb-4">Beschikbaarheidsverliezen (Downtime Losses)</h4>
                <div className="space-y-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">1</span>
                      <div>
                        <h5 className="text-white font-bold">Storingen (Equipment Failure)</h5>
                        <p className="text-gray-400 text-sm mt-1">Ongeplande stilstand door defecten, mechanische problemen, elektrische storingen.</p>
                        <p className="text-gray-500 text-xs mt-2">Typisch verlies: 5-15% | Oplossing: Preventief onderhoud, TPM, conditiemonitoring</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">2</span>
                      <div>
                        <h5 className="text-white font-bold">Omstellen & Opstart (Setup & Adjustment)</h5>
                        <p className="text-gray-400 text-sm mt-1">Tijd voor productwissels, toolwissels, instellen, opwarmen, kalibratie.</p>
                        <p className="text-gray-500 text-xs mt-2">Typisch verlies: 5-20% | Oplossing: SMED (Single Minute Exchange of Die)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-yellow-400 mb-4">Prestatieverliezen (Speed Losses)</h4>
                <div className="space-y-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold">3</span>
                      <div>
                        <h5 className="text-white font-bold">Micro-Stops (Minor Stoppages)</h5>
                        <p className="text-gray-400 text-sm mt-1">Korte onderbrekingen &lt;5 minuten: vastlopers, sensorstoringen, materiaal op, handmatige interventies.</p>
                        <p className="text-gray-500 text-xs mt-2">Typisch verlies: 5-15% | Oplossing: 5 Why analyse, automatisering, cobot-integratie</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold">4</span>
                      <div>
                        <h5 className="text-white font-bold">Snelheidsverlies (Reduced Speed)</h5>
                        <p className="text-gray-400 text-sm mt-1">Machine draait onder nominale snelheid: slijtage, suboptimale instellingen, voorzichtigheid operators.</p>
                        <p className="text-gray-500 text-xs mt-2">Typisch verlies: 5-15% | Oplossing: Cyclustijd-analyse, parameter-optimalisatie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-4">Kwaliteitsverliezen (Quality Losses)</h4>
                <div className="space-y-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">5</span>
                      <div>
                        <h5 className="text-white font-bold">Opstartafkeur (Startup Rejects)</h5>
                        <p className="text-gray-400 text-sm mt-1">Defecten bij opstart na omstellen, onderhoud, of shiftwissel. Eerste stuks zijn vaak niet goed.</p>
                        <p className="text-gray-500 text-xs mt-2">Typisch verlies: 1-5% | Oplossing: Gestandaardiseerde opstartprocedures, eerste-stuk controle</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">6</span>
                      <div>
                        <h5 className="text-white font-bold">Productieafkeur (Production Rejects)</h5>
                        <p className="text-gray-400 text-sm mt-1">Defecten tijdens reguliere productie: maatafwijkingen, oppervlaktefouten, assemblageproblemen.</p>
                        <p className="text-gray-500 text-xs mt-2">Typisch verlies: 1-5% | Oplossing: SPC, Poka-Yoke, 100% inspectie met vision</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Prioriteit bepalen: Pareto-analyse</h4>
              <p className="text-gray-300 m-0">
                In de meeste fabrieken veroorzaakt <strong className="text-white">20% van de problemen 80% van het OEE-verlies</strong> (Pareto-principe).
                Start met een Pareto-analyse van je stilstandredenen. Focus verbeterenergie op de top 3 oorzaken –
                daar zit het meeste rendement.
              </p>
            </div>
          </section>

          {/* Section 5 - Case Studies */}
          <section id="praktijkcases" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Factory className="w-8 h-8 text-primary-500" />
              5. 8 Praktijkcases: Van 45% naar 85% OEE
            </h2>
            <p className="text-gray-300 mb-6">
              Concrete voorbeelden uit onze projectpraktijk. Elk bedrijf is anoniem, de resultaten zijn echt.
            </p>

            <div className="space-y-6">
              {/* Case 1 */}
              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 1: Metaalbewerkingsbedrijf (CNC)</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">+27% OEE</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 12 CNC-machines, 45 medewerkers</li>
                        <li>• Startende OEE: 48%</li>
                        <li>• Veel ongeplande stilstand (18%)</li>
                        <li>• Lange omsteltijden (gemiddeld 45 min)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Aanpak</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Real-time OEE dashboard geïnstalleerd</li>
                        <li>• SMED-training voor operators</li>
                        <li>• Preventief onderhoudsschema opgezet</li>
                        <li>• Cobot voor machine belading op 2 CNC&apos;s</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-2">Resultaat na 6 maanden</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">75%</p>
                        <p className="text-xs text-gray-500">OEE (+27%)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">-65%</p>
                        <p className="text-xs text-gray-500">Omsteltijd (45→16 min)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€180k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 2: Kunststof Spuitgieterij</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">+22% OEE</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 8 spuitgietmachines, 3-ploegendienst</li>
                        <li>• Startende OEE: 58%</li>
                        <li>• Hoge afkeur bij opstart (8%)</li>
                        <li>• Micro-stops door materiaaltoevoer</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Aanpak</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• OEE-monitoring per machine</li>
                        <li>• SPC voor procesparameters</li>
                        <li>• Geautomatiseerde materiaaltoevoer</li>
                        <li>• Standaard opstartprocedure per product</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-2">Resultaat na 4 maanden</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">80%</p>
                        <p className="text-xs text-gray-500">OEE (+22%)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">-75%</p>
                        <p className="text-xs text-gray-500">Opstartafkeur (8%→2%)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€95k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 3: Voedingsverwerker (Verpakkingslijn)</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">+31% OEE</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 3 verpakkingslijnen, 2-ploegendienst</li>
                        <li>• Startende OEE: 52%</li>
                        <li>• Veel micro-stops door etikettering</li>
                        <li>• Frequente productwissels (15/dag)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Aanpak</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Bottleneck-analyse per lijn</li>
                        <li>• Etiketteermachine vervangen</li>
                        <li>• SMED voor productwissels</li>
                        <li>• Productiedashboard met alerts</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-2">Resultaat na 5 maanden</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">83%</p>
                        <p className="text-xs text-gray-500">OEE (+31%)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">-80%</p>
                        <p className="text-xs text-gray-500">Micro-stops</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€220k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 4 */}
              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 4: Assemblage-bedrijf (Elektronica)</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">+25% OEE</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 4 assemblagelijnen, handwerk + semi-auto</li>
                        <li>• Startende OEE: 62%</li>
                        <li>• Hoge variatie tussen operators</li>
                        <li>• Kwaliteitsproblemen bij schroefmontage</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Aanpak</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Cobot voor schroeftaken geïnstalleerd</li>
                        <li>• Gestandaardiseerde werkwijzen</li>
                        <li>• Poka-Yoke op kritieke stappen</li>
                        <li>• Real-time taktijd monitoring</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-2">Resultaat na 4 maanden</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">87%</p>
                        <p className="text-xs text-gray-500">OEE (+25%)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">-90%</p>
                        <p className="text-xs text-gray-500">Schroeffouten</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€130k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 5-8 compact */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 5: Plaatwerk (Laser + Kanten)</h4>
                    <span className="text-green-400 text-sm font-bold">+19% OEE</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">51% → 70% OEE door automatisch platenmagazijn en betere nesting-software.</p>
                  <p className="text-primary-500 text-sm font-medium">€85k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 6: Machinefabriek (Draaien)</h4>
                    <span className="text-green-400 text-sm font-bold">+24% OEE</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">54% → 78% OEE door cobot-belading, toolmonitoring en predictief onderhoud.</p>
                  <p className="text-primary-500 text-sm font-medium">€165k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 7: Bakkerij-industrie</h4>
                    <span className="text-green-400 text-sm font-bold">+28% OEE</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">49% → 77% OEE door reinigingsoptimalisatie, receptbeheer en lijnbalancering.</p>
                  <p className="text-primary-500 text-sm font-medium">€195k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 8: Farmaceutisch (Verpakking)</h4>
                    <span className="text-green-400 text-sm font-bold">+18% OEE</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">55% → 73% OEE door batch-documentatie digitalisering en validatie-optimalisatie.</p>
                  <p className="text-primary-500 text-sm font-medium">€145k/jaar besparing</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6 mt-6">
              <p className="text-white m-0">
                <strong>Gemiddeld resultaat:</strong> Onze OEE-projecten leveren typisch <strong>15-30% OEE-verbetering</strong> binnen 3-6 maanden.
                ROI varieert van €80.000 tot €250.000 per jaar, afhankelijk van bedrijfsgrootte en startniveau.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="oee-verbeteren" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary-500" />
              6. OEE Verbeteren: 15 Bewezen Strategieën
            </h2>
            <p className="text-gray-300 mb-6">
              Gestructureerde aanpak om je OEE te verhogen. Gerangschikt van &quot;quick win&quot; naar &quot;strategische investering&quot;.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Quick Wins (Weken 1-4)</h3>
            <div className="space-y-4 mb-8">
              {[
                { num: 1, title: 'Start met Meten', desc: 'Je kunt niet verbeteren wat je niet meet. Begin vandaag met het registreren van stilstand, output en afkeur. Zelfs een Excel-sheet is een start.', link: '/diensten/productie-dashboards' },
                { num: 2, title: 'Pareto-analyse Stilstand', desc: 'Identificeer de top 3 stilstandoorzaken. Vaak veroorzaakt 20% van de problemen 80% van het verlies. Focus hier eerst.', link: null },
                { num: 3, title: 'Maak OEE Zichtbaar', desc: 'Toon real-time OEE op grote schermen bij de productielijn. Wat zichtbaar is, krijgt aandacht. Teams gaan vanzelf verbeteren.', link: '/diensten/productie-dashboards' },
                { num: 4, title: 'Dagelijkse Stand-up', desc: 'Start elke shift met 10-minuten bespreking: gisteren OEE, top-3 issues, acties vandaag. Structurele aandacht = structurele verbetering.', link: null },
                { num: 5, title: '5S op Werkplekken', desc: 'Opgeruimde werkplek = minder zoektijd, minder fouten, sneller omstellen. Basis voor elke verdere verbetering.', link: '/diensten/procesoptimalisatie' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                    {item.link && (
                      <Link href={item.link} className="text-primary-500 text-sm mt-1 inline-block hover:underline">
                        Meer informatie →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Structurele Verbeteringen (Maanden 1-3)</h3>
            <div className="space-y-4 mb-8">
              {[
                { num: 6, title: 'SMED voor Omsteltijden', desc: 'Single Minute Exchange of Die: reduceer omsteltijden met 50-70%. Scheid interne (machine uit) van externe (machine aan) activiteiten.', link: '/diensten/procesoptimalisatie' },
                { num: 7, title: 'Preventief Onderhoud (TPM)', desc: 'Gepland onderhoud voorkomt ongeplande storingen. Maak onderhoudsschema per machine. Plan onderhoud buiten productietijd.', link: null },
                { num: 8, title: 'Operator Training', desc: 'Operators die hun machine begrijpen, herkennen problemen eerder. Autonomous Maintenance: basis-onderhoud door operators zelf.', link: null },
                { num: 9, title: 'Standaardiseer Werkwijzen', desc: 'Zorg dat elke operator dezelfde (beste) methode gebruikt. One Best Way. Creëer visuele werkinstructies bij elke werkplek.', link: '/diensten/procesoptimalisatie' },
                { num: 10, title: 'Root Cause Analysis', desc: 'Graaf dieper bij elke storing: 5× Waarom? Fishbone diagram. Structureel oplossen in plaats van symptoombestrijding.', link: null },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                    {item.link && (
                      <Link href={item.link} className="text-primary-500 text-sm mt-1 inline-block hover:underline">
                        Meer informatie →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Strategische Verbeteringen (Maanden 3-12)</h3>
            <div className="space-y-4">
              {[
                { num: 11, title: 'OEE Monitoring Systeem', desc: 'Investeer in real-time OEE software met automatische datacollectie. Handmatige registratie is foutgevoelig en tijdrovend.', link: '/diensten/productie-dashboards' },
                { num: 12, title: 'Automatisering Micro-stops', desc: 'Die "kleine" onderbrekingen van 30 seconden tellen op tot 10-15% verlies. Cobot-integratie voor materiaalhandling elimineert dit.', link: '/diensten/cobot-integratie' },
                { num: 13, title: 'Predictief Onderhoud', desc: 'IoT sensoren meten trillingen, temperatuur, stroomverbruik. AI voorspelt storingen voor ze optreden. Van reactief naar proactief.', link: '/diensten/industriele-automatisering' },
                { num: 14, title: 'Lijnbalancering', desc: 'Analyseer bottlenecks in de productielijn. Elke lijn is zo snel als de langzaamste stap. Balanceer capaciteiten.', link: '/diensten/procesoptimalisatie' },
                { num: 15, title: 'Robotisering', desc: 'Cobots voor repetitieve taken: machine belading, palletiseren, assemblage. 24/7 productie mogelijk, constante kwaliteit.', link: '/diensten/cobot-integratie' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                    {item.link && (
                      <Link href={item.link} className="text-primary-500 text-sm mt-1 inline-block hover:underline">
                        Meer informatie →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="oee-meten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary-500" />
              7. OEE Meten: Tools en Dashboards
            </h2>
            <p className="text-gray-300 mb-6">
              Van Excel tot enterprise MES: overzicht van OEE-meetmethoden met voor- en nadelen.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">GRATIS START</span>
                  <h4 className="text-xl font-bold text-white">Excel / Google Sheets</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">Handmatige registratie door operators. Prima om te starten en OEE-bewustzijn te creëren.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-medium mb-1">Voordelen</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Geen investering</li>
                      <li>• Direct te starten</li>
                      <li>• Flexibel aanpasbaar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-medium mb-1">Nadelen</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Tijdrovend invoeren</li>
                      <li>• Foutgevoelig</li>
                      <li>• Geen real-time data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full">MKB OPTIMAAL</span>
                  <h4 className="text-xl font-bold text-white">Dedicated OEE Software</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">Semi-automatische meting met operators die stilstandredenen registreren. Real-time dashboards. €5.000-€30.000 investering.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-medium mb-1">Voordelen</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Real-time inzicht</li>
                      <li>• Automatische berekeningen</li>
                      <li>• Trend analyses</li>
                      <li>• Alerts bij afwijkingen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-medium mb-1">Nadelen</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Initiële investering</li>
                      <li>• Implementatietijd 2-4 weken</li>
                      <li>• Operator discipline vereist</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-bold rounded-full">ENTERPRISE</span>
                  <h4 className="text-xl font-bold text-white">Volledig Geautomatiseerd (MES/SCADA)</h4>
                </div>
                <p className="text-gray-400 text-sm mb-3">PLC-integratie voor 100% automatische OEE-meting. Machine signalen worden direct vertaald naar OEE. €30.000-€150.000+ investering.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-medium mb-1">Voordelen</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• 100% nauwkeurig</li>
                      <li>• Geen operator input nodig</li>
                      <li>• Second-by-second data</li>
                      <li>• Integratie met ERP</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-medium mb-1">Nadelen</p>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Hoge investering</li>
                      <li>• Lange implementatie (3-12 maanden)</li>
                      <li>• Vereist PLC-expertise</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Onze Aanbeveling voor MKB</h4>
              <p className="text-gray-300 m-0">
                Start met Excel om OEE-bewustzijn te creëren. Na 1-2 maanden: investeer in dedicated OEE-software (€8.000-€25.000).
                Dit is de sweet spot voor MKB: balans tussen nauwkeurigheid, investering en snelle implementatie.
              </p>
              <Link href="/diensten/productie-dashboards" className="inline-flex items-center gap-2 text-primary-500 font-medium mt-4 hover:underline">
                Bekijk onze dashboard-oplossingen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Section 8 */}
          <section id="veelgemaakte-fouten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary-500" />
              8. 10 Veelgemaakte Fouten bij OEE
            </h2>
            <div className="space-y-4">
              {[
                { fout: 'Alleen meten, niet verbeteren', uitleg: 'OEE is geen rapportcijfer voor het management. Het is een startpunt voor dagelijkse verbeteractie op de werkvloer.' },
                { fout: 'Te veel KPIs tegelijk', uitleg: 'Focus op OEE als hoofdindicator. Beschikbaarheid, Prestatie, Kwaliteit als onderliggende metrics. Niet 20 KPIs tegelijk.' },
                { fout: 'Geen root-cause analyse', uitleg: '"Machine stond stil" is geen oorzaak. Graaf dieper: waarom stond hij stil? 5× Waarom tot de werkelijke oorzaak.' },
                { fout: 'Operators niet betrekken', uitleg: 'De mensen aan de lijn weten precies waar de problemen zitten. Betrek ze bij OEE-analyse en verbetervoorstellen.' },
                { fout: 'OEE vergelijken tussen machines', uitleg: 'Een verpakkingsmachine en CNC-freesbank hebben totaal verschillende benchmarks. Vergelijk appels met appels.' },
                { fout: 'Geplande tijd verkeerd definiëren', uitleg: 'Tel je pauzes, onderhoud, vergaderingen mee? Wees consistent. World-class definitie: alle uren dat de fabriek open is.' },
                { fout: 'Micro-stops negeren', uitleg: 'Stops <5 minuten worden vaak niet geregistreerd. Maar 50× per dag 2 minuten = 100 minuten verlies. Meet ze!' },
                { fout: 'Ideale cyclustijd te laag', uitleg: 'Als je theoretische cyclustijd te ambitieus is, lijkt je OEE altijd slecht. Gebruik realistische, haalbare waardes.' },
                { fout: 'Data manipuleren', uitleg: 'OEE "mooi" maken door definities aan te passen. Je bedriegt alleen jezelf. Eerlijke data = echte verbetering.' },
                { fout: 'OEE als strafmiddel gebruiken', uitleg: 'OEE moet een verbeterinstrument zijn, geen controlemiddel. Angst leidt tot data-manipulatie, niet tot verbetering.' },
              ].map((item, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">❌</span>
                    <div>
                      <h4 className="text-lg font-bold text-red-400 mb-1">{item.fout}</h4>
                      <p className="text-gray-400 text-sm m-0">{item.uitleg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9 */}
          <section id="implementatie" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary-500" />
              9. OEE Implementatie Stappenplan
            </h2>
            <p className="text-gray-300 mb-6">
              Een gestructureerd 12-weken plan om OEE succesvol te implementeren in je organisatie.
            </p>

            <div className="space-y-6">
              {[
                { fase: 'Week 1-2', title: 'Voorbereiding & Commitment', items: ['Management buy-in verkrijgen', 'Projectteam samenstellen (productie, techniek, kwaliteit)', 'Pilotlijn selecteren (representatief, gemotiveerd team)', 'Basislijn meting bepalen (huidige situatie)'] },
                { fase: 'Week 3-4', title: 'Definities & Infrastructuur', items: ['OEE-definities vastleggen (geplande tijd, ideale cyclustijd)', 'Stilstandcategorieën definiëren (max 10-15)', 'Meetmethode kiezen (Excel → software → automatisch)', 'Registratieproces ontwerpen'] },
                { fase: 'Week 5-6', title: 'Training & Kick-off', items: ['Operators trainen in OEE-begrippen', 'Registratieproces uitleggen', 'Eerste metingen starten', 'Dashboard opzetten en tonen bij de lijn'] },
                { fase: 'Week 7-10', title: 'Meten & Analyseren', items: ['Dagelijks OEE registreren en bespreken', 'Pareto-analyse van stilstandoorzaken', 'Quick wins identificeren en uitvoeren', 'SMED-workshop voor omsteltijd reductie'] },
                { fase: 'Week 11-12', title: 'Borgen & Uitrollen', items: ['Resultaten evalueren (target: +10-15% OEE)', 'Best practices documenteren', 'Uitrolplan maken voor andere lijnen', 'Continuous improvement proces inrichten'] },
              ].map((fase, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-bg-secondary border border-white/10 rounded-xl p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs text-primary-500 font-bold">{fase.fase}</span>
                      <h4 className="text-lg font-bold text-white">{fase.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {fase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10 - FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary-500" />
              10. Veelgestelde Vragen (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                { q: 'Wat is een goede OEE voor mijn bedrijf?', a: 'Dit hangt af van je industrie en productiecomplexiteit. Gemiddeld MKB: 45-55%. Goed: 65-75%. World-class: 85%+. Start met je huidige niveau meten en verbeter van daaruit stapsgewijs.' },
                { q: 'Hoe lang duurt het voordat ik resultaat zie?', a: 'Quick wins (5-10% verbetering) zijn vaak binnen 4-6 weken te realiseren door beter meten en bewustzijn. Structurele verbetering (15-25%) duurt typisch 3-6 maanden.' },
                { q: 'Moet ik per machine of per lijn OEE meten?', a: 'Start met de bottleneck-machine of kritieke lijn. Breidt later uit. Per machine meten geeft het meeste inzicht voor gerichte verbetering.' },
                { q: 'Wat kost OEE-software?', a: 'Excel: gratis. Dedicated OEE-software: €5.000-€30.000. Volledig geautomatiseerd (MES): €30.000-€150.000+. ROI is typisch 6-18 maanden.' },
                { q: 'Hoe betrek ik mijn operators bij OEE?', a: 'Leg uit waarom (niet wat). Maak het visueel. Bespreek dagelijks. Vier successen. Vraag hun input bij verbeteringen – zij kennen de machine het beste.' },
                { q: 'Is 100% OEE haalbaar?', a: 'Nee, en dat hoeft ook niet. 100% zou betekenen: nul stilstand, perfecte snelheid, nul defecten – altijd. Zelfs de beste fabrieken scoren 90-95% maximaal. 85% is al world-class.' },
                { q: 'Hoe combineer ik OEE met cobots?', a: 'Cobots verbeteren OEE op meerdere fronten: hogere beschikbaarheid (24/7), consistente prestatie (geen vermoeidheid), betere kwaliteit (constante herhaling). Typisch 10-20% OEE-verbetering.' },
                { q: 'Wat als mijn machines geen PLC hebben?', a: 'Geen probleem. Start met handmatige registratie of semi-automatisch (sensoren op bestaande machines). Retrofit-oplossingen zijn beschikbaar vanaf €500/machine.' },
              ].map((item, i) => (
                <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                  <p className="text-gray-400 m-0">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 11: CTA */}
          <section id="aan-de-slag" className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-primary-500" />
              11. Direct aan de Slag
            </h2>
            <p className="text-gray-300 mb-6">
              Klaar om je OEE te berekenen en te verbeteren? Start vandaag met onze gratis tools of plan een adviesgesprek.
            </p>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bereken je OEE in 60 seconden
              </h3>
              <p className="text-gray-400 mb-6">
                Ontdek hoeveel verborgen capaciteit er in jouw productie zit – en wat dat in euro&apos;s betekent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/oee-calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors text-lg"
                >
                  <Calculator className="w-6 h-6" />
                  OEE Calculator
                </Link>
                <Link
                  href="/contact?subject=oee"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Bot className="w-5 h-5" />
                  Adviesgesprek Plannen
                </Link>
              </div>
            </div>
          </section>

        </div>

        {/* Author Box */}
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mt-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">
              RD
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Rob Derks</h3>
              <p className="text-gray-400 text-sm mb-3">Oprichter Proces360 | 22+ jaar productie-ervaring</p>
              <p className="text-gray-400 text-sm">
                Van operator tot operations manager bij internationale maakbedrijven. Rob heeft 50+ OEE-verbetertrajecten begeleid
                in de Nederlandse en Belgische maakindustrie. Pragmatisch, hands-on, resultaatgericht.
              </p>
              <Link href="/rob-derks" className="text-primary-500 text-sm font-medium mt-2 inline-block hover:underline">
                Meer over Rob →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Gerelateerde artikelen</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/productie-stilstand-verminderen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">10 Strategieën om Productie Stilstand te Verminderen</h4>
              <p className="text-sm text-gray-400">Praktische methodes om ongeplande downtime te voorkomen en beschikbaarheid te verhogen.</p>
            </Link>
            <Link href="/blog/cobots-in-productie-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobots in Productie: De Complete Gids</h4>
              <p className="text-sm text-gray-400">Hoe collaborative robots je OEE verbeteren met hogere beschikbaarheid en consistente kwaliteit.</p>
            </Link>
            <Link href="/blog/cobot-terugverdientijd-berekenen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobot Terugverdientijd Berekenen</h4>
              <p className="text-sm text-gray-400">ROI-analyse voor robotisering – wanneer is automatisering rendabel?</p>
            </Link>
            <Link href="/blog/preventief-onderhoud-tpm" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Preventief Onderhoud & TPM</h4>
              <p className="text-sm text-gray-400">Total Productive Maintenance voor hogere machinebeschikbaarheid.</p>
            </Link>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-12 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Gerelateerde Diensten</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/diensten/oee-verbetering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              OEE Verbetering
            </Link>
            <Link href="/diensten/productie-dashboards" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Productie Dashboards
            </Link>
            <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Procesoptimalisatie
            </Link>
            <Link href="/diensten/cobot-integratie" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Cobot Integratie
            </Link>
            <Link href="/diensten/industriele-automatisering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Industriële Automatisering
            </Link>
            <Link href="/oee-calculator" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Gratis OEE Calculator
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
