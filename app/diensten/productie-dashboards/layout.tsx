import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productie Dashboards | Real-time OEE Monitoring',
  description: 'Productie dashboards voor real-time OEE monitoring, KPI-visualisatie en business intelligence. Automatische alerts, trend analyse en rapportage tools.',
  keywords: ['productie dashboard', 'OEE monitoring', 'KPI dashboard', 'productie monitoring', 'real-time OEE', 'manufacturing dashboard', 'productie rapportage'],
  openGraph: {
    title: 'Productie Dashboards | Real-time Monitoring - Proces360',
    description: 'Real-time productie monitoring en KPI-visualisatie.',
    url: 'https://proces360.com/diensten/productie-dashboards',
  },
  alternates: { canonical: '/diensten/productie-dashboards' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/productie-dashboards/#service',
  name: 'Productie Dashboards',
  description: 'Real-time productie monitoring, KPI-visualisatie en business intelligence.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'Production Monitoring Software',
  offers: { '@type': 'Offer', priceRange: '€8.000 - €75.000', priceCurrency: 'EUR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://proces360.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Productie Dashboards', item: 'https://proces360.com/diensten/productie-dashboards' },
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
