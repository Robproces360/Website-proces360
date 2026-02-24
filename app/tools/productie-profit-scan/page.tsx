import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ProductieProfitScan = dynamic(
  () => import('@/components/tools/ProductieProfitScan'),
  {
    loading: () => (
      <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: 'Productie Profit Scan | Hoeveel winst laat u liggen? | Proces360',
  description:
    'Bereken in 2 minuten hoeveel productiewinst u laat liggen door OEE-verlies. Ontdek uw verbeterpotentieel in euro\'s. Gratis scan voor maakbedrijven.',
  keywords: [
    'OEE berekenen',
    'productieverlies berekenen',
    'OEE verbeteren',
    'productie optimalisatie',
    'maakbedrijf winst',
    'stilstand kosten',
    'productie efficiëntie',
    'OEE calculator',
  ],
  openGraph: {
    title: 'Productie Profit Scan | Hoeveel winst laat u liggen?',
    description:
      'Bereken in 2 minuten hoeveel productiewinst u laat liggen door OEE-verlies. Gratis scan voor maakbedrijven.',
    type: 'website',
  },
};

export default function ProductieProfitScanPage() {
  return <ProductieProfitScan />;
}
