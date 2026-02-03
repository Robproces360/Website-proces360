'use client';

import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  CircleDollarSign,
  CalendarClock,
  Target,
  AlertTriangle,
  BadgeCheck,
  ArrowUpRight,
  Factory,
  Percent,
  Banknote,
  Phone,
  Mail,
  Info,
  Settings2,
  BarChart4,
  Sparkles,
  FileDown,
  Gauge,
  Award,
  PiggyBank,
  LineChart as LineChartIcon
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Area, ComposedChart } from 'recharts';
import Magnetic from '@/components/shared/Magnetic';
import HoverScale from '@/components/shared/HoverScale';
import Reveal from '@/components/shared/Reveal';
import EmailFormModal, { FormData } from '@/components/shared/EmailFormModal';
import FixedLogo from '@/components/shared/FixedLogo';
import { generateOEEPDF } from '@/lib/pdfGenerator';

export default function OEECalculator() {
  // State voor inputvelden
  const [huidigeOEE, setHuidigeOEE] = useState(50); // Marktgemiddelde MKB: 40-60%
  const [doelOEE, setDoelOEE] = useState(65); // Realistische target verbetering
  const [maandOmzet, setMaandOmzet] = useState(250000); // €250k per maand standaard
  const [winstmarge, setWinstmarge] = useState(15); // 15% winstmarge (realistisch voor productie)

  // Kosten OEE verbetertraject - allemaal vanaf 0 beschikbaar
  const [consultancyKosten, setConsultancyKosten] = useState(15000); // €15k default
  const [softwareKosten, setSoftwareKosten] = useState(8000); // €8k per jaar voor OEE monitoring software
  const [trainingsKosten, setTrainingsKosten] = useState(5000); // €5k voor operator/engineer training
  const [implementatieKosten, setImplementatieKosten] = useState(10000); // €10k voor technische verbeteringen

  // State - PDF Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Bereken alle financiële impact
  const calculations = useMemo(() => {
    // OEE verbetering in procentpunten
    const oeeVerbetering = doelOEE - huidigeOEE;
    const oeeVerbeteringPercentage = (oeeVerbetering / huidigeOEE) * 100;

    // Financiële impact
    const jaarOmzet = maandOmzet * 12;
    const extraOmzetPercentage = oeeVerbeteringPercentage;
    const extraJaarOmzet = (jaarOmzet * extraOmzetPercentage) / 100;
    const extraMaandOmzet = extraJaarOmzet / 12;

    // Winst impact (op basis van winstmarge)
    const extraJaarWinst = (extraJaarOmzet * winstmarge) / 100;
    const extraMaandWinst = extraJaarWinst / 12;

    // Totale investering
    const totaleInvestering = consultancyKosten + softwareKosten + trainingsKosten + implementatieKosten;

    // ROI berekening
    const terugverdientijd = totaleInvestering / extraMaandWinst; // in maanden
    const jaarROI = ((extraJaarWinst - totaleInvestering) / totaleInvestering) * 100;
    const drieJaarWinst = (extraJaarWinst * 3) - totaleInvestering;
    const vijfJaarWinst = (extraJaarWinst * 5) - totaleInvestering;

    // Productiviteitswinst
    const extraProductieCapaciteit = oeeVerbeteringPercentage;

    return {
      huidigeOEE,
      doelOEE,
      oeeVerbetering,
      oeeVerbeteringPercentage,
      jaarOmzet,
      extraJaarOmzet,
      extraMaandOmzet,
      extraJaarWinst,
      extraMaandWinst,
      totaleInvestering,
      terugverdientijd,
      jaarROI,
      drieJaarWinst,
      vijfJaarWinst,
      extraProductieCapaciteit,
      consultancyKosten,
      softwareKosten,
      trainingsKosten,
      implementatieKosten,
      winstmarge
    };
  }, [huidigeOEE, doelOEE, maandOmzet, winstmarge, consultancyKosten, softwareKosten, trainingsKosten, implementatieKosten]);

  // Data voor 5-jaars projectie grafiek
  const projectieData = useMemo(() => {
    const data = [];
    for (let jaar = 0; jaar <= 5; jaar++) {
      const cumulatiefInvestering = jaar === 0
        ? calculations.totaleInvestering
        : calculations.totaleInvestering + (calculations.softwareKosten * jaar); // Jaarlijkse software kosten

      const cumulatiefWinst = jaar === 0
        ? 0
        : (calculations.extraJaarWinst * jaar) - (calculations.softwareKosten * (jaar - 1));

      const nettoWinst = cumulatiefWinst - calculations.totaleInvestering;

      data.push({
        jaar: `Jaar ${jaar}`,
        investering: Math.round(cumulatiefInvestering),
        winst: Math.round(cumulatiefWinst),
        netto: Math.round(nettoWinst)
      });
    }
    return data;
  }, [calculations]);

  // Data voor omzet vergelijking
  const omzetVergelijkingData = useMemo(() => {
    return [
      {
        periode: 'Per maand',
        huidig: Math.round(calculations.jaarOmzet / 12),
        metOEE: Math.round((calculations.jaarOmzet / 12) + calculations.extraMaandOmzet)
      },
      {
        periode: 'Per jaar',
        huidig: Math.round(calculations.jaarOmzet),
        metOEE: Math.round(calculations.jaarOmzet + calculations.extraJaarOmzet)
      },
      {
        periode: '3 jaar',
        huidig: Math.round(calculations.jaarOmzet * 3),
        metOEE: Math.round((calculations.jaarOmzet * 3) + (calculations.extraJaarOmzet * 3))
      },
      {
        periode: '5 jaar',
        huidig: Math.round(calculations.jaarOmzet * 5),
        metOEE: Math.round((calculations.jaarOmzet * 5) + (calculations.extraJaarOmzet * 5))
      }
    ];
  }, [calculations]);

  // Data voor super duidelijke besparing/winst grafiek per maand (60 maanden)
  const besparingTimelineData = useMemo(() => {
    const data = [];
    for (let maand = 0; maand <= 60; maand++) {
      const cumulatieveInvestering = calculations.totaleInvestering;
      const cumulatieveWinst = calculations.extraMaandWinst * maand;
      const nettoResultaat = cumulatieveWinst - cumulatieveInvestering;

      data.push({
        maand,
        investering: -cumulatieveInvestering,
        winst: Math.round(cumulatieveWinst),
        netto: Math.round(nettoResultaat),
        breakeven: 0
      });
    }
    return data;
  }, [calculations]);

  // Feedback berichten op basis van resultaten
  const getFeedback = () => {
    if (calculations.oeeVerbetering <= 0) {
      return {
        type: 'warning',
        icon: <AlertTriangle className="w-5 h-5" />,
        message: 'Stel een hogere doel-OEE in dan uw huidige OEE om de impact te berekenen.'
      };
    }

    if (calculations.terugverdientijd < 6) {
      return {
        type: 'success',
        icon: <BadgeCheck className="w-5 h-5" />,
        message: `Uitstekend! Terugverdientijd van ${calculations.terugverdientijd.toFixed(1)} maanden is zeer aantrekkelijk.`
      };
    }

    if (calculations.terugverdientijd < 12) {
      return {
        type: 'success',
        icon: <BadgeCheck className="w-5 h-5" />,
        message: `Goed rendement! Investering terugverdiend in ${calculations.terugverdientijd.toFixed(1)} maanden.`
      };
    }

    if (calculations.terugverdientijd < 24) {
      return {
        type: 'info',
        icon: <Info className="w-5 h-5" />,
        message: `Acceptabel rendement met terugverdientijd van ${calculations.terugverdientijd.toFixed(1)} maanden.`
      };
    }

    return {
      type: 'warning',
      icon: <AlertTriangle className="w-5 h-5" />,
      message: `Let op: Terugverdientijd van ${calculations.terugverdientijd.toFixed(1)} maanden is relatief lang. Mogelijk zijn er betere optimalisaties mogelijk.`
    };
  };

  const feedback = getFeedback();

  // Handle PDF download with email form
  const handleDownloadPDF = async (formData: FormData) => {
    try {
      // Prepare calculation data for PDF
      const pdfData = {
        huidigeOEE,
        doelOEE,
        maandOmzet,
        winstmarge,
        consultancyKosten,
        softwareKosten,
        trainingsKosten,
        implementatieKosten,
        oeeVerbetering: calculations.oeeVerbetering,
        oeeVerbeteringPercentage: calculations.oeeVerbeteringPercentage,
        jaarOmzet: calculations.jaarOmzet,
        extraJaarOmzet: calculations.extraJaarOmzet,
        extraMaandOmzet: calculations.extraMaandOmzet,
        extraJaarWinst: calculations.extraJaarWinst,
        extraMaandWinst: calculations.extraMaandWinst,
        totaleInvestering: calculations.totaleInvestering,
        terugverdientijd: calculations.terugverdientijd,
        jaarROI: calculations.jaarROI,
        drieJaarWinst: calculations.drieJaarWinst,
        vijfJaarWinst: calculations.vijfJaarWinst,
      };

      // Generate PDF
      const pdfBlob = await generateOEEPDF(formData, pdfData);

      // Send email notification to Proces360
      await fetch('/api/submit-calculation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          calculatorType: 'OEE Calculator',
          ...pdfData,
        }),
      });

      // Trigger download
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Proces360-OEE-Rapport-${formData.naam.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Close modal
      setIsModalOpen(false);

      // Show success message
      alert('✅ PDF rapport succesvol gegenereerd! We nemen binnen 24 uur contact met u op.');
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      {/* Fixed Logo */}
      <FixedLogo />

      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Reveal direction="down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
              <BarChart4 className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-500">OEE Verbetering Calculator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Wat levert <span className="gradient-text">1% extra OEE</span> u op?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bereken direct de financiële impact van hogere machine-efficiëntie
            </p>
            <p className="text-sm text-gray-500 mt-3">
              OEE = Overall Equipment Effectiveness
            </p>
          </div>
        </Reveal>

        {/* Input Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Huidige Situatie */}
          <Reveal direction="up" delay={0.1}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Factory className="w-6 h-6 text-primary-500" />
                Huidige Situatie
              </h3>

              <div className="space-y-6">
                {/* Huidige OEE */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-3">
                    <Percent className="w-4 h-4 text-primary-500" />
                    Huidige OEE
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="0.1"
                      value={huidigeOEE}
                      onChange={(e) => setHuidigeOEE(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                    />
                    <span className="text-2xl font-bold text-white min-w-[5rem] text-right">
                      {huidigeOEE.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    <Info className="w-3 h-3 inline-block mr-1" />
                    Marktgemiddelde MKB: 40-60%
                  </p>
                </div>

                {/* Maand Omzet */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-3">
                    <CircleDollarSign className="w-4 h-4 text-primary-500" />
                    Omzet productielijn per maand
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="100"
                      value={maandOmzet}
                      onChange={(e) => setMaandOmzet(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                    />
                    <span className="text-xl font-bold text-white min-w-[7rem] text-right">
                      €{maandOmzet.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€0</span>
                    <span>€1M</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Totale maandelijkse output waarde van de productielijn
                  </p>
                </div>

                {/* Winstmarge */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-primary-500" />
                    Winstmarge
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="40"
                      step="0.1"
                      value={winstmarge}
                      onChange={(e) => setWinstmarge(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                    />
                    <span className="text-2xl font-bold text-white min-w-[5rem] text-right">
                      {winstmarge.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>40%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Gemiddelde winstmarge op productie (typisch 10-20% voor MKB)
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Gewenste Verbetering */}
          <Reveal direction="up" delay={0.2}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-green-500" />
                Gewenste Verbetering
              </h3>

              <div className="space-y-6">
                {/* Doel OEE */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-green-500" />
                    Doel OEE
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="0.1"
                      value={doelOEE}
                      onChange={(e) => setDoelOEE(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                    <span className="text-2xl font-bold text-green-400 min-w-[5rem] text-right">
                      {doelOEE.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    <Info className="w-3 h-3 inline-block mr-1" />
                    World class: 85%+, Goed: 70-85%, Acceptabel: 60-70%
                  </p>
                </div>

                {/* OEE Verbetering (berekend) */}
                <div className="glass p-6 rounded-xl border-2 border-green-500/30">
                  <div className="text-sm text-gray-400 mb-2">OEE Verbetering</div>
                  <div className="text-4xl font-bold text-green-400 mb-1">
                    +{calculations.oeeVerbetering.toFixed(1)} pp
                  </div>
                  <div className="text-sm text-gray-400">
                    = {calculations.oeeVerbeteringPercentage.toFixed(1)}% productiviteitswinst
                  </div>
                </div>

                {/* Extra Capaciteit Info */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <ArrowUpRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-green-400 mb-1">
                        Extra Productiecapaciteit
                      </div>
                      <div className="text-xs text-gray-400">
                        Equivalent aan {calculations.oeeVerbeteringPercentage.toFixed(1)}% meer produceren zonder extra machines of personeel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Investering Traject */}
          <Reveal direction="up" delay={0.3}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings2 className="w-6 h-6 text-orange-500" />
                Investering Traject
              </h3>

              <div className="space-y-6">
                {/* Consultancy */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 mb-3 block">
                    Consultancy & Begeleiding
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="100"
                      value={consultancyKosten}
                      onChange={(e) => setConsultancyKosten(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="text-lg font-bold text-white min-w-[6rem] text-right">
                      €{consultancyKosten.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€0</span>
                    <span>€100k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    OEE verbetertraject met expert begeleiding (optioneel)
                  </p>
                </div>

                {/* Software */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 mb-3 block">
                    OEE Monitoring Software
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="100"
                      value={softwareKosten}
                      onChange={(e) => setSoftwareKosten(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="text-lg font-bold text-white min-w-[6rem] text-right">
                      €{softwareKosten.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€0</span>
                    <span>€50k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Jaarlijkse kosten voor monitoring software (optioneel)
                  </p>
                </div>

                {/* Training */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 mb-3 block">
                    Training & Scholing
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="25000"
                      step="100"
                      value={trainingsKosten}
                      onChange={(e) => setTrainingsKosten(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="text-lg font-bold text-white min-w-[6rem] text-right">
                      €{trainingsKosten.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€0</span>
                    <span>€25k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Training operators, engineers en management (optioneel)
                  </p>
                </div>

                {/* Implementatie */}
                <div>
                  <label className="text-sm font-semibold text-gray-300 mb-3 block">
                    Technische Implementatie
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="75000"
                      step="100"
                      value={implementatieKosten}
                      onChange={(e) => setImplementatieKosten(Number(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <span className="text-lg font-bold text-white min-w-[6rem] text-right">
                      €{implementatieKosten.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€0</span>
                    <span>€75k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Sensoren, aanpassingen, integraties (optioneel)
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Totale Investering Breakdown */}
        <Reveal direction="up" delay={0.45}>
          <div className="glass p-8 rounded-2xl mb-12 border-2 border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Banknote className="w-7 h-7 text-orange-500" />
              Totale Investering
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Consultancy</div>
                <div className="text-xl font-bold text-white">€{(calculations.consultancyKosten / 1000).toFixed(0)}k</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Software</div>
                <div className="text-xl font-bold text-white">€{(calculations.softwareKosten / 1000).toFixed(0)}k</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Training</div>
                <div className="text-xl font-bold text-white">€{(calculations.trainingsKosten / 1000).toFixed(0)}k</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Implementatie</div>
                <div className="text-xl font-bold text-white">€{(calculations.implementatieKosten / 1000).toFixed(0)}k</div>
              </div>
              <div className="text-center p-4 bg-orange-500/20 rounded-xl border-2 border-orange-500">
                <div className="text-sm text-orange-300 mb-2 font-semibold">TOTAAL</div>
                <div className="text-3xl font-bold text-orange-500">€{(calculations.totaleInvestering / 1000).toFixed(0)}k</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hero Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Reveal direction="up" delay={0.5}>
            <HoverScale scale={1.03}>
              <div className="glass p-6 rounded-2xl border-2 border-green-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <PiggyBank className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-400">Extra Omzet per Jaar</h4>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  €{(calculations.extraJaarOmzet / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-500">
                  +€{(calculations.extraMaandOmzet / 1000).toFixed(1)}k per maand
                </div>
              </div>
            </HoverScale>
          </Reveal>

          <Reveal direction="up" delay={0.55}>
            <HoverScale scale={1.03}>
              <div className="glass p-6 rounded-2xl border-2 border-primary-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary-500/20 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-primary-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-400">Extra Winst per Jaar</h4>
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  €{(calculations.extraJaarWinst / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-500">
                  Bij {calculations.winstmarge}% winstmarge
                </div>
              </div>
            </HoverScale>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <HoverScale scale={1.03}>
              <div className="glass p-6 rounded-2xl border-2 border-yellow-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <CalendarClock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-400">Terugverdientijd</h4>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {calculations.terugverdientijd.toFixed(1)} mnd
                </div>
                <div className="text-sm text-gray-500">
                  = {(calculations.terugverdientijd / 12).toFixed(1)} jaar
                </div>
              </div>
            </HoverScale>
          </Reveal>

          <Reveal direction="up" delay={0.65}>
            <HoverScale scale={1.03}>
              <div className="glass p-6 rounded-2xl border-2 border-purple-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Target className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-400">ROI Jaar 1</h4>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {calculations.jaarROI.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-500">
                  Return on Investment
                </div>
              </div>
            </HoverScale>
          </Reveal>
        </div>

        {/* Feedback Alert */}
        <Reveal direction="up" delay={0.7}>
          <div className={`glass p-6 rounded-2xl mb-12 border-2 ${
            feedback.type === 'success' ? 'border-green-500/30 bg-green-500/5' :
            feedback.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/5' :
            'border-blue-500/30 bg-blue-500/5'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${
                feedback.type === 'success' ? 'bg-green-500/20 text-green-500' :
                feedback.type === 'warning' ? 'bg-yellow-500/20 text-yellow-500' :
                'bg-blue-500/20 text-blue-500'
              }`}>
                {feedback.icon}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold mb-1 ${
                  feedback.type === 'success' ? 'text-green-400' :
                  feedback.type === 'warning' ? 'text-yellow-400' :
                  'text-blue-400'
                }`}>
                  Analyse
                </h4>
                <p className="text-gray-300">{feedback.message}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SUPER DUIDELIJKE BESPARING VISUALISATIE */}
        <Reveal direction="up" delay={0.72}>
          <div className="glass p-8 rounded-2xl mb-12 border-2 border-green-500/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Uw <span className="text-green-400">Besparing</span> in Beeld
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Zie direct wanneer uw investering is terugverdiend en hoeveel extra winst u maakt
              </p>
            </div>

            {/* Grote KPI Blokken */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-2xl border-2 border-red-500/30 bg-red-500/10 text-center">
                <div className="text-sm text-red-300 mb-2 font-semibold">INVESTERING</div>
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  €{(calculations.totaleInvestering / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-400">Eenmalige kosten</div>
              </div>

              <div className="glass p-6 rounded-2xl border-2 border-green-500/30 bg-green-500/10 text-center">
                <div className="text-sm text-green-300 mb-2 font-semibold">EXTRA WINST PER JAAR</div>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  €{(calculations.extraJaarWinst / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-400">= €{(calculations.extraMaandWinst / 1000).toFixed(1)}k per maand</div>
              </div>

              <div className="glass p-6 rounded-2xl border-2 border-yellow-500/30 bg-yellow-500/10 text-center">
                <div className="text-sm text-yellow-300 mb-2 font-semibold">BREAK-EVEN</div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {calculations.terugverdientijd > 0 && calculations.terugverdientijd < Infinity
                    ? `${Math.ceil(calculations.terugverdientijd)}`
                    : '-'}
                </div>
                <div className="text-sm text-gray-400">maanden</div>
              </div>
            </div>

            {/* Grafiek: Investering vs Cumulatieve Winst */}
            <div className="glass p-6 rounded-xl mb-6">
              <h4 className="text-xl font-bold text-white mb-4 text-center">
                Wanneer verdient u het terug?
              </h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={besparingTimelineData}>
                    <defs>
                      <linearGradient id="winstGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                      dataKey="maand"
                      stroke="#9ca3af"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => value % 12 === 0 ? `Jaar ${value/12}` : ''}
                      interval={11}
                    />
                    <YAxis
                      stroke="#9ca3af"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        border: '1px solid rgba(16, 185, 129, 0.5)',
                        borderRadius: '12px',
                        padding: '12px'
                      }}
                      labelFormatter={(value) => `Maand ${value}`}
                      formatter={(value: number, name: string) => {
                        const labels: Record<string, string> = {
                          winst: 'Cumulatieve winst',
                          investering: 'Investering',
                          netto: 'Netto resultaat'
                        };
                        return [`€${value.toLocaleString()}`, labels[name] || name];
                      }}
                    />
                    <ReferenceLine y={0} stroke="#fff" strokeWidth={2} />
                    {calculations.terugverdientijd > 0 && calculations.terugverdientijd < 60 && (
                      <ReferenceLine
                        x={Math.ceil(calculations.terugverdientijd)}
                        stroke="#facc15"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        label={{
                          value: 'Break-even',
                          fill: '#facc15',
                          fontSize: 12,
                          position: 'top'
                        }}
                      />
                    )}
                    <Area
                      type="monotone"
                      dataKey="winst"
                      stroke="#10b981"
                      strokeWidth={3}
                      fill="url(#winstGradient)"
                      name="winst"
                    />
                    <Line
                      type="monotone"
                      dataKey="netto"
                      stroke="#f97316"
                      strokeWidth={4}
                      dot={false}
                      name="netto"
                    />
                    <Line
                      type="monotone"
                      dataKey="investering"
                      stroke="#ef4444"
                      strokeWidth={2}
                      strokeDasharray="10 5"
                      dot={false}
                      name="investering"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-green-500 rounded"></div>
                  <span className="text-gray-400">Cumulatieve extra winst</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-orange-500 rounded"></div>
                  <span className="text-gray-400">Netto resultaat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-red-500 rounded" style={{borderStyle: 'dashed'}}></div>
                  <span className="text-gray-400">Investering</span>
                </div>
              </div>
            </div>

            {/* Winst na 5 jaar highlight */}
            <div className="glass p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <div className="text-lg text-green-300 font-semibold mb-1">Netto winst na 5 jaar</div>
                  <div className="text-sm text-gray-400">
                    Na aftrek van alle investeringskosten
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-green-400">
                    €{(calculations.vijfJaarWinst / 1000).toFixed(0)}k
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-sm text-gray-400 mb-1">Dit is</div>
                  <div className="text-2xl font-bold text-green-400">
                    {calculations.totaleInvestering > 0
                      ? `${((calculations.vijfJaarWinst / calculations.totaleInvestering) * 100).toFixed(0)}%`
                      : '∞'}
                  </div>
                  <div className="text-sm text-gray-400">return op investering</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Financiële Projectie 5 jaar */}
        <Reveal direction="up" delay={0.75}>
          <div className="glass p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <LineChartIcon className="w-7 h-7 text-primary-500" />
              5-Jaars Financiële Projectie
              <span className="text-sm font-normal text-gray-400 ml-2">Investering vs. Winst</span>
            </h3>

            <div className="h-96 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectieData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="jaar"
                    stroke="#9ca3af"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    style={{ fontSize: '14px' }}
                    tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                    labelStyle={{ color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}
                    formatter={(value: number) => [`€${value.toLocaleString()}`, '']}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="line"
                  />
                  <Line
                    type="monotone"
                    dataKey="investering"
                    stroke="#ef4444"
                    strokeWidth={3}
                    name="KOSTEN: Cumulatieve investering"
                    strokeDasharray="5 5"
                    dot={{ fill: '#ef4444', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="winst"
                    stroke="#10b981"
                    strokeWidth={4}
                    name="BATEN: Cumulatieve extra winst"
                    dot={{ fill: '#10b981', r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="netto"
                    stroke="#f97316"
                    strokeWidth={4}
                    name="Netto resultaat"
                    dot={{ fill: '#f97316', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Winst na 3 jaar</div>
                <div className="text-2xl font-bold text-green-400">
                  €{(calculations.drieJaarWinst / 1000).toFixed(0)}k
                </div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Winst na 5 jaar</div>
                <div className="text-2xl font-bold text-green-400">
                  €{(calculations.vijfJaarWinst / 1000).toFixed(0)}k
                </div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Break-even punt</div>
                <div className="text-2xl font-bold text-yellow-400">
                  Maand {Math.ceil(calculations.terugverdientijd)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Omzet Vergelijking Bar Chart */}
        <Reveal direction="up" delay={0.8}>
          <div className="glass p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart4 className="w-7 h-7 text-primary-500" />
              Omzet Vergelijking
              <span className="text-sm font-normal text-gray-400 ml-2">Zonder vs. met OEE verbetering</span>
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={omzetVergelijkingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="periode"
                    stroke="#9ca3af"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    style={{ fontSize: '14px' }}
                    tickFormatter={(value) => `€${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                    labelStyle={{ color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}
                    formatter={(value: number) => [`€${value.toLocaleString()}`, '']}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="rect"
                  />
                  <Bar
                    dataKey="huidig"
                    fill="#ef4444"
                    name="HUIDIG: Zonder verbetering"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="metOEE"
                    fill="#10b981"
                    name="BATEN: Met OEE verbetering"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>

        {/* Gedetailleerde Tabel */}
        <Reveal direction="up" delay={0.85}>
          <div className="glass p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-primary-500" />
              Gedetailleerde Impact Analyse
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary-500/30">
                    <th className="text-left py-4 px-4 text-white font-bold">Metric</th>
                    <th className="text-right py-4 px-4 text-white font-bold">Huidige Situatie</th>
                    <th className="text-right py-4 px-4 text-white font-bold">Met OEE Verbetering</th>
                    <th className="text-right py-4 px-4 text-white font-bold">Verschil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 bg-white/5">
                    <td className="py-4 px-4 text-white font-semibold">OEE Percentage</td>
                    <td className="py-4 px-4 text-right text-gray-300 text-lg">{calculations.huidigeOEE}%</td>
                    <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">{calculations.doelOEE}%</td>
                    <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">+{calculations.oeeVerbetering.toFixed(1)} pp</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-semibold">Maand Omzet</td>
                    <td className="py-4 px-4 text-right text-gray-300 text-lg">€{(calculations.jaarOmzet / 12 / 1000).toFixed(0)}k</td>
                    <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">€{((calculations.jaarOmzet / 12 + calculations.extraMaandOmzet) / 1000).toFixed(0)}k</td>
                    <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">+€{(calculations.extraMaandOmzet / 1000).toFixed(1)}k</td>
                  </tr>
                  <tr className="border-b border-white/10 bg-white/5">
                    <td className="py-4 px-4 text-white font-semibold">Jaar Omzet</td>
                    <td className="py-4 px-4 text-right text-gray-300 text-lg">€{(calculations.jaarOmzet / 1000).toFixed(0)}k</td>
                    <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">€{((calculations.jaarOmzet + calculations.extraJaarOmzet) / 1000).toFixed(0)}k</td>
                    <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">+€{(calculations.extraJaarOmzet / 1000).toFixed(0)}k</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-white font-semibold">Jaar Winst (bij {calculations.winstmarge}% marge)</td>
                    <td className="py-4 px-4 text-right text-gray-300 text-lg">€{(calculations.jaarOmzet * calculations.winstmarge / 100 / 1000).toFixed(0)}k</td>
                    <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">€{((calculations.jaarOmzet * calculations.winstmarge / 100 + calculations.extraJaarWinst) / 1000).toFixed(0)}k</td>
                    <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">+€{(calculations.extraJaarWinst / 1000).toFixed(0)}k</td>
                  </tr>
                  <tr className="border-b-2 border-primary-500/30 bg-primary-500/10">
                    <td className="py-4 px-4 text-white font-bold">Productiviteitswinst</td>
                    <td className="py-4 px-4 text-right text-gray-300 text-lg">-</td>
                    <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">+{calculations.extraProductieCapaciteit.toFixed(1)}%</td>
                    <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">Meer capaciteit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Investment Info */}
            <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Investering Details</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <span className="text-gray-400">Totale investering:</span>
                      <span className="font-bold text-white ml-2">€{calculations.totaleInvestering.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Terugverdientijd:</span>
                      <span className="font-bold text-yellow-400 ml-2">{calculations.terugverdientijd.toFixed(1)} maanden</span>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI jaar 1:</span>
                      <span className="font-bold text-green-400 ml-2">{calculations.jaarROI.toFixed(0)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Netto winst jaar 5:</span>
                      <span className="font-bold text-green-400 ml-2">€{(calculations.vijfJaarWinst / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Call to Action */}
        <Reveal direction="up" delay={0.9}>
          <div className="glass p-12 rounded-3xl border-2 border-primary-500/30">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wilt u weten wat uw <span className="gradient-text">mogelijkheden</span> zijn?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Neem dan contact met ons op voor een gesprek over OEE verbetering
              </p>
              <p className="text-gray-400 mb-8 italic">
                <Info className="w-4 h-4 inline-block mr-2" />
                Het betreft bijna voor elk bedrijf maatwerk - deze calculator geeft een realistische indicatie van de financiële impact
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Magnetic strength={0.5}>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn px-8 py-4 text-lg bg-gradient-to-r from-primary-500 to-orange-600 hover:from-primary-600 hover:to-orange-700"
                  >
                    <FileDown className="w-5 h-5 mr-2" />
                    Download PDF Rapport
                  </button>
                </Magnetic>
                <Magnetic strength={0.5}>
                  <a href="#360scan" className="btn btn-secondary px-8 py-4 text-lg">
                    <BadgeCheck className="w-5 h-5 mr-2" />
                    Plan uw 360Scan
                  </a>
                </Magnetic>
                <Magnetic strength={0.5}>
                  <a href="tel:+31854010752" className="btn btn-secondary px-8 py-4 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    085 - 401 0752
                  </a>
                </Magnetic>
              </div>

              <div className="glass p-6 rounded-xl inline-block">
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-500" />
                    <span>info@proces360.com</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500" />
                    <span>085 - 401 0752</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Email Form Modal */}
        <EmailFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleDownloadPDF}
          title="Download uw OEE Rapport"
          description="Vul uw gegevens in om het professionele PDF rapport te ontvangen. We nemen binnen 24 uur contact met u op."
        />
      </div>
    </div>
  );
}
