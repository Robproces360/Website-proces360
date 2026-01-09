import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industriële Automatisering | PLC tot Lijnautomatisering',
  description: 'Industriële automatisering voor MKB: PLC programmering, systeemintegratie, SCADA/HMI, lijnautomatisering en retrofit van bestaande machines.',
  keywords: ['industriële automatisering', 'PLC programmering', 'systeemintegratie', 'SCADA', 'HMI', 'lijnautomatisering', 'machine retrofit', 'Siemens PLC'],
  openGraph: {
    title: 'Industriële Automatisering | PLC tot Lijnautomatisering - Proces360',
    description: 'Van PLC-programmering tot complete lijnautomatisering.',
    url: 'https://proces360.com/diensten/industriele-automatisering',
  },
  alternates: { canonical: '/diensten/industriele-automatisering' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/industriele-automatisering/#service',
  name: 'Industriële Automatisering',
  description: 'Van PLC-programmering tot complete productielijnautomatisering.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'Industrial Automation',
  offers: { '@type': 'Offer', priceRange: '€10.000 - €500.000', priceCurrency: 'EUR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://proces360.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Industriële Automatisering', item: 'https://proces360.com/diensten/industriele-automatisering' },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
