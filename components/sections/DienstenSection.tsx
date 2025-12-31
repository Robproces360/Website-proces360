"use client";
import { useEffect, useRef } from 'react';
import { Cog, Bot, Euro, Users, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import HoverTilt from '../shared/HoverTilt';
import HoverScale from '../shared/HoverScale';
import StaggerGrid from '../visuals/StaggerGrid';
import RevealMask from '../visuals/RevealMask';
import MagneticButton from '../visuals/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const diensten = [
  {
    icon: Cog,
    title: 'Procesoptimalisatie',
    subtitle: 'Meer output, minder gedoe',
    description: 'Uw productie stroomt beter, sneller en met minder fouten.',
    features: [
      'Procesanalyse op de werkvloer',
      'Overbodige stappen elimineren',
      'Snellere doorlooptijd',
      'Hogere output zonder extra personeel'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Bot,
    title: 'Slimme Automatisering',
    subtitle: 'Eén partij die het regelt',
    description: 'Geen gedoe met meerdere leveranciers. Wij nemen het project aan en zorgen dat het draait.',
    features: [
      'Robotica, cobots & vision systemen',
      'Onafhankelijk advies & strategie',
      'Projectmanagement van A tot Z',
      'Eén aanspreekpunt, volledig ontzorgd'
    ],
    gradient: 'from-primary-500 to-orange-500'
  },
  {
    icon: Euro,
    title: 'Financiële Analyse',
    subtitle: 'Weet waar uw geld zit én waar het kan groeien',
    description: 'Inzicht in kostprijs, verlies en winstpotentie. Plus concrete verbetervoorstellen met ROI.',
    features: [
      'Kostprijs & verliesposten in kaart',
      'Verbeterpotentieel geïdentificeerd',
      'ROI per verbetering berekend',
      'Investeringsvoorstellen op maat'
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'People & Change',
    subtitle: 'Uw team mee in de verandering',
    description: 'Technologie werkt pas als uw mensen er achter staan.',
    features: [
      'Draagvlak creëren op de werkvloer',
      'Medewerkers betrekken bij implementatie',
      'Heldere communicatie & verwachtingen',
      'Soepele overgang naar nieuwe werkwijze'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Wrench,
    title: 'Borging & Standaardisatie',
    subtitle: 'Eenmalig goed = blijvend resultaat',
    description: 'Wij richten uw proces zo in dat het zichzelf in stand houdt.',
    features: [
      'Werkstandaarden vastleggen',
      'Processen documenteren',
      'Kennis borgen in de organisatie',
      'Altijd bereikbaar bij vragen'
    ],
    gradient: 'from-amber-500 to-yellow-500'
  },
];

export default function DienstenSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax background effect
    gsap.to('.diensten-bg-orb', {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="diensten" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="diensten-bg-orb absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="diensten-bg-orb absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealMask direction="up" duration={0.8}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-500">Volledig ontzorgd</span>
            </div>
          </RevealMask>

          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Onze </span>
              <span className="gradient-text">Diensten</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uw productie-uitdagingen, onze expertise. Complete ontzorging van A tot Z.
            </p>
          </Reveal>
        </div>

        {/* Services Grid with Stagger Animation */}
        <StaggerGrid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          stagger={0.15}
          animation="scale"
          from="center"
        >
          {diensten.map((dienst, index) => (
            <HoverScale key={index} scale={1.03}>
              <HoverTilt>
                <div className="glass p-8 rounded-2xl h-full hover:border-primary-500/50 border border-white/10 transition-all duration-500 group relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${dienst.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                  {/* Icon with enhanced glow */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${dienst.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="relative w-full h-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/30 transition-colors duration-300">
                      <dienst.icon className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {dienst.title}
                  </h3>
                  <p className="text-primary-500/80 text-sm font-semibold mb-4 italic">
                    &quot;{dienst.subtitle}&quot;
                  </p>
                  <p className="text-gray-400 mb-6 text-sm">{dienst.description}</p>

                  {/* Features with stagger reveal */}
                  <ul className="space-y-2">
                    {dienst.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="text-primary-500 mt-0.5 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${dienst.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </HoverTilt>
            </HoverScale>
          ))}
        </StaggerGrid>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6 text-lg">
              Niet één puzzelstukje, maar het <span className="text-primary-500 font-semibold">complete plaatje</span>.
            </p>
            <MagneticButton strength={0.4}>
              <a
                href="#360scan"
                className="btn btn-secondary px-8 py-4 inline-flex items-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span>Meer over de 360Scan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
