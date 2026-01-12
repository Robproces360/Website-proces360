"use client";
import { useEffect, useRef } from 'react';
import { Target, CheckCircle2, TrendingUp, Phone, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import HoverGlow from '../shared/HoverGlow';
import Hero3D from '../visuals/Hero3D';
import MagneticButton from '../visuals/MagneticButton';
import GlitchText from '../visuals/GlitchText';
import RevealMask from '../visuals/RevealMask';
import MorphingBlob from '../visuals/MorphingBlob';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Scroll-triggered fade out for hero content
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }

    // Headline letter animation
    if (headlineRef.current) {
      const letters = headlineRef.current.querySelectorAll('.letter');
      gsap.fromTo(letters,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      );
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split text into letters for animation
  const splitText = (text: string, className: string = '') => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`letter inline-block ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-grid-flow" />

      {/* Spotlight gradient */}
      <div className="absolute inset-0 bg-gradient-spotlight pointer-events-none" />

      {/* Morphing blobs */}
      <MorphingBlob
        className="top-[10%] left-[5%]"
        size={600}
        speed={8}
        color="rgba(249, 115, 22, 0.12)"
      />
      <MorphingBlob
        className="bottom-[20%] right-[10%]"
        size={500}
        speed={6}
        color="rgba(249, 115, 22, 0.08)"
      />

      {/* 3D Hero Visual */}
      <Hero3D />

      {/* Animated gradient orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-primary-600/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-primary-400/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-12">
        {/* Tagline badge with reveal mask */}
        <RevealMask direction="left" duration={0.8} maskColor="#f97316">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-8 border border-primary-500/20">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary-500 animate-ping" />
            </div>
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-text-secondary tracking-wide">
              Productie-optimalisatie voor MKB
            </span>
          </div>
        </RevealMask>

        {/* Main headline with letter animation - SEO optimized H1 */}
        <Reveal direction="up" delay={0.1}>
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ perspective: '1000px' }}
          >
            <span className="block text-text-primary overflow-hidden">
              {splitText('Procesoptimalisatie')}
            </span>
            <span className="block mt-2 overflow-hidden">
              <GlitchText
                className="gradient-text"
                glitchOnHover={true}
              >
                &amp; Automatisering
              </GlitchText>
            </span>
          </h1>
        </Reveal>

        {/* Subheadline with stagger */}
        <Reveal direction="up" delay={0.2}>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            <span className="block text-primary-500 font-semibold hero-glow-text">
              Analyse, allround productieverbeteringen & automatisering, van advies tot implementatie
            </span>
            <span className="block mt-3 text-primary-400 font-bold text-xl md:text-2xl lg:text-3xl hero-glow-text-strong">
              Van A tot Z ontzorgd.
            </span>
          </p>
        </Reveal>

        {/* CTAs with enhanced magnetic effect */}
        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <MagneticButton strength={0.5} innerStrength={0.2}>
              <HoverGlow glowColor="rgba(249, 115, 22, 0.6)" glowSize={100} rounded="xl">
                <a
                  href="#360scan"
                  className="btn btn-lg text-base sm:text-lg px-8 py-4 flex items-center gap-3 group relative overflow-hidden"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-primary-500 via-orange-400 to-primary-500 rounded-xl animate-spin-slow" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-[1px] bg-primary-600 rounded-xl" />
                  </div>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <Target className="w-5 h-5 transition-transform group-hover:rotate-90 group-hover:scale-110 duration-300 relative z-10" />
                  <span className="relative z-10">Gratis 360Scan aanvragen</span>
                  <TrendingUp className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1 duration-300 relative z-10" />
                </a>
              </HoverGlow>
            </MagneticButton>

            <MagneticButton strength={0.5} innerStrength={0.2}>
              <a
                href="tel:+31854010752"
                className="btn btn-secondary btn-lg text-base sm:text-lg px-8 py-4 flex items-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <Phone className="w-5 h-5 transition-all group-hover:rotate-12 group-hover:scale-110 duration-300" />
                <span>085 - 401 0752</span>
              </a>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Feature grid with staggered animation */}
        <Reveal direction="up" delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { text: 'Merkonafhankelijk advies uit 50+ technologieën', icon: '🔧' },
              { text: 'Van eerste scan tot continue optimalisatie', icon: '📊' },
              { text: 'Inzicht in kostprijs, verlies en winstpotentie', icon: '💰' },
              { text: 'Training en change management inbegrepen', icon: '🎓' }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary-500/30 hover:bg-white/[0.04] transition-all duration-300 group animate-fadeInUp"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-12 duration-300" />
                  <div className="absolute inset-0 w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-sm text-text-secondary text-left group-hover:text-text-primary transition-colors duration-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <Reveal direction="up" delay={0.7}>
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-primary-500 transition-colors duration-300 group"
          aria-label="Scroll naar beneden"
        >
          <span className="text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
            Ontdek meer
          </span>
          <div className="relative">
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-current rounded-full animate-scroll-mouse" />
            </div>
          </div>
          {/* Scroll line animation */}
          <div className="w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent overflow-hidden">
            <div className="w-full h-6 bg-primary-500 animate-scrollDown" />
          </div>
        </button>
      </Reveal>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(300%);
          }
        }
        .animate-scrollDown {
          animation: scrollDown 2s ease-in-out infinite;
        }
        @keyframes scroll-mouse {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(4px);
            opacity: 0.5;
          }
        }
        .animate-scroll-mouse {
          animation: scroll-mouse 1.5s ease-in-out infinite;
        }
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        /* Hero glow text animations - orange to blue fade */
        @keyframes hero-glow {
          0%, 100% {
            text-shadow:
              0 0 10px rgba(249, 115, 22, 0.5),
              0 0 20px rgba(249, 115, 22, 0.3),
              0 0 30px rgba(249, 115, 22, 0.2);
            color: rgb(249, 115, 22);
          }
          50% {
            text-shadow:
              0 0 15px rgba(59, 130, 246, 0.6),
              0 0 30px rgba(59, 130, 246, 0.4),
              0 0 45px rgba(59, 130, 246, 0.2);
            color: rgb(59, 130, 246);
          }
        }

        @keyframes hero-glow-strong {
          0%, 100% {
            text-shadow:
              0 0 15px rgba(249, 115, 22, 0.6),
              0 0 30px rgba(249, 115, 22, 0.4),
              0 0 45px rgba(249, 115, 22, 0.2),
              0 0 60px rgba(249, 115, 22, 0.1);
            color: rgb(249, 115, 22);
            transform: scale(1);
          }
          50% {
            text-shadow:
              0 0 20px rgba(59, 130, 246, 0.7),
              0 0 40px rgba(59, 130, 246, 0.5),
              0 0 60px rgba(59, 130, 246, 0.3),
              0 0 80px rgba(59, 130, 246, 0.15);
            color: rgb(59, 130, 246);
            transform: scale(1.02);
          }
        }

        .hero-glow-text {
          animation: hero-glow 3s ease-in-out infinite;
        }

        .hero-glow-text-strong {
          animation: hero-glow-strong 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
