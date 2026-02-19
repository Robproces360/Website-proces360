import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productievloer Digitalisering: Van Papier naar Papierloos in 90 Dagen [2025]',
  description: 'Complete gids voor productievloer digitalisering: digitale werkbonnen, elektronische checklists, papierloos werken. Stappenplan met ROI voor MKB-maakbedrijven.',
  keywords: ['productievloer digitalisering', 'papierloos produceren', 'digitale werkbonnen', 'shop floor digitization', 'MES implementatie', 'paperless manufacturing'],
  openGraph: {
    title: 'Productievloer Digitalisering | Van Papier naar Digitaal',
    description: 'Hoe u uw productievloer digitaliseert in 90 dagen.',
    url: 'https://proces360.com/blog/productievloer-digitalisering',
    type: 'article',
    publishedTime: '2025-07-15T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/productievloer-digitalisering' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Productievloer Digitalisering: Van Papier naar Papierloos in 90 Dagen',
  description: 'Complete gids voor productievloer digitalisering met stappenplan en ROI.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-07-15',
  dateModified: '2025-07-15',
  mainEntityOfPage: 'https://proces360.com/blog/productievloer-digitalisering',
  articleSection: 'Procesoptimalisatie',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Productievloer Digitalisering', item: 'https://proces360.com/blog/productievloer-digitalisering' },
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
