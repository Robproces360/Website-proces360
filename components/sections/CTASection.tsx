"use client";
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from '../shared/Reveal';
import MagneticButton from '../visuals/MagneticButton';

/* PSYCHOLOGISCH PRINCIPE: Drempelverlagend + persoonlijk
   - "Gewoon even bellen" in plaats van "Neem contact op"
   - Rob's naam en foto benoemen = je belt een mens, niet een bedrijf
   - WhatsApp als laagdrempeligste optie prominent
   - Formulier is secundair, niet primair */

export default function CTASection() {
  const [formState, setFormState] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bedrijf: '',
    bericht: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Er ging iets mis');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header - persoonlijk en warm */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-text-primary">Gewoon even </span>
              <span className="gradient-text">mens tot mens</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Geen verkooppraatje. Geen verplichting. Vertel mij over uw situatie
              en ik denk eerlijk met u mee. Als ik denk dat u mij niet nodig heeft,
              zeg ik dat ook.
            </p>
          </Reveal>
        </div>

        {/* Quick contact options - BOVEN het formulier */}
        <Reveal direction="up" delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <a
              href="tel:+31854010752"
              className="glass p-5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 text-center group"
            >
              <Phone className="w-6 h-6 text-primary-500 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
              <p className="text-white font-semibold text-sm">Bel Rob direct</p>
              <p className="text-primary-500 text-sm">085 - 401 0752</p>
            </a>
            <a
              href="https://wa.me/31630185844"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-5 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 text-center group"
            >
              <MessageCircle className="w-6 h-6 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold text-sm">WhatsApp</p>
              <p className="text-green-500 text-sm">06-30185844</p>
            </a>
            <a
              href="mailto:info@proces360.com"
              className="glass p-5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 text-center group"
            >
              <Mail className="w-6 h-6 text-primary-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold text-sm">E-mail</p>
              <p className="text-primary-500 text-sm">info@proces360.com</p>
            </a>
          </div>
        </Reveal>

        {/* Form + info */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Bericht verzonden!
                  </h3>
                  <p className="text-text-secondary">
                    Ik neem persoonlijk contact met u op, binnen 24 uur.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-sm text-text-muted mb-2">
                    Of stuur een bericht &mdash; ik reageer persoonlijk, binnen 24 uur.
                  </p>
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
                      Waar kan ik u mee helpen? *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      rows={4}
                      value={formState.bericht}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none resize-none"
                      placeholder="Vertel kort over uw situatie..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <MagneticButton strength={0.3}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-lg text-base flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="relative z-10">Verzenden...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 relative z-10" />
                          <span className="relative z-10">Verstuur bericht</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal direction="up" delay={0.3} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Locatie */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Over Proces360</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-primary font-medium">Oss, Noord-Brabant</p>
                      <p className="text-text-muted text-sm">Actief door heel Nederland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-primary font-medium">Ma - Vr: 08:00 - 18:00</p>
                      <p className="text-text-muted text-sm">Spoedgevallen: altijd bereikbaar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Belofte */}
              <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary-500/5 to-transparent border-primary-500/20">
                <p className="text-text-secondary leading-relaxed text-sm">
                  <span className="text-white font-semibold">Mijn belofte:</span> Ik reageer persoonlijk,
                  binnen 24 uur. Geen standaard mailtjes. Geen verkooppraatje.
                  Gewoon een eerlijk gesprek over uw situatie.
                </p>
                <p className="text-primary-500 font-semibold mt-3 text-sm">
                  &mdash; Rob Derks
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
