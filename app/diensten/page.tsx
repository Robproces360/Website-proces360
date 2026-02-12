'use client';

import Link from 'next/link';
import {
  TrendingUp,
  BarChart3,
  Bot,
  Cog,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Search,
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';

/* PSYCHOLOGISCH PRINCIPE: Problem-first + Expertise authority
   - Niet "onze diensten" maar "uw uitdaging → mijn aanpak"
   - Consistent u-toon
   - Geen prijzen tonen (creëert anchoring zonder context)
   - 360Scan als logisch startpunt prominent */

const diensten = [
  {
    slug: 'procesoptimalisatie',
    title: 'Procesoptimalisatie',
    probleem: 'Uw processen kosten meer dan ze hoeven',
    description: 'Bottlenecks identificeren, verspilling elimineren en werkstromen optimaliseren. Met bewezen lean-methodes die werken op de vloer, niet alleen in theorie.',
    icon: Cog,
    resultaten: ['Doorlooptijd verkorten', 'Verspilling zichtbaar maken', 'Werkstromen stroomlijnen'],
  },
  {
    slug: 'oee-verbetering',
    title: 'OEE Verbetering',
    probleem: 'U haalt niet alles uit uw machines',
    description: 'Systematisch meten, analyseren en verbeteren van uw Overall Equipment Effectiveness. Gemiddeld 15-30% meer output uit dezelfde machines.',
    icon: BarChart3,
    resultaten: ['OEE meten en analyseren', 'De 6 grote verliezen aanpakken', 'Real-time monitoring opzetten'],
  },
  {
    slug: 'cobot-integratie',
    title: 'Cobot Integratie',
    probleem: 'U wilt automatiseren maar weet niet waar te beginnen',
    description: 'Merkonafhankelijke selectie en implementatie van collaborative robots. Van haalbaarheid tot programmering, één aanspreekpunt.',
    icon: Bot,
    resultaten: ['Onafhankelijk advies uit 50+ technologieën', 'ROI-berekening vooraf', 'Training van uw operators'],
  },
  {
    slug: 'industriele-automatisering',
    title: 'Industriële Automatisering',
    probleem: 'Uw productielijn is toe aan een upgrade',
    description: 'Van PLC-programmering tot complete lijnautomatisering. Systeemintegratie, retrofit van bestaande machines en optimalisatie.',
    icon: TrendingUp,
    resultaten: ['PLC programmering', 'Systeemintegratie', 'Bestaande machines upgraden'],
  },
  {
    slug: 'productie-dashboards',
    title: 'Productie Dashboards',
    probleem: 'U beslist op gevoel in plaats van data',
    description: 'Live productie-monitoring, KPI-visualisatie en alerting. Zodat u beslissingen neemt op basis van feiten, niet op basis van onderbuikgevoel.',
    icon: Monitor,
    resultaten: ['Real-time OEE inzicht', 'KPI-visualisatie', 'Automatische alerts'],
  },
];

export default function DienstenPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
              Wat ik doe
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Uw uitdaging. <span className="text-primary-500">Mijn aanpak.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Van analyse tot implementatie, van OEE-verbetering tot robotisering.
              Altijd pragmatisch, altijd meetbaar, altijd samen met uw team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 360Scan Banner */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <Reveal direction="up" delay={0.15}>
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Weet niet waar te beginnen? Start met een 360Scan.
                    </h2>
                    <p className="text-gray-300">
                      In 1 tot 3 dagen weet u precies waar uw verbeterpotentieel zit &mdash;
                      inclusief besparingspotentieel in euro&apos;s.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+31854010752"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Plan uw 360Scan
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diensten.map((dienst, index) => (
              <Reveal key={dienst.slug} direction="up" delay={index * 0.1}>
                <Link
                  href={`/diensten/${dienst.slug}`}
                  className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 block h-full"
                >
                  <dienst.icon className="w-12 h-12 text-primary-500 mb-4" />
                  <p className="text-red-400/80 text-sm font-medium mb-2 italic">
                    {dienst.probleem}
                  </p>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {dienst.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    {dienst.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {dienst.resultaten.map((resultaat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {resultaat}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-primary-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                      Meer over {dienst.title.toLowerCase()} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <h2 className="text-2xl font-bold text-white mb-8">
              Ik werk met MKB-maakbedrijven in
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
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
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-white mb-4">
              Vertel mij over uw situatie
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Geen verplichting. Ik denk eerlijk met u mee over de beste aanpak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31854010752"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                085 - 401 0752
              </a>
              <a
                href="https://wa.me/31630185844"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
