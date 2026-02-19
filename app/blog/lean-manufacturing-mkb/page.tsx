'use client';

import Link from 'next/link';
import BlogCTA from '@/components/shared/BlogCTA';
import { ArrowLeft, Clock, User, Calendar, CheckCircle, Target, Recycle, Trash2, TrendingUp, ArrowRight, Cog, BarChart3 } from 'lucide-react';

export default function LeanArticlePage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        <nav className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar blog
          </Link>
        </nav>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 text-sm font-medium rounded-full mb-4">
            Lean Manufacturing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Lean Manufacturing voor MKB: Praktische Start in 30 Dagen
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Lean is geen grote investering of complexe theorie. Het is een mindset die u morgen kunt starten.
            Dit zijn de eerste stappen voor MKB-maakbedrijven.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />Rob Derks</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />28 december 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />9 min leestijd</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-r from-primary-500/10 to-orange-500/10 border-l-4 border-primary-500 p-6 rounded-r-xl mb-12">
            <p className="text-white font-medium m-0">
              <strong>Kernboodschap:</strong> Lean draait om het elimineren van verspilling (waste).
              Elke activiteit die geen waarde toevoegt voor de klant, is verspilling.
              In een typisch MKB is 30-50% van de activiteiten waste.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Trash2 className="w-8 h-8 text-primary-500" />
              De 8 Vormen van Verspilling (DOWNTIME)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { letter: 'D', title: 'Defects', desc: 'Afkeur, herwerk, reparaties' },
                { letter: 'O', title: 'Overproduction', desc: 'Meer maken dan nodig' },
                { letter: 'W', title: 'Waiting', desc: 'Wachten op materiaal, machines, informatie' },
                { letter: 'N', title: 'Non-utilized talent', desc: 'Medewerkers niet optimaal benutten' },
                { letter: 'T', title: 'Transport', desc: 'Onnodig verplaatsen van producten' },
                { letter: 'I', title: 'Inventory', desc: 'Teveel voorraad (WIP, eindproduct)' },
                { letter: 'M', title: 'Motion', desc: 'Onnodige beweging van mensen' },
                { letter: 'E', title: 'Extra processing', desc: 'Meer doen dan klant vraagt' },
              ].map((item) => (
                <div key={item.letter} className="bg-bg-secondary border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.letter}</span>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">30-Dagen Lean Kickstart</h2>
            <div className="space-y-4">
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-2">Week 1: 5S Introductie</h4>
                <p className="text-gray-400 text-sm m-0">Start met één werkplek. Sorteer, Schik, Schoonmaken, Standaardiseer, Sustain. Zichtbaar resultaat in 5 dagen.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-blue-400 mb-2">Week 2: Waste Walk</h4>
                <p className="text-gray-400 text-sm m-0">Loop door de fabriek met de 8 verspillingen in gedachten. Noteer alles wat u ziet. Betrek operators.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-yellow-400 mb-2">Week 3: Quick Wins</h4>
                <p className="text-gray-400 text-sm m-0">Pak de 3 grootste verspillingen aan die u in week 2 vond. Focus op laaghangend fruit.</p>
              </div>
              <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
                <h4 className="font-bold text-purple-400 mb-2">Week 4: Visual Management</h4>
                <p className="text-gray-400 text-sm m-0">Maak prestaties zichtbaar. Een simpel whiteboard met OEE, output en kwaliteit. Dagelijks bijwerken.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start met Meten</h3>
              <p className="text-gray-400 mb-6">OEE is de basis-KPI voor Lean. Bereken uw huidige situatie.</p>
              <Link href="/oee-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                <TrendingUp className="w-5 h-5" />
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
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Gerelateerde artikelen</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/oee-verbeteren-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">OEE Verbeteren: De Complete Gids</h4>
              <p className="text-sm text-gray-400">Alles over Overall Equipment Effectiveness en hoe u van 55% naar 85%+ gaat.</p>
            </Link>
            <Link href="/blog/six-sigma-mkb" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Six Sigma voor MKB</h4>
              <p className="text-sm text-gray-400">DMAIC-methodologie en kwaliteitsverbetering in de praktijk.</p>
            </Link>
            <Link href="/blog/productie-stilstand-verminderen" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Productie Stilstand Verminderen</h4>
              <p className="text-sm text-gray-400">10 praktische tips om ongeplande downtime te reduceren.</p>
            </Link>
            <Link href="/blog/productie-kpis-complete-gids" className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-primary-500/50 transition-colors">
              <h4 className="font-bold text-white mb-2">Productie KPIs: Complete Gids</h4>
              <p className="text-sm text-gray-400">De 15 belangrijkste KPIs voor productie en hoe u ze implementeert.</p>
            </Link>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-12 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Gerelateerde Diensten</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/diensten/procesoptimalisatie" className="flex items-center gap-2 text-primary-500 hover:underline">
              <Cog className="w-4 h-4" />
              Procesoptimalisatie
            </Link>
            <Link href="/diensten/oee-verbetering" className="flex items-center gap-2 text-primary-500 hover:underline">
              <BarChart3 className="w-4 h-4" />
              OEE Verbetering
            </Link>
            <Link href="/diensten/productie-dashboards" className="flex items-center gap-2 text-primary-500 hover:underline">
              <TrendingUp className="w-4 h-4" />
              Productie Dashboards
            </Link>
          </div>
        </div>
        <BlogCTA />
      </article>
    </main>
  );
}
