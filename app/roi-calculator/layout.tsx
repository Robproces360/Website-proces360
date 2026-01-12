import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobot ROI Calculator | Bereken Terugverdientijd Robot',
  description: 'Bereken gratis de ROI en terugverdientijd van uw cobot of robot investering. Inclusief kostenbesparing, break-even analyse en vergelijking met handmatig werk.',
  keywords: [
    'cobot ROI calculator',
    'robot terugverdientijd',
    'cobot terugverdientijd berekenen',
    'ROI berekening robot',
    'cobot investering',
    'automatisering ROI',
    'robot kostenbesparing',
    'payback periode cobot',
  ],
  openGraph: {
    title: 'Cobot ROI Calculator | Bereken Terugverdientijd - Proces360',
    description: 'Bereken gratis de ROI en terugverdientijd van uw cobot investering.',
    url: 'https://proces360.com/roi-calculator',
    type: 'website',
  },
  alternates: { canonical: '/roi-calculator' },
};

// SoftwareApplication Schema voor de calculator
const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/roi-calculator/#software',
  name: 'Cobot ROI Calculator',
  description: 'Gratis online tool om de ROI en terugverdientijd van cobot/robot investeringen te berekenen.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  provider: { '@id': 'https://proces360.com/#organization' },
  featureList: [
    'ROI berekening cobot investering',
    'Terugverdientijd analyse',
    'Vergelijking handmatig vs geautomatiseerd',
    'Kostenbesparing calculator',
    'Break-even punt berekening',
  ],
};

// FAQ Schema voor calculator pagina
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een goede ROI voor een cobot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goede ROI voor een cobot ligt tussen 50-150% per jaar, met een terugverdientijd van 12-24 maanden. Dit hangt af van loonkosten, inzeturen en productiviteitswinst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik de terugverdientijd van een cobot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terugverdientijd = Totale investering / Jaarlijkse besparing. De besparing omvat: loonkosten reductie, productiviteitswinst, lagere uitval en minder verzuim.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke kosten moet ik meenemen bij cobot ROI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neem mee: aanschafprijs cobot (€25.000-€60.000), gripper/tooling (€5.000-€20.000), integratie (€10.000-€50.000), training en onderhoudskosten.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'ROI Calculator', item: 'https://proces360.com/roi-calculator' },
  ],
};

export default function ROICalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
