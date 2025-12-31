"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const partners = [
  { name: 'Proces360', displayName: 'PROCES360', logo: '/images/partners/proces360.png' },
  { name: 'Rabobank', displayName: 'RABOBANK', logo: '/images/partners/rabobank.jpg' },
  { name: 'Crewtech', displayName: 'CREWTECH', logo: '/images/partners/crewtech.png' },
  { name: 'Visser Robotics', displayName: 'VISSER ROBOTICS', logo: '/images/partners/visser-robotics.png' },
  { name: 'Tibo', displayName: 'TIBO', logo: '/images/partners/tibo.png' },
];

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [logoErrors, setLogoErrors] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Duplicate content for seamless loop
    const scrollContent = scrollContainer.querySelector('.scroll-content');
    if (scrollContent) {
      const clone = scrollContent.cloneNode(true);
      scrollContainer.appendChild(clone);
    }

    // GSAP infinite scroll animation
    const animation = gsap.to(scrollContainer.children, {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: 'linear',
    });

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', () => animation.pause());
    scrollContainer.addEventListener('mouseleave', () => animation.play());

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
            Vertrouwd door toonaangevende partners
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Onze <span className="text-primary-500">Partners</span>
          </h3>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          {/* Smooth gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div ref={scrollRef} className="flex gap-16">
            <div className="scroll-content flex gap-16 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/[0.03] backdrop-blur-sm px-10 py-7 rounded-2xl border border-white/[0.08] hover:border-primary-500/60 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500 group cursor-pointer"
                  style={{ minWidth: '220px' }}
                >
                  <div className="flex items-center justify-center">
                    {!logoErrors[partner.name] ? (
                      <div className="relative w-40 h-16 group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain transition-all duration-500"
                          onError={() => setLogoErrors(prev => ({...prev, [partner.name]: true}))}
                        />
                      </div>
                    ) : (
                      <div className="text-center group-hover:scale-110 transition-transform duration-500">
                        <div className="text-xl font-bold text-gray-400 group-hover:text-primary-500 transition-colors tracking-wide">
                          {partner.displayName}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Samen sterker • Lokale partners • Landelijke expertise
          </p>
        </div>
      </div>
    </section>
  );
}
