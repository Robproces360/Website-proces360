"use client";
import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealMaskProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  delay?: number;
  className?: string;
  maskColor?: string;
}

export default function RevealMask({
  children,
  direction = 'left',
  duration = 1,
  delay = 0,
  className = '',
  maskColor = '#f97316'
}: RevealMaskProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    const content = contentRef.current;

    if (!container || !mask || !content) return;

    // Set initial states based on direction
    const isHorizontal = direction === 'left' || direction === 'right';
    const isReverse = direction === 'right' || direction === 'down';

    gsap.set(mask, {
      [isHorizontal ? 'scaleX' : 'scaleY']: 1,
      transformOrigin: isReverse
        ? (isHorizontal ? 'right center' : 'center bottom')
        : (isHorizontal ? 'left center' : 'center top')
    });

    gsap.set(content, {
      opacity: 0,
      [isHorizontal ? 'x' : 'y']: isReverse ? 30 : -30
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    tl.to(mask, {
      [isHorizontal ? 'scaleX' : 'scaleY']: 0,
      duration: duration * 0.6,
      delay,
      ease: 'power4.inOut'
    })
    .to(content, {
      opacity: 1,
      [isHorizontal ? 'x' : 'y']: 0,
      duration: duration * 0.4,
      ease: 'power3.out'
    }, `-=${duration * 0.3}`);

    return () => {
      tl.kill();
    };
  }, [direction, duration, delay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef}>
        {children}
      </div>
      <div
        ref={maskRef}
        className="absolute inset-0 z-10"
        style={{ backgroundColor: maskColor }}
      />
    </div>
  );
}
