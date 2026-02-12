"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import MagneticButton from '../visuals/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -80,
        scale: 0.97,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }
  }, []);

  const scrollToScan = () => {
    const el = document.getElementById('360scan');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Spotlight */}
      <div className="absolute inset-0 bg-gradient-spotlight pointer-events-none" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Emotional copy */}
          <div>
            {/* PSYCHOLOGISCH PRINCIPE: Pattern interrupt - niet beginnen met dienst maar met herkenning */}
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 border border-primary-500/20">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  22+ jaar op de productievloer
                </span>
              </div>
            </Reveal>

            {/* PSYCHOLOGISCH PRINCIPE: Emotionele opening - pijn benoemen die de bezoeker voelt */}
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-text-primary">
                  Uw productie kan meer.{' '}
                </span>
                <span className="gradient-text">
                  Ik laat u zien hoeveel.
                </span>
              </h1>
            </Reveal>

            {/* PSYCHOLOGISCH PRINCIPE: Mirroring - beschrijf exact wat ze voelen */}
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-text-secondary mb-4 leading-relaxed">
                U weet dat er meer in zit. Meer output, minder stilstand, betere benutting van uw mensen en machines. Maar waar begint u?
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Ik ben Rob Derks. Meer dan 20 jaar heb ik in de productie gestaan &mdash; als operator, teamleider, maintenance manager en operations manager. Ik ken uw wereld. En ik weet waar de verborgen winst zit.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <MagneticButton strength={0.4}>
                  <button
                    onClick={scrollToScan}
                    className="btn btn-lg text-base sm:text-lg px-8 py-4 flex items-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">Ontdek uw verbeterpotentieel</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                </MagneticButton>

                <MagneticButton strength={0.4}>
                  <a
                    href="tel:+31854010752"
                    className="btn btn-secondary btn-lg text-base sm:text-lg px-8 py-4 flex items-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>085 - 401 0752</span>
                  </a>
                </MagneticButton>
              </div>
            </Reveal>

            {/* Social proof micro-line */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <a
                  href="https://wa.me/31630185844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  Of stuur een WhatsApp
                </a>
                <span className="text-white/20">|</span>
                <span>Reactie binnen 24 uur</span>
              </div>
            </Reveal>
          </div>

          {/* Right: Rob's photo with trust overlay - compact */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative max-w-xs lg:max-w-sm mx-auto">
              {/* Photo - 50% smaller */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/rob-derks.jpg"
                  alt="Rob Derks - Proces360 - 22+ jaar productie-ervaring"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Quote overlay - PSYCHOLOGISCH PRINCIPE: Vulnerability-based trust */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium italic leading-snug">
                    &ldquo;Ik ga pas weg als ik iets heb gevonden waar u morgen mee verder kunt.&rdquo;
                  </p>
                  <p className="text-primary-500 font-semibold mt-2">
                    Rob Derks &mdash; Oprichter Proces360
                  </p>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
