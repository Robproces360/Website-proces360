'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Calculator, Phone, Settings, RefreshCw } from 'lucide-react';
import Magnetic from '@/components/shared/Magnetic';
import Reveal from '@/components/shared/Reveal';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickLinks = [
    { href: '/', label: 'Homepage', icon: Home, description: 'Terug naar het begin' },
    { href: '/oee-calculator', label: 'OEE Calculator', icon: Calculator, description: 'Bereken uw OEE score' },
    { href: '/roi-calculator', label: 'ROI Calculator', icon: Settings, description: 'Robot investering berekenen' },
    { href: '/#contact', label: 'Contact', icon: Phone, description: 'Neem contact op' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x * 1.5,
            y: -mousePosition.y * 1.5,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated 404 */}
          <Reveal>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
              className="relative mb-8"
            >
              {/* Glowing 404 */}
              <div className="relative inline-block">
                <span className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 leading-none select-none">
                  404
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-primary-500/20 blur-2xl leading-none select-none">
                  404
                </div>
              </div>

              {/* Floating gear animation */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Settings className="w-24 h-24 text-primary-500/30" />
              </motion.div>
            </motion.div>
          </Reveal>

          {/* Error Message */}
          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oeps! Pagina niet gevonden
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Het lijkt erop dat deze pagina is geoptimaliseerd... naar een andere dimensie.
              Geen zorgen, we helpen u graag verder naar de juiste bestemming.
            </p>
          </Reveal>

          {/* Search/Back Actions */}
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Magnetic>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                >
                  <Home className="w-5 h-5" />
                  Naar Homepage
                </Link>
              </Magnetic>

              <Magnetic>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Ga Terug
                </button>
              </Magnetic>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.5}>
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Populaire pagina&apos;s
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group block p-4 bg-dark-800/50 hover:bg-dark-800 border border-white/5 hover:border-primary-500/30 rounded-xl transition-all"
                    >
                      <link.icon className="w-6 h-6 text-primary-500 mb-2 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-white text-sm mb-1">{link.label}</h3>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Fun Easter Egg */}
          <Reveal delay={0.8}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 text-sm text-gray-600"
            >
              💡 Tip: Net als bij OEE-optimalisatie, begint de weg naar succes met de juiste route.
            </motion.p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
