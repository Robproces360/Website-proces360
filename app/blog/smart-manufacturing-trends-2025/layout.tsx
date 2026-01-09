import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Manufacturing Trends 2025: De Complete Gids voor MKB-Productiebedrijven',
  description: 'Ontdek de belangrijkste smart manufacturing trends van 2025: AI in productie, IoT-sensoren, digital twins, en edge computing. Praktische implementatiegids voor Nederlandse MKB-maakbedrijven.',
  keywords: ['smart manufacturing', 'industrie 4.0', 'smart factory', 'manufacturing trends 2025', 'IoT productie', 'AI manufacturing', 'digital twin', 'edge computing productie', 'MKB automatisering'],
  openGraph: {
    title: 'Smart Manufacturing Trends 2025 | De Complete Gids',
    description: 'De belangrijkste smart manufacturing trends voor MKB-productiebedrijven in 2025.',
    url: 'https://proces360.com/blog/smart-manufacturing-trends-2025',
    type: 'article',
    publishedTime: '2025-04-22T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/smart-manufacturing-trends-2025' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Smart Manufacturing Trends 2025: De Complete Gids voor MKB-Productiebedrijven',
  description: 'Ontdek de belangrijkste smart manufacturing trends van 2025 met praktische implementatietips voor Nederlandse MKB-maakbedrijven.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-04-22',
  dateModified: '2025-04-22',
  mainEntityOfPage: 'https://proces360.com/blog/smart-manufacturing-trends-2025',
  image: 'https://proces360.com/images/blog/smart-manufacturing-trends.jpg',
  articleSection: 'Industrie 4.0',
  keywords: ['smart manufacturing', 'industrie 4.0', 'IoT productie', 'AI manufacturing'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Smart Manufacturing Trends 2025', item: 'https://proces360.com/blog/smart-manufacturing-trends-2025' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is smart manufacturing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart manufacturing is een geïntegreerde, data-gedreven productieaanpak die technologieën als IoT, AI, cloud computing en automatisering combineert om productieprocessen te optimaliseren, real-time besluitvorming mogelijk te maken en de efficiëntie te verhogen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost smart manufacturing implementatie voor MKB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De investering voor MKB-bedrijven varieert van €15.000 voor basis IoT-monitoring tot €150.000+ voor complete smart factory transformaties. De meeste MKB-bedrijven starten met een pilot van €25.000-50.000 op één productielijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de belangrijkste smart manufacturing trends in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De top trends zijn: (1) AI-gedreven predictive maintenance, (2) Edge computing voor real-time besluitvorming, (3) Digital twins voor procesoptimalisatie, (4) Collaborative robots (cobots), (5) Low-code platforms voor snelle automatisering.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
