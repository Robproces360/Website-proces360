import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Procesoptimalisatie | Lean Manufacturing & Workflow Optimalisatie',
  description: 'Procesoptimalisatie voor MKB-maakbedrijven: bottleneck analyse, lean implementatie, waste reductie en doorlooptijd verkorting. 22+ jaar praktijkervaring.',
  keywords: ['procesoptimalisatie', 'lean manufacturing', 'workflow optimalisatie', 'bottleneck analyse', 'waste reductie', '5S', 'kaizen', 'value stream mapping'],
  openGraph: {
    title: 'Procesoptimalisatie | Lean Manufacturing - Proces360',
    description: 'Optimaliseer je productieprocessen met bewezen lean-methodes.',
    url: 'https://proces360.com/diensten/procesoptimalisatie',
  },
  alternates: { canonical: '/diensten/procesoptimalisatie' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/procesoptimalisatie/#service',
  name: 'Procesoptimalisatie',
  description: 'Lean manufacturing & workflow optimalisatie voor MKB-maakbedrijven.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'Process Optimization Consulting',
  offers: { '@type': 'Offer', priceRange: '€5.000 - €25.000', priceCurrency: 'EUR' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://proces360.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Procesoptimalisatie', item: 'https://proces360.com/diensten/procesoptimalisatie' },
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
