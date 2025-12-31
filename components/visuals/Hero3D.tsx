"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Animated 3D-like geometric shapes with constant animation (no mouse interaction)
export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.geo-shape');

    // Initial animation
    gsap.fromTo(shapes,
      {
        opacity: 0,
        scale: 0,
        rotation: -180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      }
    );

    // Floating animation (constant, no mouse interaction)
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: `${Math.sin(i) * 20}`,
        duration: 2 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Add gentle rotation for more dynamic feel
      gsap.to(shape, {
        rotateY: 15,
        rotateX: -10,
        duration: 4 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central glowing orb */}
      <div
        className="geo-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ perspective: '1000px' }}
      >
        <div className="w-96 h-96 relative">
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-primary-500/30"
            style={{
              boxShadow: '0 0 60px rgba(249, 115, 22, 0.3), inset 0 0 60px rgba(249, 115, 22, 0.1)',
              animation: 'spin 20s linear infinite'
            }}
          />
          {/* Middle ring */}
          <div
            className="absolute inset-8 rounded-full border border-primary-500/20"
            style={{
              animation: 'spin 15s linear infinite reverse'
            }}
          />
          {/* Inner glow */}
          <div
            className="absolute inset-16 rounded-full bg-gradient-radial from-primary-500/20 to-transparent"
            style={{
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
          {/* Core */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-500"
            style={{
              boxShadow: '0 0 40px rgba(249, 115, 22, 0.8), 0 0 80px rgba(249, 115, 22, 0.4)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Floating geometric shapes */}
      {/* Hexagon top-left */}
      <div className="geo-shape absolute top-[15%] left-[10%]" style={{ perspective: '500px' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-40">
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <polygon
            points="40,5 70,22 70,58 40,75 10,58 10,22"
            fill="none"
            stroke="url(#hexGrad)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Triangle top-right */}
      <div className="geo-shape absolute top-[20%] right-[15%]" style={{ perspective: '500px' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
          <defs>
            <linearGradient id="triGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,85 10,85"
            fill="none"
            stroke="url(#triGrad)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Circle bottom-left */}
      <div className="geo-shape absolute bottom-[25%] left-[8%]" style={{ perspective: '500px' }}>
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-35">
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="#f97316"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Square bottom-right */}
      <div className="geo-shape absolute bottom-[30%] right-[12%]" style={{ perspective: '500px' }}>
        <svg width="70" height="70" viewBox="0 0 70 70" className="opacity-25">
          <rect
            x="10"
            y="10"
            width="50"
            height="50"
            fill="none"
            stroke="#f97316"
            strokeWidth="1.5"
            transform="rotate(45, 35, 35)"
          />
        </svg>
      </div>

      {/* Small dots scattered */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="geo-shape absolute w-2 h-2 rounded-full bg-primary-500/40"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)'
          }}
        />
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="0" y1="30%" x2="100%" y2="35%"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="0" y1="70%" x2="100%" y2="65%"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
