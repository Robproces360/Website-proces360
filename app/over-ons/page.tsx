'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Award,
  Users,
  Target,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Linkedin,
  ExternalLink,
  Factory,
  Cog,
  Heart,
  Phone,
  MessageCircle,
  Quote,
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';

/* PSYCHOLOGISCH PRINCIPE: Herkenning + Kwetsbaarheid
   - Niet "wij zijn geweldig" maar "ik begrijp u omdat ik er zelf heb gestaan"
   - Timeline toont groei vanuit de werkvloer, niet vanuit een kantoor
   - Kernwaarden zijn beloftes in ik-vorm, niet in bedrijfs-jargon */

const milestones = [
  { year: '2000', event: 'Begonnen als operator — aan de machines, in de ploegendienst', icon: Factory },
  { year: '2005', event: 'Doorgegroeid naar teamleider — verantwoordelijk voor 15 mensen', icon: Users },
  { year: '2010', event: 'Production Manager — eerste keer eindverantwoordelijk voor output', icon: Briefcase },
  { year: '2015', event: 'Maintenance Manager — TPM opgezet, stilstand gehalveerd', icon: Cog },
  { year: '2018', event: 'Operations Manager — volledige fabrieksverantwoordelijkheid', icon: TrendingUp },
  { year: '2023', event: 'Proces360 opgericht — mijn ervaring nu beschikbaar voor uw bedrijf', icon: Target },
];

export default function OverOnsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
              Over Proces360
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Geen kantoor. <span className="text-primary-500">Wel 22 jaar werkvloer.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proces360 is geen consultancybureau met een receptie en powerpoints.
              Het is één man met 22 jaar productie-ervaring die naast u op de vloer staat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-bg-secondary border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <Reveal direction="left">
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
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Bio */}
              <Reveal direction="up" delay={0.15}>
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Van de werkvloer. Niet uit een boekje.
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Mijn carrière begon waar de echte productie plaatsvindt: aan de machines.
                      Als operator leerde ik de dagelijkse realiteit kennen: storingen om 3 uur
                      &apos;s nachts, omsteltijden die uit de hand liepen, en de druk om targets
                      te halen met te weinig mensen.
                    </p>
                    <p>
                      Door de jaren heen groeide ik door naar teamleider, production manager,
                      maintenance manager en operations manager. In elke rol leerde ik meer
                      over wat productie écht efficiënt maakt &mdash; en vooral: wat níet werkt.
                    </p>
                    <p>
                      Die 22+ jaar ervaring &mdash; van de werkvloer tot de directiekamer &mdash;
                      is nu de basis van Proces360. Ik weet hoe het voelt om verantwoordelijk te
                      zijn voor output die achterblijft. En ik weet hoe u dat kunt veranderen.
                    </p>
                    <p className="text-white font-medium">
                      Dát maakt het verschil: ik kom niet met theorie. Ik kom met ervaring.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-bg-primary rounded-xl">
                      <p className="text-3xl font-bold text-primary-500">22+</p>
                      <p className="text-gray-400 text-sm">Jaar ervaring</p>
                    </div>
                    <div className="text-center p-4 bg-bg-primary rounded-xl">
                      <p className="text-3xl font-bold text-primary-500">15-30%</p>
                      <p className="text-gray-400 text-sm">Meer output gemiddeld</p>
                    </div>
                    <div className="text-center p-4 bg-bg-primary rounded-xl">
                      <p className="text-3xl font-bold text-primary-500">100%</p>
                      <p className="text-gray-400 text-sm">Eerlijk advies</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Mijn pad in productie
            </h2>
          </Reveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Reveal key={index} direction="up" delay={index * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="relative z-10 w-16 h-16 bg-bg-secondary border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <milestone.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="pt-3">
                      <span className="text-primary-500 font-bold">{milestone.year}</span>
                      <p className="text-white font-medium">{milestone.event}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - als beloftes */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Wat u van mij mag verwachten
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Geen slogans. Dit zijn beloftes.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Eerlijk advies',
                description: 'Als ik denk dat u mij niet nodig heeft, zeg ik dat. Mijn reputatie is belangrijker dan één project.',
              },
              {
                title: 'Resultaat in euro\'s',
                description: 'Geen wollige rapporten. Elke maatregel heeft een ROI-berekening. U weet vooraf wat het oplevert.',
              },
              {
                title: 'Op de vloer',
                description: 'Ik sta naast uw team, niet achter een bureau. De beste inzichten komen van de mensen die het werk doen.',
              },
              {
                title: 'Merkonafhankelijk',
                description: 'Ik selecteer uit 50+ technologieën. Geen verborgen belangen, geen push om dure machines te verkopen.',
              },
            ].map((value, index) => (
              <Reveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 h-full">
                  <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Referenties */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Wat opdrachtgevers <span className="text-primary-500">zeggen</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Echte referenties van mensen met wie ik samenwerk
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary-500/50 mb-4" />
                <p className="text-gray-300 italic leading-relaxed mb-6 flex-grow">
                  &ldquo;Rob combineert een open persoonlijkheid met een professionele, hands-on
                  mentaliteit en stevige vakinhoudelijke kennis. Wat hem echt onderscheidt, is zijn
                  innovatieve kijk op processen. Rob ziet kansen waar anderen knelpunten zien en weet
                  deze om te zetten in slimme, efficiënte oplossingen die direct bijdragen aan hogere
                  marges en betere prestaties. Een impactmaker pur sang!&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">Robert van Sligter</p>
                  <p className="text-gray-400 text-sm">CEO &amp; Eigenaar &middot; Interfilling B.V.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary-500/50 mb-4" />
                <p className="text-gray-300 italic leading-relaxed mb-6 flex-grow">
                  &ldquo;Ik werk momenteel prettig samen met Rob bij Interfilling.
                  Hij is een fijne interim collega die kritisch meedenkt en zich altijd
                  met volle inzet inzet voor het team. Betrouwbaar en heel betrokken.&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">Kelly van Loon</p>
                  <p className="text-gray-400 text-sm">General Manager &middot; Interfilling B.V.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="text-center mt-8">
              <a
                href="https://www.linkedin.com/in/rob-derks-15900873/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Bekijk alle referenties op LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto">
          <Reveal direction="up">
            <div className="bg-bg-secondary border border-primary-500/20 rounded-2xl p-8 md:p-12 text-center">
              <Heart className="w-8 h-8 text-primary-500 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4 leading-relaxed">
                &ldquo;Ik ga pas weg als ik iets heb gevonden waar u morgen mee verder kunt.&rdquo;
              </blockquote>
              <p className="text-primary-500 font-semibold">
                &mdash; Rob Derks, oprichter Proces360
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benieuwd wat ik voor uw bedrijf kan betekenen?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Geen verkooppraatje. Gewoon een eerlijk gesprek over uw situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31854010752"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Bel Rob direct
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
