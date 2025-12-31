"use client";
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  glitchOnHover?: boolean;
  continuous?: boolean;
}

export default function GlitchText({
  children,
  className = '',
  glitchOnHover = true,
  continuous = false
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(continuous);

  useEffect(() => {
    if (!continuous) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [continuous]);

  return (
    <>
      <span
        className={`glitch-text relative inline-block ${className}`}
        onMouseEnter={() => glitchOnHover && setIsGlitching(true)}
        onMouseLeave={() => glitchOnHover && setIsGlitching(false)}
        data-text={children}
      >
        {children}
        {isGlitching && (
          <>
            <span className="glitch-layer glitch-1" aria-hidden="true">{children}</span>
            <span className="glitch-layer glitch-2" aria-hidden="true">{children}</span>
          </>
        )}
      </span>

      <style jsx>{`
        .glitch-text {
          position: relative;
        }

        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .glitch-1 {
          color: #f97316;
          animation: glitch-1 0.3s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }

        .glitch-2 {
          color: #3b82f6;
          animation: glitch-2 0.3s infinite linear alternate-reverse;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }

        @keyframes glitch-1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(3px, 3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(-3px, 3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </>
  );
}
