'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  LinkedinIcon,
  MessageCircle,
  Calculator,
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';

/* PSYCHOLOGISCH PRINCIPE: Drempelverlagend + persoonlijk
   - "Bel Rob" in plaats van "Neem contact op"
   - WhatsApp als laagdrempeligste optie
   - Consistent u-toon
   - Formulier is secundair, direct contact is primair */

export default function ContactPage() {
  const [formState, setFormState] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bedrijf: '',
    onderwerp: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gewoon even <span className="text-primary-500">bellen</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Geen contactformulier-bureaucratie. Vertel mij over uw situatie
              en ik denk eerlijk met u mee. Geen verkooppraatje, geen verplichting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick contact - BOVEN formulier */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <Reveal direction="up" delay={0.15}>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="tel:+31854010752"
                className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/30 transition-all text-center group"
              >
                <Phone className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
                <p className="text-white font-semibold">Bel Rob direct</p>
                <p className="text-primary-500">085 - 401 0752</p>
              </a>
              <a
                href="https://wa.me/31630185844"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-all text-center group"
              >
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold">WhatsApp</p>
                <p className="text-green-500">06-30185844</p>
              </a>
              <a
                href="mailto:info@proces360.com"
                className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/30 transition-all text-center group"
              >
                <Mail className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold">E-mail</p>
                <p className="text-primary-500">info@proces360.com</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Contact Form */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-2">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Bericht verzonden!
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Ik neem persoonlijk contact met u op, binnen 24 uur.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/oee-calculator"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Calculator className="w-5 h-5" />
                      Bereken uw OEE
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                    >
                      Lees de kennisbank
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-gray-400 mb-6 text-sm">
                    Of stuur een bericht &mdash; ik reageer persoonlijk, binnen 24 uur.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="naam" className="block text-sm font-medium text-gray-300 mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="naam"
                          name="naam"
                          required
                          value={formState.naam}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="telefoon" className="block text-sm font-medium text-gray-300 mb-2">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="telefoon"
                          name="telefoon"
                          value={formState.telefoon}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="06 - 1234 5678"
                        />
                      </div>
                      <div>
                        <label htmlFor="bedrijf" className="block text-sm font-medium text-gray-300 mb-2">
                          Bedrijfsnaam
                        </label>
                        <input
                          type="text"
                          id="bedrijf"
                          name="bedrijf"
                          value={formState.bedrijf}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Uw bedrijf"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="onderwerp" className="block text-sm font-medium text-gray-300 mb-2">
                        Waar gaat het over?
                      </label>
                      <select
                        id="onderwerp"
                        name="onderwerp"
                        value={formState.onderwerp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="360scan">360Scan aanvragen</option>
                        <option value="oee">OEE verbetering</option>
                        <option value="cobot">Cobot / robotisering</option>
                        <option value="automatisering">Industriële automatisering</option>
                        <option value="procesoptimalisatie">Procesoptimalisatie</option>
                        <option value="kennismaking">Kennismakingsgesprek</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bericht" className="block text-sm font-medium text-gray-300 mb-2">
                        Waar kan ik u mee helpen? *
                      </label>
                      <textarea
                        id="bericht"
                        name="bericht"
                        required
                        rows={4}
                        value={formState.bericht}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                        placeholder="Vertel kort over uw situatie..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Verstuur bericht
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Reveal direction="up" delay={0.25}>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h2 className="text-lg font-bold text-white mb-4">Over Proces360</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Oss, Noord-Brabant</p>
                      <p className="text-gray-400 text-sm">Actief door heel Nederland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Ma - Vr: 08:00 - 18:00</p>
                      <p className="text-gray-400 text-sm">Spoedgevallen: altijd bereikbaar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LinkedinIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <a
                      href="https://www.linkedin.com/company/proces360%C2%B0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-blue-500 transition-colors"
                    >
                      Proces360 op LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-bg-secondary border border-primary-500/20 rounded-xl p-6 bg-gradient-to-br from-primary-500/5 to-transparent">
                <p className="text-gray-300 leading-relaxed text-sm">
                  <span className="text-white font-semibold">Mijn belofte:</span> Ik reageer
                  persoonlijk, binnen 24 uur. Geen standaard mailtjes. Geen verkooppraatje.
                  Gewoon een eerlijk gesprek over uw situatie.
                </p>
                <p className="text-primary-500 font-semibold mt-3 text-sm">
                  &mdash; Rob Derks
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
