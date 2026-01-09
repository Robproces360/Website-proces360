'use client';

import Link from 'next/link';
import {
  BarChart3, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Gauge,
  Zap, Settings, AlertTriangle, Lightbulb, ChevronRight, Calculator,
  Users, Package, Timer, Award, Activity, PieChart, LineChart, Percent
} from 'lucide-react';

const tableOfContents = [
  { id: 'waarom-kpis', title: 'Waarom Productie KPIs?' },
  { id: 'top-15-kpis', title: 'Top 15 Productie KPIs' },
  { id: 'oee-diepgaand', title: 'OEE Diepgaand Uitgelegd' },
  { id: 'kwaliteits-kpis', title: 'Kwaliteits-KPIs' },
  { id: 'doorlooptijd-kpis', title: 'Doorlooptijd & Efficiency' },
  { id: 'kosten-kpis', title: 'Kosten-KPIs' },
  { id: 'benchmarks', title: 'Benchmarks per Sector' },
  { id: 'dashboard-opzet', title: 'Dashboard Opzet' },
  { id: 'implementatie', title: 'Implementatie Stappenplan' },
  { id: 'veelgemaakte-fouten', title: 'Veelgemaakte Fouten' },
  { id: 'faq', title: 'Veelgestelde Vragen' },
];

const top15KPIs = [
  { rang: 1, naam: 'OEE (Overall Equipment Effectiveness)', categorie: 'Efficiency', formule: 'Beschikbaarheid × Prestatie × Kwaliteit', benchmark: '85% world-class', prioriteit: 'Kritiek' },
  { rang: 2, naam: 'First Pass Yield (FPY)', categorie: 'Kwaliteit', formule: '(Goede producten eerste keer / Totaal geproduceerd) × 100', benchmark: '>95%', prioriteit: 'Kritiek' },
  { rang: 3, naam: 'On-Time Delivery (OTD)', categorie: 'Leverbetrouwbaarheid', formule: '(Op tijd geleverde orders / Totaal orders) × 100', benchmark: '>98%', prioriteit: 'Kritiek' },
  { rang: 4, naam: 'Doorlooptijd (Lead Time)', categorie: 'Efficiency', formule: 'Einddatum - Startdatum productie', benchmark: 'Sector-afhankelijk', prioriteit: 'Hoog' },
  { rang: 5, naam: 'Capaciteitsbenutting', categorie: 'Efficiency', formule: '(Werkelijke output / Max. capaciteit) × 100', benchmark: '80-90%', prioriteit: 'Hoog' },
  { rang: 6, naam: 'TEEP (Total Effective Equipment Performance)', categorie: 'Efficiency', formule: 'OEE × Benutting (alle tijd)', benchmark: '>60%', prioriteit: 'Hoog' },
  { rang: 7, naam: 'Scrap Rate', categorie: 'Kwaliteit', formule: '(Afgekeurd materiaal / Totaal input) × 100', benchmark: '<2%', prioriteit: 'Hoog' },
  { rang: 8, naam: 'Rework Rate', categorie: 'Kwaliteit', formule: '(Herwerkte producten / Totaal) × 100', benchmark: '<1%', prioriteit: 'Hoog' },
  { rang: 9, naam: 'Omsteltijd (Changeover)', categorie: 'Efficiency', formule: 'Tijd tussen laatste goede product A en eerste goede product B', benchmark: 'SMED: <10 min', prioriteit: 'Medium' },
  { rang: 10, naam: 'MTBF (Mean Time Between Failures)', categorie: 'Onderhoud', formule: 'Totale operationele tijd / Aantal storingen', benchmark: 'Machine-afhankelijk', prioriteit: 'Hoog' },
  { rang: 11, naam: 'MTTR (Mean Time To Repair)', categorie: 'Onderhoud', formule: 'Totale reparatietijd / Aantal reparaties', benchmark: '<1 uur', prioriteit: 'Hoog' },
  { rang: 12, naam: 'Schedule Adherence', categorie: 'Planning', formule: '(Gerealiseerde productie / Geplande productie) × 100', benchmark: '>95%', prioriteit: 'Medium' },
  { rang: 13, naam: 'Inventory Turns', categorie: 'Voorraad', formule: 'Kostprijs verkochte goederen / Gemiddelde voorraad', benchmark: '>6 per jaar', prioriteit: 'Medium' },
  { rang: 14, naam: 'Energy per Unit', categorie: 'Kosten', formule: 'Totaal energieverbruik / Totaal geproduceerde eenheden', benchmark: 'Continu verbeteren', prioriteit: 'Medium' },
  { rang: 15, naam: 'Labor Productivity', categorie: 'Efficiency', formule: 'Output (stuks of waarde) / Gewerkte uren', benchmark: 'Continu verbeteren', prioriteit: 'Hoog' },
];

const oeeComponenten = [
  {
    component: 'Beschikbaarheid',
    formule: '(Geplande tijd - Stilstand) / Geplande tijd × 100%',
    verliezen: ['Storingen', 'Omsteltijden', 'Wachten op materiaal', 'Wachten op personeel'],
    benchmark: '>90%',
    tips: ['Implementeer TPM', 'Registreer alle storingen', 'Reduceer omsteltijden (SMED)']
  },
  {
    component: 'Prestatie',
    formule: '(Werkelijke cyclustijd × Producten) / Netto productietijd × 100%',
    verliezen: ['Kleine stops (<5 min)', 'Snelheidsverlies', 'Niet-standaard condities'],
    benchmark: '>95%',
    tips: ['Analyseer kleine stops', 'Optimaliseer cyclustijden', 'Standaardiseer processen']
  },
  {
    component: 'Kwaliteit',
    formule: 'Goede producten / Totaal geproduceerd × 100%',
    verliezen: ['Uitval (scrap)', 'Herwerk (rework)', 'Opstartverlies'],
    benchmark: '>99%',
    tips: ['Implementeer SPC', 'Poka-yoke maatregelen', 'Root cause analyse bij afwijkingen']
  },
];

const sectorBenchmarks = [
  { sector: 'Automotive', oee: '85%+', fpy: '99%+', otd: '99%+', kenmerk: 'Zeer strikte normen, JIT-leveringen' },
  { sector: 'Metaalbewerking', oee: '65-75%', fpy: '95-98%', otd: '95%+', kenmerk: 'Mix van serie en enkelstuks' },
  { sector: 'Kunststofverwerking', oee: '70-80%', fpy: '97-99%', otd: '97%+', kenmerk: 'Continue productie, hoge volumes' },
  { sector: 'Voedingsmiddelen', oee: '60-75%', fpy: '99%+', otd: '99%+', kenmerk: 'Strenge hygiëne, houdbaarheid' },
  { sector: 'Farmaceutisch', oee: '50-65%', fpy: '99.9%+', otd: '99%+', kenmerk: 'Validatie, batch traceability' },
  { sector: 'Electronica', oee: '75-85%', fpy: '99%+', otd: '98%+', kenmerk: 'Hoge precisie, kleine componenten' },
  { sector: 'Verpakkingen', oee: '70-80%', fpy: '98%+', otd: '98%+', kenmerk: 'Hoge snelheden, veel omstellingen' },
  { sector: 'Machinebouw', oee: '55-70%', fpy: '95-98%', otd: '90-95%', kenmerk: 'Project-based, customization' },
];

const dashboardLevels = [
  {
    niveau: 'Werkvloer Dashboard',
    frequentie: 'Real-time / Per uur',
    kpis: ['OEE actueel', 'Productieteller', 'Stilstand-alarm', 'Kwaliteitsstatus'],
    doel: 'Directe actie bij afwijkingen',
    gebruikers: 'Operators, teamleiders'
  },
  {
    niveau: 'Shift Dashboard',
    frequentie: 'Per shift / Dagelijks',
    kpis: ['OEE per machine', 'Output vs. target', 'Top 5 stilstandoorzaken', 'Kwaliteitspercentage'],
    doel: 'Evaluatie en overdracht',
    gebruikers: 'Teamleiders, supervisors'
  },
  {
    niveau: 'Management Dashboard',
    frequentie: 'Dagelijks / Wekelijks',
    kpis: ['OEE trend', 'OTD', 'Scrap kosten', 'Arbeidsproductiviteit'],
    doel: 'Strategische beslissingen',
    gebruikers: 'Productiemanager, directie'
  },
  {
    niveau: 'Directie Dashboard',
    frequentie: 'Wekelijks / Maandelijks',
    kpis: ['TEEP', 'Cost per unit', 'Capaciteitsplanning', 'Benchmark concurrenten'],
    doel: 'Strategische planning, investeringen',
    gebruikers: 'Directie, MT'
  },
];

const implementatieStappen = [
  { stap: 1, titel: 'KPI Selectie', beschrijving: 'Kies 5-7 KPIs die aansluiten bij bedrijfsdoelen. Minder is meer.', tips: ['Start met OEE als fundament', 'Voeg sector-specifieke KPIs toe', 'Betrek stakeholders bij selectie'] },
  { stap: 2, titel: 'Baseline Meting', beschrijving: 'Meet huidige prestaties gedurende 2-4 weken zonder wijzigingen.', tips: ['Gebruik bestaande data', 'Documenteer meetmethode', 'Accepteer dat eerste data "lelijk" is'] },
  { stap: 3, titel: 'Doelen Stellen', beschrijving: 'Definieer SMART doelen per KPI voor komende 6-12 maanden.', tips: ['Benchmark tegen sector', 'Maak doelen haalbaar maar uitdagend', 'Breek op in kwartaaldoelen'] },
  { stap: 4, titel: 'Datacollectie Automatiseren', beschrijving: 'Minimaliseer handmatige registratie door sensoren en koppelingen.', tips: ['Start met PLC/machine data', 'Koppel aan ERP/MES', 'Kies open standaarden (OPC-UA)'] },
  { stap: 5, titel: 'Dashboard Bouwen', beschrijving: 'Visualiseer KPIs op schermen op werkvloer en in kantoor.', tips: ['Houd het simpel en visueel', 'Gebruik kleuren voor status', 'Toon trends, niet alleen actuele waarde'] },
  { stap: 6, titel: 'Review Ritme', beschrijving: 'Implementeer dagelijkse/wekelijkse KPI reviews met teams.', tips: ['Korte dagstarts bij dashboard', 'Wekelijkse diepere analyse', 'Focus op acties, niet excuses'] },
];

const veelgemaakteFouten = [
  { fout: 'Te veel KPIs tegelijk', impact: 'Verwarring en focus verlies', oplossing: 'Start met max 5-7 KPIs, breid later uit indien nodig.' },
  { fout: 'KPIs zonder actie', impact: 'Dashboard wordt genegeerd', oplossing: 'Elke KPI moet leiden tot concrete verbeteracties.' },
  { fout: 'Alleen achteraf rapporteren', impact: 'Geen real-time sturing', oplossing: 'Investeer in real-time dashboards op de werkvloer.' },
  { fout: 'Data handmatig verzamelen', impact: 'Onbetrouwbaar, tijdrovend', oplossing: 'Automatiseer dataverzameling via sensoren/koppelingen.' },
  { fout: 'KPIs als straf gebruiken', impact: 'Weerstand, gaming', oplossing: 'Gebruik KPIs voor verbetering, niet voor afrekenen.' },
  { fout: 'Geen context geven', impact: 'Verkeerde conclusies', oplossing: 'Toon altijd target, trend en benchmark.' },
  { fout: 'OEE als enige metric', impact: 'Onvolledig beeld', oplossing: 'Combineer OEE met kwaliteit, levering en kostenmetics.' },
  { fout: 'Benchmarks blind volgen', impact: 'Niet relevant voor jouw situatie', oplossing: 'Pas benchmarks aan op jouw productmix en uitdagingen.' },
];

const faqItems = [
  { vraag: 'Wat zijn de belangrijkste productie KPIs?', antwoord: 'De top 5 productie KPIs zijn: OEE (Overall Equipment Effectiveness), First Pass Yield, On-Time Delivery, doorlooptijd en capaciteitsbenutting. Deze metrics geven samen een compleet beeld van productie-efficiëntie.' },
  { vraag: 'Hoe bereken je OEE?', antwoord: 'OEE = Beschikbaarheid × Prestatie × Kwaliteit. Beschikbaarheid = (Geplande tijd - Stilstand) / Geplande tijd. Prestatie = (Werkelijke cyclustijd × Producten) / Netto productietijd. Kwaliteit = (Goede producten / Totaal geproduceerd). Alle percentages vermenigvuldigen geeft de OEE.' },
  { vraag: 'Wat is een goede OEE score?', antwoord: 'Een OEE van 85% wordt beschouwd als world-class. Het gemiddelde MKB-maakbedrijf scoort 60-65%. Een score van 70-75% is goed voor discrete manufacturing. Belangrijker dan de absolute score is de trend: stijgt je OEE?' },
  { vraag: 'Wat is het verschil tussen OEE en TEEP?', antwoord: 'OEE meet effectiviteit tijdens geplande productietijd. TEEP (Total Effective Equipment Performance) meet effectiviteit over alle beschikbare tijd, inclusief nachten, weekenden en feestdagen. TEEP = OEE × Benutting, en is lager dan OEE.' },
  { vraag: 'Hoeveel KPIs moet ik meten?', antwoord: 'Start met 5-7 KPIs die direct aansluiten bij je bedrijfsdoelen. Te veel KPIs leidt tot focus verlies. Kies minimaal: 1 efficiency-KPI (OEE), 1 kwaliteits-KPI (FPY), 1 levering-KPI (OTD) en 1 kosten-KPI.' },
  { vraag: 'Hoe vaak moet ik KPIs reviewen?', antwoord: 'Operationele KPIs (OEE, output) dagelijks bij de dagstart. Tactische KPIs (trends, verbeterprojecten) wekelijks. Strategische KPIs (kosten, capaciteit, benchmarks) maandelijks. Real-time dashboards voor directe actie bij afwijkingen.' },
  { vraag: 'Kan ik KPIs meten zonder dure software?', antwoord: 'Ja, start eenvoudig met Excel/Google Sheets voor kleine producties. Verzamel data handmatig of via basis PLC-uitlezing. Wanneer je groeit, investeer in dedicated productie-software of MES-systemen.' },
  { vraag: 'Hoe voorkom ik dat KPIs gemanipuleerd worden?', antwoord: 'Automatiseer dataverzameling om menselijke input te minimaliseren. Combineer meerdere KPIs (hoge OEE + hoge kwaliteit + lage kosten). Creëer een cultuur waarin problemen melden gewaardeerd wordt, niet bestraft.' },
];

export default function ProductieKPIsGidsPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Productie KPIs Complete Gids</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full">
              Procesoptimalisatie
            </span>
            <span className="text-gray-400 text-sm">18 min leestijd</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Productie KPIs: De 15 Belangrijkste Metrics voor MKB-Maakbedrijven
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Van OEE tot First Pass Yield: ontdek welke KPIs je écht moet meten om je productie naar
            het volgende niveau te tillen. Met formules, benchmarks per sector, dashboardvoorbeelden
            en een implementatie-stappenplan.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                <span className="text-primary-400 font-bold">RD</span>
              </div>
              <div>
                <Link href="/rob-derks" className="text-white hover:text-primary-400 transition-colors">Rob Derks</Link>
                <p className="text-gray-500 text-xs">KPI & Procesoptimalisatie Expert</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>28 april 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>12.000+ woorden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">15</p>
              <p className="text-gray-400 text-sm">Essentiële KPIs</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Gauge className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">85%</p>
              <p className="text-gray-400 text-sm">World-class OEE</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">20%+</p>
              <p className="text-gray-400 text-sm">Typische verbetering</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">4-8</p>
              <p className="text-gray-400 text-sm">Weken implementatie</p>
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

      {/* Section: Waarom KPIs */}
      <section id="waarom-kpis" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-500" />
            </span>
            Waarom Productie KPIs Essentieel Zijn
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              <em>&quot;Je kunt niet verbeteren wat je niet meet.&quot;</em> Dit klassieke management-adagium
              is nergens zo waar als in de productie. Toch meten veel MKB-maakbedrijven hun prestaties
              nog steeds met &quot;gevoel&quot; of verouderde Excel-sheets die niemand bekijkt.
            </p>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                De Realiteit bij veel MKB-Maakbedrijven
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 67% heeft geen real-time inzicht in OEE</li>
                <li>• 45% weet niet wat hun werkelijke scrap-percentage is</li>
                <li>• 52% baseert beslissingen op onderbuikgevoel in plaats van data</li>
                <li>• 38% ontdekt productiviteitsproblemen pas bij de maandafsluiting</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Wat goede KPIs opleveren</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Snellere probleemdetectie</h4>
                  <p className="text-gray-400 text-sm">Zie afwijkingen real-time in plaats van na weken</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Objectieve besluitvorming</h4>
                  <p className="text-gray-400 text-sm">Data vervangt aannames en onderbuikgevoel</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Gerichte verbeteracties</h4>
                  <p className="text-gray-400 text-sm">Focus op de grootste verliezen eerst</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Meetbare vooruitgang</h4>
                  <p className="text-gray-400 text-sm">Bewijs dat verbeteringen werken</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Motivatie voor teams</h4>
                  <p className="text-gray-400 text-sm">Zichtbare doelen en prestaties</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Betere klantrelaties</h4>
                  <p className="text-gray-400 text-sm">Proactief communiceren bij afwijkingen</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary-400" />
                Het doel van KPIs
              </h4>
              <p className="text-gray-300 text-sm">
                KPIs zijn geen doel op zich, maar een middel om <strong className="text-white">continue verbetering</strong> mogelijk
                te maken. De beste KPI-implementaties leiden tot een cultuur waarin problemen direct
                zichtbaar worden en teams zelfstandig actie ondernemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Top 15 KPIs */}
      <section id="top-15-kpis" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-500" />
            </span>
            Top 15 Productie KPIs
          </h2>

          <p className="text-gray-300 mb-8">
            Dit zijn de 15 belangrijkste KPIs voor MKB-productiebedrijven, gerangschikt op impact en
            relevantie. Je hoeft ze niet allemaal te meten—start met de top 5 en breid uit naarmate
            je KPI-volwassenheid groeit.
          </p>

          <div className="space-y-4 mb-8">
            {top15KPIs.map((kpi) => (
              <div key={kpi.rang} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-400 font-bold">{kpi.rang}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-white">{kpi.naam}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                        kpi.prioriteit === 'Kritiek' ? 'bg-red-500/20 text-red-400' :
                        kpi.prioriteit === 'Hoog' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {kpi.prioriteit}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">{kpi.categorie}</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Formule: </span>
                        <span className="text-gray-300">{kpi.formule}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Benchmark: </span>
                        <span className="text-green-400 font-medium">{kpi.benchmark}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Quick Start: De Essentiële 5</h4>
            <p className="text-gray-300 text-sm mb-4">
              Begin met deze 5 KPIs voor een fundament:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
              <li><strong className="text-white">OEE</strong> - Totaalbeeld machine-effectiviteit</li>
              <li><strong className="text-white">First Pass Yield</strong> - Kwaliteit in één oogopslag</li>
              <li><strong className="text-white">On-Time Delivery</strong> - Klantgerichtheid</li>
              <li><strong className="text-white">Doorlooptijd</strong> - Procesefficiëntie</li>
              <li><strong className="text-white">Scrap Rate</strong> - Verspilling/kosten</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section: OEE Diepgaand */}
      <section id="oee-diepgaand" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Gauge className="w-6 h-6 text-primary-500" />
            </span>
            OEE Diepgaand Uitgelegd
          </h2>

          <p className="text-gray-300 mb-8">
            OEE (Overall Equipment Effectiveness) is de gouden standaard voor productie-effectiviteit.
            Het combineert drie cruciale factoren in één percentage en maakt vergelijking mogelijk
            tussen machines, lijnen en zelfs bedrijven.
          </p>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary-400" />
              OEE Formule
            </h3>
            <div className="bg-primary-500/10 rounded-lg p-4 text-center mb-4">
              <p className="text-2xl font-bold text-white">
                OEE = Beschikbaarheid × Prestatie × Kwaliteit
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Voorbeeld: 90% × 95% × 99% = <strong className="text-green-400">84,6% OEE</strong>
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {oeeComponenten.map((comp, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white">{comp.component}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                    Benchmark: {comp.benchmark}
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <p className="text-gray-300 font-mono text-sm">{comp.formule}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Typische verliezen:</h4>
                    <ul className="space-y-1">
                      {comp.verliezen.map((verlies, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                          {verlies}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Verbeter-tips:</h4>
                    <ul className="space-y-1">
                      {comp.tips.map((tip, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Let op: OEE is niet alles</h4>
                <p className="text-gray-300 text-sm">
                  Een hoge OEE op één machine zegt niets als de volgende machine stil staat.
                  Combineer OEE altijd met flow-metrics (doorlooptijd, WIP) en klant-metrics (OTD).
                </p>
                <Link href="/blog/oee-verbeteren-complete-gids" className="text-primary-400 hover:text-primary-300 text-sm mt-2 inline-block">
                  Lees meer over OEE verbeteren →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Kwaliteits-KPIs */}
      <section id="kwaliteits-kpis" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-primary-500" />
            </span>
            Kwaliteits-KPIs
          </h2>

          <p className="text-gray-300 mb-8">
            Kwaliteitsproblemen zijn duur: herwerk kost 2-5x zoveel als het eerste keer goed doen,
            en klachten kosten nog meer. Deze KPIs helpen je kwaliteit te monitoren en te verbeteren.
          </p>

          <div className="grid gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">First Pass Yield (FPY)</h3>
              <p className="text-gray-400 mb-4">
                Het percentage producten dat in één keer goed is, zonder herwerk of reparatie.
                Dit is de meest eerlijke kwaliteits-KPI omdat het alle verborgen kosten blootlegt.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-gray-300 font-mono text-sm">
                  FPY = (Goede producten eerste keer / Totaal geproduceerd) × 100%
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">Benchmark:</span>
                <span className="text-green-400 font-medium">&gt;95% voor discrete manufacturing</span>
              </div>
            </div>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Scrap Rate</h3>
              <p className="text-gray-400 mb-4">
                Percentage materiaal/producten dat wordt afgekeurd en weggegooid.
                Dit is direct zichtbaar in je kosten en duurzaamheidsprestaties.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-gray-300 font-mono text-sm">
                  Scrap Rate = (Afgekeurd materiaal in € of kg / Totaal input) × 100%
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">Benchmark:</span>
                <span className="text-green-400 font-medium">&lt;2% voor de meeste sectoren</span>
              </div>
            </div>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Rework Rate</h3>
              <p className="text-gray-400 mb-4">
                Percentage producten dat herwerk nodig heeft. Vaak een verborgen kost omdat
                het &quot;toch nog goed komt&quot;, maar het kost tijd, geld en capaciteit.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-gray-300 font-mono text-sm">
                  Rework Rate = (Herwerkte producten / Totaal geproduceerd) × 100%
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">Benchmark:</span>
                <span className="text-green-400 font-medium">&lt;1%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Doorlooptijd & Efficiency */}
      <section id="doorlooptijd-kpis" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Timer className="w-6 h-6 text-primary-500" />
            </span>
            Doorlooptijd & Efficiency KPIs
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Doorlooptijd (Lead Time)</h3>
              <p className="text-gray-400 mb-4">
                De totale tijd van orderontvangst tot levering. Vaak veel langer dan de
                werkelijke bewerkingstijd door wachttijden tussen stappen.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">Order Lead Time</p>
                  <p className="text-white font-medium">Order → Levering</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">Manufacturing Lead Time</p>
                  <p className="text-white font-medium">Start productie → Gereed</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">Cycle Time</p>
                  <p className="text-white font-medium">Tijd per product</p>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Capaciteitsbenutting</h3>
              <p className="text-gray-400 mb-4">
                Hoeveel van je beschikbare capaciteit gebruik je daadwerkelijk? Te laag is
                verspilling, te hoog leidt tot geen flexibiliteit voor spoedorders.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-gray-300 font-mono text-sm">
                  Capaciteitsbenutting = (Werkelijke output / Maximale capaciteit) × 100%
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">Sweet spot:</span>
                <span className="text-green-400 font-medium">80-90% (ruimte voor variatie)</span>
              </div>
            </div>

            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Omsteltijd (Changeover Time)</h3>
              <p className="text-gray-400 mb-4">
                Tijd om van product A naar product B te wisselen. SMED (Single Minute Exchange of Die)
                richt zich op het reduceren van omsteltijden naar minder dan 10 minuten.
              </p>
              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <p className="text-gray-300 font-mono text-sm">
                  Omsteltijd = Tijd tussen laatste goede product A en eerste goede product B
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">SMED doel:</span>
                <span className="text-green-400 font-medium">&lt;10 minuten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Kosten-KPIs */}
      <section id="kosten-kpis" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <PieChart className="w-6 h-6 text-primary-500" />
            </span>
            Kosten-KPIs
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Cost per Unit</h3>
              <p className="text-gray-400 text-sm mb-3">
                Totale productiekosten gedeeld door output. De ultieme efficiëntie-metric.
              </p>
              <p className="text-gray-500 text-xs">
                Inclusief: arbeid, materiaal, energie, overhead, kwaliteitskosten
              </p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Energy per Unit</h3>
              <p className="text-gray-400 text-sm mb-3">
                Energieverbruik per geproduceerde eenheid. Steeds belangrijker met stijgende
                energieprijzen en duurzaamheidseisen.
              </p>
              <p className="text-gray-500 text-xs">
                Meet in kWh per stuk of per kg output
              </p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Labor Productivity</h3>
              <p className="text-gray-400 text-sm mb-3">
                Output per gewerkt uur. Meet zowel in stuks als in € om vergelijking mogelijk te maken.
              </p>
              <p className="text-gray-500 text-xs">
                Formule: Output / Directe arbeidsuren
              </p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Maintenance Cost Ratio</h3>
              <p className="text-gray-400 text-sm mb-3">
                Onderhoudskosten als percentage van asset waarde. Te laag suggereert onderhoudstekort,
                te hoog suggereert inefficiëntie.
              </p>
              <p className="text-gray-500 text-xs">
                Benchmark: 2-5% van vervangingswaarde per jaar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Benchmarks */}
      <section id="benchmarks" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <LineChart className="w-6 h-6 text-primary-500" />
            </span>
            Benchmarks per Sector
          </h2>

          <p className="text-gray-300 mb-8">
            KPIs zijn alleen zinvol in context. Vergelijk je prestaties met sectorgenoten, maar
            onthoud: elke situatie is uniek. Gebruik benchmarks als richtlijn, niet als wet.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Sector</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">OEE</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">FPY</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">OTD</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Kenmerk</th>
                </tr>
              </thead>
              <tbody>
                {sectorBenchmarks.map((sector, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white font-medium">{sector.sector}</td>
                    <td className="py-4 px-4 text-gray-300">{sector.oee}</td>
                    <td className="py-4 px-4 text-gray-300">{sector.fpy}</td>
                    <td className="py-4 px-4 text-gray-300">{sector.otd}</td>
                    <td className="py-4 px-4 text-gray-500 text-sm">{sector.kenmerk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary-400" />
              Benchmark Advies
            </h4>
            <p className="text-gray-300 text-sm">
              Vergelijk je niet alleen met je sector, maar ook met jezelf. Een bedrijf dat van 55%
              naar 70% OEE gaat heeft meer bereikt dan een bedrijf dat stabiel op 75% blijft.
              <strong className="text-white"> De trend is belangrijker dan het absolute getal.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Section: Dashboard Opzet */}
      <section id="dashboard-opzet" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-500" />
            </span>
            Dashboard Opzet: Van Werkvloer tot Directie
          </h2>

          <p className="text-gray-300 mb-8">
            Niet iedereen heeft dezelfde KPIs nodig. Bouw dashboards op verschillende niveaus,
            elk met de juiste KPIs, frequentie en detailniveau.
          </p>

          <div className="space-y-6 mb-8">
            {dashboardLevels.map((level, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{level.niveau}</h3>
                    <p className="text-gray-500 text-sm">{level.gebruikers}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full whitespace-nowrap">
                    {level.frequentie}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{level.doel}</p>
                <div className="flex flex-wrap gap-2">
                  {level.kpis.map((kpi, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Dashboard Best Practices</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Gebruik kleuren voor status (groen/geel/rood)</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Toon altijd target/benchmark naast actuele waarde</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Visualiseer trends (pijlen, grafieken)</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Houd het simpel: max 6-8 metrics per scherm</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              <Link href="/diensten/productie-dashboards" className="text-primary-400 hover:text-primary-300">
                Meer over productie dashboards →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section: Implementatie */}
      <section id="implementatie" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary-500" />
            </span>
            Implementatie Stappenplan
          </h2>

          <div className="space-y-6 mb-8">
            {implementatieStappen.map((stap) => (
              <div key={stap.stap} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {stap.stap}
                  </div>
                  {stap.stap < 6 && (
                    <div className="w-0.5 h-full bg-primary-500/30 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{stap.titel}</h3>
                  <p className="text-gray-400 mb-4">{stap.beschrijving}</p>
                  <div className="space-y-2">
                    {stap.tips.map((tip, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {tip}
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
            8 Veelgemaakte Fouten bij KPI-implementatie
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
                    <p className="text-red-400 text-sm mb-2">Impact: {item.impact}</p>
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
                <p className="text-primary-400 text-sm mb-3">KPI & Procesoptimalisatie Expert</p>
                <p className="text-gray-400 text-sm mb-4">
                  Ik help MKB-maakbedrijven hun productie meetbaar te maken en continu te verbeteren.
                  Van KPI-selectie tot dashboard-implementatie en verbetertrajecten.
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
              Start met Meten, Start met Verbeteren
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Wil je weten hoe je productie écht presteert? Laat ons een KPI-assessment doen en
              een dashboard-prototype bouwen voor jouw situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=kpi-assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Plan KPI Assessment <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/oee-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
              >
                Probeer OEE Calculator
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
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">OEE Verbeteren</h3>
              <p className="text-gray-400 text-sm">Van 65% naar 85% met bewezen strategieën</p>
            </Link>
            <Link href="/blog/productie-stilstand-verminderen" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Stilstand Verminderen</h3>
              <p className="text-gray-400 text-sm">Praktische tips voor hogere beschikbaarheid</p>
            </Link>
            <Link href="/blog/smart-manufacturing-trends-2025" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Smart Manufacturing 2025</h3>
              <p className="text-gray-400 text-sm">De belangrijkste trends voor MKB</p>
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
              <Link href="/diensten/cobot-integratie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Cobot Integratie</span>
              </Link>
              <Link href="/diensten/industriele-automatisering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Industriële Automatisering</span>
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
