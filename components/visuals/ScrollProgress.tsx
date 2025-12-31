"use client";
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      setProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-orange-400 to-primary-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
        <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
          <div
            className="w-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-primary-500 font-bold tabular-nums">
          {Math.round(progress)}%
        </span>
      </div>
    </>
  );
}
