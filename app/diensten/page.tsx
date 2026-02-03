'use client';

import Link from 'next/link';
import {
  TrendingUp,
  BarChart3,
  Bot,
  Cog,
  Monitor,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';

const services = [
  {
    slug: 'procesoptimalisatie',
    title: 'Procesoptimalisatie',
    shortDesc: 'Lean manufacturing & workflow optimalisatie',
    description: 'Identificeer bottlenecks, elimineer verspilling en optimaliseer je productieprocessen met bewezen lean-methodes.',
    icon: Cog,
    benefits: ['Bottleneck analyse', 'Lean implementatie', 'Workflow optimalisatie', 'Waste reductie'],
    priceRange: '€5.000 - €25.000',
  },
  {
    slug: 'oee-verbetering',
    title: 'OEE Verbetering',
    shortDesc: 'Verhoog je OEE met 15-40%',
    description: 'Meet, analyseer en verbeter je Overall Equipment Effectiveness systematisch voor maximale productie-output.',
    icon: BarChart3,
    benefits: ['OEE meting & analyse', '6 grote verliezen aanpak', 'Real-time monitoring', 'Verbeterroadmap'],
    priceRange: '€5.000 - €50.000',
  },
  {
    slug: 'cobot-integratie',
    title: 'Cobot Integratie',
    shortDesc: 'Merkonafhankelijke robot implementatie',
    description: 'Complete begeleiding bij cobot/robot selectie, implementatie en programmering. Gemiddelde ROI: 12-18 maanden.',
    icon: Bot,
    benefits: ['Merkonafhankelijk advies', 'ROI-berekening', 'Programmering', 'Training operators'],
    priceRange: '€35.000 - €300.000',
  },
  {
    slug: 'industriele-automatisering',
    title: 'Industriële Automatisering',
    shortDesc: 'PLC tot volledige lijnautomatisering',
    description: 'Van PLC-programmering tot complete productielijnautomatisering. Systeemintegratie en optimalisatie.',
    icon: TrendingUp,
    benefits: ['PLC programmering', 'Systeemintegratie', 'Lijnautomatisering', 'Retrofit bestaande machines'],
    priceRange: '€10.000 - €500.000',
  },
  {
    slug: 'productie-dashboards',
    title: 'Productie Dashboards',
    shortDesc: 'Real-time inzicht in je productie',
    description: 'Live productie monitoring, KPI-visualisatie en business intelligence voor data-gedreven besluitvorming.',
    icon: Monitor,
    benefits: ['Real-time OEE', 'KPI visualisatie', 'Alerting systeem', 'Rapportage tools'],
    priceRange: '€8.000 - €75.000',
  },
];

export default function DienstenPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
            Onze Diensten
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Van Analyse tot <span className="text-primary-500">Implementatie</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete oplossingen voor procesoptimalisatie, OEE-verbetering en automatisering.
            Altijd pragmatisch, resultaatgericht en hands-on.
          </p>
        </div>
      </section>

      {/* 360Scan Banner */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Start met een 360Scan
                </h2>
                <p className="text-gray-300">
                  Ontdek in 1 tot 3 dagen waar uw verbeterpotentieel ligt. Inclusief 360°-Score, besparingspotentieel en implementatieroadmap.
                </p>
              </div>
              <Link
                href="/contact?subject=360scan"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Plan uw 360Scan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h2>
                <p className="text-primary-500/80 text-sm font-medium mb-3">
                  {service.shortDesc}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-gray-500 text-sm">{service.priceRange}</span>
                  <span className="text-primary-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Meer info <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Onze Werkwijze
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Kennismaking', desc: 'Telefonisch gesprek van 30 minuten. We bespreken uw situatie, doelen en uitdagingen.' },
              { step: 2, title: '360Scan op locatie', desc: 'In 1 tot 3 dagen analyseren we uw productieproces op de werkvloer.' },
              { step: 3, title: 'Rapport met 360°-Score', desc: 'Binnen 5 tot 15 werkdagen ontvangt u een compleet rapport met besparingspotentieel.' },
              { step: 4, title: 'Implementatie', desc: 'Hands-on uitvoering samen met uw team en borging voor blijvend resultaat.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            Wij werken met MKB-maakbedrijven in
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Metaalbewerking',
              'Kunststofverwerking',
              'Voedingsindustrie',
              'Assemblage',
              'Verpakking',
              'Logistiek',
              'Elektronica',
              'Automotive toeleveranciers'
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-bg-secondary border border-white/10 rounded-full text-gray-300 text-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welke uitdaging wil jij aanpakken?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Vertel me over uw situatie en ik denk met u mee over de beste aanpak.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
          >
            Neem Contact Op
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
