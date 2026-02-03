'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User, Calendar, Calculator, Bot } from 'lucide-react';

const blogPosts = [
  // Februari 2026
  {
    slug: '360scan-foodbedrijf-247k-besparing',
    title: '€247.000 Jaarlijks Besparingspotentieel bij Foodproducent',
    excerpt: 'Uitgebreide 360Scan bij versproducent onthult €247.000 potentieel: 3,2 FTE besparing door automatisering, 18% OEE-verhoging en procesverbeteringen.',
    author: 'Rob Derks',
    date: '3 februari 2026',
    readTime: '12 min',
    category: 'Case Study',
    featured: true,
  },
  {
    slug: '360scan-case-69k-besparing',
    title: '€69.000+ Besparingspotentieel Ontdekt met Eén 360Scan',
    excerpt: 'Hoe een MKB-maakbedrijf in slechts één dag ontdekte waar meer dan €69.000 aan jaarlijkse besparingen verborgen zat — met kleine, praktische ingrepen.',
    author: 'Rob Derks',
    date: '3 februari 2026',
    readTime: '6 min',
    category: 'Case Study',
    featured: false,
  },
  // Januari 2026
  {
    slug: 'productieplanning-optimalisatie',
    title: 'Productieplanning Optimalisatie: Van Chaos naar Controle',
    excerpt: 'Hoe MKB-maakbedrijven hun productieplanning transformeren van Excel-chaos naar voorspelbare, geoptimaliseerde scheduling. Complete gids met methoden en tools.',
    author: 'Rob Derks',
    date: '7 januari 2026',
    readTime: '24 min',
    category: 'Procesoptimalisatie',
    featured: false,
  },
  {
    slug: 'oee-verbeteren-complete-gids',
    title: 'OEE Verbeteren: De Complete Gids voor 2026',
    excerpt: 'Leer alles over OEE (Overall Equipment Effectiveness), hoe je het berekent, en praktische tips om je OEE te verhogen van 50% naar 85%+.',
    author: 'Rob Derks',
    date: '9 januari 2026',
    readTime: '12 min',
    category: 'OEE',
    featured: false,
  },
  // December 2025
  {
    slug: 'digital-twin-productie',
    title: 'Digital Twin in Productie: Virtuele Fabriek voor Echte Resultaten',
    excerpt: 'Complete gids digital twins voor MKB-productie: simulatie, optimalisatie, predictive analytics. Van concept tot implementatie met praktijkcases.',
    author: 'Rob Derks',
    date: '9 december 2025',
    readTime: '22 min',
    category: 'Industrie 4.0',
    featured: false,
  },
  // November 2025
  {
    slug: 'automatisering-roi-berekenen',
    title: 'Automatisering ROI Berekenen: Investeren met Zekerheid',
    excerpt: 'Leer automatisering ROI berekenen: investeringsanalyse, terugverdientijd, kostenbesparing. Met rekentools en praktijkvoorbeelden voor MKB.',
    author: 'Rob Derks',
    date: '11 november 2025',
    readTime: '20 min',
    category: 'ROI',
    featured: false,
  },
  // Oktober 2025
  {
    slug: 'predictive-maintenance-gids',
    title: 'Predictive Maintenance: Complete Gids voor MKB-Productie',
    excerpt: 'Van reactief naar voorspellend onderhoud. Leer hoe sensoren, data en AI je helpen storingen te voorkomen voordat ze gebeuren.',
    author: 'Rob Derks',
    date: '14 oktober 2025',
    readTime: '21 min',
    category: 'Onderhoud',
    featured: false,
  },
  // September 2025
  {
    slug: 'cobot-vs-industriele-robot',
    title: 'Cobot vs Industriële Robot: De Ultieme Keuzegids',
    excerpt: 'Wanneer kies je een cobot en wanneer een industriële robot? Complete vergelijking met beslisboom, TCO-analyse en praktijkcases.',
    author: 'Rob Derks',
    date: '16 september 2025',
    readTime: '19 min',
    category: 'Robotisering',
    featured: false,
  },
  // Augustus 2025
  {
    slug: 'six-sigma-mkb',
    title: 'Six Sigma voor MKB: Kwaliteitsverbetering Zonder Complexiteit',
    excerpt: 'Six Sigma toegankelijk voor MKB-maakbedrijven. DMAIC methodologie, 7 essentiële tools en praktische implementatie zonder bureaucratie.',
    author: 'Rob Derks',
    date: '12 augustus 2025',
    readTime: '18 min',
    category: 'Kwaliteit',
    featured: false,
  },
  // Juli 2025
  {
    slug: 'productievloer-digitalisering',
    title: 'Productievloer Digitalisering: Van Papier naar Papierloos',
    excerpt: 'Praktische gids voor het digitaliseren van je productievloer. Werkinstructies, kwaliteitsregistratie en real-time data zonder grote investeringen.',
    author: 'Rob Derks',
    date: '8 juli 2025',
    readTime: '16 min',
    category: 'Digitalisering',
    featured: false,
  },
  // Juni 2025
  {
    slug: 'machine-learning-productie',
    title: 'Machine Learning in Productie: Praktische AI voor MKB',
    excerpt: 'Hoe MKB-maakbedrijven machine learning inzetten voor kwaliteitscontrole, voorspellend onderhoud en procesoptimalisatie. Geen PhD vereist.',
    author: 'Rob Derks',
    date: '10 juni 2025',
    readTime: '17 min',
    category: 'AI & ML',
    featured: false,
  },
  {
    slug: 'cobot-terugverdientijd-berekenen',
    title: 'Cobot Terugverdientijd Berekenen: ROI in 12-18 Maanden',
    excerpt: 'Ontdek hoe je de terugverdientijd van een cobot berekent en wanneer robotisering rendabel is voor jouw MKB-maakbedrijf.',
    author: 'Rob Derks',
    date: '7 juni 2025',
    readTime: '8 min',
    category: 'ROI',
    featured: false,
  },
  // Mei 2025
  {
    slug: 'automatisering-roadmap-mkb',
    title: 'Automatisering Roadmap voor MKB: Van Eerste Stap tot Smart Factory',
    excerpt: 'Bouw je eigen automatisering roadmap. Van quick wins naar volledige digitalisering met een pragmatische, stapsgewijze aanpak.',
    author: 'Rob Derks',
    date: '13 mei 2025',
    readTime: '15 min',
    category: 'Strategie',
    featured: false,
  },
  {
    slug: 'cobots-in-productie-complete-gids',
    title: 'Cobots in Productie: De Complete Gids voor MKB-Maakbedrijven',
    excerpt: 'Van selectie tot implementatie: alles wat je moet weten over collaborative robots (cobots) in de maakindustrie. Inclusief ROI-berekening.',
    author: 'Rob Derks',
    date: '6 mei 2025',
    readTime: '15 min',
    category: 'Robotisering',
    featured: false,
  },
  // April 2025
  {
    slug: 'smart-manufacturing-trends-2025',
    title: 'Smart Manufacturing Trends 2025: Wat MKB Moet Weten',
    excerpt: 'De belangrijkste trends in smart manufacturing voor 2025. Van AI tot duurzaamheid - welke ontwikkelingen zijn relevant voor jouw fabriek?',
    author: 'Rob Derks',
    date: '22 april 2025',
    readTime: '14 min',
    category: 'Industrie 4.0',
    featured: false,
  },
  {
    slug: 'productie-kpis-complete-gids',
    title: 'Productie KPIs Meten & Verbeteren: De Complete Gids',
    excerpt: 'Welke KPIs moet je meten in productie? Van OEE tot leverbetrouwbaarheid - leer de juiste metrics kiezen en verbeteren.',
    author: 'Rob Derks',
    date: '15 april 2025',
    readTime: '16 min',
    category: 'KPIs',
    featured: false,
  },
  // Oudere artikelen
  {
    slug: 'productie-strategie-automatisering',
    title: 'Productiestrategie & Automatisering: Van Visie naar Uitvoering',
    excerpt: 'Hoe ontwikkel je een automatiseringsstrategie die past bij jouw MKB-maakbedrijf? Van quick wins tot lange termijn roadmap.',
    author: 'Rob Derks',
    date: '9 januari 2025',
    readTime: '14 min',
    category: 'Strategie',
    featured: false,
  },
  {
    slug: 'productie-stilstand-verminderen',
    title: '10 Praktische Tips om Productie Stilstand te Verminderen',
    excerpt: 'Stilstand kost je duizenden euros per uur. Deze 10 bewezen methodes helpen je om ongeplande stilstand drastisch te verlagen.',
    author: 'Rob Derks',
    date: '5 januari 2025',
    readTime: '10 min',
    category: 'Procesoptimalisatie',
    featured: false,
  },
  {
    slug: 'lean-manufacturing-mkb',
    title: 'Lean Manufacturing voor MKB: Praktische Start in 30 Dagen',
    excerpt: 'Lean is geen grote investering of complexe theorie. Het is een mindset die je morgen kunt starten. Dit zijn de eerste stappen.',
    author: 'Rob Derks',
    date: '28 december 2024',
    readTime: '9 min',
    category: 'Lean',
    featured: false,
  },
  {
    slug: 'preventief-onderhoud-tpm',
    title: 'Preventief Onderhoud & TPM: Van Reactief naar Proactief',
    excerpt: 'Stop met brandjes blussen. Leer hoe je met Total Productive Maintenance (TPM) storingen voorkomt in plaats van repareert.',
    author: 'Rob Derks',
    date: '20 december 2024',
    readTime: '11 min',
    category: 'Onderhoud',
    featured: false,
  },
  {
    slug: 'industrie-4-mkb-praktisch',
    title: 'Industrie 4.0 voor MKB: Praktisch Beginnen Zonder Miljoeneninvestering',
    excerpt: 'Smart Industry hoeft niet duur of complex te zijn. Ontdek hoe je met kleine stappen en beperkt budget je fabriek digitaliseert.',
    author: 'Rob Derks',
    date: '12 december 2024',
    readTime: '12 min',
    category: 'Digitalisering',
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-6">
            Kennisbank
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary-500">Kennisbank</span> Procesoptimalisatie &amp; Automatisering
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Praktische gidsen over OEE-verbetering, cobot integratie, productie-optimalisatie en industriele automatisering. Gebaseerd op 22+ jaar hands-on ervaring van Rob Derks in de maakindustrie.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-4 mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="relative bg-gradient-to-br from-bg-secondary to-bg-primary border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden hover:border-primary-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full mb-4">
                  UITGELICHT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-400 mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} leestijd
                  </span>
                </div>
                <div className="mt-6 flex items-center text-primary-500 font-semibold group-hover:gap-3 transition-all">
                  Lees artikel <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">Alle Artikelen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-bg-secondary border border-white/10 rounded-xl p-6 h-full hover:border-primary-500/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-xs font-medium rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Wil je je OEE direct berekenen?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Gebruik onze gratis calculators en ontdek hoeveel verborgen capaciteit er in jouw productie zit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oee-calculator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              OEE Calculator
            </Link>
            <Link
              href="/roi-calculator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Bot className="w-5 h-5" />
              Robot ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
