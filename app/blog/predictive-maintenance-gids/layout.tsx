import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Predictive Maintenance: Complete Gids voor Voorspellend Onderhoud [2025]',
  description: 'Alles over predictive maintenance: sensoren, algoritmes, implementatie en ROI. Van reactief naar voorspellend onderhoud. Praktische gids voor MKB-productiebedrijven.',
  keywords: ['predictive maintenance', 'voorspellend onderhoud', 'PdM', 'condition monitoring', 'vibration analysis', 'machine learning onderhoud', 'TPM'],
  openGraph: {
    title: 'Predictive Maintenance | Complete Gids 2025',
    description: 'Van reactief naar voorspellend onderhoud met praktische tips.',
    url: 'https://proces360.com/blog/predictive-maintenance-gids',
    type: 'article',
    publishedTime: '2025-10-14T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/predictive-maintenance-gids' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Predictive Maintenance: Complete Gids voor Voorspellend Onderhoud',
  description: 'Alles over predictive maintenance met praktische implementatietips.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-10-14',
  dateModified: '2025-10-14',
  mainEntityOfPage: 'https://proces360.com/blog/predictive-maintenance-gids',
  articleSection: 'OEE Verbetering',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Predictive Maintenance Gids', item: 'https://proces360.com/blog/predictive-maintenance-gids' },
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
