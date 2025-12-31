"use client";
import { BarChart3, Target, Shield, TrendingUp } from 'lucide-react';
import Reveal from '../shared/Reveal';
import HoverTilt from '../shared/HoverTilt';
import HoverScale from '../shared/HoverScale';

const benefits = [
  {
    icon: BarChart3,
    title: 'DATA-GEDREVEN STRATEGIE',
    subtitle: 'Start met inzicht, niet met investeringen',
    features: [
      'Gratis Quickscan van uw productieproces',
      'ROI-analyse voor elke automatiseringsstap',
      'Risico\'s geïdentificeerd vóór implementatie'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'MAATWERK OPLOSSINGEN',
    subtitle: 'De beste techniek voor úw situatie',
    features: [
      'Merkonafhankelijk: robots, cobots, of hybridsystemen',
      'Van klein (€15k) tot groot (€150k+)',
      'Modulair schaalbaar naar groei'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'COMPLETE ONTZORGING',
    subtitle: 'Wij regelen alles, u focust op productie',
    features: [
      'Volledige business case vooraf',
      'Technische installatie & CE-markering',
      'Personeelstraining & change management',
      'Onderhoudscontracten & uptime garantie'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'RENDEMENT GARANTIE',
    subtitle: 'Efficiëntie die meetbaar is',
    features: [
      '30-50% kostenbesparing overhead',
      '12-18 maanden terugverdientijd',
      'Verbeterde productkwaliteit & doorlooptijd',
      'Aantoonbare ROI met continue monitoring'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Waarom Proces360 uw productie transformeert
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <HoverScale scale={1.03}>
                <HoverTilt>
                  <div className="glass p-8 rounded-2xl h-full hover:border-primary-500 border border-transparent transition-colors">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-3 mb-6`}>
                      <benefit.icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-primary-500 text-sm font-semibold mb-6 italic">
                      &quot;{benefit.subtitle}&quot;
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {benefit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-primary-500 mt-0.5">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverTilt>
              </HoverScale>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
