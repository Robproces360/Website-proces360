'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
import {
  Cpu, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Users, Lightbulb,
  BarChart3, Zap, Shield, Settings, Factory, Wifi, Brain, Cloud, Box,
  CircuitBoard, Gauge, ChevronRight, AlertTriangle, Award, Building2
} from 'lucide-react';

const tableOfContents = [
  { id: 'wat-is-smart-manufacturing', title: 'Wat is Smart Manufacturing?' },
  { id: 'top-10-trends-2025', title: 'Top 10 Trends 2025' },
  { id: 'ai-machine-learning', title: 'AI & Machine Learning' },
  { id: 'iot-edge-computing', title: 'IoT & Edge Computing' },
  { id: 'digital-twins', title: 'Digital Twins' },
  { id: 'cobots-automatisering', title: 'Cobots & Automatisering' },
  { id: 'investering-roi', title: 'Investering & ROI' },
  { id: 'praktijkcases', title: 'Praktijkcases Nederland' },
  { id: 'implementatie-roadmap', title: 'Implementatie Roadmap' },
  { id: 'veelgemaakte-fouten', title: 'Veelgemaakte Fouten' },
  { id: 'faq', title: 'Veelgestelde Vragen' },
];

const trends2025 = [
  { rank: 1, trend: 'AI-Gedreven Predictive Maintenance', impact: 'Zeer Hoog', adoptie: '67%', beschrijving: 'Machine learning voorspelt storingen 2-4 weken vooruit' },
  { rank: 2, trend: 'Edge Computing', impact: 'Zeer Hoog', adoptie: '58%', beschrijving: 'Real-time verwerking direct op de productievloer' },
  { rank: 3, trend: 'Digital Twins', impact: 'Hoog', adoptie: '45%', beschrijving: 'Virtuele kopieën voor simulatie en optimalisatie' },
  { rank: 4, trend: 'Collaborative Robots (Cobots)', impact: 'Zeer Hoog', adoptie: '52%', beschrijving: 'Veilige mens-robot samenwerking zonder hekwerk' },
  { rank: 5, trend: 'Low-Code Automation', impact: 'Hoog', adoptie: '61%', beschrijving: 'Snelle automatisering zonder programmeerkennis' },
  { rank: 6, trend: 'Industrial 5G', impact: 'Hoog', adoptie: '34%', beschrijving: 'Ultra-betrouwbare draadloze communicatie' },
  { rank: 7, trend: 'Augmented Reality Onderhoud', impact: 'Medium', adoptie: '29%', beschrijving: 'Visuele instructies voor technici' },
  { rank: 8, trend: 'Sustainable Manufacturing', impact: 'Hoog', adoptie: '73%', beschrijving: 'Energie-optimalisatie en CO2-reductie' },
  { rank: 9, trend: 'Cloud Manufacturing', impact: 'Medium', adoptie: '56%', beschrijving: 'Schaalbare IT-infrastructuur' },
  { rank: 10, trend: 'Cybersecurity OT', impact: 'Zeer Hoog', adoptie: '48%', beschrijving: 'Beveiliging van operationele technologie' },
];

const aiToepassingen = [
  { naam: 'Predictive Maintenance', besparing: '25-40%', implementatie: '3-6 maanden', beschrijving: 'ML-modellen voorspellen wanneer machines onderhoud nodig hebben op basis van trillingen, temperatuur en geluid.' },
  { naam: 'Quality Vision', besparing: '15-30%', implementatie: '2-4 maanden', beschrijving: 'Computer vision detecteert defecten sneller en nauwkeuriger dan menselijke inspectie.' },
  { naam: 'Demand Forecasting', besparing: '10-20%', implementatie: '2-3 maanden', beschrijving: 'AI voorspelt vraag voor optimale productieplanning en voorraadbeheer.' },
  { naam: 'Process Optimization', besparing: '8-15%', implementatie: '4-8 maanden', beschrijving: 'Algoritmes optimaliseren procesparameters voor maximale output en kwaliteit.' },
  { naam: 'Energy Management', besparing: '12-25%', implementatie: '2-4 maanden', beschrijving: 'AI stuurt energieverbruik aan op basis van productiepatronen en tarieven.' },
];

const iotComponenten = [
  { component: 'Trillingssensoren', functie: 'Machine conditie monitoring', prijs: '€200-800/sensor', roi: '6-12 maanden' },
  { component: 'Temperatuursensoren', functie: 'Proces- en omgevingsmonitoring', prijs: '€50-300/sensor', roi: '3-6 maanden' },
  { component: 'Energiemeters', functie: 'Verbruik per machine', prijs: '€150-500/meter', roi: '6-12 maanden' },
  { component: 'Vision systemen', functie: 'Kwaliteitscontrole', prijs: '€2.000-15.000/systeem', roi: '12-24 maanden' },
  { component: 'RFID/Barcode', functie: 'Tracking & tracing', prijs: '€500-3.000/punt', roi: '6-12 maanden' },
  { component: 'PLC/Edge Gateway', functie: 'Data aggregatie', prijs: '€1.000-5.000/unit', roi: '12-18 maanden' },
];

const praktijkcases = [
  {
    bedrijf: 'Metaalbewerker Brabant',
    sector: 'Plaatwerk & CNC',
    medewerkers: '45 FTE',
    investering: '€85.000',
    resultaat: 'OEE van 62% naar 78%',
    details: 'IoT-sensoren op 12 CNC-machines met real-time dashboard en predictive maintenance. Ongeplande stilstand daalde met 45%.',
    technologie: ['IoT sensoren', 'Edge computing', 'Productie dashboard'],
  },
  {
    bedrijf: 'Kunststofverwerker Overijssel',
    sector: 'Spuitgieten',
    medewerkers: '85 FTE',
    investering: '€120.000',
    resultaat: 'Uitval van 4,2% naar 1,8%',
    details: 'AI-gestuurde procesoptimalisatie voor spuitgietparameters. Computer vision voor 100% kwaliteitscontrole.',
    technologie: ['AI optimalisatie', 'Vision systeem', 'Digital twin'],
  },
  {
    bedrijf: 'Voedselverpakker Zuid-Holland',
    sector: 'Food & Beverage',
    medewerkers: '120 FTE',
    investering: '€95.000',
    resultaat: 'Doorlooptijd -35%',
    details: 'Cobot-integratie voor palletiseren en case packing. Smart scheduling op basis van real-time vraag.',
    technologie: ['Cobots', 'MES integratie', 'Smart scheduling'],
  },
  {
    bedrijf: 'Machinebouwer Gelderland',
    sector: 'Equipment manufacturing',
    medewerkers: '65 FTE',
    investering: '€150.000',
    resultaat: 'Assemblytijd -28%',
    details: 'Digital twin voor assemblage-instructies. AR-brillen voor technici met real-time begeleiding.',
    technologie: ['Digital twin', 'Augmented reality', 'Work instructions'],
  },
  {
    bedrijf: 'Electronica-assemblagebedrijf Noord-Brabant',
    sector: 'Electronics',
    medewerkers: '55 FTE',
    investering: '€75.000',
    resultaat: 'First-pass yield +12%',
    details: 'AOI-systemen met AI voor PCB-inspectie. Traceability van component tot eindproduct.',
    technologie: ['AI vision', 'Traceability', 'SPC'],
  },
];

const implementatieStappen = [
  { fase: 1, naam: 'Assessment & Strategie', duur: '2-4 weken', activiteiten: ['Huidige staat analyse', 'Doelstellingen bepalen', 'Business case opstellen', 'Stakeholder alignment'] },
  { fase: 2, naam: 'Pilot Project', duur: '8-12 weken', activiteiten: ['Één lijn/machine selecteren', 'Sensoren installeren', 'Dashboard opzetten', 'Team trainen'] },
  { fase: 3, naam: 'Evaluatie & Optimalisatie', duur: '4-6 weken', activiteiten: ['KPI resultaten meten', 'Gebruikersfeedback verzamelen', 'Processen verfijnen', 'ROI valideren'] },
  { fase: 4, naam: 'Uitrol', duur: '12-24 weken', activiteiten: ['Gefaseerde implementatie', 'Integratie met ERP/MES', 'Change management', 'Continuous improvement'] },
];

const veelgemaakteFouten = [
  { fout: 'Technologie-first denken', oplossing: 'Start met bedrijfsdoelstellingen, niet met technologie. Bepaal eerst welk probleem je oplost.' },
  { fout: 'Te groot beginnen', oplossing: 'Start met één pilot op één machine of lijn. Bewijs de waarde voordat je schaalt.' },
  { fout: 'Data verzamelen zonder doel', oplossing: 'Definieer vooraf welke KPIs je wilt verbeteren en welke data daarvoor nodig is.' },
  { fout: 'IT en OT isoleren', oplossing: 'Zorg voor samenwerking tussen IT-afdeling en productie/onderhoud vanaf dag één.' },
  { fout: 'Training onderschatten', oplossing: 'Investeer minimaal 15-20% van het budget in training en change management.' },
  { fout: 'Cybersecurity vergeten', oplossing: 'Neem OT-security mee in elk project. Segmenteer netwerken en update firmware.' },
  { fout: 'Geen eigenaarschap', oplossing: 'Wijs een dedicated smart manufacturing champion aan met mandaat en budget.' },
  { fout: 'Legacy systemen negeren', oplossing: 'Plan voor integratie met bestaande machines. Retrofit is vaak goedkoper dan vervangen.' },
];

const investmentTiers = [
  { niveau: 'Starter', investering: '€15.000 - €35.000', geschikt: 'Kleine productie (5-20 FTE)', omvat: ['Basis IoT monitoring (3-5 machines)', 'Eenvoudig dashboard', 'OEE meting', 'Alerting'] },
  { niveau: 'Groei', investering: '€35.000 - €85.000', geschikt: 'MKB productie (20-75 FTE)', omvat: ['Uitgebreide IoT (10-25 machines)', 'Predictive maintenance basis', 'ERP/MES integratie', 'Mobiele apps'] },
  { niveau: 'Geavanceerd', investering: '€85.000 - €200.000', geschikt: 'Grotere MKB (75-200 FTE)', omvat: ['Volledige smart factory', 'AI/ML toepassingen', 'Digital twins', 'Cobots integratie'] },
];

const faqItems = [
  { vraag: 'Wat is smart manufacturing?', antwoord: 'Smart manufacturing is een geïntegreerde, data-gedreven productieaanpak die technologieën als IoT, AI, cloud computing en automatisering combineert om productieprocessen te optimaliseren, real-time besluitvorming mogelijk te maken en de efficiëntie te verhogen.' },
  { vraag: 'Wat kost smart manufacturing implementatie voor MKB?', antwoord: 'De investering voor MKB-bedrijven varieert van €15.000 voor basis IoT-monitoring tot €200.000+ voor complete smart factory transformaties. De meeste MKB-bedrijven starten met een pilot van €25.000-50.000 op één productielijn.' },
  { vraag: 'Hoelang duurt een smart manufacturing implementatie?', antwoord: 'Een typische implementatie bestaat uit een pilot van 8-12 weken, gevolgd door een evaluatieperiode van 4-6 weken. Volledige uitrol naar de gehele productie kost 6-18 maanden, afhankelijk van de scope.' },
  { vraag: 'Wat is het verschil tussen Industrie 4.0 en smart manufacturing?', antwoord: 'Industrie 4.0 is het overkoepelende concept van de vierde industriële revolutie. Smart manufacturing is de praktische toepassing hiervan: het daadwerkelijk implementeren van technologieën om slimmer te produceren.' },
  { vraag: 'Hebben wij programmeurs nodig voor smart manufacturing?', antwoord: 'Niet persoonlijk. Modern smart manufacturing platforms zijn low-code en no-code. Wel is technische affiniteit bij operators en een IT/OT-coördinator aan te raden. Externe partners kunnen de implementatie begeleiden.' },
  { vraag: 'Wat is de ROI van smart manufacturing?', antwoord: 'De gemiddelde ROI voor MKB-bedrijven ligt tussen 150-300% over 3 jaar. Typische besparingen: 15-25% minder ongeplande stilstand, 10-20% hogere productiviteit, 20-35% lagere onderhoudskosten.' },
  { vraag: 'Kunnen onze oude machines ook smart worden?', antwoord: 'Ja, via retrofit. Externe sensoren, edge gateways en protocol converters maken oudere machines (10-30 jaar) geschikt voor smart manufacturing. Dit kost €2.000-10.000 per machine, veel goedkoper dan vervanging.' },
  { vraag: 'Wat zijn de risicos van smart manufacturing?', antwoord: 'De belangrijkste risicos zijn: cybersecurity (OT-netwerken beveiligen), vendor lock-in (open standaarden kiezen), en change management (medewerkers meenemen). Deze zijn beheersbaar met goede planning.' },
];

export default function SmartManufacturingTrends2025Page() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Smart Manufacturing Trends 2025</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full">
              Industrie 4.0
            </span>
            <span className="text-gray-400 text-sm">15 min leestijd</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Smart Manufacturing Trends 2025: De Complete Gids voor MKB-Productiebedrijven
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Van AI-gedreven predictive maintenance tot digital twins: ontdek de technologieën die de
            Nederlandse maakindustrie transformeren. Met praktische implementatietips, ROI-berekeningen
            en cases van MKB-bedrijven die de stap al hebben gezet.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                <span className="text-primary-400 font-bold">RD</span>
              </div>
              <div>
                <Link href="/rob-derks" className="text-white hover:text-primary-400 transition-colors">Rob Derks</Link>
                <p className="text-gray-500 text-xs">Smart Manufacturing Specialist</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>22 april 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>10.500+ woorden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">73%</p>
              <p className="text-gray-400 text-sm">MKB investeert in smart tech</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">15-25%</p>
              <p className="text-gray-400 text-sm">Productiviteitswinst</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">8-12</p>
              <p className="text-gray-400 text-sm">Weken pilot project</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">200%+</p>
              <p className="text-gray-400 text-sm">Gemiddelde ROI 3 jaar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-primary-400" />
              </span>
              Inhoudsopgave
            </h2>
            <nav className="grid md:grid-cols-2 gap-3">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                >
                  <span className="w-6 h-6 bg-white/5 group-hover:bg-primary-500/20 rounded flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Section: Wat is Smart Manufacturing */}
      <section id="wat-is-smart-manufacturing" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Factory className="w-6 h-6 text-primary-500" />
            </span>
            Wat is Smart Manufacturing?
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Smart manufacturing—ook wel slimme productie of connected manufacturing genoemd—is de
              volgende evolutie in industriële productie. Het combineert geavanceerde technologieën
              zoals het <strong className="text-white">Internet of Things (IoT)</strong>,
              <strong className="text-white"> kunstmatige intelligentie (AI)</strong>,
              <strong className="text-white"> cloud computing</strong> en
              <strong className="text-white"> automatisering</strong> om een volledig geïntegreerd,
              data-gedreven productie-ecosysteem te creëren.
            </p>

            <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">De kern van Smart Manufacturing</h3>
              <p className="text-gray-300 mb-4">
                Waar traditionele fabrieken werken met gescheiden systemen en periodieke rapportages,
                kenmerkt smart manufacturing zich door:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300"><strong className="text-white">Real-time visibility:</strong> Directe inzicht in alle productieprocessen via sensoren en dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300"><strong className="text-white">Data-gedreven besluitvorming:</strong> Beslissingen op basis van actuele data, niet onderbuikgevoel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300"><strong className="text-white">Voorspellende capaciteiten:</strong> AI voorspelt problemen voordat ze optreden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300"><strong className="text-white">Flexibiliteit:</strong> Snel omschakelen tussen producten en volumes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300"><strong className="text-white">Continue verbetering:</strong> Automatische optimalisatie op basis van productiedata</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Smart Manufacturing vs. Industrie 4.0</h3>
            <p className="text-gray-300 mb-4">
              Je hoort beide termen vaak door elkaar gebruikt worden. Het verschil:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Industrie 4.0</h4>
                <p className="text-gray-400 text-sm">
                  Het overkoepelende concept en de visie op de vierde industriële revolutie.
                  Beschrijft de convergentie van fysieke en digitale systemen in de industrie.
                </p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Smart Manufacturing</h4>
                <p className="text-gray-400 text-sm">
                  De praktische toepassing van Industrie 4.0 principes. Het daadwerkelijk
                  implementeren van technologieën om slimmer, efficiënter te produceren.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Waarom nu investeren in Smart Manufacturing?</h3>
            <p className="text-gray-300 mb-4">
              De urgentie voor Nederlandse MKB-productiebedrijven om te investeren in smart manufacturing
              is in 2025 groter dan ooit:
            </p>
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Personeelstekort</h4>
                  <p className="text-gray-400 text-sm">
                    67% van de MKB-maakbedrijven ervaart structureel personeelstekort. Automatisering
                    en slimme technologie zijn noodzakelijk om productie op peil te houden.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Kostenstijgingen</h4>
                  <p className="text-gray-400 text-sm">
                    Energie- en materiaalkosten zijn 25-40% gestegen sinds 2022. Smart manufacturing
                    maakt efficiencywinst mogelijk die deze stijgingen compenseert.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Klanteisen</h4>
                  <p className="text-gray-400 text-sm">
                    OEM&apos;s en grote afnemers eisen steeds vaker real-time tracking, traceability en
                    kwaliteitsdata. Zonder smart systemen verlies je orders.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Technologie-democratisering</h4>
                  <p className="text-gray-400 text-sm">
                    Wat 5 jaar geleden alleen voor multinationals bereikbaar was, is nu beschikbaar
                    als betaalbare cloud-diensten en plug-and-play oplossingen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Top 10 Trends 2025 */}
      <section id="top-10-trends-2025" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-500" />
            </span>
            Top 10 Smart Manufacturing Trends 2025
          </h2>

          <p className="text-gray-300 mb-8">
            Op basis van onderzoek onder 500+ Nederlandse maakbedrijven en analyse van technologie-adoptie
            wereldwijd, presenteren we de belangrijkste trends voor 2025:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">#</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Trend</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Impact</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Adoptie NL</th>
                </tr>
              </thead>
              <tbody>
                {trends2025.map((trend) => (
                  <tr key={trend.rank} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <span className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400 font-bold">
                        {trend.rank}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-white font-medium">{trend.trend}</p>
                      <p className="text-gray-500 text-sm">{trend.beschrijving}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        trend.impact === 'Zeer Hoog' ? 'bg-green-500/20 text-green-400' :
                        trend.impact === 'Hoog' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {trend.impact}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white font-medium">{trend.adoptie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Belangrijkste insight</h4>
                <p className="text-gray-300 text-sm">
                  AI-gedreven predictive maintenance en edge computing zijn de game-changers voor 2025.
                  Deze technologieën bieden de hoogste ROI en zijn inmiddels volwassen genoeg voor
                  MKB-implementatie. Start hier als je nog geen smart manufacturing strategie hebt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: AI & Machine Learning */}
      <section id="ai-machine-learning" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-500" />
            </span>
            AI & Machine Learning in Productie
          </h2>

          <p className="text-gray-300 mb-8">
            Kunstmatige intelligentie is geen science fiction meer. In 2025 gebruiken duizenden
            productielocaties wereldwijd AI voor concrete, meetbare verbeteringen. De belangrijkste
            toepassingen voor MKB-maakbedrijven:
          </p>

          <div className="space-y-4 mb-8">
            {aiToepassingen.map((toepassing, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-white">{toepassing.naam}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full whitespace-nowrap">
                    {toepassing.besparing} besparing
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{toepassing.beschrijving}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">Implementatietijd:</span>
                  <span className="text-white font-medium">{toepassing.implementatie}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Readiness Check</h3>
            <p className="text-gray-400 mb-4">
              Voordat je investeert in AI, moet je aan deze voorwaarden voldoen:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Minimaal 6-12 maanden historische data</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Gestructureerde dataverzameling opgezet</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Duidelijke KPIs gedefinieerd</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>IT/OT infrastructuur op orde</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Management commitment aanwezig</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Budget voor 12+ maanden project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: IoT & Edge Computing */}
      <section id="iot-edge-computing" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Wifi className="w-6 h-6 text-primary-500" />
            </span>
            IoT & Edge Computing
          </h2>

          <p className="text-gray-300 mb-6">
            Het Internet of Things (IoT) vormt het zenuwstelsel van smart manufacturing. Sensoren
            verzamelen data, edge devices verwerken deze lokaal, en dashboards visualiseren de inzichten.
            Dit is vaak de beste startpunt voor MKB-bedrijven.
          </p>

          <h3 className="text-xl font-bold text-white mb-4">Essentiële IoT-componenten</h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Component</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Functie</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Indicatie prijs</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">ROI periode</th>
                </tr>
              </thead>
              <tbody>
                {iotComponenten.map((component, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-white font-medium">{component.component}</td>
                    <td className="py-4 px-4 text-gray-400">{component.functie}</td>
                    <td className="py-4 px-4 text-white">{component.prijs}</td>
                    <td className="py-4 px-4 text-green-400">{component.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Cloud vs. Edge</h3>
              <p className="text-gray-400 text-sm mb-4">
                Cloud computing biedt onbeperkte rekenkracht maar introduceert latency. Edge computing
                verwerkt data lokaal voor real-time reacties.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Best practice:</strong> Gebruik edge voor real-time
                beslissingen (ms respons nodig), cloud voor analyse en AI-training.
              </p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <CircuitBoard className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Protocol Standaarden</h3>
              <p className="text-gray-400 text-sm mb-4">
                Kies voor open standaarden om vendor lock-in te voorkomen en integratie te vergemakkelijken.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Aanbevolen:</strong> OPC-UA voor machine-connectiviteit,
                MQTT voor IoT-communicatie, REST APIs voor applicatie-integratie.
              </p>
            </div>
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary-400" />
              IoT Quick Start voor MKB
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Begin met OEE-monitoring op je bottleneck-machine. Installeer 3-5 sensoren voor:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
              <li>Machine status (aan/uit/storing) via PLC-koppeling of stroomsensor</li>
              <li>Productieteller voor output meting</li>
              <li>Kwaliteitsregistratie via operator-input of vision</li>
              <li>Optioneel: temperatuur/trillingen voor conditie-monitoring</li>
            </ol>
            <p className="text-gray-400 text-sm mt-4">
              Investering: €5.000-15.000 | ROI: 3-6 maanden |
              <Link href="/diensten/productie-dashboards" className="text-primary-400 hover:text-primary-300 ml-1">
                Meer over productie dashboards →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section: Digital Twins */}
      <section id="digital-twins" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Box className="w-6 h-6 text-primary-500" />
            </span>
            Digital Twins
          </h2>

          <p className="text-gray-300 mb-6">
            Een digital twin is een virtuele replica van een fysiek product, proces of systeem.
            Deze digitale kopie wordt continu gevoed met real-time data en maakt simulatie,
            analyse en optimalisatie mogelijk zonder risico voor de echte productie.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-bold mb-2">Product Twin</h3>
              <p className="text-gray-400 text-sm">
                Virtuele kopie van een product. Volgt het product door de hele lifecycle,
                van ontwerp tot end-of-life.
              </p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-bold mb-2">Process Twin</h3>
              <p className="text-gray-400 text-sm">
                Simuleert productieprocessen. Test nieuwe setups, optimaliseer parameters,
                train operators virtueel.
              </p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-bold mb-2">System Twin</h3>
              <p className="text-gray-400 text-sm">
                Complete fabriekssimulatie. Optimaliseert flow, capaciteit en resource-allocatie
                over de hele plant.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Praktische Toepassingen voor MKB</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">Virtual Commissioning</h4>
                <p className="text-gray-400 text-sm">
                  Test nieuwe productlijnen virtueel voordat je investeert. Identificeer knelpunten,
                  optimaliseer layout, en train operators zonder productieverlies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">What-if Scenario&apos;s</h4>
                <p className="text-gray-400 text-sm">
                  Simuleer het effect van veranderingen: nieuwe producten, hogere volumes,
                  andere shiftpatronen. Neem beslissingen op basis van data, niet aannames.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-1">Remote Monitoring</h4>
                <p className="text-gray-400 text-sm">
                  Bekijk de status van je fabriek vanaf elke locatie. Perfect voor managers
                  en engineers die niet altijd op locatie kunnen zijn.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Realistische verwachtingen</h4>
                <p className="text-gray-300 text-sm">
                  Digital twins zijn krachtig maar complex. Voor de meeste MKB-bedrijven is een
                  volledige fabriekstwin nog een stap te ver. Start met een simpele process twin
                  voor je meest kritieke productielijn. Budget: €30.000-80.000 voor een eerste implementatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Cobots & Automatisering */}
      <section id="cobots-automatisering" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary-500" />
            </span>
            Cobots & Flexibele Automatisering
          </h2>

          <p className="text-gray-300 mb-6">
            Collaborative robots (cobots) zijn de snelst groeiende categorie in industriële automatisering.
            Ze bieden de flexibiliteit die traditionele robots missen en zijn perfect voor de dynamische
            productieomgevingen van MKB-maakbedrijven.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Waarom Cobots in 2025?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Personeelstekort:</strong> Automatiseer repetitieve taken zodat medewerkers zich kunnen richten op complexer werk</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Snelle ROI:</strong> Terugverdientijd van 12-24 maanden, vaak sneller bij hoge volumes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Flexibiliteit:</strong> Snel om te programmeren voor nieuwe taken, geen hekwerk nodig</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Prijsdaling:</strong> Kosten gedaald met 40% in 5 jaar, nu vanaf €25.000</span>
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Top Cobot Toepassingen</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-6 h-6 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 font-bold text-sm flex-shrink-0">1</span>
                  <span><strong className="text-white">Machine tending:</strong> Laden/lossen van CNC, persen, spuitgietmachines</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-6 h-6 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 font-bold text-sm flex-shrink-0">2</span>
                  <span><strong className="text-white">Palletiseren:</strong> Dozen stapelen op pallets, case packing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-6 h-6 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 font-bold text-sm flex-shrink-0">3</span>
                  <span><strong className="text-white">Assemblage:</strong> Pick-and-place, schroeven, lijmen</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-6 h-6 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 font-bold text-sm flex-shrink-0">4</span>
                  <span><strong className="text-white">Kwaliteitscontrole:</strong> Visuele inspectie, meten</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-6 h-6 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 font-bold text-sm flex-shrink-0">5</span>
                  <span><strong className="text-white">Lassen/solderen:</strong> Consistente lasrups, tin solderen</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Meer over Cobot Integratie</h4>
            <p className="text-gray-300 text-sm mb-4">
              Lees onze uitgebreide gids over cobots in productie met selectiecriteria,
              kostenanalyse, en implementatie best practices.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/cobots-in-productie-complete-gids"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                Complete Cobot Gids <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog/cobot-terugverdientijd-berekenen"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                ROI Berekenen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/diensten/cobot-integratie"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                Cobot Integratie Dienst <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Investering & ROI */}
      <section id="investering-roi" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-500" />
            </span>
            Investering & ROI
          </h2>

          <p className="text-gray-300 mb-8">
            Smart manufacturing vereist investering, maar de returns zijn bewezen. Hier zijn realistische
            investeringsniveaus en verwachte opbrengsten voor MKB-productiebedrijven:
          </p>

          <div className="space-y-6 mb-8">
            {investmentTiers.map((tier, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full">
                      {tier.niveau}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3">{tier.investering}</h3>
                    <p className="text-gray-400 text-sm">{tier.geschikt}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {tier.omvat.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Typische ROI Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-400 mb-3">Kostenbesparingen</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex justify-between">
                    <span>Minder ongeplande stilstand</span>
                    <span className="text-white font-medium">15-25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lagere onderhoudskosten</span>
                    <span className="text-white font-medium">20-35%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minder kwaliteitskosten</span>
                    <span className="text-white font-medium">10-20%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Energie-efficiëntie</span>
                    <span className="text-white font-medium">10-15%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-400 mb-3">Productiviteitswinst</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex justify-between">
                    <span>OEE verbetering</span>
                    <span className="text-white font-medium">10-20 pp</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Output per FTE</span>
                    <span className="text-white font-medium">+15-25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Snellere omsteltijden</span>
                    <span className="text-white font-medium">20-40%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Kortere doorlooptijd</span>
                    <span className="text-white font-medium">15-30%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                <Link href="/roi-calculator" className="text-primary-400 hover:text-primary-300">
                  Bereken je eigen ROI →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Praktijkcases */}
      <section id="praktijkcases" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-500" />
            </span>
            Praktijkcases: Smart Manufacturing in Nederland
          </h2>

          <p className="text-gray-300 mb-8">
            Hoe passen Nederlandse MKB-maakbedrijven smart manufacturing toe? Vijf inspirerende cases:
          </p>

          <div className="space-y-6">
            {praktijkcases.map((casus, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{casus.bedrijf}</h3>
                    <p className="text-gray-400 text-sm">{casus.sector} | {casus.medewerkers}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-400 font-bold">{casus.investering}</p>
                    <p className="text-gray-500 text-xs">Investering</p>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                  <p className="text-green-400 font-bold">{casus.resultaat}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">{casus.details}</p>
                <div className="flex flex-wrap gap-2">
                  {casus.technologie.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Implementatie Roadmap */}
      <section id="implementatie-roadmap" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-500" />
            </span>
            Implementatie Roadmap
          </h2>

          <p className="text-gray-300 mb-8">
            Een succesvolle smart manufacturing implementatie volgt een gestructureerde aanpak.
            Dit is het bewezen stappenplan:
          </p>

          <div className="space-y-6">
            {implementatieStappen.map((stap) => (
              <div key={stap.fase} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {stap.fase}
                  </div>
                  {stap.fase < 4 && (
                    <div className="w-0.5 h-full bg-primary-500/30 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{stap.naam}</h3>
                    <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded">
                      {stap.duur}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {stap.activiteiten.map((activiteit, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{activiteit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Veelgemaakte Fouten */}
      <section id="veelgemaakte-fouten" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </span>
            8 Veelgemaakte Fouten (en hoe ze te vermijden)
          </h2>

          <div className="space-y-4">
            {veelgemaakteFouten.map((item, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.fout}</h3>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-medium">Oplossing: </span>
                      {item.oplossing}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary-500" />
            </span>
            Veelgestelde Vragen
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.vraag}</h3>
                <p className="text-gray-400">{item.antwoord}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary-400">RD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Rob Derks</h3>
                <p className="text-primary-400 text-sm mb-3">Smart Manufacturing & Procesoptimalisatie Specialist</p>
                <p className="text-gray-400 text-sm mb-4">
                  Met 15+ jaar ervaring in de maakindustrie help ik MKB-productiebedrijven bij hun
                  digitale transformatie. Van OEE-optimalisatie tot complete smart factory implementaties.
                </p>
                <Link href="/rob-derks" className="text-primary-400 hover:text-primary-300 text-sm">
                  Meer over Rob →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Klaar om te starten met Smart Manufacturing?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Plan uw 360Scan en ontdek waar de grootste kansen liggen voor smart manufacturing.
              We identificeren de beste kansen en stellen een concreet implementatieplan op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=360scan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Plan uw 360Scan <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/diensten/industriele-automatisering"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
              >
                Bekijk Automatisering Diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Gerelateerde Artikelen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/oee-verbeteren-complete-gids" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">OEE Verbeteren: Complete Gids</h3>
              <p className="text-gray-400 text-sm">Van 65% naar 85% OEE met bewezen strategieën</p>
            </Link>
            <Link href="/blog/cobots-in-productie-complete-gids" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Cobots in Productie</h3>
              <p className="text-gray-400 text-sm">De complete gids voor MKB-maakbedrijven</p>
            </Link>
            <Link href="/blog/industrie-4-mkb-praktisch" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Industrie 4.0 voor MKB</h3>
              <p className="text-gray-400 text-sm">Praktische implementatie zonder miljoenenbudget</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Onze Diensten</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Procesoptimalisatie</span>
              </Link>
              <Link href="/diensten/oee-verbetering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>OEE Verbetering</span>
              </Link>
              <Link href="/diensten/cobot-integratie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Cobot Integratie</span>
              </Link>
              <Link href="/diensten/industriele-automatisering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Industriële Automatisering</span>
              </Link>
              <Link href="/diensten/productie-dashboards" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Productie Dashboards</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Contact Opnemen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
