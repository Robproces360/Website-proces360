"use client";
import { useEffect, useRef, useCallback } from 'react';

interface FlameParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  velocityX: number;
  velocityY: number;
  element?: HTMLDivElement;
}

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const hoverRingRef = useRef<HTMLDivElement>(null);

  const hasActivated = useRef(false);
  const isVisible = useRef(false);
  const isHovering = useRef(false);
  const isMoving = useRef(false);

  const position = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastAngle = useRef(0);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  const flames = useRef<FlameParticle[]>([]);
  const flameId = useRef(0);
  const animationFrame = useRef<number | null>(null);

  // Flame colors from bright to dim (tech blue theme)
  const flameColors = useRef([
    '#ffffff',  // White core
    '#e0f2fe',  // Very light blue
    '#bae6fd',  // Light blue
    '#7dd3fc',  // Sky blue
    '#38bdf8',  // Light cyan
    '#0ea5e9',  // Cyan
    '#0284c7',  // Primary blue
    '#0369a1',  // Dark blue
    '#075985',  // Darker blue
    '#0c4a6e',  // Deep navy
  ]);

  // Create flame particle element
  const createFlameElement = useCallback(() => {
    const el = document.createElement('div');
    el.className = 'flame-particle';
    el.style.cssText = `
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99997;
      will-change: transform, opacity;
    `;
    return el;
  }, []);

  // Create flame particles
  const createFlameParticle = useCallback((x: number, y: number, angle: number): FlameParticle => {
    const spread = 0.5;
    const baseAngle = angle + Math.PI; // Opposite to movement direction
    const particleAngle = baseAngle + (Math.random() - 0.5) * spread;
    const speed = 2 + Math.random() * 3;
    const colors = flameColors.current;

    const element = createFlameElement();
    containerRef.current?.appendChild(element);

    return {
      id: flameId.current++,
      x: x + Math.cos(baseAngle) * 15, // Start behind rocket
      y: y + Math.sin(baseAngle) * 15,
      size: 4 + Math.random() * 8,
      opacity: 0.8 + Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * 4)], // Bright colors
      velocityX: Math.cos(particleAngle) * speed,
      velocityY: Math.sin(particleAngle) * speed,
      element,
    };
  }, [createFlameElement]);

  // Update rocket position directly in DOM
  const updateRocketPosition = useCallback((x: number, y: number, rotation: number, hovering: boolean, clicking: boolean) => {
    if (!rocketRef.current) return;

    const rocketRotation = (rotation * 180 / Math.PI) + 90;
    const scale = hovering ? 1.3 : clicking ? 0.85 : 1;

    rocketRef.current.style.transform = `translate(-50%, -50%) rotate(${rocketRotation}deg) scale(${scale})`;
    rocketRef.current.style.left = `${x}px`;
    rocketRef.current.style.top = `${y}px`;

    if (hoverRingRef.current) {
      hoverRingRef.current.style.left = `${x}px`;
      hoverRingRef.current.style.top = `${y}px`;
      hoverRingRef.current.style.display = hovering ? 'block' : 'none';
    }
  }, []);

  // Animation loop for flames
  useEffect(() => {
    const colors = flameColors.current;

    const animateFlames = () => {
      const currentFlames = flames.current;

      for (let i = currentFlames.length - 1; i >= 0; i--) {
        const flame = currentFlames[i];

        // Update flame properties
        flame.x += flame.velocityX;
        flame.y += flame.velocityY;
        flame.size *= 0.92;
        flame.opacity *= 0.9;
        flame.color = colors[Math.min(
          Math.floor((1 - flame.opacity) * colors.length),
          colors.length - 1
        )];

        // Remove dead flames
        if (flame.opacity <= 0.05 || flame.size <= 0.5) {
          flame.element?.remove();
          currentFlames.splice(i, 1);
          continue;
        }

        // Update DOM element directly
        if (flame.element) {
          flame.element.style.left = `${flame.x}px`;
          flame.element.style.top = `${flame.y}px`;
          flame.element.style.width = `${flame.size}px`;
          flame.element.style.height = `${flame.size}px`;
          flame.element.style.opacity = String(flame.opacity);
          flame.element.style.backgroundColor = flame.color;
          flame.element.style.boxShadow = `0 0 ${flame.size}px ${flame.color}`;
        }
      }

      animationFrame.current = requestAnimationFrame(animateFlames);
    };

    animationFrame.current = requestAnimationFrame(animateFlames);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      // Clean up flame elements
      flames.current.forEach(flame => flame.element?.remove());
      flames.current = [];
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    // Skip on mobile/tablet
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    let isClickingState = false;

    const activateCursor = (e: MouseEvent) => {
      if (hasActivated.current) return;
      const sourceCapabilities = (e as MouseEvent & { sourceCapabilities?: { firesTouchEvents?: boolean } }).sourceCapabilities;
      if (sourceCapabilities?.firesTouchEvents) return;

      hasActivated.current = true;
      isVisible.current = true;
      position.current = { x: e.clientX, y: e.clientY };
      lastPosition.current = { x: e.clientX, y: e.clientY };

      if (containerRef.current) {
        containerRef.current.style.display = 'block';
      }
      document.body.classList.add('custom-cursor-enabled');
    };

    const updatePosition = (e: MouseEvent) => {
      if (!hasActivated.current) {
        activateCursor(e);
      }

      const newX = e.clientX;
      const newY = e.clientY;
      const deltaX = newX - lastPosition.current.x;
      const deltaY = newY - lastPosition.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Calculate rotation angle based on movement direction
      if (distance > 2) {
        const angle = Math.atan2(deltaY, deltaX);
        // Smooth rotation
        let angleDiff = angle - lastAngle.current;
        if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        lastAngle.current += angleDiff * 0.3;

        // Create flame particles when moving
        const numParticles = Math.min(Math.floor(distance / 3), 5);
        for (let i = 0; i < numParticles; i++) {
          const particle = createFlameParticle(newX, newY, lastAngle.current);
          flames.current.push(particle);
        }

        // Limit max particles
        while (flames.current.length > 50) {
          const removed = flames.current.shift();
          removed?.element?.remove();
        }

        isMoving.current = true;

        // Update engine glow
        const engineGlow = rocketRef.current?.querySelector('.engine-glow') as HTMLElement;
        if (engineGlow) {
          engineGlow.style.display = 'block';
        }

        if (moveTimeout.current) clearTimeout(moveTimeout.current);
        moveTimeout.current = setTimeout(() => {
          isMoving.current = false;
          if (engineGlow) {
            engineGlow.style.display = 'none';
          }
        }, 100);
      }

      position.current = { x: newX, y: newY };
      lastPosition.current = { x: newX, y: newY };

      // Update DOM directly for instant response
      updateRocketPosition(newX, newY, lastAngle.current, isHovering.current, isClickingState);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        isHovering.current = true;
        updateRocketPosition(position.current.x, position.current.y, lastAngle.current, true, isClickingState);
      }
    };

    const handleMouseOut = () => {
      isHovering.current = false;
      updateRocketPosition(position.current.x, position.current.y, lastAngle.current, false, isClickingState);
    };

    const handleMouseDown = () => {
      isClickingState = true;
      updateRocketPosition(position.current.x, position.current.y, lastAngle.current, isHovering.current, true);
    };

    const handleMouseUp = () => {
      isClickingState = false;
      updateRocketPosition(position.current.x, position.current.y, lastAngle.current, isHovering.current, false);
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('custom-cursor-enabled');
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, [createFlameParticle, updateRocketPosition]);

  return (
    <div ref={containerRef} style={{ display: 'none' }}>
      {/* Rocket cursor */}
      <div
        ref={rocketRef}
        className="rocket-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99999,
          filter: 'drop-shadow(0 0 8px rgba(2, 132, 199, 0.6))',
          willChange: 'transform',
        }}
      >
        {/* Rocket body */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rocket-svg"
          style={{ display: 'block' }}
        >
          {/* Rocket body */}
          <path
            d="M16 2C16 2 12 8 12 16C12 20 13 24 16 28C19 24 20 20 20 16C20 8 16 2 16 2Z"
            fill="url(#rocketGradient)"
            stroke="#0284c7"
            strokeWidth="1"
          />
          {/* Rocket nose */}
          <path
            d="M16 2L14 6H18L16 2Z"
            fill="#0284c7"
          />
          {/* Left fin */}
          <path
            d="M12 20L8 26L12 24V20Z"
            fill="#0369a1"
            stroke="#0284c7"
            strokeWidth="0.5"
          />
          {/* Right fin */}
          <path
            d="M20 20L24 26L20 24V20Z"
            fill="#0369a1"
            stroke="#0284c7"
            strokeWidth="0.5"
          />
          {/* Window */}
          <circle
            cx="16"
            cy="12"
            r="3"
            fill="#0a0a0a"
            stroke="#7dd3fc"
            strokeWidth="1"
          />
          <circle
            cx="15"
            cy="11"
            r="1"
            fill="#ffffff"
            opacity="0.6"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="rocketGradient" x1="16" y1="2" x2="16" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Engine glow when moving */}
        <div
          className="engine-glow"
          style={{
            display: 'none',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '12px',
            height: '16px',
            background: 'radial-gradient(ellipse at center top, #ffffff 0%, #0ea5e9 40%, transparent 70%)',
            borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%',
            animation: 'flicker 0.1s infinite alternate',
            filter: 'blur(1px)',
          }}
        />
      </div>

      {/* Hover ring */}
      <div
        ref={hoverRingRef}
        className="hover-ring"
        style={{
          display: 'none',
          position: 'fixed',
          width: '50px',
          height: '50px',
          border: '2px solid rgba(2, 132, 199, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          animation: 'pulse-ring 1s ease-out infinite',
        }}
      />

      <style jsx global>{`
        @keyframes flicker {
          0% { opacity: 0.8; transform: translateX(-50%) scaleY(1); }
          100% { opacity: 1; transform: translateX(-50%) scaleY(1.2); }
        }

        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }

        @media (max-width: 1023px) {
          .rocket-cursor,
          .flame-particle,
          .hover-ring {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
