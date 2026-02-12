'use client';

import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import Magnetic from '@/components/shared/Magnetic';
import Image from 'next/image';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Factory,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Settings,
  Target,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
} from 'lucide-react';

/* PSYCHOLOGISCH PRINCIPE: Authority + Vulnerability
   - Niet opscheppen met nep-stats maar eerlijk vertellen wie Rob is
   - Consistent u-toon
   - Citaten die expertise tonen + bescheidenheid
   - CTA's persoonlijk: bel Rob, WhatsApp Rob */

const expertStats = [
  { value: '22+', label: 'Jaar productie-ervaring', icon: Calendar },
  { value: '15-30%', label: 'Meer output gemiddeld', icon: TrendingUp },
  { value: '€69K-247K', label: 'Besparingen per klant', icon: Target },
  { value: '100%', label: 'Eerlijk advies', icon: Heart },
];

const expertiseAreas = [
  {
    title: 'OEE-verbetering',
    icon: TrendingUp,
    description: 'Systematisch meten en verbeteren van uw Overall Equipment Effectiveness. Gemiddeld 15-30% meer output uit dezelfde machines.',
    keywords: ['OEE monitoring', 'Beschikbaarheid', 'Prestatie-analyse', 'Kwaliteitsverbetering'],
  },
  {
    title: 'Cobot & Robot Integratie',
    icon: Settings,
    description: 'Merkonafhankelijke selectie en implementatie van collaborative robots. Van haalbaarheid tot programmering, één aanspreekpunt.',
    keywords: ['Techman', 'Doosan', 'FANUC', 'ABB', 'Universal Robots'],
  },
  {
    title: 'Procesoptimalisatie',
    icon: Target,
    description: 'Lean manufacturing met focus op verspilling elimineren, doorlooptijd verkorten en bottlenecks aanpakken. Praktisch, niet theoretisch.',
    keywords: ['Lean Manufacturing', 'Kaizen', 'Value Stream Mapping', 'Bottleneck-analyse'],
  },
  {
    title: 'Industriële Automatisering',
    icon: Factory,
    description: 'Van PLC-programmering tot complete lijnautomatisering. Systeemintegratie en retrofit van bestaande installaties.',
    keywords: ['PLC', 'SCADA', 'MES-integratie', 'Systeemkoppeling'],
  },
  {
    title: 'Productie Dashboards',
    icon: Users,
    description: 'Real-time monitoring en KPI-visualisatie. Zodat u beslissingen neemt op basis van data, niet op gevoel.',
    keywords: ['Real-time data', 'KPI-visualisatie', 'Rapportage', 'Data-analyse'],
  },
  {
    title: 'Interim Management',
    icon: Briefcase,
    description: 'Ervaren interim operations/production manager. Direct inzetbaar voor tijdelijke versterking of verandertrajecten.',
    keywords: ['Operations', 'Verandermanagement', 'Teamontwikkeling'],
  },
];

const expertStatements = [
  {
    quote: 'OEE is niet zomaar een KPI — het is de thermometer van uw productie. Een gemiddeld MKB scoort 45-55%, terwijl world-class 85%+ betekent. Elk procentpunt verbetering is direct zichtbaar in uw resultaat.',
    topic: 'Over OEE',
  },
  {
    quote: 'De grootste fout bij cobot-implementatie is denken in vervanging van mensen. De kracht zit in samenwerking: laat de robot het repetitieve werk doen, zodat uw mensen hun expertise kunnen inzetten waar het écht telt.',
    topic: 'Over Cobots',
  },
  {
    quote: 'Ik heb zelf jarenlang aan machines gestaan en ploegendiensten gedraaid. Daardoor weet ik: de beste verbeterideeën komen van de operators zelf. Mijn rol is om die kennis te structureren en te vertalen naar concrete businesscases.',
    topic: 'Over procesoptimalisatie',
  },
  {
    quote: 'Automatisering is geen doel op zich — het is een middel om uw mensen waardevoller werk te laten doen en uw concurrentiepositie te versterken. De ROI moet helder zijn vóór de investering.',
    topic: 'Over automatisering',
  },
];

export default function RobDerksPage() {
  return (
    <main id="main-content" className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <Reveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                  <Factory className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-semibold text-primary-500">22+ jaar op de productievloer</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Rob Derks
                  <span className="block text-2xl md:text-3xl mt-2 gradient-text">
                    Van operator tot uw procesverbeteraar
                  </span>
                </h1>

                <div className="space-y-4 text-lg text-gray-300 mb-8 leading-relaxed">
                  <p>
                    In 22 jaar heb ik alle kanten van de productie gezien &mdash; van operator
                    aan de lijn tot operations manager met eindverantwoordelijkheid. Ik heb
                    zelf aan machines gestaan, ploegendiensten gedraaid, en teams aangestuurd.
                  </p>
                  <p>
                    Ik ken de druk van deadlines, de frustratie van onverklaarbare stilstanden,
                    en de uitdaging om met beperkte middelen maximaal resultaat te behalen.
                    Daarom werk ik niet vanuit een ivoren toren, maar sta ik naast u op de werkvloer.
                  </p>
                  <p>
                    Mijn aanpak? Eerst problemen zichtbaar maken &mdash; met data, niet met
                    onderbuikgevoel. Daarna samen oplossen. Van analyse tot implementatie,
                    van A tot Z.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span>Oss, Nederland</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Factory className="w-5 h-5 text-primary-500" />
                    <span>MKB-maakbedrijven</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Magnetic>
                    <a
                      href="tel:+31854010752"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Bel Rob direct
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="https://wa.me/31630185844"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      WhatsApp
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="https://www.linkedin.com/in/rob-derks-15900873/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Magnetic>
                </div>
              </div>
            </Reveal>

            {/* Right: Photo */}
            <Reveal direction="right">
              <div className="relative max-w-sm mx-auto">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-dark-800 border border-white/10">
                  <Image
                    src="/images/rob-derks.jpg"
                    alt="Rob Derks - Oprichter Proces360"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {expertStats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <HoverScale>
                  <div className="text-center">
                    <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </HoverScale>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Statements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hoe ik er <span className="gradient-text">tegenaan kijk</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Inzichten uit 22+ jaar op de productievloer
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {expertStatements.map((statement, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <HoverScale>
                  <div className="bg-bg-secondary border border-white/10 rounded-xl p-8 h-full">
                    <Quote className="w-10 h-10 text-primary-500/50 mb-4" />
                    <p className="text-lg text-gray-300 italic mb-4 leading-relaxed">
                      &ldquo;{statement.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-sm text-primary-500 font-semibold">{statement.topic}</span>
                    </div>
                  </div>
                </HoverScale>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Referenties */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wat opdrachtgevers <span className="gradient-text">zeggen</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Echte referenties van mensen met wie ik samenwerk
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <HoverScale>
                <div className="bg-bg-primary border border-white/10 rounded-xl p-8 h-full flex flex-col">
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
              </HoverScale>
            </Reveal>

            <Reveal delay={0.2}>
              <HoverScale>
                <div className="bg-bg-primary border border-white/10 rounded-xl p-8 h-full flex flex-col">
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
              </HoverScale>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
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

      {/* Expertise Areas */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Expertise<span className="gradient-text">gebieden</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Specialisaties opgebouwd door 22 jaar hands-on ervaring
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <HoverScale>
                  <div className="bg-bg-primary border border-white/10 rounded-xl p-6 h-full hover:border-primary-500/50 transition-colors">
                    <area.icon className="w-12 h-12 text-primary-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-400 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverScale>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benieuwd wat ik voor uw <span className="gradient-text">productie</span> kan betekenen?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Geen verkooppraatje. Gewoon een eerlijk gesprek over uw situatie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Magnetic>
                  <a
                    href="tel:+31854010752"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    085 - 401 0752
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://wa.me/31630185844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    WhatsApp
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="mailto:info@proces360.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@proces360.com
                  </a>
                </Magnetic>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  Reactie binnen 24 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  Merkonafhankelijk advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  Eerlijk, ook als het tegenvalt
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
