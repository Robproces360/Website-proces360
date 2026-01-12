import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Proces360',
    default: 'Kennisbank Procesoptimalisatie & Automatisering',
  },
  description: 'Praktische gidsen over OEE-verbetering, cobot integratie en industriele automatisering. 22+ jaar hands-on ervaring van Rob Derks.',
  keywords: [
    'procesoptimalisatie blog',
    'OEE artikelen',
    'cobot gids',
    'productie verbetering',
    'lean manufacturing tips',
    'automatisering kennisbank',
    'MKB productie blog',
  ],
  openGraph: {
    title: 'Proces360 Blog - Kennisbank Procesoptimalisatie',
    description: 'Praktische inzichten over OEE, procesoptimalisatie en automatisering voor MKB-maakbedrijven.',
    url: 'https://proces360.com/blog',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proces360 Blog',
    description: 'Kennisbank voor procesoptimalisatie en automatisering',
  },
  alternates: {
    canonical: '/blog',
  },
};

// CollectionPage Schema voor blog overzicht
const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://proces360.com/blog/#webpage',
  url: 'https://proces360.com/blog',
  name: 'Proces360 Blog - Kennisbank Procesoptimalisatie & Automatisering',
  description: 'Praktische inzichten over OEE, procesoptimalisatie, cobots en industriële automatisering voor MKB-maakbedrijven.',
  isPartOf: {
    '@id': 'https://proces360.com/#website',
  },
  about: {
    '@id': 'https://proces360.com/#organization',
  },
  author: {
    '@id': 'https://proces360.com/#founder',
  },
  inLanguage: 'nl-NL',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema),
        }}
      />
      {children}
    </>
  );
}
