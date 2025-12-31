"use client";
import { useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  innerStrength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.4,
  innerStrength = 0.2
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || !innerRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    // Button movement
    gsap.to(buttonRef.current, {
      x: distX * strength,
      y: distY * strength,
      duration: 0.3,
      ease: 'power2.out'
    });

    // Inner content movement (opposite direction for depth effect)
    gsap.to(innerRef.current, {
      x: distX * innerStrength,
      y: distY * innerStrength,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (!buttonRef.current || !innerRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });

    gsap.to(innerRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <div
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <div
        ref={innerRef}
        className={`magnetic-inner transition-transform ${isHovered ? 'scale-105' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
