"use client";
import { CheckCircle2, Target, Users, TrendingUp, MapPin } from 'lucide-react';
import Reveal from '../shared/Reveal';
import HoverGlow from '../shared/HoverGlow';

const redenen = [
  {
    icon: Target,
    title: 'Eén Aanspreekpunt',
    description: 'Geen gedoe met meerdere leveranciers. Eén partner die alles coördineert en verantwoordelijk is voor het eindresultaat.'
  },
  {
    icon: TrendingUp,
    title: 'Eerst Analyseren',
    description: 'We starten met een grondige 360Scan. Pas als de business case staat en u groen licht geeft, gaan we aan de slag.'
  },
  {
    icon: CheckCircle2,
    title: 'Beste Technologie',
    description: 'Geen verborgen belangen. We selecteren uit 50+ merken en technologieën wat het beste past bij úw situatie.'
  },
  {
    icon: Users,
    title: 'Mensen Centraal',
    description: 'Technologie is pas succesvol als uw team ermee kan werken. Training en change management zijn standaard onderdeel.'
  },
  {
    icon: MapPin,
    title: 'Lokaal Aanwezig',
    description: 'Primair actief in Brabant en Limburg, landelijk operationeel. Korte lijnen en snel ter plaatse wanneer nodig.'
  },
];

export default function WaromSection() {
  return (
    <section id="waarom" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Waarom </span>
              <span className="gradient-text">Proces360</span>
              <span className="text-white">?</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wat maakt ons anders? Complete ontzorging, meetbare resultaten, en een bewezen aanpak.
            </p>
          </Reveal>
        </div>

        {/* Redenen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {redenen.map((reden, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <HoverGlow glowColor="rgba(249, 115, 22, 0.3)" rounded="2xl">
                <div className="glass p-8 rounded-2xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <reden.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{reden.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reden.description}</p>
                </div>
              </HoverGlow>
            </Reveal>
          ))}
        </div>

        {/* Quote */}
        <Reveal direction="up" delay={0.6}>
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6">
              &quot;Productie-optimalisatie hoeft niet ingewikkeld te zijn.
              <span className="text-primary-500 font-semibold"> Het kan anders. Het móét anders.</span>&quot;
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
