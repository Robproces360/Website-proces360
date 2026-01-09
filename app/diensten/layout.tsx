import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Diensten - Proces360',
    default: 'Diensten | Proces360 - Procesoptimalisatie & Automatisering',
  },
  description: 'Complete diensten voor MKB-maakbedrijven: procesoptimalisatie, OEE-verbetering, cobot integratie, industriële automatisering en productie dashboards. Gratis quickscan beschikbaar.',
  keywords: [
    'procesoptimalisatie diensten',
    'OEE verbetering dienst',
    'cobot integratie service',
    'industriële automatisering',
    'productie dashboard',
    'MKB productie consultant',
    'gratis quickscan productie',
  ],
  openGraph: {
    title: 'Diensten | Proces360 - Procesoptimalisatie & Automatisering',
    description: 'Complete oplossingen voor procesoptimalisatie, OEE-verbetering en automatisering.',
    url: 'https://proces360.com/diensten',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: '/diensten',
  },
};

// Service Catalog Schema
const serviceCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://proces360.com/diensten/#servicelist',
  name: 'Proces360 Diensten',
  description: 'Complete diensten voor procesoptimalisatie en automatisering',
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Procesoptimalisatie',
        description: 'Lean manufacturing & workflow optimalisatie voor MKB-maakbedrijven',
        url: 'https://proces360.com/diensten/procesoptimalisatie',
        provider: { '@id': 'https://proces360.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'OEE Verbetering',
        description: 'Verhoog je OEE met 15-40% door systematische optimalisatie',
        url: 'https://proces360.com/diensten/oee-verbetering',
        provider: { '@id': 'https://proces360.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Cobot Integratie',
        description: 'Merkonafhankelijke cobot/robot implementatie met ROI garantie',
        url: 'https://proces360.com/diensten/cobot-integratie',
        provider: { '@id': 'https://proces360.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Industriële Automatisering',
        description: 'Van PLC-programmering tot complete lijnautomatisering',
        url: 'https://proces360.com/diensten/industriele-automatisering',
        provider: { '@id': 'https://proces360.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Productie Dashboards',
        description: 'Real-time productie monitoring en KPI-visualisatie',
        url: 'https://proces360.com/diensten/productie-dashboards',
        provider: { '@id': 'https://proces360.com/#organization' },
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://proces360.com/diensten' },
  ],
};

export default function DienstenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
