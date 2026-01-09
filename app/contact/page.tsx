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
  Linkedin,
  MessageCircle,
  Calculator,
  Calendar
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuleer form submission (vervang later met echte API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
            Neem Contact Op
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Laten we <span className="text-primary-500">praten</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Heb je vragen over procesoptimalisatie, OEE-verbetering of robotisering?
            Neem vrijblijvend contact op voor een gratis quickscan van jouw productie.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Direct Contact</h2>

              <div className="space-y-4">
                <a
                  href="tel:+31854010752"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Telefoon</p>
                    <p className="text-white font-medium group-hover:text-primary-500 transition-colors">
                      +31 85 401 0752
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@proces360.com"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">E-mail</p>
                    <p className="text-white font-medium group-hover:text-primary-500 transition-colors">
                      info@proces360.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/31854010752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-green-500 transition-colors">
                      Direct chatten
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rob-derks-15900873/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-medium group-hover:text-blue-500 transition-colors">
                      Rob Derks
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Locatie</h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Proces360 B.V.</p>
                  <p className="text-gray-400 text-sm">Oss, Noord-Brabant</p>
                  <p className="text-gray-400 text-sm">Nederland</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Bereikbaar</p>
                  <p className="text-gray-400 text-sm">Ma - Vr: 08:00 - 18:00</p>
                  <p className="text-gray-400 text-sm">Spoedgevallen: 24/7</p>
                </div>
              </div>
            </div>

            {/* Werkgebied Card */}
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Werkgebied</h2>
              <p className="text-gray-400 text-sm mb-4">
                Wij werken met MKB-maakbedrijven in:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm">Nederland</span>
                <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm">België</span>
                <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm">Duitsland</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Bericht Verzonden!
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Bedankt voor je bericht. Ik neem binnen 24 uur contact met je op.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/oee-calculator"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Calculator className="w-5 h-5" />
                      Bereken je OEE
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                    >
                      Lees onze artikelen
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Stuur een Bericht</h2>
                  <p className="text-gray-400 mb-8">
                    Vul het formulier in en ik neem binnen 24 uur contact met je op.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Jouw naam"
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
                          placeholder="jouw@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="+31 6 12345678"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Bedrijf
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Bedrijfsnaam"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Onderwerp *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="quickscan">Gratis Quickscan aanvragen</option>
                        <option value="oee">OEE Verbetering</option>
                        <option value="cobot">Cobot / Robot Integratie</option>
                        <option value="automatisering">Industriële Automatisering</option>
                        <option value="dashboard">Productie Dashboard</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                        placeholder="Vertel kort over je situatie en wat je wilt bereiken..."
                      />
                    </div>

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
                          Verstuur Bericht
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Of begin direct met...
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/oee-calculator"
              className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all group"
            >
              <Calculator className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                OEE Calculator
              </h3>
              <p className="text-gray-400 text-sm">
                Bereken je huidige OEE en ontdek verbeterpotentieel.
              </p>
            </Link>

            <Link
              href="/roi-calculator"
              className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all group"
            >
              <Calendar className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                ROI Calculator
              </h3>
              <p className="text-gray-400 text-sm">
                Bereken de terugverdientijd van robotisering.
              </p>
            </Link>

            <Link
              href="/blog"
              className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all group"
            >
              <ArrowRight className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                Kennisbank
              </h3>
              <p className="text-gray-400 text-sm">
                Lees onze artikelen over OEE, cobots en meer.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
