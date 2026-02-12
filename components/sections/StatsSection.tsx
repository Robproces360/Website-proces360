"use client";
import Reveal from '../shared/Reveal';
import { TrendingUp, Factory, Euro, Handshake } from 'lucide-react';

/* PSYCHOLOGISCH PRINCIPE: Social proof met context
   - Niet zomaar cijfers, maar cijfers die een verhaal vertellen
   - Elk getal krijgt een "waarom" zodat het geloofwaardig wordt */

const stats = [
  {
    value: '22+',
    label: 'Jaar productie-ervaring',
    context: 'Van operator tot operations manager',
    icon: Factory,
  },
  {
    value: '15-30%',
    label: 'Meer output',
    context: 'Gemiddeld bij onze klanten',
    icon: TrendingUp,
  },
  {
    value: '€69K-247K',
    label: 'Besparingen gevonden',
    context: 'Per bedrijf, per jaar',
    icon: Euro,
  },
  {
    value: '100%',
    label: 'Eerlijk advies',
    context: 'Ook als u ons niet nodig heeft',
    icon: Handshake,
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <div className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <p className="text-text-primary font-medium text-sm mb-1">{stat.label}</p>
                <p className="text-text-muted text-xs">{stat.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
