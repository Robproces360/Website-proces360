'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User, Calendar, TrendingUp, Calculator, Bot } from 'lucide-react';

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
    slug: 'cobot-terugverdientijd-berekenen',
    title: 'Cobot Terugverdientijd Berekenen: ROI in 12-18 Maanden',
    excerpt: 'Ontdek hoe je de terugverdientijd van een cobot berekent en wanneer robotisering rendabel is voor jouw MKB-maakbedrijf.',
    author: 'Rob Derks',
    date: '9 januari 2026',
    readTime: '8 min',
    category: 'Robotisering',
    featured: false,
  },
  {
    slug: 'productie-stilstand-verminderen',
    title: '10 Praktische Tips om Productie Stilstand te Verminderen',
    excerpt: 'Stilstand kost je duizenden euros per uur. Deze 10 bewezen methodes helpen je om ongeplande stilstand drastisch te verlagen.',
    author: 'Rob Derks',
    date: '9 januari 2026',
    readTime: '10 min',
    category: 'Procesoptimalisatie',
    featured: false,
  },
];

export default function BlogPage() {
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
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.slug} className="container mx-auto px-4 mb-16">
          <Link href={`/blog/${post.slug}`} className="block group">
            <div className="relative bg-gradient-to-br from-bg-secondary to-bg-primary border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden hover:border-primary-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full mb-4">
                  UITGELICHT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-gray-400 mb-6 max-w-2xl">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime} leestijd
                  </span>
                </div>
                <div className="mt-6 flex items-center text-primary-500 font-semibold group-hover:gap-3 transition-all">
                  Lees artikel <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      ))}

      {/* Other Posts Grid */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8">Alle Artikelen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
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
            Gebruik onze gratis OEE Calculator en ontdek hoeveel verborgen capaciteit er in jouw productie zit.
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
