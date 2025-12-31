"use client";
import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on mobile
    if (window.innerWidth < 1024) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Add new point
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });

      // Limit points
      if (pointsRef.current.length > 50) {
        pointsRef.current.shift();
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;

      // Update and draw points
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age += 1;

        // Remove old points
        if (points[i].age > 30) {
          points.splice(i, 1);
          continue;
        }

        const progress = points[i].age / 30;
        const opacity = 1 - progress;
        const size = (1 - progress) * 4 + 1;

        // Draw point with glow
        const gradient = ctx.createRadialGradient(
          points[i].x, points[i].y, 0,
          points[i].x, points[i].y, size * 3
        );
        gradient.addColorStop(0, `rgba(249, 115, 22, ${opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(249, 115, 22, ${opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');

        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw connecting lines
      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const progress = points[i].age / 30;
          ctx.strokeStyle = `rgba(249, 115, 22, ${(1 - progress) * 0.3})`;
          ctx.lineWidth = (1 - progress) * 2;
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99998]"
    />
  );
}
