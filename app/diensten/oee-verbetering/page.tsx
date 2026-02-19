'use client';

import Link from 'next/link';
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Calculator,
  Users,
  FileText
} from 'lucide-react';

const benefits = [
  '15-40% OEE verbetering binnen 6 maanden',
  'Real-time inzicht in beschikbaarheid, prestatie en kwaliteit',
  'Data-gedreven besluitvorming',
  'Identificatie en eliminatie van de 6 grote verliezen',
  'Praktische verbeterroadmap met ROI-berekening',
  'Training van operators en teamleiders',
];

const approach = [
  {
    phase: 'Meten',
    title: 'OEE Baseline bepalen',
    description: 'We meten uw huidige OEE en analyseren waar de verliezen zitten: beschikbaarheid, prestatie of kwaliteit.',
    duration: '1-2 weken',
  },
  {
    phase: 'Analyseren',
    title: 'Verliesanalyse & Prioritering',
    description: 'Pareto-analyse van de 6 grote verliezen. We identificeren de quick wins en structurele verbeteringen.',
    duration: '1 week',
  },
  {
    phase: 'Verbeteren',
    title: 'Gerichte Verbeteracties',
    description: 'Implementatie van verbeteringen: van SMED tot preventief onderhoud, van operator training tot procesaanpassingen.',
    duration: '2-4 maanden',
  },
  {
    phase: 'Borgen',
    title: 'Structureel Verbeteren',
    description: 'Real-time monitoring, standaard werkwijzen en continue verbetercultuur voor blijvend resultaat.',
    duration: 'Doorlopend',
  },
];

const faqs = [
  {
    q: 'Wat is een goede OEE score?',
    a: 'Een OEE onder 50% vraagt urgente aandacht. 50-70% is gemiddeld voor MKB. 85%+ is world-class. De meeste bedrijven scoren 45-65% voordat ze actief gaan verbeteren.',
  },
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'De eerste quick wins zijn vaak binnen 4-6 weken zichtbaar. Structurele verbetering van 15-40% OEE verhoging realiseren we binnen 3-6 maanden.',
  },
  {
    q: 'Wat kost OEE verbetering?',
    a: 'Een OEE verbetertraject kost €5.000 - €50.000, afhankelijk van scope en complexiteit. De ROI is meestal 3-6 maanden door verhoogde output en lagere kosten.',
  },
];

export default function OEEVerbeteringPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/diensten" className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors">
            ← Alle diensten
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-8 h-8 text-primary-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                OEE Verbetering
              </h1>
              <p className="text-xl text-gray-400">
                Verhoog uw Overall Equipment Effectiveness met 15-40% door systematische optimalisatie van beschikbaarheid, prestatie en kwaliteit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">15-40%</p>
              <p className="text-gray-400 text-sm">OEE verbetering</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">3-6</p>
              <p className="text-gray-400 text-sm">Maanden ROI</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">85%+</p>
              <p className="text-gray-400 text-sm">Doelscore</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">47</p>
              <p className="text-gray-400 text-sm">Tevreden klanten</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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

      {/* Approach */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Onze Aanpak</h2>
          <div className="space-y-6">
            {approach.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < approach.length - 1 && <div className="w-0.5 h-full bg-white/10 mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-primary-500 text-sm font-medium">{step.phase}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-2">{step.description}</p>
                  <span className="text-gray-500 text-sm">Doorlooptijd: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Calculator className="w-16 h-16 text-primary-500 flex-shrink-0" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bereken uw huidige OEE
                </h3>
                <p className="text-gray-300">
                  Gebruik onze OEE Calculator en ontdek hoeveel verborgen capaciteit er in uw productie zit.
                </p>
              </div>
              <Link
                href="/oee-calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
              >
                <Calculator className="w-5 h-5" />
                OEE Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om uw OEE te verhogen?
          </h2>
          <p className="text-gray-400 mb-8">
            Plan uw 360Scan en ontdek waar uw verbeterpotentieel ligt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=360scan"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Plan uw 360Scan
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blog/oee-verbeteren-complete-gids"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Lees OEE Gids
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
