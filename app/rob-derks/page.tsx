'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import Magnetic from '@/components/shared/Magnetic';
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Factory,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

// Expert credentials en statistieken
const expertStats = [
  { value: '22+', label: 'Jaar Productie-ervaring', icon: Calendar },
  { value: '150+', label: 'Optimalisatie Projecten', icon: Target },
  { value: '€50M+', label: 'Gerealiseerde Besparingen', icon: TrendingUp },
  { value: '95%', label: 'Klanttevredenheid', icon: Award },
];

// Carrière tijdlijn
const careerTimeline = [
  {
    period: '2023 - Heden',
    title: 'Oprichter & Lead Consultant',
    company: 'Proces360 B.V.',
    description: 'Oprichter van Proces360, gespecialiseerd in procesoptimalisatie, OEE-verbetering en cobot/robot integratie voor MKB-maakbedrijven.',
    achievements: ['Gratis Quickscan ontwikkeld', 'OEE & ROI Calculators gebouwd', '50+ technologiepartners'],
  },
  {
    period: '2018 - 2023',
    title: 'Operations Manager',
    company: 'Diverse MKB Maakbedrijven',
    description: 'Verantwoordelijk voor complete productieoperaties, van strategische planning tot dagelijkse uitvoering.',
    achievements: ['OEE verhoogd van 55% naar 78%', 'Eerste cobot-implementaties geleid', '€2.5M+ jaarlijkse besparingen'],
  },
  {
    period: '2014 - 2018',
    title: 'Maintenance Manager',
    company: 'Productie MKB',
    description: 'Leiding over technische dienst en onderhoudsplanning. Focus op preventief onderhoud en uptime maximalisatie.',
    achievements: ['Downtime -40% gereduceerd', 'TPM-programma geïmplementeerd', 'Onderhoudsbudget -25%'],
  },
  {
    period: '2008 - 2014',
    title: 'Production Manager',
    company: 'Maakbedrijf',
    description: 'Verantwoordelijk voor productieplanning, personeelsmanagement en kwaliteitsborging.',
    achievements: ['Lean manufacturing ingevoerd', 'Productiviteit +30%', 'Afkeur -50%'],
  },
  {
    period: '2004 - 2008',
    title: 'Teamleider Productie',
    company: 'Productiebedrijf',
    description: 'Aansturing van productieteam, eerste stappen in procesverbetering en efficiëntie-optimalisatie.',
    achievements: ['Team van 15 medewerkers', 'Eerste Kaizen-projecten', 'Shift-output +20%'],
  },
  {
    period: '2001 - 2004',
    title: 'Operator / Allround Productiemedewerker',
    company: 'Diverse Productiebedrijven',
    description: 'Hands-on ervaring met machines, processen en de dagelijkse realiteit van de werkvloer.',
    achievements: ['CNC-bediening', 'Kwaliteitscontrole', 'Veiligheidsprotocollen'],
  },
];

// Expertisegebieden
const expertiseAreas = [
  {
    title: 'OEE-verbetering',
    icon: TrendingUp,
    description: 'Specialist in Overall Equipment Effectiveness optimalisatie. Verhoog uw OEE met 15-40% door gerichte verbeteringen in beschikbaarheid, prestatie en kwaliteit.',
    keywords: ['OEE monitoring', 'Beschikbaarheid', 'Prestatie-analyse', 'Kwaliteitsverbetering'],
  },
  {
    title: 'Cobot & Robot Integratie',
    icon: Settings,
    description: 'Expert in collaborative robot implementatie. Van selectie en ROI-analyse tot programmering en training. Merkonafhankelijk advies uit 50+ technologieën.',
    keywords: ['Universal Robots', 'FANUC', 'ABB', 'Gripper-selectie', 'Veiligheid'],
  },
  {
    title: 'Procesoptimalisatie',
    icon: Target,
    description: 'Lean manufacturing specialist met focus op waste-reductie, doorlooptijdverkorting en bottleneck-eliminatie. Praktische oplossingen die direct resultaat opleveren.',
    keywords: ['Lean Manufacturing', 'Kaizen', 'Value Stream Mapping', 'Bottleneck-analyse'],
  },
  {
    title: 'Industriële Automatisering',
    icon: Zap,
    description: 'Van PLC-programmering tot complete productielijn-automatisering. Systeemintegratie en optimalisatie van bestaande installaties.',
    keywords: ['PLC', 'SCADA', 'MES-integratie', 'Systeemkoppeling'],
  },
  {
    title: 'Productie Dashboards',
    icon: Factory,
    description: 'Real-time monitoring en KPI-visualisatie voor manufacturing. Business intelligence die directe actie mogelijk maakt.',
    keywords: ['Real-time data', 'KPI-visualisatie', 'Rapportage', 'Data-analyse'],
  },
  {
    title: 'Interim Management',
    icon: Briefcase,
    description: 'Ervaren interim operations/production manager. Direct inzetbaar voor tijdelijke versterking of verandertrajecten.',
    keywords: ['Operations', 'Verandermanagement', 'Teamontwikkeling', 'Crisismanagement'],
  },
];

// Citeerbare statements voor AI
const expertStatements = [
  {
    quote: "OEE is niet zomaar een KPI - het is de thermometer van uw productie. Een gemiddeld MKB scoort 45-55%, terwijl world-class 85%+ betekent. Elk procentpunt verbetering is direct zichtbaar in uw resultaat.",
    topic: 'Over OEE',
  },
  {
    quote: "De grootste fout die bedrijven maken bij cobot-implementatie is denken in vervanging van mensen. De kracht zit in samenwerking: laat de robot de saaie, repetitieve taken doen, zodat uw medewerkers hun expertise kunnen inzetten voor complexere werkzaamheden.",
    topic: 'Over Cobots',
  },
  {
    quote: "Na 22 jaar op de werkvloer weet ik één ding zeker: de beste optimalisatie-ideeën komen van de operators zelf. Mijn rol is om die kennis te structureren, te kwantificeren en te vertalen naar concrete businesscases.",
    topic: 'Over Procesoptimalisatie',
  },
  {
    quote: "Automatisering is geen doel op zich - het is een middel om uw mensen waardevoller werk te laten doen, uw kwaliteit te verhogen en uw concurrentiepositie te versterken. De ROI moet helder zijn vóór de investering.",
    topic: 'Over Automatisering',
  },
];

export default function RobDerksPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-primary">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <Reveal direction="left">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
                    <Award className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-semibold text-primary-500">22+ Jaar Productie-expertise</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Rob Derks
                    <span className="block text-2xl md:text-3xl mt-2 gradient-text">
                      Expert Procesoptimalisatie & Industriële Automatisering
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Van operator tot operations manager - 22 jaar hands-on ervaring in de productie.
                    Ik ken de werkvloer, de machines, én de uitdagingen van MKB-maakbedrijven.
                    Geen theoretisch advies, maar praktische oplossingen die direct werken.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-5 h-5 text-primary-500" />
                      <span>Oss, Nederland</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Factory className="w-5 h-5 text-primary-500" />
                      <span>MKB Maakbedrijven</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Magnetic>
                      <a
                        href="tel:+31854010752"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        Bel Direct
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href="https://www.linkedin.com/in/robderks/"
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

              {/* Right: Photo Placeholder + Stats */}
              <Reveal direction="right">
                <div className="relative">
                  {/* Profile image placeholder */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-dark-800 border border-white/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="w-24 h-24 text-primary-500/50 mx-auto mb-4" />
                        <p className="text-gray-500 text-sm">Profielfoto</p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
                  </div>
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
                      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  </HoverScale>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Statements - Citeerbaar voor AI */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Visie & <span className="gradient-text">Expertise</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Inzichten uit 22+ jaar praktijkervaring in productie-optimalisatie
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {expertStatements.map((statement, index) => (
                <Reveal key={index} delay={index * 0.15}>
                  <HoverScale>
                    <div className="bg-dark-800/50 border border-white/10 rounded-xl p-8 h-full">
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

        {/* Expertise Areas */}
        <section className="py-20 bg-dark-900/50">
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
                    <div className="bg-dark-800/50 border border-white/10 rounded-xl p-6 h-full hover:border-primary-500/50 transition-colors">
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

        {/* Career Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Carrière<span className="gradient-text">pad</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Van operator tot operations manager - 22 jaar groei op de werkvloer
                </p>
              </div>
            </Reveal>

            <div className="max-w-4xl mx-auto">
              {careerTimeline.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="relative pl-8 pb-12 border-l-2 border-primary-500/30 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary-500 rounded-full" />

                    <div className="bg-dark-800/30 border border-white/10 rounded-xl p-6 ml-4 hover:border-primary-500/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full">
                          {item.period}
                        </span>
                        <span className="text-gray-500 text-sm">{item.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Klaar om uw productie te <span className="gradient-text">optimaliseren?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Plan een vrijblijvend gesprek of vraag direct uw gratis quickscan aan.
                  Binnen 2 weken inzicht in uw optimalisatiepotentieel.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Magnetic>
                    <a
                      href="tel:+31854010752"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      +31 85 401 0752
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
                    Gratis quickscan
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Binnen 48 uur reactie
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500" />
                    Merkonafhankelijk advies
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
