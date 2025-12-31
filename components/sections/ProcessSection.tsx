"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import HoverScale from '../shared/HoverScale';
import RevealMask from '../visuals/RevealMask';
import GlitchText from '../visuals/GlitchText';
import { Search, Lightbulb, Settings, BarChart3, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: 'INZICHT',
    subtitle: 'De 360Scan',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-500',
    items: [
      'Halve dag op uw werkvloer',
      'Pijnpunten & kansen gespot',
      'Verbeterpotentieel gekwantificeerd',
      'Direct duidelijkheid'
    ]
  },
  {
    number: 2,
    title: 'ADVIES',
    subtitle: 'Plan met ROI',
    icon: Lightbulb,
    gradient: 'from-yellow-500 to-orange-500',
    items: [
      'Kostprijs & verliesposten in kaart',
      'Verbeteringen + terugverdientijd',
      'Investeringsvoorstel op maat',
      'Ú beslist – wij voeren uit'
    ]
  },
  {
    number: 3,
    title: 'UITVOERING',
    subtitle: 'Volledig ontzorgd',
    icon: Settings,
    gradient: 'from-primary-500 to-red-500',
    items: [
      'Eén aanspreekpunt voor alles',
      'Leveranciers aansturen',
      'Engineering & integratie',
      'Medewerkers betrekken'
    ]
  },
  {
    number: 4,
    title: 'BORGING',
    subtitle: 'Eenmalig goed',
    icon: BarChart3,
    gradient: 'from-green-500 to-emerald-500',
    items: [
      'Standaarden documenteren',
      'Kennis in de organisatie',
      'Proces houdt zichzelf in stand',
      'Wij blijven bereikbaar'
    ]
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax background orbs
    gsap.to('.process-orb', {
      y: -120,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Animate step cards with 3D rotation
    if (stepsRef.current) {
      const cards = stepsRef.current.querySelectorAll('.step-card');
      cards.forEach((card, index) => {
        const el = card as HTMLElement;

        el.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 15;
          const rotateY = (centerX - x) / 15;

          gsap.to(el, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000,
          });
        });

        el.addEventListener('mouseleave', () => {
          gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });
        });

        // Staggered entrance
        gsap.fromTo(card,
          { opacity: 0, y: 60, rotateX: -15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="aanpak" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="process-orb absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="process-orb absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealMask direction="up" duration={0.8}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-6 border border-primary-500/20">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-300 font-medium">Onze methodiek</span>
            </div>
          </RevealMask>

          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">De Aanpak van </span>
              <GlitchText className="gradient-text" glitchOnHover>Proces360</GlitchText>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Van inzicht tot borging – wij begeleiden u door het volledige traject.
              <span className="text-primary-500 font-semibold"> Als compleet pakket of losse diensten</span> – samen bepalen we wat past.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Process */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <HoverScale key={index} scale={1.05}>
              <div className="relative step-card" style={{ transformStyle: 'preserve-3d' }}>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-orange-500 opacity-30 z-0" />
                )}

                <div className="glass p-6 rounded-2xl relative z-10 h-full group overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                  {/* Step number with icon */}
                  <div className="relative w-14 h-14 mb-4">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="relative w-full h-full rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors duration-300">
                      <step.icon className="w-7 h-7 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300">{step.number}</span>
                    <h3 className="text-xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors duration-300">{step.title}</h3>
                  </div>
                  <p className="text-sm text-accent-500 mb-4 italic">{step.subtitle}</p>

                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-text-secondary group-hover:text-gray-300 transition-colors duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="text-primary-500 mt-0.5 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </HoverScale>
          ))}
        </div>

      </div>
    </section>
  );
}
