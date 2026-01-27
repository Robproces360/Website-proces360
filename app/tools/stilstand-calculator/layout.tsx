import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stilstand Schadepost Calculator | Bereken Uw Verborgen Kosten',
  description: 'Bereken in 30 seconden hoeveel productiestilstand u écht kost. Ontdek de verborgen kosten en het verbeterpotentieel voor uw productielijn.',
  keywords: [
    'stilstand kosten berekenen',
    'productiestilstand calculator',
    'downtime kosten',
    'machine stilstand kosten',
    'OEE verlies berekenen',
    'productieverlies calculator',
  ],
  openGraph: {
    title: 'Stilstand Schadepost Calculator - Proces360',
    description: 'Bereken in 30 seconden hoeveel productiestilstand u écht kost.',
    url: 'https://proces360.com/tools/stilstand-calculator',
    type: 'website',
  },
  alternates: { canonical: '/tools/stilstand-calculator' },
};

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/tools/stilstand-calculator/#software',
  name: 'Stilstand Schadepost Calculator',
  description: 'Gratis online tool om de kosten van productiestilstand te berekenen.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  provider: { '@id': 'https://proces360.com/#organization' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://proces360.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Stilstand Calculator', item: 'https://proces360.com/tools/stilstand-calculator' },
  ],
};

export default function StilstandCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
