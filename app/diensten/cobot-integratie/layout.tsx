import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cobot Integratie | Merkonafhankelijke Robot Implementatie',
  description: 'Complete cobot integratie van selectie tot productie. Merkonafhankelijk advies uit 50+ technologieën. Gemiddelde terugverdientijd 12-18 maanden.',
  keywords: ['cobot integratie', 'cobot implementatie', 'collaborative robot', 'Techman cobot', 'Doosan cobot', 'FANUC cobot', 'ABB cobot', 'Universal Robots', 'robot automatisering', 'cobot programmeren'],
  openGraph: {
    title: 'Cobot Integratie | Merkonafhankelijke Robot Implementatie - Proces360',
    description: 'Complete cobot integratie met gemiddelde ROI van 12-18 maanden.',
    url: 'https://proces360.com/diensten/cobot-integratie',
  },
  alternates: { canonical: '/diensten/cobot-integratie' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://proces360.com/diensten/cobot-integratie/#service',
  name: 'Cobot/Robot Integratie',
  description: 'Complete cobot implementatie van selectie tot programmering. Merkonafhankelijk advies uit 50+ technologieën.',
  provider: { '@id': 'https://proces360.com/#organization' },
  areaServed: ['NL', 'BE', 'DE'],
  serviceType: 'Collaborative Robot Integration',
  offers: { '@type': 'Offer', priceRange: '€35.000 - €300.000', priceCurrency: 'EUR' },
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
        text: 'Een cobot kost €25.000 - €75.000 voor de robot zelf. Met gripper, integratie en programmering komt een complete oplossing op €35.000 - €150.000. De gemiddelde terugverdientijd is 12-18 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke cobot is het beste voor mijn bedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dit hangt af van je toepassing, payload en bereik requirements. Populaire merken zijn Techman, Doosan, FANUC, ABB en Universal Robots. Wij adviseren merkonafhankelijk uit 50+ technologieën.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een cobot implementatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard cobot implementatie duurt 2-4 maanden van selectie tot productie. Complexere integraties met vision systemen of meerdere cellen kunnen 4-6 maanden duren.',
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
    { '@type': 'ListItem', position: 3, name: 'Cobot Integratie', item: 'https://proces360.com/diensten/cobot-integratie' },
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
