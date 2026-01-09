import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Six Sigma voor MKB: Praktische Kwaliteitsverbetering zonder Bureaucratie [2025]',
  description: 'Six Sigma toegepast voor MKB-productiebedrijven: DMAIC methode, praktische tools, en verbeterprojecten. Verminder uitval en verhoog kwaliteit zonder zware certificeringen.',
  keywords: ['six sigma MKB', 'DMAIC', 'kwaliteitsverbetering', 'procesverbetering', 'lean six sigma', 'SPC', 'statistical process control', 'quality management'],
  openGraph: {
    title: 'Six Sigma voor MKB | Praktische Kwaliteitsverbetering',
    description: 'Hoe MKB-bedrijven Six Sigma inzetten zonder bureaucratie.',
    url: 'https://proces360.com/blog/six-sigma-mkb',
    type: 'article',
    publishedTime: '2025-08-12T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/six-sigma-mkb' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Six Sigma voor MKB: Praktische Kwaliteitsverbetering zonder Bureaucratie',
  description: 'Six Sigma toegepast voor MKB-productiebedrijven met praktische tools.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-08-12',
  dateModified: '2025-08-12',
  mainEntityOfPage: 'https://proces360.com/blog/six-sigma-mkb',
  articleSection: 'Procesoptimalisatie',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Six Sigma MKB', item: 'https://proces360.com/blog/six-sigma-mkb' },
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
