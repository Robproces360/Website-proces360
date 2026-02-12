"use client";
import { ArrowRight, Euro, TrendingUp, Clock, ExternalLink } from 'lucide-react';
import Reveal from '../shared/Reveal';
import HoverScale from '../shared/HoverScale';
import Link from 'next/link';

/* PSYCHOLOGISCH PRINCIPE: Social proof door verhalen
   - Niet zeggen "wij zijn goed" maar laten ZIEN dat het werkt
   - Concrete resultaten in euro's maken het geloofwaardig
   - Korte narratieve structuur: situatie → aanpak → resultaat */

const cases = [
  {
    sector: 'Foodbedrijf',
    medewerkers: '45 medewerkers',
    situatie: 'Hoge omsteltijden, onduidelijke verliezen, operators die om hulp vroegen maar niet gehoord werden.',
    resultaat: '€247.000 besparingspotentieel geïdentificeerd',
    detail: 'OEE van 52% naar 71% in 6 maanden',
    icon: TrendingUp,
    link: '/blog/360scan-foodbedrijf-247k-besparing',
  },
  {
    sector: 'Metaalbewerking',
    medewerkers: '28 medewerkers',
    situatie: 'Structureel 15% meer stilstand dan de branche. Geen inzicht in de werkelijke oorzaken.',
    resultaat: '€69.000 besparing gevonden in één dag',
    detail: 'Top 5 quick wins direct uitvoerbaar',
    icon: Euro,
    link: '/blog/360scan-case-69k-besparing',
  },
  {
    sector: 'Kunststofverwerking',
    medewerkers: '62 medewerkers',
    situatie: 'Twee cobots nodig, maar welke? Vijf leveranciers, vijf verhalen, geen onafhankelijk advies.',
    resultaat: 'Terugverdientijd van 14 maanden gerealiseerd',
    detail: 'Merkonafhankelijke selectie uit 8 merken',
    icon: Clock,
  },
];

export default function WaromSection() {
  return (
    <section id="waarom" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Dit gebeurde toen zij </span>
              <span className="gradient-text">wél gingen meten</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Echte resultaten bij echte MKB-maakbedrijven. Geen theorie, maar wat er daadwerkelijk veranderde.
            </p>
          </Reveal>
        </div>

        {/* Cases */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <Reveal key={index} direction="up" delay={index * 0.15}>
              <HoverScale scale={1.03}>
                <div className="glass p-8 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full group relative overflow-hidden">
                  {/* Gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Sector badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full">
                        {caseItem.sector}
                      </span>
                      <span className="text-xs text-gray-500">{caseItem.medewerkers}</span>
                    </div>

                    {/* Situatie */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                      &ldquo;{caseItem.situatie}&rdquo;
                    </p>

                    {/* Resultaat */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <caseItem.icon className="w-5 h-5 text-primary-500" />
                        <span className="text-white font-bold text-lg">{caseItem.resultaat}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{caseItem.detail}</p>
                    </div>

                    {/* Link to case study if available */}
                    {caseItem.link && (
                      <Link
                        href={caseItem.link}
                        className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 mt-4 group/link"
                      >
                        Lees de volledige case
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </HoverScale>
            </Reveal>
          ))}
        </div>

        {/* Referenties */}
        <div className="mt-4 mb-4">
          <Reveal direction="up" delay={0.5}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              <span className="text-white">Wat opdrachtgevers </span>
              <span className="gradient-text">over Rob zeggen</span>
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Referentie 1: Robert van Sligter */}
            <Reveal direction="up" delay={0.6}>
              <div className="glass p-8 rounded-2xl border border-white/10 h-full flex flex-col">
                <blockquote className="text-gray-300 italic leading-relaxed mb-6 flex-grow">
                  &ldquo;Rob combineert een open persoonlijkheid met een professionele, hands-on
                  mentaliteit en stevige vakinhoudelijke kennis. Wat hem echt onderscheidt, is zijn
                  innovatieve kijk op processen. Rob ziet kansen waar anderen knelpunten zien en weet
                  deze om te zetten in slimme, efficiënte oplossingen die direct bijdragen aan hogere
                  marges en betere prestaties. Een impactmaker pur sang!&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">Robert van Sligter</p>
                  <p className="text-gray-400 text-sm">CEO &amp; Eigenaar &middot; Interfilling B.V.</p>
                  <a
                    href="https://www.linkedin.com/in/rob-derks-15900873/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary-500 hover:text-primary-400 mt-2 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Bekijk op LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Referentie 2: Kelly van Loon */}
            <Reveal direction="up" delay={0.7}>
              <div className="glass p-8 rounded-2xl border border-white/10 h-full flex flex-col">
                <blockquote className="text-gray-300 italic leading-relaxed mb-6 flex-grow">
                  &ldquo;Ik werk momenteel prettig samen met Rob bij Interfilling.
                  Hij is een fijne interim collega die kritisch meedenkt en zich altijd
                  met volle inzet inzet voor het team. Betrouwbaar en heel betrokken.&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">Kelly van Loon</p>
                  <p className="text-gray-400 text-sm">General Manager &middot; Interfilling B.V.</p>
                  <a
                    href="https://www.linkedin.com/in/rob-derks-15900873/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary-500 hover:text-primary-400 mt-2 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Bekijk op LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
