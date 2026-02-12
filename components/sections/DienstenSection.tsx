"use client";
import { ArrowRight, AlertTriangle, Clock, Users, TrendingDown, Cog } from 'lucide-react';
import Reveal from '../shared/Reveal';
import HoverScale from '../shared/HoverScale';

/* PSYCHOLOGISCH PRINCIPE: Problem-first framing (PAS framework)
   - Niet beginnen met "onze diensten" maar met herkenbare problemen
   - Klant ziet zijn eigen situatie en denkt: "dat ben ik"
   - Dan pas de oplossing presenteren */

const problemen = [
  {
    probleem: 'Te veel ongeplande stilstand',
    gevoel: "U wordt gebeld om 3 uur 's nachts. Weer een storing. Weer productieverlies. Weer uitleggen aan de klant waarom de levering later is.",
    oplossing: 'Ik analyseer uw stilstandoorzaken, stel preventief onderhoud in en implementeer een early-warning systeem. Gemiddeld 40-60% minder ongeplande stops.',
    icon: AlertTriangle,
  },
  {
    probleem: 'Processen die afhangen van één persoon',
    gevoel: 'Die ene operator die alles weet. Als hij ziek is, staat de lijn stil. Kennis zit in hoofden, niet in systemen.',
    oplossing: 'Ik maak processen inzichtelijk, documenteer werkstandaarden en train uw team. Zodat uw productie niet afhankelijk is van één persoon.',
    icon: Users,
  },
  {
    probleem: 'Geen grip op uw werkelijke kosten',
    gevoel: 'U weet wat u omzet. Maar waar zit de verspilling? Welke machines kosten meer dan ze opleveren? Welke lijn is uw cashcow?',
    oplossing: 'Met OEE-analyses en kostprijsberekeningen maak ik zichtbaar waar uw geld zit &mdash; en waar het weglekt. In euro&rsquo;s, niet in percentages.',
    icon: TrendingDown,
  },
  {
    probleem: 'Handmatig werk dat geautomatiseerd kan',
    gevoel: 'Uw mensen doen repetitief werk dat een cobot sneller en nauwkeuriger kan. Maar welke robot? Welke leverancier? Wat kost het écht?',
    oplossing: 'Merkonafhankelijk advies uit 50+ technologieën. Van haalbaarheid tot implementatie, één aanspreekpunt. Gemiddelde terugverdientijd: 12-18 maanden.',
    icon: Cog,
  },
  {
    probleem: 'Verbeteringen die niet beklijven',
    gevoel: 'U heeft al eens een consultant gehad. Er lag een mooi rapport. Maar na 3 maanden was alles terug bij af.',
    oplossing: 'Ik implementeer mét uw team, niet voor uw team. Werkstandaarden, borging en training zijn standaard onderdeel. Zodat verbeteringen blijven.',
    icon: Clock,
  },
];

export default function DienstenSection() {
  return (
    <section id="diensten" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Herkent u dit </span>
              <span className="gradient-text">in uw bedrijf?</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dit zijn de situaties die ik dagelijks tegenkom bij MKB-maakbedrijven.
              <span className="text-primary-500 font-semibold"> En die ik oplos.</span>
            </p>
          </Reveal>
        </div>

        {/* Problemen grid */}
        <div className="space-y-6">
          {problemen.map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <HoverScale scale={1.01}>
                <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group">
                  <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
                    {/* Probleem */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {item.probleem}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed italic">
                        {item.gevoel}
                      </p>
                    </div>

                    {/* Arrow separator */}
                    <div className="hidden md:flex items-center justify-center pt-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-primary-500" />
                      </div>
                    </div>

                    {/* Oplossing */}
                    <div>
                      <p className="text-sm font-semibold text-primary-500 mb-2">
                        Wat ik doe:
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.oplossing}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverScale>
            </Reveal>
          ))}
        </div>

        {/* Bridge text */}
        <Reveal direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400">
              Herkent u zich in één of meer van deze situaties?
            </p>
            <p className="text-primary-500 font-semibold text-lg mt-2">
              Scroll verder en ontdek hoe een 360Scan uw vertrekpunt wordt.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
