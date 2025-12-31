"use client";
import { Shield, Clock, TrendingUp, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Reveal from '../shared/Reveal';
import RevealMask from '../visuals/RevealMask';
import MagneticButton from '../visuals/MagneticButton';
import HoverScale from '../shared/HoverScale';

const pricingOptions = [
  {
    title: 'Uurtarief',
    description: 'Klassiek & transparant',
    icon: Clock,
    features: [
      'Vaste, vooraf afgesproken tarieven',
      'Flexibel inzetbaar per project',
      'Maandelijks of per opdracht',
      'Volledige transparantie in uren'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/10',
  },
  {
    title: 'No Cure No Pay',
    description: 'Wij dragen het risico',
    icon: Shield,
    features: [
      'Geen resultaat = geen kosten',
      'Volledige resultaatgarantie',
      'Wij investeren in uw succes',
      'Bij geschikte verbeterprojecten'
    ],
    gradient: 'from-green-500 to-emerald-500',
    bgGlow: 'bg-green-500/10',
    highlight: true,
  },
  {
    title: 'Besparingsbonus',
    description: 'Gedeeld succes',
    icon: TrendingUp,
    features: [
      'Verlaagd basistarief',
      'Bonus op behaalde besparingen',
      'Gezamenlijk belang = extra motivatie',
      'Resultaat staat centraal'
    ],
    gradient: 'from-primary-500 to-orange-500',
    bgGlow: 'bg-primary-500/10',
  },
];

export default function NoCureNoPaySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <RevealMask direction="up" duration={0.8}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-6 border border-primary-500/20">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-300 font-medium">Transparante samenwerking</span>
            </div>
          </RevealMask>

          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Flexibele </span>
              <span className="gradient-text">Samenwerkingsvormen</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kies het model dat past bij uw situatie en risicobereidheid.
              <span className="text-primary-500 font-semibold"> Altijd eerlijk, altijd transparant.</span>
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingOptions.map((option, index) => (
            <Reveal key={index} direction="up" delay={index * 0.15}>
              <HoverScale scale={1.03}>
                <div className={`relative h-full group`}>
                  {/* Highlight badge */}
                  {option.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg shadow-green-500/25">
                        MEEST GEKOZEN
                      </span>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative p-8 rounded-2xl glass border transition-all duration-500 h-full overflow-hidden ${option.highlight ? 'border-green-500/40 ring-1 ring-green-500/20' : 'border-white/10 hover:border-primary-500/30'}`}>
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Glow effect */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${option.bgGlow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-lg`}>
                        <option.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-primary-500/80 text-sm font-semibold mb-6 italic">
                      &ldquo;{option.description}&rdquo;
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {option.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
              </HoverScale>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6 text-lg">
              Samen bepalen we welk model het beste bij <span className="text-primary-500 font-semibold">uw project</span> past.
            </p>
            <MagneticButton strength={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-400 hover:to-orange-400 text-white font-semibold rounded-xl transition-all duration-300 text-base group/btn relative overflow-hidden shadow-lg shadow-primary-500/25"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10">Bespreek de mogelijkheden</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform relative z-10" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
