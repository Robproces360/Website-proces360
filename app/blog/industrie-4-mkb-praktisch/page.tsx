'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, Wifi, Cloud, BarChart3, Bot, Cpu, Database, Cog, ChevronRight } from 'lucide-react';

export default function Industrie4ArticlePage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar blog
          </Link>
        </nav>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full mb-4">
            Digitalisering
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Industrie 4.0 voor MKB: Praktisch Beginnen Zonder Miljoeneninvestering
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Smart Industry hoeft niet duur of complex te zijn. Ontdek hoe je met kleine stappen
            en beperkt budget je fabriek digitaliseert. Focus op ROI, niet op buzzwords.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />Rob Derks</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />12 december 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />12 min leestijd</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> Industrie 4.0 gaat niet over fancy technologie.
              Het gaat over data gebruiken om betere beslissingen te nemen.
              Start klein, meet resultaat, schaal op wat werkt.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-primary-500" />
              Wat is Industrie 4.0?
            </h2>
            <p className="text-gray-300 mb-6">
              De vierde industriële revolutie draait om het verbinden van fysieke productie met digitale technologie.
              Voor MKB betekent dit praktisch:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <Wifi className="w-8 h-8 text-primary-500 mb-3" />
                <h4 className="font-bold text-white mb-2">Connectiviteit</h4>
                <p className="text-sm text-gray-400 m-0">Machines die data delen. Van output-tellers tot volledige OEE-monitoring.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <Database className="w-8 h-8 text-primary-500 mb-3" />
                <h4 className="font-bold text-white mb-2">Data & Analytics</h4>
                <p className="text-sm text-gray-400 m-0">Data verzamelen en analyseren. Van Excel naar dashboards.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <Bot className="w-8 h-8 text-primary-500 mb-3" />
                <h4 className="font-bold text-white mb-2">Automatisering</h4>
                <p className="text-sm text-gray-400 m-0">Cobots, AGVs, en geautomatiseerde workflows.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                <Cloud className="w-8 h-8 text-primary-500 mb-3" />
                <h4 className="font-bold text-white mb-2">Cloud & Integratie</h4>
                <p className="text-sm text-gray-400 m-0">Systemen die met elkaar praten. ERP, MES, machines.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Praktische Startpunten (€500-€5.000)</h2>
            <div className="space-y-4">
              {[
                { budget: '€500-1.000', title: 'Handmatige OEE-registratie', desc: 'Whiteboard + Excel. Operators noteren stilstand en output. Kost bijna niets, levert direct inzicht.' },
                { budget: '€1.000-2.500', title: 'Eenvoudige machine-monitoring', desc: 'Retrofit sensoren (draai-uren, aan/uit) + IoT-gateway. Cloud-dashboard voor real-time status.' },
                { budget: '€2.500-5.000', title: 'Productie-dashboard', desc: 'TV-scherm bij de lijn met live OEE, output, targets. Visueel management dat werkt.' },
                { budget: '€3.000-5.000', title: 'Barcode/QR-scanning', desc: 'Digitale registratie van orders, materiaal, kwaliteit. Foutreductie en traceerbaarheid.' },
              ].map((item, index) => (
                <div key={index} className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">{item.budget}</span>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">De Valkuil: Technologie zonder Doel</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-white m-0">
                <strong>Waarschuwing:</strong> Investeer niet in technologie omdat het modern is.
                Elke investering moet een concreet probleem oplossen met meetbare ROI.
                &quot;We hebben een dashboard nodig&quot; is geen goed startpunt.
                &quot;We verliezen €50K/jaar aan stilstand die we niet kunnen analyseren&quot; wél.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Waar ligt jouw digitale kans?</h3>
              <p className="text-gray-400 mb-6">Start met OEE-meting - de basis van elke Smart Factory.</p>
              <Link href="/oee-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                <BarChart3 className="w-5 h-5" />
                OEE Calculator
              </Link>
            </div>
          </section>
        </div>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mt-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl">RD</div>
            <div>
              <h3 className="text-lg font-bold text-white">Rob Derks</h3>
              <p className="text-gray-400 text-sm mb-3">Oprichter Proces360 | 22+ jaar productie-ervaring</p>
              <Link href="/rob-derks" className="text-primary-500 text-sm font-medium hover:underline">Meer over Rob →</Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Gerelateerde Artikelen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Manufacturing Trends 2025",
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
                title: "Digital Twin in Productie",
                description: "Simuleer en optimaliseer je productieproces digitaal.",
                href: "/blog/digital-twin-productie",
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
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ontdek Onze Diensten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/diensten/procesoptimalisatie", title: "Procesoptimalisatie", desc: "Lean en data-gedreven optimalisatie", icon: Cog },
              { href: "/diensten/oee-verbetering", title: "OEE Verbetering", desc: "Verhoog machine-effectiviteit", icon: BarChart3 },
              { href: "/diensten/cobot-integratie", title: "Cobot Integratie", desc: "Automatiseer met cobots", icon: Bot },
              { href: "/diensten/industriele-automatisering", title: "Industriële Automatisering", desc: "End-to-end automatisering", icon: Cpu },
              { href: "/diensten/productie-dashboards", title: "Productie Dashboards", desc: "Real-time data-inzicht", icon: BarChart3 },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center p-4 bg-bg-secondary rounded-lg border border-white/10 hover:border-primary-500/50 transition-colors group"
              >
                <link.icon className="w-5 h-5 text-primary-500 mr-3" />
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-sm text-gray-400">{link.desc}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
