import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobots in Productie: De Complete Gids voor MKB-Maakbedrijven',
  description: 'Alles over collaborative robots (cobots) voor MKB-maakbedrijven: selectie, implementatie, ROI-berekening, veiligheid en praktijkvoorbeelden. Door Rob Derks, 22+ jaar ervaring.',
  keywords: [
    'cobot',
    'cobots',
    'collaborative robot',
    'cobot integratie',
    'cobot implementatie',
    'cobot MKB',
    'Techman cobot',
    'Doosan cobot',
    'FANUC cobot',
    'Universal Robots',
    'cobot veiligheid',
    'cobot ROI',
    'cobot terugverdientijd',
    'cobot programmeren',
    'cobot toepassingen',
    'robot automatisering',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'Cobots in Productie: De Complete Gids voor MKB | Proces360',
    description: 'Van selectie tot implementatie: alles wat u moet weten over cobots in de maakindustrie.',
    url: 'https://proces360.com/blog/cobots-in-productie-complete-gids',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2026-01-09T08:00:00.000Z',
    modifiedTime: '2026-01-09T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'Robotisering',
    tags: ['cobot', 'robotisering', 'automatisering', 'MKB', 'productie'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobots in Productie: Complete Gids voor MKB',
    description: 'Alles over cobots: selectie, ROI, veiligheid en implementatie',
    creator: '@robderks_nl',
  },
  alternates: {
    canonical: '/blog/cobots-in-productie-complete-gids',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/cobots-in-productie-complete-gids/#article',
  headline: 'Cobots in Productie: De Complete Gids voor MKB-Maakbedrijven',
  description: 'Van selectie tot implementatie: alles wat u moet weten over collaborative robots (cobots) in de maakindustrie.',
  image: 'https://proces360.com/images/blog/cobots-productie-og.png',
  datePublished: '2026-01-09T08:00:00+01:00',
  dateModified: '2026-01-09T08:00:00+01:00',
  author: {
    '@type': 'Person',
    '@id': 'https://proces360.com/#founder',
    name: 'Rob Derks',
    url: 'https://proces360.com/rob-derks',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://proces360.com/#organization',
    name: 'Proces360 B.V.',
    logo: {
      '@type': 'ImageObject',
      url: 'https://proces360.com/images/logo-proces360.png',
    },
  },
  mainEntityOfPage: 'https://proces360.com/blog/cobots-in-productie-complete-gids',
  articleSection: 'Robotisering',
  wordCount: 3000,
  keywords: 'cobot, collaborative robot, robot automatisering, MKB, Techman, Doosan, FANUC, ABB, Universal Robots, cobot integratie',
  inLanguage: 'nl-NL',
  isAccessibleForFree: true,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een cobot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een complete cobot-installatie kost tussen €35.000 en €150.000, afhankelijk van de toepassing, gripper en integratie. De cobot zelf kost €25.000-€60.000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een cobot en een industriële robot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cobots zijn ontworpen om veilig samen te werken met mensen zonder afscherming. Ze zijn flexibeler, makkelijker te programmeren en goedkoper. Industriële robots zijn krachtiger en sneller, maar vereisen veiligheidsafscherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de terugverdientijd van een cobot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De gemiddelde terugverdientijd van een cobot ligt tussen 12-18 maanden, afhankelijk van de toepassing, loonkosten en inzeturen.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://proces360.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cobots in Productie', item: 'https://proces360.com/blog/cobots-in-productie-complete-gids' },
  ],
};

export default function CobotArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
