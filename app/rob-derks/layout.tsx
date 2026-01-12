import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rob Derks | Expert Procesoptimalisatie & OEE-verbetering',
  description: 'Rob Derks: 22+ jaar hands-on ervaring in productie. Van operator tot operations manager. Expert in OEE-verbetering (15-40%), cobot integratie, industriële automatisering. Oprichter Proces360.',
  keywords: [
    'Rob Derks',
    'procesoptimalisatie expert',
    'OEE specialist',
    'cobot consultant',
    'industriële automatisering expert',
    'productie consultant Nederland',
    'operations manager',
    'lean manufacturing specialist',
    'Proces360 oprichter',
  ],
  openGraph: {
    title: 'Rob Derks | Expert Procesoptimalisatie & OEE-verbetering',
    description: '22+ jaar hands-on productie-ervaring. Van operator tot operations manager. Expert in OEE-verbetering, cobot integratie en industriële automatisering.',
    url: 'https://proces360.com/rob-derks',
    type: 'profile',
    images: [
      {
        url: '/images/rob-derks-og.png',
        width: 1200,
        height: 630,
        alt: 'Rob Derks - Procesoptimalisatie Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rob Derks | Expert Procesoptimalisatie',
    description: '22+ jaar productie-ervaring. OEE-verbetering, cobot integratie, industriële automatisering.',
    images: ['/images/rob-derks-og.png'],
  },
  alternates: {
    canonical: '/rob-derks',
  },
};

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Rob Derks', item: 'https://proces360.com/rob-derks' },
  ],
};

// Person Schema specifiek voor Rob Derks pagina
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://proces360.com/rob-derks#person',
    name: 'Rob Derks',
    givenName: 'Rob',
    familyName: 'Derks',
    jobTitle: 'Oprichter & Lead Consultant Procesoptimalisatie',
    description: 'Rob Derks is een toonaangevende expert in procesoptimalisatie met 22+ jaar hands-on ervaring in de Nederlandse maakindustrie. Van operator tot operations manager, hij kent de werkvloer als geen ander. Specialist in OEE-verbetering (15-40% resultaat), cobot/robot integratie en industriële automatisering voor MKB-maakbedrijven.',
    url: 'https://proces360.com/rob-derks',
    image: 'https://proces360.com/images/rob-derks.jpg',
    email: 'info@proces360.com',
    telephone: '+31-85-401-0752',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oss',
      addressRegion: 'Noord-Brabant',
      addressCountry: 'NL',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Proces360 B.V.',
      url: 'https://proces360.com',
    },
    knowsAbout: [
      'Procesoptimalisatie',
      'OEE (Overall Equipment Effectiveness)',
      'OEE-verbetering',
      'Cobot Integratie',
      'Collaborative Robots',
      'Techman Robot',
      'Doosan Robotics',
      'Universal Robots',
      'Industriële Automatisering',
      'Robot Automatisering',
      'Productie Dashboards',
      'Lean Manufacturing',
      'Continuous Improvement',
      'Kaizen',
      'Value Stream Mapping',
      'Bottleneck Analyse',
      'Productie Management',
      'Operations Management',
      'MKB Maakbedrijven',
      'Manufacturing Optimization',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Procesoptimalisatie Consultant',
      occupationLocation: {
        '@type': 'Country',
        name: 'Netherlands',
      },
      description: 'Expert consultant gespecialiseerd in procesoptimalisatie, OEE-verbetering en industriële automatisering voor MKB-maakbedrijven.',
      skills: [
        'OEE Analyse en Verbetering',
        'Cobot/Robot Selectie en Implementatie',
        'Lean Manufacturing',
        'Productie Planning',
        'Kwaliteitsmanagement',
        'Change Management',
        'Data-gedreven Besluitvorming',
      ],
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Diverse Nederlandse MKB-maakbedrijven',
        description: '22+ jaar werkervaring in productieomgevingen',
      },
    ],
    award: [
      '150+ succesvolle optimalisatieprojecten',
      '€10M+ gerealiseerde besparingen voor klanten',
      '95% klanttevredenheid',
    ],
    sameAs: [
      'https://www.linkedin.com/in/rob-derks-15900873/',
    ],
  },
};

export default function RobDerksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
