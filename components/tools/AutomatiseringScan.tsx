'use client';

import React, { useState, useMemo } from 'react';
import {
  Bot,
  Package,
  Repeat,
  Scale,
  Layers,
  Clock,
  Euro,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Target
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import Magnetic from '@/components/shared/Magnetic';

interface Question {
  id: string;
  question: string;
  icon: React.ReactNode;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 'taak_type',
    question: 'Welk type taak wilt u automatiseren?',
    icon: <Package className="w-6 h-6" />,
    options: [
      { value: 'handling', label: 'Pick & place / Handling', score: 3 },
      { value: 'assemblage', label: 'Assemblage', score: 2 },
      { value: 'lassen', label: 'Lassen / solderen', score: 2 },
      { value: 'verpakken', label: 'Verpakken / palletiseren', score: 3 },
      { value: 'inspectie', label: 'Kwaliteitsinspectie', score: 2 },
      { value: 'anders', label: 'Anders', score: 1 }
    ]
  },
  {
    id: 'repetitief',
    question: 'Hoe repetitief is de taak?',
    icon: <Repeat className="w-6 h-6" />,
    options: [
      { value: 'zeer', label: 'Zeer repetitief - altijd hetzelfde', score: 3 },
      { value: 'redelijk', label: 'Redelijk - enkele variaties', score: 2 },
      { value: 'wisselend', label: 'Wisselend - veel variaties', score: 1 },
      { value: 'uniek', label: 'Vrijwel altijd uniek', score: 0 }
    ]
  },
  {
    id: 'gewicht',
    question: 'Wat is het gewicht van de producten?',
    icon: <Scale className="w-6 h-6" />,
    options: [
      { value: 'licht', label: 'Licht (< 3 kg)', score: 3 },
      { value: 'medium', label: 'Medium (3 - 10 kg)', score: 3 },
      { value: 'zwaar', label: 'Zwaar (10 - 25 kg)', score: 2 },
      { value: 'zeer_zwaar', label: 'Zeer zwaar (> 25 kg)', score: 1 }
    ]
  },
  {
    id: 'batch',
    question: 'Wat zijn uw typische batchgroottes?',
    icon: <Layers className="w-6 h-6" />,
    options: [
      { value: 'massa', label: 'Massaproductie (> 1.000)', score: 3 },
      { value: 'groot', label: 'Grote batches (100 - 1.000)', score: 3 },
      { value: 'klein', label: 'Kleine batches (10 - 100)', score: 2 },
      { value: 'enkelstuks', label: 'Enkelstuks / maatwerk', score: 1 }
    ]
  },
  {
    id: 'shifts',
    question: 'Hoeveel shifts draait u?',
    icon: <Clock className="w-6 h-6" />,
    options: [
      { value: '3', label: '3 shifts (24 uur)', score: 3 },
      { value: '2', label: '2 shifts (16 uur)', score: 3 },
      { value: '1', label: '1 shift (8 uur)', score: 2 },
      { value: 'variabel', label: 'Variabel / onregelmatig', score: 1 }
    ]
  },
  {
    id: 'budget',
    question: 'Wat is uw indicatieve budget?',
    icon: <Euro className="w-6 h-6" />,
    options: [
      { value: 'hoog', label: '> €150.000', score: 3 },
      { value: 'gemiddeld', label: '€75.000 - €150.000', score: 3 },
      { value: 'beperkt', label: '€30.000 - €75.000', score: 2 },
      { value: 'laag', label: '< €30.000', score: 1 }
    ]
  }
];

export default function AutomatiseringScan() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
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

  const result = useMemo(() => {
    if (!showResults) return null;

    let totalScore = 0;
    const maxScore = questions.length * 3;

    questions.forEach(q => {
      const answer = answers[q.id];
      const option = q.options.find(o => o.value === answer);
      if (option) totalScore += option.score;
    });

    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80) {
      return {
        level: 'Uitstekend geschikt',
        color: 'green',
        icon: <Sparkles className="w-10 h-10" />,
        description: 'Uw situatie is ideaal voor robot- of cobot-automatisering. Hoge ROI te verwachten.',
        terugverdientijd: '1-2 jaar',
        advice: 'Dit is een perfecte kandidaat voor automatisering. Bel mij voor een vrijblijvend advies.',
        percentage,
        totalScore,
        maxScore
      };
    }
    if (percentage >= 60) {
      return {
        level: 'Geschikt',
        color: 'blue',
        icon: <CheckCircle2 className="w-10 h-10" />,
        description: 'Een robot of cobot is goed inzetbaar in uw situatie.',
        terugverdientijd: '2-3 jaar',
        advice: 'Automatisering is haalbaar. Laat mij kijken naar de optimale oplossing voor uw proces.',
        percentage,
        totalScore,
        maxScore
      };
    }
    if (percentage >= 40) {
      return {
        level: 'Matige fit',
        color: 'yellow',
        icon: <Target className="w-10 h-10" />,
        description: 'Automatisering is mogelijk, maar vereist zorgvuldige analyse van uw proces.',
        terugverdientijd: '3-4 jaar',
        advice: 'Er zijn uitdagingen, maar ook kansen. Laten we samen de mogelijkheden verkennen.',
        percentage,
        totalScore,
        maxScore
      };
    }
    return {
      level: 'Uitdagend',
      color: 'orange',
      icon: <AlertTriangle className="w-10 h-10" />,
      description: 'Standaard robot-automatisering is lastig. Andere oplossingen wellicht beter.',
      terugverdientijd: '> 4 jaar',
      advice: 'Laten we eerst kijken naar procesoptimalisatie voordat we automatiseren.',
      percentage,
      totalScore,
      maxScore
    };
  }, [showResults, answers]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <Reveal direction="down">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <Bot className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-500">Automatisering Scan</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Is uw proces <span className="text-cyan-500">geschikt</span>?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              6 vragen om te bepalen of robot-automatisering bij u past
            </p>
          </div>
        </Reveal>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Vraag {currentQuestion + 1} van {questions.length}</span>
                <span className="text-cyan-500 font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-primary-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <Reveal direction="up" key={currentQuestion}>
              <div className="glass p-6 md:p-8 rounded-2xl mb-6">
                <div className="flex items-center gap-3 mb-6 justify-center text-cyan-500">
                  {questions[currentQuestion].icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid gap-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-cyan-500 bg-cyan-500/20'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <span className="text-white font-medium">{option.label}</span>
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
        ) : result && (
          <>
            {/* Results */}
            <Reveal direction="up">
              <div className={`glass p-6 md:p-8 rounded-2xl border-2 mb-8 ${
                result.color === 'green' ? 'border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent' :
                result.color === 'blue' ? 'border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent' :
                result.color === 'yellow' ? 'border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent' :
                'border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent'
              }`}>
                {/* Main Result */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                    result.color === 'green' ? 'bg-green-500/20 text-green-500' :
                    result.color === 'blue' ? 'bg-blue-500/20 text-blue-500' :
                    result.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-orange-500/20 text-orange-500'
                  }`}>
                    {result.icon}
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${
                    result.color === 'green' ? 'text-green-500' :
                    result.color === 'blue' ? 'text-blue-500' :
                    result.color === 'yellow' ? 'text-yellow-500' :
                    'text-orange-500'
                  }`}>
                    {result.level}
                  </h2>
                  <p className="text-gray-400 mb-4">{result.description}</p>

                  {/* Score */}
                  <div className="max-w-xs mx-auto mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Geschiktheidsscore</span>
                      <span className="text-white font-bold">{result.totalScore}/{result.maxScore}</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          result.color === 'green' ? 'bg-green-500' :
                          result.color === 'blue' ? 'bg-blue-500' :
                          result.color === 'yellow' ? 'bg-yellow-500' :
                          'bg-orange-500'
                        }`}
                        style={{ width: `${result.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Terugverdientijd */}
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Indicatieve terugverdientijd:</span>
                    <span className="text-white font-semibold">{result.terugverdientijd}</span>
                  </div>
                </div>

                {/* Advice */}
                <div className="glass p-4 rounded-xl bg-white/5 text-center">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Ons advies:</strong> {result.advice}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Answer Summary */}
            <Reveal direction="up" delay={0.1}>
              <div className="glass p-6 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Uw profiel</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {questions.map(q => {
                    const answer = answers[q.id];
                    const option = q.options.find(o => o.value === answer);
                    return (
                      <div key={q.id} className="flex items-center justify-between py-2 px-3 bg-white/5 rounded-lg">
                        <span className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="text-cyan-500">{q.icon}</span>
                        </span>
                        <span className="text-white font-medium text-sm">{option?.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal direction="up" delay={0.2}>
              <div className="glass p-6 md:p-8 rounded-2xl border-2 border-cyan-500/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Benieuwd wat automatisering u oplevert?
                  </h3>
                  <p className="text-gray-400">
                    Ik bekijk graag uw situatie en geef vrijblijvend advies
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Magnetic>
                    <a href="tel:+31854010752" className="btn px-8 py-4 text-lg inline-flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Bel direct: 085 - 401 0752
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="/#360scan" className="btn btn-secondary px-6 py-4 inline-flex items-center gap-2">
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
