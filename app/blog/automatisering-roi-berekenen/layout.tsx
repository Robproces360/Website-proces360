import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatisering ROI Berekenen: Investeren met Zekerheid [Complete Gids 2025]',
  description: 'Leer automatisering ROI berekenen: investeringsanalyse, terugverdientijd, kostenbesparing. Met rekentools, templates en praktijkvoorbeelden voor MKB-productiebedrijven.',
  keywords: ['automatisering ROI', 'robot ROI', 'terugverdientijd automatisering', 'investering automatisering', 'business case automatisering', 'payback period'],
  openGraph: {
    title: 'Automatisering ROI Berekenen | Complete Gids',
    description: 'Bereken de ROI van uw automatiseringsinvestering met zekerheid.',
    url: 'https://proces360.com/blog/automatisering-roi-berekenen',
    type: 'article',
    publishedTime: '2025-11-11T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/automatisering-roi-berekenen' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Automatisering ROI Berekenen: Investeren met Zekerheid',
  description: 'Leer automatisering ROI berekenen met praktische tools en voorbeelden.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-11-11',
  dateModified: '2025-11-11',
  mainEntityOfPage: 'https://proces360.com/blog/automatisering-roi-berekenen',
  articleSection: 'Industriële Automatisering',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Automatisering ROI Berekenen', item: 'https://proces360.com/blog/automatisering-roi-berekenen' },
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
