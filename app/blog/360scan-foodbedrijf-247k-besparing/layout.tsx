import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '360Scan Case Study: €247.000 Jaarlijkse Besparing bij Foodproducent',
  description: 'Uitgebreide 360Scan bij foodbedrijf onthult €247.000 besparingspotentieel: 3,2 FTE besparing, 18% OEE-verhoging en automatiseringskansen. Lees de volledige analyse.',
  keywords: [
    '360Scan food industry',
    'foodproductie optimalisatie',
    'FTE besparing productie',
    'OEE verhoging food',
    'automatisering voedingsindustrie',
    'productie efficiëntie food',
    'case study voedselproductie',
  ],
  openGraph: {
    title: '360Scan Case Study: €247.000 Besparing Foodproducent - Proces360',
    description: 'Hoe een foodbedrijf €247.000 besparingspotentieel ontdekte met een uitgebreide 360Scan.',
    url: 'https://proces360.com/blog/360scan-foodbedrijf-247k-besparing',
    type: 'article',
    publishedTime: '2026-02-03T12:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/360scan-foodbedrijf-247k-besparing' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/360scan-foodbedrijf-247k-besparing/#article',
  headline: '360Scan Case Study: €247.000 Jaarlijkse Besparing bij Foodproducent',
  description: 'Uitgebreide 360Scan analyse bij foodbedrijf met €247.000 besparingspotentieel.',
  datePublished: '2026-02-03T12:00:00Z',
  dateModified: '2026-02-03T12:00:00Z',
  author: {
    '@type': 'Person',
    name: 'Rob Derks',
    url: 'https://proces360.com/over-ons',
  },
  publisher: { '@id': 'https://proces360.com/#organization' },
  mainEntityOfPage: 'https://proces360.com/blog/360scan-foodbedrijf-247k-besparing',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Foodbedrijf Case Study', item: 'https://proces360.com/blog/360scan-foodbedrijf-247k-besparing' },
  ],
};

export default function FoodCaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
