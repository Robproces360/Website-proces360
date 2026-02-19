import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rob Derks | Expert Procesoptimalisatie & OEE-verbetering',
  description: 'Rob Derks: 22+ jaar hands-on ervaring in productie. Van operator tot operations manager. Expert in OEE-verbetering (15-40%), cobot integratie, industriële automatisering. Oprichter Proces360.',
  alternates: {
    canonical: '/over-ons',
  },
};

export default function RobDerksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
