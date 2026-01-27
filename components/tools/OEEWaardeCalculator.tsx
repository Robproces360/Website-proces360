'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Percent,
  Euro,
  TrendingUp,
  Phone,
  ArrowRight,
  Calculator,
  PiggyBank
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import Magnetic from '@/components/shared/Magnetic';
import { analytics } from '@/components/shared/GoogleAnalytics';

export default function OEEWaardeCalculator() {
  const [jaaromzet, setJaaromzet] = useState(5000000);
  const [contributiemarge, setContributiemarge] = useState(35);

  // Track tool usage on mount
  useEffect(() => {
    analytics.toolStarted('OEE Waarde Calculator');
  }, []);

  // Track when user interacts (after first slider change)
  const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    if (!hasInteracted && (jaaromzet !== 5000000 || contributiemarge !== 35)) {
      setHasInteracted(true);
      analytics.toolCompleted('OEE Waarde Calculator', 'interacted');
    }
  }, [jaaromzet, contributiemarge, hasInteracted]);

  const calculations = useMemo(() => {
    // 1% OEE verbetering = ~1% meer output = 1% meer omzet
    // Extra omzet × contributiemarge = extra winst
    const extraOmzetPerProcent = jaaromzet * 0.01;
    const waardePerProcent = extraOmzetPerProcent * (contributiemarge / 100);

    const waarde5Procent = waardePerProcent * 5;
    const waarde10Procent = waardePerProcent * 10;
    const waarde15Procent = waardePerProcent * 15;

    // MKB bedrijven gaan typisch van 50% naar 70% OEE = 20 procentpunt verbetering
    // Dat is 40% meer effectieve output (20/50 = 40%)
    const typischePotentieel = 20; // 20 procentpunt OEE verbetering realistisch
    const haalbareBesparing = waardePerProcent * typischePotentieel;

    return {
      waardePerProcent,
      extraOmzetPerProcent,
      waarde5Procent,
      waarde10Procent,
      waarde15Procent,
      haalbareBesparing,
      jaarwinst: jaaromzet * (contributiemarge / 100)
    };
  }, [jaaromzet, contributiemarge]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <Reveal direction="down">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
              <Calculator className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">1% OEE Waarde</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Wat is <span className="text-green-500">1%</span> OEE u waard?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ontdek in 20 seconden hoeveel elk procentpunt OEE-verbetering oplevert
            </p>
          </div>
        </Reveal>

        {/* Input Card */}
        <Reveal direction="up" delay={0.1}>
          <div className="glass p-6 md:p-8 rounded-2xl mb-8">
            <div className="space-y-6">
              {/* Jaaromzet */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Euro className="w-4 h-4 text-primary-500" />
                    Jaaromzet productielijn
                  </label>
                  <span className="text-2xl font-bold text-primary-500">€{(jaaromzet / 1000000).toFixed(1)}M</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="15000000"
                  step="100000"
                  value={jaaromzet}
                  onChange={(e) => setJaaromzet(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>€500k</span>
                  <span>€15M</span>
                </div>
              </div>

              {/* Contributiemarge */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-green-500" />
                    Contributiemarge (bruto marge)
                  </label>
                  <span className="text-2xl font-bold text-green-500">{contributiemarge}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="1"
                  value={contributiemarge}
                  onChange={(e) => setContributiemarge(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>15%</span>
                  <span>60%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Maakbedrijven: 25-45% typisch</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main Result */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass p-6 md:p-8 rounded-2xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent mb-8">
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">1% OEE verbetering levert u</p>
              <div className="text-5xl md:text-7xl font-bold text-green-500 mb-2">
                €{Math.round(calculations.waardePerProcent).toLocaleString()}
              </div>
              <p className="text-gray-500">extra winst per jaar</p>
              <p className="text-xs text-gray-600 mt-2">(€{Math.round(calculations.extraOmzetPerProcent).toLocaleString()} extra omzet × {contributiemarge}% marge)</p>
            </div>

            {/* Scaling Examples */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-xs text-gray-500 mb-1">5% verbetering</div>
                  <div className="text-xl md:text-2xl font-bold text-green-400">
                    +€{Math.round(calculations.waarde5Procent / 1000)}k
                  </div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center border-2 border-green-500/30">
                  <div className="text-xs text-green-400 mb-1">10% verbetering</div>
                  <div className="text-xl md:text-2xl font-bold text-green-400">
                    +€{Math.round(calculations.waarde10Procent / 1000)}k
                  </div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center">
                  <div className="text-xs text-gray-500 mb-1">15% verbetering</div>
                  <div className="text-xl md:text-2xl font-bold text-green-400">
                    +€{Math.round(calculations.waarde15Procent / 1000)}k
                  </div>
                </div>
              </HoverScale>
            </div>

            {/* Highlight */}
            <div className="glass p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <PiggyBank className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-400">Typisch haalbaar: van 50% naar 70% OEE</p>
                    <p className="text-3xl font-bold text-green-400">
                      €{Math.round(calculations.haalbareBesparing).toLocaleString()} / jaar
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs text-gray-500">Dit is</p>
                  <p className="text-xl font-bold text-white">
                    +{Math.round((calculations.haalbareBesparing / calculations.jaarwinst) * 100)}% extra winst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Context */}
        <Reveal direction="up" delay={0.3}>
          <div className="glass p-6 rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary-500" />
              Wat betekent dit?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-sm text-gray-400 mb-1">Gemiddelde MKB OEE</p>
                <p className="text-xl font-bold text-yellow-400">45-55%</p>
                <p className="text-xs text-gray-500">Er is vaak 20-35 procentpunt winst mogelijk</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-sm text-gray-400 mb-1">World-class OEE</p>
                <p className="text-xl font-bold text-green-400">85%+</p>
                <p className="text-xs text-gray-500">Haalbaar met gestructureerde aanpak</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.4}>
          <div className="glass p-6 md:p-8 rounded-2xl border-2 border-primary-500/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                €{Math.round(calculations.haalbareBesparing).toLocaleString()} extra winst per jaar?
              </h3>
              <p className="text-gray-400">
                Laat me u in 15 minuten uitleggen hoe dit voor uw situatie werkt
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic>
                <a
                  href="tel:+31854010752"
                  className="btn px-8 py-4 text-lg inline-flex items-center gap-2"
                  onClick={() => analytics.phoneClicked('OEE Waarde Calculator')}
                >
                  <Phone className="w-5 h-5" />
                  Bel direct: 085 - 401 0752
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/#360scan"
                  className="btn btn-secondary px-6 py-4 inline-flex items-center gap-2"
                  onClick={() => analytics.ctaClicked('360Scan', 'OEE Waarde Calculator')}
                >
                  Gratis 360Scan
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
