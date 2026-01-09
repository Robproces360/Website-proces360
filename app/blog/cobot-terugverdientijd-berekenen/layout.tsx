import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobot Terugverdientijd Berekenen: ROI in 12-18 Maanden',
  description: 'Leer hoe je de terugverdientijd van een cobot berekent. Ontdek wanneer robotisering rendabel is voor jouw MKB-maakbedrijf. Inclusief ROI-formule en rekenvoorbeelden.',
  keywords: [
    'cobot terugverdientijd',
    'cobot ROI',
    'robot ROI berekenen',
    'terugverdientijd robot',
    'cobot investering',
    'cobot kosten',
    'robotisering rendabel',
    'payback period robot',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'Cobot Terugverdientijd Berekenen | Proces360',
    description: 'Wanneer is robotisering rendabel? Bereken de ROI van een cobot.',
    url: 'https://proces360.com/blog/cobot-terugverdientijd-berekenen',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2026-01-07T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'ROI',
  },
  alternates: {
    canonical: '/blog/cobot-terugverdientijd-berekenen',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/cobot-terugverdientijd-berekenen/#article',
  headline: 'Cobot Terugverdientijd Berekenen: ROI in 12-18 Maanden',
  description: 'Leer hoe je de terugverdientijd van een cobot berekent.',
  datePublished: '2026-01-07T08:00:00+01:00',
  dateModified: '2026-01-07T08:00:00+01:00',
  author: { '@type': 'Person', '@id': 'https://proces360.com/#founder', name: 'Rob Derks' },
  publisher: { '@type': 'Organization', '@id': 'https://proces360.com/#organization', name: 'Proces360 B.V.' },
  mainEntityOfPage: 'https://proces360.com/blog/cobot-terugverdientijd-berekenen',
  articleSection: 'ROI',
  wordCount: 1600,
  inLanguage: 'nl-NL',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cobot Terugverdientijd', item: 'https://proces360.com/blog/cobot-terugverdientijd-berekenen' },
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
