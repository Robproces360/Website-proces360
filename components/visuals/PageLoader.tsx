"use client";
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Actually wait for page load
    const handleLoad = () => {
      setProgress(100);
      clearInterval(interval);

      // Animate out
      setTimeout(() => {
        gsap.to('.page-loader', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: () => setIsLoading(false)
        });

        gsap.to('.loader-content', {
          y: -50,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        });
      }, 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <div className="page-loader fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center">
      <div className="loader-content text-center">
        {/* Logo animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-white inline-block animate-pulse">PROCES</span>
            <span className="text-primary-500 inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>360</span>
          </h1>
        </div>

        {/* Animated loader */}
        <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto mb-4">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-orange-400 rounded-full transition-all duration-100"
            style={{ width: `${displayProgress}%` }}
          />
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-orange-400 rounded-full blur-sm transition-all duration-100"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="text-2xl font-bold text-white tabular-nums">
          {displayProgress}%
        </div>

        {/* Spinner circles */}
        <div className="mt-8 relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-2 border-primary-500/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 border-2 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }} />
          <div className="absolute inset-4 border-2 border-primary-500/50 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
        </div>
      </div>

      {/* Background geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-primary-500/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-500/5 rounded-full" />
      </div>
    </div>
  );
}
