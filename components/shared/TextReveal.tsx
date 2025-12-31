"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  splitBy?: 'chars' | 'words';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  splitBy = 'chars'
}: TextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Split text into spans
    const text = children;
    let elements: string[];

    if (splitBy === 'words') {
      elements = text.split(' ');
      container.innerHTML = elements
        .map(word => `<span class="inline-block overflow-hidden"><span class="text-reveal-element inline-block">${word}</span></span>`)
        .join(' ');
    } else {
      elements = text.split('');
      container.innerHTML = elements
        .map(char => char === ' '
          ? ' '
          : `<span class="inline-block overflow-hidden"><span class="text-reveal-element inline-block">${char}</span></span>`
        )
        .join('');
    }

    const revealElements = container.querySelectorAll('.text-reveal-element');

    gsap.fromTo(
      revealElements,
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        delay,
        stagger: staggerDelay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [children, delay, staggerDelay, splitBy]);

  return (
    <span ref={containerRef} className={className}>
      {children}
    </span>
  );
}
