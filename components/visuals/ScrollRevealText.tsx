"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  splitBy?: 'chars' | 'words' | 'lines';
  stagger?: number;
  duration?: number;
  scrub?: boolean | number;
}

export default function ScrollRevealText({
  children,
  className = '',
  as: Component = 'p',
  splitBy = 'words',
  stagger = 0.02,
  duration = 0.8,
  scrub = false
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!textEl || !container) return;

    const text = children;
    let elements: string[] = [];

    if (splitBy === 'chars') {
      elements = text.split('');
    } else if (splitBy === 'words') {
      elements = text.split(' ');
    } else {
      elements = [text];
    }

    // Create wrapped elements
    textEl.innerHTML = elements
      .map((el, i) => {
        const content = splitBy === 'words' ? el + (i < elements.length - 1 ? '&nbsp;' : '') : el;
        return `<span class="split-element inline-block overflow-hidden">
          <span class="split-inner inline-block" style="transform: translateY(100%); opacity: 0;">
            ${content}
          </span>
        </span>`;
      })
      .join('');

    const innerElements = textEl.querySelectorAll('.split-inner');

    const animation = gsap.to(innerElements, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'top 35%',
        scrub: scrub,
        toggleActions: scrub ? undefined : 'play none none reverse'
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === container) {
          t.kill();
        }
      });
    };
  }, [children, splitBy, stagger, duration, scrub]);

  return (
    <div ref={containerRef}>
      <Component ref={textRef as React.RefObject<HTMLParagraphElement>} className={className}>
        {children}
      </Component>
    </div>
  );
}
