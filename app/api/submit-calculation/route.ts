import { NextResponse } from 'next/server';

// Formspree form IDs per calculator type
const FORMSPREE_IDS: Record<string, string> = {
  'OEE Calculator': 'xpqwawzl',
  'Robot ROI Calculator': 'xkogwgnv',
  'Productie Profit Scan': 'xpqwawzl',
};

// Allowed calculator types
const ALLOWED_TYPES = new Set(Object.keys(FORMSPREE_IDS));

// Rate limiting store (in production use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Sanitize input to prevent XSS
function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    const { naam, email, bedrijf, telefoon, calculatorType, ...calculationData } = body;

    // Validate required fields
    if (!naam || typeof naam !== 'string' || naam.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: 'Naam is verplicht (minimaal 2 tekens)' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'E-mail is verplicht' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    if (!calculatorType || !ALLOWED_TYPES.has(calculatorType)) {
      return NextResponse.json(
        { success: false, message: 'Ongeldig calculator type' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const cleanNaam = sanitize(naam);
    const cleanEmail = sanitize(email.toLowerCase());
    const cleanBedrijf = bedrijf ? sanitize(bedrijf) : 'Niet opgegeven';
    const cleanTelefoon = telefoon ? sanitize(telefoon) : 'Niet opgegeven';

    const datum = new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' });

    // Log naar console (zichtbaar in Vercel logs)
    console.log('\n========================================');
    console.log('NIEUWE LEAD ONTVANGEN!');
    console.log('========================================');
    console.log(`Naam:      ${cleanNaam}`);
    console.log(`Email:     ${cleanEmail}`);
    console.log(`Telefoon:  ${cleanTelefoon}`);
    console.log(`Bedrijf:   ${cleanBedrijf}`);
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
            _replyto: cleanEmail,
            _subject: `Nieuwe ${calculatorType} lead: ${cleanNaam} (${cleanBedrijf})`,
            naam: cleanNaam,
            email: cleanEmail,
            telefoon: cleanTelefoon,
            bedrijf: cleanBedrijf,
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
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Berekening succesvol ontvangen',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: 'Ongeldige request data' },
        { status: 400 }
      );
    }

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
