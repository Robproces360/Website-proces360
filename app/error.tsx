'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Phone } from 'lucide-react';
import Magnetic from '@/components/shared/Magnetic';
import Reveal from '@/components/shared/Reveal';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warning gradient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />

        {/* Animated warning stripes */}
        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 right-0 h-2 opacity-20"
          style={{
            background: 'repeating-linear-gradient(90deg, #f97316, #f97316 20px, transparent 20px, transparent 40px)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Error Icon */}
          <Reveal>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="relative mb-8 inline-block"
            >
              <div className="relative">
                {/* Pulsing background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-red-500 rounded-full blur-xl"
                />

                {/* Icon container */}
                <div className="relative p-8 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30">
                  <AlertTriangle className="w-16 h-16 text-red-400" />
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Error Message */}
          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Er ging iets mis
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg text-gray-400 mb-4 max-w-xl mx-auto">
              Onze machines draaien normaal op 99% uptime, maar zelfs de beste productielijn
              heeft soms een storing. We zijn al bezig met de optimalisatie!
            </p>
          </Reveal>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === 'development' && (
            <Reveal delay={0.35}>
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-left">
                <p className="text-sm font-mono text-red-400 break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            </Reveal>
          )}

          {/* Actions */}
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Magnetic>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                >
                  <RefreshCw className="w-5 h-5" />
                  Opnieuw proberen
                </button>
              </Magnetic>

              <Magnetic>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10"
                >
                  <Home className="w-5 h-5" />
                  Naar Homepage
                </a>
              </Magnetic>
            </div>
          </Reveal>

          {/* Contact Support */}
          <Reveal delay={0.5}>
            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm mb-4">
                Blijft het probleem? Neem contact met ons op:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+31854010752"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +31 85 401 0752
                </a>
                <a
                  href="mailto:info@proces360.com"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@proces360.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* Fun message */}
          <Reveal delay={0.6}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 text-sm text-gray-600"
            >
              🔧 Net als bij een productiestoring: analyse, actie, en weer draaien!
            </motion.p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
