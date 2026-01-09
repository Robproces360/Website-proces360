import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons | Proces360 - 22+ Jaar Productie-ervaring',
  description: 'Leer Rob Derks kennen: 22+ jaar hands-on ervaring in productie, van operator tot operations manager. Oprichter van Proces360, specialist in OEE-verbetering en cobot integratie.',
  keywords: [
    'over proces360',
    'Rob Derks',
    'procesoptimalisatie expert',
    'OEE consultant',
    'productie ervaring',
    'operations manager',
    'MKB consultant',
  ],
  openGraph: {
    title: 'Over Proces360 - 22+ Jaar Productie-ervaring',
    description: 'Van operator tot operations manager. Ontdek het verhaal achter Proces360.',
    url: 'https://proces360.com/over-ons',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'website',
  },
  alternates: {
    canonical: '/over-ons',
  },
};

// AboutPage Schema
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://proces360.com/over-ons/#webpage',
  url: 'https://proces360.com/over-ons',
  name: 'Over Proces360 - 22+ Jaar Productie-ervaring',
  description: 'Leer Rob Derks en Proces360 kennen: specialist in procesoptimalisatie en automatisering.',
  isPartOf: {
    '@id': 'https://proces360.com/#website',
  },
  about: {
    '@id': 'https://proces360.com/#organization',
  },
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://proces360.com/#founder',
    name: 'Rob Derks',
    jobTitle: 'Oprichter & Lead Consultant',
    description: '22+ jaar hands-on ervaring in productie: van operator tot operations manager.',
    worksFor: {
      '@id': 'https://proces360.com/#organization',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Over Ons', item: 'https://proces360.com/over-ons' },
  ],
};

export default function OverOnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
