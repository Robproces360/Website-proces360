'use client';

import Link from 'next/link';
import { Cog, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Users } from 'lucide-react';

const benefits = [
  'Bottleneck identificatie en eliminatie',
  'Lean manufacturing implementatie',
  'Waste reductie (7 verspillingen)',
  'Doorlooptijd verkorting',
  'Werkplek organisatie (5S)',
  'Standaard werkwijzen documentatie',
];

const methods = [
  { name: 'Value Stream Mapping', desc: 'Visualiseer je gehele waardestroom en identificeer verbeterkansen' },
  { name: 'Lean Six Sigma', desc: 'Combinatie van waste reductie en variatie vermindering' },
  { name: '5S Implementatie', desc: 'Werkplek organisatie voor efficiëntie en veiligheid' },
  { name: 'SMED', desc: 'Single Minute Exchange of Die - omsteltijden halveren' },
  { name: 'Kaizen Events', desc: 'Gerichte verbeterworkshops met je team' },
  { name: 'Theory of Constraints', desc: 'Focus op de zwakste schakel in je proces' },
];

export default function ProcesoptimalisatiePage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/diensten" className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors">
            ← Alle diensten
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cog className="w-8 h-8 text-primary-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Procesoptimalisatie</h1>
              <p className="text-xl text-gray-400">
                Identificeer bottlenecks, elimineer verspilling en optimaliseer je productieprocessen met bewezen lean-methodes en praktische aanpak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">20-50%</p>
              <p className="text-gray-400 text-sm">Doorlooptijd reductie</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">30%</p>
              <p className="text-gray-400 text-sm">Minder verspilling</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">4-8</p>
              <p className="text-gray-400 text-sm">Weken eerste resultaat</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">22+</p>
              <p className="text-gray-400 text-sm">Jaar ervaring</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Wat levert het op?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Methodes & Tools</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {methods.map((method, i) => (
              <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{method.name}</h3>
                <p className="text-gray-400 text-sm">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar om te optimaliseren?</h2>
          <p className="text-gray-400 mb-8">Plan uw 360Scan en ontdek waar de grootste verbeterkansen liggen.</p>
          <Link href="/contact?subject=360scan" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
            Plan uw 360Scan <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
