import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productieplanning Optimalisatie: Van Chaos naar Controle [Complete Gids 2026]',
  description: 'Optimaliseer uw productieplanning: scheduling algoritmes, capaciteitsplanning, APS systemen. Praktische gids met tools en templates voor MKB-maakbedrijven.',
  keywords: ['productieplanning', 'productie scheduling', 'capaciteitsplanning', 'APS systeem', 'planning optimalisatie', 'manufacturing planning', 'MRP'],
  openGraph: {
    title: 'Productieplanning Optimalisatie | Complete Gids',
    description: 'Van chaos naar controle in uw productieplanning.',
    url: 'https://proces360.com/blog/productieplanning-optimalisatie',
    type: 'article',
    publishedTime: '2026-01-07T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/productieplanning-optimalisatie' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Productieplanning Optimalisatie: Van Chaos naar Controle',
  description: 'Optimaliseer uw productieplanning met praktische tools en templates.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2026-01-07',
  dateModified: '2026-01-07',
  mainEntityOfPage: 'https://proces360.com/blog/productieplanning-optimalisatie',
  articleSection: 'Procesoptimalisatie',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Productieplanning Optimalisatie', item: 'https://proces360.com/blog/productieplanning-optimalisatie' },
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
