import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productie Dashboards | Real-time OEE Monitoring',
  description: 'Productie dashboards voor real-time OEE monitoring, KPI-visualisatie en business intelligence. Automatische alerts, trend analyse en rapportage tools.',
  keywords: ['productie dashboard', 'OEE monitoring', 'KPI dashboard', 'productie monitoring', 'real-time OEE', 'manufacturing dashboard', 'productie rapportage'],
  openGraph: {
    title: 'Productie Dashboards | Real-time Monitoring - Proces360',
    description: 'Real-time productie monitoring en KPI-visualisatie.',
    url: 'https://proces360.com/diensten/productie-dashboards',
  },
  alternates: { canonical: '/diensten/productie-dashboards' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/productie-dashboards/#service',
  name: 'Productie Dashboards',
  description: 'Real-time productie monitoring, KPI-visualisatie en business intelligence.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'Production Monitoring Software',
  offers: { '@type': 'Offer', priceRange: '€8.000 - €75.000', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een productie dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een productie dashboard toont real-time OEE, KPIs en productiedata op grote schermen bij de productielijn. Het geeft direct inzicht in beschikbaarheid, prestatie en kwaliteit, met automatische alerts bij afwijkingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel is een dashboard geïmplementeerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een basis productie dashboard is binnen 2-4 weken operationeel. Complexere implementaties met volledige machine-integratie en ERP-koppeling duren 4-8 weken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een productie dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Productie dashboards kosten €8.000 - €75.000, afhankelijk van het aantal machines, integraties en functionaliteiten. De investering wordt typisch binnen 6-12 maanden terugverdiend door 15%+ efficiëntieverbetering.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://proces360.com/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Productie Dashboards', item: 'https://proces360.com/diensten/productie-dashboards' },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
