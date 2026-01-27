import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEE Benchmark Check | Hoe Volwassen is Uw OEE?',
  description: 'Beantwoord 5 vragen en ontdek waar u staat ten opzichte van andere MKB-maakbedrijven. Gratis OEE volwassenheidstoets.',
  keywords: [
    'OEE benchmark',
    'OEE volwassenheid',
    'OEE meting vergelijken',
    'OEE MKB benchmark',
    'productie benchmark',
    'OEE best practices',
  ],
  openGraph: {
    title: 'OEE Benchmark Check - Proces360',
    description: 'Ontdek in 5 vragen hoe volwassen uw OEE-aanpak is.',
    url: 'https://proces360.com/tools/oee-benchmark',
    type: 'website',
  },
  alternates: { canonical: '/tools/oee-benchmark' },
};

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/tools/oee-benchmark/#software',
  name: 'OEE Benchmark Check',
  description: 'Gratis online tool om uw OEE volwassenheid te benchmarken tegen andere MKB-maakbedrijven.',
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
    { '@type': 'ListItem', position: 3, name: 'OEE Benchmark', item: 'https://proces360.com/tools/oee-benchmark' },
  ],
};

export default function OEEBenchmarkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
