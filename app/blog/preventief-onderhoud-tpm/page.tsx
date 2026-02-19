'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, Wrench, AlertTriangle, TrendingUp, Shield, Settings, BarChart3, Bot, Cog } from 'lucide-react';

export default function TPMArticlePage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar blog
          </Link>
        </nav>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full mb-4">
            Onderhoud & Uptime
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Preventief Onderhoud & TPM: Van Reactief naar Proactief
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Stop met brandjes blussen. Leer hoe u met Total Productive Maintenance (TPM) storingen voorkomt
            in plaats van repareert. Inclusief implementatie-stappenplan.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />Rob Derks</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />20 december 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />11 min leestijd</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> Reactief onderhoud kost 3-5x meer dan preventief onderhoud.
              TPM kan uw machine-beschikbaarheid met 10-20% verhogen en uw onderhoudskosten met 25% verlagen.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-primary-500" />
              Onderhoudsniveaus
            </h2>
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h4 className="font-bold text-red-400 mb-2">Niveau 1: Reactief (Run-to-Failure)</h4>
                <p className="text-gray-400 text-sm m-0">Repareren als het kapot is. Duur, onvoorspelbaar, veel stilstand. Waar de meeste MKB&apos;s starten.</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <h4 className="font-bold text-yellow-400 mb-2">Niveau 2: Preventief (Time-Based)</h4>
                <p className="text-gray-400 text-sm m-0">Vast schema: elke X uur/dag/week onderhoud. Voorkomt veel storingen, soms over-onderhoud.</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="font-bold text-blue-400 mb-2">Niveau 3: Predictief (Condition-Based)</h4>
                <p className="text-gray-400 text-sm m-0">Onderhoud op basis van conditie (trillingen, temperatuur, slijtage). Optimaal, vergt sensoren/data.</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-2">Niveau 4: Prescriptief (AI-Driven)</h4>
                <p className="text-gray-400 text-sm m-0">AI voorspelt én adviseert acties. Toekomst voor de meeste MKB&apos;s.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary-500" />
              De 8 Pijlers van TPM
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Autonoom Onderhoud', desc: 'Operators doen basis-onderhoud: smeren, schoonmaken, inspecteren.' },
                { title: 'Gepland Onderhoud', desc: 'Preventief schema gebaseerd op machine-historie.' },
                { title: 'Gerichte Verbetering', desc: 'Teams werken aan specifieke verbeterprojecten (Kaizen).' },
                { title: 'Opleiding & Training', desc: 'Continue ontwikkeling van technische vaardigheden.' },
                { title: 'Early Equipment Management', desc: 'Onderhoudbaarheid meenemen bij aanschaf nieuwe machines.' },
                { title: 'Kwaliteitsonderhoud', desc: 'Onderhoud gericht op het voorkomen van kwaliteitsproblemen.' },
                { title: 'Administratieve TPM', desc: 'Lean principes toepassen op kantoorprocessen.' },
                { title: 'Veiligheid & Milieu', desc: 'Veilig werken en milieuverantwoord onderhoud.' },
              ].map((item, index) => (
                <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xs">{index + 1}</span>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Start: 3 Stappen</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-bold text-white">Start met OEE-meting</h4>
                  <p className="text-gray-400 m-0">U kunt niet verbeteren wat u niet meet. Begin met beschikbaarheid registreren.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-bold text-white">Identificeer kritieke machines</h4>
                  <p className="text-gray-400 m-0">Welke machines veroorzaken de meeste stilstand? Start daar met preventief onderhoud.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-bold text-white">Train operators in autonoom onderhoud</h4>
                  <p className="text-gray-400 m-0">Dagelijkse controles (5 min) door operators voorkomt 70% van de storingen.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Hoeveel kost stilstand u?</h3>
              <p className="text-gray-400 mb-6">Bereken de impact van betere beschikbaarheid op uw resultaat.</p>
              <Link href="/oee-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                <TrendingUp className="w-5 h-5" />
                OEE Calculator
              </Link>
            </div>
          </section>
        </div>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mt-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">RD</div>
            <div>
              <h3 className="text-lg font-bold text-white">Rob Derks</h3>
              <p className="text-gray-400 text-sm mb-3">Oprichter Proces360 | 22+ jaar productie-ervaring</p>
              <Link href="/rob-derks" className="text-primary-500 text-sm font-medium hover:underline">Meer over Rob →</Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Gerelateerde artikelen</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/oee-verbeteren-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">OEE Verbeteren: De Complete Gids</h4>
              <p className="text-sm text-gray-400">OEE beschikbaarheid verhogen door preventief onderhoud.</p>
            </Link>
            <Link href="/blog/predictive-maintenance-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Predictive Maintenance: Complete Gids</h4>
              <p className="text-sm text-gray-400">De volgende stap na preventief: voorspellend onderhoud met sensoren en AI.</p>
            </Link>
            <Link href="/blog/productie-stilstand-verminderen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Productie Stilstand Verminderen</h4>
              <p className="text-sm text-gray-400">10 praktische tips om ongeplande downtime te reduceren.</p>
            </Link>
            <Link href="/blog/cobots-in-productie-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Cobots in Productie: Complete Gids</h4>
              <p className="text-sm text-gray-400">Automatisering voor meer consistentie en minder menselijke fouten.</p>
            </Link>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-12 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Gerelateerde Diensten</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/diensten/oee-verbetering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <BarChart3 className="w-4 h-4" />
              OEE Verbetering
            </Link>
            <Link href="/diensten/industriele-automatisering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <Cog className="w-4 h-4" />
              Industriële Automatisering
            </Link>
            <Link href="/diensten/productie-dashboards" className="flex items-center gap-2 text-primary-500 hover:underline">
              <TrendingUp className="w-4 h-4" />
              Productie Dashboards
            </Link>
          </div>
        </div>
        <BlogCTA />
      </article>
    </main>
  );
}
