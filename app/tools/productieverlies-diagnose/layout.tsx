import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productieverlies Diagnose | Ontdek Uw Grootste Verliespost',
  description: 'In 5 vragen ontdekt u waar uw grootste productieverlies zit: beschikbaarheid, prestatie of kwaliteit. Gratis diagnose met concrete verbeteracties.',
  keywords: [
    'productieverlies analyse',
    'OEE verlies diagnose',
    'beschikbaarheidsverlies',
    'prestatieverlies',
    'kwaliteitsverlies',
    'productie bottleneck',
  ],
  openGraph: {
    title: 'Productieverlies Diagnose - Proces360',
    description: 'Ontdek in 5 vragen waar uw grootste productieverlies zit.',
    url: 'https://proces360.com/tools/productieverlies-diagnose',
    type: 'website',
  },
  alternates: { canonical: '/tools/productieverlies-diagnose' },
};

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/tools/productieverlies-diagnose/#software',
  name: 'Productieverlies Diagnose Tool',
  description: 'Gratis online tool om te ontdekken waar uw grootste productieverlies zit.',
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
    { '@type': 'ListItem', position: 3, name: 'Productieverlies Diagnose', item: 'https://proces360.com/tools/productieverlies-diagnose' },
  ],
};

export default function ProductieverliesDiagnoseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
