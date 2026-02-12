'use client';

import Link from 'next/link';
import { TrendingUp, CheckCircle, ArrowRight, Clock, Target, Users, Cog } from 'lucide-react';

const benefits = [
  'PLC programmering en optimalisatie',
  'Systeemintegratie bestaande machines',
  'Complete lijnautomatisering',
  'Retrofit en modernisering',
  'SCADA en HMI implementatie',
  'Onderhoudsvriendelijke oplossingen',
];

const expertise = [
  { name: 'PLC Systemen', desc: 'Siemens, Allen-Bradley, Beckhoff, Omron' },
  { name: 'HMI/SCADA', desc: 'Visualisatie en besturing op maat' },
  { name: 'Industriële Netwerken', desc: 'Profinet, EtherCAT, Modbus, OPC-UA' },
  { name: 'Vision Systemen', desc: 'Cognex, Keyence, Basler integratie' },
  { name: 'Motion Control', desc: 'Servo-aandrijvingen, motion trajecten' },
  { name: 'Safety Systems', desc: 'Veiligheidsintegratie volgens EN ISO 13849' },
];

export default function IndustrieleAutomatiseringPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/diensten" className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors">
            ← Alle diensten
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-primary-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industriële Automatisering</h1>
              <p className="text-xl text-gray-400">
                Van PLC-programmering tot complete lijnautomatisering. Systeemintegratie, besturingssystemen en optimalisatie van bestaande installaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Cog className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">22+</p>
              <p className="text-gray-400 text-sm">Jaar ervaring</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-400 text-sm">Projecten</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-400 text-sm">Support mogelijk</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-400 text-sm">Klanttevredenheid</p>
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
          <h2 className="text-2xl font-bold text-white mb-8">Expertise & Technologieën</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar om te automatiseren?</h2>
          <p className="text-gray-400 mb-8">Bespreek je automatiseringsproject met een expert.</p>
          <Link href="/contact?subject=automatisering" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
            Neem Contact Op <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
