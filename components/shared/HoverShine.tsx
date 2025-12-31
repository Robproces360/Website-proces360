"use client";
import { useState } from 'react';

interface HoverShineProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverShine({ children, className = '' }: HoverShineProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} relative overflow-hidden`}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: '200px',
            height: '200px',
            top: position.y - 100,
            left: position.x - 100,
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      {children}
    </div>
  );
}
