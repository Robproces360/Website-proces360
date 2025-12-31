"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  delay?: number;
  className?: string;
}

export default function SplitText({ children, delay = 0, className = '' }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const chars = children.split('');
    element.innerHTML = chars
      .map((char) => `<span style="display: inline-block; opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const charElements = element.querySelectorAll('span');

    gsap.to(charElements, {
      opacity: 1,
      duration: 0.05,
      stagger: 0.03,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [children, delay]);

  return <span ref={ref} className={className}></span>;
}
