'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, Target, TrendingUp, Lightbulb, BarChart3, Cog, Factory, Users, ArrowRight } from 'lucide-react';

export default function StrategieArticlePage() {
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
            Strategie & Management
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Productiestrategie & Automatisering: Van Visie naar Uitvoering
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Hoe ontwikkel je een automatiseringsstrategie die past bij jouw MKB-maakbedrijf?
            Van quick wins tot lange termijn roadmap. Inclusief prioriteringsmatrix en investeringsframework.
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
              14 min leestijd
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Inhoudsopgave</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#waarom-strategie" className="hover:text-primary-500 transition-colors">1. Waarom een Automatiseringsstrategie?</a></li>
            <li><a href="#huidige-situatie" className="hover:text-primary-500 transition-colors">2. Je Huidige Situatie Analyseren</a></li>
            <li><a href="#prioriteren" className="hover:text-primary-500 transition-colors">3. Automatiseringskansen Prioriteren</a></li>
            <li><a href="#roadmap" className="hover:text-primary-500 transition-colors">4. De Automatiserings-Roadmap</a></li>
            <li><a href="#business-case" className="hover:text-primary-500 transition-colors">5. Business Case Opstellen</a></li>
            <li><a href="#change-management" className="hover:text-primary-500 transition-colors">6. Change Management</a></li>
            <li><a href="#valkuilen" className="hover:text-primary-500 transition-colors">7. 6 Strategische Valkuilen</a></li>
            <li><a href="#aan-de-slag" className="hover:text-primary-500 transition-colors">8. Direct aan de Slag</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          {/* Intro */}
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> 70% van de automatiseringsprojecten faalt door gebrekkige strategie, niet door technologie.
              Een goede automatiseringsstrategie begint met &quot;waarom&quot;, niet met &quot;welke robot&quot;.
              In dit artikel leer je hoe je strategisch automatiseert voor maximale ROI.
            </p>
          </div>

          {/* Section 1 */}
          <section id="waarom-strategie" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary-500" />
              1. Waarom een Automatiseringsstrategie?
            </h2>
            <p className="text-gray-300 mb-4">
              Automatisering zonder strategie is als navigeren zonder kompas. Je investeert misschien in de verkeerde dingen,
              op het verkeerde moment, met het verkeerde doel. Een strategie zorgt voor:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Focus</strong> – Investeer in wat de meeste impact heeft</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Samenhang</strong> – Projecten bouwen op elkaar voort</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Draagvlak</strong> – Iedereen begrijpt de richting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">ROI</strong> – Betere investeringsbeslissingen</span>
              </li>
            </ul>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">De 3 Strategische Vragen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-white">WAAROM automatiseren?</h4>
                    <p className="text-gray-400 text-sm m-0">Kostenbesparing? Kwaliteit? Capaciteit? Personeelsgebrek? Ken je primaire driver.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-white">WAT automatiseren?</h4>
                    <p className="text-gray-400 text-sm m-0">Welke processen hebben de hoogste impact/effort ratio?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-white">HOE automatiseren?</h4>
                    <p className="text-gray-400 text-sm m-0">Welke technologie? In-house of met partner? Fasering?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="huidige-situatie" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary-500" />
              2. Je Huidige Situatie Analyseren
            </h2>
            <p className="text-gray-300 mb-6">
              Voordat je automatiseert, moet je weten waar je staat. Een goede analyse omvat:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Factory className="w-5 h-5 text-primary-500" />
                  Procesanalyse
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Value Stream Mapping</li>
                  <li>• Bottleneck identificatie</li>
                  <li>• Cyclustijd-analyse</li>
                  <li>• Kwaliteitsdata (afkeur %)</li>
                </ul>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-500" />
                  Prestatie-indicatoren
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• OEE per machine/lijn</li>
                  <li>• Arbeidsproductiviteit</li>
                  <li>• Doorlooptijd</li>
                  <li>• Kosten per eenheid</li>
                </ul>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  Mens & Organisatie
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Beschikbaar talent</li>
                  <li>• Technische kennis</li>
                  <li>• Veranderbereidheid</li>
                  <li>• Personeelsverloop</li>
                </ul>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Cog className="w-5 h-5 text-primary-500" />
                  Technologie & Infrastructuur
                </h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Huidige automatiseringsgraad</li>
                  <li>• Machine-connectiviteit</li>
                  <li>• Data-infrastructuur</li>
                  <li>• IT/OT integratie</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <p className="text-white m-0">
                <strong>Pro tip:</strong> Besteed minimaal 2 weken aan analyse voordat je over oplossingen nadenkt.
                De beste automatiseringsprojecten komen voort uit diep begrip van het probleem.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="prioriteren" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-500" />
              3. Automatiseringskansen Prioriteren
            </h2>
            <p className="text-gray-300 mb-6">
              Niet alles kan tegelijk. Gebruik de Impact/Effort Matrix om te prioriteren:
            </p>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Impact/Effort Matrix</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <h4 className="font-bold text-green-400 mb-2">Quick Wins</h4>
                  <p className="text-xs text-gray-400 mb-2">Hoge impact, lage effort</p>
                  <p className="text-sm text-gray-300">Start hier! Snel resultaat, bouwt momentum.</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <h4 className="font-bold text-blue-400 mb-2">Grote Projecten</h4>
                  <p className="text-xs text-gray-400 mb-2">Hoge impact, hoge effort</p>
                  <p className="text-sm text-gray-300">Plan zorgvuldig. Strategisch belangrijk.</p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <h4 className="font-bold text-yellow-400 mb-2">Fill-ins</h4>
                  <p className="text-xs text-gray-400 mb-2">Lage impact, lage effort</p>
                  <p className="text-sm text-gray-300">Doe als tijd over is. Nice to have.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h4 className="font-bold text-red-400 mb-2">Vermijden</h4>
                  <p className="text-xs text-gray-400 mb-2">Lage impact, hoge effort</p>
                  <p className="text-sm text-gray-300">Niet doen. Slechte ROI.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Criteria voor Impact-score</h3>
            <ul className="space-y-2 mb-6 text-gray-300">
              <li><strong className="text-white">Kostenbesparing:</strong> Hoeveel €/jaar bespaar je?</li>
              <li><strong className="text-white">Capaciteitsverhoging:</strong> Hoeveel % meer output?</li>
              <li><strong className="text-white">Kwaliteitsverbetering:</strong> Hoeveel % minder afkeur?</li>
              <li><strong className="text-white">Strategisch belang:</strong> Past het bij de bedrijfsvisie?</li>
              <li><strong className="text-white">Urgentie:</strong> Hoe snel is actie nodig?</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Criteria voor Effort-score</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Investering:</strong> Wat is de totale kost?</li>
              <li><strong className="text-white">Doorlooptijd:</strong> Hoe lang duurt implementatie?</li>
              <li><strong className="text-white">Complexiteit:</strong> Hoeveel integratie/aanpassing nodig?</li>
              <li><strong className="text-white">Risico:</strong> Wat kan er misgaan?</li>
              <li><strong className="text-white">Verandering:</strong> Hoeveel impact op medewerkers?</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="roadmap" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              4. De Automatiserings-Roadmap
            </h2>
            <p className="text-gray-300 mb-6">
              Een roadmap vertaalt strategie naar actie. Typisch beslaat deze 3-5 jaar met jaarlijkse mijlpalen.
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">JAAR 1</span>
                  <h4 className="font-bold text-white">Fundament & Quick Wins</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• OEE-monitoring implementeren</li>
                  <li>• Eerste cobot-pilot (lage risico toepassing)</li>
                  <li>• Data-infrastructuur opzetten</li>
                  <li>• Team trainen in basis automatisering</li>
                </ul>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">JAAR 2</span>
                  <h4 className="font-bold text-white">Uitrol & Schaalvergroting</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Cobot-succes uitrollen naar andere lijnen</li>
                  <li>• Vision-systemen voor kwaliteitscontrole</li>
                  <li>• AGV/AMR voor intern transport</li>
                  <li>• MES-systeem implementeren</li>
                </ul>
              </div>

              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full">JAAR 3-5</span>
                  <h4 className="font-bold text-white">Optimalisatie & Integratie</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• End-to-end proces-automatisering</li>
                  <li>• Predictive maintenance</li>
                  <li>• AI-gestuurde planning</li>
                  <li>• Digital twin ontwikkeling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="business-case" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              5. Business Case Opstellen
            </h2>
            <p className="text-gray-300 mb-6">
              Elke automatiseringsinvestering verdient een solide business case. Hier is het framework:
            </p>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Business Case Template</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-primary-500 mb-2">1. Investeringsoverzicht</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Hardware (robot, gripper, sensors)</li>
                    <li>• Software (licenties, integratie)</li>
                    <li>• Installatie & engineering</li>
                    <li>• Training</li>
                    <li>• Onvoorzien (10-15%)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-2">2. Baten (kwantificeerbaar)</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Arbeidskosten besparing</li>
                    <li>• Productiviteitsverhoging</li>
                    <li>• Kwaliteitsverbetering (minder afkeur)</li>
                    <li>• Energiebesparing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-2">3. Baten (kwalitatief)</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Verbeterde ergonomie</li>
                    <li>• Hogere leverbetrouwbaarheid</li>
                    <li>• Kennisbehoud (minder afhankelijk van specifieke medewerkers)</li>
                    <li>• Concurrentiepositie</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-2">4. Risicos & Mitigatie</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Technisch falen → Pilot eerst, kies bewezen technologie</li>
                    <li>• Weerstand medewerkers → Betrek vroeg, communiceer helder</li>
                    <li>• Leververtragingen → Buffer in planning, meerdere leveranciers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="change-management" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary-500" />
              6. Change Management
            </h2>
            <p className="text-gray-300 mb-6">
              De mens is de kritieke factor. 70% van verandertrajecten faalt door weerstand, niet door techniek.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: 'Creëer urgentie', desc: 'Waarom moeten we dit doen? Wat gebeurt er als we niets doen?' },
                { title: 'Vorm een kernteam', desc: 'Betrek ambassadeurs uit alle lagen. Operators, technici, management.' },
                { title: 'Communiceer de visie', desc: 'Helder en consistent. Automatisering = kansen, niet bedreigingen.' },
                { title: 'Empower medewerkers', desc: 'Geef training, tools en mandaat om mee te denken.' },
                { title: 'Vier quick wins', desc: 'Kleine successen tonen dat het werkt. Bouwt momentum.' },
                { title: 'Veranker in cultuur', desc: 'Maak automatisering onderdeel van hoe jullie werken.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="valkuilen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              7. 6 Strategische Valkuilen
            </h2>
            <div className="space-y-4">
              {[
                { fout: 'Technologie-verliefdheid', uitleg: 'Investeren in de nieuwste robot omdat het cool is, niet omdat het past.' },
                { fout: 'Big bang benadering', uitleg: 'Alles tegelijk willen automatiseren. Beter: stap voor stap, leren onderweg.' },
                { fout: 'Eiland-automatisering', uitleg: 'Losse projecten zonder samenhang. Data stroomt niet, systemen praten niet.' },
                { fout: 'Onderschatten van integratie', uitleg: '50% van de kosten zit vaak in integratie met bestaande systemen.' },
                { fout: 'Mensen vergeten', uitleg: 'Technici en operators niet betrekken. Zij moeten ermee werken.' },
                { fout: 'Geen monitoring', uitleg: 'Na go-live niet meten of de business case wordt gehaald.' },
              ].map((item, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-400 mb-2">❌ {item.fout}</h4>
                  <p className="text-gray-400 m-0">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: CTA */}
          <section id="aan-de-slag" className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              8. Direct aan de Slag
            </h2>
            <p className="text-gray-300 mb-6">
              Een goede strategie begint met een heldere analyse van je huidige situatie.
              Proces360 helpt je met het ontwikkelen van een automatiseringsstrategie die past bij jouw bedrijf.
            </p>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gratis Strategiegesprek
              </h3>
              <p className="text-gray-400 mb-6">
                60 minuten sparren over jouw automatiseringsambities. Vrijblijvend.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Plan Gesprek
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                Rob heeft strategische automatiseringstrajecten begeleid bij tientallen MKB-maakbedrijven.
                Van visie tot uitvoering, met focus op ROI en draagvlak.
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
            <Link href="/blog/cobots-in-productie-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobots in Productie: Complete Gids</h4>
              <p className="text-sm text-gray-400">Van selectie tot implementatie: alles over collaborative robots.</p>
            </Link>
            <Link href="/blog/oee-verbeteren-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">OEE Verbeteren: De Complete Gids</h4>
              <p className="text-sm text-gray-400">Alles over Overall Equipment Effectiveness.</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
