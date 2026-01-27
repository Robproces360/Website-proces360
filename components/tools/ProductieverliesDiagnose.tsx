'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Clock,
  Gauge,
  Target,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Wrench,
  TrendingUp,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import Magnetic from '@/components/shared/Magnetic';
import { analytics } from '@/components/shared/GoogleAnalytics';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; icon?: React.ReactNode }[];
}

const questions: Question[] = [
  {
    id: 'grootste_frustratie',
    question: 'Waar zit uw grootste frustratie?',
    options: [
      { value: 'stilstand', label: 'Ongeplande stilstanden', icon: <Clock className="w-5 h-5" /> },
      { value: 'snelheid', label: 'Machines draaien te langzaam', icon: <Gauge className="w-5 h-5" /> },
      { value: 'kwaliteit', label: 'Te veel afkeur/uitval', icon: <ShieldAlert className="w-5 h-5" /> },
      { value: 'weet_niet', label: 'Weet ik niet precies', icon: <HelpCircle className="w-5 h-5" /> }
    ]
  },
  {
    id: 'stilstand_frequentie',
    question: 'Hoe vaak heeft u ongeplande stops?',
    options: [
      { value: 'zelden', label: 'Zelden (< 1x per week)' },
      { value: 'wekelijks', label: 'Wekelijks' },
      { value: 'dagelijks', label: 'Dagelijks' },
      { value: 'constant', label: 'Meerdere keren per dag' }
    ]
  },
  {
    id: 'afkeur',
    question: 'Wat is uw geschatte afkeurpercentage?',
    options: [
      { value: 'laag', label: 'Minder dan 1%' },
      { value: 'gemiddeld', label: '1 - 3%' },
      { value: 'hoog', label: '3 - 5%' },
      { value: 'zeer_hoog', label: 'Meer dan 5%' }
    ]
  },
  {
    id: 'snelheid',
    question: 'Werken uw machines op nominale snelheid?',
    options: [
      { value: 'ja', label: 'Ja, (bijna) altijd' },
      { value: 'meestal', label: 'Meestal wel' },
      { value: 'soms', label: 'Soms, we draaien vaak langzamer' },
      { value: 'nee', label: 'Nee, significant onder nominaal' }
    ]
  },
  {
    id: 'data',
    question: 'Heeft u data over uw verliezen?',
    options: [
      { value: 'uitgebreid', label: 'Ja, uitgebreid en digitaal' },
      { value: 'basis', label: 'Ja, basis (Excel/papier)' },
      { value: 'beperkt', label: 'Beperkt / inconsistent' },
      { value: 'nee', label: 'Nee, niet structureel' }
    ]
  }
];

export default function ProductieverliesDiagnose() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Track tool usage on mount
  useEffect(() => {
    analytics.toolStarted('Productieverlies Diagnose');
  }, []);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
      // Track completion with result when diagnosis is calculated
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const diagnosis = useMemo(() => {
    if (!showResults) return null;

    // Calculate scores for each OEE component
    let beschikbaarheidScore = 0;
    let prestatieScore = 0;
    let kwaliteitScore = 0;

    // Frustratie
    if (answers.grootste_frustratie === 'stilstand') beschikbaarheidScore += 3;
    if (answers.grootste_frustratie === 'snelheid') prestatieScore += 3;
    if (answers.grootste_frustratie === 'kwaliteit') kwaliteitScore += 3;

    // Stilstand frequentie
    if (answers.stilstand_frequentie === 'constant') beschikbaarheidScore += 3;
    if (answers.stilstand_frequentie === 'dagelijks') beschikbaarheidScore += 2;
    if (answers.stilstand_frequentie === 'wekelijks') beschikbaarheidScore += 1;

    // Afkeur
    if (answers.afkeur === 'zeer_hoog') kwaliteitScore += 3;
    if (answers.afkeur === 'hoog') kwaliteitScore += 2;
    if (answers.afkeur === 'gemiddeld') kwaliteitScore += 1;

    // Snelheid
    if (answers.snelheid === 'nee') prestatieScore += 3;
    if (answers.snelheid === 'soms') prestatieScore += 2;
    if (answers.snelheid === 'meestal') prestatieScore += 1;

    // Determine primary loss area
    const maxScore = Math.max(beschikbaarheidScore, prestatieScore, kwaliteitScore);

    let primary: 'beschikbaarheid' | 'prestatie' | 'kwaliteit';
    if (beschikbaarheidScore === maxScore) primary = 'beschikbaarheid';
    else if (prestatieScore === maxScore) primary = 'prestatie';
    else primary = 'kwaliteit';

    const diagnoses = {
      beschikbaarheid: {
        title: 'Beschikbaarheid',
        subtitle: 'Ongeplande stilstanden',
        color: 'red',
        icon: <Clock className="w-10 h-10" />,
        description: 'Uw grootste verbeterpotentieel zit in het reduceren van machinestilstanden.',
        impact: 'Typisch 15-25% OEE-winst mogelijk',
        actions: [
          'Start met structurele stilstandregistratie',
          'Analyseer de top 5 storingsoorzaken',
          'Implementeer preventief onderhoud',
          'Overweeg condition monitoring'
        ],
        quickWin: 'Begin met het bijhouden van elke stop > 5 minuten gedurende 2 weken'
      },
      prestatie: {
        title: 'Prestatie',
        subtitle: 'Snelheidsverlies',
        color: 'orange',
        icon: <Gauge className="w-10 h-10" />,
        description: 'Uw machines draaien onder hun potentieel - hier ligt uw grootste winst.',
        impact: 'Typisch 10-20% meer output mogelijk',
        actions: [
          'Meet de werkelijke vs. nominale cyclustijd',
          'Identificeer micro-stops en kleine vertragingen',
          'Optimaliseer omsteltijden (SMED)',
          'Train operators op optimale instellingen'
        ],
        quickWin: 'Meet één week lang de werkelijke cyclustijd vs. de specificatie'
      },
      kwaliteit: {
        title: 'Kwaliteit',
        subtitle: 'Afkeur & herwerk',
        color: 'purple',
        icon: <ShieldAlert className="w-10 h-10" />,
        description: 'Kwaliteitsproblemen kosten u significant - zowel direct als indirect.',
        impact: 'Typisch 5-15% reductie in verspilling mogelijk',
        actions: [
          'Registreer afkeurredenen gedetailleerd',
          'Implementeer first-time-right metingen',
          'Analyseer correlatie met operators/shifts',
          'Onderzoek machine-instellingen en slijtage'
        ],
        quickWin: 'Categoriseer alle afkeur van deze week naar oorzaak'
      }
    };

    const result = {
      ...diagnoses[primary],
      primary,
      scores: { beschikbaarheidScore, prestatieScore, kwaliteitScore },
      hasData: answers.data === 'uitgebreid' || answers.data === 'basis'
    };

    // Track tool completion
    if (showResults) {
      analytics.toolCompleted('Productieverlies Diagnose', result.title);
    }

    return result;
  }, [showResults, answers]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <Reveal direction="down">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
              <Target className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-500">Productieverlies Diagnose</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Waar zit <span className="text-purple-500">uw</span> verlies?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              5 vragen om uw grootste verbeterpotentieel te identificeren
            </p>
          </div>
        </Reveal>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Vraag {currentQuestion + 1} van {questions.length}</span>
                <span className="text-primary-500 font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-primary-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <Reveal direction="up" key={currentQuestion}>
              <div className="glass p-6 md:p-8 rounded-2xl mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid gap-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:border-purple-500/50 hover:bg-purple-500/10 ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {option.icon && (
                          <div className="text-purple-500">{option.icon}</div>
                        )}
                        <span className="text-white font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <div className="text-center">
                <button
                  onClick={handleBack}
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Vorige vraag
                </button>
              </div>
            )}
          </>
        ) : diagnosis && (
          <>
            {/* Results */}
            <Reveal direction="up">
              <div className={`glass p-6 md:p-8 rounded-2xl border-2 mb-8 ${
                diagnosis.color === 'red' ? 'border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent' :
                diagnosis.color === 'orange' ? 'border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent' :
                'border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent'
              }`}>
                {/* Main Diagnosis */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                    diagnosis.color === 'red' ? 'bg-red-500/20 text-red-500' :
                    diagnosis.color === 'orange' ? 'bg-orange-500/20 text-orange-500' :
                    'bg-purple-500/20 text-purple-500'
                  }`}>
                    {diagnosis.icon}
                  </div>
                  <p className="text-gray-400 mb-1">Uw grootste verbeterpotentieel:</p>
                  <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${
                    diagnosis.color === 'red' ? 'text-red-500' :
                    diagnosis.color === 'orange' ? 'text-orange-500' :
                    'text-purple-500'
                  }`}>
                    {diagnosis.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-4">{diagnosis.subtitle}</p>
                  <p className="text-gray-400">{diagnosis.description}</p>
                </div>

                {/* Impact Badge */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-green-400 font-semibold">{diagnosis.impact}</span>
                  </div>
                </div>

                {/* Score Bars */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Beschikbaarheid', score: diagnosis.scores.beschikbaarheidScore, color: 'red', max: 6 },
                    { label: 'Prestatie', score: diagnosis.scores.prestatieScore, color: 'orange', max: 6 },
                    { label: 'Kwaliteit', score: diagnosis.scores.kwaliteitScore, color: 'purple', max: 6 }
                  ].map((item) => (
                    <div key={item.label} className="glass p-4 rounded-xl">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">{item.label}</span>
                        <span className={`font-medium ${
                          item.color === 'red' ? 'text-red-400' :
                          item.color === 'orange' ? 'text-orange-400' :
                          'text-purple-400'
                        }`}>
                          {item.score}/{item.max}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.color === 'red' ? 'bg-red-500' :
                            item.color === 'orange' ? 'bg-orange-500' :
                            'bg-purple-500'
                          }`}
                          style={{ width: `${(item.score / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="glass p-6 rounded-xl mb-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary-500" />
                    Aanbevolen acties
                  </h3>
                  <ul className="space-y-3">
                    {diagnosis.actions.map((action, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Win */}
                <div className="glass p-4 rounded-xl bg-primary-500/10 border border-primary-500/30">
                  <p className="text-sm">
                    <strong className="text-primary-500">Quick win:</strong>{' '}
                    <span className="text-gray-300">{diagnosis.quickWin}</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal direction="up" delay={0.1}>
              <div className={`glass p-6 md:p-8 rounded-2xl border-2 ${
                diagnosis.color === 'red' ? 'border-red-500/30' :
                diagnosis.color === 'orange' ? 'border-orange-500/30' :
                'border-purple-500/30'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {diagnosis.impact}
                  </h3>
                  <p className="text-gray-400">
                    Laat me u uitleggen hoe u dit realiseert
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Magnetic>
                    <a
                      href="tel:+31854010752"
                      className="btn px-8 py-4 text-lg inline-flex items-center gap-2"
                      onClick={() => analytics.phoneClicked('Productieverlies Diagnose')}
                    >
                      <Phone className="w-5 h-5" />
                      Bel direct: 085 - 401 0752
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="/#360scan"
                      className="btn btn-secondary px-6 py-4 inline-flex items-center gap-2"
                      onClick={() => analytics.ctaClicked('360Scan', 'Productieverlies Diagnose')}
                    >
                      Gratis 360Scan
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Magnetic>
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={handleReset}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    Opnieuw invullen
                  </button>
                </div>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </div>
  );
}
