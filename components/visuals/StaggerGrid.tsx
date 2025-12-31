"use client";
import { useEffect, useRef, ReactNode, Children } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  from?: 'start' | 'center' | 'end' | 'random' | 'edges';
  animation?: 'fade' | 'scale' | 'slide' | 'flip';
}

export default function StaggerGrid({
  children,
  className = '',
  stagger = 0.1,
  duration = 0.8,
  from = 'start',
  animation = 'scale'
}: StaggerGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = grid.children;
    if (items.length === 0) return;

    // Define animation properties based on type
    const getFromVars = () => {
      switch (animation) {
        case 'fade':
          return { opacity: 0, y: 30 };
        case 'scale':
          return { opacity: 0, scale: 0.8, y: 20 };
        case 'slide':
          return { opacity: 0, x: -50 };
        case 'flip':
          return { opacity: 0, rotateX: -90, transformPerspective: 1000 };
        default:
          return { opacity: 0, scale: 0.8 };
      }
    };

    const getToVars = () => {
      switch (animation) {
        case 'fade':
          return { opacity: 1, y: 0 };
        case 'scale':
          return { opacity: 1, scale: 1, y: 0 };
        case 'slide':
          return { opacity: 1, x: 0 };
        case 'flip':
          return { opacity: 1, rotateX: 0 };
        default:
          return { opacity: 1, scale: 1 };
      }
    };

    gsap.set(items, getFromVars());

    gsap.to(items, {
      ...getToVars(),
      duration,
      stagger: {
        amount: stagger * items.length,
        from,
        grid: 'auto',
        ease: 'power2.out'
      },
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    // Hover effects for each item
    Array.from(items).forEach((item) => {
      const el = item as HTMLElement;

      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 1.02,
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, [stagger, duration, from, animation, children]);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}
