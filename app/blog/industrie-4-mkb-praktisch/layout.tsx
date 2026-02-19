import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrie 4.0 voor MKB: Praktisch Beginnen Zonder Miljoeneninvestering',
  description: 'Smart Industry hoeft niet duur of complex te zijn. Ontdek hoe u met kleine stappen en beperkt budget uw fabriek digitaliseert. Praktische Industrie 4.0 gids voor MKB.',
  keywords: [
    'industrie 4.0',
    'smart industry',
    'digitalisering productie',
    'smart factory',
    'IIoT',
    'Industrial Internet of Things',
    'digitale transformatie',
    'MES systeem',
    'productie digitalisering',
    'fabriek van de toekomst',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'Industrie 4.0 voor MKB: Praktisch Beginnen | Proces360',
    description: 'Smart Industry starten zonder miljoeneninvestering.',
    url: 'https://proces360.com/blog/industrie-4-mkb-praktisch',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2025-12-12T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'Digitalisering',
  },
  alternates: {
    canonical: '/blog/industrie-4-mkb-praktisch',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/industrie-4-mkb-praktisch/#article',
  headline: 'Industrie 4.0 voor MKB: Praktisch Beginnen Zonder Miljoeneninvestering',
  description: 'Smart Industry starten met beperkt budget.',
  datePublished: '2025-12-12T08:00:00+01:00',
  dateModified: '2025-12-12T08:00:00+01:00',
  author: { '@type': 'Person', '@id': 'https://proces360.com/#founder', name: 'Rob Derks' },
  publisher: { '@type': 'Organization', '@id': 'https://proces360.com/#organization', name: 'Proces360 B.V.' },
  mainEntityOfPage: 'https://proces360.com/blog/industrie-4-mkb-praktisch',
  articleSection: 'Digitalisering',
  wordCount: 2400,
  inLanguage: 'nl-NL',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Industrie 4.0 MKB', item: 'https://proces360.com/blog/industrie-4-mkb-praktisch' },
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
