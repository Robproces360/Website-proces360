import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobot Integratie | Merkonafhankelijke Robot Implementatie',
  description: 'Complete cobot integratie van selectie tot productie. Merkonafhankelijk advies uit 50+ technologieën. Gemiddelde terugverdientijd 12-18 maanden. Gratis haalbaarheidsanalyse.',
  keywords: ['cobot integratie', 'cobot implementatie', 'collaborative robot', 'Universal Robots', 'FANUC cobot', 'robot automatisering', 'cobot programmeren'],
  openGraph: {
    title: 'Cobot Integratie | Merkonafhankelijke Robot Implementatie - Proces360',
    description: 'Complete cobot integratie met gemiddelde ROI van 12-18 maanden.',
    url: 'https://proces360.com/diensten/cobot-integratie',
  },
  alternates: { canonical: '/diensten/cobot-integratie' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/cobot-integratie/#service',
  name: 'Cobot/Robot Integratie',
  description: 'Complete cobot implementatie van selectie tot programmering. Merkonafhankelijk advies uit 50+ technologieën.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'Collaborative Robot Integration',
  offers: { '@type': 'Offer', priceRange: '€35.000 - €300.000', priceCurrency: 'EUR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://proces360.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Cobot Integratie', item: 'https://proces360.com/diensten/cobot-integratie' },
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
