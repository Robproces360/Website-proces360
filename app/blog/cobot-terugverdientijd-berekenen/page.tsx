'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, Calculator, Euro, TrendingUp, Bot, AlertTriangle, Target, BarChart3, Factory, Zap, HelpCircle } from 'lucide-react';

export default function CobotROIArticlePage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar blog
          </Link>
        </nav>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full mb-4">
            ROI & Investering
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Cobot Terugverdientijd Berekenen: Complete ROI-Gids 2025
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Ontdek hoe je de terugverdientijd van een cobot berekent en wanneer robotisering rendabel is voor jouw MKB-maakbedrijf.
            Met praktische rekenvoorbeelden, ROI-formules en 5 case studies uit de Nederlandse maakindustrie.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />Rob Derks</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />18 juni 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />14 min leestijd</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Inhoudsopgave</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#roi-formule" className="hover:text-primary-500 transition-colors">1. De Basis ROI-Formule</a></li>
            <li><a href="#investeringskosten" className="hover:text-primary-500 transition-colors">2. Wat Kost een Cobot? Complete Kostenoverzicht</a></li>
            <li><a href="#besparingen" className="hover:text-primary-500 transition-colors">3. Besparingen Berekenen: Directe & Indirecte Baten</a></li>
            <li><a href="#case-studies" className="hover:text-primary-500 transition-colors">4. 5 Praktijkvoorbeelden met ROI</a></li>
            <li><a href="#wanneer-rendabel" className="hover:text-primary-500 transition-colors">5. Wanneer is een Cobot Rendabel?</a></li>
            <li><a href="#subsidies" className="hover:text-primary-500 transition-colors">6. Subsidies en Financiering</a></li>
            <li><a href="#veelgemaakte-fouten" className="hover:text-primary-500 transition-colors">7. 5 ROI-fouten Vermijden</a></li>
            <li><a href="#faq" className="hover:text-primary-500 transition-colors">8. Veelgestelde Vragen</a></li>
            <li><a href="#aan-de-slag" className="hover:text-primary-500 transition-colors">9. Direct aan de Slag</a></li>
          </ul>
        </nav>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> De gemiddelde cobot verdient zichzelf terug in 12-18 maanden.
              Met de juiste toepassing en berekening kun je dit terugbrengen tot 8-10 maanden.
              In dit artikel leer je exact hoe je een realistische ROI-berekening maakt.
            </p>
          </div>

          {/* Section 1 */}
          <section id="roi-formule" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-primary-500" />
              1. De Basis ROI-Formule
            </h2>
            <p className="text-gray-300 mb-6">
              De terugverdientijd (payback period) is de meest gebruikte metric voor cobot-investeringen.
              De formule is simpel:
            </p>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-2xl font-mono text-primary-500 text-center mb-4">
                Terugverdientijd = Totale Investering / Jaarlijkse Netto Besparing × 12
              </p>
              <p className="text-gray-400 text-center text-sm">Resultaat in maanden</p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Uitgebreide ROI-Berekening</h3>
            <p className="text-gray-300 mb-4">
              Voor een complete business case gebruik je de uitgebreide formule:
            </p>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-lg font-mono text-primary-500 text-center mb-4">
                ROI = ((Baten - Kosten) / Investering) × 100%
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-2">Baten (jaarlijks)</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>+ Arbeidskosten besparing</li>
                    <li>+ Productiviteitsverhoging</li>
                    <li>+ Kwaliteitsverbetering</li>
                    <li>+ Capaciteitsuitbreiding</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-2">Kosten (jaarlijks)</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>- Energieverbruik (~€500-1.000)</li>
                    <li>- Onderhoud (~€1.000-2.000)</li>
                    <li>- Verbruiksmaterialen</li>
                    <li>- Afschrijving (5-8 jaar)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="investeringskosten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-primary-500" />
              2. Wat Kost een Cobot? Complete Kostenoverzicht
            </h2>
            <p className="text-gray-300 mb-6">
              De totale investering bestaat uit meer dan alleen de cobot zelf. Hier is een compleet overzicht
              van alle kostencomponenten:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-bold">Component</th>
                    <th className="text-left py-4 px-4 text-white font-bold">Prijsrange</th>
                    <th className="text-left py-4 px-4 text-white font-bold">Opmerking</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Cobot (hardware)</td>
                    <td className="py-4 px-4">€25.000 - €60.000</td>
                    <td className="py-4 px-4 text-sm">Afhankelijk van payload (3-30kg)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Gripper/End-effector</td>
                    <td className="py-4 px-4">€2.000 - €15.000</td>
                    <td className="py-4 px-4 text-sm">Vacuüm, pneumatisch, elektrisch, custom</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Vision systeem</td>
                    <td className="py-4 px-4">€3.000 - €15.000</td>
                    <td className="py-4 px-4 text-sm">Optioneel, voor pick&place met variatie</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Voeding/Fixtures</td>
                    <td className="py-4 px-4">€1.000 - €10.000</td>
                    <td className="py-4 px-4 text-sm">Producttoevoer, opspanningen</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Installatie & Engineering</td>
                    <td className="py-4 px-4">€5.000 - €20.000</td>
                    <td className="py-4 px-4 text-sm">Programmeren, integratie, CE-markering</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Training</td>
                    <td className="py-4 px-4">€1.000 - €3.000</td>
                    <td className="py-4 px-4 text-sm">Operator- en programmeeropleiding</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Veiligheid & CE</td>
                    <td className="py-4 px-4">€2.000 - €8.000</td>
                    <td className="py-4 px-4 text-sm">Risicobeoordeling, documentatie</td>
                  </tr>
                  <tr className="bg-primary-500/10">
                    <td className="py-4 px-4 font-bold text-white">TOTAAL</td>
                    <td className="py-4 px-4 font-bold text-primary-500">€40.000 - €130.000</td>
                    <td className="py-4 px-4 text-sm">Typisch: €50.000-€70.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Let op: Verborgen Kosten</h4>
                  <p className="text-gray-300 text-sm m-0">
                    Vergeet niet: productie-stillstand tijdens installatie (1-3 dagen), aanloopverliezen
                    (eerste weken lagere output), en eventuele aanpassingen aan bestaande machines.
                    Reken 10-15% buffer voor onvoorziene kosten.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="besparingen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-500" />
              3. Besparingen Berekenen: Directe & Indirecte Baten
            </h2>

            <h3 className="text-xl font-bold text-white mb-4">Directe Besparingen (kwantificeerbaar)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Arbeidskostenbesparing
                </h4>
                <p className="text-sm text-gray-400 mb-3">Typisch de grootste besparing</p>
                <div className="bg-bg-primary rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Berekening:</p>
                  <p className="text-sm text-gray-300">1 FTE × €25/uur × 1.760 uur = €44.000</p>
                  <p className="text-sm text-gray-300">+ 40% sociale lasten = €17.600</p>
                  <p className="text-sm font-bold text-white mt-2">Totaal: €61.600/jaar</p>
                </div>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Productiviteitsverhoging
                </h4>
                <p className="text-sm text-gray-400 mb-3">Cobot draait door in pauzes/nacht</p>
                <div className="bg-bg-primary rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Voorbeeld:</p>
                  <p className="text-sm text-gray-300">+2 uur/dag productie</p>
                  <p className="text-sm text-gray-300">× €50 marge/uur × 250 dagen</p>
                  <p className="text-sm font-bold text-white mt-2">Extra: €25.000/jaar</p>
                </div>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Kwaliteitsverbetering
                </h4>
                <p className="text-sm text-gray-400 mb-3">Consistente kwaliteit, minder afkeur</p>
                <div className="bg-bg-primary rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Voorbeeld:</p>
                  <p className="text-sm text-gray-300">Afkeur van 3% naar 0.5%</p>
                  <p className="text-sm text-gray-300">× €500K productie/jaar</p>
                  <p className="text-sm font-bold text-white mt-2">Besparing: €12.500/jaar</p>
                </div>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  OEE-Verbetering
                </h4>
                <p className="text-sm text-gray-400 mb-3">Hogere machinebezetting</p>
                <div className="bg-bg-primary rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Voorbeeld:</p>
                  <p className="text-sm text-gray-300">OEE van 65% naar 80%</p>
                  <p className="text-sm text-gray-300">= 23% meer output</p>
                  <p className="text-sm font-bold text-white mt-2">Waarde: €15.000-50.000/jaar</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Indirecte Baten (moeilijker te kwantificeren)</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Minder Ziekteverzuim</h4>
                <p className="text-sm text-gray-400 m-0">Repetitieve/zware taken naar robot = minder RSI-klachten en fysieke belasting.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Flexibiliteit</h4>
                <p className="text-sm text-gray-400 m-0">Snel op- en afschalen. 24/7 productie mogelijk bij piekorders.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Kennisbehoud</h4>
                <p className="text-sm text-gray-400 m-0">Minder afhankelijk van specifieke medewerkers. Kennis in robot geprogrammeerd.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Concurrentiepositie</h4>
                <p className="text-sm text-gray-400 m-0">Lagere stukprijs, kortere levertijden, hogere kwaliteit.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Werknemerstevredenheid</h4>
                <p className="text-sm text-gray-400 m-0">Interessanter werk. Saai/repetitief werk naar robot.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Schaalbaarheid</h4>
                <p className="text-sm text-gray-400 m-0">Groei mogelijk zonder proportionele personeelsuitbreiding.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="case-studies" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Factory className="w-8 h-8 text-primary-500" />
              4. 5 Praktijkvoorbeelden met ROI
            </h2>

            {/* Case 1 */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">CASE 1</span>
                <h3 className="text-xl font-bold text-white">CNC Machine Belading</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Huidige Situatie</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>1 FTE voor CNC-belading (8 uur/dag)</li>
                    <li>Bruto uurloon: €25/uur</li>
                    <li>Machine staat stil tijdens pauzes</li>
                    <li>OEE: 62%</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Arbeidskosten: €61.600/jaar</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Met Cobot</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>UR10e cobot: €38.000</li>
                    <li>Elektrische gripper: €6.000</li>
                    <li>Installatie & CE: €10.000</li>
                    <li>Training: €2.000</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal investering: €56.000</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-500">10.9 mnd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">ROI Jaar 1</p>
                    <p className="text-2xl font-bold text-green-400">10%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">OEE na</p>
                    <p className="text-2xl font-bold text-blue-400">78%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">CASE 2</span>
                <h3 className="text-xl font-bold text-white">Palletiseren End-of-Line</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Huidige Situatie</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>2 FTE in 2-ploegendienst</li>
                    <li>Fysiek zwaar werk (dozen 8-12kg)</li>
                    <li>Hoog ziekteverzuim (8%)</li>
                    <li>Inconsistente palletkwaliteit</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Arbeidskosten: €123.200/jaar</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Met Cobot</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>UR20 cobot (20kg payload): €52.000</li>
                    <li>Vacuüm gripper + palletstation: €12.000</li>
                    <li>Conveyorbaan aanpassing: €8.000</li>
                    <li>Installatie & CE: €15.000</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal investering: €87.000</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-500">8.5 mnd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">ROI Jaar 1</p>
                    <p className="text-2xl font-bold text-green-400">42%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Verzuim na</p>
                    <p className="text-2xl font-bold text-blue-400">3%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">CASE 3</span>
                <h3 className="text-xl font-bold text-white">Lasinspectie met Vision</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Huidige Situatie</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>Visuele inspectie door operator</li>
                    <li>5% interne afkeur, 1% klantklachten</li>
                    <li>Afkeurkosten: €45.000/jaar</li>
                    <li>Claims/herwerk: €15.000/jaar</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Kwaliteitskosten: €60.000/jaar</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Met Cobot + Vision</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>UR5e cobot: €32.000</li>
                    <li>Vision systeem (3D): €18.000</li>
                    <li>Software & integratie: €12.000</li>
                    <li>Training: €3.000</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal investering: €65.000</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-500">14.3 mnd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Afkeur na</p>
                    <p className="text-2xl font-bold text-green-400">0.8%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Klantklachten</p>
                    <p className="text-2xl font-bold text-blue-400">0.1%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 4 */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full">CASE 4</span>
                <h3 className="text-xl font-bold text-white">Schroeven Assemblage</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Huidige Situatie</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>1 FTE voor repetitief schroevendraaien</li>
                    <li>120 producten/dag</li>
                    <li>RSI-klachten bij 2 medewerkers</li>
                    <li>Wisselende kwaliteit moment-aantrekking</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Arbeidskosten: €61.600/jaar</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Met Cobot</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>UR3e cobot: €28.000</li>
                    <li>Schroefunit met feeder: €8.000</li>
                    <li>Fixtures: €4.000</li>
                    <li>Installatie: €6.000</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal investering: €46.000</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-500">9.0 mnd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Output na</p>
                    <p className="text-2xl font-bold text-green-400">180/dag</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">RSI-klachten</p>
                    <p className="text-2xl font-bold text-blue-400">0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 5 */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full">CASE 5</span>
                <h3 className="text-xl font-bold text-white">MIG/MAG Lassen</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Huidige Situatie</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>Geschoolde lasser (moeilijk te vinden)</li>
                    <li>Bruto uurloon: €35/uur</li>
                    <li>Productie: 40 lasnaden/dag</li>
                    <li>Kwaliteitsvariatie door vermoeidheid</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Arbeidskosten: €86.240/jaar</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Met Cobot</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>UR10e cobot: €38.000</li>
                    <li>Fronius lastoorts pakket: €15.000</li>
                    <li>Laspositiemeter + fixtures: €12.000</li>
                    <li>Programmering & training: €10.000</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal investering: €75.000</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                    <p className="text-2xl font-bold text-primary-500">10.4 mnd</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Output na</p>
                    <p className="text-2xl font-bold text-green-400">65/dag</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">First-pass yield</p>
                    <p className="text-2xl font-bold text-blue-400">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="wanneer-rendabel" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-500" />
              5. Wanneer is een Cobot Rendabel?
            </h2>
            <p className="text-gray-300 mb-6">
              Niet elke taak is geschikt voor een cobot. Hier zijn de criteria om te bepalen of robotisering
              rendabel is voor jouw situatie:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Ideaal voor Cobot</h3>
                <ul className="space-y-3">
                  {[
                    'Repetitieve taken (>4 uur/dag)',
                    'Cyclustijd >15 seconden',
                    'Payload <20kg',
                    'Productvariatie beperkt of voorspelbaar',
                    'Vaste productielocatie',
                    'Duidelijke start/eindpositie',
                    'Operator beschikbaar voor toezicht',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Minder Geschikt</h3>
                <ul className="space-y-3">
                  {[
                    'Hoge productvariatie zonder patroon',
                    'Zeer korte cyclustijden (<5 sec)',
                    'Hoge snelheid vereist (>2m/s)',
                    'Zware lasten (>25kg)',
                    'Sterk wisselende productievolumes',
                    'Complexe menselijke beslissingen nodig',
                    'Volledig onbemande operatie vereist',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Check: Is het Rendabel?</h3>
              <p className="text-gray-300 mb-4">Beantwoord deze vragen met ja/nee:</p>
              <div className="space-y-3">
                {[
                  'Kost de taak nu minimaal €40.000/jaar aan arbeid?',
                  'Duurt de taak minimaal 4 uur per dag?',
                  'Is de taak fysiek belastend of gevaarlijk?',
                  'Kun je operators herplaatsen naar waardevollere taken?',
                  'Is er ruimte voor 24/7 productie of capaciteitsuitbreiding?',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{i+1}</span>
                    {q}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary-500/10 rounded-lg">
                <p className="text-white text-sm m-0">
                  <strong>Vuistregel:</strong> Bij 3+ keer &apos;ja&apos; is een cobot waarschijnlijk rendabel.
                  Bij 4+ keer &apos;ja&apos; is het vrijwel zeker een goede investering.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="subsidies" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary-500" />
              6. Subsidies en Financiering
            </h2>
            <p className="text-gray-300 mb-6">
              Er zijn diverse regelingen die je cobot-investering aantrekkelijker maken:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">KIA (Kleinschaligheidsinvesteringsaftrek)</h4>
                <p className="text-gray-400 text-sm mb-2">Fiscale aftrek voor investeringen €2.801 - €353.973</p>
                <p className="text-primary-500 font-medium">Voordeel: tot 28% extra aftrek (max €17.841)</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">MIA/VAMIL (Milieu-investeringsaftrek)</h4>
                <p className="text-gray-400 text-sm mb-2">Extra aftrek voor energie-efficiënte investeringen</p>
                <p className="text-primary-500 font-medium">Voordeel: tot 45% MIA + willekeurige afschrijving</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">WBSO (Wet Bevordering Speur- en Ontwikkelingswerk)</h4>
                <p className="text-gray-400 text-sm mb-2">Korting op loonkosten voor R&D/innovatie</p>
                <p className="text-primary-500 font-medium">Voordeel: 32% over eerste €350K loonkosten</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">Regionale Subsidies</h4>
                <p className="text-gray-400 text-sm mb-2">MIT, OP-Zuid, Kansen voor West, etc.</p>
                <p className="text-primary-500 font-medium">Voordeel: 25-50% subsidie op projectkosten</p>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <p className="text-white m-0">
                <strong>Impact op ROI:</strong> Met fiscale regelingen en subsidies kun je de effectieve investering
                met 20-40% verlagen, wat de terugverdientijd aanzienlijk verkort. Een cobot van €55.000
                kan netto €35.000-€44.000 kosten.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="veelgemaakte-fouten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              7. 5 ROI-fouten Vermijden
            </h2>
            <div className="space-y-4">
              {[
                { fout: 'Alleen directe arbeidskosten tellen', uitleg: 'Vergeet indirecte baten niet: kwaliteitsverbetering, flexibiliteit, ziekteverzuim, kennisbehoud. Deze kunnen 20-40% van de totale baten zijn.' },
                { fout: 'Te optimistische cyclustijden', uitleg: 'Cobots zijn 10-30% langzamer dan ervaren operators. Reken met realistische snelheden inclusief veiligheidsvertragingen.' },
                { fout: 'Integratie onderschatten', uitleg: 'De cobot is 40-60% van de investering. Gripper, vision, installatie en engineering zijn de rest. Budget dit realistisch.' },
                { fout: 'Aanloopverliezen negeren', uitleg: 'De eerste 2-4 weken draait de cobot niet op vol vermogen. Reken met 1-2 maanden aanlooptijd voordat je de volle besparing realiseert.' },
                { fout: 'Geen TCO-berekening', uitleg: 'Kijk naar Total Cost of Ownership over 5-8 jaar: onderhoud (~€1.500/jaar), updates, verbruiksmaterialen, energie.' },
              ].map((item, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-400 mb-2">❌ {item.fout}</h4>
                  <p className="text-gray-400 m-0">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary-500" />
              8. Veelgestelde Vragen
            </h2>
            <div className="space-y-4">
              {[
                { q: 'Wat is de gemiddelde terugverdientijd van een cobot?', a: '12-18 maanden is typisch voor MKB-maakbedrijven. Bij goede toepassing en 2-ploegen/24u productie kan dit dalen tot 8-10 maanden.' },
                { q: 'Kan ik een cobot leasen in plaats van kopen?', a: 'Ja, operational lease is mogelijk vanaf ~€1.500/maand voor een complete installatie. Dit kan aantrekkelijk zijn voor cashflow of als je eerst wilt testen.' },
                { q: 'Hoeveel kost onderhoud van een cobot per jaar?', a: 'Reken op €1.000-€2.500/jaar voor preventief onderhoud, software updates en verbruiksmaterialen (tandriemen, vet, grippers).' },
                { q: 'Wat als de cobot kapot gaat?', a: 'Cobots zijn zeer betrouwbaar (MTBF >80.000 uur). Bij storing: 24u service beschikbaar, leenunit mogelijk. Bouw een fallback-scenario in je planning.' },
                { q: 'Moet ik een cobot afschrijven?', a: 'Ja, over 5-8 jaar lineair. Met KIA kun je extra aftrek krijgen. Technisch gaat een cobot 10-15 jaar mee.' },
                { q: 'Wat zijn verborgen kosten bij cobots?', a: 'Productie-stillstand tijdens installatie, aanloopverliezen, gripper-slijtage, updates, training nieuwe medewerkers. Budget 10-15% extra.' },
              ].map((item, i) => (
                <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">{item.q}</h4>
                  <p className="text-gray-400 m-0">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: CTA */}
          <section id="aan-de-slag" className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              9. Direct aan de Slag
            </h2>
            <p className="text-gray-300 mb-6">
              Klaar om de ROI van een cobot voor jouw situatie te berekenen? Gebruik onze gratis ROI Calculator
              of plan een adviesgesprek voor een uitgebreide analyse.
            </p>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Bereken Jouw Cobot-ROI</h3>
              <p className="text-gray-400 mb-6">In 3 minuten weet je of robotisering rendabel is voor jouw bedrijf.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/roi-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                  <Bot className="w-5 h-5" />
                  ROI Calculator
                </Link>
                <Link href="/contact?subject=360scan" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">
                  <BarChart3 className="w-5 h-5" />
                  Plan een kennismaking
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Author Box */}
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mt-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">RD</div>
            <div>
              <h3 className="text-lg font-bold text-white">Rob Derks</h3>
              <p className="text-gray-400 text-sm mb-3">Oprichter Proces360 | 22+ jaar productie-ervaring | 50+ cobot-implementaties</p>
              <p className="text-gray-400 text-sm">
                Rob heeft 50+ cobot-ROI berekeningen gemaakt voor Nederlandse MKB-maakbedrijven.
                Van haalbaarheidsanalyse tot implementatie - pragmatisch en resultaatgericht.
              </p>
              <Link href="/rob-derks" className="text-primary-500 text-sm font-medium mt-2 inline-block hover:underline">Meer over Rob →</Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Gerelateerde artikelen</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/cobots-in-productie-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobots in Productie: Complete Gids</h4>
              <p className="text-sm text-gray-400">Van selectie tot implementatie: alles over collaborative robots.</p>
            </Link>
            <Link href="/blog/cobot-vs-industriele-robot" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobot vs Industriële Robot</h4>
              <p className="text-sm text-gray-400">Wanneer kies je voor een cobot en wanneer voor een industriële robot?</p>
            </Link>
            <Link href="/blog/automatisering-roi-berekenen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Automatisering ROI Berekenen</h4>
              <p className="text-sm text-gray-400">Complete gids voor het berekenen van automatisering rendement.</p>
            </Link>
            <Link href="/blog/automatisering-roadmap-mkb" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Automatisering Roadmap MKB</h4>
              <p className="text-sm text-gray-400">Stappenplan voor automatisering in het MKB.</p>
            </Link>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-8 p-6 bg-bg-secondary border border-white/10 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Gerelateerde diensten</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/diensten/cobot-integratie" className="px-4 py-2 bg-primary-500/10 text-primary-500 rounded-lg hover:bg-primary-500/20 transition-colors text-sm">
              Cobot Integratie →
            </Link>
            <Link href="/diensten/industriele-automatisering" className="px-4 py-2 bg-primary-500/10 text-primary-500 rounded-lg hover:bg-primary-500/20 transition-colors text-sm">
              Industriële Automatisering →
            </Link>
            <Link href="/diensten/oee-verbetering" className="px-4 py-2 bg-primary-500/10 text-primary-500 rounded-lg hover:bg-primary-500/20 transition-colors text-sm">
              OEE Verbetering →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
