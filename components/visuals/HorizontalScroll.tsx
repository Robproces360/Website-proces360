"use client";
import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    // Get the total width of the scrollable content
    const getScrollWidth = () => wrapper.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(wrapper, {
        x: () => -getScrollWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollWidth()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={wrapperRef} className="flex flex-nowrap">
        {children}
      </div>
    </div>
  );
}
