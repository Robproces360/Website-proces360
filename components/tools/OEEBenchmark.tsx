'use client';

import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  TrendingUp,
  Target,
  Phone,
  ArrowRight,
  BarChart3,
  Gauge
} from 'lucide-react';
// Phone is used in CTA
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import Magnetic from '@/components/shared/Magnetic';

interface Question {
  id: string;
  question: string;
  tip: string;
}

const questions: Question[] = [
  {
    id: 'meten',
    question: 'Meet u dagelijks uw machinestilstanden?',
    tip: 'Basis voor elke verbetering'
  },
  {
    id: 'oee_bekend',
    question: 'Weet u uw huidige OEE percentage?',
    tip: 'Overall Equipment Effectiveness'
  },
  {
    id: 'realtime',
    question: 'Heeft u real-time productie-inzicht?',
    tip: 'Live dashboards of displays'
  },
  {
    id: 'analyse',
    question: 'Analyseert u maandelijks uw verliesredenen?',
    tip: 'Pareto van stilstanden/afkeur'
  },
  {
    id: 'doelen',
    question: 'Heeft u concrete OEE-doelstellingen?',
    tip: 'SMART geformuleerde targets'
  }
];

type Answer = 'ja' | 'nee' | 'deels' | null;

export default function OEEBenchmark() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);

  const allAnswered = questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

  const score = useMemo(() => {
    let points = 0;
    Object.values(answers).forEach(answer => {
      if (answer === 'ja') points += 2;
      if (answer === 'deels') points += 1;
    });
    return points;
  }, [answers]);

  const maxScore = questions.length * 2;
  const percentage = (score / maxScore) * 100;

  const getCategory = () => {
    if (percentage >= 80) return {
      level: 'World-class',
      color: 'green',
      icon: <Award className="w-8 h-8" />,
      description: 'U behoort tot de top 10% van MKB-maakbedrijven',
      benchmark: 'Top 10%',
      advice: 'Focus op continue verbetering en innovatie'
    };
    if (percentage >= 60) return {
      level: 'Goed',
      color: 'blue',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'U scoort boven gemiddeld, maar er is ruimte voor groei',
      benchmark: 'Top 30%',
      advice: 'Investeer in real-time monitoring voor de volgende stap'
    };
    if (percentage >= 40) return {
      level: 'Gemiddeld',
      color: 'yellow',
      icon: <Gauge className="w-8 h-8" />,
      description: 'U zit in de middenmoot van MKB-maakbedrijven',
      benchmark: 'Midden 40%',
      advice: 'Start met structurele stilstandregistratie'
    };
    return {
      level: 'Ondermaats',
      color: 'red',
      icon: <Target className="w-8 h-8" />,
      description: 'Veel verborgen potentieel - typisch 15-30% OEE-winst mogelijk',
      benchmark: 'Onderste 30%',
      advice: 'Begin met basis OEE-meting op één kritieke machine'
    };
  };

  const category = getCategory();

  const handleAnswer = (questionId: string, answer: Answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleShowResults = () => {
    if (allAnswered) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <Reveal direction="down">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-500">OEE Benchmark Check</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hoe <span className="text-blue-500">volwassen</span> is uw OEE?
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Beantwoord 5 vragen en ontdek waar u staat ten opzichte van andere MKB-maakbedrijven
            </p>
          </div>
        </Reveal>

        {!showResults ? (
          <>
            {/* Questions */}
            <div className="space-y-4 mb-8">
              {questions.map((q, index) => (
                <Reveal key={q.id} direction="up" delay={index * 0.1}>
                  <div className="glass p-5 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">{q.question}</p>
                        <p className="text-xs text-gray-500">{q.tip}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAnswer(q.id, 'ja')}
                          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                            answers[q.id] === 'ja'
                              ? 'bg-green-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-green-500/20 hover:text-green-400'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Ja
                        </button>
                        <button
                          onClick={() => handleAnswer(q.id, 'deels')}
                          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                            answers[q.id] === 'deels'
                              ? 'bg-yellow-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-yellow-500/20 hover:text-yellow-400'
                          }`}
                        >
                          <HelpCircle className="w-4 h-4" />
                          Deels
                        </button>
                        <button
                          onClick={() => handleAnswer(q.id, 'nee')}
                          className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                            answers[q.id] === 'nee'
                              ? 'bg-red-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-400'
                          }`}
                        >
                          <XCircle className="w-4 h-4" />
                          Nee
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Submit Button */}
            <Reveal direction="up" delay={0.5}>
              <div className="text-center">
                <Magnetic>
                  <button
                    onClick={handleShowResults}
                    disabled={!allAnswered}
                    className={`btn px-8 py-4 text-lg ${!allAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Bekijk mijn score
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Magnetic>
                {!allAnswered && (
                  <p className="text-gray-500 text-sm mt-3">Beantwoord alle vragen om uw score te zien</p>
                )}
              </div>
            </Reveal>
          </>
        ) : (
          <>
            {/* Results */}
            <Reveal direction="up">
              <div className={`glass p-6 md:p-8 rounded-2xl border-2 mb-8 ${
                category.color === 'green' ? 'border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent' :
                category.color === 'blue' ? 'border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent' :
                category.color === 'yellow' ? 'border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent' :
                'border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent'
              }`}>
                {/* Score Display */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                    category.color === 'green' ? 'bg-green-500/20 text-green-500' :
                    category.color === 'blue' ? 'bg-blue-500/20 text-blue-500' :
                    category.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {category.icon}
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${
                    category.color === 'green' ? 'text-green-500' :
                    category.color === 'blue' ? 'text-blue-500' :
                    category.color === 'yellow' ? 'text-yellow-500' :
                    'text-red-500'
                  }`}>
                    {category.level}
                  </h2>
                  <p className="text-gray-400 mb-4">{category.description}</p>

                  {/* Score Bar */}
                  <div className="max-w-xs mx-auto mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Score</span>
                      <span className="text-white font-bold">{score}/{maxScore} punten</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          category.color === 'green' ? 'bg-green-500' :
                          category.color === 'blue' ? 'bg-blue-500' :
                          category.color === 'yellow' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <span className="text-gray-400">Benchmark:</span>
                    <span className="text-white font-semibold">{category.benchmark}</span>
                  </div>
                </div>

                {/* Advice */}
                <div className="glass p-4 rounded-xl bg-white/5 text-center">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Ons advies:</strong> {category.advice}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Answer Summary */}
            <Reveal direction="up" delay={0.1}>
              <div className="glass p-6 rounded-2xl mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Uw antwoorden</h3>
                <div className="space-y-2">
                  {questions.map(q => (
                    <div key={q.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400 text-sm">{q.question}</span>
                      <span className={`font-medium ${
                        answers[q.id] === 'ja' ? 'text-green-400' :
                        answers[q.id] === 'deels' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {answers[q.id] === 'ja' ? 'Ja' : answers[q.id] === 'deels' ? 'Deels' : 'Nee'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal direction="up" delay={0.2}>
              <div className="glass p-6 md:p-8 rounded-2xl border-2 border-blue-500/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Wilt u van &apos;{category.level}&apos; naar &apos;World-class&apos;?
                  </h3>
                  <p className="text-gray-400">
                    Ik help u graag met een concreet verbeterplan
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
