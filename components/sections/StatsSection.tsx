"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import MorphingCounter from '../visuals/MorphingCounter';
import { TrendingUp, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 17.4,
    suffix: '%',
    label: 'Efficiëntiewinst',
    icon: TrendingUp,
  },
  {
    value: 15,
    suffix: ' mnd',
    label: 'Terugverdientijd',
    icon: Clock,
  },
  {
    value: 18,
    suffix: '',
    label: 'Klanten geholpen',
    icon: Users,
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.children;

    // Staggered entrance animation
    gsap.fromTo(cards,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Hover 3D tilt effect
    Array.from(cards).forEach((card) => {
      const el = card as HTMLElement;

      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

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
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <Reveal direction="up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-white">Resultaten die </span>
            <span className="gradient-text">spreken</span>
          </h2>
        </Reveal>

        {/* Compact Stats Row */}
        <div ref={cardsRef} className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-5 h-5 text-primary-500" />
                <span className="text-3xl md:text-4xl font-bold gradient-text">
                  <MorphingCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
