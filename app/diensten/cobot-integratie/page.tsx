'use client';

import Link from 'next/link';
import { Bot, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Calculator, Users, FileText } from 'lucide-react';

const benefits = [
  'Merkonafhankelijk advies uit 50+ technologieën',
  'Gemiddelde terugverdientijd 12-18 maanden',
  'Complete implementatie van selectie tot productie',
  'Operator training en programmering',
  'Veiligheidsanalyse en CE-markering',
  'Nazorg en optimalisatie na implementatie',
];

const brands = ['Techman', 'Doosan', 'FANUC', 'ABB', 'KUKA', 'Universal Robots', 'Omron', 'Yaskawa'];

const applications = [
  { title: 'Machine Tending', desc: 'CNC beladen/ontladen, persen, spuitgieten' },
  { title: 'Palletiseren', desc: 'End-of-line verpakken en stapelen' },
  { title: 'Pick & Place', desc: 'Assemblage, sorteren, bin picking' },
  { title: 'Lassen', desc: 'MIG/MAG, TIG, puntlassen' },
  { title: 'Schuren/Polijsten', desc: 'Oppervlaktebehandeling, ontbramen' },
  { title: 'Kwaliteitscontrole', desc: 'Vision inspectie, meten' },
];

export default function CobotIntegratiePage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/diensten" className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors">
            ← Alle diensten
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bot className="w-8 h-8 text-primary-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cobot Integratie</h1>
              <p className="text-xl text-gray-400">
                Merkonafhankelijke selectie en implementatie van collaborative robots. Van advies tot productie, met gemiddelde ROI van 12-18 maanden.
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
              <p className="text-3xl font-bold text-white">12-18</p>
              <p className="text-gray-400 text-sm">Maanden ROI</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Bot className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-400 text-sm">Technologieën</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">2-4</p>
              <p className="text-gray-400 text-sm">Maanden doorlooptijd</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-400 text-sm">Veiligheidsgarantie</p>
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
          <h2 className="text-2xl font-bold text-white mb-8">Toepassingen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {applications.map((app, i) => (
              <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-400 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Merken waarmee wij werken</h2>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span key={brand} className="px-4 py-2 bg-bg-secondary border border-white/10 rounded-full text-gray-300 text-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Calculator className="w-16 h-16 text-primary-500 flex-shrink-0" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Bereken je ROI</h3>
                <p className="text-gray-300">
                  Ontdek de terugverdientijd van een cobot voor jouw specifieke situatie met onze gratis calculator.
                </p>
              </div>
              <Link href="/roi-calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0">
                <Calculator className="w-5 h-5" />
                ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar om te robotiseren?</h2>
          <p className="text-gray-400 mb-8">Vraag een gratis haalbaarheidsanalyse aan en ontdek of een cobot rendabel is voor jouw situatie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?subject=cobot" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
              Gratis Haalbaarheidsanalyse <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/blog/cobots-in-productie-complete-gids" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              <FileText className="w-5 h-5" /> Lees Cobot Gids
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
