'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, AlertTriangle, TrendingUp, Target, Bot, Shield, Zap, Euro, Factory, Users, Settings, Wrench, HelpCircle, ArrowRight, Award, BarChart3, Cpu } from 'lucide-react';

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
            Cobots in Productie: De Complete Gids voor MKB-Maakbedrijven in 2025
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Van selectie tot implementatie: alles wat je moet weten over collaborative robots (cobots) in de maakindustrie.
            Inclusief 10 praktijkcases, ROI-berekening, veiligheidsnormen, en merkenvergelijking.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Rob Derks
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              12 mei 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              28 min leestijd
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Inhoudsopgave</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#wat-is-cobot" className="hover:text-primary-500 transition-colors">1. Wat is een Cobot?</a></li>
            <li><a href="#cobot-vs-robot" className="hover:text-primary-500 transition-colors">2. Cobot vs. Industriële Robot: Keuzecriteria</a></li>
            <li><a href="#toepassingen" className="hover:text-primary-500 transition-colors">3. 15 Populaire Cobot-Toepassingen</a></li>
            <li><a href="#praktijkcases" className="hover:text-primary-500 transition-colors">4. 10 Praktijkcases uit de Nederlandse Maakindustrie</a></li>
            <li><a href="#roi-berekenen" className="hover:text-primary-500 transition-colors">5. ROI Berekenen: Complete Terugverdientijd Analyse</a></li>
            <li><a href="#veiligheid" className="hover:text-primary-500 transition-colors">6. Veiligheid, Normen & CE-Certificering</a></li>
            <li><a href="#merken" className="hover:text-primary-500 transition-colors">7. Cobot Merken Vergelijken (2025 Update)</a></li>
            <li><a href="#grippers" className="hover:text-primary-500 transition-colors">8. Grippers & End-Effectors Kiezen</a></li>
            <li><a href="#implementatie" className="hover:text-primary-500 transition-colors">9. Implementatie Stappenplan</a></li>
            <li><a href="#veelgemaakte-fouten" className="hover:text-primary-500 transition-colors">10. 10 Veelgemaakte Fouten bij Cobot-Projecten</a></li>
            <li><a href="#faq" className="hover:text-primary-500 transition-colors">11. Veelgestelde Vragen (FAQ)</a></li>
            <li><a href="#aan-de-slag" className="hover:text-primary-500 transition-colors">12. Direct aan de Slag</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          {/* Intro */}
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> Een cobot kost €25.000-€75.000 en verdient zichzelf gemiddeld terug in 12-18 maanden.
              Voor MKB-maakbedrijven is dit dé toegangspoort tot automatisering: flexibel, veilig, en snel te implementeren.
              In dit artikel leer je alles over selectie, implementatie, en hoe je maximale ROI behaalt.
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
              In 2025 is de wereldwijde cobot-markt meer dan €35 miljard waard.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">€35B+</div>
                <p className="text-sm text-gray-400">Wereldwijde cobot-markt 2025</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">32%</div>
                <p className="text-sm text-gray-400">Jaarlijkse groei (CAGR)</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">80%</div>
                <p className="text-sm text-gray-400">Adoptie door MKB</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">12-18</div>
                <p className="text-sm text-gray-400">Maanden terugverdientijd</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Kenmerken van een Cobot</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Inherent veilig</strong> – Kracht- en snelheidsbegrenzing, stopt automatisch bij contact met mens</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Eenvoudig programmeren</strong> – Teach-in (hand-leiden) of grafische interface, geen robotprogrammeur nodig</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Flexibel inzetbaar</strong> – Snel te verplaatsen tussen werkstations en taken</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Compact formaat</strong> – Past in bestaande productieomgeving zonder grote aanpassingen</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Snel rendabel</strong> – Lagere investering dan industriële robots, snellere implementatie</span>
              </li>
            </ul>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Waarom Cobots Ideaal zijn voor MKB</h4>
              <p className="text-gray-300 m-0">
                MKB-bedrijven hebben typisch <strong className="text-white">kleine tot middelgrote series</strong>,
                <strong className="text-white"> frequente productwissels</strong>, en <strong className="text-white">beperkte technische staf</strong>.
                Cobots zijn ontworpen voor precies deze omgeving: flexibel, snel te herprogrammeren, en geen dedicated robotprogrammeur nodig.
                Waar industriële robots excelleren in hoge volumes, zijn cobots perfect voor high-mix-low-volume productie.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="cobot-vs-robot" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Factory className="w-8 h-8 text-primary-500" />
              2. Cobot vs. Industriële Robot: Keuzecriteria
            </h2>
            <p className="text-gray-300 mb-6">
              Wanneer kies je voor een cobot en wanneer voor een traditionele industriële robot?
              De keuze hangt af van je specifieke toepassing, productieomgeving en bedrijfsstrategie.
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
                    <td className="py-4 px-4 font-medium text-white">Investering</td>
                    <td className="py-4 px-4">€25.000 - €75.000</td>
                    <td className="py-4 px-4">€75.000 - €500.000+</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Payload (draagvermogen)</td>
                    <td className="py-4 px-4">3-30 kg (meestal 5-16 kg)</td>
                    <td className="py-4 px-4">5-2.300+ kg</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Snelheid</td>
                    <td className="py-4 px-4">Max 1-2 m/s (veiligheidsbegrensd)</td>
                    <td className="py-4 px-4">Tot 10+ m/s</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Bereik (reach)</td>
                    <td className="py-4 px-4">500-1.850 mm</td>
                    <td className="py-4 px-4">500-4.000+ mm</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Veiligheid</td>
                    <td className="py-4 px-4">Geen afscherming nodig*</td>
                    <td className="py-4 px-4">Kooi/lichtscherm verplicht</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Programmeren</td>
                    <td className="py-4 px-4">Uren tot dagen (teach-in)</td>
                    <td className="py-4 px-4">Dagen tot weken (code)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Flexibiliteit</td>
                    <td className="py-4 px-4">Hoog - snel te herpositioneren</td>
                    <td className="py-4 px-4">Laag - vaste opstelling</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Implementatietijd</td>
                    <td className="py-4 px-4">2-8 weken</td>
                    <td className="py-4 px-4">2-6 maanden</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Best voor</td>
                    <td className="py-4 px-4">MKB, kleine series, assemblage, flexibele productie</td>
                    <td className="py-4 px-4">Hoge volumes, zware lasten, maximale snelheid</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-400 text-sm mb-6">* Afhankelijk van de applicatie en risicobeoordeling. Zie sectie Veiligheid.</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-primary-500 mb-3">Kies een Cobot als:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Payload &lt;25kg</li>
                  <li>• Operators naast de robot moeten werken</li>
                  <li>• Frequente productwissels (flexibiliteit nodig)</li>
                  <li>• Beperkt budget (&lt;€100.000)</li>
                  <li>• Geen dedicated robotprogrammeur beschikbaar</li>
                  <li>• Kleine tot middelgrote series</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">Kies een Industriële Robot als:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Payload &gt;25kg of zeer hoge snelheid nodig</li>
                  <li>• Afgeschermde cel acceptabel</li>
                  <li>• Stabiele, grote series (weinig wissels)</li>
                  <li>• Ruim budget en ruimte beschikbaar</li>
                  <li>• Dedicated technisch personeel aanwezig</li>
                  <li>• Cyclustijd kritiek (&lt;5 sec)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">Hybride Oplossingen</h4>
                  <p className="text-gray-300 m-0">
                    De grenzen vervagen: industriële robotfabrikanten (FANUC, ABB, KUKA) bieden nu ook cobots aan,
                    terwijl cobot-merken steeds krachtigere modellen lanceren (UR30, Doosan H2515).
                    Sommige applicaties combineren beide: cobot voor flexibele taken, industriële robot voor zware/snelle taken.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="toepassingen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary-500" />
              3. 15 Populaire Cobot-Toepassingen
            </h2>
            <p className="text-gray-300 mb-6">
              Cobots zijn uitermate geschikt voor taken die repetitief, ergonomisch belastend, of moeilijk te bemensen zijn.
              Hier zijn de meest voorkomende toepassingen in MKB-maakbedrijven, met typische ROI:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Machine Tending (Machine Belading)</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { num: 1, title: 'CNC Belading', desc: 'Laden/lossen van CNC-freesmachines en draaibanken', roi: '8-14 maanden' },
                    { num: 2, title: 'Spuitgieten', desc: 'Uitnemen van spuitgietproducten en inleggen van inserts', roi: '10-16 maanden' },
                    { num: 3, title: 'Persbelading', desc: 'Metaalplaten invoeren en uitnemen bij pers/stans', roi: '8-12 maanden' },
                  ].map((item) => (
                    <div key={item.num} className="bg-bg-primary rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">{item.num}</span>
                        <h5 className="font-bold text-white text-sm">{item.title}</h5>
                      </div>
                      <p className="text-gray-400 text-xs mb-2">{item.desc}</p>
                      <p className="text-primary-500 text-xs font-medium">ROI: {item.roi}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Pick & Place / Handling</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { num: 4, title: 'Palletiseren', desc: 'Dozen/producten stapelen op pallets (tot 25kg)', roi: '10-18 maanden' },
                    { num: 5, title: 'Verpakken', desc: 'Producten in dozen plaatsen, dozen vullen', roi: '12-18 maanden' },
                    { num: 6, title: 'Sorting', desc: 'Producten sorteren op kleur, maat, of type', roi: '14-20 maanden' },
                  ].map((item) => (
                    <div key={item.num} className="bg-bg-primary rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">{item.num}</span>
                        <h5 className="font-bold text-white text-sm">{item.title}</h5>
                      </div>
                      <p className="text-gray-400 text-xs mb-2">{item.desc}</p>
                      <p className="text-primary-500 text-xs font-medium">ROI: {item.roi}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Assemblage & Bewerking</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { num: 7, title: 'Schroeven', desc: 'Geautomatiseerd schroeven monteren met momentcontrole', roi: '10-14 maanden' },
                    { num: 8, title: 'Lijmen/Sealen', desc: 'Precisie-dosering van lijm, kit, of sealant', roi: '12-18 maanden' },
                    { num: 9, title: 'Assemblage', desc: 'Componenten monteren, clips bevestigen', roi: '12-18 maanden' },
                  ].map((item) => (
                    <div key={item.num} className="bg-bg-primary rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">{item.num}</span>
                        <h5 className="font-bold text-white text-sm">{item.title}</h5>
                      </div>
                      <p className="text-gray-400 text-xs mb-2">{item.desc}</p>
                      <p className="text-primary-500 text-xs font-medium">ROI: {item.roi}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Oppervlaktebehandeling</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { num: 10, title: 'Schuren', desc: 'Oppervlaktebehandeling met constante druk', roi: '10-16 maanden' },
                    { num: 11, title: 'Polijsten', desc: 'Glanzende afwerking op metaal/kunststof', roi: '12-18 maanden' },
                    { num: 12, title: 'Ontbramen', desc: 'Bramen verwijderen na CNC-bewerking', roi: '10-14 maanden' },
                  ].map((item) => (
                    <div key={item.num} className="bg-bg-primary rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">{item.num}</span>
                        <h5 className="font-bold text-white text-sm">{item.title}</h5>
                      </div>
                      <p className="text-gray-400 text-xs mb-2">{item.desc}</p>
                      <p className="text-primary-500 text-xs font-medium">ROI: {item.roi}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">Lassen & Inspectie</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { num: 13, title: 'MIG/MAG Lassen', desc: 'Geautomatiseerd lassen van kleine series', roi: '12-18 maanden' },
                    { num: 14, title: 'Kwaliteitsinspectie', desc: 'Cobot + vision voor 100% visuele controle', roi: '14-20 maanden' },
                    { num: 15, title: 'Functioneel Testen', desc: 'Geautomatiseerd testen met meetapparatuur', roi: '16-24 maanden' },
                  ].map((item) => (
                    <div key={item.num} className="bg-bg-primary rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">{item.num}</span>
                        <h5 className="font-bold text-white text-sm">{item.title}</h5>
                      </div>
                      <p className="text-gray-400 text-xs mb-2">{item.desc}</p>
                      <p className="text-primary-500 text-xs font-medium">ROI: {item.roi}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Toepassing Selecteren: De Gouden Regels</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Repetitief:</strong> Taak wordt &gt;100× per dag herhaald</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Ergonomisch:</strong> Taak veroorzaakt RSI of fysieke klachten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Bemensing:</strong> Moeilijk om personeel te vinden voor de taak</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Consistentie:</strong> Kwaliteitsvariatie door menselijke factor</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Praktijkcases */}
          <section id="praktijkcases" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary-500" />
              4. 10 Praktijkcases uit de Nederlandse Maakindustrie
            </h2>
            <p className="text-gray-300 mb-6">
              Concrete voorbeelden uit onze projectpraktijk. Bedrijfsnamen zijn geanonimiseerd, de resultaten zijn echt.
            </p>

            <div className="space-y-6">
              {/* Cases 1-5 detailed */}
              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 1: CNC Machine Belading – Metaalbewerker</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">ROI: 9 maanden</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 6 CNC-draaibanken, 2-ploegendienst</li>
                        <li>• 1 operator per 2 machines (wachttijd)</li>
                        <li>• Personeelstekort, veel overwerk</li>
                        <li>• Cyclustijd: 4-8 minuten per stuk</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Oplossing</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• UR10e cobot met pneumatische gripper</li>
                        <li>• Invoerband voor ruw materiaal</li>
                        <li>• Uitvoerband voor bewerkte delen</li>
                        <li>• Integratie met CNC-besturing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">€52k</p>
                        <p className="text-xs text-gray-500">Investering</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">+35%</p>
                        <p className="text-xs text-gray-500">Output</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">24/7</p>
                        <p className="text-xs text-gray-500">Capaciteit</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€68k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 2: End-of-Line Palletiseren – Voedingsproducent</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">ROI: 14 maanden</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 3 verpakkingslijnen, dozen 5-12 kg</li>
                        <li>• 2 FTE dedicated aan palletiseren</li>
                        <li>• Hoog verzuim door fysieke belasting</li>
                        <li>• Wisselende palletpatronen per product</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Oplossing</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• UR16e cobot met vacuüm-gripper</li>
                        <li>• Palletstation met palletwisselsysteem</li>
                        <li>• 8 voorgeprogrammeerde patronen</li>
                        <li>• Operator selecteert product via touchscreen</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">€68k</p>
                        <p className="text-xs text-gray-500">Investering</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">-100%</p>
                        <p className="text-xs text-gray-500">RSI-klachten</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">2→0</p>
                        <p className="text-xs text-gray-500">FTE op taak</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€58k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-primary-500/10 px-6 py-4 border-b border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">Case 3: Schroefassemblage – Elektrotechnisch Bedrijf</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">ROI: 11 maanden</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Situatie</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Schakelkasten assembleren</li>
                        <li>• 12 schroeven per kast, 200 kasten/dag</li>
                        <li>• Kwaliteitsproblemen (schroeven te los/strak)</li>
                        <li>• RSI-klachten bij operators</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Oplossing</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• UR5e cobot met schroefunit (OnRobot)</li>
                        <li>• Automatische schroeftoevoer</li>
                        <li>• Momentcontrole per schroef (logging)</li>
                        <li>• Positionering via vision systeem</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-bg-primary rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-green-500">€48k</p>
                        <p className="text-xs text-gray-500">Investering</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">0%</p>
                        <p className="text-xs text-gray-500">Afkeur (was 4%)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">+25%</p>
                        <p className="text-xs text-gray-500">Snelheid</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">€52k</p>
                        <p className="text-xs text-gray-500">Jaarlijkse besparing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cases 4-10 compact */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 4: Spuitgiet Uitname</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 12 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Kunststof onderdelen uitnemen + inserts inleggen. FANUC CRX-10iA.</p>
                  <p className="text-primary-500 text-sm font-medium">€45k investering → €46k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 5: MIG/MAG Lassen</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 15 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Lashoeken van stalen frames. UR10e + Fronius lastoorts.</p>
                  <p className="text-primary-500 text-sm font-medium">€72k investering → €58k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 6: Vision Inspectie</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 18 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">100% controle op printplaten. TM Robot met ingebouwde camera.</p>
                  <p className="text-primary-500 text-sm font-medium">€55k investering → €37k/jaar besparing + 0% escapes</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 7: Schuren Metaal</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 13 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Ontbramen en schuren van RVS onderdelen. UR10e + FerRobotics schuurkop.</p>
                  <p className="text-primary-500 text-sm font-medium">€58k investering → €54k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 8: Dozen Vullen</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 16 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Cosmetica tubes in dozen plaatsen. Doosan M1013 + vacuüm-gripper.</p>
                  <p className="text-primary-500 text-sm font-medium">€42k investering → €32k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 9: Lijmen Appliceren</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 14 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Structureel lijmen van automotive onderdelen. ABB GoFa + doseersysteem.</p>
                  <p className="text-primary-500 text-sm font-medium">€65k investering → €56k/jaar besparing</p>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">Case 10: PCB Testen</h4>
                    <span className="text-green-400 text-sm font-bold">ROI: 20 mnd</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Functionele tests op elektronica. UR3e + test-fixture integratie.</p>
                  <p className="text-primary-500 text-sm font-medium">€38k investering → €23k/jaar besparing + 100% traceability</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6 mt-6">
              <p className="text-white m-0">
                <strong>Gemiddelde ROI:</strong> Onze cobot-projecten realiseren gemiddeld <strong>12-16 maanden terugverdientijd</strong>.
                Beste resultaten bij CNC-belading (8-12 maanden) door hoge arbeidsintensiteit en continue productie.
              </p>
            </div>
          </section>

          {/* Section 5 - ROI */}
          <section id="roi-berekenen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-primary-500" />
              5. ROI Berekenen: Complete Terugverdientijd Analyse
            </h2>
            <p className="text-gray-300 mb-6">
              Een realistische ROI-berekening is cruciaal voor een succesvolle business case.
              Hier is een gedetailleerd framework met alle kostenposten en besparingen.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Kosten Overzicht</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-bold">Kostenpost</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-bold">Typisch bedrag</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-bold">Opmerking</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Cobot (arm)</td>
                    <td className="py-4 px-4">€25.000 - €55.000</td>
                    <td className="py-4 px-4 text-sm">Afhankelijk van payload en bereik</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Gripper / End-effector</td>
                    <td className="py-4 px-4">€2.000 - €15.000</td>
                    <td className="py-4 px-4 text-sm">Vacuüm, pneumatisch, of elektrisch</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Vision systeem</td>
                    <td className="py-4 px-4">€3.000 - €20.000</td>
                    <td className="py-4 px-4 text-sm">Indien nodig voor positionering/inspectie</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Werkcel / Frame</td>
                    <td className="py-4 px-4">€2.000 - €10.000</td>
                    <td className="py-4 px-4 text-sm">Tafel, frame, fixtures</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Integratie & Programmering</td>
                    <td className="py-4 px-4">€5.000 - €25.000</td>
                    <td className="py-4 px-4 text-sm">Afhankelijk van complexiteit</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">Training</td>
                    <td className="py-4 px-4">€1.000 - €3.000</td>
                    <td className="py-4 px-4 text-sm">Bediening + basis programmeren</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium text-white">CE-certificering</td>
                    <td className="py-4 px-4">€2.000 - €8.000</td>
                    <td className="py-4 px-4 text-sm">Risicobeoordeling + documentatie</td>
                  </tr>
                  <tr className="bg-primary-500/10">
                    <td className="py-4 px-4 font-bold text-white">TOTAAL INVESTERING</td>
                    <td className="py-4 px-4 font-bold text-primary-500">€40.000 - €130.000</td>
                    <td className="py-4 px-4 text-sm">Typisch €50.000 - €70.000 voor standaard applicatie</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Besparingen & Opbrengsten</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-400 mb-3">Directe Besparingen</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white font-medium">Arbeidskosten</p>
                    <p className="text-gray-400 text-sm">1 FTE × €50.000-€70.000/jaar (incl. sociale lasten)</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Minder afkeur</p>
                    <p className="text-gray-400 text-sm">Constante kwaliteit, typisch 1-3% verbetering</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Minder stilstand</p>
                    <p className="text-gray-400 text-sm">Geen pauzes, geen wisselende prestaties</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Minder ziekteverzuim</p>
                    <p className="text-gray-400 text-sm">Geen RSI, minder fysieke belasting</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-3">Indirecte Baten</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white font-medium">Extra productiecapaciteit</p>
                    <p className="text-gray-400 text-sm">24/7 productie mogelijk, 3e shift zonder extra personeel</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Snellere levertijd</p>
                    <p className="text-gray-400 text-sm">Hogere output = kortere doorlooptijd</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Klanttevredenheid</p>
                    <p className="text-gray-400 text-sm">Consistente kwaliteit, minder klachten</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Personeelsbehoud</p>
                    <p className="text-gray-400 text-sm">Aantrekkelijkere werkplek, minder verloop</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Rekenvoorbeeld: CNC Belading</h3>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-bg-primary rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Huidige situatie (1 operator, 1 shift)</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Bruto uurloon: €28/uur</li>
                    <li>• 1.760 uur/jaar × €28 = €49.280</li>
                    <li>• + sociale lasten (40%): €19.712</li>
                    <li>• <strong className="text-white">Totaal: €68.992/jaar</strong></li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Met cobot</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Cobot UR10e: €38.000</li>
                    <li>• Gripper: €4.500</li>
                    <li>• Integratie: €12.000</li>
                    <li>• <strong className="text-white">Totaal investering: €54.500</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm mb-1">Terugverdientijd</p>
                <p className="text-4xl font-bold text-primary-500 mb-1">9.5 maanden</p>
                <p className="text-sm text-gray-400">€54.500 / €68.992 × 12 = 9.5 maanden</p>
              </div>
            </div>

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

          {/* Section 6 - Veiligheid */}
          <section id="veiligheid" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary-500" />
              6. Veiligheid, Normen & CE-Certificering
            </h2>
            <p className="text-gray-300 mb-6">
              &quot;Cobot = veilig&quot; is een gevaarlijke oversimplificatie. De veiligheid hangt af van de complete applicatie:
              cobot + gripper + product + omgeving. Hier is wat je moet weten.
            </p>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">Kritiek: Risicobeoordeling is Verplicht!</h4>
                  <p className="text-gray-300 m-0">
                    Een cobot met een scherpe gripper, gevaarlijk product, of te hoge snelheid kan wel degelijk letsel veroorzaken.
                    De Europese Machinerichtlijn (2006/42/EG) vereist een risicobeoordeling voor elke installatie.
                    <strong className="text-white"> CE-markering is verplicht!</strong>
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Relevante Normen</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">Machinerichtlijn 2006/42/EG</h4>
                <p className="text-gray-400 text-sm">Europese wetgeving. Bij installatie van een cobot creëer je een &quot;samenstel van machines&quot; – nieuwe CE-markering vereist. Geldt ook voor kleine wijzigingen aan bestaande machines.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">ISO 10218-1 & 10218-2</h4>
                <p className="text-gray-400 text-sm">Veiligheidseisen voor industriële robots (10218-1) en robot-systemen/integratie (10218-2). Basis voor CE-markering. Verplicht om te volgen.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">ISO/TS 15066</h4>
                <p className="text-gray-400 text-sm">Specifiek voor collaborative robots. Definieert maximale krachten en drukken bij contact mens-robot voor verschillende lichaamsdelen. De &quot;cobot-bijbel&quot;.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">ISO 12100</h4>
                <p className="text-gray-400 text-sm">Algemene principes voor risicobeoordeling en risicovermindering. Basis voor elke CE-markering.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">4 Veiligheidsmethoden (ISO 10218-2)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">1</span>
                  <h4 className="font-bold text-white">Safety-rated Monitored Stop</h4>
                </div>
                <p className="text-gray-400 text-sm">Robot stopt automatisch als mens de werkzone betreedt. Hervat bij verlaten zone.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">2</span>
                  <h4 className="font-bold text-white">Hand Guiding</h4>
                </div>
                <p className="text-gray-400 text-sm">Operator kan robot handmatig bewegen voor teach-in programmering. Veilig door lage kracht.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">3</span>
                  <h4 className="font-bold text-white">Speed & Separation Monitoring</h4>
                </div>
                <p className="text-gray-400 text-sm">Robot detecteert afstand tot mens en past snelheid aan. Stopt bij te dichtbij nadering.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">4</span>
                  <h4 className="font-bold text-white">Power & Force Limiting</h4>
                </div>
                <p className="text-gray-400 text-sm">Meest gebruikte methode bij cobots. Kracht beperkt tot veilige waarden conform ISO/TS 15066.</p>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">CE-Certificering: Stappenplan</h4>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">1.</span>
                  <span>Risicobeoordeling uitvoeren (ISO 12100)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">2.</span>
                  <span>Veiligheidsmaatregelen bepalen en implementeren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">3.</span>
                  <span>Kracht-/drukmeting uitvoeren (ISO/TS 15066 limieten)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">4.</span>
                  <span>Technisch dossier samenstellen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">5.</span>
                  <span>EU-conformiteitsverklaring opstellen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold">6.</span>
                  <span>CE-markering aanbrengen</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 7 - Merken */}
          <section id="merken" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-500" />
              7. Cobot Merken Vergelijken (2025 Update)
            </h2>
            <p className="text-gray-300 mb-6">
              De cobot-markt is in 2025 volwassen geworden met meerdere gevestigde spelers.
              Hier is een actueel overzicht van de belangrijkste merken.
            </p>

            <div className="space-y-4">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">MARKTLEIDER</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Universal Robots (UR)</h4>
                <p className="text-gray-400 text-sm mb-3">Deense pionier, wereldwijd marktleider (&gt;50% marktaandeel). Grootste ecosysteem van partners en accessoires (UR+).</p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Modellen:</p>
                    <p className="text-gray-400 text-xs">UR3e (3kg), UR5e (5kg), UR10e (12.5kg), UR16e (16kg), UR20 (20kg), UR30 (30kg)</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Prijsrange:</p>
                    <p className="text-gray-400 text-xs">€28.000 - €55.000 (alleen arm)</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Grootste ecosysteem</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Beste support/documentatie</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Polyscope interface</span>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">FANUC CRX</h4>
                <p className="text-gray-400 text-sm mb-3">Japanse robotgigant met sterke cobot-lijn. Bekend om betrouwbaarheid, IP67 beschikbaar, uitstekend servicenetwerk.</p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Modellen:</p>
                    <p className="text-gray-400 text-xs">CRX-5iA (5kg), CRX-10iA (10kg), CRX-10iA/L (10kg, lang bereik), CRX-20iA (20kg), CRX-25iA (25kg)</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Prijsrange:</p>
                    <p className="text-gray-400 text-xs">€30.000 - €50.000</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">IP67 beschikbaar</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Tablet-interface</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Wereldwijd servicenetwerk</span>
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">ABB GoFa & SWIFTI</h4>
                <p className="text-gray-400 text-sm mb-3">Zwitsers-Zweedse multinational. GoFa voor standaard cobot-applicaties, SWIFTI voor hogere snelheid.</p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Modellen:</p>
                    <p className="text-gray-400 text-xs">GoFa CRB 15000 (5kg), SWIFTI CRB 1100 (4kg, snel)</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Prijsrange:</p>
                    <p className="text-gray-400 text-xs">€32.000 - €48.000</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">OmniCore controller</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">RobotStudio software</span>
                  <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Lead-through programmeren</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Doosan Robotics</h4>
                  <p className="text-gray-400 text-sm mb-2">Zuid-Koreaans, competitieve prijzen, goed gamma. M-serie (standard), H-serie (high payload).</p>
                  <p className="text-gray-400 text-xs mb-2">Payload: 6-25kg | Prijs: €25.000-€45.000</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Scherpe prijs</span>
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Dart-platform</span>
                  </div>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Techman (TM Robot)</h4>
                  <p className="text-gray-400 text-sm mb-2">Taiwanees, uniek door ingebouwde vision camera. Ideaal voor vision-applicaties zonder extra systeem.</p>
                  <p className="text-gray-400 text-xs mb-2">Payload: 4-25kg | Prijs: €28.000-€50.000</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Ingebouwde camera</span>
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">AI-vision</span>
                  </div>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">KUKA LBR iiwa</h4>
                  <p className="text-gray-400 text-sm mb-2">Duits premium merk. 7-assige cobot voor hoogste precisie en gevoeligheid. Automotive-standaard.</p>
                  <p className="text-gray-400 text-xs mb-2">Payload: 7-14kg | Prijs: €45.000-€70.000</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">7 assen</span>
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Hoogste precisie</span>
                  </div>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Franka Emika (Panda)</h4>
                  <p className="text-gray-400 text-sm mb-2">Duits, research-fokus. Zeer gevoelige kracht-/momentregeling. Populair in R&D en universiteiten.</p>
                  <p className="text-gray-400 text-xs mb-2">Payload: 3kg | Prijs: €20.000-€30.000</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Research-grade</span>
                    <span className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">Open interface</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 - Grippers */}
          <section id="grippers" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-primary-500" />
              8. Grippers & End-Effectors Kiezen
            </h2>
            <p className="text-gray-300 mb-6">
              De gripper bepaalt 50% van het succes van je cobot-project. Investeer tijd in de juiste selectie.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Vacuüm Grippers</h4>
                <p className="text-gray-400 text-sm mb-3">Ideaal voor platte, gladde oppervlakken. Dozen, platen, kunststof onderdelen.</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-3">
                  <li>• Prijs: €1.500 - €5.000</li>
                  <li>• Merken: Schmalz, Piab, OnRobot VGC10</li>
                  <li>• Let op: luchtkwaliteit, poreuze materialen</li>
                </ul>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Best voor: palletiseren, machine tending</span>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Pneumatische Grippers</h4>
                <p className="text-gray-400 text-sm mb-3">Twee-vinger of drie-vinger, krachtige grip. Metalen onderdelen, ronde objecten.</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-3">
                  <li>• Prijs: €1.000 - €4.000</li>
                  <li>• Merken: SMC, Festo, Schunk</li>
                  <li>• Let op: perslucht vereist</li>
                </ul>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Best voor: CNC-belading, handling</span>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Elektrische Grippers</h4>
                <p className="text-gray-400 text-sm mb-3">Programmeerbare grijpkracht en positie. Flexibel voor wisselende producten.</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-3">
                  <li>• Prijs: €3.000 - €8.000</li>
                  <li>• Merken: OnRobot RG2/RG6, Robotiq 2F-85</li>
                  <li>• Let op: hoger gewicht</li>
                </ul>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Best voor: flexibele productie, assemblage</span>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Soft Grippers</h4>
                <p className="text-gray-400 text-sm mb-3">Flexibele vingers voor delicate of onregelmatige producten. Voedsel, fruit, zachte materialen.</p>
                <ul className="text-gray-400 text-sm space-y-1 mb-3">
                  <li>• Prijs: €4.000 - €12.000</li>
                  <li>• Merken: OnRobot Soft Gripper, SoftRobotics</li>
                  <li>• Let op: beperkte kracht</li>
                </ul>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Best voor: food, delicate items</span>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Gripper Selectie Checklist</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Gewicht van het product?
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Afmetingen en vorm?
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Oppervlak (glad, ruw, poreus)?
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Variatie in producten?
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Cyclustijd vereisten?
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Cleanroom/food-grade nodig?
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 - Implementatie */}
          <section id="implementatie" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary-500" />
              9. Implementatie Stappenplan
            </h2>
            <p className="text-gray-300 mb-6">
              Een succesvolle cobot-implementatie volgt een gestructureerd proces. Hier is het bewezen stappenplan.
            </p>

            <div className="space-y-6">
              {[
                { fase: 'Fase 1', title: 'Analyse & Haalbaarheid', items: ['Identificeer geschikte taken (repetitief, ergonomisch, bemensing)', 'Verzamel data: cyclustijd, volumes, varianten', 'Bereken ROI/terugverdientijd', 'Bepaal payload, reach, cyclustijd requirements', 'Go/no-go beslissing'] },
                { fase: 'Fase 2', title: 'Selectie & Ontwerp', items: ['Selecteer cobot-merk en model', 'Kies gripper/end-effector (test met echte producten!)', 'Ontwerp werkcel-layout', 'Plan integratie met bestaande machines/processen', 'Offerte en orderplaatsing'] },
                { fase: 'Fase 3', title: 'Risicobeoordeling & CE', items: ['Voer risicoanalyse uit (ISO 12100)', 'Bepaal veiligheidsmaatregelen', 'Kracht-/drukmeting (ISO/TS 15066)', 'Stel CE-documentatie op', 'Valideer veiligheidsconcept'] },
                { fase: 'Fase 4', title: 'Installatie & Programmering', items: ['Installeer hardware (cobot, gripper, fixtures)', 'Programmeer bewegingen en logica', 'Integreer met PLC/machines indien nodig', 'Test en optimaliseer cyclustijd', 'Valideer kwaliteit output'] },
                { fase: 'Fase 5', title: 'Training & Overdracht', items: ['Train operators (bediening, storingen)', 'Train technici (programmeren, onderhoud)', 'Documenteer procedures en troubleshooting', 'Start productie met begeleiding', 'Evaluatie en fine-tuning'] },
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

          {/* Section 10 - Fouten */}
          <section id="veelgemaakte-fouten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary-500" />
              10. 10 Veelgemaakte Fouten bij Cobot-Projecten
            </h2>
            <div className="space-y-4">
              {[
                { fout: 'Te optimistische cyclustijd', uitleg: 'Cobots zijn langzamer dan industriële robots. Reken met realistische snelheden inclusief veiligheidsvertragingen. Factor 1.5-2× manual tijd is realistisch.' },
                { fout: 'Gripper als afterthought', uitleg: 'De gripper bepaalt 50% van het succes. Investeer tijd in selectie en test met echte producten voordat je bestelt.' },
                { fout: 'Veiligheid onderschatten', uitleg: 'Cobot ≠ automatisch veilig. De combinatie met gripper, product en omgeving bepaalt het risico. CE-markering is verplicht!' },
                { fout: 'Operators niet betrekken', uitleg: 'Betrek operators vanaf dag 1. Zij kennen de taken het beste en moeten straks met de robot werken. Weerstand = mislukt project.' },
                { fout: 'Geen plan voor stilstand', uitleg: 'Wat als de cobot uitvalt? Zorg voor fallback-scenario: kan een operator de taak overnemen? Heb je spare parts?' },
                { fout: 'Te complexe eerste applicatie', uitleg: 'Start simpel! Eerste project moet succesvol zijn voor draagvlak. Kies een duidelijke, repetitieve taak met lage variatie.' },
                { fout: 'Integratie onderschatten', uitleg: 'Cobot + machine = integratie-uitdaging. Plan tijd en budget voor PLC-koppeling, signalen, en timing.' },
                { fout: 'Geen eigenaar aanwijzen', uitleg: 'Wie is verantwoordelijk voor de cobot? Programmering, onderhoud, troubleshooting? Wijs een interne &quot;cobot-champion&quot; aan.' },
                { fout: 'ROI alleen op arbeidsbesparing', uitleg: 'Kijk ook naar: kwaliteitsverbetering, capaciteitsuitbreiding, ziekteverzuim, en indirecte baten. Totale business case is breder.' },
                { fout: 'Leverancier niet evalueren', uitleg: 'Koop niet alleen een cobot – koop een partner. Evalueer: support, training, ervaring in jouw sector, referenties.' },
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

          {/* Section 11 - FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary-500" />
              11. Veelgestelde Vragen (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                { q: 'Wat kost een cobot inclusief installatie?', a: 'Een complete cobot-installatie (arm + gripper + integratie + CE) kost typisch €40.000-€80.000 voor standaard applicaties. Complexere projecten met vision of speciale tooling kunnen oplopen tot €100.000-€130.000.' },
                { q: 'Hoe lang duurt de terugverdientijd?', a: 'Gemiddeld 12-18 maanden. CNC-belading scoort het beste (8-14 maanden), palletiseren en assemblage zitten rond 12-18 maanden.' },
                { q: 'Heb ik een robotprogrammeur nodig?', a: 'Nee, niet voor standaard applicaties. Moderne cobots hebben intuïtieve interfaces (teach-in, drag & drop). Na 1-2 dagen training kan een operator basis-programmas maken.' },
                { q: 'Is een cobot écht veilig?', a: 'De cobot zelf heeft veiligheidsfuncties, maar de totale applicatie (gripper + product + omgeving) bepaalt de veiligheid. Een risicobeoordeling en eventuele maatregelen zijn altijd nodig. CE-markering is verplicht.' },
                { q: 'Kan een cobot 24/7 draaien?', a: 'Ja, cobots zijn ontworpen voor continue productie. Ze hebben geen pauzes nodig. Wel periodiek onderhoud plannen (smeren, controles). MTBF (mean time between failures) is typisch >80.000 uur.' },
                { q: 'Welk merk moet ik kiezen?', a: 'Universal Robots is marktleider met het grootste ecosysteem – veilige keuze. FANUC voor industriële omgeving en service. Doosan voor scherpe prijs. TM Robot als vision belangrijk is. Laat je adviseren op basis van jouw specifieke applicatie.' },
                { q: 'Past een cobot in mijn bestaande productieomgeving?', a: 'Meestal wel. Cobots zijn compact en flexibel. Ze kunnen naast bestaande machines geplaatst worden zonder grote aanpassingen. Wel checken: vloersterkte, stroomvoorziening, eventueel perslucht.' },
                { q: 'Wat zijn de onderhoudskosten?', a: 'Laag. Cobots hebben weinig slijtonderdelen. Typisch €500-€2.000/jaar voor onderhoud. Belangrijkste: periodieke smering (elk 1-2 jaar) en visuele inspectie. Geen jaarlijkse calibratie verplicht.' },
              ].map((item, i) => (
                <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                  <p className="text-gray-400 m-0">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 12: CTA */}
          <section id="aan-de-slag" className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-primary-500" />
              12. Direct aan de Slag
            </h2>
            <p className="text-gray-300 mb-6">
              Overweeg je een cobot voor jouw productie? Proces360 helpt je van analyse tot implementatie.
              Merkonafhankelijk advies, ervaring met 50+ cobot-projecten.
            </p>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bereken je cobot-ROI in 3 minuten
              </h3>
              <p className="text-gray-400 mb-6">
                Ontdek of robotisering rendabel is voor jouw bedrijf – en wat de terugverdientijd is.
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
                  href="/contact?subject=cobot"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  Plan een kennismaking
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
                Rob heeft 50+ cobot-implementaties begeleid in de Nederlandse en Belgische maakindustrie.
                Van haalbaarheidsanalyse tot inbedrijfstelling – pragmatisch, merkonafhankelijk, resultaatgericht.
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
            <Link href="/blog/cobot-terugverdientijd-berekenen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobot Terugverdientijd Berekenen: Complete ROI-Gids</h4>
              <p className="text-sm text-gray-400">Gedetailleerde ROI-analyse met 5 praktijkcases en subsidie-overzicht.</p>
            </Link>
            <Link href="/blog/oee-verbeteren-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">OEE Verbeteren: De Complete Gids</h4>
              <p className="text-sm text-gray-400">Hoe cobots je OEE verbeteren met hogere beschikbaarheid en consistente kwaliteit.</p>
            </Link>
            <Link href="/blog/productie-strategie-automatisering" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Productiestrategie & Automatisering</h4>
              <p className="text-sm text-gray-400">Strategisch automatiseren: waar begin je en wat levert het op?</p>
            </Link>
            <Link href="/blog/industrie-4-mkb-praktisch" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Industrie 4.0 voor MKB: Praktisch</h4>
              <p className="text-sm text-gray-400">Smart industry implementeren zonder miljoeneninvestering.</p>
            </Link>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-12 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Gerelateerde Diensten</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/diensten/cobot-integratie" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Cobot Integratie
            </Link>
            <Link href="/diensten/industriele-automatisering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Industriële Automatisering
            </Link>
            <Link href="/diensten/oee-verbetering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              OEE Verbetering
            </Link>
            <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Procesoptimalisatie
            </Link>
            <Link href="/diensten/productie-dashboards" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Productie Dashboards
            </Link>
            <Link href="/roi-calculator" className="flex items-center gap-2 text-primary-500 hover:underline">
              <ArrowRight className="w-4 h-4" />
              Gratis ROI Calculator
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
