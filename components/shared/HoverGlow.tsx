"use client";
import { useState } from 'react';

interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

export default function HoverGlow({
  children,
  className = '',
  glowColor = 'rgba(14, 165, 233, 0.5)',
  glowSize = 30,
  rounded = '2xl'
}: HoverGlowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const roundedClasses: Record<string, string> = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${roundedClasses[rounded]} ${className}`}
      style={{
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: isHovered ? `0 0 ${glowSize}px ${glowColor}` : '0 0 0px rgba(0, 0, 0, 0)',
      }}
    >
      {children}
    </div>
  );
}
