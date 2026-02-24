'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  BarChart3,
  Euro,
  TrendingUp,
  TrendingDown,
  Factory,
  Users,
  Phone,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Target,
  Gauge,
  Zap,
  Clock,
  Send,
  ChevronRight,
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import Magnetic from '@/components/shared/Magnetic';
import CountUp from '@/components/shared/CountUp';
import { analytics } from '@/components/shared/GoogleAnalytics';

// OEE benchmark categorieën
const OEE_ZONES = [
  { min: 0, max: 40, label: 'Kritiek', color: 'red', bg: 'from-red-500/20 to-red-500/5' },
  { min: 40, max: 55, label: 'Ondergemiddeld', color: 'orange', bg: 'from-orange-500/20 to-orange-500/5' },
  { min: 55, max: 70, label: 'Gemiddeld MKB', color: 'yellow', bg: 'from-yellow-500/20 to-yellow-500/5' },
  { min: 70, max: 80, label: 'Goed', color: 'green', bg: 'from-green-500/20 to-green-500/5' },
  { min: 80, max: 100, label: 'World Class', color: 'emerald', bg: 'from-emerald-500/20 to-emerald-500/5' },
];

function getOEEZone(oee: number) {
  for (const zone of OEE_ZONES) {
    if (oee >= zone.min && oee < zone.max) return zone;
  }
  return OEE_ZONES[OEE_ZONES.length - 1];
}

function getZoneColorClass(color: string, type: 'text' | 'bg' | 'border') {
  const map: Record<string, Record<string, string>> = {
    red: { text: 'text-red-500', bg: 'bg-red-500', border: 'border-red-500/30' },
    orange: { text: 'text-orange-500', bg: 'bg-orange-500', border: 'border-orange-500/30' },
    yellow: { text: 'text-yellow-500', bg: 'bg-yellow-500', border: 'border-yellow-500/30' },
    green: { text: 'text-green-500', bg: 'bg-green-500', border: 'border-green-500/30' },
    emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500', border: 'border-emerald-500/30' },
  };
  return map[color]?.[type] || '';
}

function formatEuro(amount: number): string {
  if (amount >= 1000000) {
    return `€${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `€${Math.round(amount / 1000)}k`;
  }
  return `€${Math.round(amount).toLocaleString('nl-NL')}`;
}

export default function ProductieProfitScan() {
  // Stap 1: Input state
  const [jaaromzet, setJaaromzet] = useState(5000000);
  const [aantalLijnen, setAantalLijnen] = useState(4);
  const [huidigeOEE, setHuidigeOEE] = useState(50);
  const [uurloon, setUurloon] = useState(35);

  // Lead capture
  const [naam, setNaam] = useState('');
  const [bedrijf, setBedrijf] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // UI state
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Analytics
  useEffect(() => {
    analytics.toolStarted('Productie Profit Scan');
  }, []);

  const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    if (!hasInteracted && (jaaromzet !== 5000000 || huidigeOEE !== 50)) {
      setHasInteracted(true);
    }
  }, [jaaromzet, huidigeOEE, hasInteracted]);

  // Berekeningen
  const calc = useMemo(() => {
    const theoretischeCapaciteit = jaaromzet / (huidigeOEE / 100);
    const verlorenCapaciteit = theoretischeCapaciteit - jaaromzet;
    const waardePer1Procent = theoretischeCapaciteit * 0.01;

    const scenario5 = waardePer1Procent * 5;
    const scenario10 = waardePer1Procent * 10;
    const scenario20 = waardePer1Procent * 20;

    const gapNaar70 = Math.max(0, (70 - huidigeOEE)) * waardePer1Procent;
    const gapNaar85 = Math.max(0, (85 - huidigeOEE)) * waardePer1Procent;

    // Verliesposten indicatief (branche gemiddelden)
    const beschikbaarheidsverlies = verlorenCapaciteit * 0.40; // 40% van verlies
    const prestatieverlies = verlorenCapaciteit * 0.35; // 35%
    const kwaliteitsverlies = verlorenCapaciteit * 0.25; // 25%

    // Personeel impact
    const urenPerJaar = 1800; // standaard FTE
    const kostenPerFTE = uurloon * urenPerJaar;
    const verliesInFTE = verlorenCapaciteit / kostenPerFTE;

    return {
      theoretischeCapaciteit,
      verlorenCapaciteit,
      waardePer1Procent,
      scenario5,
      scenario10,
      scenario20,
      gapNaar70,
      gapNaar85,
      beschikbaarheidsverlies,
      prestatieverlies,
      kwaliteitsverlies,
      verliesInFTE,
    };
  }, [jaaromzet, huidigeOEE, uurloon]);

  const zone = getOEEZone(huidigeOEE);

  // Form validatie & submit
  const validateAndSubmit = async () => {
    const errors: Record<string, string> = {};
    if (!naam.trim()) errors.naam = 'Uw naam is verplicht';
    if (!bedrijf.trim()) errors.bedrijf = 'Bedrijfsnaam is verplicht';
    if (!email.trim()) {
      errors.email = 'E-mailadres is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Ongeldig e-mailadres';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit-calculation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: naam.trim(),
          email: email.trim().toLowerCase(),
          bedrijf: bedrijf.trim(),
          calculatorType: 'Productie Profit Scan',
          jaaromzet,
          aantalLijnen,
          huidigeOEE,
          uurloon,
          verlorenCapaciteit: Math.round(calc.verlorenCapaciteit),
          gapNaar70: Math.round(calc.gapNaar70),
          gapNaar85: Math.round(calc.gapNaar85),
        }),
      });

      if (response.ok) {
        analytics.toolCompleted('Productie Profit Scan', 'lead_submitted');
        setShowResults(true);
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setSubmitMessage('Er ging iets mis. Probeer het opnieuw.');
      }
    } catch {
      setSubmitMessage('Verbindingsfout. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // OEE Gauge component
  const OEEGauge = () => {
    const radius = 80;
    const circumference = Math.PI * radius;
    const progress = (huidigeOEE / 100) * circumference;
    const colorClass = getZoneColorClass(zone.color, 'text');

    return (
      <div className="relative w-48 h-28 mx-auto">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            className={`${colorClass} transition-all duration-1000`}
          />
          {/* Center text */}
          <text x="100" y="85" textAnchor="middle" className="fill-white text-3xl font-bold" fontSize="32">
            {huidigeOEE}%
          </text>
          <text x="100" y="108" textAnchor="middle" className="fill-gray-400" fontSize="12">
            Huidige OEE
          </text>
        </svg>
      </div>
    );
  };

  // Benchmark balk component
  const BenchmarkBar = () => {
    const position = Math.min(Math.max(huidigeOEE, 20), 95);
    const leftPercent = ((position - 20) / 75) * 100;

    return (
      <div className="relative mt-4">
        <div className="flex h-8 rounded-full overflow-hidden">
          <div className="flex-1 bg-red-500/30" style={{ flex: '0 0 27%' }} />
          <div className="flex-1 bg-orange-500/30" style={{ flex: '0 0 20%' }} />
          <div className="flex-1 bg-yellow-500/30" style={{ flex: '0 0 20%' }} />
          <div className="flex-1 bg-green-500/30" style={{ flex: '0 0 13%' }} />
          <div className="flex-1 bg-emerald-500/30" style={{ flex: '0 0 20%' }} />
        </div>
        {/* Marker */}
        <div
          className="absolute top-0 w-1 h-8 bg-white rounded-full shadow-lg shadow-white/30 transition-all duration-700"
          style={{ left: `${leftPercent}%` }}
        />
        {/* Labels */}
        <div className="flex justify-between mt-2 text-[10px] text-gray-500">
          <span>20%</span>
          <span>40%</span>
          <span>55%</span>
          <span>70%</span>
          <span>85%</span>
          <span>95%+</span>
        </div>
        <div className="flex justify-between mt-1 text-[9px]">
          <span className="text-red-400">Kritiek</span>
          <span className="text-orange-400">Onder gem.</span>
          <span className="text-yellow-400">Gem. MKB</span>
          <span className="text-green-400">Goed</span>
          <span className="text-emerald-400">World Class</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-12">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ============================================ */}
        {/* HEADER */}
        {/* ============================================ */}
        <Reveal direction="down">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-500">Productie Profit Scan</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hoeveel <span className="gradient-text">winst</span> laat u liggen?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Vul uw cijfers in en ontdek in 2 minuten wat OEE-verbetering u oplevert in euro&apos;s.
              Zonder extra machines. Zonder extra personeel.
            </p>
          </div>
        </Reveal>

        {/* ============================================ */}
        {/* STAP 1: INPUT */}
        {/* ============================================ */}
        <Reveal direction="up" delay={0.1}>
          <div className="glass p-6 md:p-8 rounded-2xl mb-8">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Factory className="w-5 h-5 text-primary-500" />
              Uw productiegegevens
            </h2>
            <div className="space-y-6">
              {/* Jaaromzet */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Euro className="w-4 h-4 text-primary-500" />
                    Jaaromzet
                  </label>
                  <span className="text-2xl font-bold text-primary-500">
                    {jaaromzet >= 1000000
                      ? `€${(jaaromzet / 1000000).toFixed(1)}M`
                      : `€${Math.round(jaaromzet / 1000)}k`}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="25000000"
                  step="100000"
                  value={jaaromzet}
                  onChange={(e) => setJaaromzet(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>€500k</span>
                  <span>€25M</span>
                </div>
              </div>

              {/* Aantal productielijnen */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    Aantal productielijnen / machines
                  </label>
                  <span className="text-2xl font-bold text-blue-500">{aantalLijnen}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={aantalLijnen}
                  onChange={(e) => setAantalLijnen(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Geschatte OEE */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-yellow-500" />
                    Geschatte huidige OEE
                  </label>
                  <span className={`text-2xl font-bold ${getZoneColorClass(zone.color, 'text')}`}>
                    {huidigeOEE}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="1"
                  value={huidigeOEE}
                  onChange={(e) => setHuidigeOEE(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20%</span>
                  <span>90%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Weet u het niet zeker? De meeste MKB-maakbedrijven zitten tussen 45-55%.
                </p>
              </div>

              {/* Uurloon */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    Gemiddeld uurloon incl. werkgeverslasten
                  </label>
                  <span className="text-2xl font-bold text-green-500">€{uurloon}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="65"
                  step="1"
                  value={uurloon}
                  onChange={(e) => setUurloon(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>€20</span>
                  <span>€65</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Inclusief vakantiegeld, pensioen, verzekeringen.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ============================================ */}
        {/* LEAD CAPTURE */}
        {/* ============================================ */}
        {!showResults && (
          <Reveal direction="up" delay={0.2}>
            <div className="glass p-6 md:p-8 rounded-2xl border-2 border-primary-500/30 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Bekijk uw persoonlijke resultaat
                </h3>
                <p className="text-gray-400 text-sm">
                  Vul uw gegevens in om direct te zien hoeveel winst u laat liggen.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Uw naam *</label>
                  <input
                    type="text"
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                    placeholder="Bijv. Jan Jansen"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  />
                  {formErrors.naam && <p className="text-red-400 text-xs mt-1">{formErrors.naam}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Bedrijfsnaam *</label>
                  <input
                    type="text"
                    value={bedrijf}
                    onChange={(e) => setBedrijf(e.target.value)}
                    placeholder="Bijv. Uw Bedrijf B.V."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  />
                  {formErrors.bedrijf && <p className="text-red-400 text-xs mt-1">{formErrors.bedrijf}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">E-mailadres *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jan@bedrijf.nl"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  />
                  {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
                </div>
              </div>

              {submitMessage && (
                <p className="text-center text-red-400 text-sm mb-4">{submitMessage}</p>
              )}

              <div className="text-center">
                <Magnetic>
                  <button
                    onClick={validateAndSubmit}
                    disabled={isSubmitting}
                    className="btn px-8 py-4 text-lg inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSubmitting ? 'Berekenen...' : 'Toon mijn resultaat'}
                  </button>
                </Magnetic>
                <p className="text-xs text-gray-500 mt-3">
                  Uw gegevens zijn veilig. Geen spam, beloofd.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* ============================================ */}
        {/* STAP 2: RESULTATEN */}
        {/* ============================================ */}
        {showResults && (
          <div ref={resultsRef}>
            {/* Sectie 1: Uw huidige situatie */}
            <Reveal direction="up" delay={0.1}>
              <div className={`glass p-6 md:p-8 rounded-2xl border-2 ${getZoneColorClass(zone.color, 'border')} mb-8`}>
                <h2 className="text-xl font-bold text-white mb-6 text-center">
                  Uw huidige situatie
                </h2>

                <OEEGauge />

                <div className="text-center mt-6 mb-6">
                  <p className="text-gray-400 mb-2">
                    Bij een omzet van <span className="text-white font-semibold">{formatEuro(jaaromzet)}</span> en
                    een OEE van <span className={`font-semibold ${getZoneColorClass(zone.color, 'text')}`}>{huidigeOEE}%</span> benut
                    u {huidigeOEE}% van uw productiecapaciteit.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 text-center">
                  <p className="text-gray-400 text-sm mb-1">U laat jaarlijks liggen:</p>
                  <div className="text-4xl md:text-6xl font-bold text-red-400">
                    <CountUp end={Math.round(calc.verlorenCapaciteit)} prefix="€" duration={1.5} />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">aan potenti&euml;le productiewaarde</p>
                </div>
              </div>
            </Reveal>

            {/* Sectie 2: Wat OEE-verbetering oplevert */}
            <Reveal direction="up" delay={0.2}>
              <div className="glass p-6 md:p-8 rounded-2xl mb-8">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-500" />
                  Wat OEE-verbetering u oplevert
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Zonder extra machines. Zonder extra personeel. Zonder extra m&sup2;.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <HoverScale>
                    <div className="glass p-5 rounded-xl text-center">
                      <div className="text-xs text-gray-500 mb-2">+5% OEE</div>
                      <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                        <CountUp end={Math.round(calc.scenario5)} prefix="€" duration={1.2} />
                      </div>
                      <div className="text-xs text-gray-500">extra per jaar</div>
                    </div>
                  </HoverScale>
                  <HoverScale>
                    <div className="glass p-5 rounded-xl text-center border-2 border-primary-500/30">
                      <div className="text-xs text-primary-400 mb-2 font-semibold">+10% OEE</div>
                      <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                        <CountUp end={Math.round(calc.scenario10)} prefix="€" duration={1.4} />
                      </div>
                      <div className="text-xs text-gray-500">extra per jaar</div>
                    </div>
                  </HoverScale>
                  <HoverScale>
                    <div className="glass p-5 rounded-xl text-center">
                      <div className="text-xs text-gray-500 mb-2">+20% OEE</div>
                      <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                        <CountUp end={Math.round(calc.scenario20)} prefix="€" duration={1.6} />
                      </div>
                      <div className="text-xs text-gray-500">extra per jaar</div>
                    </div>
                  </HoverScale>
                </div>

                <div className="glass p-4 rounded-xl bg-white/5 text-center">
                  <p className="text-xs text-gray-500">
                    Elke <span className="text-primary-500 font-bold">1%</span> OEE-verbetering is
                    bij uw omzet <span className="text-white font-bold">{formatEuro(calc.waardePer1Procent)}</span> waard per jaar
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sectie 3: Benchmark */}
            <Reveal direction="up" delay={0.3}>
              <div className="glass p-6 md:p-8 rounded-2xl mb-8">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-500" />
                  Hoe scoort u ten opzichte van de benchmark?
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Uw OEE van <span className={`font-bold ${getZoneColorClass(zone.color, 'text')}`}>{huidigeOEE}%</span> plaatst
                  u in de categorie <span className={`font-bold ${getZoneColorClass(zone.color, 'text')}`}>&ldquo;{zone.label}&rdquo;</span>.
                </p>

                <BenchmarkBar />

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {huidigeOEE < 70 && (
                    <div className="glass p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-400">Naar &ldquo;Goed&rdquo; (70%)</span>
                      </div>
                      <p className="text-2xl font-bold text-green-400">{formatEuro(calc.gapNaar70)}</p>
                      <p className="text-xs text-gray-500">extra per jaar</p>
                    </div>
                  )}
                  {huidigeOEE < 85 && (
                    <div className="glass p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-semibold text-emerald-400">Naar World Class (85%)</span>
                      </div>
                      <p className="text-2xl font-bold text-emerald-400">{formatEuro(calc.gapNaar85)}</p>
                      <p className="text-xs text-gray-500">extra per jaar</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Sectie 4: Waar lekt uw winst */}
            <Reveal direction="up" delay={0.4}>
              <div className="glass p-6 md:p-8 rounded-2xl mb-8">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  Waar lekt uw winst waarschijnlijk weg?
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Op basis van branche-gemiddelden voor uw {aantalLijnen} productielijn{aantalLijnen > 1 ? 'en' : ''}.
                </p>

                <div className="space-y-4">
                  {/* Beschikbaarheidsverlies */}
                  <div className="glass p-5 rounded-xl border border-red-500/10">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-red-500/10 rounded-lg shrink-0">
                        <Clock className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-white">Ongeplande stilstand</h3>
                          <span className="text-lg font-bold text-red-400">{formatEuro(calc.beschikbaarheidsverlies)}/jr</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Storingen, wachten op materiaal, ongeplande omsteltijden.
                          Bij MKB-maakbedrijven is dit gemiddeld 40% van het totale verlies.
                        </p>
                        <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500/60 rounded-full" style={{ width: '40%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prestatieverlies */}
                  <div className="glass p-5 rounded-xl border border-orange-500/10">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-500/10 rounded-lg shrink-0">
                        <Zap className="w-5 h-5 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-white">Snelheidsverlies &amp; micro-stops</h3>
                          <span className="text-lg font-bold text-orange-400">{formatEuro(calc.prestatieverlies)}/jr</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Machines draaien langzamer dan ontwerpsnelheid, korte onderbrekingen, lege loopbanden.
                          Gemiddeld 35% van het totale verlies.
                        </p>
                        <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500/60 rounded-full" style={{ width: '35%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kwaliteitsverlies */}
                  <div className="glass p-5 rounded-xl border border-yellow-500/10">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-yellow-500/10 rounded-lg shrink-0">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-white">Uitval &amp; herbewerking</h3>
                          <span className="text-lg font-bold text-yellow-400">{formatEuro(calc.kwaliteitsverlies)}/jr</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          Afgekeurde producten, rework, opstartverliezen.
                          Gemiddeld 25% van het totale verlies. Vaak de duurste per eenheid.
                        </p>
                        <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500/60 rounded-full" style={{ width: '25%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Sectie 5: CTA */}
            <Reveal direction="up" delay={0.5}>
              <div className="glass p-6 md:p-8 rounded-2xl border-2 border-primary-500/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Wilt u weten waar het <span className="gradient-text">&eacute;cht</span> lekt?
                  </h3>
                  <p className="text-gray-400">
                    Deze scan geeft een indicatie. Een 360Scan op uw werkvloer geeft exacte cijfers
                    en een concreet verbeterplan met euro-bedragen.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Magnetic>
                    <a
                      href="tel:+31854010752"
                      className="btn px-8 py-4 text-lg inline-flex items-center gap-2"
                      onClick={() => analytics.phoneClicked('Productie Profit Scan')}
                    >
                      <Phone className="w-5 h-5" />
                      Bel direct: 085 - 401 0752
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="/#360scan"
                      className="btn btn-secondary px-6 py-4 inline-flex items-center gap-2"
                      onClick={() => analytics.ctaClicked('360Scan', 'Productie Profit Scan')}
                    >
                      Plan uw 360Scan
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Magnetic>
                </div>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Investering: &euro;1.450 voor een complete dag op de werkvloer.
                  Inclusief rapport met concrete aanbevelingen. Levert gemiddeld 10-20x terug.
                </p>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
}
