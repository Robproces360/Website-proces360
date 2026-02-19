import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productiestrategie & Automatisering: Van Visie naar Uitvoering',
  description: 'Hoe ontwikkelt u een automatiseringsstrategie die past bij uw MKB-maakbedrijf? Van quick wins tot lange termijn roadmap. Praktische aanpak van Rob Derks.',
  keywords: [
    'productiestrategie',
    'automatiseringsstrategie',
    'automatisering roadmap',
    'productie verbetering',
    'manufacturing strategy',
    'automatisering MKB',
    'productie planning',
    'strategisch automatiseren',
    'quick wins productie',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'Productiestrategie & Automatisering | Proces360',
    description: 'Van visie naar uitvoering: automatiseringsstrategie voor MKB.',
    url: 'https://proces360.com/blog/productie-strategie-automatisering',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2026-01-09T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'Strategie',
  },
  alternates: {
    canonical: '/blog/productie-strategie-automatisering',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/productie-strategie-automatisering/#article',
  headline: 'Productiestrategie & Automatisering: Van Visie naar Uitvoering',
  description: 'Automatiseringsstrategie ontwikkelen voor MKB-maakbedrijven.',
  datePublished: '2026-01-09T08:00:00+01:00',
  dateModified: '2026-01-09T08:00:00+01:00',
  author: { '@type': 'Person', '@id': 'https://proces360.com/#founder', name: 'Rob Derks' },
  publisher: { '@type': 'Organization', '@id': 'https://proces360.com/#organization', name: 'Proces360 B.V.' },
  mainEntityOfPage: 'https://proces360.com/blog/productie-strategie-automatisering',
  articleSection: 'Strategie',
  wordCount: 2800,
  inLanguage: 'nl-NL',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Productiestrategie', item: 'https://proces360.com/blog/productie-strategie-automatisering' },
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
