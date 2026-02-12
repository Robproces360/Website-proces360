"use client";
import { Search, Lightbulb, Settings, BarChart3 } from 'lucide-react';
import Reveal from '../shared/Reveal';
import HoverScale from '../shared/HoverScale';

/* PSYCHOLOGISCH PRINCIPE: Cognitive ease
   - 4 stappen die laten zien: het is simpel, het is gestructureerd
   - Neemt de angst weg voor een groot, vaag traject
   - Elke stap sluit af met wat de KLANT ervaart */

const steps = [
  {
    number: 1,
    title: 'Inzicht',
    subtitle: 'Ik kom kijken',
    icon: Search,
    what: 'Een halve tot drie dagen op uw werkvloer. Observeren, luisteren, meten. Uw team merkt er nauwelijks iets van.',
    result: 'U weet precies waar uw productie geld laat liggen.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: 2,
    title: 'Advies',
    subtitle: "Helder plan met euro's",
    icon: Lightbulb,
    what: 'Een concreet verbeterplan met ROI per maatregel. Geen wollige rapporten maar heldere keuzes.',
    result: 'U kunt een onderbouwde beslissing nemen.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    number: 3,
    title: 'Uitvoering',
    subtitle: 'Samen met uw team',
    icon: Settings,
    what: 'Ik implementeer samen met uw mensen. Eén aanspreekpunt, leveranciers aansturen, engineering en integratie.',
    result: 'Uw productie verbetert zonder dat u er zelf bovenop hoeft te zitten.',
    gradient: 'from-primary-500 to-red-500',
  },
  {
    number: 4,
    title: 'Borging',
    subtitle: 'Het moet blijven werken',
    icon: BarChart3,
    what: 'Werkstandaarden vastleggen, kennis borgen, team trainen. Zodat verbeteringen niet wegsijpelen.',
    result: 'Uw verbetering is structureel, niet tijdelijk.',
    gradient: 'from-green-500 to-emerald-500',
  }
];

export default function ProcessSection() {
  return (
    <section id="aanpak" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Van probleem naar </span>
              <span className="gradient-text">structureel resultaat</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Vier stappen. Helder, voorspelbaar en meetbaar.
              Als compleet pakket of losse diensten &mdash;
              <span className="text-primary-500 font-semibold"> samen bepalen we wat past.</span>
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <HoverScale scale={1.03}>
                <div className="glass p-6 rounded-2xl h-full border border-white/10 hover:border-primary-500/30 transition-all duration-300 group relative overflow-hidden">
                  {/* Gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <span className="text-3xl font-bold text-white/10">{step.number}</span>
                  </div>

                  <h3 className="text-xl font-bold text-primary-500 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 italic mb-4">{step.subtitle}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.what}</p>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-sm text-white font-medium">{step.result}</p>
                  </div>

                  {/* Bottom line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </HoverScale>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
