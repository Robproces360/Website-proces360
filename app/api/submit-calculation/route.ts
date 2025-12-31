import { NextResponse } from 'next/server';

// Formspree form IDs per calculator type
const FORMSPREE_IDS: Record<string, string> = {
  'OEE Calculator': 'xpqwawzl',
  'Robot ROI Calculator': 'xkogwgnv',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { naam, email, bedrijf, telefoon, calculatorType, ...calculationData } = body;

    const datum = new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' });

    // Log naar console (zichtbaar in Vercel logs)
    console.log('\n========================================');
    console.log('NIEUWE LEAD ONTVANGEN!');
    console.log('========================================');
    console.log(`Naam:      ${naam}`);
    console.log(`Email:     ${email}`);
    console.log(`Telefoon:  ${telefoon}`);
    console.log(`Bedrijf:   ${bedrijf || 'Niet opgegeven'}`);
    console.log(`Calculator: ${calculatorType}`);
    console.log(`Datum:     ${datum}`);
    console.log('========================================\n');

    // Stuur naar Formspree
    const formspreeId = FORMSPREE_IDS[calculatorType];
    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _replyto: email,
            _subject: `Nieuwe ${calculatorType} lead: ${naam} (${bedrijf || 'Geen bedrijf'})`,
            naam,
            email,
            telefoon,
            bedrijf: bedrijf || 'Niet opgegeven',
            calculator: calculatorType,
            datum,
            ...calculationData,
          }),
        });

        if (response.ok) {
          console.log(`Email verstuurd via Formspree (${calculatorType})`);
        } else {
          console.error('Formspree response niet ok:', await response.text());
        }
      } catch (formspreeError) {
        console.error('Formspree fout:', formspreeError);
      }
    } else {
      console.warn(`Geen Formspree ID voor calculator type: ${calculatorType}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Berekening succesvol ontvangen',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Er ging iets fout bij het verwerken van uw aanvraag',
      },
      { status: 500 }
    );
  }
}
