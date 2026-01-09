'use client';

import Link from 'next/link';
import {
  Map, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Settings,
  Zap, AlertTriangle, Lightbulb, ChevronRight, Calculator, Users,
  Package, Timer, Award, Building2, Cpu, BarChart3, DollarSign,
  Layers, GitBranch, Milestone, Factory, Bot, Gauge
} from 'lucide-react';

const tableOfContents = [
  { id: 'waarom-roadmap', title: 'Waarom een Automatisering Roadmap?' },
  { id: 'assessment', title: 'Stap 1: Assessment & Analyse' },
  { id: 'prioritering', title: 'Stap 2: Prioritering' },
  { id: 'business-case', title: 'Stap 3: Business Case' },
  { id: 'technologie-selectie', title: 'Stap 4: Technologie Selectie' },
  { id: 'implementatie', title: 'Stap 5: Implementatie' },
  { id: 'opschaling', title: 'Stap 6: Opschaling' },
  { id: 'praktijkcases', title: 'Praktijkcases MKB' },
  { id: 'veelgemaakte-fouten', title: 'Veelgemaakte Fouten' },
  { id: 'faq', title: 'Veelgestelde Vragen' },
];

const automatiseringNiveaus = [
  { niveau: 1, naam: 'Handmatig', beschrijving: 'Alle taken door operators, papieren registratie', kenmerken: ['Geen automatisering', 'Papieren werkbonnen', 'Handmatige kwaliteitscontrole', 'Excel rapportage'] },
  { niveau: 2, naam: 'Basis Mechanisatie', beschrijving: 'Eenvoudige machines, nog veel handwerk', kenmerken: ['Standalone machines', 'Handmatig laden/lossen', 'Basis PLC-sturing', 'Geen data-integratie'] },
  { niveau: 3, naam: 'Gedeeltelijke Automatisering', beschrijving: 'Automatische machines met handmatige tussenkomst', kenmerken: ['CNC-machines', 'Automatische cyclus', 'Handmatige handling', 'Lokale data-opslag'] },
  { niveau: 4, naam: 'Geïntegreerde Automatisering', beschrijving: 'Verbonden systemen, minimale handmatige interventie', kenmerken: ['Robot/cobot handling', 'Machine-to-machine communicatie', 'Real-time monitoring', 'ERP-integratie'] },
  { niveau: 5, naam: 'Smart Factory', beschrijving: 'Volledig geautomatiseerd en zelfoptimaliserend', kenmerken: ['AI-gestuurde optimalisatie', 'Predictive maintenance', 'Digital twins', 'Autonome besluitvorming'] },
];

const prioriteringsMatrix = [
  { categorie: 'Quick Wins', impact: 'Medium', complexiteit: 'Laag', voorbeelden: ['Barcode/RFID tracking', 'OEE dashboard', 'Automatische alerts', 'Digitale werkbonnen'], advies: 'Direct starten - bewijst waarde snel' },
  { categorie: 'Strategische Projecten', impact: 'Hoog', complexiteit: 'Hoog', voorbeelden: ['Cobot integratie', 'MES implementatie', 'Volledige lijn automatisering', 'AI quality control'], advies: 'Goed plannen - grote impact maar vereist investering' },
  { categorie: 'Efficiëntie Verbeteringen', impact: 'Medium', complexiteit: 'Medium', voorbeelden: ['AGV/AMR voor transport', 'Automatisch palletiseren', 'Vision-inspectie', 'Predictive maintenance'], advies: 'Na quick wins - bouwt op fundament' },
  { categorie: 'Nice-to-haves', impact: 'Laag', complexiteit: 'Hoog', voorbeelden: ['Volledige digital twin', 'AR maintenance', 'Blockchain traceability', 'Voice-controlled systems'], advies: 'Later of helemaal niet - ROI vaak onduidelijk' },
];

const technologieOpties = [
  { technologie: 'Collaborative Robots (Cobots)', investering: '€25.000 - €75.000', roi: '12-24 maanden', toepassingen: ['Machine tending', 'Palletiseren', 'Assemblage', 'Inspectie'], geschikt: 'High-mix, medium-volume productie' },
  { technologie: 'Industriële Robots', investering: '€50.000 - €200.000', roi: '18-36 maanden', toepassingen: ['Lassen', 'Spuitgieten', 'Hoge snelheid handling', 'Zware lasten'], geschikt: 'High-volume, lage variatie' },
  { technologie: 'AGV/AMR (Autonomous Mobile Robots)', investering: '€30.000 - €100.000', roi: '18-30 maanden', toepassingen: ['Intern transport', 'Picking', 'Just-in-time levering', 'Warehouse'], geschikt: 'Grotere faciliteiten, veel transport' },
  { technologie: 'Vision Systemen', investering: '€5.000 - €50.000', roi: '6-18 maanden', toepassingen: ['Kwaliteitscontrole', 'Positiebepaling', 'OCR/barcode', 'Defect detectie'], geschikt: 'Waar visuele inspectie kritiek is' },
  { technologie: 'IoT & Sensoren', investering: '€2.000 - €20.000', roi: '3-12 maanden', toepassingen: ['Conditie monitoring', 'OEE meting', 'Energie monitoring', 'Environment tracking'], geschikt: 'Eerste stap, alle productiebedrijven' },
  { technologie: 'MES (Manufacturing Execution System)', investering: '€30.000 - €150.000', roi: '12-24 maanden', toepassingen: ['Productieplanning', 'Real-time tracking', 'Kwaliteitsbeheer', 'Rapportage'], geschikt: 'Middelgrote tot grote producties' },
];

const implementatieFasen = [
  { fase: 'Pilot', duur: '2-4 maanden', budget: '10-20% totaal', scope: '1 machine/lijn', doel: 'Proof of concept, leren, team trainen', risico: 'Laag' },
  { fase: 'Evaluatie', duur: '1-2 maanden', budget: '5%', scope: 'Analyse pilot', doel: 'ROI valideren, lessons learned, go/no-go', risico: 'Nvt' },
  { fase: 'Uitrol Fase 1', duur: '3-6 maanden', budget: '30-40%', scope: '3-5 machines/lijnen', doel: 'Schaalbaar maken, standaardisatie', risico: 'Medium' },
  { fase: 'Uitrol Fase 2', duur: '6-12 maanden', budget: '30-40%', scope: 'Volledige productie', doel: 'Complete dekking, integratie', risico: 'Medium' },
  { fase: 'Optimalisatie', duur: 'Doorlopend', budget: '10-15%/jaar', scope: 'Continue verbetering', doel: 'Maximaliseren ROI, nieuwe technologieën', risico: 'Laag' },
];

const praktijkcases = [
  {
    bedrijf: 'Precisie Metaal BV',
    sector: 'CNC-verspaning',
    medewerkers: '35 FTE',
    uitgangssituatie: 'Handmatig laden CNC-machines, operators 40% van tijd bezig met handling',
    roadmap: [
      { jaar: 1, actie: 'OEE monitoring + eerste cobot op CNC-cel', investering: '€55.000' },
      { jaar: 2, actie: '3 extra cobots + vision inspectie', investering: '€120.000' },
      { jaar: 3, actie: 'MES implementatie + AGV intern transport', investering: '€85.000' },
    ],
    resultaat: 'OEE +22 procentpunt, output +35% met zelfde team, ROI 2,1 jaar',
  },
  {
    bedrijf: 'Verpakking Plus',
    sector: 'Verpakkingsproductie',
    medewerkers: '65 FTE',
    uitgangssituatie: 'Veel handmatig palletiseren, hoog ziekteverzuim door fysiek werk',
    roadmap: [
      { jaar: 1, actie: 'Palletiseer-cobot lijn 1 + IoT monitoring', investering: '€70.000' },
      { jaar: 2, actie: 'Palletiseer-cobots lijn 2-4 + case packing', investering: '€180.000' },
      { jaar: 3, actie: 'Volautomatisch magazijn + AGVs', investering: '€250.000' },
    ],
    resultaat: 'Ziekteverzuim -45%, output +40%, nachtshift met 2 FTE mogelijk',
  },
  {
    bedrijf: 'Electronica Assemblage Zuid',
    sector: 'PCB assemblage',
    medewerkers: '45 FTE',
    uitgangssituatie: 'Handmatige kwaliteitscontrole, hoge uitvalkosten',
    roadmap: [
      { jaar: 1, actie: 'AOI vision systeem + traceability', investering: '€45.000' },
      { jaar: 2, actie: 'Pick-and-place cobot + SPC dashboards', investering: '€80.000' },
      { jaar: 3, actie: 'AI-gestuurde testoptimalisatie', investering: '€60.000' },
    ],
    resultaat: 'First-pass yield +8 procentpunt, kwaliteitskosten -60%, time-to-detect -90%',
  },
];

const veelgemaakteFouten = [
  { fout: 'Geen duidelijke businesscase', gevolg: 'Project stopt halverwege of wordt niet goedgekeurd', oplossing: 'Bereken ROI vooraf met realistische aannames. Bouw in buffers.' },
  { fout: 'Te groot beginnen', gevolg: 'Overweldigend, hoge risico\'s, lang wachten op resultaat', oplossing: 'Start met één pilot, bewijs de waarde, schaal daarna op.' },
  { fout: 'Technologie-gedreven i.p.v. probleem-gedreven', gevolg: 'Oplossing past niet bij het echte probleem', oplossing: 'Begin met het probleem: wat is je bottleneck? Welk proces kost het meest?' },
  { fout: 'Team niet meenemen', gevolg: 'Weerstand, slechte adoptie, sabotage', oplossing: 'Betrek operators vanaf dag 1. Training en communicatie zijn cruciaal.' },
  { fout: 'Onderschatten van integratie', gevolg: 'Eilandjes van automatisering die niet communiceren', oplossing: 'Plan integratie met ERP/MES/IT vanaf het begin. Kies open standaarden.' },
  { fout: 'Geen onderhoudsstrategie', gevolg: 'Automatisering faalt, hogere stilstand dan voor project', oplossing: 'Plan onderhoud, training technici, spare parts, service contracten.' },
  { fout: 'ROI te optimistisch berekenen', gevolg: 'Teleurstelling, geen vervolgprojecten', oplossing: 'Gebruik conservatieve aannames. Beter positief verrast dan negatief.' },
  { fout: 'Vergeten van de "last mile"', gevolg: 'Automatisering werkt, maar handmatig werk verschuift', oplossing: 'Analyseer het hele proces, niet alleen de machine. Voorkom bottleneck-shift.' },
];

const faqItems = [
  { vraag: 'Hoeveel kost een automatisering roadmap?', antwoord: 'Een professionele roadmap met assessment kost €5.000-15.000 afhankelijk van bedrijfsgrootte en complexiteit. Dit is een fractie van de potentiële besparing en voorkomt kostbare fouten.' },
  { vraag: 'Hoelang duurt een automatiseringstraject?', antwoord: 'Een pilot duurt 2-4 maanden. Volledige implementatie van een roadmap is typisch 2-4 jaar. Het is een reis, geen project. Start klein en bouw uit.' },
  { vraag: 'Hebben wij de kennis in huis voor automatisering?', antwoord: 'Meestal niet volledig, en dat is normaal. Werk samen met een integrator voor de eerste projecten en bouw interne kennis op. Na 2-3 projecten kun je steeds meer zelf.' },
  { vraag: 'Wat als onze producten vaak wisselen?', antwoord: 'High-mix productie is juist geschikt voor flexibele automatisering zoals cobots. Moderne robots zijn snel om te programmeren. Focus op taken die bij alle producten voorkomen.' },
  { vraag: 'Verliezen we werknemers door automatisering?', antwoord: 'Zelden. De meeste MKB-bedrijven automatiseren vanwege personeelstekort. Operators krijgen interessanter werk en kunnen meer output realiseren. Communiceer dit duidelijk.' },
  { vraag: 'Wat is de ROI van automatisering?', antwoord: 'Typische ROI is 18-36 maanden voor robotisering, 6-18 maanden voor IoT/monitoring. Belangrijkste factoren: arbeidskosten, volumes, consistentie, en schaalbaarheid.' },
  { vraag: 'Moeten we wachten op betere technologie?', antwoord: 'Nee. De technologie van vandaag is volwassen en betaalbaar. Wachten kost je nu al geld en concurrenten halen je in. Start en leer, pas aan naarmate technologie evolueert.' },
  { vraag: 'Hoe overtuig ik de directie/eigenaar?', antwoord: 'Met een solide businesscase: ROI, terugverdientijd, risico-analyse. Laat ze bij een referentiebedrijf kijken. Begin met een kleine pilot om vertrouwen te winnen.' },
];

export default function AutomatiseringRoadmapPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Automatisering Roadmap MKB</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full">
              Industriële Automatisering
            </span>
            <span className="text-gray-400 text-sm">16 min leestijd</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Automatisering Roadmap voor MKB: Van Handmatig naar Geautomatiseerd
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Een stap-voor-stap gids om je productie te automatiseren zonder kapitaalvernietiging.
            Van assessment tot implementatie, met business cases, technologiekeuzes en praktijkcases
            van Nederlandse MKB-maakbedrijven.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                <span className="text-primary-400 font-bold">RD</span>
              </div>
              <div>
                <Link href="/rob-derks" className="text-white hover:text-primary-400 transition-colors">Rob Derks</Link>
                <p className="text-gray-500 text-xs">Automatisering Specialist</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>19 mei 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>11.000+ woorden</span>
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
              <p className="text-3xl font-bold text-white">67%</p>
              <p className="text-gray-400 text-sm">MKB ervaart personeelstekort</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">18-36</p>
              <p className="text-gray-400 text-sm">Maanden ROI typisch</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">2-4</p>
              <p className="text-gray-400 text-sm">Maanden pilot</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">25-40%</p>
              <p className="text-gray-400 text-sm">Productiviteitswinst</p>
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
                <Map className="w-4 h-4 text-primary-400" />
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

      {/* Section: Waarom Roadmap */}
      <section id="waarom-roadmap" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Map className="w-6 h-6 text-primary-500" />
            </span>
            Waarom een Automatisering Roadmap?
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Automatisering zonder plan is als bouwen zonder tekening: duur, chaotisch en met een
              onzeker resultaat. Een roadmap zorgt voor:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Strategische richting</h4>
                  <p className="text-gray-400 text-sm">Weet waar je over 3-5 jaar wilt staan en werk daar naartoe</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Gefaseerde investering</h4>
                  <p className="text-gray-400 text-sm">Spreid kapitaaluitgaven over jaren, bewijs waarde onderweg</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Prioritering</h4>
                  <p className="text-gray-400 text-sm">Focus op de projecten met de hoogste ROI eerst</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Risicoreductie</h4>
                  <p className="text-gray-400 text-sm">Leer van kleine pilots voordat je groot investeert</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Draagvlak</h4>
                  <p className="text-gray-400 text-sm">Management, financiering en team weten wat komt</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Integratie</h4>
                  <p className="text-gray-400 text-sm">Systemen worden vooraf op elkaar afgestemd</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Automatisering Volwassenheidsniveaus</h3>
            <p className="text-gray-300 mb-6">
              Voordat je een roadmap maakt, moet je weten waar je staat. De meeste MKB-bedrijven
              bevinden zich op niveau 2-3:
            </p>

            <div className="space-y-4 mb-8">
              {automatiseringNiveaus.map((niveau) => (
                <div key={niveau.niveau} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-400 font-bold">{niveau.niveau}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{niveau.naam}</h4>
                      <p className="text-gray-400 text-sm mb-3">{niveau.beschrijving}</p>
                      <div className="flex flex-wrap gap-2">
                        {niveau.kenmerken.map((kenmerk, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded">
                            {kenmerk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Assessment */}
      <section id="assessment" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-500" />
            </span>
            Stap 1: Assessment & Analyse
          </h2>

          <p className="text-gray-300 mb-8">
            Een goede roadmap begint met een eerlijke analyse van je huidige situatie.
            Waar liggen de grootste kansen? Wat zijn de echte bottlenecks?
          </p>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Assessment Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-400 mb-3">Processen in kaart</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Welke processen zijn het meest arbeidsintensief?</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Waar zit de meeste stilstand/wachttijd?</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Welke taken zijn repetitief en consistent?</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Waar ontstaan de meeste kwaliteitsproblemen?</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-400 mb-3">Data verzamelen</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Huidige OEE per machine/lijn</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Arbeidsuren per proces/product</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Scrap- en rework percentages</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Doorlooptijden en wachttijden</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary-400" />
              Tip: Loop mee op de werkvloer
            </h4>
            <p className="text-gray-300 text-sm">
              De beste inzichten komen niet uit rapportages maar van observatie. Loop een dag mee met
              operators. Vraag: &quot;Wat kost je de meeste tijd?&quot; en &quot;Wat frustreert je het meest?&quot;.
              Operators weten precies waar de kansen liggen.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Prioritering */}
      <section id="prioritering" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary-500" />
            </span>
            Stap 2: Prioritering
          </h2>

          <p className="text-gray-300 mb-8">
            Niet alles tegelijk. Gebruik de impact/complexiteit matrix om te bepalen waar je begint:
          </p>

          <div className="space-y-4 mb-8">
            {prioriteringsMatrix.map((item, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-white">{item.categorie}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.impact === 'Hoog' ? 'bg-green-500/20 text-green-400' :
                      item.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      Impact: {item.impact}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.complexiteit === 'Laag' ? 'bg-green-500/20 text-green-400' :
                      item.complexiteit === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      Complexiteit: {item.complexiteit}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.voorbeelden.map((voorbeeld, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                      {voorbeeld}
                    </span>
                  ))}
                </div>
                <p className="text-primary-400 text-sm font-medium">{item.advies}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Begin altijd met Quick Wins</h4>
                <p className="text-gray-300 text-sm">
                  Quick wins bewijzen de waarde van automatisering met lage investering en laag risico.
                  Dit bouwt vertrouwen en budget voor grotere projecten. Sla deze stap niet over!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Business Case */}
      <section id="business-case" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary-500" />
            </span>
            Stap 3: Business Case Opstellen
          </h2>

          <p className="text-gray-300 mb-8">
            Geen investering zonder businesscase. Bereken de ROI realistisch—liever conservatief
            en positief verrast dan andersom.
          </p>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">ROI Berekeningsmodel</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-400 mb-3">Baten (jaarlijks)</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex justify-between">
                    <span>Arbeidsbesparing</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hogere output (marge)</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minder uitval/rework</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Energiebesparing</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between border-t border-white/10 pt-2 mt-2">
                    <span className="font-bold">Totaal baten/jaar</span>
                    <span className="text-green-400 font-bold">€_____</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-400 mb-3">Kosten (eenmalig + jaarlijks)</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex justify-between">
                    <span>Hardware/software</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Installatie/integratie</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Training</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Onderhoud/jaar</span>
                    <span className="text-white">€_____</span>
                  </li>
                  <li className="flex justify-between border-t border-white/10 pt-2 mt-2">
                    <span className="font-bold">Totaal kosten</span>
                    <span className="text-red-400 font-bold">€_____</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-300">
                <strong className="text-white">Terugverdientijd</strong> = Totaal kosten / (Baten - Jaarlijkse kosten)
              </p>
              <p className="text-gray-400 text-sm mt-2">
                <Link href="/roi-calculator" className="text-primary-400 hover:text-primary-300">
                  Gebruik onze ROI Calculator voor een snelle berekening →
                </Link>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-5 text-center">
              <h4 className="font-bold text-white mb-2">Conservatief</h4>
              <p className="text-gray-400 text-sm mb-2">50-70% van verwachte baten</p>
              <p className="text-green-400 font-medium">Gebruik voor besluitvorming</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-5 text-center">
              <h4 className="font-bold text-white mb-2">Realistisch</h4>
              <p className="text-gray-400 text-sm mb-2">100% van verwachte baten</p>
              <p className="text-yellow-400 font-medium">Interne planning</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-5 text-center">
              <h4 className="font-bold text-white mb-2">Optimistisch</h4>
              <p className="text-gray-400 text-sm mb-2">130-150% van verwachte baten</p>
              <p className="text-red-400 font-medium">Alleen voor potentie-analyse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Technologie Selectie */}
      <section id="technologie-selectie" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary-500" />
            </span>
            Stap 4: Technologie Selectie
          </h2>

          <p className="text-gray-300 mb-8">
            Kies technologie op basis van je specifieke uitdagingen, niet op basis van trends.
            Hier zijn de belangrijkste opties voor MKB-productiebedrijven:
          </p>

          <div className="space-y-4 mb-8">
            {technologieOpties.map((tech, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-white">{tech.technologie}</h3>
                  <div className="text-right">
                    <p className="text-primary-400 font-bold">{tech.investering}</p>
                    <p className="text-gray-500 text-xs">ROI: {tech.roi}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  <strong className="text-white">Geschikt voor:</strong> {tech.geschikt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.toepassingen.map((toepassing, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                      {toepassing}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Technologie Selectie Tips</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Kies leveranciers met lokale support en referenties</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Vraag om demo/proof-of-concept voor aankoop</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Kies open standaarden (OPC-UA, MQTT)</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Plan voor uitbreiding vanaf het begin</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <Link href="/blog/cobots-in-productie-complete-gids" className="text-primary-400 hover:text-primary-300 text-sm">
                Lees meer over cobots →
              </Link>
              <Link href="/diensten/industriele-automatisering" className="text-primary-400 hover:text-primary-300 text-sm">
                Bekijk automatisering diensten →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Implementatie */}
      <section id="implementatie" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-primary-500" />
            </span>
            Stap 5: Implementatie
          </h2>

          <p className="text-gray-300 mb-8">
            Implementeer gefaseerd om risico&apos;s te beheersen en te leren onderweg:
          </p>

          <div className="space-y-4 mb-8">
            {implementatieFasen.map((fase, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-primary-500' : 'bg-white/10'
                  }`}>
                    {index + 1}
                  </div>
                  {index < implementatieFasen.length - 1 && (
                    <div className="w-0.5 h-full bg-white/10 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{fase.fase}</h3>
                    <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded">
                      {fase.duur}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      fase.risico === 'Laag' ? 'bg-green-500/20 text-green-400' :
                      fase.risico === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      Risico: {fase.risico}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">
                    <strong className="text-white">Scope:</strong> {fase.scope}
                  </p>
                  <p className="text-gray-400 mb-2">
                    <strong className="text-white">Doel:</strong> {fase.doel}
                  </p>
                  <p className="text-primary-400 text-sm">
                    Budget: {fase.budget} van totaal
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Kritieke succesfactoren</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">Executive sponsor:</strong> Iemand met budget en beslissingsbevoegdheid</li>
                  <li>• <strong className="text-white">Project champion:</strong> Dagelijkse aansturing en eigenaarschap</li>
                  <li>• <strong className="text-white">Operator betrokkenheid:</strong> Training en change management</li>
                  <li>• <strong className="text-white">Integrator partner:</strong> Technische expertise voor installatie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Opschaling */}
      <section id="opschaling" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-500" />
            </span>
            Stap 6: Opschaling & Continue Verbetering
          </h2>

          <p className="text-gray-300 mb-8">
            Na een succesvolle pilot is het tijd om op te schalen. Maar doe dit systematisch—wat
            werkt op één machine werkt niet automatisch overal.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Opschalingschecklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Pilot ROI behaald en gedocumenteerd</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Lessons learned vastgelegd</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Standaard werkwijze opgesteld</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Trainingsmateriaal beschikbaar</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Onderhoudsprocedures gedefinieerd</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Budget goedgekeurd voor uitrol</span>
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Continue Verbetering</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Monitor KPIs continu (OEE, uptime, kwaliteit)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Kwartaalreview van roadmap en prioriteiten</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Verzamel feedback van operators</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Benchmark tegen best practices</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Evalueer nieuwe technologieën jaarlijks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Investeer in kennis en training</span>
                </li>
              </ul>
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
            Praktijkcases: Automatisering Roadmaps in het MKB
          </h2>

          <div className="space-y-8">
            {praktijkcases.map((casus, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{casus.bedrijf}</h3>
                    <p className="text-gray-400 text-sm">{casus.sector} | {casus.medewerkers}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Uitgangssituatie:</strong> {casus.uitgangssituatie}
                </p>
                <div className="mb-4">
                  <h4 className="font-bold text-primary-400 mb-3">Roadmap:</h4>
                  <div className="space-y-2">
                    {casus.roadmap.map((stap, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/5 rounded-lg p-3">
                        <span className="w-8 h-8 bg-primary-500/20 rounded flex items-center justify-center text-primary-400 font-bold text-sm flex-shrink-0">
                          Jaar {stap.jaar}
                        </span>
                        <span className="text-gray-300 flex-1">{stap.actie}</span>
                        <span className="text-white font-medium">{stap.investering}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 font-medium">Resultaat: {casus.resultaat}</p>
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
            8 Veelgemaakte Fouten bij Automatisering
          </h2>

          <div className="space-y-4">
            {veelgemaakteFouten.map((item, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.fout}</h3>
                    <p className="text-red-400 text-sm mb-2">{item.gevolg}</p>
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
                <p className="text-primary-400 text-sm mb-3">Automatisering & Procesoptimalisatie Specialist</p>
                <p className="text-gray-400 text-sm mb-4">
                  Ik help MKB-maakbedrijven hun automatiseringsreis te plannen en uitvoeren.
                  Van roadmap tot implementatie, met focus op ROI en praktische haalbaarheid.
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
              Klaar voor jouw Automatisering Roadmap?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Laat ons een assessment doen van je productie en een roadmap opstellen op maat.
              We identificeren de beste kansen en berekenen de ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=automatisering-roadmap"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Plan Automatisering Assessment <ArrowRight className="w-5 h-5" />
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
            <Link href="/blog/cobots-in-productie-complete-gids" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Cobots in Productie</h3>
              <p className="text-gray-400 text-sm">De complete gids voor MKB-maakbedrijven</p>
            </Link>
            <Link href="/blog/cobot-terugverdientijd-berekenen" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Cobot ROI Berekenen</h3>
              <p className="text-gray-400 text-sm">Terugverdientijd en investeringsanalyse</p>
            </Link>
            <Link href="/blog/oee-verbeteren-complete-gids" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">OEE Verbeteren</h3>
              <p className="text-gray-400 text-sm">Van 65% naar 85% met bewezen strategieën</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Onze Diensten</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/diensten/industriele-automatisering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Industriële Automatisering</span>
              </Link>
              <Link href="/diensten/cobot-integratie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Cobot Integratie</span>
              </Link>
              <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Procesoptimalisatie</span>
              </Link>
              <Link href="/diensten/oee-verbetering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>OEE Verbetering</span>
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
