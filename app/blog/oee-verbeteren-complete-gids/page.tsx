'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Share2, Calculator, CheckCircle, AlertTriangle, TrendingUp, Target } from 'lucide-react';

export default function OEEArticlePage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Article Header */}
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
            OEE Verbeteren: De Complete Gids voor 2026
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Alles wat je moet weten over Overall Equipment Effectiveness: van berekening tot praktische verbetermethodes.
            Inclusief voorbeelden uit de praktijk en een stappenplan om je OEE te verhogen.
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
              12 min leestijd
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">Inhoudsopgave</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#wat-is-oee" className="hover:text-primary-500 transition-colors">1. Wat is OEE?</a></li>
            <li><a href="#oee-berekenen" className="hover:text-primary-500 transition-colors">2. OEE Berekenen: De Formule</a></li>
            <li><a href="#oee-benchmarks" className="hover:text-primary-500 transition-colors">3. OEE Benchmarks: Wat is een goede score?</a></li>
            <li><a href="#6-grote-verliezen" className="hover:text-primary-500 transition-colors">4. De 6 Grote Verliezen</a></li>
            <li><a href="#oee-verbeteren" className="hover:text-primary-500 transition-colors">5. OEE Verbeteren: 10 Praktische Tips</a></li>
            <li><a href="#veelgemaakte-fouten" className="hover:text-primary-500 transition-colors">6. Veelgemaakte Fouten bij OEE</a></li>
            <li><a href="#aan-de-slag" className="hover:text-primary-500 transition-colors">7. Direct aan de Slag</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">

          {/* Intro */}
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> De gemiddelde MKB-fabriek scoort een OEE van 45-55%.
              World-class fabrieken scoren 85%+. Het verschil? Tienduizenden euro&apos;s per maand aan onbenutte capaciteit.
              In dit artikel leer je hoe je van gemiddeld naar excellent gaat.
            </p>
          </div>

          {/* Section 1 */}
          <section id="wat-is-oee" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary-500" />
              1. Wat is OEE?
            </h2>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">OEE staat voor Overall Equipment Effectiveness</strong> – in het Nederlands:
              Totale Effectiviteit van Apparatuur. Het is dé standaard KPI om te meten hoe effectief je productieapparatuur
              daadwerkelijk wordt ingezet.
            </p>
            <p className="text-gray-300 mb-4">
              OEE combineert drie factoren in één percentage:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Beschikbaarheid</strong> – Hoeveel % van de geplande tijd draait de machine daadwerkelijk?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Prestatie</strong> – Draait de machine op de theoretische maximale snelheid?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Kwaliteit</strong> – Hoeveel % van de output is direct goed (geen afkeur/herwerk)?</span>
              </li>
            </ul>
            <p className="text-gray-300">
              Het mooie van OEE is dat het de &quot;verborgen fabriek&quot; zichtbaar maakt.
              Je denkt misschien dat je fabriek op 80% capaciteit draait, maar als je echt gaat meten,
              blijkt de OEE vaak 50-60% te zijn. Dat betekent dat er 40-50% capaciteit onbenut blijft.
            </p>
          </section>

          {/* Section 2 */}
          <section id="oee-berekenen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-primary-500" />
              2. OEE Berekenen: De Formule
            </h2>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-2xl font-mono text-primary-500 text-center mb-4">
                OEE = Beschikbaarheid × Prestatie × Kwaliteit
              </p>
              <p className="text-gray-400 text-center text-sm">
                Alle drie factoren zijn een percentage (0-100%)
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Rekenvoorbeeld</h3>
            <p className="text-gray-300 mb-4">
              Stel je hebt een productielijn met de volgende gegevens:
            </p>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-bg-primary rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Beschikbaarheid</p>
                  <p className="text-3xl font-bold text-green-500">87.5%</p>
                  <p className="text-xs text-gray-500 mt-2">420 van 480 minuten</p>
                </div>
                <div className="text-center p-4 bg-bg-primary rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Prestatie</p>
                  <p className="text-3xl font-bold text-yellow-500">75%</p>
                  <p className="text-xs text-gray-500 mt-2">3150 van 4200 stuks</p>
                </div>
                <div className="text-center p-4 bg-bg-primary rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Kwaliteit</p>
                  <p className="text-3xl font-bold text-blue-500">97%</p>
                  <p className="text-xs text-gray-500 mt-2">3055 goed van 3150</p>
                </div>
              </div>
              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">OEE Score</p>
                <p className="text-4xl font-bold text-primary-500">63.7%</p>
                <p className="text-sm text-gray-400 mt-2">0.875 × 0.75 × 0.97 = 0.637</p>
              </div>
            </div>
            <p className="text-gray-300">
              Dit voorbeeld toont een typische MKB-situatie. Elk onderdeel lijkt &quot;acceptabel&quot;,
              maar gecombineerd verlies je meer dan een derde van je productiecapaciteit.
            </p>
          </section>

          {/* Section 3 */}
          <section id="oee-benchmarks" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-500" />
              3. OEE Benchmarks: Wat is een goede score?
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-red-500 mb-2">&lt;50%</p>
                <p className="text-white font-medium">Slecht</p>
                <p className="text-sm text-gray-400 mt-2">Veel ruimte voor verbetering. Urgente actie nodig.</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-yellow-500 mb-2">50-70%</p>
                <p className="text-white font-medium">Gemiddeld</p>
                <p className="text-sm text-gray-400 mt-2">Typisch voor MKB. Verbeterpotentieel aanwezig.</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-green-500 mb-2">85%+</p>
                <p className="text-white font-medium">World-Class</p>
                <p className="text-sm text-gray-400 mt-2">Excellente prestatie. Focus op behoud.</p>
              </div>
            </div>
            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <p className="text-white">
                <strong>Belangrijk:</strong> Een score van 100% OEE is theoretisch onhaalbaar.
                Het zou betekenen: geen enkele stilstand, perfecte snelheid, nul defecten.
                Streven naar 85% is realistisch en excellent.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="6-grote-verliezen" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary-500" />
              4. De 6 Grote Verliezen
            </h2>
            <p className="text-gray-300 mb-6">
              OEE-verlies komt voort uit zes categorieën. Door te begrijpen waar je verlies zit,
              kun je gericht verbeteren:
            </p>
            <div className="space-y-4">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-red-400 mb-2">Beschikbaarheidsverliezen</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>1. Storingen</strong> – Ongeplande stilstand door defecten</li>
                  <li><strong>2. Omsteltijd</strong> – Tijd voor productwissels en opstart</li>
                </ul>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Prestatieverliezen</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>3. Micro-stops</strong> – Korte onderbrekingen (&lt;5 min)</li>
                  <li><strong>4. Snelheidsverlies</strong> – Machine draait onder nominale snelheid</li>
                </ul>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Kwaliteitsverliezen</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>5. Opstartafkeur</strong> – Defecten bij opstart/omstellen</li>
                  <li><strong>6. Productieafkeur</strong> – Defecten tijdens reguliere productie</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="oee-verbeteren" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              5. OEE Verbeteren: 10 Praktische Tips
            </h2>
            <div className="space-y-6">
              {[
                { num: 1, title: 'Start met meten', desc: 'Je kunt niet verbeteren wat je niet meet. Begin met het registreren van stilstand, output en afkeur. Liefst automatisch.' },
                { num: 2, title: 'Analyseer de data', desc: 'Identificeer de top 3 verliesoorzaken. Vaak veroorzaakt 20% van de problemen 80% van het verlies (Pareto).' },
                { num: 3, title: 'Focus op beschikbaarheid eerst', desc: 'Stilstand is vaak de grootste verliespost. Elke minuut stilstand = 0% productie.' },
                { num: 4, title: 'Implementeer preventief onderhoud', desc: 'Gepland onderhoud voorkomt ongeplande storingen. Plan onderhoud buiten productietijd.' },
                { num: 5, title: 'Verkort omsteltijden (SMED)', desc: 'Single Minute Exchange of Die. Doel: omstellen in minder dan 10 minuten.' },
                { num: 6, title: 'Train operators', desc: 'Operators die hun machine begrijpen, herkennen problemen eerder en voeren basis-onderhoud zelf uit.' },
                { num: 7, title: 'Elimineer micro-stops', desc: 'Die &quot;kleine&quot; onderbrekingen van 30 seconden tellen op. Vaak 5-15% verlies.' },
                { num: 8, title: 'Standaardiseer werkwijzen', desc: 'Zorg dat elke operator dezelfde (beste) methode gebruikt. Creëer werkinstructies.' },
                { num: 9, title: 'Maak OEE zichtbaar', desc: 'Toon real-time OEE op schermen bij de lijn. Wat zichtbaar is, krijgt aandacht.' },
                { num: 10, title: 'Vier successen', desc: 'Erken verbeteringen. Een team dat ziet dat hun inspanning werkt, blijft gemotiveerd.' },
              ].map((tip) => (
                <div key={tip.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {tip.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{tip.title}</h4>
                    <p className="text-gray-400">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section id="veelgemaakte-fouten" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              6. Veelgemaakte Fouten bij OEE
            </h2>
            <div className="space-y-4">
              {[
                { fout: 'Alleen meten, niet verbeteren', uitleg: 'OEE is geen rapportcijfer. Het is een startpunt voor actie.' },
                { fout: 'Te veel KPIs tegelijk', uitleg: 'Focus op OEE als hoofdindicator. Andere metrics zijn ondersteunend.' },
                { fout: 'Geen root-cause analyse', uitleg: '"Machine stond stil" is geen oorzaak. Graaf dieper: waarom stond hij stil?' },
                { fout: 'Operators niet betrekken', uitleg: 'De mensen aan de lijn weten vaak precies waar het probleem zit.' },
                { fout: 'OEE vergelijken tussen verschillende machines', uitleg: 'Een verpakkingsmachine en CNC-freesbank hebben andere benchmarks.' },
              ].map((item, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-400 mb-2">❌ {item.fout}</h4>
                  <p className="text-gray-400">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: CTA */}
          <section id="aan-de-slag" className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              7. Direct aan de Slag
            </h2>
            <p className="text-gray-300 mb-6">
              Klaar om je OEE te berekenen en te verbeteren? Gebruik onze gratis OEE Calculator
              om direct inzicht te krijgen in je huidige situatie en verbeterpotentieel.
            </p>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bereken je OEE in 60 seconden
              </h3>
              <p className="text-gray-400 mb-6">
                Ontdek hoeveel verborgen capaciteit er in jouw productie zit.
              </p>
              <Link
                href="/oee-calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors text-lg"
              >
                <Calculator className="w-6 h-6" />
                Start OEE Calculator
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
                Van operator tot operations manager. Rob helpt MKB-maakbedrijven met OEE-verbetering,
                procesoptimalisatie en robotisering. Pragmatisch, hands-on, resultaatgericht.
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
              <h4 className="font-bold text-white mb-2">10 Tips om Productie Stilstand te Verminderen</h4>
              <p className="text-sm text-gray-400">Praktische methodes om ongeplande downtime te voorkomen.</p>
            </Link>
            <Link href="/blog/cobot-terugverdientijd-berekenen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobot Terugverdientijd Berekenen</h4>
              <p className="text-sm text-gray-400">Wanneer is robotisering rendabel voor jouw bedrijf?</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
