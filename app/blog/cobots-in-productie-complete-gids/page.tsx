'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, AlertTriangle, TrendingUp, Target, Bot, Shield, Zap, Euro, Factory, Users } from 'lucide-react';

export default function CobotArticlePage() {
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
            Robotisering & Automatisering
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Cobots in Productie: De Complete Gids voor MKB-Maakbedrijven
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Van selectie tot implementatie: alles wat je moet weten over collaborative robots (cobots) in de maakindustrie.
            Inclusief ROI-berekening, veiligheid, en praktijkvoorbeelden.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Rob Derks
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              9 januari 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min leestijd
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Inhoudsopgave</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#wat-is-cobot" className="hover:text-primary-500 transition-colors">1. Wat is een Cobot?</a></li>
            <li><a href="#cobot-vs-robot" className="hover:text-primary-500 transition-colors">2. Cobot vs. Industriële Robot</a></li>
            <li><a href="#toepassingen" className="hover:text-primary-500 transition-colors">3. 10 Populaire Cobot-Toepassingen</a></li>
            <li><a href="#roi-berekenen" className="hover:text-primary-500 transition-colors">4. ROI Berekenen: Terugverdientijd</a></li>
            <li><a href="#veiligheid" className="hover:text-primary-500 transition-colors">5. Veiligheid & Certificering</a></li>
            <li><a href="#merken" className="hover:text-primary-500 transition-colors">6. Cobot Merken Vergelijken</a></li>
            <li><a href="#implementatie" className="hover:text-primary-500 transition-colors">7. Implementatie Stappenplan</a></li>
            <li><a href="#veelgemaakte-fouten" className="hover:text-primary-500 transition-colors">8. 5 Veelgemaakte Fouten</a></li>
            <li><a href="#aan-de-slag" className="hover:text-primary-500 transition-colors">9. Direct aan de Slag</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          {/* Intro */}
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> Een cobot kost €25.000-€60.000 en verdient zichzelf gemiddeld terug in 12-18 maanden.
              Voor MKB-maakbedrijven is dit dé toegangspoort tot automatisering: flexibel, veilig, en snel te implementeren.
              In dit artikel leer je hoe je de juiste cobot selecteert en succesvol implementeert.
            </p>
          </div>

          {/* Section 1 */}
          <section id="wat-is-cobot" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Bot className="w-8 h-8 text-primary-500" />
              1. Wat is een Cobot?
            </h2>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Cobot</strong> staat voor <strong className="text-white">Collaborative Robot</strong> –
              een robot die ontworpen is om veilig samen te werken met mensen, zonder fysieke afscherming.
              Dit in tegenstelling tot traditionele industriële robots die in afgesloten cellen moeten werken.
            </p>
            <p className="text-gray-300 mb-6">
              De term werd in 1996 bedacht door Northwestern University professoren J. Edward Colgate en Michael Peshkin.
              Sinds de lancering van Universal Robots&apos; eerste commerciële cobot in 2008 is de markt exponentieel gegroeid.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">€30B+</div>
                <p className="text-sm text-gray-400">Wereldwijde cobot-markt 2026</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">30%</div>
                <p className="text-sm text-gray-400">Jaarlijkse groei cobot-adoptie</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">80%</div>
                <p className="text-sm text-gray-400">MKB&apos;s met &lt;500 medewerkers</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Kenmerken van een Cobot</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Inherent veilig</strong> – Kracht- en snelheidsbegrenzing, stopt bij contact</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Eenvoudig programmeren</strong> – Teach-in (hand-leiden) of grafische interface</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Flexibel inzetbaar</strong> – Snel te verplaatsen tussen taken</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Compact formaat</strong> – Past in bestaande productieomgeving</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="cobot-vs-robot" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Factory className="w-8 h-8 text-primary-500" />
              2. Cobot vs. Industriële Robot
            </h2>
            <p className="text-gray-300 mb-6">
              Wanneer kies je voor een cobot en wanneer voor een traditionele industriële robot?
              De keuze hangt af van je specifieke toepassing, budget en productieomgeving.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-bold">Kenmerk</th>
                    <th className="text-left py-4 px-4 text-primary-500 font-bold">Cobot</th>
                    <th className="text-left py-4 px-4 text-blue-400 font-bold">Industriële Robot</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Prijs</td>
                    <td className="py-4 px-4">€25.000 - €60.000</td>
                    <td className="py-4 px-4">€50.000 - €250.000+</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Payload</td>
                    <td className="py-4 px-4">3-25 kg (meestal 5-10 kg)</td>
                    <td className="py-4 px-4">5-2000+ kg</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Snelheid</td>
                    <td className="py-4 px-4">Max 1-2 m/s</td>
                    <td className="py-4 px-4">Tot 10+ m/s</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Veiligheid</td>
                    <td className="py-4 px-4">Geen afscherming nodig</td>
                    <td className="py-4 px-4">Kooi/lichtscherm vereist</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Programmeren</td>
                    <td className="py-4 px-4">Uren tot dagen</td>
                    <td className="py-4 px-4">Dagen tot weken</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Flexibiliteit</td>
                    <td className="py-4 px-4">Hoog - snel te herpositioneren</td>
                    <td className="py-4 px-4">Laag - vaste opstelling</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Best voor</td>
                    <td className="py-4 px-4">MKB, kleine series, assemblage</td>
                    <td className="py-4 px-4">Hoge volumes, zware lasten</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <p className="text-white m-0">
                <strong>Vuistregel:</strong> Kies een cobot als je payload &lt;20kg is, je flexibiliteit nodig hebt,
                en je operators naast de robot moeten werken. Kies een industriële robot voor hoge volumes,
                zware lasten (&gt;25kg), of maximale snelheid.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="toepassingen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary-500" />
              3. 10 Populaire Cobot-Toepassingen
            </h2>
            <p className="text-gray-300 mb-6">
              Cobots zijn uitermate geschikt voor taken die repetitief, ergonomisch belastend of gevaarlijk zijn.
              Hier zijn de meest voorkomende toepassingen in MKB-maakbedrijven:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { num: 1, title: 'Machine Belading', desc: 'CNC-machines, draaibanken, freesmachines laden/lossen. ROI: 8-14 maanden.' },
                { num: 2, title: 'Pick & Place', desc: 'Producten verplaatsen van A naar B. Ideaal voor verpakken en palletiseren.' },
                { num: 3, title: 'Assemblage', desc: 'Schroeven indraaien, componenten monteren, clips bevestigen.' },
                { num: 4, title: 'Kwaliteitsinspectie', desc: 'Cobot + vision systeem voor 100% visuele controle.' },
                { num: 5, title: 'Lassen', desc: 'MIG/MAG lassen van kleine tot middelgrote series. Consistente kwaliteit.' },
                { num: 6, title: 'Schuren & Polijsten', desc: 'Oppervlaktebehandeling met constante druk. Reduceert RSI-klachten.' },
                { num: 7, title: 'Verpakken', desc: 'Dozen vullen, sealen, etiketten aanbrengen.' },
                { num: 8, title: 'Palletiseren', desc: 'End-of-line palletisering voor dozen tot 15kg.' },
                { num: 9, title: 'Lijmen & Sealen', desc: 'Precisie-dosering van lijm, kit, of sealant.' },
                { num: 10, title: 'Testen', desc: 'Functionele tests uitvoeren op producten met meetapparatuur.' },
              ].map((item) => (
                <div key={item.num} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 m-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="roi-berekenen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-primary-500" />
              4. ROI Berekenen: Terugverdientijd
            </h2>
            <p className="text-gray-300 mb-6">
              De gemiddelde terugverdientijd van een cobot ligt tussen 12-18 maanden.
              Hier is hoe je een realistische ROI-berekening maakt:
            </p>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Rekenvoorbeeld: Machine Belading</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Huidige situatie (1 FTE)</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Bruto uurloon: €25/uur</li>
                      <li>• 1.760 uur/jaar × €25 = €44.000</li>
                      <li>• + sociale lasten (40%): €17.600</li>
                      <li>• <strong className="text-white">Totaal: €61.600/jaar</strong></li>
                    </ul>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Met cobot</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Cobot + gripper: €45.000</li>
                      <li>• Installatie: €8.000</li>
                      <li>• Energie (500W × 4000u): €1.000/jaar</li>
                      <li>• <strong className="text-white">Totaal investering: €53.000</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                  <p className="text-3xl font-bold text-primary-500 mb-1">10.3 maanden</p>
                  <p className="text-sm text-gray-400">€53.000 / (€61.600 - €1.000) × 12 = 10.3</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">ROI-factoren om mee te rekenen</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Besparingen:</strong> Arbeidskosten, lagere afkeur, minder stilstand</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Extra output:</strong> 24/7 productie mogelijk, hogere cyclustijd</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Indirecte baten:</strong> Minder RSI/ziekteverzuim, betere ergonomie</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-xl p-6 text-center">
              <p className="text-white font-semibold mb-3">Bereken je eigen ROI</p>
              <Link
                href="/roi-calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Bot className="w-5 h-5" />
                Naar ROI Calculator
              </Link>
            </div>
          </section>

          {/* Section 5 */}
          <section id="veiligheid" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary-500" />
              5. Veiligheid & Certificering
            </h2>
            <p className="text-gray-300 mb-6">
              Hoewel cobots &quot;veilig&quot; zijn, betekent dit niet dat je zonder risico-analyse kunt implementeren.
              De Europese Machinerichtlijn (2006/42/EG) en ISO 10218 zijn altijd van toepassing.
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">Belangrijk: Risicobeoordeling verplicht!</h4>
                  <p className="text-gray-300 m-0">
                    Een cobot is alleen veilig in combinatie met de juiste end-effector en applicatie.
                    Een cobot met een scherpe gripper of die met gevaarlijke materialen werkt,
                    vereist mogelijk alsnog afscherming.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Relevante normen</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">ISO 10218-1 & 10218-2</h4>
                <p className="text-gray-400 text-sm m-0">Veiligheidseisen voor industriële robots en robot-systemen. Basis voor CE-markering.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">ISO/TS 15066</h4>
                <p className="text-gray-400 text-sm m-0">Specifiek voor collaborative robots. Definieert maximale krachten en drukken bij contact mens-robot.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Machinerichtlijn 2006/42/EG</h4>
                <p className="text-gray-400 text-sm m-0">Europese wetgeving. Bij installatie van een cobot creëer je een &quot;samenstel van machines&quot; – CE-markering vereist.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">4 Veiligheidsmethoden voor Cobots</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                <span className="text-gray-300"><strong className="text-white">Safety-rated Monitored Stop:</strong> Robot stopt als mens de werkruimte betreedt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                <span className="text-gray-300"><strong className="text-white">Hand Guiding:</strong> Operator kan robot handmatig bewegen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                <span className="text-gray-300"><strong className="text-white">Speed & Separation Monitoring:</strong> Robot vertraagt bij nadering mens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                <span className="text-gray-300"><strong className="text-white">Power & Force Limiting:</strong> Kracht beperkt zodat letsel wordt voorkomen (meest gebruikt bij cobots)</span>
              </li>
            </ol>
          </section>

          {/* Section 6 */}
          <section id="merken" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-500" />
              6. Cobot Merken Vergelijken
            </h2>
            <p className="text-gray-300 mb-6">
              De markt wordt gedomineerd door een handvol spelers. Hier zijn de belangrijkste merken:
            </p>

            <div className="space-y-4">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">MARKTLEIDER</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Universal Robots (UR)</h4>
                <p className="text-gray-400 text-sm mb-3">Deense pionier, wereldwijd marktleider. Modellen: UR3e, UR5e, UR10e, UR16e, UR20, UR30.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Payload: 3-30kg</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Groot ecosysteem</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">UR+ partners</span>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">FANUC CRX</h4>
                <p className="text-gray-400 text-sm mb-3">Japanse robotgigant met cobot-lijn. Bekend om betrouwbaarheid en service-netwerk.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Payload: 5-25kg</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">IP67 beschikbaar</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Sterke service</span>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">ABB GoFa & SWIFTI</h4>
                <p className="text-gray-400 text-sm mb-3">Zwitsers-Zweedse multinational. GoFa voor payload tot 12kg, SWIFTI voor snelheid.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Payload: 5-12kg</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">RobotStudio software</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">OmniCore controller</span>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Doosan Robotics</h4>
                <p className="text-gray-400 text-sm mb-3">Zuid-Koreaanse fabrikant met uitgebreid assortiment en competitieve prijzen.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Payload: 6-25kg</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Dart-platform</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Scherpe prijs</span>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Techman (TM Robot)</h4>
                <p className="text-gray-400 text-sm mb-3">Taiwanese producent, uniek door ingebouwde vision. Ideaal voor vision-applicaties.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Payload: 4-25kg</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Ingebouwde camera</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">AI-vision</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="implementatie" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              7. Implementatie Stappenplan
            </h2>
            <p className="text-gray-300 mb-6">
              Een succesvolle cobot-implementatie volgt een gestructureerd proces. Hier is het stappenplan:
            </p>

            <div className="space-y-6">
              {[
                { fase: 'Fase 1', title: 'Analyse & Haalbaarheid', weken: '1-2 weken', items: ['Identificeer geschikte taken', 'Bereken ROI/terugverdientijd', 'Bepaal payload, reach, cyclustijd', 'Neem beslissing go/no-go'] },
                { fase: 'Fase 2', title: 'Selectie & Ontwerp', weken: '2-4 weken', items: ['Selecteer cobot-merk en model', 'Kies gripper/end-effector', 'Ontwerp werkcel-layout', 'Plan integratie met bestaande machines'] },
                { fase: 'Fase 3', title: 'Risicobeoordeling', weken: '1-2 weken', items: ['Voer risicoanalyse uit (ISO 12100)', 'Bepaal veiligheidsmaatregelen', 'Stel CE-documentatie op', 'Valideer veiligheidsconcept'] },
                { fase: 'Fase 4', title: 'Installatie & Inbedrijfstelling', weken: '1-3 weken', items: ['Installeer hardware', 'Programmeer bewegingen', 'Integreer met PLC/machines', 'Test en valideer prestaties'] },
                { fase: 'Fase 5', title: 'Training & Overdracht', weken: '1 week', items: ['Train operators (bediening)', 'Train technici (programmeren)', 'Documenteer procedures', 'Start productie met begeleiding'] },
              ].map((fase, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-bg-secondary border border-white/10 rounded-xl p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs text-primary-500 font-bold">{fase.fase}</span>
                      <h4 className="text-lg font-bold text-white">{fase.title}</h4>
                      <span className="text-xs text-gray-500">({fase.weken})</span>
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

          {/* Section 8 */}
          <section id="veelgemaakte-fouten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              8. 5 Veelgemaakte Fouten
            </h2>
            <div className="space-y-4">
              {[
                { fout: 'Te optimistische cyclustijd', uitleg: 'Cobots zijn langzamer dan industriële robots. Reken met realistische snelheden, inclusief veiligheidsvertragingen.' },
                { fout: 'Gripper als afterthought', uitleg: 'De gripper bepaalt 50% van het succes. Investeer in de juiste end-effector voor jouw product.' },
                { fout: 'Veiligheid onderschatten', uitleg: 'Cobot ≠ automatisch veilig. De combinatie met gripper en product bepaalt het risico.' },
                { fout: 'Operators niet betrekken', uitleg: 'Betrek operators vanaf dag 1. Zij kennen de taken het beste en moeten straks met de robot werken.' },
                { fout: 'Geen plan voor stilstand', uitleg: 'Wat als de cobot uitvalt? Zorg voor een fallback-scenario en spare parts.' },
              ].map((item, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-400 mb-2">❌ {item.fout}</h4>
                  <p className="text-gray-400 m-0">{item.uitleg}</p>
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
              Overweeg je een cobot voor jouw productie? Proces360 helpt je van analyse tot implementatie.
              Merkonafhankelijk advies uit 50+ technologieën.
            </p>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bereken je cobot-ROI in 3 minuten
              </h3>
              <p className="text-gray-400 mb-6">
                Ontdek of robotisering rendabel is voor jouw bedrijf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/roi-calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Bot className="w-5 h-5" />
                  ROI Calculator
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  Gratis Adviesgesprek
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
                Rob heeft 50+ cobot-implementaties begeleid in de Nederlandse maakindustrie.
                Van haalbaarheidsanalyse tot inbedrijfstelling - pragmatisch en resultaatgericht.
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
            <Link href="/blog/oee-verbeteren-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">OEE Verbeteren: De Complete Gids</h4>
              <p className="text-sm text-gray-400">Alles over Overall Equipment Effectiveness en hoe je naar 85%+ gaat.</p>
            </Link>
            <Link href="/blog/productie-strategie-automatisering" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Productiestrategie & Automatisering</h4>
              <p className="text-sm text-gray-400">Strategisch automatiseren: waar begin je en wat levert het op?</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
