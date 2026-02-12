"use client";
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from '../shared/Reveal';
import MagneticButton from '../visuals/MagneticButton';

/* PSYCHOLOGISCH PRINCIPE: Risk reversal
   - Neem de angst weg om de eerste stap te zetten
   - Vertrouwen bouwen door risico bij jezelf te leggen
   - "Als ik niets vind, kost het u niets" = onweerstaanbaar */

export default function NoCureNoPaySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal direction="up">
          <div className="glass p-8 md:p-12 rounded-2xl border border-green-500/20 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-green-500" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Geen resultaat? Geen factuur.
                  </h2>
                  <p className="text-green-400 text-sm font-medium">
                    No Cure, No Pay &mdash; bij geschikte projecten
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Ik geloof zo sterk in wat ik doe, dat ik bij geschikte verbeterprojecten
                op basis van No Cure No Pay werk. Geen verborgen kosten, geen vage beloftes.
                <span className="text-white font-semibold"> Als ik geen meetbaar resultaat lever, betaalt u niets.</span>
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Resultaat vooraf helder gedefinieerd',
                  'Risico ligt bij mij, niet bij u',
                  'Ook mogelijk: uurtarief of besparingsbonus',
                  'Samen bepalen we wat bij u past',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <MagneticButton strength={0.4}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden shadow-lg shadow-green-500/25"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Bespreek de mogelijkheden</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
