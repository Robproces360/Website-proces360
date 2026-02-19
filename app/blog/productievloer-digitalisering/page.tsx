'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
import {
  Smartphone, CheckCircle, ArrowRight, TrendingUp, Clock, Target,
  FileText, AlertTriangle, Lightbulb, ChevronRight, BarChart3,
  Tablet, Wifi, Database, QrCode, ClipboardCheck, Users, Zap, Settings
} from 'lucide-react';

const tableOfContents = [
  { id: 'waarom-digitaliseren', title: 'Waarom Digitaliseren?' },
  { id: 'papier-vs-digitaal', title: 'Papier vs Digitaal' },
  { id: 'wat-digitaliseren', title: 'Wat te Digitaliseren' },
  { id: 'technologie-keuzes', title: 'Technologie Keuzes' },
  { id: '90-dagen-plan', title: '90 Dagen Plan' },
  { id: 'praktijkcases', title: 'Praktijkcases' },
  { id: 'veelgemaakte-fouten', title: 'Veelgemaakte Fouten' },
  { id: 'faq', title: 'Veelgestelde Vragen' },
];

const papierProblemen = [
  { probleem: 'Data-invoer dubbel werk', impact: '15-30 min/dag per operator voor overtypen', icon: FileText },
  { probleem: 'Fouten door handschrift', impact: '5-10% van registraties onleesbaar of fout', icon: AlertTriangle },
  { probleem: 'Geen real-time inzicht', impact: 'Informatie pas na uren/dagen beschikbaar', icon: Clock },
  { probleem: 'Verloren documenten', impact: '2-5% van werkbonnen raakt zoek', icon: FileText },
  { probleem: 'Geen traceability', impact: 'Audits kosten dagen werk', icon: Database },
  { probleem: 'Geen analyse mogelijk', impact: 'Trends en patronen blijven onzichtbaar', icon: BarChart3 },
];

const digitaliseringsFasen = [
  {
    fase: 'Fase 1: Foundation',
    duur: 'Week 1-3',
    activiteiten: ['Wifi/netwerk check op werkvloer', 'Hardware selectie (tablets/terminals)', 'Software selectie', 'Pilot proces kiezen'],
    resultaat: 'Infrastructuur gereed voor pilot',
  },
  {
    fase: 'Fase 2: Pilot',
    duur: 'Week 4-8',
    activiteiten: ['Eerste formulier digitaliseren', 'Training pilot team', 'Go-live op 1 lijn/afdeling', 'Feedback verzamelen en aanpassen'],
    resultaat: 'Werkend digitaal proces, eerste users succesvol',
  },
  {
    fase: 'Fase 3: Uitrol',
    duur: 'Week 9-12',
    activiteiten: ['Resterende formulieren digitaliseren', 'Training alle operators', 'Uitrol naar alle afdelingen', 'Dashboard & rapportage live'],
    resultaat: 'Volledig papierloze werkvloer',
  },
  {
    fase: 'Fase 4: Optimalisatie',
    duur: 'Week 13+',
    activiteiten: ['Automatisering van workflows', 'Integratie met ERP', 'Geavanceerde analyses', 'Continue verbetering'],
    resultaat: 'Geoptimaliseerde digitale processen',
  },
];

const technologieOpties = [
  { naam: 'Rugged Tablets', prijs: '€400-1.200/stuk', voordelen: ['Mobiel', 'Touch interface', 'Camera voor foto/scan'], nadelen: ['Batterij management', 'Diefstal/schade risico'], geschikt: 'Mobiele operators, wisselende werkplekken' },
  { naam: 'Vaste Terminals', prijs: '€800-2.500/stuk', voordelen: ['Altijd beschikbaar', 'Groot scherm', 'Geen batterij'], nadelen: ['Vaste locatie', 'Hogere aanschaf'], geschikt: 'Vaste werkstations, machines' },
  { naam: 'Industriële PC', prijs: '€1.500-4.000/stuk', voordelen: ['Robuust', 'Uitgebreide I/O', 'Machine-koppeling'], nadelen: ['Duur', 'Minder mobiel'], geschikt: 'Machine-integratie, HMI vervanging' },
  { naam: 'Smartphone BYOD', prijs: '€0-200/licentie', voordelen: ['Geen hardware investering', 'Vertrouwd voor users'], nadelen: ['Afleiding risico', 'Beveiliging'], geschikt: 'Quick start, support functies' },
];

const softwareOpties = [
  { categorie: 'Low-Code Platforms', voorbeelden: ['Microsoft Power Apps', 'Tulip', 'AppSheet'], investering: '€500-2.000/maand', implementatie: '2-6 weken', geschikt: 'Snelle start, maatwerk formulieren' },
  { categorie: 'Shop Floor Apps', voorbeelden: ['Azumuta', 'Poka', 'VKS'], investering: '€1.000-5.000/maand', implementatie: '4-12 weken', geschikt: 'Werk instructies, training, kwaliteit' },
  { categorie: 'MES Systemen', voorbeelden: ['MPDV', 'Critical Manufacturing', 'AVEVA'], investering: '€30.000-150.000', implementatie: '3-12 maanden', geschikt: 'Complete productie-aansturing' },
  { categorie: 'ERP Modules', voorbeelden: ['SAP ME', 'Microsoft D365', 'Exact Globe'], investering: 'Variabel', implementatie: '3-6 maanden', geschikt: 'Integratie met bestaand ERP' },
];

const praktijkcases = [
  {
    bedrijf: 'Metaalbewerker Twente',
    sector: 'Plaatwerk',
    medewerkers: '45 FTE',
    situatie: '200+ werkbonnen per dag op papier',
    oplossing: 'Tablets met custom app voor werkbonnen, tijd- en materiaalregistratie',
    investering: '€35.000',
    resultaat: 'Administratietijd -65%, real-time inzicht, geen zoekgeraakte bonnen meer',
    doorlooptijd: '10 weken',
  },
  {
    bedrijf: 'Voedselverpakker Brabant',
    sector: 'Food packaging',
    medewerkers: '120 FTE',
    situatie: 'Papieren HACCP checklists, veel audit-stress',
    oplossing: 'Digitale checklists op vaste terminals, automatische escalatie',
    investering: '€55.000',
    resultaat: 'Audit tijd -80%, naleving 100%, foto-bewijs bij afwijkingen',
    doorlooptijd: '12 weken',
  },
  {
    bedrijf: 'Machinefabriek Gelderland',
    sector: 'Equipment manufacturing',
    medewerkers: '65 FTE',
    situatie: 'Tekeningen op papier, versie-chaos',
    oplossing: 'Digitale werkinstructies met 3D-viewer, QR-code scanning',
    investering: '€45.000',
    resultaat: 'Fouten door verkeerde versie: 0, eerste-keer-goed +18%',
    doorlooptijd: '8 weken',
  },
];

const veelgemaakteFouten = [
  { fout: 'Papier 1-op-1 digitaliseren', oplossing: 'Herontwerp processen. Digitaal biedt nieuwe mogelijkheden zoals automatische berekeningen en validaties.' },
  { fout: 'Te veel velden/clicks', oplossing: 'Minimaliseer invoer. Gebruik defaults, dropdowns en auto-fill waar mogelijk.' },
  { fout: 'Slechte wifi-dekking', oplossing: 'Test wifi op de hele werkvloer VOOR de pilot. Investeer in industriële access points.' },
  { fout: 'Training onderschatten', oplossing: 'Plan 2-4 uur training per gebruiker. Maak superusers die collega\'s helpen.' },
  { fout: 'Geen fallback plan', oplossing: 'Wat als systeem uitvalt? Houd simpele backup-procedure (nood-formulieren).' },
  { fout: 'IT niet betrekken', oplossing: 'Betrek IT vroeg voor infrastructuur, beveiliging en integraties.' },
];

const faqItems = [
  { vraag: 'Hoeveel kost productievloer digitalisering?', antwoord: 'Budget €20.000-75.000 voor een gemiddeld MKB met 30-100 medewerkers. Dit omvat hardware (€5.000-25.000), software (€5.000-20.000 jaar 1) en implementatie (€10.000-30.000).' },
  { vraag: 'Kunnen oudere werknemers hiermee werken?', antwoord: 'Ja, met de juiste aanpak. Kies intuïtieve touch-interfaces, grote knoppen, en investeer in training. Betrek oudere medewerkers bij het ontwerp. Zij kennen de processen het beste.' },
  { vraag: 'Wat als internet uitvalt?', antwoord: 'Kies software met offline-modus. Data wordt lokaal opgeslagen en gesynchroniseerd zodra verbinding terugkomt. Dit is standaard bij goede shop floor apps.' },
  { vraag: 'Hoe lang duurt de implementatie?', antwoord: 'Een pilot op 1 afdeling: 4-8 weken. Volledige uitrol: 8-16 weken. Met het 90-dagen plan kunt u van start tot volledig papierloos in 3 maanden.' },
  { vraag: 'Moeten we alles in één keer digitaliseren?', antwoord: 'Nee, start met één high-impact proces (bijv. werkbonnen of kwaliteits checklists). Bewijs de waarde, leer, en rol dan verder uit.' },
  { vraag: 'Wat met handtekeningen en goedkeuringen?', antwoord: 'Digitale handtekeningen zijn juridisch geldig (eIDAS regelgeving). U kunt eenvoudige PIN-codes, biometrie of getekende handtekeningen op touchscreen gebruiken.' },
];

export default function ProductievloerDigitaliseringPage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Productievloer Digitalisering</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full">
              Procesoptimalisatie
            </span>
            <span className="text-gray-400 text-sm">12 min leestijd</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Productievloer Digitalisering: Van Papier naar Papierloos in 90 Dagen
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Werkbonnen, checklists, kwaliteitsregistraties—weg met die papierberg! Ontdek hoe
            u uw productievloer digitaliseert met een praktisch 90-dagen stappenplan.
            Inclusief technology keuzes, ROI berekening en praktijkcases.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                <span className="text-primary-400 font-bold">RD</span>
              </div>
              <div>
                <Link href="/rob-derks" className="text-white hover:text-primary-400 transition-colors">Rob Derks</Link>
                <p className="text-gray-500 text-xs">Digitalisering Specialist</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 juli 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Tablet className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">90</p>
              <p className="text-gray-400 text-sm">Dagen naar papierloos</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">65%</p>
              <p className="text-gray-400 text-sm">Minder admin tijd</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-400 text-sm">Real-time data</p>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">12-18</p>
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

      {/* Section: Waarom Digitaliseren */}
      <section id="waarom-digitaliseren" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary-500" />
            </span>
            Waarom Digitaliseren?
          </h2>

          <p className="text-gray-300 mb-8">
            Papier op de werkvloer is een overblijfsel uit de vorige eeuw. Het kost tijd, veroorzaakt
            fouten en blokkeert real-time inzicht. Dit zijn de problemen die u oplost met digitalisering:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {papierProblemen.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-bg-secondary border border-white/10 rounded-lg">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.probleem}</h4>
                  <p className="text-gray-400 text-sm">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Papier vs Digitaal */}
      <section id="papier-vs-digitaal" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-500" />
            </span>
            Papier vs Digitaal: De Vergelijking
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Aspect</th>
                  <th className="text-left py-4 px-4 text-red-400 font-medium">Papier</th>
                  <th className="text-left py-4 px-4 text-green-400 font-medium">Digitaal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Data beschikbaarheid</td>
                  <td className="py-4 px-4 text-gray-400">Uren tot dagen</td>
                  <td className="py-4 px-4 text-gray-300">Real-time</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Foutgevoeligheid</td>
                  <td className="py-4 px-4 text-gray-400">5-10% invoerfouten</td>
                  <td className="py-4 px-4 text-gray-300">&lt;1% met validaties</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Zoeken/terugvinden</td>
                  <td className="py-4 px-4 text-gray-400">Minuten tot uren</td>
                  <td className="py-4 px-4 text-gray-300">Seconden</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Analyse mogelijkheden</td>
                  <td className="py-4 px-4 text-gray-400">Handmatig, beperkt</td>
                  <td className="py-4 px-4 text-gray-300">Automatisch, uitgebreid</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Audit/compliance</td>
                  <td className="py-4 px-4 text-gray-400">Dagen voorbereiding</td>
                  <td className="py-4 px-4 text-gray-300">Instant rapport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: Wat Digitaliseren */}
      <section id="wat-digitaliseren" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-primary-500" />
            </span>
            Wat te Digitaliseren
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Start hier (high impact)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Werkbonnen:</strong> Tijd, materiaal, status registratie</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Kwaliteits checklists:</strong> Inspectie, metingen, vrijgave</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Machine logboeken:</strong> Storingen, onderhoud, instellingen</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Productie registratie:</strong> Output, afkeur, stilstand</span>
                </li>
              </ul>
            </div>
            <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Fase 2 (uitbreiding)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Werkinstructies:</strong> Digitale SOP&apos;s met foto/video</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Veiligheid:</strong> LOTO checklists, toolbox meetings</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Traceability:</strong> Batch tracking, lot registratie</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <Zap className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Training:</strong> Competentie tracking, certificeringen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Technologie Keuzes */}
      <section id="technologie-keuzes" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary-500" />
            </span>
            Technologie Keuzes
          </h2>

          <h3 className="text-xl font-bold text-white mb-4">Hardware Opties</h3>
          <div className="space-y-4 mb-8">
            {technologieOpties.map((optie, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-bold text-white">{optie.naam}</h4>
                  <span className="text-primary-400 font-medium">{optie.prijs}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">Geschikt voor: {optie.geschikt}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-400 text-xs font-medium mb-1">Voordelen:</p>
                    <ul className="text-gray-400 text-xs space-y-0.5">
                      {optie.voordelen.map((v, i) => <li key={i}>+ {v}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-xs font-medium mb-1">Nadelen:</p>
                    <ul className="text-gray-400 text-xs space-y-0.5">
                      {optie.nadelen.map((n, i) => <li key={i}>- {n}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Software Opties</h3>
          <div className="space-y-4">
            {softwareOpties.map((optie, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{optie.categorie}</h4>
                    <p className="text-gray-500 text-xs">{optie.voorbeelden.join(', ')}</p>
                  </div>
                  <span className="text-primary-400 font-medium text-sm">{optie.investering}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-500">Implementatie: <span className="text-white">{optie.implementatie}</span></span>
                  <span className="text-gray-500">Geschikt voor: <span className="text-white">{optie.geschikt}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: 90 Dagen Plan */}
      <section id="90-dagen-plan" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-500" />
            </span>
            Het 90 Dagen Plan
          </h2>

          <div className="space-y-6">
            {digitaliseringsFasen.map((fase, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{fase.fase}</h3>
                    <span className="text-primary-400 text-sm">{fase.duur}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {fase.activiteiten.map((activiteit, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {activiteit}
                    </div>
                  ))}
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm"><strong>Resultaat:</strong> {fase.resultaat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Praktijkcases */}
      <section id="praktijkcases" className="container mx-auto px-4 mb-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
            <span className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-500" />
            </span>
            Praktijkcases
          </h2>

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
                    <p className="text-gray-500 text-xs">{casus.doorlooptijd}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2"><strong className="text-white">Situatie:</strong> {casus.situatie}</p>
                <p className="text-gray-400 text-sm mb-4"><strong className="text-white">Oplossing:</strong> {casus.oplossing}</p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 font-medium">{casus.resultaat}</p>
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
            Veelgemaakte Fouten
          </h2>

          <div className="space-y-4">
            {veelgemaakteFouten.map((item, index) => (
              <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">{item.fout}</h3>
                <p className="text-gray-400 text-sm">
                  <span className="text-green-400 font-medium">Oplossing: </span>
                  {item.oplossing}
                </p>
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Klaar om papierloos te produceren?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Laat ons een quick scan doen van uw processen en een digitaliseringsplan opstellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=digitalisering"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Plan Digitalisering Scan <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/diensten/productie-dashboards"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
              >
                Bekijk Dashboard Diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde Artikelen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Manufacturing Trends 2026",
                description: "De belangrijkste ontwikkelingen in slimme productie.",
                href: "/blog/smart-manufacturing-trends-2025",
                tag: "Trends"
              },
              {
                title: "Machine Learning in Productie",
                description: "Praktische AI-toepassingen voor MKB-maakbedrijven.",
                href: "/blog/machine-learning-productie",
                tag: "AI"
              },
              {
                title: "Industrie 4.0 voor MKB",
                description: "Praktisch beginnen zonder miljoeneninvestering.",
                href: "/blog/industrie-4-mkb-praktisch",
                tag: "Digitalisering"
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-bg-secondary rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-colors group"
              >
                <span className="text-xs text-primary-400 font-medium">{article.tag}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </Link>
            ))}
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
              <Link href="/diensten/productie-dashboards" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Productie Dashboards</span>
              </Link>
              <Link href="/diensten/oee-verbetering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>OEE Verbetering</span>
              </Link>
              <Link href="/diensten/industriele-automatisering" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Industriële Automatisering</span>
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
