import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bedankt | OEE Quickscan ontvangen | Proces360',
  robots: { index: false, follow: false },
};

export default function BedanktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
