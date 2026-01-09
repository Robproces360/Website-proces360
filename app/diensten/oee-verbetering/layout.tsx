import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEE Verbetering | Verhoog je OEE met 15-40%',
  description: 'Verhoog je OEE met 15-40% door systematische optimalisatie. Wij meten, analyseren en verbeteren je Overall Equipment Effectiveness met bewezen methodes. Gratis quickscan beschikbaar.',
  keywords: [
    'OEE verbetering',
    'OEE verhogen',
    'OEE consultant',
    'OEE optimalisatie',
    'Overall Equipment Effectiveness',
    'OEE verbetertraject',
    'productie efficiëntie',
    '6 grote verliezen',
  ],
  openGraph: {
    title: 'OEE Verbetering | Verhoog je OEE met 15-40% - Proces360',
    description: 'Systematische OEE verbetering voor MKB-maakbedrijven. Verhoog beschikbaarheid, prestatie en kwaliteit.',
    url: 'https://proces360.com/diensten/oee-verbetering',
  },
  alternates: {
    canonical: '/diensten/oee-verbetering',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/oee-verbetering/#service',
  name: 'OEE Verbetertraject',
  description: 'Verhoog je OEE met 15-40% door gerichte optimalisatie van beschikbaarheid, prestatie en kwaliteit.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'OEE Improvement Consulting',
  offers: {
    '@type': 'Offer',
    priceRange: '€5.000 - €50.000',
    priceCurrency: 'EUR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een goede OEE score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een OEE onder 50% vraagt urgente aandacht. 50-70% is gemiddeld voor MKB. 85%+ is world-class.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel zie ik resultaat bij OEE verbetering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De eerste quick wins zijn vaak binnen 4-6 weken zichtbaar. Structurele verbetering van 15-40% realiseren we binnen 3-6 maanden.',
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
    { '@type': 'ListItem', position: 3, name: 'OEE Verbetering', item: 'https://proces360.com/diensten/oee-verbetering' },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
