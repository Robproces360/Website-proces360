"use client";
import { useEffect, useRef, useState } from 'react';
import { Search, BarChart3, Target, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Zap, Phone, Building2, Users, Factory, Layers, FileText, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import HoverTilt from '../shared/HoverTilt';
import HoverGlow from '../shared/HoverGlow';
import RevealMask from '../visuals/RevealMask';
import MagneticButton from '../visuals/MagneticButton';
import GlitchText from '../visuals/GlitchText';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    name: '360Scan Inzicht',
    price: '€ 1.450',
    tagline: 'Helder beeld van uw verbeterpotentieel — in één dag op locatie',
    target: 'MKB-maakbedrijven met 10-30 medewerkers',
    duration: '5 werkdagen',
    features: [
      '360°-Scorerapport met sectorbenchmark',
      'Visuele rapportage met foto\'s van de werkvloer',
      'OEE-inschatting op basis van observatie',
      'Top 5 verbeterkansen met geschatte besparing in €',
      '30 minuten telefonische toelichting',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: '360Scan Verdieping',
    price: '€ 2.900',
    tagline: 'Uitgebreide diagnose met meetdata, procesanalyse en implementatieroadmap',
    target: 'MKB-maakbedrijven met 20-75 medewerkers',
    duration: '10 werkdagen',
    features: [
      'Alles van Inzicht, plus:',
      'OEE-analyse op basis van echte weekdata (3-5 machines)',
      'Value Stream Map (current + future state)',
      'Benchmarking met sectorgemiddelden',
      'Besparingspotentieel per maatregel in €',
      'Implementatieroadmap 6 maanden',
      'Presentatie + workshop met MT en teamleiders',
    ],
    color: 'from-primary-500 to-orange-500',
    popular: true,
  },
  {
    name: '360Scan Transformatie',
    price: '€ 4.800',
    tagline: 'Volledig transformatieplan met business cases, technologie-advies en subsidiekansen',
    target: 'MKB-maakbedrijven met 50-150 medewerkers',
    duration: '15 werkdagen',
    features: [
      'Alles van Verdieping, plus:',
      'OEE-analyse alle kritieke machines (2 weken meetdata)',
      'VSM 2-3 processen (current + future state)',
      'Business cases top 3 projecten met volledige ROI-berekening',
      'Technologie-scan met leveranciersopties en prijsindicaties',
      'Subsidiescan (WBSO, MIT, EIA, MIA)',
      '12-maanden transformatie-roadmap',
      'Halve dag workshop + Q&A met volledig team',
      'Adviesgesprek bij start implementatie inbegrepen',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
];

const upgrades = [
  { from: 'Inzicht', to: 'Verdieping', price: '€ 1.450' },
  { from: 'Inzicht', to: 'Transformatie', price: '€ 3.350' },
  { from: 'Verdieping', to: 'Transformatie', price: '€ 1.900' },
];

export default function Scan360Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax background
    gsap.to('.scan-orb', {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Timeline animation
    if (timelineRef.current) {
      const steps = timelineRef.current.querySelectorAll('.timeline-step');
      steps.forEach((step, index) => {
        gsap.fromTo(step,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="360scan" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="scan-orb absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="scan-orb absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealMask direction="up" duration={0.8}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-6 border border-primary-500/20">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <Search className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-300 font-medium">360Scan Pakketten</span>
            </div>
          </RevealMask>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <GlitchText className="gradient-text" glitchOnHover>360Scan</GlitchText>
              <span className="text-white"> – Weten waar u staat</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              <span className="text-primary-500 font-semibold">In 1 tot 3 dagen weten waar uw productie geld laat liggen.</span>
              <br />
              Kies het pakket dat past bij uw bedrijfsgrootte en ambitie.
            </p>
          </Reveal>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Reveal key={index} direction="up" delay={index * 0.15}>
              <HoverTilt>
                <div className={`glass p-8 rounded-2xl h-full relative group ${pkg.popular ? 'border-2 border-primary-500/50' : 'border border-white/10'} transition-all duration-300 hover:border-primary-500/30`}>
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-bold rounded-full">
                      Meest gekozen
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-bold text-primary-500">{pkg.price}</span>
                      <span className="text-gray-500 text-sm">excl. BTW</span>
                    </div>
                    <p className="text-gray-400 text-sm italic">{pkg.tagline}</p>
                  </div>

                  {/* Target & Duration */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-300">{pkg.target}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-300">Doorlooptijd: {pkg.duration}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-6" />

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white mb-4">Wat u krijgt:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <MagneticButton strength={0.3}>
                    <a
                      href="#contact"
                      className={`w-full btn ${pkg.popular ? 'btn' : 'btn-secondary'} py-4 flex items-center justify-center gap-2 group/btn`}
                    >
                      <span>Plan een kennismaking</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </MagneticButton>
                </div>
              </HoverTilt>
            </Reveal>
          ))}
        </div>

        {/* Upgrade Section */}
        <Reveal direction="up" delay={0.3}>
          <div className="glass p-8 rounded-2xl mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                <Layers className="w-6 h-6 inline-block mr-2 text-primary-500" />
                Flexibel opschalen
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Start laagdrempelig met de 360Scan Inzicht. Wilt u na het rapport meer diepgang?
                Dan schalen we eenvoudig op. Uw investering telt volledig mee — u betaalt uitsluitend het verschil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upgrades.map((upgrade, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-primary-500/30 transition-colors">
                  <div className="text-gray-400 text-sm mb-2">{upgrade.from} → {upgrade.to}</div>
                  <div className="text-2xl font-bold text-primary-500">+ {upgrade.price}</div>
                  <div className="text-gray-500 text-xs mt-1">bijbetaling</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Process / Werkwijze */}
        <Reveal direction="up" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-10">Werkwijze</h3>
            <div ref={timelineRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: 1,
                  title: 'Kennismaking',
                  desc: 'Telefonisch gesprek van 30 minuten. We bespreken uw situatie, doelen en uitdagingen. Geen verplichtingen.',
                  icon: Phone
                },
                {
                  num: 2,
                  title: '360Scan op locatie',
                  desc: 'In 1 tot 3 dagen (afhankelijk van het pakket) analyseren we uw productieproces op de werkvloer. Observaties, interviews, data.',
                  icon: Factory
                },
                {
                  num: 3,
                  title: 'Rapport met 360°-Score',
                  desc: 'Binnen 5 tot 15 werkdagen ontvangt u een compleet rapport: uw 360°-Score, besparingspotentieel in euro\'s en een concrete implementatieroadmap.',
                  icon: FileText
                }
              ].map((step, index) => (
                <div key={index} className="timeline-step glass p-6 rounded-xl relative group hover:border-primary-500/30 border border-transparent transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/20 to-orange-500/20 border border-primary-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <div className="text-xs text-primary-500 font-bold mb-2">STAP {step.num}</div>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.5}>
          <div className="text-center">
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Klaar om te ontdekken waar uw productie geld laat liggen?
              </h3>
              <p className="text-gray-400 mb-6">
                Plan een kennismaking en we bespreken welk pakket het beste bij uw situatie past.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton strength={0.5} innerStrength={0.2}>
                  <HoverGlow glowColor="rgba(249, 115, 22, 0.6)" glowSize={120} rounded="xl">
                    <a href="#contact" className="btn text-lg px-10 py-5 inline-flex items-center gap-3 group relative overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Plan een kennismaking</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    </a>
                  </HoverGlow>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="tel:+31854010752" className="btn btn-secondary text-lg px-8 py-5 inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>085 - 401 0752</span>
                  </a>
                </MagneticButton>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Of bel direct: <span className="text-primary-500">085 - 401 0752</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
