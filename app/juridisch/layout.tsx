import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juridische Informatie | Privacy, Cookies & Voorwaarden',
  description: 'Privacybeleid, cookiebeleid en algemene voorwaarden van Proces360. AVG-compliant en transparant over dataverwerking.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: '/juridisch' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proces360.com' },
    { '@type': 'ListItem', position: 2, name: 'Juridisch', item: 'https://proces360.com/juridisch' },
  ],
};

export default function JuridischLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
