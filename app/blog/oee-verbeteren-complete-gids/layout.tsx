import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEE Verbeteren: De Complete Gids voor 2026',
  description: 'Leer alles over OEE (Overall Equipment Effectiveness): berekening, benchmarks, de 6 grote verliezen en 10 praktische tips om uw OEE te verhogen van 50% naar 85%+. Door Rob Derks, 22+ jaar productie-ervaring.',
  keywords: [
    'OEE verbeteren',
    'OEE verhogen',
    'OEE berekenen',
    'Overall Equipment Effectiveness',
    'OEE formule',
    'OEE benchmark',
    'OEE world class',
    '6 grote verliezen',
    'beschikbaarheid prestatie kwaliteit',
    'productie efficiëntie',
    'OEE calculator',
    'OEE tips',
    'OEE consultant',
  ],
  authors: [{ name: 'Rob Derks', url: 'https://proces360.com/rob-derks' }],
  openGraph: {
    title: 'OEE Verbeteren: De Complete Gids voor 2026 | Proces360',
    description: 'Alles over OEE: van berekening tot praktische verbetermethodes. Inclusief voorbeelden en stappenplan om uw OEE te verhogen.',
    url: 'https://proces360.com/blog/oee-verbeteren-complete-gids',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'article',
    publishedTime: '2026-01-09T08:00:00.000Z',
    modifiedTime: '2026-01-09T08:00:00.000Z',
    authors: ['Rob Derks'],
    section: 'OEE & Procesoptimalisatie',
    tags: ['OEE', 'procesoptimalisatie', 'productie', 'efficiëntie', 'MKB'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OEE Verbeteren: De Complete Gids voor 2026',
    description: 'Leer alles over OEE en verhoog uw score van 50% naar 85%+',
    creator: '@robderks_nl',
  },
  alternates: {
    canonical: '/blog/oee-verbeteren-complete-gids',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

// Article Schema - Wereldklasse SEO
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://proces360.com/blog/oee-verbeteren-complete-gids/#article',
  headline: 'OEE Verbeteren: De Complete Gids voor 2026',
  description: 'Leer alles over OEE (Overall Equipment Effectiveness): berekening, benchmarks, de 6 grote verliezen en 10 praktische tips om uw OEE te verhogen.',
  image: 'https://proces360.com/images/blog/oee-verbeteren-og.png',
  datePublished: '2026-01-09T08:00:00+01:00',
  dateModified: '2026-01-09T08:00:00+01:00',
  author: {
    '@type': 'Person',
    '@id': 'https://proces360.com/#founder',
    name: 'Rob Derks',
    url: 'https://proces360.com/rob-derks',
    jobTitle: 'Oprichter & Lead Consultant',
    description: '22+ jaar hands-on ervaring in productie-optimalisatie',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://proces360.com/blog/oee-verbeteren-complete-gids',
  },
  articleSection: 'OEE & Procesoptimalisatie',
  wordCount: 2500,
  keywords: 'OEE, Overall Equipment Effectiveness, OEE verbeteren, OEE berekenen, productie efficiëntie, MKB maakbedrijf',
  inLanguage: 'nl-NL',
  isAccessibleForFree: true,
  license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
};

// FAQ Schema voor extra rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een goede OEE score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een OEE score onder 50% is slecht en vereist urgente actie. 50-70% is gemiddeld voor MKB-bedrijven. 85%+ wordt beschouwd als world-class. Een score van 100% is theoretisch onhaalbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe berekent u OEE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OEE = Beschikbaarheid × Prestatie × Kwaliteit. Beschikbaarheid meet de daadwerkelijke productietijd vs geplande tijd. Prestatie meet de werkelijke snelheid vs maximale snelheid. Kwaliteit meet het percentage goede producten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de 6 grote verliezen bij OEE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De 6 grote verliezen zijn: 1) Storingen, 2) Omsteltijd (beschikbaarheid), 3) Micro-stops, 4) Snelheidsverlies (prestatie), 5) Opstartafkeur, 6) Productieafkeur (kwaliteit).',
      },
    },
  ],
};

// HowTo Schema voor praktische tips
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe verbetert u OEE in 10 stappen',
  description: 'Praktische stappen om uw OEE te verhogen van gemiddeld naar world-class niveau.',
  totalTime: 'P3M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '5000-50000',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Start met meten',
      text: 'Begin met het registreren van stilstand, output en afkeur. Liefst automatisch.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Analyseer de data',
      text: 'Identificeer de top 3 verliesoorzaken met Pareto-analyse.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Focus op beschikbaarheid',
      text: 'Stilstand is vaak de grootste verliespost. Elke minuut stilstand = 0% productie.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Implementeer preventief onderhoud',
      text: 'Gepland onderhoud voorkomt ongeplande storingen.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Verkort omsteltijden (SMED)',
      text: 'Single Minute Exchange of Die: omstellen in minder dan 10 minuten.',
    },
  ],
};

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://proces360.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://proces360.com/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'OEE Verbeteren: Complete Gids',
      item: 'https://proces360.com/blog/oee-verbeteren-complete-gids',
    },
  ],
};

export default function OEEArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
