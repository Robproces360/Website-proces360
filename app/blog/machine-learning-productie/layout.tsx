import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Machine Learning in Productie: Praktische AI-Toepassingen voor MKB [2025]',
  description: 'Ontdek hoe machine learning productie optimaliseert: predictive maintenance, kwaliteitscontrole, demand forecasting. Praktische gids met ROI en implementatietips voor MKB.',
  keywords: ['machine learning productie', 'AI manufacturing', 'predictive maintenance', 'quality AI', 'demand forecasting', 'ML productie', 'kunstmatige intelligentie fabriek'],
  openGraph: {
    title: 'Machine Learning in Productie | Praktische AI Gids',
    description: 'Hoe MKB-maakbedrijven machine learning inzetten voor hogere efficiëntie.',
    url: 'https://proces360.com/blog/machine-learning-productie',
    type: 'article',
    publishedTime: '2025-06-24T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/machine-learning-productie' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Machine Learning in Productie: Praktische AI-Toepassingen voor MKB',
  description: 'Ontdek hoe machine learning productie optimaliseert met praktische toepassingen.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-06-24',
  dateModified: '2025-06-24',
  mainEntityOfPage: 'https://proces360.com/blog/machine-learning-productie',
  articleSection: 'Industriële Automatisering',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Machine Learning Productie', item: 'https://proces360.com/blog/machine-learning-productie' },
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
