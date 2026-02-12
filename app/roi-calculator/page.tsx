import dynamic from 'next/dynamic';

const CobotROICalculator = dynamic(
  () => import('@/components/tools/CobotROICalculator'),
  {
    loading: () => (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function ROICalculatorPage() {
  return <CobotROICalculator />;
}
