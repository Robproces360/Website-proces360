import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1% OEE Waarde Calculator | Wat is 1% OEE U Waard?',
  description: 'Ontdek in 20 seconden hoeveel elk procentpunt OEE-verbetering oplevert voor uw productielijn. Simpele calculator op basis van omzet en marge.',
  keywords: [
    '1 procent OEE waarde',
    'OEE waarde berekenen',
    'OEE verbetering opbrengst',
    'OEE ROI',
    'OEE winst calculator',
    'productie efficiëntie waarde',
  ],
  openGraph: {
    title: '1% OEE Waarde Calculator - Proces360',
    description: 'Ontdek in 20 seconden hoeveel elk procentpunt OEE-verbetering oplevert.',
    url: 'https://proces360.com/tools/oee-waarde',
    type: 'website',
  },
  alternates: { canonical: '/tools/oee-waarde' },
};

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/tools/oee-waarde/#software',
  name: '1% OEE Waarde Calculator',
  description: 'Gratis online tool om de waarde van 1% OEE verbetering te berekenen.',
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
    { '@type': 'ListItem', position: 3, name: 'OEE Waarde', item: 'https://proces360.com/tools/oee-waarde' },
  ],
};

export default function OEEWaardeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
