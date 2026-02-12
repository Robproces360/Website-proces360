'use client';

import Link from 'next/link';
import { Monitor, CheckCircle, ArrowRight, TrendingUp, Clock, BarChart3, Bell } from 'lucide-react';

const benefits = [
  'Real-time OEE monitoring per machine/lijn',
  'KPI visualisatie op grote schermen',
  'Automatische alerts bij afwijkingen',
  'Historische trend analyse',
  'Rapportage tools voor management',
  'Integratie met bestaande systemen (ERP, MES)',
];

const features = [
  { name: 'Live OEE Dashboard', desc: 'Real-time beschikbaarheid, prestatie en kwaliteit per machine' },
  { name: 'Downtime Tracking', desc: 'Automatische stilstand registratie met oorzaakanalyse' },
  { name: 'Alerting Systeem', desc: 'Push notificaties bij kritieke afwijkingen' },
  { name: 'Shift Reports', desc: 'Automatische dagrapportages per ploeg' },
  { name: 'Trend Analyse', desc: 'Historische data voor patronen en verbeterkansen' },
  { name: 'Mobile Access', desc: 'Toegang via tablet en smartphone' },
];

export default function ProductieDashboardsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/diensten" className="inline-flex items-center text-gray-400 hover:text-primary-500 mb-6 transition-colors">
            ← Alle diensten
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Monitor className="w-8 h-8 text-primary-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Productie Dashboards</h1>
              <p className="text-xl text-gray-400">
                Real-time productie monitoring, KPI-visualisatie en business intelligence voor data-gedreven besluitvorming op de werkvloer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <BarChart3 className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">Real-time</p>
              <p className="text-gray-400 text-sm">Data updates</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">15%+</p>
              <p className="text-gray-400 text-sm">Efficiëntie winst</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">2-4</p>
              <p className="text-gray-400 text-sm">Weken implementatie</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Bell className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-400 text-sm">Alerting</p>
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
          <h2 className="text-2xl font-bold text-white mb-8">Functionaliteiten</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar voor real-time inzicht?</h2>
          <p className="text-gray-400 mb-8">Ontdek wat een productie dashboard voor jouw bedrijf kan betekenen.</p>
          <Link href="/contact?subject=dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
            Demo Aanvragen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
