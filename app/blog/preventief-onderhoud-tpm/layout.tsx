import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preventief Onderhoud & TPM: Van Reactief naar Proactief',
  description: 'Stop met brandjes blussen. Leer hoe je met Total Productive Maintenance (TPM) storingen voorkomt. Implementeer preventief onderhoud en verhoog je OEE.',
  keywords: [
    'preventief onderhoud',
    'TPM',
    'Total Productive Maintenance',
    'onderhoudsstrategie',
    'predictief onderhoud',
    'machine onderhoud',
    'onderhoud planning',
    'MTBF verbeteren',
    'autonomous maintenance',
    'geplande stilstand',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'Preventief Onderhoud & TPM | Proces360',
    description: 'Van reactief naar proactief onderhoud met TPM.',
    url: 'https://proces360.com/blog/preventief-onderhoud-tpm',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2025-12-20T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'Onderhoud',
  },
  alternates: {
    canonical: '/blog/preventief-onderhoud-tpm',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/preventief-onderhoud-tpm/#article',
  headline: 'Preventief Onderhoud & TPM: Van Reactief naar Proactief',
  description: 'Leer storingen voorkomen met Total Productive Maintenance.',
  datePublished: '2025-12-20T08:00:00+01:00',
  dateModified: '2025-12-20T08:00:00+01:00',
  author: { '@type': 'Person', '@id': 'https://proces360.com/#founder', name: 'Rob Derks' },
  publisher: { '@type': 'Organization', '@id': 'https://proces360.com/#organization', name: 'Proces360 B.V.' },
  mainEntityOfPage: 'https://proces360.com/blog/preventief-onderhoud-tpm',
  articleSection: 'Onderhoud',
  wordCount: 2200,
  inLanguage: 'nl-NL',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Preventief Onderhoud & TPM', item: 'https://proces360.com/blog/preventief-onderhoud-tpm' },
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
