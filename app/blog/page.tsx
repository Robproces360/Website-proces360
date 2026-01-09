'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User, Calendar, Calculator, Bot } from 'lucide-react';

const blogPosts = [
  {
    slug: 'oee-verbeteren-complete-gids',
    title: 'OEE Verbeteren: De Complete Gids voor 2026',
    excerpt: 'Leer alles over OEE (Overall Equipment Effectiveness), hoe je het berekent, en praktische tips om je OEE te verhogen van 50% naar 85%+.',
    author: 'Rob Derks',
    date: '9 januari 2026',
    readTime: '12 min',
    category: 'OEE',
    featured: true,
  },
  {
    slug: 'cobots-in-productie-complete-gids',
    title: 'Cobots in Productie: De Complete Gids voor MKB-Maakbedrijven',
    excerpt: 'Van selectie tot implementatie: alles wat je moet weten over collaborative robots (cobots) in de maakindustrie. Inclusief ROI-berekening en veiligheid.',
    author: 'Rob Derks',
    date: '9 januari 2026',
    readTime: '15 min',
    category: 'Robotisering',
    featured: false,
  },
  {
    slug: 'productie-strategie-automatisering',
    title: 'Productiestrategie & Automatisering: Van Visie naar Uitvoering',
    excerpt: 'Hoe ontwikkel je een automatiseringsstrategie die past bij jouw MKB-maakbedrijf? Van quick wins tot lange termijn roadmap.',
    author: 'Rob Derks',
    date: '9 januari 2026',
    readTime: '14 min',
    category: 'Strategie',
    featured: false,
  },
  {
    slug: 'cobot-terugverdientijd-berekenen',
    title: 'Cobot Terugverdientijd Berekenen: ROI in 12-18 Maanden',
    excerpt: 'Ontdek hoe je de terugverdientijd van een cobot berekent en wanneer robotisering rendabel is voor jouw MKB-maakbedrijf.',
    author: 'Rob Derks',
    date: '7 januari 2026',
    readTime: '8 min',
    category: 'ROI',
    featured: false,
  },
  {
    slug: 'productie-stilstand-verminderen',
    title: '10 Praktische Tips om Productie Stilstand te Verminderen',
    excerpt: 'Stilstand kost je duizenden euros per uur. Deze 10 bewezen methodes helpen je om ongeplande stilstand drastisch te verlagen.',
    author: 'Rob Derks',
    date: '5 januari 2026',
    readTime: '10 min',
    category: 'Procesoptimalisatie',
    featured: false,
  },
  {
    slug: 'lean-manufacturing-mkb',
    title: 'Lean Manufacturing voor MKB: Praktische Start in 30 Dagen',
    excerpt: 'Lean is geen grote investering of complexe theorie. Het is een mindset die je morgen kunt starten. Dit zijn de eerste stappen.',
    author: 'Rob Derks',
    date: '28 december 2025',
    readTime: '9 min',
    category: 'Lean',
    featured: false,
  },
  {
    slug: 'preventief-onderhoud-tpm',
    title: 'Preventief Onderhoud & TPM: Van Reactief naar Proactief',
    excerpt: 'Stop met brandjes blussen. Leer hoe je met Total Productive Maintenance (TPM) storingen voorkomt in plaats van repareert.',
    author: 'Rob Derks',
    date: '20 december 2025',
    readTime: '11 min',
    category: 'Onderhoud',
    featured: false,
  },
  {
    slug: 'industrie-4-mkb-praktisch',
    title: 'Industrie 4.0 voor MKB: Praktisch Beginnen Zonder Miljoeneninvestering',
    excerpt: 'Smart Industry hoeft niet duur of complex te zijn. Ontdek hoe je met kleine stappen en beperkt budget je fabriek digitaliseert.',
    author: 'Rob Derks',
    date: '12 december 2025',
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
            Proces360 <span className="text-primary-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Praktische inzichten over OEE, procesoptimalisatie, robotisering en productie-efficiëntie.
            Gebaseerd op 22+ jaar hands-on ervaring in de maakindustrie.
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
