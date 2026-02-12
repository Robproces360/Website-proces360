'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyCTABarProps {
  onCTAClick: () => void;
  label?: string;
  showAfterPx?: number;
}

export default function StickyCTABar({
  onCTAClick,
  label = 'Download gratis checklist',
  showAfterPx = 600,
}: StickyCTABarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterPx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterPx]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-white/10 py-3 px-4 transform transition-transform duration-300 md:hidden">
      <button
        onClick={onCTAClick}
        className="w-full px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
      >
        {label}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
