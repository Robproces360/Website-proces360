"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextScrambleProps {
  children: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnScroll?: boolean;
  duration?: number;
}

const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function TextScramble({
  children,
  className = '',
  scrambleOnHover = false,
  scrambleOnScroll = true,
  duration = 1.5
}: TextScrambleProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState(children);
  const hasAnimated = useRef(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    const originalText = children;
    const length = originalText.length;
    let iteration = 0;
    const totalIterations = Math.ceil(duration * 30); // 30fps

    animationRef.current = setInterval(() => {
      const progress = iteration / totalIterations;

      const newText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';

          // Characters before progress point show original
          if (index < length * progress) {
            return originalText[index];
          }

          // Random character for positions after progress
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(newText);
      iteration++;

      if (iteration >= totalIterations) {
        setDisplayText(originalText);
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
      }
    }, 1000 / 30);
  }, [children, duration]);

  useEffect(() => {
    if (!scrambleOnScroll || !textRef.current) return;

    const el = textRef.current;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (!hasAnimated.current) {
          hasAnimated.current = true;
          scramble();
        }
      }
    });

    return () => {
      trigger.kill();
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [scrambleOnScroll, scramble]);

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      scramble();
    }
  };

  return (
    <span
      ref={textRef}
      className={`${className} font-mono`}
      onMouseEnter={handleMouseEnter}
      style={{ fontFeatureSettings: '"tnum"' }}
    >
      {displayText}
    </span>
  );
}
