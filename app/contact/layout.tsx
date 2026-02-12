import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Proces360 - Neem Contact Op',
  description: 'Neem contact op met Rob Derks van Proces360 voor vragen over procesoptimalisatie, OEE-verbetering, cobot integratie of een 360Scan van jouw productie.',
  keywords: [
    'contact proces360',
    'procesoptimalisatie contact',
    'OEE consultant contact',
    'cobot advies',
    '360Scan',
    'productie consultant',
  ],
  openGraph: {
    title: 'Contact | Proces360',
    description: 'Neem contact op voor een 360Scan van jouw productie.',
    url: 'https://proces360.com/contact',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

// ContactPage Schema
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://proces360.com/contact/#webpage',
  url: 'https://proces360.com/contact',
  name: 'Contact Proces360',
  description: 'Neem contact op met Proces360 voor procesoptimalisatie en automatisering.',
  isPartOf: {
    '@id': 'https://proces360.com/#website',
  },
  about: {
    '@id': 'https://proces360.com/#organization',
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://proces360.com/#organization',
    name: 'Proces360 B.V.',
    telephone: '+31-85-401-0752',
    email: 'info@proces360.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oss',
      addressRegion: 'Noord-Brabant',
      addressCountry: 'NL',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://proces360.com/contact' },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
