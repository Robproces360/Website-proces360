"use client";
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone, Zap, Search, ClipboardList } from 'lucide-react';
import Reveal from '../shared/Reveal';
import HoverScale from '../shared/HoverScale';
import MagneticButton from '../visuals/MagneticButton';
import HoverGlow from '../shared/HoverGlow';

/* PSYCHOLOGISCH PRINCIPE: Eenvoud + urgentie
   - Niet 3 pakketten (keuzestress) maar 1 helder verhaal
   - Wat krijgt u? Wat levert het op? Hoe werkt het?
   - Link naar quickscan pagina voor de gratis online versie */

export default function Scan360Section() {
  return (
    <section id="360scan" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6 border border-primary-500/20">
              <Search className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-gray-300 font-medium">De 360Scan</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Weten waar u staat. </span>
              <span className="gradient-text">In één dag.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Geen wekenlange analyses. Geen dure voortrajecten.
              In 1 tot 3 dagen weet u precies waar uw productie geld laat liggen
              &mdash; en wat u eraan kunt doen.
            </p>
          </Reveal>
        </div>

        {/* Two columns: What you get + How it works */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* What you get */}
          <Reveal direction="up" delay={0.15}>
            <div className="glass p-8 rounded-2xl border border-white/10 h-full">
              <h3 className="text-xl font-bold text-white mb-6">
                Wat u krijgt na een 360Scan:
              </h3>
              <div className="space-y-4">
                {[
                  'Uw 360°-Score: een helder getal dat uw productie-effectiviteit toont',
                  "Top 5 verbeterkansen met geschatte besparing in euro's",
                  'OEE-analyse op basis van echte productiedata',
                  "Visuele rapportage met foto's van uw werkvloer",
                  'Concrete implementatieroadmap met prioriteiten',
                  'Persoonlijke toelichting en adviesgesprek',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* How it works */}
          <Reveal direction="up" delay={0.25}>
            <div className="glass p-8 rounded-2xl border border-white/10 h-full">
              <h3 className="text-xl font-bold text-white mb-6">
                Zo werkt het:
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Kennismakingsgesprek',
                    desc: '30 minuten telefonisch. Uw situatie, uw doelen, uw uitdagingen. Geen verplichtingen.',
                  },
                  {
                    step: '2',
                    title: '360Scan op locatie',
                    desc: 'Ik kom naar u toe. Observaties, gesprekken met uw team, data verzamelen. U merkt er nauwelijks iets van.',
                  },
                  {
                    step: '3',
                    title: 'Rapport met actieplan',
                    desc: 'Binnen 5-15 werkdagen: uw 360°-Score, besparingspotentieel en een roadmap die u morgen kunt starten.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-500 font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Gratis online scan CTA */}
        <Reveal direction="up" delay={0.3}>
          <div className="glass p-8 rounded-2xl border border-primary-500/20 bg-gradient-to-r from-primary-500/5 to-orange-500/5">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardList className="w-5 h-5 text-primary-500" />
                  <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Gratis</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Begin met de gratis OEE Quickscan
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Wilt u alvast een eerste beeld? Download de gratis OEE Quickscan Checklist.
                  In 15 minuten weet u waar uw productie geld laat liggen &mdash; met uw eigen cijfers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <MagneticButton strength={0.5}>
                  <HoverGlow glowColor="rgba(249, 115, 22, 0.6)" glowSize={100} rounded="xl">
                    <Link
                      href="/quickscan"
                      className="btn btn-lg px-8 py-4 inline-flex items-center gap-3 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                      <span className="relative z-10">Download gratis checklist</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    </Link>
                  </HoverGlow>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Liever direct persoonlijk contact?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.4}>
                <a href="#contact" className="btn btn-secondary px-8 py-4 inline-flex items-center gap-3 group relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="relative z-10">Plan een kennismaking</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a href="tel:+31854010752" className="btn btn-secondary px-8 py-4 inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>085 - 401 0752</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
