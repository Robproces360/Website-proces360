"use client";
import { useEffect, useRef } from 'react';
import { Search, BarChart3, Target, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import HoverTilt from '../shared/HoverTilt';
import HoverGlow from '../shared/HoverGlow';
import RevealMask from '../visuals/RevealMask';
import MagneticButton from '../visuals/MagneticButton';
import GlitchText from '../visuals/GlitchText';
import StaggerGrid from '../visuals/StaggerGrid';

gsap.registerPlugin(ScrollTrigger);

export default function Scan360Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const benefits = [
    { icon: BarChart3, text: 'Concrete ROI-berekening', gradient: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, text: 'Binnen 2 weken inzicht', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Target, text: 'Duidelijk stappenplan', gradient: 'from-primary-500 to-orange-500' },
  ];

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

      // Animate connecting line
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const deliverables = [
    'Visuele proces-mapping van uw complete productie',
    'Kosten-baten analyse tot op de cent nauwkeurig',
    'Top 5 verbeterkansen met directe impact',
    'Implementatie roadmap met tijdlijn',
    'Technologie-advies specifiek voor uw situatie',
  ];

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
              <span className="text-sm text-gray-300 font-medium">Quickscan</span>
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
              <span className="text-primary-500 font-semibold">Benieuwd wat het voor úw bedrijf kan betekenen?</span>
              <br />
              Plan uw 360Scan en krijg heldere inzichten en concrete cijfers.
            </p>
          </Reveal>
        </div>

        {/* Benefits Grid with Stagger */}
        <StaggerGrid
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          stagger={0.15}
          animation="scale"
          from="center"
        >
          {benefits.map((benefit, index) => (
            <HoverGlow key={index} glowColor="rgba(249, 115, 22, 0.4)" rounded="xl">
              <div className="glass p-8 rounded-xl text-center group relative overflow-hidden h-full">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon with glow */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="relative w-full h-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <p className="text-white font-semibold text-lg group-hover:text-primary-400 transition-colors duration-300">{benefit.text}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </HoverGlow>
          ))}
        </StaggerGrid>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: What you get */}
          <Reveal direction="left">
            <HoverTilt>
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Wat u krijgt:</h3>
                <ul className="space-y-4">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverTilt>
          </Reveal>

          {/* Right: Process Timeline */}
          <Reveal direction="right">
            <div ref={timelineRef} className="relative space-y-6">
              {/* Animated connecting line */}
              <div className="timeline-line absolute left-5 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary-500 via-orange-400 to-primary-500 origin-top" />

              {[
                { num: 1, title: 'Afspraak maken', desc: 'Plan een moment in. We komen binnen 1 week bij u langs.', icon: '📅' },
                { num: 2, title: 'Analyse op locatie (2 uur)', desc: 'Onze specialist analyseert uw productieproces ter plaatse. Knelpunten, kansen, quick wins.', icon: '🔍' },
                { num: 3, title: 'Rapport & ROI (binnen 1 week)', desc: 'U ontvangt een uitgebreid rapport met concrete besparingen en implementatie roadmap.', icon: '📊' }
              ].map((step, index) => (
                <div key={index} className="timeline-step glass p-6 rounded-xl relative group hover:border-primary-500/30 border border-transparent transition-all duration-300">
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-orange-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0 font-bold text-primary-500 group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-300 relative z-10">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal direction="up" delay={0.4}>
          <div className="text-center mt-16">
            <MagneticButton strength={0.5} innerStrength={0.2}>
              <HoverGlow glowColor="rgba(249, 115, 22, 0.6)" glowSize={120} rounded="xl">
                <a href="#contact" className="btn text-lg px-10 py-5 inline-flex items-center gap-3 group relative overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-primary-500 via-orange-400 to-primary-500 rounded-xl animate-spin-slow" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-[1px] bg-primary-600 rounded-xl" />
                  </div>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">360Scan aanvragen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </a>
              </HoverGlow>
            </MagneticButton>
            <p className="text-sm text-gray-500 mt-4">
              Investering op aanvraag · Maatwerk voorstel na scan
            </p>
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
