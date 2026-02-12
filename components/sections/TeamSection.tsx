'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import Reveal from '../shared/Reveal';

/* PSYCHOLOGISCH PRINCIPE: Vulnerability-based trust + authority
   - Rob als mens laten zien, niet als bedrijf
   - "Ik" gebruiken, niet "wij" - het IS 1 persoon
   - Emotionele aansluiting: operator die directeur begrijpt EN andersom
   - Het verschil: EQ (ik voel waar het wringt) + IQ (en ik kan het oplossen) */

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center">
          {/* Left: Photo */}
          <Reveal direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/rob-derks.jpg"
                  alt="Rob Derks - Oprichter Proces360"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-primary-500/15 rounded-full blur-2xl pointer-events-none" />
            </div>
          </Reveal>

          {/* Right: Personal story */}
          <div>
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                <Heart className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium text-primary-500">Even persoonlijk</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ik ga u geen <span className="gradient-text">verkoopverhaal</span> vertellen.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p>
                  In meer dan 20 jaar heb ik aan alle kanten van de tafel gezeten.
                  Als operator wist ik precies wat er fout ging &mdash; maar niemand
                  die het vroeg. Als teamleider worstelde ik met targets die niet haalbaar
                  waren. Als operations manager lag ik wakker van de vraag: hoe krijg
                  ik meer uit dezelfde mensen en machines?
                </p>
                <p>
                  Dat is precies waarom ik Proces360 ben begonnen.
                  Niet vanuit een kantoor. Maar vanuit de wetenschap dat de beste
                  verbeteringen komen van mensen die de productievloer <em>kennen</em>.
                  Die binnen een uur voelen waar het wringt. De teamleider die vastloopt.
                  De operator die al maanden iets ziet maar niet gehoord wordt.
                  De onderstroom die geen dashboard laat zien.
                </p>
                <p className="text-white font-medium">
                  Dát is wat ik anders doe. Ik kijk niet alleen naar uw machines.
                  Ik kijk naar uw ménsen.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="glass p-6 rounded-xl border border-white/10 mb-8">
                <p className="text-gray-300 italic mb-3">
                  &ldquo;Rob, eindelijk snapt iemand wat wij elke dag meemaken.&rdquo;
                </p>
                <p className="text-sm text-gray-500">
                  &mdash; Operator bij een metaalbewerkingsbedrijf, na de eerste dag op locatie
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <h3 className="text-lg font-semibold text-white mb-4">
                Wat u krijgt als u met mij werkt:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Iemand die uw taal spreekt',
                  'Eerlijk advies, ook als het tegenvalt',
                  'Oplossingen die werken op de vloer',
                  "Een plan in euro's, niet in jargon",
                  'Uw team betrokken, niet overgeslagen',
                  'Altijd bereikbaar als het nodig is',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <Link
                href="/rob-derks"
                className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-400 transition-colors group"
              >
                Lees mijn volledige verhaal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
