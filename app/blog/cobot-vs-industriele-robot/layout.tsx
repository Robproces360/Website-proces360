import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobot vs Industriële Robot: Welke Past Bij Uw Productie? [2025 Keuzegids]',
  description: 'Complete vergelijking cobot vs industriële robot: snelheid, payload, veiligheid, kosten en ROI. Met keuzematrix en praktijkvoorbeelden voor MKB-productiebedrijven.',
  keywords: ['cobot vs robot', 'collaborative robot', 'industriële robot', 'robot keuze', 'cobot selectie', 'robotisering MKB', 'robot vergelijking'],
  openGraph: {
    title: 'Cobot vs Industriële Robot | Keuzegids 2025',
    description: 'Welke robot past bij uw productie? Complete vergelijking.',
    url: 'https://proces360.com/blog/cobot-vs-industriele-robot',
    type: 'article',
    publishedTime: '2025-09-16T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/cobot-vs-industriele-robot' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cobot vs Industriële Robot: Welke Past Bij Uw Productie?',
  description: 'Complete vergelijking cobot vs industriële robot met keuzematrix.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-09-16',
  dateModified: '2025-09-16',
  mainEntityOfPage: 'https://proces360.com/blog/cobot-vs-industriele-robot',
  articleSection: 'Cobot Integratie',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cobot vs Industriële Robot', item: 'https://proces360.com/blog/cobot-vs-industriele-robot' },
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
