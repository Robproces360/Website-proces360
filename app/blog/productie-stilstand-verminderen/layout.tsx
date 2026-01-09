import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Praktische Tips om Productie Stilstand te Verminderen',
  description: 'Stilstand kost duizenden euros per uur. Ontdek 10 bewezen methodes om ongeplande downtime drastisch te verlagen. Praktische tips van Rob Derks, 22+ jaar productie-ervaring.',
  keywords: [
    'productie stilstand',
    'downtime verminderen',
    'ongeplande stilstand',
    'machine stilstand',
    'productie storingen',
    'preventief onderhoud',
    'OEE beschikbaarheid',
    'stilstand registratie',
    'MTBF',
    'MTTR',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: '10 Tips om Productie Stilstand te Verminderen | Proces360',
    description: 'Bewezen methodes om ongeplande downtime drastisch te verlagen.',
    url: 'https://proces360.com/blog/productie-stilstand-verminderen',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2026-01-05T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'Procesoptimalisatie',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Tips om Productie Stilstand te Verminderen',
    description: 'Bewezen methodes om downtime te verlagen',
  },
  alternates: {
    canonical: '/blog/productie-stilstand-verminderen',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/productie-stilstand-verminderen/#article',
  headline: '10 Praktische Tips om Productie Stilstand te Verminderen',
  description: 'Bewezen methodes om ongeplande downtime drastisch te verlagen.',
  datePublished: '2026-01-05T08:00:00+01:00',
  dateModified: '2026-01-05T08:00:00+01:00',
  author: { '@type': 'Person', '@id': 'https://proces360.com/#founder', name: 'Rob Derks' },
  publisher: { '@type': 'Organization', '@id': 'https://proces360.com/#organization', name: 'Proces360 B.V.' },
  mainEntityOfPage: 'https://proces360.com/blog/productie-stilstand-verminderen',
  articleSection: 'Procesoptimalisatie',
  wordCount: 2000,
  inLanguage: 'nl-NL',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Productie Stilstand Verminderen', item: 'https://proces360.com/blog/productie-stilstand-verminderen' },
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
