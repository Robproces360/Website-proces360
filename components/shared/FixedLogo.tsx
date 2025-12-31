"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function FixedLogo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="fixed top-24 left-6 z-50">
      <a href="#" className="block">
        {!logoError ? (
          <div className="relative h-36 w-[36rem]">
            <Image
              src="/images/logo-proces360.png"
              alt="Proces360 Logo"
              fill
              className="object-contain object-left"
              priority
              onError={() => setLogoError(true)}
            />
          </div>
        ) : (
          // Fallback text logo
          <div className="relative">
            <span className="text-5xl font-bold">
              <span className="text-white">PROCES</span>
              <span className="text-primary-500">360</span>
            </span>
          </div>
        )}
      </a>
    </div>
  );
}
