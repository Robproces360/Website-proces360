'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
import {
  Brain, CheckCircle, ArrowRight, TrendingUp, Clock, Target, Settings,
  Zap, AlertTriangle, Lightbulb, ChevronRight, BarChart3, Gauge,
  Eye, Database, Cpu, LineChart, Shield, Factory, Activity, Wrench
} from 'lucide-react';

const tableOfContents = [
  { id: 'wat-is-ml', title: 'Wat is Machine Learning?' },
  { id: 'toepassingen', title: 'Top 8 ML Toepassingen' },
  { id: 'predictive-maintenance', title: 'Predictive Maintenance met ML' },
  { id: 'quality-control', title: 'AI Kwaliteitscontrole' },
  { id: 'demand-forecasting', title: 'Demand Forecasting' },
  { id: 'proces-optimalisatie', title: 'Procesoptimalisatie met AI' },
  { id: 'implementatie', title: 'Implementatie Stappenplan' },
  { id: 'praktijkcases', title: 'Praktijkcases' },
  { id: 'roi-analyse', title: 'ROI Analyse' },
  { id: 'faq', title: 'Veelgestelde Vragen' },
];

const mlToepassingen = [
  { rang: 1, naam: 'Predictive Maintenance', beschrijving: 'Voorspel storingen 2-4 weken vooruit op basis van sensordata', impact: 'Zeer Hoog', adoptie: '67%', besparing: '25-40% onderhoudskosten' },
  { rang: 2, naam: 'Visual Quality Inspection', beschrijving: 'Computer vision detecteert defecten sneller dan menselijke inspectie', impact: 'Zeer Hoog', adoptie: '52%', besparing: '15-30% kwaliteitskosten' },
  { rang: 3, naam: 'Demand Forecasting', beschrijving: 'AI voorspelt vraag voor optimale productieplanning', impact: 'Hoog', adoptie: '45%', besparing: '10-25% voorraadkosten' },
  { rang: 4, naam: 'Process Optimization', beschrijving: 'Algoritmes optimaliseren procesparameters automatisch', impact: 'Hoog', adoptie: '38%', besparing: '8-15% productiekosten' },
  { rang: 5, naam: 'Anomaly Detection', beschrijving: 'Detecteer afwijkingen in productiedata real-time', impact: 'Hoog', adoptie: '41%', besparing: '10-20% uitval' },
  { rang: 6, naam: 'Energy Optimization', beschrijving: 'AI stuurt energieverbruik op basis van productiepatronen', impact: 'Medium', adoptie: '35%', besparing: '12-25% energiekosten' },
  { rang: 7, naam: 'Supply Chain Optimization', beschrijving: 'Optimaliseer inkoop, routing en voorraadbeheer', impact: 'Hoog', adoptie: '29%', besparing: '8-18% logistieke kosten' },
  { rang: 8, naam: 'Yield Optimization', beschrijving: 'Maximaliseer opbrengst uit grondstoffen', impact: 'Medium', adoptie: '24%', besparing: '5-15% materiaalkosten' },
];

const mlReadinessChecklist = [
  { categorie: 'Data', items: ['Minimaal 6-12 maanden historische data', 'Data wordt consistent verzameld', 'Data is digitaal beschikbaar (niet op papier)', 'Datakwaliteit is acceptabel'] },
  { categorie: 'Infrastructuur', items: ['Machines leveren digitale output', 'Netwerk-connectiviteit aanwezig', 'IT-afdeling beschikbaar voor ondersteuning', 'Budget voor cloud of edge computing'] },
  { categorie: 'Organisatie', items: ['Management commitment', 'Duidelijke use case gedefinieerd', 'KPIs vastgesteld', 'Team beschikbaar voor implementatie'] },
  { categorie: 'Proces', items: ['Proces is redelijk stabiel', 'Variabelen zijn meetbaar', 'Verbeterpotentieel is aanwezig', 'Domeinkennis beschikbaar'] },
];

const praktijkcases = [
  {
    bedrijf: 'Metaalgieterij Brabant',
    sector: 'Metaalgieten',
    toepassing: 'Predictive Maintenance',
    investering: '€45.000',
    beschrijving: 'ML-model voorspelt slijtage gietmallen op basis van temperatuur, druk en aantal cycli. Technici plannen vervanging proactief.',
    resultaat: 'Ongeplande stilstand -62%, onderhoudskosten -28%',
    technologie: ['Vibration sensors', 'Temperature sensors', 'Azure ML'],
  },
  {
    bedrijf: 'Kunststof Verpakkingen Noord',
    sector: 'Spuitgieten',
    toepassing: 'Quality Vision',
    investering: '€65.000',
    beschrijving: 'CNN-model inspecteert 100% van de output op defecten. Detecteert scheurtjes, kleurafwijkingen en maatafwijkingen automatisch.',
    resultaat: 'Detectie defecten +340%, inspectietijd -85%',
    technologie: ['Industrial camera', 'NVIDIA Jetson', 'Custom CNN model'],
  },
  {
    bedrijf: 'Voedselproducent Gelderland',
    sector: 'Food & Beverage',
    toepassing: 'Demand Forecasting',
    investering: '€35.000',
    beschrijving: 'ML voorspelt dagelijkse vraag per SKU op basis van seizoenspatronen, weer, en promoties. Productieplanning automatisch aangepast.',
    resultaat: 'Verspilling -45%, service level +8 procentpunt',
    technologie: ['Time series ML', 'ERP integratie', 'Prophet/XGBoost'],
  },
  {
    bedrijf: 'CNC Precisie Zuid',
    sector: 'Verspaning',
    toepassing: 'Process Optimization',
    investering: '€55.000',
    beschrijving: 'Reinforcement learning optimaliseert snijparameters automatisch per materiaal/bewerkingstype. Leert continu bij.',
    resultaat: 'Cyclustijd -12%, toolslijtage -18%',
    technologie: ['Edge computing', 'RL algoritme', 'OPC-UA'],
  },
];

const implementatieStappen = [
  { stap: 1, titel: 'Use Case Definitie', beschrijving: 'Identificeer het probleem met de hoogste ROI potentie', activiteiten: ['Pain points analyseren', 'Data beschikbaarheid checken', 'ROI inschatten', 'Stakeholders alignen'] },
  { stap: 2, titel: 'Data Assessment', beschrijving: 'Evalueer kwaliteit en beschikbaarheid van data', activiteiten: ['Data inventarisatie', 'Kwaliteitsanalyse', 'Gaps identificeren', 'Datapipeline ontwerpen'] },
  { stap: 3, titel: 'Proof of Concept', beschrijving: 'Bouw en test eerste model met historische data', activiteiten: ['Model selectie', 'Training met historische data', 'Validatie/testing', 'Resultaten presenteren'] },
  { stap: 4, titel: 'Pilot Productie', beschrijving: 'Test model in echte productieomgeving op beperkte schaal', activiteiten: ['Live data koppelen', 'Model monitoren', 'Feedback verzamelen', 'Model tunen'] },
  { stap: 5, titel: 'Uitrol & Opschaling', beschrijving: 'Rol succesvol model uit naar hele productie', activiteiten: ['Infrastructuur schalen', 'Training gebruikers', 'Monitoring opzetten', 'Continue verbetering'] },
];

const roiFactoren = [
  { factor: 'Onderhoudskosten reductie', typisch: '25-40%', hoe: 'Predictive maintenance voorkomt ongeplande storingen en vermindert preventief onderhoud' },
  { factor: 'Kwaliteitskosten reductie', typisch: '15-30%', hoe: 'Vroege detectie van defecten voorkomt uitval en klachten' },
  { factor: 'Productiviteitsverhoging', typisch: '8-15%', hoe: 'Geoptimaliseerde parameters en minder stilstand' },
  { factor: 'Energiebesparing', typisch: '10-20%', hoe: 'Slimme aansturing op basis van productiepatronen' },
  { factor: 'Voorraadreductie', typisch: '15-25%', hoe: 'Betere vraagvoorspelling vermindert veiligheidsvoorraden' },
];

const faqItems = [
  { vraag: 'Wat is machine learning in productie?', antwoord: 'Machine learning in productie is het toepassen van algoritmes die automatisch leren van productiedata om voorspellingen te doen, patronen te herkennen en processen te optimaliseren—zonder expliciet geprogrammeerd te worden voor elke situatie.' },
  { vraag: 'Hoeveel data heb ik nodig voor ML?', antwoord: 'Voor de meeste toepassingen hebt u minimaal 6-12 maanden historische data nodig. Voor seizoensgebonden patronen is 2-3 jaar ideaal. Quality vision kan al werken met 500-1000 gelabelde voorbeelden.' },
  { vraag: 'Wat kost ML implementatie?', antwoord: 'Een eerste ML-pilot kost typisch €25.000-75.000 inclusief hardware, software en consultancy. Schaalbare productie-implementaties kosten €50.000-200.000. Cloud-oplossingen verlagen de initiële investering.' },
  { vraag: 'Hebben we datascientists nodig?', antwoord: 'Voor de eerste projecten niet perse. Werk samen met een ML-partner die de modellen bouwt. AutoML en no-code platforms maken simpele toepassingen toegankelijk. Voor structurele toepassing is interne ML-kennis aan te raden.' },
  { vraag: 'Wat als onze data "rommelig" is?', antwoord: '80% van ML-projecten gaat over data-preparatie. Start met de data die u hebt, verbeter de dataverzameling tijdens het project. Perfecte data is niet nodig om te beginnen, maar wel om te schalen.' },
  { vraag: 'Vervangt AI onze operators?', antwoord: 'Nee, ML augmenteert operators. Het geeft hen betere informatie en neemt routinebeslissingen over. Operators blijven nodig voor complexe situaties, troubleshooting en procesinnovatie.' },
  { vraag: 'Hoe lang duurt een ML-project?', antwoord: 'Proof of Concept: 4-8 weken. Pilot in productie: 2-3 maanden. Volledige uitrol: 6-12 maanden. Continu verbeteren van modellen is een doorlopend proces.' },
  { vraag: 'Welke ML-toepassing heeft de snelste ROI?', antwoord: 'Predictive maintenance en quality vision hebben typisch de snelste en hoogste ROI. Ze bouwen op bestaande sensordata en hebben duidelijk meetbare resultaten (stilstand, uitval).' },
];

export default function MachineLearningProductiePage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Machine Learning Productie</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full">
              Industriële Automatisering
            </span>
            <span className="text-gray-400 text-sm">14 min leestijd</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Machine Learning in Productie: Praktische AI-Toepassingen voor MKB
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Van predictive maintenance tot quality vision: ontdek hoe machine learning uw productie
            slimmer, efficiënter en voorspelbaarder maakt. Geen science fiction, maar bewezen
            technologie die nu beschikbaar is voor MKB-maakbedrijven.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                <span className="text-primary-400 font-bold">RD</span>
              </div>
              <div>
                <Link href="/rob-derks" className="text-white hover:text-primary-400 transition-colors">Rob Derks</Link>
                <p className="text-gray-500 text-xs">ML & Productie Specialist</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24 juni 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>9.500+ woorden</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Brain className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">67%</p>
              <p className="text-gray-400 text-sm">Adopteert PdM met ML</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">25-40%</p>
              <p className="text-gray-400 text-sm">Onderhoud besparing</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">8-12</p>
              <p className="text-gray-400 text-sm">Weken tot PoC</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">12-24</p>
              <p className="text-gray-400 text-sm">Maanden ROI</p>
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

      {/* Section: Wat is ML */}
      <section id="wat-is-ml" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-500" />
            </span>
            Wat is Machine Learning in Productie?
          </h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Machine learning (ML) is een tak van kunstmatige intelligentie waarbij algoritmes
              automatisch <strong className="text-white">leren van data</strong> om voorspellingen
              te doen of beslissingen te nemen—zonder expliciet geprogrammeerd te worden voor
              elke situatie.
            </p>

            <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">ML vs Traditionele Automatisering</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Traditioneel (rule-based)</h4>
                  <p className="text-gray-400 text-sm">
                    &quot;Als temperatuur &gt; 80°C, dan alarm.&quot; De regels worden vooraf
                    door mensen gedefinieerd. Werkt goed voor bekende situaties.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Machine Learning</h4>
                  <p className="text-gray-400 text-sm">
                    &quot;Leer van 10.000 voorbeelden wanneer een storing optreedt.&quot;
                    Het systeem ontdekt zelf de patronen—ook onbekende.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Soorten Machine Learning</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Supervised Learning</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Leert van gelabelde voorbeelden. &quot;Dit is een goed product, dit is uitval.&quot;
                </p>
                <p className="text-primary-400 text-xs">Gebruik: Quality inspection, predictive maintenance</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Unsupervised Learning</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Ontdekt patronen zonder labels. &quot;Groepeer vergelijkbare situaties.&quot;
                </p>
                <p className="text-primary-400 text-xs">Gebruik: Anomaly detection, clustering</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h4 className="font-bold text-white mb-2">Reinforcement Learning</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Leert door trial & error met beloningen. &quot;Optimaliseer deze parameter.&quot;
                </p>
                <p className="text-primary-400 text-xs">Gebruik: Process optimization, scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Top 8 Toepassingen */}
      <section id="toepassingen" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary-500" />
            </span>
            Top 8 ML Toepassingen in Productie
          </h2>

          <div className="space-y-4 mb-8">
            {mlToepassingen.map((toepassing) => (
              <div key={toepassing.rang} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-400 font-bold">{toepassing.rang}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-white">{toepassing.naam}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                        toepassing.impact === 'Zeer Hoog' ? 'bg-green-500/20 text-green-400' :
                        toepassing.impact === 'Hoog' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {toepassing.impact} impact
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{toepassing.beschrijving}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-500">Adoptie NL: <span className="text-white">{toepassing.adoptie}</span></span>
                      <span className="text-gray-500">Besparing: <span className="text-green-400">{toepassing.besparing}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Predictive Maintenance */}
      <section id="predictive-maintenance" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-500" />
            </span>
            Predictive Maintenance met Machine Learning
          </h2>

          <p className="text-gray-300 mb-8">
            Predictive maintenance is de meest volwassen en bewezen ML-toepassing in productie.
            In plaats van gepland onderhoud (te vroeg) of reactief onderhoud (te laat), voorspelt
            ML wanneer onderhoud écht nodig is.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
              <h4 className="font-bold text-red-400 mb-2">Reactief</h4>
              <p className="text-gray-400 text-sm mb-2">Repareren na storing</p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Hoge stilstandkosten</li>
                <li>• Onvoorspelbaar</li>
                <li>• Noodinkopen</li>
              </ul>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
              <h4 className="font-bold text-yellow-400 mb-2">Preventief</h4>
              <p className="text-gray-400 text-sm mb-2">Vast schema onderhoud</p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Vaak te vroeg</li>
                <li>• Vaste kosten</li>
                <li>• Nog steeds storingen</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
              <h4 className="font-bold text-green-400 mb-2">Predictief (ML)</h4>
              <p className="text-gray-400 text-sm mb-2">Op basis van conditie</p>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Just-in-time onderhoud</li>
                <li>• Minimale stilstand</li>
                <li>• Geplande inkoop</li>
              </ul>
            </div>
          </div>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Typische PdM Sensordata</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Vibraties</h4>
                  <p className="text-gray-500 text-xs">Onbalans, slijtage lagers, losse onderdelen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Gauge className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Temperatuur</h4>
                  <p className="text-gray-500 text-xs">Oververhitting, koeling problemen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Stroomverbruik</h4>
                  <p className="text-gray-500 text-xs">Motor slijtage, belastingsveranderingen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Procesdata</h4>
                  <p className="text-gray-500 text-xs">Druk, flow, cyclustijd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Quality Control */}
      <section id="quality-control" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary-500" />
            </span>
            AI-Gestuurde Kwaliteitscontrole
          </h2>

          <p className="text-gray-300 mb-8">
            Computer vision met deep learning detecteert defecten sneller, consistenter en vaak
            nauwkeuriger dan menselijke inspectie. Perfect voor 100% inspectie op hoge snelheid.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Voordelen AI Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">100% inspectie:</strong> Elke eenheid, geen steekproef</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Consistentie:</strong> Geen vermoeidheid of afleiding</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Snelheid:</strong> Milliseconden per inspectie</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Documentatie:</strong> Automatisch beeld archief</span>
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Typische Detecties</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Oppervlakte defecten (krassen, deuken)
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Maatafwijkingen
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Kleurverschillen
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Assemblagefouten
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Label verificatie
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Completeness check
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Demand Forecasting */}
      <section id="demand-forecasting" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <LineChart className="w-6 h-6 text-primary-500" />
            </span>
            Demand Forecasting met AI
          </h2>

          <p className="text-gray-300 mb-8">
            ML-modellen voorspellen vraag beter dan traditionele methodes door complexe patronen
            te herkennen in historische data, seizoenseffecten, en externe factoren.
          </p>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Input voor Vraagvoorspelling</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-bold text-primary-400 mb-2">Historische data</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Verkopen per periode</li>
                  <li>• Seizoenspatronen</li>
                  <li>• Trend</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-400 mb-2">Externe factoren</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Weer</li>
                  <li>• Feestdagen</li>
                  <li>• Economische indicatoren</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-400 mb-2">Business events</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Promoties</li>
                  <li>• Nieuwe producten</li>
                  <li>• Concurrentie-acties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Proces Optimalisatie */}
      <section id="proces-optimalisatie" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary-500" />
            </span>
            Procesoptimalisatie met AI
          </h2>

          <p className="text-gray-300 mb-8">
            ML-algoritmes vinden optimale procesparameters die mensen niet intuïtief zouden kiezen.
            Ze balanceren meerdere doelen tegelijk: snelheid, kwaliteit, energieverbruik en slijtage.
          </p>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary-400" />
              Voorbeeld: Spuitgieten Optimalisatie
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Een ML-model optimaliseert continue de injectiedruk, temperatuur en koeltijd.
              Het leert van duizenden cycli welke combinaties de beste kwaliteit opleveren
              met minimale cyclustijd en energieverbruik.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-gray-500">Resultaat: <span className="text-green-400">Cyclustijd -8%, uitval -35%</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Implementatie */}
      <section id="implementatie" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-500" />
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
                  {stap.stap < 5 && <div className="w-0.5 h-full bg-primary-500/30 mt-2"></div>}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{stap.titel}</h3>
                  <p className="text-gray-400 mb-4">{stap.beschrijving}</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {stap.activiteiten.map((activiteit, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {activiteit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">ML Readiness Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mlReadinessChecklist.map((categorie) => (
                <div key={categorie.categorie}>
                  <h4 className="font-bold text-primary-400 mb-3">{categorie.categorie}</h4>
                  <ul className="space-y-2">
                    {categorie.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Praktijkcases */}
      <section id="praktijkcases" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Factory className="w-6 h-6 text-primary-500" />
            </span>
            Praktijkcases: ML in Nederlandse Productie
          </h2>

          <div className="space-y-6">
            {praktijkcases.map((casus, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{casus.bedrijf}</h3>
                    <p className="text-gray-400 text-sm">{casus.sector} | {casus.toepassing}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-400 font-bold">{casus.investering}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{casus.beschrijving}</p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                  <p className="text-green-400 font-medium">{casus.resultaat}</p>
                </div>
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

      {/* Section: ROI Analyse */}
      <section id="roi-analyse" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-500" />
            </span>
            ROI Analyse
          </h2>

          <div className="space-y-4 mb-8">
            {roiFactoren.map((factor, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-white">{factor.factor}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">
                    {factor.typisch}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{factor.hoe}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Typische Investering vs. ROI</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-gray-500 text-sm">Pilot/PoC</p>
                <p className="text-2xl font-bold text-white">€25-75K</p>
                <p className="text-primary-400 text-sm">ROI in 8-12 maanden</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Productie Implementatie</p>
                <p className="text-2xl font-bold text-white">€50-150K</p>
                <p className="text-primary-400 text-sm">ROI in 12-24 maanden</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">Enterprise Uitrol</p>
                <p className="text-2xl font-bold text-white">€100-300K</p>
                <p className="text-primary-400 text-sm">ROI in 18-36 maanden</p>
              </div>
            </div>
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
                <p className="text-primary-400 text-sm mb-3">ML & Productie Optimalisatie Specialist</p>
                <p className="text-gray-400 text-sm mb-4">
                  Ik help MKB-maakbedrijven machine learning toe te passen voor meetbare verbeteringen
                  in productiviteit, kwaliteit en onderhoudskosten.
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
              Klaar om ML toe te passen in uw productie?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Laat ons een ML-assessment doen. We identificeren de beste use cases voor uw
              situatie en schatten de potentiële ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=machine-learning"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Plan ML Assessment <ArrowRight className="w-5 h-5" />
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
            <Link href="/blog/smart-manufacturing-trends-2025" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Smart Manufacturing 2025</h3>
              <p className="text-gray-400 text-sm">Top 10 trends voor MKB-productiebedrijven</p>
            </Link>
            <Link href="/blog/predictive-maintenance-gids" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Predictive Maintenance</h3>
              <p className="text-gray-400 text-sm">Complete gids voorspellend onderhoud</p>
            </Link>
            <Link href="/blog/productie-kpis-complete-gids" className="group bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-primary-400 transition-colors">Productie KPIs</h3>
              <p className="text-gray-400 text-sm">De 15 belangrijkste metrics voor MKB</p>
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
              <Link href="/diensten/oee-verbetering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>OEE Verbetering</span>
              </Link>
              <Link href="/diensten/productie-dashboards" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Productie Dashboards</span>
              </Link>
              <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Procesoptimalisatie</span>
              </Link>
              <Link href="/diensten/cobot-integratie" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Cobot Integratie</span>
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
