'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  AlertTriangle,
  Clock,
  Euro,
  TrendingDown,
  Users,
  Phone,
  ArrowRight,
  Factory,
  Zap
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import Magnetic from '@/components/shared/Magnetic';
import { analytics } from '@/components/shared/GoogleAnalytics';

export default function StilstandCalculator() {
  const [productiewaardePerUur, setProductiewaardePerUur] = useState(5000);
  const [stilstandUrenPerWeek, setStilstandUrenPerWeek] = useState(8);
  const [wekenPerJaar, setWekenPerJaar] = useState(48);

  // Track tool usage on mount
  useEffect(() => {
    analytics.toolStarted('Stilstand Calculator');
  }, []);

  // Track when user interacts (after first slider change)
  const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    if (!hasInteracted && (productiewaardePerUur !== 5000 || stilstandUrenPerWeek !== 8)) {
      setHasInteracted(true);
      analytics.toolCompleted('Stilstand Calculator', 'interacted');
    }
  }, [productiewaardePerUur, stilstandUrenPerWeek, hasInteracted]);

  const calculations = useMemo(() => {
    const jaarlijkseStilstandUren = stilstandUrenPerWeek * wekenPerJaar;
    const jaarlijkseKosten = productiewaardePerUur * jaarlijkseStilstandUren;
    const maandelijkseKosten = jaarlijkseKosten / 12;
    const fteEquivalent = jaarlijkseKosten / 55000; // Gemiddeld FTE salaris
    const dagKosten = jaarlijkseKosten / (wekenPerJaar * 5);

    // Benchmark: top performers houden het onder 2% stilstand
    const topPerformerMax = productiewaardePerUur * (wekenPerJaar * 40 * 0.02); // 2% van totale productietijd
    const verbeterpotentieel = Math.max(0, jaarlijkseKosten - topPerformerMax);

    return {
      jaarlijkseStilstandUren,
      jaarlijkseKosten,
      maandelijkseKosten,
      dagKosten,
      fteEquivalent,
      topPerformerMax,
      verbeterpotentieel,
      stilstandPercentage: (stilstandUrenPerWeek / 40) * 100
    };
  }, [productiewaardePerUur, stilstandUrenPerWeek, wekenPerJaar]);

  const getSeverity = () => {
    if (calculations.stilstandPercentage < 5) return { level: 'Goed', color: 'green', message: 'Uw stilstand is onder controle' };
    if (calculations.stilstandPercentage < 10) return { level: 'Matig', color: 'yellow', message: 'Er is ruimte voor verbetering' };
    if (calculations.stilstandPercentage < 15) return { level: 'Zorgelijk', color: 'orange', message: 'Stilstand kost u significant geld' };
    return { level: 'Kritiek', color: 'red', message: 'Urgente actie nodig!' };
  };

  const severity = getSeverity();

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <Reveal direction="down">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-red-500">Stilstand Schadepost</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Wat kost <span className="text-red-500">stilstand</span> u écht?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Bereken in 30 seconden de verborgen kosten van uw productiestilstand
            </p>
          </div>
        </Reveal>

        {/* Input Card */}
        <Reveal direction="up" delay={0.1}>
          <div className="glass p-6 md:p-8 rounded-2xl mb-8">
            <div className="space-y-6">
              {/* Productiewaarde per uur */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Euro className="w-4 h-4 text-primary-500" />
                    Productiewaarde per uur
                  </label>
                  <span className="text-2xl font-bold text-primary-500">€{productiewaardePerUur.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="100"
                  value={productiewaardePerUur}
                  onChange={(e) => setProductiewaardePerUur(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>€500</span>
                  <span>€15.000</span>
                </div>
              </div>

              {/* Stilstand uren per week */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    Geschatte stilstand per week
                  </label>
                  <span className="text-2xl font-bold text-red-500">{stilstandUrenPerWeek} uur</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={stilstandUrenPerWeek}
                  onChange={(e) => setStilstandUrenPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 uur</span>
                  <span>30 uur</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">= {calculations.stilstandPercentage.toFixed(1)}% van productietijd (bij 40-urige werkweek)</p>
              </div>

              {/* Weken per jaar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Factory className="w-4 h-4 text-gray-400" />
                    Productieweken per jaar
                  </label>
                  <span className="text-xl font-bold text-white">{wekenPerJaar} weken</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="52"
                  step="1"
                  value={wekenPerJaar}
                  onChange={(e) => setWekenPerJaar(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gray-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>40</span>
                  <span>52</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Results */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass p-6 md:p-8 rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent mb-8">
            {/* Main Result */}
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">Uw jaarlijkse stilstandkosten</p>
              <div className="text-5xl md:text-7xl font-bold text-red-500 mb-2">
                €{calculations.jaarlijkseKosten.toLocaleString()}
              </div>
              <p className="text-gray-500">per jaar weggegooid geld</p>
            </div>

            {/* Severity Badge */}
            <div className={`text-center mb-8 p-4 rounded-xl ${
              severity.color === 'green' ? 'bg-green-500/20 border border-green-500/30' :
              severity.color === 'yellow' ? 'bg-yellow-500/20 border border-yellow-500/30' :
              severity.color === 'orange' ? 'bg-orange-500/20 border border-orange-500/30' :
              'bg-red-500/20 border border-red-500/30'
            }`}>
              <span className={`text-lg font-bold ${
                severity.color === 'green' ? 'text-green-400' :
                severity.color === 'yellow' ? 'text-yellow-400' :
                severity.color === 'orange' ? 'text-orange-400' :
                'text-red-400'
              }`}>
                {severity.level}: {severity.message}
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center">
                  <TrendingDown className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">€{Math.round(calculations.maandelijkseKosten).toLocaleString()}</div>
                  <div className="text-xs text-gray-400">per maand</div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center">
                  <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{calculations.jaarlijkseStilstandUren}</div>
                  <div className="text-xs text-gray-400">uur/jaar stil</div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center">
                  <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{calculations.fteEquivalent.toFixed(1)}</div>
                  <div className="text-xs text-gray-400">FTE salarissen</div>
                </div>
              </HoverScale>
              <HoverScale>
                <div className="glass p-4 rounded-xl text-center">
                  <Zap className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-xl font-bold text-green-400">€{Math.round(calculations.verbeterpotentieel).toLocaleString()}</div>
                  <div className="text-xs text-gray-400">te besparen</div>
                </div>
              </HoverScale>
            </div>

            {/* Comparison */}
            <div className="glass p-4 rounded-xl bg-white/5">
              <p className="text-sm text-gray-400 text-center">
                <strong className="text-white">Ter vergelijking:</strong> Top-performers in uw sector houden stilstandkosten onder
                <span className="text-green-400 font-bold"> €{Math.round(calculations.topPerformerMax).toLocaleString()}</span> per jaar
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.3}>
          <div className="glass p-6 md:p-8 rounded-2xl border-2 border-red-500/30">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                €{Math.round(calculations.verbeterpotentieel).toLocaleString()} per jaar te besparen?
              </h3>
              <p className="text-gray-400">
                Laat me uitleggen hoe u dit realiseert
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic>
                <a
                  href="tel:+31854010752"
                  className="btn px-8 py-4 text-lg inline-flex items-center gap-2"
                  onClick={() => analytics.phoneClicked('Stilstand Calculator')}
                >
                  <Phone className="w-5 h-5" />
                  Bel direct: 085 - 401 0752
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/#360scan"
                  className="btn btn-secondary px-6 py-4 inline-flex items-center gap-2"
                  onClick={() => analytics.ctaClicked('360Scan', 'Stilstand Calculator')}
                >
                  Plan uw 360Scan
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
