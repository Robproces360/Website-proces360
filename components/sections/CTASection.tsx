"use client";
import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Building2, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../shared/Reveal';
import RevealMask from '../visuals/RevealMask';
import MagneticButton from '../visuals/MagneticButton';
import GlitchText from '../visuals/GlitchText';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bedrijf: '',
    bericht: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax orbs
    gsap.to('.cta-orb', {
      y: -80,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuleer form submission (vervang met echte API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset na 5 seconden
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ naam: '', email: '', telefoon: '', bedrijf: '', bericht: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefoon', value: '085 - 401 0752', href: 'tel:+31854010752' },
    { icon: Mail, label: 'E-mail', value: 'info@proces360.com', href: 'mailto:info@proces360.com' },
    { icon: MapPin, label: 'Locatie', value: 'Nederland', href: null },
    { icon: Clock, label: 'Bereikbaar', value: 'Ma-Vr 08:00-18:00', href: null },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-flow" />

      {/* Animated gradient orbs */}
      <div className="cta-orb absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="cta-orb absolute bottom-20 left-[5%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="cta-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealMask direction="up" duration={0.8}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-sm font-medium text-text-secondary mb-6 border border-primary-500/20">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <Send className="w-4 h-4 text-primary-500" />
              Neem contact op
            </span>
          </RevealMask>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-text-primary">Klaar voor de </span>
              <GlitchText className="gradient-text" glitchOnHover>volgende stap?</GlitchText>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              Vraag een gratis 360Scan aan of neem direct contact op. Wij reageren binnen <span className="text-primary-500 font-semibold">24 uur</span>.
            </p>
          </Reveal>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <Reveal direction="up" delay={0.3} className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-primary-500 via-orange-400 to-primary-500 rounded-2xl animate-spin-slow" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-[1px] bg-bg-secondary rounded-2xl" />
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

              {/* Form content with higher z-index */}
              <div className="relative z-20">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Bericht verzonden!
                  </h3>
                  <p className="text-text-secondary">
                    Wij nemen binnen 24 uur contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="naam" className="block text-sm font-medium text-text-secondary mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="naam"
                        name="naam"
                        required
                        value={formState.naam}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                        placeholder="uw@email.nl"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefoon" className="block text-sm font-medium text-text-secondary mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="telefoon"
                        name="telefoon"
                        value={formState.telefoon}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                        placeholder="06 - 1234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="bedrijf" className="block text-sm font-medium text-text-secondary mb-2">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        id="bedrijf"
                        name="bedrijf"
                        value={formState.bedrijf}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                        placeholder="Uw bedrijf"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-sm font-medium text-text-secondary mb-2">
                      Bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      rows={4}
                      value={formState.bericht}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none resize-none"
                      placeholder="Vertel ons over uw uitdaging of vraag..."
                    />
                  </div>

                  <MagneticButton strength={0.3}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-lg text-base flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="relative z-10">Verzenden...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Bericht versturen</span>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
              </div>
            </div>
          </Reveal>

          {/* Contact info sidebar */}
          <Reveal direction="up" delay={0.4} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Contact cards */}
              <div className="glass-card p-6 rounded-2xl space-y-5">
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary-500" />
                  Contactgegevens
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-text-primary hover:text-primary-500 transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-text-primary font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick action */}
              <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/20 group relative overflow-hidden">
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-primary-500/5 animate-pulse-subtle" />

                <h3 className="text-lg font-semibold text-text-primary mb-2 relative z-10">
                  Direct advies nodig?
                </h3>
                <p className="text-sm text-text-secondary mb-4 relative z-10">
                  Bel ons direct voor een vrijblijvend gesprek over uw productie-uitdagingen.
                </p>
                <MagneticButton strength={0.4}>
                  <a
                    href="tel:+31854010752"
                    className="btn btn-secondary w-full flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">085 - 401 0752</span>
                  </a>
                </MagneticButton>
              </div>

              {/* Trust indicator */}
              <p className="text-center text-sm text-text-muted">
                Reactie gegarandeerd binnen 24 uur
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes grid-flow {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
