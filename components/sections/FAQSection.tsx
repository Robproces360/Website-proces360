"use client";
import { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import Reveal from '../shared/Reveal';
import MagneticButton from '../visuals/MagneticButton';

/* PSYCHOLOGISCH PRINCIPE: Bezwaar-weerlegging
   - De FAQ is geen informatiedump maar bezwaren-killer
   - Elke vraag is een onuitgesproken twijfel van de bezoeker
   - Antwoorden zijn persoonlijk (ik-vorm), eerlijk en concreet */

const faqs = [
  {
    question: 'Ik heb al eens een consultant gehad. Waarom zou het nu anders zijn?',
    answer: 'Begrijp ik. Veel consultants leveren een rapport af en vertrekken. Ik niet. Ik implementeer mét uw team op de vloer. Werkstandaarden, borging, training — dat is standaard onderdeel. En als het resultaat uitblijft? Dan betaalt u niet. Zo simpel is het.',
  },
  {
    question: 'Wij zijn maar een klein bedrijf. Is dit niet te duur voor ons?',
    answer: 'De meeste van mijn klanten hebben 15-75 medewerkers. De 360Scan is bewust zo opgezet dat het betaalbaar is voor MKB. En bij geschikte projecten werk ik op basis van No Cure No Pay — dan betaalt u alleen als het resultaat er is. Daarnaast: als ik denk dat het voor uw situatie niet zinvol is, zeg ik dat eerlijk.',
  },
  {
    question: "Hoe lang duurt zo'n traject?",
    answer: 'De 360Scan zelf duurt 1-3 dagen op locatie, met een rapport binnen 5-15 werkdagen. Een compleet verbetertraject — van analyse tot implementatie en borging — loopt gemiddeld 3-9 maanden. Maar u ziet al in de eerste weken de eerste resultaten.',
  },
  {
    question: 'Werkt u door heel Nederland?',
    answer: 'Ja. Ik ben primair actief in Brabant en Limburg, maar werk door heel Nederland. Voor uw 360Scan kom ik altijd naar u toe — want de beste inzichten krijg ik op uw werkvloer, niet achter een scherm.',
  },
  {
    question: 'Zijn jullie gebonden aan bepaalde leveranciers of merken?',
    answer: 'Nee, en dat is precies het punt. Ik werk merkonafhankelijk en selecteer uit 50+ technologieën wat het beste past bij úw situatie. Geen verborgen belangen. Geen push om dure machines te verkopen die u niet nodig heeft.',
  },
  {
    question: 'Wat als mijn team niet staat te springen om verandering?',
    answer: 'Dat is vaker dan u denkt — en het is de reden dat ik zo veel aandacht besteed aan people & change. Ik betrek uw team vanaf dag één, luister naar hun zorgen, en zorg dat verbeteringen hún ideeën worden. Mensen verzetten zich niet tegen verandering, ze verzetten zich tegen opgelegde verandering.',
  },
  {
    question: 'Hoe weet ik dat de investering zich terugverdient?',
    answer: 'Voor elke maatregel maak ik een concrete ROI-berekening met terugverdientijd. U investeert niet op basis van een gevoel, maar op basis van getallen die kloppen. En als ik twijfel over de ROI, adviseer ik u om het niet te doen. Mijn reputatie is belangrijker dan één project.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Misschien denkt u </span>
              <span className="gradient-text">nu dit...</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-gray-400">
              Begrijpelijk. Dit zijn de vragen die ik het vaakst hoor.
            </p>
          </Reveal>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} direction="up" delay={index * 0.05}>
                <div className="glass rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/20 transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base font-semibold pr-6 transition-colors duration-300 ${isOpen ? 'text-primary-400' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Andere vraag? Stel hem gerust.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton strength={0.4}>
                <a href="#contact" className="btn px-8 py-4 inline-flex items-center gap-3 group relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <MessageCircle className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Stuur een bericht</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </MagneticButton>
              <a
                href="https://wa.me/31630185844"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary px-8 py-4 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
