import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lean Manufacturing voor MKB: Praktische Start in 30 Dagen',
  description: 'Lean is geen grote investering of complexe theorie. Start morgen met deze praktische lean-methodes voor MKB-maakbedrijven. Van 5S tot value stream mapping.',
  keywords: [
    'lean manufacturing',
    'lean MKB',
    'lean productie',
    '5S methode',
    'kaizen',
    'value stream mapping',
    'waste reductie',
    'continuous improvement',
    'lean implementatie',
    'lean tools',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'Lean Manufacturing voor MKB: Start in 30 Dagen | Proces360',
    description: 'Praktische lean-methodes voor MKB-maakbedrijven. Start morgen.',
    url: 'https://proces360.com/blog/lean-manufacturing-mkb',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2025-12-28T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'Lean',
  },
  alternates: {
    canonical: '/blog/lean-manufacturing-mkb',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/lean-manufacturing-mkb/#article',
  headline: 'Lean Manufacturing voor MKB: Praktische Start in 30 Dagen',
  description: 'Praktische lean-methodes voor MKB-maakbedrijven.',
  datePublished: '2025-12-28T08:00:00+01:00',
  dateModified: '2025-12-28T08:00:00+01:00',
  author: { '@type': 'Person', '@id': 'https://proces360.com/#founder', name: 'Rob Derks' },
  publisher: { '@type': 'Organization', '@id': 'https://proces360.com/#organization', name: 'Proces360 B.V.' },
  mainEntityOfPage: 'https://proces360.com/blog/lean-manufacturing-mkb',
  articleSection: 'Lean',
  wordCount: 1800,
  inLanguage: 'nl-NL',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Lean Manufacturing MKB', item: 'https://proces360.com/blog/lean-manufacturing-mkb' },
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
