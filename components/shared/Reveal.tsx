"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 60,
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const directionMap = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: {},
    };

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        ...directionMap[direction],
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [direction, delay, duration, distance, once]);

  return <div ref={ref} className={className}>{children}</div>;
}
