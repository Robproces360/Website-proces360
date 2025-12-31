"use client";
import { useEffect, useRef } from 'react';

interface MorphingBlobProps {
  className?: string;
  color?: string;
  size?: number;
  speed?: number;
}

export default function MorphingBlob({
  className = '',
  color = 'rgba(249, 115, 22, 0.15)',
  size = 400,
  speed = 10
}: MorphingBlobProps) {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    let frame = 0;

    const animate = () => {
      if (!blobRef.current) return;

      frame += 0.01 * speed;

      // Generate organic blob shape using multiple sine waves
      const points = 8;
      const radius = size / 2;
      let path = '';

      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave1 = Math.sin(frame + i * 0.5) * 20;
        const wave2 = Math.cos(frame * 0.7 + i * 0.3) * 15;
        const wave3 = Math.sin(frame * 1.3 + i * 0.7) * 10;

        const r = radius + wave1 + wave2 + wave3;
        const x = Math.cos(angle) * r + radius;
        const y = Math.sin(angle) * r + radius;

        if (i === 0) {
          path += `M ${x} ${y} `;
        } else {
          // Use quadratic curves for smoother blob
          const prevAngle = ((i - 1) / points) * Math.PI * 2;
          const prevWave1 = Math.sin(frame + (i - 1) * 0.5) * 20;
          const prevWave2 = Math.cos(frame * 0.7 + (i - 1) * 0.3) * 15;
          const prevWave3 = Math.sin(frame * 1.3 + (i - 1) * 0.7) * 10;
          const prevR = radius + prevWave1 + prevWave2 + prevWave3;

          const cpX = (Math.cos(prevAngle) * prevR + Math.cos(angle) * r) / 2 + radius;
          const cpY = (Math.sin(prevAngle) * prevR + Math.sin(angle) * r) / 2 + radius;

          path += `Q ${cpX} ${cpY} ${x} ${y} `;
        }
      }

      path += 'Z';
      blobRef.current.style.clipPath = `path('${path}')`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [size, speed]);

  return (
    <div
      ref={blobRef}
      className={`absolute blur-3xl transition-all duration-1000 ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
