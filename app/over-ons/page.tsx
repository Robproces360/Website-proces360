'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Linkedin,
  Factory,
  Cog,
  Bot,
  BarChart3
} from 'lucide-react';

const milestones = [
  { year: '2000', event: 'Start als Operator in productie', icon: Factory },
  { year: '2005', event: 'Doorgroei naar Teamleider', icon: Users },
  { year: '2010', event: 'Production Manager bij MKB-maakbedrijf', icon: Briefcase },
  { year: '2015', event: 'Maintenance Manager & TPM implementatie', icon: Cog },
  { year: '2018', event: 'Operations Manager - Volledige fabrieksverantwoordelijkheid', icon: TrendingUp },
  { year: '2023', event: 'Oprichting Proces360 B.V.', icon: Target },
];

const expertise = [
  {
    title: 'OEE Verbetering',
    description: 'Verhogen van Overall Equipment Effectiveness met 15-40% door gerichte optimalisatie.',
    icon: BarChart3,
  },
  {
    title: 'Cobot Integratie',
    description: 'Merkonafhankelijke selectie en implementatie van collaborative robots.',
    icon: Bot,
  },
  {
    title: 'Procesoptimalisatie',
    description: 'Lean manufacturing, bottleneck analyse en workflow optimalisatie.',
    icon: Cog,
  },
  {
    title: 'Productie Dashboards',
    description: 'Real-time monitoring, KPI-visualisatie en data-gedreven besluitvorming.',
    icon: TrendingUp,
  },
];

const values = [
  {
    title: 'Van A tot Z Ontzorgd',
    description: 'Gedegen advies met daarop volgende acties - van analyse tot implementatie volledig begeleid.',
  },
  {
    title: 'Resultaatgericht',
    description: 'Focus op meetbare verbeteringen: OEE, doorlooptijd, kosten, kwaliteit.',
  },
  {
    title: 'Hands-on',
    description: 'Ik sta naast je team op de werkvloer, niet achter een bureau.',
  },
  {
    title: 'Merkonafhankelijk',
    description: 'Keuze uit 50+ technologieën voor de beste oplossing voor jouw situatie.',
  },
];

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
            Over Proces360
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            22+ Jaar <span className="text-primary-500">Hands-on</span> Productie-ervaring
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Van operator tot operations manager. Ik ken de werkvloer, de machines, de mensen én de uitdagingen.
            Die ervaring zet ik nu in voor MKB-maakbedrijven die willen groeien.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-bg-secondary border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-primary-500/30">
                  <Image
                    src="/images/rob-derks.jpg"
                    alt="Rob Derks - Oprichter Proces360"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://www.linkedin.com/company/proces360%C2%B0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Bedrijfspagina
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Van de Werkvloer naar Consultancy
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Mijn carrière begon waar de echte productie plaatsvindt: aan de machines.
                    Als operator leerde ik de dagelijkse uitdagingen van productie kennen:
                    storingen, omsteltijden, kwaliteitsproblemen en de druk om targets te halen.
                  </p>
                  <p>
                    Door de jaren heen groeide ik door naar teamleider, production manager,
                    maintenance manager en uiteindelijk operations manager. In elke rol leerde
                    ik meer over wat productie écht efficiënt maakt - en wat niet.
                  </p>
                  <p>
                    Die 22+ jaar ervaring - van de werkvloer tot de directiekamer - is nu de
                    basis van Proces360. Gedegen advies met daarop volgende acties - van A tot Z ontzorgd.
                    Ik weet hoe het is om om 3 uur &apos;s nachts gebeld te worden voor een
                    storing. Ik weet hoe het is om een team te motiveren tijdens een
                    onmogelijke deadline.
                  </p>
                  <p className="text-white font-medium">
                    Die praktijkervaring maakt het verschil.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-bg-primary rounded-xl">
                    <p className="text-3xl font-bold text-primary-500">22+</p>
                    <p className="text-gray-400 text-sm">Jaar Ervaring</p>
                  </div>
                  <div className="text-center p-4 bg-bg-primary rounded-xl">
                    <p className="text-3xl font-bold text-primary-500">50+</p>
                    <p className="text-gray-400 text-sm">Projecten</p>
                  </div>
                  <div className="text-center p-4 bg-bg-primary rounded-xl">
                    <p className="text-3xl font-bold text-primary-500">15-40%</p>
                    <p className="text-gray-400 text-sm">OEE Verbetering</p>
                  </div>
                  <div className="text-center p-4 bg-bg-primary rounded-xl">
                    <p className="text-3xl font-bold text-primary-500">47</p>
                    <p className="text-gray-400 text-sm">Tevreden Klanten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Mijn Pad in Productie
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 bg-bg-secondary border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <milestone.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="pt-3">
                    <span className="text-primary-500 font-bold">{milestone.year}</span>
                    <p className="text-white font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Expertise
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Specialisaties opgebouwd door jaren van praktijkervaring in MKB-maakbedrijven.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-all"
              >
                <item.icon className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Waar Ik Voor Sta
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Mijn aanpak is gebaseerd op vier kernwaarden die het verschil maken.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-bg-secondary border border-white/10 rounded-xl p-6"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border border-primary-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Mijn Werkwijze
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analyse</h3>
                <p className="text-gray-400 text-sm">
                  Grondige 360Scan van uw huidige situatie, processen en knelpunten.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Plan</h3>
                <p className="text-gray-400 text-sm">
                  Concrete roadmap met prioriteiten, ROI-berekening en tijdlijn.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Uitvoering</h3>
                <p className="text-gray-400 text-sm">
                  Hands-on implementatie samen met jouw team, met meetbare resultaten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om te verbeteren?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Plan een kennismaking of vraag een 360Scan aan.
            Ontdek hoeveel potentieel er in uw productie zit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Neem Contact Op
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/rob-derks"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Volledig Profiel Rob Derks
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
