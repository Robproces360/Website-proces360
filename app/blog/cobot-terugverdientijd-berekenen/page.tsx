'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, Calculator, Euro, TrendingUp, Bot, AlertTriangle } from 'lucide-react';

export default function CobotROIArticlePage() {
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
            ROI & Investering
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Cobot Terugverdientijd Berekenen: ROI in 12-18 Maanden
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Ontdek hoe je de terugverdientijd van een cobot berekent en wanneer robotisering rendabel is voor jouw MKB-maakbedrijf.
            Met praktische rekenvoorbeelden en ROI-tips.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />Rob Derks</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />7 januari 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />8 min leestijd</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> De gemiddelde cobot verdient zichzelf terug in 12-18 maanden.
              Met de juiste toepassing en berekening kun je dit terugbrengen tot 8-10 maanden.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-primary-500" />
              De Basis ROI-Formule
            </h2>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-2xl font-mono text-primary-500 text-center mb-4">
                Terugverdientijd = Totale Investering / Jaarlijkse Besparing × 12
              </p>
              <p className="text-gray-400 text-center text-sm">Resultaat in maanden</p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Wat telt mee als investering?</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Cobot hardware:</strong> €25.000 - €60.000 (afhankelijk van payload)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Gripper/end-effector:</strong> €2.000 - €15.000</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Installatie & engineering:</strong> €5.000 - €15.000</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300"><strong className="text-white">Training:</strong> €1.000 - €3.000</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-primary-500" />
              Praktijkvoorbeeld: Machine Belading
            </h2>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Huidige Situatie</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>1 FTE voor CNC-belading</li>
                    <li>Bruto uurloon: €25/uur</li>
                    <li>1.760 uur/jaar = €44.000</li>
                    <li>+ 40% sociale lasten = €17.600</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal: €61.600/jaar</li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Met Cobot</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>UR10e cobot: €38.000</li>
                    <li>Gripper: €6.000</li>
                    <li>Installatie: €8.000</li>
                    <li>Training: €2.000</li>
                    <li className="font-bold text-white pt-2 border-t border-white/10">Totaal investering: €54.000</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Terugverdientijd</p>
                <p className="text-4xl font-bold text-primary-500 mb-1">10.5 maanden</p>
                <p className="text-xs text-gray-500">€54.000 / €61.600 × 12 = 10.5</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary-500" />
              Verborgen Baten
            </h2>
            <p className="text-gray-300 mb-4">
              Naast directe arbeidsbesparingen zijn er vaak verborgen baten die je ROI verder verbeteren:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">24/7 Productie</h4>
                <p className="text-sm text-gray-400 m-0">Cobot draait door in nacht/weekend. +50% capaciteit mogelijk.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Consistente Kwaliteit</h4>
                <p className="text-sm text-gray-400 m-0">Geen menselijke fouten. Minder afkeur = meer omzet.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Minder Ziekteverzuim</h4>
                <p className="text-sm text-gray-400 m-0">Repetitieve taken naar robot = minder RSI-klachten.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Herplaatsing Medewerkers</h4>
                <p className="text-sm text-gray-400 m-0">Vrijgekomen medewerkers voor waardevollere taken.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Bereken Jouw ROI</h2>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Gratis ROI Calculator</h3>
              <p className="text-gray-400 mb-6">Bereken in 3 minuten de terugverdientijd voor jouw situatie.</p>
              <Link href="/roi-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                <Bot className="w-5 h-5" />
                Start Calculator
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
      </article>
    </main>
  );
}
