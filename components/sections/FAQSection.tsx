"use client";
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import RevealMask from '../visuals/RevealMask';
import GlitchText from '../visuals/GlitchText';
import MagneticButton from '../visuals/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Voor wie is Proces360?',
    answer: 'MKB productiebedrijven (10-250 medewerkers) die worstelen met kosten, efficiency of automatisering. Of u nu net begint met optimalisatie of al ervaring heeft - wij helpen bij elke stap.'
  },
  {
    question: 'Hoe lang duurt een project?',
    answer: '360Scan: 1-2 weken voor complete analyse en rapport. Totaal traject van analyse tot implementatie: 3-9 maanden, afhankelijk van de complexiteit en scope van uw project.'
  },
  {
    question: 'Werken jullie door heel Nederland?',
    answer: 'Ja. Primair actief in Brabant en Limburg, maar operationeel door heel Nederland. Voor complexe projecten komen wij overal ter plaatse.'
  },
  {
    question: 'Wat kost een 360Scan?',
    answer: 'De investering voor een 360Scan is op aanvraag. Na de scan ontvangt u een maatwerk voorstel met concrete inzichten, ROI-berekeningen en een implementatie roadmap, afgestemd op uw specifieke situatie.'
  },
  {
    question: 'Zijn jullie gebonden aan bepaalde merken?',
    answer: 'Nee, wij zijn volledig merkonafhankelijk. We werken samen met 50+ technology partners en kiezen altijd de beste oplossing voor úw specifieke situatie - niet wat voor ons het meest oplevert.'
  },
  {
    question: 'Hoe weet ik of een investering rendabel is?',
    answer: 'Voordat u investeert maken wij een complete business case met ROI-berekening. U weet exact wat het oplevert, wat de terugverdientijd is, en waar de grootste winstpotentie ligt. Geen verrassingen achteraf.'
  },
  {
    question: 'Wat gebeurt er na implementatie?',
    answer: 'We blijven uw partner. Proactief onderhoud, performance monitoring, helpdesk support en continue optimalisatie zorgen voor blijvend rendement. Uw investering blijft opleveren.'
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const faqItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax orbs
    gsap.to('.faq-orb', {
      y: -80,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Stagger FAQ items
    if (faqItemsRef.current) {
      const items = faqItemsRef.current.querySelectorAll('.faq-item');
      gsap.fromTo(items,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqItemsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="faq-orb absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="faq-orb absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealMask direction="up" duration={0.8}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-6 border border-primary-500/20">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <HelpCircle className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-300 font-medium">Veelgestelde Vragen</span>
            </div>
          </RevealMask>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Vragen? </span>
              <GlitchText className="gradient-text" glitchOnHover>Antwoorden!</GlitchText>
            </h2>
          </Reveal>
        </div>

        {/* FAQ Items */}
        <div ref={faqItemsRef} className="space-y-4" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="faq-item glass rounded-xl overflow-hidden group relative border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                role="listitem"
              >
                {/* Gradient background on open */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary-500/5 to-orange-500/5 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                <h3 className="relative z-10">
                  <button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className={`text-lg font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-primary-400' : 'text-white group-hover:text-primary-400'}`}>
                      {faq.question}
                    </span>
                    <div className={`relative w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-500/20 rotate-180' : 'group-hover:bg-primary-500/20'}`}>
                      <ChevronDown
                        className="w-5 h-5 text-primary-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-500 ease-out relative z-10 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                  hidden={!isOpen}
                >
                  <div className="px-6 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                </div>

                {/* Bottom accent line when open */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-orange-400 to-primary-500 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Staat uw vraag er niet bij?</p>
            <MagneticButton strength={0.4}>
              <a href="#contact" className="btn px-8 py-4 inline-flex items-center gap-3 group relative overflow-hidden">
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Neem contact op</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
