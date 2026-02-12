import { NextResponse } from 'next/server';

interface ContactFormData {
  naam: string;
  email: string;
  bedrijf?: string;
  telefoon?: string;
  bericht: string;
  honeypot?: string; // Spam protection
}

// Rate limiting store (in production use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

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
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Honeypot spam check - if filled, it's a bot
    if (data.honeypot) {
      // Silently accept but don't process
      return NextResponse.json({
        success: true,
        message: 'Bericht succesvol verzonden',
      });
    }

    // Validate required fields
    const errors: Record<string, string> = {};

    if (!data.naam || data.naam.trim().length < 2) {
      errors.naam = 'Naam moet minimaal 2 tekens bevatten';
    }

    if (!data.email) {
      errors.email = 'Email is verplicht';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = 'Ongeldig email adres';
      }
    }

    if (!data.bericht || data.bericht.trim().length < 10) {
      errors.bericht = 'Bericht moet minimaal 10 tekens bevatten';
    }

    if (data.telefoon && !/^[\d\s\-+()]{10,}$/.test(data.telefoon)) {
      errors.telefoon = 'Ongeldig telefoonnummer formaat';
    }

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validatie mislukt',
          code: 'VALIDATION_ERROR',
          fields: errors
        },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const submission = {
      naam: sanitize(data.naam),
      email: sanitize(data.email.toLowerCase()),
      bedrijf: data.bedrijf ? sanitize(data.bedrijf) : null,
      telefoon: data.telefoon ? sanitize(data.telefoon) : null,
      bericht: sanitize(data.bericht),
      timestamp: new Date().toISOString(),
      source: 'website_contact_form',
      ip: ip.split(',')[0].trim(), // First IP if behind proxies
    };

    // Log naar console (zichtbaar in Vercel logs)
    console.log('\n========================================');
    console.log('NIEUW CONTACTBERICHT!');
    console.log('========================================');
    console.log(`Naam:      ${submission.naam}`);
    console.log(`Email:     ${submission.email}`);
    console.log(`Telefoon:  ${submission.telefoon || 'Niet opgegeven'}`);
    console.log(`Bedrijf:   ${submission.bedrijf || 'Niet opgegeven'}`);
    console.log(`Bericht:   ${submission.bericht}`);
    console.log(`Datum:     ${submission.timestamp}`);
    console.log('========================================\n');

    // Stuur naar Formspree (zelfde systeem als calculators)
    const FORMSPREE_CONTACT_ID = 'xpqwawzl';
    try {
      const formspreeResponse = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _replyto: submission.email,
          _subject: `Nieuw contactbericht: ${submission.naam} (${submission.bedrijf || 'Geen bedrijf'})`,
          naam: submission.naam,
          email: submission.email,
          telefoon: submission.telefoon || 'Niet opgegeven',
          bedrijf: submission.bedrijf || 'Niet opgegeven',
          bericht: submission.bericht,
          bron: 'Contact Pagina',
          datum: new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' }),
        }),
      });

      if (formspreeResponse.ok) {
        console.log('Contactbericht verstuurd via Formspree');
      } else {
        console.error('Formspree response niet ok:', await formspreeResponse.text());
      }
    } catch (formspreeError) {
      console.error('Formspree fout:', formspreeError);
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Bericht succesvol verzonden! Ik neem binnen 24 uur contact met u op.',
      data: {
        reference: `P360-${Date.now().toString(36).toUpperCase()}`,
      }
    });

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing contact form:', error);
    }

    // Check for JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Ongeldige request data',
          code: 'INVALID_JSON'
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Er ging iets fout bij het verwerken van uw bericht. Probeer het later opnieuw.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}
