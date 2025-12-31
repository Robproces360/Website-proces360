"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function - ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOutCubic * end;

      if (decimals > 0) {
        setCount(parseFloat(currentValue.toFixed(decimals)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, decimals]);

  // Format number with Dutch locale (thousands separator)
  const formatNumber = (num: number): string => {
    if (decimals > 0) {
      return num.toLocaleString('nl-NL', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
    return num.toLocaleString('nl-NL');
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
