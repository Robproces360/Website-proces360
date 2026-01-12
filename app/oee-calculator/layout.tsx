import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEE Calculator | Bereken Financiële Impact OEE Verhoging',
  description: 'Bereken gratis de financiële impact van OEE verhoging op uw productielijn. Ontdek hoeveel extra omzet en winst elke procentpunt OEE verbetering oplevert.',
  keywords: [
    'OEE calculator',
    'OEE berekenen',
    'OEE financiële impact',
    'OEE verbetering ROI',
    'Overall Equipment Effectiveness calculator',
    'productie efficiëntie berekenen',
    'OEE kostenbesparing',
  ],
  openGraph: {
    title: 'OEE Calculator | Bereken Financiële Impact - Proces360',
    description: 'Bereken gratis hoeveel extra omzet en winst OEE verbetering oplevert.',
    url: 'https://proces360.com/oee-calculator',
    type: 'website',
  },
  alternates: { canonical: '/oee-calculator' },
};

// SoftwareApplication Schema
const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/oee-calculator/#software',
  name: 'OEE Financial Impact Calculator',
  description: 'Gratis online tool om de financiële impact van OEE verhoging te berekenen.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  provider: { '@id': 'https://proces360.com/#organization' },
  featureList: [
    'OEE financiële impact berekening',
    'Omzet verhoging calculator',
    'Winst impact analyse',
    'Vergelijking huidige vs doel OEE',
    'Kostenreductie berekening',
  ],
};

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel is 1% OEE verbetering waard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De waarde van 1% OEE verbetering hangt af van uw omzet en marge. Bij een productielijn met €1M omzet en 20% marge is 1% OEE verbetering circa €2.000-€5.000 extra winst per jaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een realistische OEE verbetering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een realistische OEE verbetering is 15-40% over 6-12 maanden. Bedrijven die starten rond 50% kunnen vaak naar 70%+ groeien. Van 70% naar 85% (world-class) is uitdagender.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik de ROI van OEE verbetering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ROI = (Extra output × marge - kosten verbetertraject) / kosten verbetertraject × 100%. Bij een typisch OEE verbetertraject van €25.000 en €100.000 extra winst is de ROI 300%.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'OEE Calculator', item: 'https://proces360.com/oee-calculator' },
  ],
};

export default function OEECalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
