import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '360Scan Case Study: €69.000+ Besparing met Kleine Ingrepen',
  description: 'Hoe een MKB-maakbedrijf direct na een 360Scan ontdekte dat €69.000+ besparing mogelijk was met kleine, praktische ingrepen. Lees de volledige case study.',
  keywords: [
    '360Scan case study',
    'productie besparing',
    'OEE verbetering',
    'procesoptimalisatie resultaat',
    'MKB kostenbesparing',
    'productie efficiëntie',
    'quick wins productie',
  ],
  openGraph: {
    title: '360Scan Case Study: €69.000+ Besparing - Proces360',
    description: 'Ontdek hoe een MKB-maakbedrijf €69.000+ besparingspotentieel vond met een 360Scan.',
    url: 'https://proces360.com/blog/360scan-case-69k-besparing',
    type: 'article',
    publishedTime: '2026-02-03T10:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/360scan-case-69k-besparing' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/360scan-case-69k-besparing/#article',
  headline: '360Scan Case Study: €69.000+ Besparing met Kleine Ingrepen',
  description: 'Hoe een MKB-maakbedrijf direct na een 360Scan ontdekte dat €69.000+ besparing mogelijk was.',
  datePublished: '2026-02-03T10:00:00Z',
  dateModified: '2026-02-03T10:00:00Z',
  author: {
    '@type': 'Person',
    name: 'Rob Derks',
    url: 'https://proces360.com/over-ons',
  },
  publisher: { '@id': 'https://proces360.com/#organization' },
  mainEntityOfPage: 'https://proces360.com/blog/360scan-case-69k-besparing',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: '360Scan Case Study', item: 'https://proces360.com/blog/360scan-case-69k-besparing' },
  ],
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
