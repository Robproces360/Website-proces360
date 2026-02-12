import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gratis OEE Quickscan | Ontdek waar uw productie beter kan | Proces360',
  description: 'Download de gratis OEE Quickscan Checklist. In 15 minuten weet u waar uw productielijn geld laat liggen. Door Rob Derks, 22 jaar productie-ervaring.',
  keywords: [
    'OEE quickscan',
    'OEE checklist',
    'OEE berekenen',
    'productie verbeteren',
    'gratis productie scan',
    'productie-efficiëntie',
    'MKB productie',
  ],
  openGraph: {
    title: 'Gratis OEE Quickscan | Ontdek waar uw productie beter kan',
    description: 'In 15 minuten weet u waar uw productielijn geld laat liggen. Gratis checklist door Rob Derks.',
    url: 'https://proces360.com/quickscan',
    type: 'website',
  },
  alternates: { canonical: '/quickscan' },
};

export default function QuickscanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
