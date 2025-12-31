"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export default function FloatingElements({
  count = 15,
  className = ''
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    Array.from(elements).forEach((el, i) => {
      const htmlEl = el as HTMLElement;

      // Random starting position
      gsap.set(htmlEl, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      // Floating animation
      gsap.to(htmlEl, {
        y: `+=${Math.random() * 100 - 50}`,
        x: `+=${Math.random() * 50 - 25}`,
        rotation: Math.random() * 360,
        duration: 5 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      });

      // Opacity pulse
      gsap.to(htmlEl, {
        opacity: 0.1 + Math.random() * 0.3,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, [count]);

  const shapes = [
    // Circle
    <svg key="circle" viewBox="0 0 50 50" className="w-8 h-8">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // Triangle
    <svg key="triangle" viewBox="0 0 50 50" className="w-8 h-8">
      <polygon points="25,5 45,45 5,45" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // Square
    <svg key="square" viewBox="0 0 50 50" className="w-8 h-8">
      <rect x="10" y="10" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // Cross
    <svg key="cross" viewBox="0 0 50 50" className="w-6 h-6">
      <line x1="25" y1="5" x2="25" y2="45" stroke="currentColor" strokeWidth="1" />
      <line x1="5" y1="25" x2="45" y2="25" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // Diamond
    <svg key="diamond" viewBox="0 0 50 50" className="w-6 h-6">
      <polygon points="25,5 45,25 25,45 5,25" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>,
    // Hexagon
    <svg key="hexagon" viewBox="0 0 50 50" className="w-8 h-8">
      <polygon points="25,3 44,15 44,35 25,47 6,35 6,15" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>,
  ];

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {shapes[i % shapes.length]}
        </div>
      ))}
    </div>
  );
}
