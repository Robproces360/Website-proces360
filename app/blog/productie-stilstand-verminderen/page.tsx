'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, AlertTriangle, Wrench, TrendingDown, Target, BarChart3 } from 'lucide-react';

export default function StilstandArticlePage() {
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
            Procesoptimalisatie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            10 Praktische Tips om Productie Stilstand te Verminderen
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Stilstand kost je duizenden euros per uur. Deze 10 bewezen methodes helpen je om ongeplande stilstand drastisch te verlagen.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />Rob Derks</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />5 januari 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />10 min leestijd</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Eye-opener:</strong> De gemiddelde fabriek verliest 5-20% van de productietijd aan ongeplande stilstand.
              Bij een machine-uurtarief van €200/uur is dat €80.000-€320.000 per jaar per machine.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingDown className="w-8 h-8 text-primary-500" />
              De Kosten van Stilstand
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-red-500 mb-2">€200-500</p>
                <p className="text-sm text-gray-400">Gemiddelde kosten per uur stilstand</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-yellow-500 mb-2">15%</p>
                <p className="text-sm text-gray-400">Typisch stilstandpercentage MKB</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-green-500 mb-2">50%</p>
                <p className="text-sm text-gray-400">Haalbare reductie stilstand</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">De 10 Tips</h2>
            <div className="space-y-6">
              {[
                { num: 1, title: 'Implementeer OEE-monitoring', desc: 'Wat je niet meet, kun je niet verbeteren. Start met het registreren van elke minuut stilstand en de oorzaak.' },
                { num: 2, title: 'Categoriseer stilstandoorzaken', desc: 'Maak onderscheid tussen gepland (omstellen, onderhoud) en ongepland (storingen, wachten). Focus op ongepland.' },
                { num: 3, title: 'Pareto-analyse: top 3 aanpakken', desc: '80% van je stilstand komt vaak door 20% van de oorzaken. Identificeer en elimineer de top 3.' },
                { num: 4, title: 'Preventief onderhoud invoeren', desc: 'Gepland onderhoud buiten productietijd voorkomt ongeplande storingen tijdens productie.' },
                { num: 5, title: 'Spare parts op voorraad', desc: 'Kritieke onderdelen op voorraad = sneller herstel. Identificeer je kritische spare parts.' },
                { num: 6, title: 'Operator-onderhoud (TPM)', desc: 'Train operators om basis-onderhoud zelf te doen: smeren, schoonmaken, inspecteren.' },
                { num: 7, title: 'Snellere omsteltijden (SMED)', desc: 'Analyseer je omstelprocedure. Wat kan voorbereid worden? Streef naar single-digit minuten.' },
                { num: 8, title: 'Standaard werkprocedures', desc: 'Documenteer de beste manier om taken uit te voeren. Consistentie voorkomt fouten.' },
                { num: 9, title: 'Real-time monitoring', desc: 'Sensoren en dashboards die afwijkingen signaleren voordat ze storingen worden.' },
                { num: 10, title: 'Wekelijkse stilstand-review', desc: 'Bespreek wekelijks de grootste stilstandoorzaken en de genomen acties.' },
              ].map((tip) => (
                <div key={tip.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {tip.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{tip.title}</h4>
                    <p className="text-gray-400 m-0">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Hoeveel kost stilstand jou?</h3>
              <p className="text-gray-400 mb-6">Bereken de financiële impact van OEE-verhoging met onze calculator.</p>
              <Link href="/oee-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                <BarChart3 className="w-5 h-5" />
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
              <p className="text-sm text-gray-400">Alles over Overall Equipment Effectiveness: van berekening tot praktische verbetermethodes.</p>
            </Link>
            <Link href="/blog/preventief-onderhoud-tpm" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Preventief Onderhoud & TPM</h4>
              <p className="text-sm text-gray-400">Total Productive Maintenance voor hogere machinebeschikbaarheid en minder storingen.</p>
            </Link>
            <Link href="/blog/lean-manufacturing-mkb" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Lean Manufacturing voor MKB</h4>
              <p className="text-sm text-gray-400">Praktische lean-tools voor het MKB: 5S, SMED, VSM en dagstarts.</p>
            </Link>
            <Link href="/blog/predictive-maintenance-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Predictive Maintenance: Complete Gids</h4>
              <p className="text-sm text-gray-400">Van reactief naar voorspellend onderhoud met sensoren en AI.</p>
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
            <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-2 text-primary-500 hover:underline">
              <Target className="w-4 h-4" />
              Procesoptimalisatie
            </Link>
            <Link href="/diensten/productie-dashboards" className="flex items-center gap-2 text-primary-500 hover:underline">
              <BarChart3 className="w-4 h-4" />
              Productie Dashboards
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
