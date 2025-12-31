"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MorphingCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function MorphingCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
  decimals = 0
}: MorphingCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayValue(obj.value);
          }
        });
      }
    });

    return () => trigger.kill();
  }, [end, duration]);

  const formattedValue = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString('nl-NL');

  return (
    <span ref={containerRef} className={`tabular-nums ${className}`}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
