import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatisering Potentieel Scan | Is Uw Proces Geschikt?',
  description: '6 vragen om te bepalen of robot-automatisering bij uw proces past. Ontdek uw geschiktheidsscore en indicatieve terugverdientijd.',
  keywords: [
    'automatisering geschiktheid',
    'robot automatisering scan',
    'cobot geschiktheid',
    'automatisering potentieel',
    'robot ROI inschatting',
    'automatisering haalbaarheid',
  ],
  openGraph: {
    title: 'Automatisering Potentieel Scan - Proces360',
    description: '6 vragen om te bepalen of robot-automatisering bij uw proces past.',
    url: 'https://proces360.com/tools/automatisering-scan',
    type: 'website',
  },
  alternates: { canonical: '/tools/automatisering-scan' },
};

const calculatorSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://proces360.com/tools/automatisering-scan/#software',
  name: 'Automatisering Potentieel Scan',
  description: 'Gratis online tool om te bepalen of uw proces geschikt is voor robot-automatisering.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  provider: { '@id': 'https://proces360.com/#organization' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://proces360.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Automatisering Scan', item: 'https://proces360.com/tools/automatisering-scan' },
  ],
};

export default function AutomatiseringScanLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
