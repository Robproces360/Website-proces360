import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productie KPIs: De 15 Belangrijkste Metrics voor MKB-Maakbedrijven [2025]',
  description: 'Complete gids productie KPIs: OEE, TEEP, doorlooptijd, first-pass yield en meer. Met formules, benchmarks en dashboardvoorbeelden voor MKB-productiebedrijven.',
  keywords: ['productie KPI', 'manufacturing KPIs', 'OEE berekenen', 'productie metrics', 'TEEP', 'first pass yield', 'doorlooptijd', 'productie dashboard', 'KPI productie'],
  openGraph: {
    title: 'Productie KPIs: De 15 Belangrijkste Metrics | Proces360',
    description: 'Complete gids met formules, benchmarks en dashboards voor productie KPIs.',
    url: 'https://proces360.com/blog/productie-kpis-complete-gids',
    type: 'article',
    publishedTime: '2025-04-28T08:00:00Z',
    authors: ['Rob Derks'],
  },
  alternates: { canonical: '/blog/productie-kpis-complete-gids' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Productie KPIs: De 15 Belangrijkste Metrics voor MKB-Maakbedrijven',
  description: 'Complete gids productie KPIs met formules, benchmarks en dashboardvoorbeelden.',
  author: { '@type': 'Person', name: 'Rob Derks', url: 'https://proces360.com/rob-derks' },
  publisher: { '@id': 'https://proces360.com/#organization' },
  datePublished: '2025-04-28',
  dateModified: '2025-04-28',
  mainEntityOfPage: 'https://proces360.com/blog/productie-kpis-complete-gids',
  image: 'https://proces360.com/images/blog/productie-kpis.jpg',
  articleSection: 'Procesoptimalisatie',
  keywords: ['productie KPI', 'manufacturing KPIs', 'OEE', 'productie metrics'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Productie KPIs Complete Gids', item: 'https://proces360.com/blog/productie-kpis-complete-gids' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat zijn de belangrijkste productie KPIs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De top 5 productie KPIs zijn: OEE (Overall Equipment Effectiveness), First Pass Yield, On-Time Delivery, doorlooptijd en capaciteitsbenutting. Deze metrics geven samen een compleet beeld van productie-efficiëntie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe berekent u OEE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OEE = Beschikbaarheid × Prestatie × Kwaliteit. Beschikbaarheid = (Geplande tijd - Stilstand) / Geplande tijd. Prestatie = (Werkelijke output / Theoretische output). Kwaliteit = (Goede producten / Totale producten).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een goede OEE score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een OEE van 85% wordt beschouwd als world-class. Het gemiddelde MKB-maakbedrijf scoort 60-65%. Een score van 70-75% is goed voor discrete manufacturing.',
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
