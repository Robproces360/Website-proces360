'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Gauge,
  Euro,
  Shield,
  MessageCircle,
  Send,
  Phone,
  Zap,
  AlertTriangle,
  Users,
  Heart,
  ClipboardList,
  Bot,
  Lightbulb,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';
import ExitIntentPopup from '@/components/shared/ExitIntentPopup';
import StickyCTABar from '@/components/shared/StickyCTABar';

gsap.registerPlugin(ScrollTrigger);

export default function QuickscanLandingPage() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [formState, setFormState] = useState({
    voornaam: '',
    email: '',
    bedrijf: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.to('.qs-orb', {
      y: -60,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/quickscan-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Er ging iets mis');
      }

      if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
        (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'generate_lead', { event_category: 'quickscan' });
      }

      sessionStorage.setItem('quickscan_submitted', '1');
      sessionStorage.setItem('quickscan_voornaam', formState.voornaam);
      router.push('/quickscan/bedankt');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis. Probeer het later opnieuw.');
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <main id="main-content" ref={sectionRef} className="min-h-screen bg-bg-primary">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="qs-orb fixed top-20 right-[10%] w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="qs-orb fixed bottom-20 left-[5%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ============================================ */}
      {/* SECTIE 1: HERO — Tekst links, formulier rechts */}
      {/* Formulier boven de fold op desktop */}
      {/* ============================================ */}
      <section className="relative z-10 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Tekst + Rob */}
            <div>
              <Reveal direction="up" delay={0.1}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-medium text-primary-500 mb-6 border border-primary-500/20">
                  <Zap className="w-4 h-4" />
                  Gratis voor productiebedrijven
                </span>
              </Reveal>

              <Reveal direction="up" delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-text-primary mb-6 leading-[1.08]">
                  Haalt u alles uit uw productie?{' '}
                  <span className="gradient-text">Of laat u ongemerkt 10-20% liggen?</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="text-lg text-text-secondary leading-relaxed space-y-4 mb-8">
                  <p>
                    In 22 jaar op productievloeren heb ik het bij bijna elk bedrijf gezien:
                    machines die meer kunnen, processen die slimmer kunnen, en potentieel
                    dat onzichtbaar blijft &mdash; tot u weet waar u moet kijken.
                  </p>
                  <p>
                    Ik heb deze checklist gemaakt zodat u in 15 minuten zelf kunt ontdekken
                    waar uw grootste kansen liggen. Geen theorie. Uw eigen getallen,
                    vertaald naar concrete euro&apos;s.
                  </p>
                </div>
              </Reveal>

              {/* Rob mini-profiel */}
              <Reveal direction="up" delay={0.25}>
                <div className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary-500/30 flex-shrink-0">
                    <Image
                      src="/images/rob-derks.jpg"
                      alt="Rob Derks"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Rob Derks</p>
                    <p className="text-text-muted text-sm">22 jaar op de productievloer. Food, farma &amp; metaal.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Formulier — direct zichtbaar, 3 velden */}
            <div ref={formRef}>
              <Reveal direction="up" delay={0.2}>
                <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-colors sticky top-28">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-primary-500" />
                      </div>
                      <h2 className="text-xl font-bold text-text-primary">
                        Download de OEE Quickscan
                      </h2>
                    </div>
                    <p className="text-text-secondary text-sm mb-5">
                      Gratis. Direct te downloaden. Kost u 2 minuten.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="voornaam" className="block text-sm font-medium text-text-secondary mb-1.5">
                          Voornaam
                        </label>
                        <input
                          type="text"
                          id="voornaam"
                          name="voornaam"
                          required
                          value={formState.voornaam}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                          placeholder="Bijv. Jan"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
                          E-mailadres
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                          placeholder="jan@uwbedrijf.nl"
                        />
                      </div>

                      <div>
                        <label htmlFor="bedrijf" className="block text-sm font-medium text-text-secondary mb-1.5">
                          Bedrijfsnaam
                        </label>
                        <input
                          type="text"
                          id="bedrijf"
                          name="bedrijf"
                          required
                          value={formState.bedrijf}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-muted focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                          placeholder="Bijv. Jansen Verpakkingen"
                        />
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn btn-lg text-base flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                      >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="relative z-10">Even geduld...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Download de Quickscan</span>
                          </>
                        )}
                      </button>
                    </form>

                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Gratis
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-green-500" /> Geen spam
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-green-500" /> Direct downloaden
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 2: SOCIAL PROOF BAR */}
      {/* ============================================ */}
      <section className="relative z-10 py-10 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">22 jaar</div>
                <p className="text-text-secondary text-sm">Op productievloeren</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">Elke week</div>
                <p className="text-text-secondary text-sm">Op de werkvloer</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">Food, farma &amp; metaal</div>
                <p className="text-text-secondary text-sm">Van operator tot directie</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 3: WAT ZIT ERIN — 5 kaarten */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-4">
              Wat u krijgt
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              In 15 minuten weet u{' '}
              <span className="gradient-text">waar het geld zit</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-lg text-text-secondary mb-10 max-w-3xl">
              Ik heb deze checklist zo gemaakt dat u hem zelf kunt doorwerken.
              Geen consultant nodig, geen duur systeem. Gewoon pen en papier,
              uw eigen productiecijfers, en een kwartier van uw tijd.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Gauge,
                title: 'Uw OEE in 5 stappen berekend',
                desc: 'De meeste bedrijven schatten hun OEE te hoog in. Met deze 5 stappen weet u waar u echt staat.',
              },
              {
                icon: AlertTriangle,
                title: 'De 5 plekken waar het weglekt',
                desc: 'Van omsteltijden die te lang duren tot micro-stops die niemand registreert. U ziet waar productietijd verdwijnt.',
              },
              {
                icon: Euro,
                title: "Vertaald naar euro's",
                desc: "Wat betekent 1% OEE-verbetering voor u in geld? Vul uw eigen omzet in en u ziet het direct.",
              },
              {
                icon: Bot,
                title: 'Is automatisering iets voor u?',
                desc: '5 simpele vragen die bepalen of cobots of automatisering bij uw bedrijf realistisch zijn. Eerlijk antwoord.',
              },
              {
                icon: Lightbulb,
                title: 'Direct aan de slag',
                desc: 'Een actieplan-template waarmee u morgen kunt beginnen. Prioriteer op impact en haalbaarheid.',
              },
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={0.15 + i * 0.05}>
                <HoverScale scale={1.03}>
                  <div className="glass p-5 rounded-2xl border border-white/10 h-full hover:border-primary-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <h3 className="text-text-primary font-semibold mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </HoverScale>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 4: HERKENNING — "Dit hoor ik elke week" */}
      {/* BEHOUDEN — dit is een van de sterkste secties */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-medium text-red-400 mb-6 border border-red-500/20">
              <AlertTriangle className="w-4 h-4" />
              Herkenbaar?
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              U voelt dat er meer in zit.{' '}
              <span className="gradient-text">Maar waar zit het precies?</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-lg text-text-secondary mb-10 max-w-3xl">
              Ik hoor het elke week. Van DGA&apos;s, van productiemanagers,
              van technisch directeuren. Dezelfde woorden:
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'We draaien best aardig, maar ik weet dat het beter kan.',
              'De lijn staat te vaak stil, maar ik kan niet precies zeggen waarom.',
              "We hebben te weinig mensen, maar eigenlijk zou het ook met dezelfde mensen moeten kunnen.",
              'Ik wil met data naar mijn MT, niet met een onderbuikgevoel.',
              'Er is spanning op de vloer. Ik weet het. Maar ik weet niet hoe ik het bespreekbaar maak.',
              'Iedereen zegt dat het goed gaat. Maar de stilstandcijfers vertellen een ander verhaal.',
            ].map((quote, i) => (
              <Reveal key={i} direction="up" delay={0.15 + i * 0.05}>
                <div className="flex items-start gap-3 glass p-4 rounded-xl border border-white/5 hover:border-primary-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary italic">&quot;{quote}&quot;</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.5}>
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary-500/20 bg-gradient-to-r from-primary-500/5 to-transparent">
              <p className="text-xl md:text-2xl font-semibold text-text-primary leading-relaxed">
                Het potentieel zit al in uw bedrijf. In uw machines, uw mensen,
                uw processen. U moet alleen weten waar u moet kijken.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 5: VOOR WIE IS DIT */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Voor mensen die produceren &mdash;{' '}
              <span className="gradient-text">niet voor consultants</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-text-secondary mb-8 max-w-3xl">
              Ik heb deze checklist gemaakt voor de mensen die ik in 22 jaar
              het meest heb bewonderd: ondernemers en managers die elke dag
              hun productie draaiende houden.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                'Directeur-eigenaren die meer willen halen uit hun bestaande productie',
                'Productiemanagers die voelen dat de lijn meer kan',
                'Operations managers in food, afvul of verpakking',
                'Technisch directeuren die nadenken over de volgende stap',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 glass p-4 rounded-xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-text-muted text-sm">
              Bedrijfsgrootte: 10-250 medewerkers. Maar als u kleiner of groter bent
              en het herkenbaar klinkt &mdash; download hem gerust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 6: BEWIJS — Case studies */}
      {/* BEHOUDEN — concreter dan het superprompt */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">
              Dit gebeurde toen zij{' '}
              <span className="gradient-text">w&eacute;l gingen meten</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
              Drie bedrijven. Drie situaties. Allemaal dachten ze dat het
              &quot;best goed ging&quot;. Tot we gingen kijken.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                sector: 'Voedselverwerkend bedrijf',
                situation: '"We draaien goed, toch?"',
                finding: 'OEE bleek 47%. Niemand wist het. Grootste verlies: omsteltijden die twee keer zo lang duurden als nodig.',
                result: '€340.000 besparingspotentieel',
              },
              {
                sector: 'Metaalbedrijf, 80 medewerkers',
                situation: '"We moeten een nieuwe machine kopen."',
                finding: 'De bestaande lijn draaide op 52% OEE. Na optimalisatie: 71%. Zonder investering. Met hetzelfde team.',
                result: 'Investering van €1,2M uitgesteld',
              },
              {
                sector: 'Farma-toeleverancier',
                situation: '"Stilstand? Valt mee bij ons."',
                finding: 'Stilstand kostte €4.200 per dag. Elke dag. 38% daarvan was vermijdbaar met simpele aanpassingen.',
                result: '€580.000 per jaar teruggewonnen',
              },
            ].map((caseItem, index) => (
              <Reveal key={index} direction="up" delay={index * 0.1}>
                <HoverScale scale={1.03}>
                  <div className="glass p-6 rounded-2xl border border-white/10 h-full hover:border-primary-500/30 transition-colors">
                    <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-3">
                      {caseItem.sector}
                    </p>
                    <p className="text-text-muted text-sm italic mb-3">
                      {caseItem.situation}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {caseItem.finding}
                    </p>
                    <div className="pt-3 border-t border-white/10">
                      <p className="text-lg font-bold gradient-text">
                        {caseItem.result}
                      </p>
                    </div>
                  </div>
                </HoverScale>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.4}>
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary-500/20 bg-gradient-to-r from-primary-500/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-text-primary leading-relaxed mb-2">
                    &quot;Rob, binnen twee uur op onze werkvloer wist je meer
                    over onze verliezen dan wij na twee jaar.&quot;
                  </p>
                  <p className="text-text-muted text-sm">
                    Productiedirecteur, voedselverwerkend bedrijf (120 FTE)
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 7: ROB PERSOONLIJK */}
      {/* BEHOUDEN — sterker dan superprompt */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Wie maakt dit eigenlijk?
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-12">
            <div className="lg:col-span-2">
              <Reveal direction="up" delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4]">
                  <Image
                    src="/images/rob-derks.jpg"
                    alt="Rob Derks"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white/90 text-sm font-medium italic leading-relaxed">
                      &quot;Het mooiste compliment? &apos;Rob, je snapt hoe het
                      er hier echt aan toe gaat.&apos; Dat is waar ik het voor doe.&quot;
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-3">
              <Reveal direction="up" delay={0.15}>
                <div className="text-text-secondary leading-relaxed space-y-4">
                  <p>
                    Ik ben Rob Derks. 22 jaar gewerkt in de productie &mdash; als operator,
                    als shift manager, als productieleider, als maintenance manager.
                    In de voedingsmiddelenindustrie, farma en metaal. Ik heb aan de
                    machines gestaan, storingen verholpen om 3 uur &apos;s nachts, en
                    omsteltijden teruggebracht van uren naar minuten.
                  </p>
                  <p>
                    Nu help ik MKB-productiebedrijven om meer te halen uit wat ze
                    al hebben. Geen dure investeringen als het niet nodig is.
                    Geen dikke rapporten die in de la verdwijnen. Gewoon: samen op
                    de werkvloer kijken, analyseren, en verbeteren.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Food & Farma', 'Metaal & Techniek', 'Noord-Brabant', 'Cobots & Automatisering'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Wat u krijgt als u met mij werkt */}
          <Reveal direction="up" delay={0.25}>
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary-500/20 bg-gradient-to-r from-primary-500/5 to-transparent">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary-500" />
                Wat u krijgt als u met mij werkt
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Iemand die uw taal spreekt. Van operator tot directiekamer.',
                  'Technische diepgang: OEE, SMED, TPM, Lean, Value Stream Mapping.',
                  'Oog voor de mens. Ik luister naar uw team, niet alleen naar uw data.',
                  "Resultaten in euro's. Geen dikke rapporten die in de la verdwijnen.",
                  'No cure, no pay. Vind ik niets, betaalt u niets.',
                  'Eerlijkheid. Ook als het antwoord is: u heeft mij niet nodig.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 8: BEZWAREN */}
      {/* BEHOUDEN — werkt goed */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-10 text-center">
              Ik snap het. U heeft dit al vaker gehoord.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                question: "Is dit weer zo'n marketingfolder?",
                answer: 'Nee. U vult uw eigen getallen in. Het resultaat is van uw bedrijf, niet van een template. Eerlijk en concreet.',
              },
              {
                icon: Clock,
                question: 'Daar heb ik geen tijd voor.',
                answer: "15 minuten. Korter dan uw koffiepauze. En u weet daarna precies waar u staat.",
              },
              {
                icon: Shield,
                question: 'En daarna word ik platgebeld?',
                answer: 'Nee. U downloadt de checklist direct. Als u meer wilt, neemt u zelf contact op. Zo simpel is het.',
              },
            ].map((card, index) => (
              <Reveal key={index} direction="up" delay={index * 0.1}>
                <HoverScale scale={1.03}>
                  <div className="glass p-6 rounded-2xl border border-white/10 h-full hover:border-primary-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                      <card.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2 italic">
                      &quot;{card.question}&quot;
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{card.answer}</p>
                  </div>
                </HoverScale>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 9: AFSLUITENDE CTA */}
      {/* ============================================ */}
      <section className="relative z-10 py-20 lg:py-28 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Benieuwd waar uw productie{' '}
              <span className="gradient-text">beter kan?</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              Download de gratis OEE Quickscan. 15 minuten van uw tijd.
              En u weet precies waar het potentieel in uw bedrijf zit.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="btn btn-lg inline-flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <Send className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download de Quickscan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <a
                href="tel:+31854010752"
                className="btn btn-secondary btn-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Of bel mij: 085 - 401 0752</span>
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-text-muted text-sm mt-6">
              Liever eerst even praten? Dat kan ook. Bel mij, of stuur een
              WhatsApp naar 06-30185844. Gewoon even mens tot mens.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Exit-intent popup */}
      <ExitIntentPopup onScrollToForm={scrollToForm} />

      {/* Sticky CTA bar on mobile */}
      <StickyCTABar onCTAClick={scrollToForm} />
    </main>
  );
}
