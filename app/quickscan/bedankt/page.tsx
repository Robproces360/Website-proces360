'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CheckCircle,
  Phone,
  MessageCircle,
  Clock,
  Users,
  Shield,
  ArrowRight,
  Download,
} from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import HoverScale from '@/components/shared/HoverScale';

export default function QuickscanBedanktPage() {
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [voornaam, setVoornaam] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem('quickscan_submitted');
    if (!submitted) {
      router.replace('/quickscan');
      return;
    }
    sessionStorage.removeItem('quickscan_submitted');
    setVoornaam(sessionStorage.getItem('quickscan_voornaam') || '');
    sessionStorage.removeItem('quickscan_voornaam');
    setIsValid(true);

    if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
      (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'page_view', { page_title: 'Quickscan Bedankt' });
    }
  }, [router]);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const { downloadQuickscanChecklist } = await import('@/lib/quickscanChecklist');
      downloadQuickscanChecklist(voornaam || 'Bezoeker');

      if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
        (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'file_download', { event_category: 'quickscan', event_label: 'checklist_pdf' });
      }
    } catch {
      alert('Er ging iets mis bij het downloaden. Probeer het opnieuw.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleGesprekClick = () => {
    if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
      (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', 'click', { event_category: 'quickscan', event_label: 'cta_gesprek' });
    }
  };

  if (!isValid) return null;

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="fixed top-20 right-[10%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-20 left-[5%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ============================================ */}
      {/* SECTIE 1: BEVESTIGING + DOWNLOAD */}
      {/* ============================================ */}
      <section className="relative z-10 pt-32 pb-8 lg:pt-40 lg:pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <CheckCircle className="w-5 h-5" />
              Uw checklist is klaar
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {voornaam ? `${voornaam}, goed` : 'Goed'}. <span className="gradient-text">De eerste stap is gezet.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
              Download uw persoonlijke OEE Quickscan Checklist hieronder.
              Neem er rustig 15 minuten voor met uw eigen productiecijfers erbij.
            </p>
          </Reveal>

          {/* GROTE DOWNLOAD KNOP */}
          <Reveal direction="up" delay={0.2}>
            <HoverScale scale={1.03}>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center gap-3 px-8 py-5 bg-primary-500 text-white font-bold text-lg rounded-xl hover:bg-primary-600 transition-colors shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    PDF wordt aangemaakt...
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6" />
                    Download uw checklist (PDF)
                  </>
                )}
              </button>
            </HoverScale>
            <p className="text-text-muted text-sm mt-3">
              6 pagina&apos;s &middot; Print-vriendelijk &middot; Gratis
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 2: WAT ZIT ERIN */}
      {/* ============================================ */}
      <section className="relative z-10 py-8 lg:py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal direction="up" delay={0.1}>
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10">
              <h2 className="text-lg font-bold text-text-primary mb-4">Wat zit er in de checklist:</h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Stap 1:</strong> Bereken uw OEE in 5 stappen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Stap 2:</strong> Ontdek de 5 plekken waar productietijd verdwijnt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Stap 3:</strong> Vertaal het naar euro&apos;s &mdash; wat kost het u?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Stap 4:</strong> Is automatisering iets voor u? (5 eerlijke vragen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Stap 5:</strong> Actieplan &mdash; direct morgen aan de slag</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 3: PERSOONLIJKE UITNODIGING */}
      {/* ============================================ */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Wilt u weten wat er bij <span className="gradient-text">uw bedrijf</span> mogelijk is?
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="text-lg text-text-secondary leading-relaxed space-y-4 mb-8">
              <p>
                De checklist geeft u een eerste beeld. Maar het echte verhaal
                ontdekt u op de werkvloer.
              </p>
              <p>
                Daarom bied ik u een vrijblijvend kennismakingsgesprek aan.
                Even bellen, uw situatie bespreken, en samen kijken of het
                zinvol is dat ik een keer meekijk in uw productie.
                Geen verkooppraatje. Gewoon een eerlijk gesprek.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-primary-500" />
                </div>
                <span className="text-text-secondary">Vrijblijvend gesprek van 20-30 minuten</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-primary-500" />
                </div>
                <span className="text-text-secondary">Samen kijken wat er mogelijk is bij uw bedrijf</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-primary-500" />
                </div>
                <span className="text-text-secondary">Eerlijk advies &mdash; ook als ik denk dat u mij niet nodig hebt</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <HoverScale scale={1.03}>
                <a
                  href="/#contact"
                  onClick={handleGesprekClick}
                  className="btn btn-lg inline-flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Plan een vrijblijvend gesprek</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </HoverScale>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-text-secondary">
              <HoverScale scale={1.05}>
                <a
                  href="tel:+31854010752"
                  className="inline-flex items-center gap-2 hover:text-primary-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-500" />
                  Of bel direct: 085 - 401 0752
                </a>
              </HoverScale>
              <HoverScale scale={1.05}>
                <a
                  href="https://wa.me/31630185844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  WhatsApp: 06-30185844
                </a>
              </HoverScale>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIE 5: PERSOONLIJK WOORD */}
      {/* ============================================ */}
      <section className="relative z-10 py-16 lg:py-24 bg-bg-secondary">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal direction="up">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Nog niet zover? Helemaal prima.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Werk eerst de checklist door. Neem de tijd.
                En als u vragen hebt over uw resultaten &mdash;
                stuur mij een bericht. Ik denk graag mee.
              </p>
              <p className="text-text-primary font-semibold text-lg">
                Rob
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
