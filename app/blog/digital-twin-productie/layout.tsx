import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Twin in Productie: Virtuele Fabriek voor Echte Resultaten [2025]',
  description: 'Complete gids digital twins voor MKB-productie: simulatie, optimalisatie, predictive analytics. Van concept tot implementatie met praktijkcases en ROI-analyse.',
  keywords: ['digital twin', 'virtuele fabriek', 'productie simulatie', 'digital twin manufacturing', 'process simulation', 'industrie 4.0'],
  openGraph: {
    title: 'Digital Twin in Productie | Complete Gids',
    description: 'Hoe digital twins MKB-productie transformeren.',
    url: 'https://proces360.com/blog/digital-twin-productie',
    type: 'article',
    publishedTime: '2025-12-09T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/digital-twin-productie' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Digital Twin in Productie: Virtuele Fabriek voor Echte Resultaten',
  description: 'Complete gids digital twins voor MKB-productie met praktijkcases.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-12-09',
  dateModified: '2025-12-09',
  mainEntityOfPage: 'https://proces360.com/blog/digital-twin-productie',
  articleSection: 'Industrie 4.0',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Digital Twin Productie', item: 'https://proces360.com/blog/digital-twin-productie' },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
