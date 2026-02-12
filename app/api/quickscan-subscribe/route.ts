import { NextRequest, NextResponse } from 'next/server';

// Formspree form ID voor quickscan leads (zelfde als contactformulier)
const FORMSPREE_ID = 'xpqwawzl';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { voornaam, email, bedrijf } = body;

    if (!voornaam || !email || !bedrijf) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    const datum = new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' });

    // Log naar console (zichtbaar in Vercel logs)
    console.log('\n========================================');
    console.log('NIEUWE QUICKSCAN LEAD!');
    console.log('========================================');
    console.log(`Naam:      ${voornaam}`);
    console.log(`Email:     ${email}`);
    console.log(`Bedrijf:   ${bedrijf}`);
    console.log(`Datum:     ${datum}`);
    console.log('========================================\n');

    // =============================================
    // FORMSPREE: Stuur lead notificatie naar Rob
    // =============================================
    if (FORMSPREE_ID) {
      try {
        const formspreeResponse = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            _replyto: email,
            _subject: `Nieuwe Quickscan lead: ${voornaam} (${bedrijf})`,
            voornaam,
            email,
            bedrijf,
            bron: 'OEE Quickscan Landingspagina',
            datum,
          }),
        });

        if (formspreeResponse.ok) {
          console.log('Lead notificatie verstuurd via Formspree');
        } else {
          console.error('Formspree response niet ok:', await formspreeResponse.text());
        }
      } catch (formspreeError) {
        console.error('Formspree fout:', formspreeError);
      }
    } else {
      console.warn('FORMSPREE_QUICKSCAN_ID niet geconfigureerd - lead notificatie niet verstuurd');
    }

    // PDF checklist wordt client-side gedownload op de bedankt-pagina
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
