"use client";
import { useState, useMemo } from 'react';
import {
  Info,
  TrendingUp,
  CircleDollarSign,
  AlertTriangle,
  BadgeCheck,
  Sparkles,
  Phone,
  Mail,
  FileDown,
  Banknote,
  Target,
  Award,
  Package,
  Users,
  Clock
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import Reveal from '../shared/Reveal';
import HoverScale from '../shared/HoverScale';
import Magnetic from '../shared/Magnetic';
import EmailFormModal, { FormData } from '../shared/EmailFormModal';
import FixedLogo from '../shared/FixedLogo';
import { generateRobotROIPDF } from '@/lib/pdfGenerator';

// Robot categories
const ROBOT_CATEGORIES = [
  { id: 'light', name: 'Lichte robot', price: 35000, payload: '3kg', reach: '500mm', description: 'Ideaal voor pick & place, assemblage' },
  { id: 'medium', name: 'Medium robot', price: 45000, payload: '5kg', reach: '850mm', description: 'Meest gekozen - veelzijdig inzetbaar', popular: true },
  { id: 'heavy', name: 'Zware robot', price: 60000, payload: '10kg', reach: '1300mm', description: 'Voor zware handelingen, palletiseren' },
  { id: 'custom', name: 'Custom robot', price: 45000, payload: 'Vrij', reach: 'Vrij', description: 'Zelf prijs bepalen' },
];

export default function RobotROICalculator() {
  // State - Huidige Situatie
  const [taakOmschrijving, setTaakOmschrijving] = useState('');
  const [uurloon, setUurloon] = useState(25);
  const [shifts, setShifts] = useState(2);
  const [werkdagen, setWerkdagen] = useState(250);
  const [downtime, setDowntime] = useState(100);

  // State - Productie Parameters (NIEUW)
  const [aantalMedewerkers, setAantalMedewerkers] = useState(2);
  const [cyclustijdHuidig, setCyclustijdHuidig] = useState(60); // seconden
  const [cyclustijdMetRobot, setCyclustijdMetRobot] = useState(45); // seconden
  const [omzetPerProduct, setOmzetPerProduct] = useState(5); // euro per product

  // State - Robot Investering
  const [robotCategorie, setRobotCategorie] = useState('medium');
  const [customRobotPrijs, setCustomRobotPrijs] = useState(45000); // Custom prijs state
  const [gripperKosten, setGripperKosten] = useState(5000);
  const [installatieKosten, setInstallatieKosten] = useState(45000);
  const [trainingKosten, setTrainingKosten] = useState(3500);

  // State - Verwachte Impact
  const [productiviteit, setProductiviteit] = useState(25);
  const [reductieAfkeur, setReductieAfkeur] = useState(15);
  const [robotBeschikbaarheid, setRobotBeschikbaarheid] = useState(95);
  const [onderhoud, setOnderhoud] = useState(2500);

  // State - PDF Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculations
  const calculations = useMemo(() => {
    const selectedRobot = ROBOT_CATEGORIES.find(c => c.id === robotCategorie);
    const robotPrijs = robotCategorie === 'custom' ? customRobotPrijs : (selectedRobot?.price || 45000);

    // Productie berekeningen (NIEUW - zoals Excel)
    const cyclustijdHuidigUur = cyclustijdHuidig / 3600; // sec naar uur
    const cyclustijdMetRobotUur = cyclustijdMetRobot / 3600;

    const productieTijdPerPloeg = 8 - 0.5; // 8 uur minus 0.5 uur omsteltijd (zoals Excel)
    const productiePerDagHuidig = (productieTijdPerPloeg / cyclustijdHuidigUur) * shifts;
    const productiePerDagMetRobot = (productieTijdPerPloeg / cyclustijdMetRobotUur) * shifts;

    const productiePerJaarHuidig = productiePerDagHuidig * werkdagen;
    const productiePerJaarMetRobot = productiePerDagMetRobot * werkdagen;

    // Output omzet
    const outputOmzetPerDagHuidig = productiePerDagHuidig * omzetPerProduct;
    const outputOmzetPerDagMetRobot = productiePerDagMetRobot * omzetPerProduct;
    const outputOmzetPerJaarHuidig = productiePerJaarHuidig * omzetPerProduct;
    const outputOmzetPerJaarMetRobot = productiePerJaarMetRobot * omzetPerProduct;

    // Kosten berekeningen
    const huidigeJaarKosten = (uurloon * 8 * shifts * werkdagen * aantalMedewerkers) + (downtime * uurloon);

    // Totale investering
    const totaleInvestering = robotPrijs + gripperKosten + installatieKosten + trainingKosten;

    // Met robot (1 operator werkt 30% van de tijd voor monitoring)
    const operatorUrenMetRobot = 8 * 1 * werkdagen * 0.3;
    const robotJaarKosten = (uurloon * operatorUrenMetRobot) + onderhoud;

    // Winst berekeningen (Output - Kosten, zoals Excel)
    const winstHuidig = outputOmzetPerJaarHuidig - huidigeJaarKosten;
    const winstMetRobot = outputOmzetPerJaarMetRobot - robotJaarKosten;
    const opportunityCost = winstMetRobot - winstHuidig; // Gemiste winst als je NIET investeert

    // Key metrics
    const jaarlijkseBesparing = huidigeJaarKosten - robotJaarKosten;
    const totaleJaarlijkseWaarde = jaarlijkseBesparing + (outputOmzetPerJaarMetRobot - outputOmzetPerJaarHuidig);
    const maandelijkseBesparing = jaarlijkseBesparing / 12;
    const paybackMaanden = totaleInvestering / (totaleJaarlijkseWaarde / 12);
    const paybackJaren = paybackMaanden / 12;
    const roi5jaar = ((totaleJaarlijkseWaarde * 5 - totaleInvestering) / totaleInvestering) * 100;

    // Data for charts
    const cumulativeData = Array.from({ length: 61 }, (_, i) => ({
      month: i,
      investering: -totaleInvestering,
      besparingen: ((totaleJaarlijkseWaarde / 12) * i) - totaleInvestering,
    }));

    const yearlyData = Array.from({ length: 5 }, (_, i) => ({
      year: `Jaar ${i + 1}`,
      huidig: huidigeJaarKosten,
      metRobot: robotJaarKosten,
      besparing: jaarlijkseBesparing,
    }));

    return {
      robotPrijs,
      huidigeJaarKosten,
      totaleInvestering,
      robotJaarKosten,
      jaarlijkseBesparing,
      maandelijkseBesparing,
      paybackMaanden,
      paybackJaren,
      roi5jaar,
      cumulativeData,
      yearlyData,
      breakeven: paybackMaanden,
      // Nieuwe productie metrics
      productiePerDagHuidig,
      productiePerDagMetRobot,
      productiePerJaarHuidig,
      productiePerJaarMetRobot,
      outputOmzetPerJaarHuidig,
      outputOmzetPerJaarMetRobot,
      extraOmzetPerJaar: outputOmzetPerJaarMetRobot - outputOmzetPerJaarHuidig,
      winstHuidig,
      winstMetRobot,
      opportunityCost,
      totaleJaarlijkseWaarde,
      productiviteitsVerbetering: ((productiePerDagMetRobot - productiePerDagHuidig) / productiePerDagHuidig) * 100,
    };
  }, [uurloon, shifts, werkdagen, downtime, robotCategorie, customRobotPrijs, gripperKosten, installatieKosten, trainingKosten, onderhoud, aantalMedewerkers, cyclustijdHuidig, cyclustijdMetRobot, omzetPerProduct]);

  // Smart feedback
  const getPaybackColor = () => {
    if (calculations.paybackJaren < 2) return 'text-green-500';
    if (calculations.paybackJaren < 3) return 'text-blue-500';
    return 'text-orange-500';
  };

  const getPaybackMessage = () => {
    if (calculations.paybackJaren < 1) return { icon: <Sparkles className="w-5 h-5" />, text: 'Exceptionele ROI! Binnen 1 jaar terugverdiend.', color: 'bg-green-500/10 border-green-500' };
    if (calculations.paybackJaren < 2) return { icon: <BadgeCheck className="w-5 h-5" />, text: 'Uitstekende business case! Snelle terugverdientijd.', color: 'bg-green-500/10 border-green-500' };
    if (calculations.paybackJaren > 3) return { icon: <AlertTriangle className="w-5 h-5" />, text: 'Langere terugverdientijd. Overweeg optimalisatie.', color: 'bg-orange-500/10 border-orange-500' };
    return null;
  };

  const feedbackMessage = getPaybackMessage();

  // Handle PDF download with email form
  const handleDownloadPDF = async (formData: FormData) => {
    try {
      // Prepare calculation data for PDF
      const selectedRobot = ROBOT_CATEGORIES.find(c => c.id === robotCategorie);
      const pdfData = {
        robotPrijs: robotCategorie === 'custom' ? customRobotPrijs : (selectedRobot?.price || 45000),
        gripperKosten,
        installatieKosten,
        trainingKosten,
        uurloon,
        shifts,
        werkdagen,
        productiviteit,
        robotBeschikbaarheid,
        totaleInvestering: calculations.totaleInvestering,
        jaarlijkseUren: werkdagen * shifts * 8,
        huidigeJaarKosten: calculations.huidigeJaarKosten,
        robotJaarKosten: calculations.robotJaarKosten,
        jaarlijkseBesparing: calculations.jaarlijkseBesparing,
        terugverdientijd: calculations.paybackMaanden,
        vijfJaarBesparing: calculations.jaarlijkseBesparing * 5,
        roi: calculations.roi5jaar,
      };

      // Generate PDF
      const pdfBlob = await generateRobotROIPDF(formData, pdfData);

      // Send email notification to Proces360
      await fetch('/api/submit-calculation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          calculatorType: 'Robot ROI Calculator',
          taakOmschrijving,
          ...pdfData,
        }),
      });

      // Trigger download
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Proces360-Robot-ROI-Rapport-${formData.naam.replace(/\s+/g, '-')}.pdf`;
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
    <section className="py-24 bg-bg-primary">
      {/* Fixed Logo */}
      <FixedLogo />

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Robot </span>
              <span className="gradient-text">ROI Calculator</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Bereken in 2-3 minuten uw terugverdientijd en jaarlijkse besparingen met robot-automatisering
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Vul onderstaande gegevens in voor uw specifieke situatie
            </p>
          </div>
        </Reveal>

        {/* Input Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Huidige Situatie */}
          <Reveal direction="up" delay={0.1}>
            <div className="glass p-8 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Huidige Situatie</h3>
              </div>

              <div className="space-y-6">
                {/* Taak omschrijving */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Welke taak wilt u automatiseren?
                  </label>
                  <input
                    type="text"
                    value={taakOmschrijving}
                    onChange={(e) => setTaakOmschrijving(e.target.value)}
                    placeholder="Bijv: Palletiseren, lassen, verpakken, assemblage..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>

                {/* Personeelskosten */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-semibold text-gray-300">Personeelskosten per uur medewerker</label>
                    </div>
                    <span className="text-primary-500 font-bold">€{uurloon}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="60"
                    value={uurloon}
                    onChange={(e) => setUurloon(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€15</span>
                    <span>€60</span>
                  </div>
                </div>

                {/* Shifts */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Aantal shifts per dag
                  </label>
                  <select
                    value={shifts}
                    onChange={(e) => setShifts(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value={1}>1 shift (8 uur)</option>
                    <option value={2}>2 shifts (16 uur)</option>
                    <option value={3}>3 shifts (24 uur)</option>
                  </select>
                </div>

                {/* Werkdagen */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Werkdagen per jaar</label>
                    <span className="text-primary-500 font-bold">{werkdagen}</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="365"
                    value={werkdagen}
                    onChange={(e) => setWerkdagen(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>200</span>
                    <span>365</span>
                  </div>
                </div>

                {/* Downtime */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Huidige downtime (uur/jaar)</label>
                    <span className="text-primary-500 font-bold">{downtime}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={downtime}
                    onChange={(e) => setDowntime(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>500</span>
                  </div>
                </div>

                {/* NIEUW: Aantal medewerkers */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Aantal medewerkers huidige situatie
                    </label>
                    <span className="text-primary-500 font-bold">{aantalMedewerkers}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={aantalMedewerkers}
                    onChange={(e) => setAantalMedewerkers(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>5</span>
                  </div>
                </div>

                {/* NIEUW: Cyclustijd huidig */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Cyclustijd per product (huidig)
                    </label>
                    <span className="text-primary-500 font-bold">{cyclustijdHuidig}s</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={cyclustijdHuidig}
                    onChange={(e) => setCyclustijdHuidig(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10s</span>
                    <span>300s</span>
                  </div>
                </div>

                {/* NIEUW: Omzet per product */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Omzet per product
                    </label>
                    <span className="text-primary-500 font-bold">€{omzetPerProduct}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={omzetPerProduct}
                    onChange={(e) => setOmzetPerProduct(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€1</span>
                    <span>€100</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Robot Investering */}
          <Reveal direction="up" delay={0.2}>
            <div className="glass p-8 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Robot Investering</h3>
              </div>

              <div className="space-y-6">
                {/* Robot categorie */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Robot categorie
                  </label>
                  <div className="space-y-2">
                    {ROBOT_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setRobotCategorie(cat.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                          robotCategorie === cat.id
                            ? 'border-primary-500 bg-primary-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-bold text-white flex items-center gap-2">
                              {cat.name}
                              {cat.popular && (
                                <span className="text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full">
                                  Populair
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">{cat.description}</div>
                          </div>
                          <div className="text-primary-500 font-bold">
                            {cat.id === 'custom' ? (
                              <span className="text-xs bg-primary-500/20 px-2 py-1 rounded">Vrije keuze</span>
                            ) : (
                              `€${(cat.price / 1000).toFixed(0)}k`
                            )}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {cat.payload} payload • {cat.reach} reach
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Price Slider - Show only when custom is selected */}
                  {robotCategorie === 'custom' && (
                    <div className="mt-4 p-4 bg-primary-500/10 border border-primary-500/30 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-sm font-semibold text-primary-400">Custom Robot Prijs</label>
                        <span className="text-2xl font-bold text-primary-500">€{(customRobotPrijs / 1000).toFixed(0)}k</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={customRobotPrijs}
                        onChange={(e) => setCustomRobotPrijs(Number(e.target.value))}
                        className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>€0</span>
                        <span>€200k</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-3">
                        <Info className="w-3 h-3 inline-block mr-1" />
                        Bepaal zelf de robot prijs voor uw specifieke situatie
                      </p>
                    </div>
                  )}
                </div>

                {/* Gripper kosten */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Gripper/End-effector</label>
                    <span className="text-primary-500 font-bold">€{(gripperKosten / 1000).toFixed(1)}k</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={gripperKosten}
                    onChange={(e) => setGripperKosten(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€1k</span>
                    <span>€20k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Standaard: ~€5k gemakshalve
                  </p>
                </div>

                {/* Installatie */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Installatie & integratie</label>
                    <span className="text-primary-500 font-bold">€{(installatieKosten / 1000).toFixed(1)}k</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="80000"
                    step="1000"
                    value={installatieKosten}
                    onChange={(e) => setInstallatieKosten(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€5k</span>
                    <span>€80k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Afhankelijk van moeilijkheidsgraad toepassing (vaak ~robot aanschafprijs)
                  </p>
                </div>

                {/* Training */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Training</label>
                    <span className="text-primary-500 font-bold">€{(trainingKosten / 1000).toFixed(1)}k</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={trainingKosten}
                    onChange={(e) => setTrainingKosten(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€1k</span>
                    <span>€10k</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Gangbare training: €3.500
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Verwachte Impact */}
          <Reveal direction="up" delay={0.3}>
            <div className="glass p-8 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Verwachte Impact</h3>
              </div>

              <div className="space-y-6">
                {/* NIEUW: Cyclustijd met robot */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Cyclustijd per product (met robot)
                    </label>
                    <span className="text-primary-500 font-bold">{cyclustijdMetRobot}s</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={cyclustijdMetRobot}
                    onChange={(e) => setCyclustijdMetRobot(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5s</span>
                    <span>200s</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Snelheidsverbetering: {cyclustijdHuidig > cyclustijdMetRobot ? Math.round(((cyclustijdHuidig - cyclustijdMetRobot) / cyclustijdHuidig) * 100) : 0}% sneller
                  </p>
                </div>

                {/* Productiviteit */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Productiviteitsverbetering</label>
                    <span className="text-primary-500 font-bold">{productiviteit}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={productiviteit}
                    onChange={(e) => setProductiviteit(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Reductie afkeur */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Reductie uitval/afkeur</label>
                    <span className="text-primary-500 font-bold">{reductieAfkeur}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={reductieAfkeur}
                    onChange={(e) => setReductieAfkeur(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>40%</span>
                  </div>
                </div>

                {/* Robot beschikbaarheid */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Robot beschikbaarheid</label>
                    <span className="text-primary-500 font-bold">{robotBeschikbaarheid}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={robotBeschikbaarheid}
                    onChange={(e) => setRobotBeschikbaarheid(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Onderhoud */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300">Jaarlijks onderhoud</label>
                    <span className="text-primary-500 font-bold">€{(onderhoud / 1000).toFixed(1)}k</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="8000"
                    step="500"
                    value={onderhoud}
                    onChange={(e) => setOnderhoud(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>€1k</span>
                    <span>€8k</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <strong className="text-white">Tip:</strong> Realistische percentages zorgen voor betrouwbare berekeningen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Smart Feedback Message */}
        {feedbackMessage && (
          <Reveal direction="up" delay={0.4}>
            <div className={`p-6 rounded-2xl border-2 mb-12 ${feedbackMessage.color}`}>
              <div className="flex items-center gap-4">
                <div className="text-primary-500">
                  {feedbackMessage.icon}
                </div>
                <div className="text-white font-semibold">
                  {feedbackMessage.text}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Investering Overview Card - PROMINENT */}
        <Reveal direction="up" delay={0.45}>
          <div className="glass p-8 rounded-2xl mb-12 border-2 border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CircleDollarSign className="w-7 h-7 text-orange-500" />
              Totale Investering
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Robot</div>
                <div className="text-xl font-bold text-white">€{(calculations.robotPrijs / 1000).toFixed(0)}k</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Gripper</div>
                <div className="text-xl font-bold text-white">€{(gripperKosten / 1000).toFixed(1)}k</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Installatie</div>
                <div className="text-xl font-bold text-white">€{(installatieKosten / 1000).toFixed(1)}k</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Training</div>
                <div className="text-xl font-bold text-white">€{(trainingKosten / 1000).toFixed(1)}k</div>
              </div>
              <div className="text-center p-4 bg-orange-500/20 rounded-xl border-2 border-orange-500">
                <div className="text-sm text-orange-300 mb-2 font-semibold">TOTAAL</div>
                <div className="text-3xl font-bold text-orange-500">€{(calculations.totaleInvestering / 1000).toFixed(0)}k</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hero Metrics - 4 Large Cards (UPDATED) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Reveal direction="up" delay={0.5}>
            <HoverScale scale={1.03}>
              <div className="glass p-8 rounded-2xl border-2 border-primary-500/20 hover:border-primary-500/40 transition-all">
                <div className="text-sm text-gray-400 mb-2">Payback Periode</div>
                <div className={`text-4xl font-bold mb-2 ${getPaybackColor()}`}>
                  {calculations.paybackJaren.toFixed(1)} jaar
                </div>
                <div className="text-gray-400 text-sm">
                  {Math.round(calculations.paybackMaanden)} maanden
                </div>
              </div>
            </HoverScale>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <HoverScale scale={1.03}>
              <div className="glass p-8 rounded-2xl border-2 border-green-500/20 hover:border-green-500/40 transition-all">
                <div className="text-sm text-gray-400 mb-2">Totale Jaarlijkse Waarde</div>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  €{Math.round(calculations.totaleJaarlijkseWaarde).toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">
                  Besparing + extra omzet
                </div>
              </div>
            </HoverScale>
          </Reveal>

          <Reveal direction="up" delay={0.7}>
            <HoverScale scale={1.03}>
              <div className="glass p-8 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="text-sm text-gray-400 mb-2">Opportunity Cost</div>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  €{Math.round(calculations.opportunityCost).toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">
                  Gemiste winst per jaar
                </div>
              </div>
            </HoverScale>
          </Reveal>
        </div>

        {/* NIEUW: Productie Output Dashboard */}
        <Reveal direction="up" delay={0.85}>
          <div className="glass p-8 rounded-2xl mb-12 border-2 border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Package className="w-7 h-7 text-blue-500" />
              Productie Output Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Producten/dag HUIDIG</div>
                <div className="text-2xl font-bold text-gray-300">{Math.round(calculations.productiePerDagHuidig)}</div>
              </div>
              <div className="text-center p-4 bg-blue-500/20 rounded-xl border-2 border-blue-500">
                <div className="text-sm text-blue-300 mb-2">Producten/dag MET ROBOT</div>
                <div className="text-2xl font-bold text-blue-400">{Math.round(calculations.productiePerDagMetRobot)}</div>
              </div>
              <div className="text-center p-4 bg-green-500/20 rounded-xl border-2 border-green-500">
                <div className="text-sm text-green-300 mb-2">Productiviteitswinst</div>
                <div className="text-2xl font-bold text-green-400">+{Math.round(calculations.productiviteitsVerbetering)}%</div>
              </div>
              <div className="text-center p-4 bg-primary-500/20 rounded-xl border-2 border-primary-500">
                <div className="text-sm text-primary-300 mb-2">Extra omzet/jaar</div>
                <div className="text-2xl font-bold text-primary-500">€{Math.round(calculations.extraOmzetPerJaar).toLocaleString()}</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Output berekening:</strong> Van {Math.round(calculations.productiePerJaarHuidig).toLocaleString()} naar {Math.round(calculations.productiePerJaarMetRobot).toLocaleString()} producten per jaar = {Math.round(calculations.productiePerJaarMetRobot - calculations.productiePerJaarHuidig).toLocaleString()} extra producten
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CALL-TO-ACTION: Grote Impact Visualisatie */}
        <Reveal direction="up" delay={0.8}>
          <div className="glass p-8 rounded-2xl mb-12 border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Uw Investering vs. Uw Winst</h3>
              <p className="text-gray-400">Eenmalige investering met jarenlange returns</p>
            </div>

            {/* Grote visuele vergelijking */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Investering */}
              <div className="text-center">
                <div className="inline-block p-6 rounded-2xl bg-red-500/20 border-2 border-red-500 mb-4">
                  <div className="text-sm text-red-300 mb-2">EENMALIGE INVESTERING</div>
                  <div className="text-5xl font-bold text-red-400">
                    -€{(calculations.totaleInvestering / 1000).toFixed(0)}k
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Eenmalig</p>
              </div>

              {/* Arrow / VS */}
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-500 animate-pulse">→</div>
                <div className="mt-2 text-xl font-bold text-white">wordt</div>
              </div>

              {/* Jaarlijkse besparing */}
              <div className="text-center">
                <div className="inline-block p-6 rounded-2xl bg-green-500/20 border-2 border-green-500 mb-4">
                  <div className="text-sm text-green-300 mb-2">JAARLIJKSE WAARDE</div>
                  <div className="text-5xl font-bold text-green-400">
                    +€{Math.round(calculations.totaleJaarlijkseWaarde).toLocaleString()}
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Per jaar</p>
              </div>
            </div>

            {/* ROI Highlight */}
            <div className="mt-8 text-center">
              <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500/20 to-green-500/20 border border-primary-500/50">
                <span className="text-gray-300 text-lg">Terugverdiend in </span>
                <span className="text-4xl font-bold gradient-text mx-2">{calculations.paybackJaren.toFixed(1)}</span>
                <span className="text-gray-300 text-lg"> jaar</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Charts Section */}
        <div className="space-y-12">
          {/* Chart: Cumulatieve Besparingen */}
          <Reveal direction="up" delay={0.85}>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Cumulatieve Besparingen Over Tijd</h3>
                <div className="text-sm text-gray-400">
                  Maand voor maand naar winst
                </div>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={calculations.cumulativeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#9ca3af" label={{ value: 'Maanden', position: 'insideBottom', offset: -5 }} />
                  <YAxis stroke="#9ca3af" tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`} />
                  <RechartsTooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(249, 115, 22, 0.3)', borderRadius: '8px' }}
                    formatter={(value: number) => [`€${Math.round(value).toLocaleString()}`, '']}
                    labelFormatter={(label) => `Maand ${label}`}
                  />
                  <Legend />
                  <ReferenceLine y={0} stroke="#10b981" strokeWidth={2} label={{ value: 'BREAKEVEN PUNT', position: 'insideTopRight', fill: '#10b981', fontWeight: 'bold' }} />
                  <Line type="monotone" dataKey="besparingen" stroke="#10b981" strokeWidth={4} name="Cumulatief resultaat" fill="url(#colorGreen)" />
                  <defs>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          {/* Detail Table - ENHANCED met Output & Winst (ZOALS EXCEL) */}
          <Reveal direction="up" delay={1.0}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-primary-500" />
                Gedetailleerde Analyse: Oude vs Nieuwe Situatie
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary-500/30">
                      <th className="text-left py-4 px-4 text-white font-bold">Metric</th>
                      <th className="text-right py-4 px-4 text-white font-bold">Oude Situatie</th>
                      <th className="text-right py-4 px-4 text-white font-bold">Nieuwe Situatie</th>
                      <th className="text-right py-4 px-4 text-white font-bold">Verschil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Productie sectie */}
                    <tr className="border-b border-white/10">
                      <td colSpan={4} className="py-3 px-4 bg-blue-500/20">
                        <span className="text-blue-400 font-bold flex items-center gap-2">
                          <Package className="w-5 h-5" />
                          PRODUCTIE
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-white/5">
                      <td className="py-4 px-4 text-white font-semibold">Aantal medewerkers per lijn</td>
                      <td className="py-4 px-4 text-right text-gray-300">{aantalMedewerkers}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold">1</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold">-{aantalMedewerkers - 1}</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-semibold">Cyclustijd per product (sec)</td>
                      <td className="py-4 px-4 text-right text-gray-300">{cyclustijdHuidig}s</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold">{cyclustijdMetRobot}s</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold">-{cyclustijdHuidig - cyclustijdMetRobot}s ({Math.round(((cyclustijdHuidig - cyclustijdMetRobot) / cyclustijdHuidig) * 100)}%)</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-white/5">
                      <td className="py-4 px-4 text-white font-semibold">Productie per dag</td>
                      <td className="py-4 px-4 text-right text-gray-300">{Math.round(calculations.productiePerDagHuidig)}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold">{Math.round(calculations.productiePerDagMetRobot)}</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold">+{Math.round(calculations.productiePerDagMetRobot - calculations.productiePerDagHuidig)}</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-semibold">Productie per jaar</td>
                      <td className="py-4 px-4 text-right text-gray-300">{Math.round(calculations.productiePerJaarHuidig).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold">{Math.round(calculations.productiePerJaarMetRobot).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold">+{Math.round(calculations.productiePerJaarMetRobot - calculations.productiePerJaarHuidig).toLocaleString()}</td>
                    </tr>

                    {/* Kosten sectie */}
                    <tr className="border-b border-white/10">
                      <td colSpan={4} className="py-3 px-4 bg-red-500/20">
                        <span className="text-red-400 font-bold flex items-center gap-2">
                          <Banknote className="w-5 h-5" />
                          KOSTEN
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-white/5">
                      <td className="py-4 px-4 text-white font-semibold">Jaarlijkse arbeidskosten</td>
                      <td className="py-4 px-4 text-right text-red-400 font-bold text-lg">€{Math.round(calculations.huidigeJaarKosten).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">€{Math.round(calculations.robotJaarKosten).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">-€{Math.round(calculations.jaarlijkseBesparing).toLocaleString()}</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-semibold">Initiële investering</td>
                      <td className="py-4 px-4 text-right text-gray-400">€0</td>
                      <td className="py-4 px-4 text-right text-orange-400 font-bold text-lg">€{Math.round(calculations.totaleInvestering).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-gray-400">Eenmalig</td>
                    </tr>

                    {/* Output sectie */}
                    <tr className="border-b border-white/10">
                      <td colSpan={4} className="py-3 px-4 bg-green-500/20">
                        <span className="text-green-400 font-bold flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          OUTPUT & WINST
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 bg-white/5">
                      <td className="py-4 px-4 text-white font-semibold">Output omzet per jaar</td>
                      <td className="py-4 px-4 text-right text-gray-300">€{Math.round(calculations.outputOmzetPerJaarHuidig).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">€{Math.round(calculations.outputOmzetPerJaarMetRobot).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">+€{Math.round(calculations.extraOmzetPerJaar).toLocaleString()}</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-semibold">Winst (Output - Kosten)</td>
                      <td className="py-4 px-4 text-right text-gray-300">€{Math.round(calculations.winstHuidig).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold text-lg">€{Math.round(calculations.winstMetRobot).toLocaleString()}</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold text-lg">+€{Math.round(calculations.opportunityCost).toLocaleString()}</td>
                    </tr>
                    <tr className="border-b-2 border-purple-500/30 bg-purple-500/20">
                      <td className="py-4 px-4 text-white font-bold">
                        <span className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-purple-400" />
                          Opportunity Cost (gemiste winst/jaar)
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-gray-400">-</td>
                      <td className="py-4 px-4 text-right text-gray-400">-</td>
                      <td className="py-4 px-4 text-right text-purple-400 font-bold text-xl">€{Math.round(calculations.opportunityCost).toLocaleString()}</td>
                    </tr>
                    <tr className="border-b-2 border-primary-500/30 bg-primary-500/10">
                      <td className="py-4 px-4 text-white font-bold">Terugverdientijd (jaar)</td>
                      <td colSpan={2} className="py-4 px-4 text-center text-gray-400 italic">Investering / Opportunity Cost</td>
                      <td className="py-4 px-4 text-right text-primary-500 font-bold text-xl">{calculations.paybackJaren.toFixed(2)} jaar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA Section - ENHANCED */}
        <Reveal direction="up" delay={1.1}>
          <div className="mt-16">
            <div className="glass p-12 rounded-3xl border-2 border-primary-500/30">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Wilt u weten wat uw <span className="gradient-text">mogelijkheden</span> zijn?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Neem dan contact met ons op voor een gesprek
                </p>
                <p className="text-gray-400 mb-8 italic">
                  <Info className="w-4 h-4 inline-block mr-2" />
                  Het betreft bijna voor elk bedrijf maatwerk - deze calculator geeft een indicatie van uw situatie
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
          </div>
        </Reveal>

        {/* Email Form Modal */}
        <EmailFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleDownloadPDF}
          title="Download uw Robot ROI Rapport"
          description="Vul uw gegevens in om het professionele PDF rapport te ontvangen. We nemen binnen 24 uur contact met u op."
        />
      </div>
    </section>
  );
}
