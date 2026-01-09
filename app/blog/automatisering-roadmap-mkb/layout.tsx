import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatisering Roadmap voor MKB: Van Handmatig naar Geautomatiseerd [2025]',
  description: 'Stap-voor-stap automatisering roadmap voor MKB-productiebedrijven. Van prioritering en business case tot implementatie. Met ROI-berekeningen en praktijkcases.',
  keywords: ['automatisering roadmap', 'productie automatisering', 'MKB automatisering', 'automatiseringsstrategie', 'productie optimalisatie', 'industriële automatisering', 'automatisering stappenplan'],
  openGraph: {
    title: 'Automatisering Roadmap voor MKB | Proces360',
    description: 'Complete roadmap voor productieautomatisering in het MKB.',
    url: 'https://proces360.com/blog/automatisering-roadmap-mkb',
    type: 'article',
    publishedTime: '2025-05-19T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/automatisering-roadmap-mkb' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Automatisering Roadmap voor MKB: Van Handmatig naar Geautomatiseerd',
  description: 'Stap-voor-stap automatisering roadmap voor MKB-productiebedrijven met ROI-berekeningen.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-05-19',
  dateModified: '2025-05-19',
  mainEntityOfPage: 'https://proces360.com/blog/automatisering-roadmap-mkb',
  image: 'https://proces360.com/images/blog/automatisering-roadmap.jpg',
  articleSection: 'Industriële Automatisering',
  keywords: ['automatisering roadmap', 'MKB automatisering', 'productie automatisering'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Automatisering Roadmap MKB', item: 'https://proces360.com/blog/automatisering-roadmap-mkb' },
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
