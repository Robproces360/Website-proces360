'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ClipboardList, ArrowRight } from 'lucide-react';

interface ExitIntentPopupProps {
  onScrollToForm: () => void;
}

export default function ExitIntentPopup({ onScrollToForm }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) {
      const dismissed = sessionStorage.getItem('exit_popup_dismissed');
      const submitted = sessionStorage.getItem('quickscan_submitted');
      if (!dismissed && !submitted) {
        setIsVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    // Only trigger after 10 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('exit_popup_dismissed', '1');
    document.removeEventListener('mouseleave', handleMouseLeave);
  };

  const handleCTA = () => {
    dismiss();
    onScrollToForm();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Popup */}
      <div className="relative bg-bg-secondary border border-white/10 rounded-2xl p-8 max-w-md w-full animate-scale-in shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ClipboardList className="w-7 h-7 text-primary-500" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Wacht even &mdash; vergeet uw gratis checklist niet
          </h3>

          <p className="text-gray-400 text-sm mb-6">
            In 15 minuten weet u precies waar uw productie geld laat liggen.
            Geen verkooppraatje, puur inzicht.
          </p>

          <button
            onClick={handleCTA}
            className="w-full px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
          >
            Download gratis checklist
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={dismiss}
            className="mt-3 text-sm text-gray-500 hover:text-gray-400 transition-colors"
          >
            Nee, ik heb geen interesse
          </button>
        </div>
      </div>
    </div>
  );
}
