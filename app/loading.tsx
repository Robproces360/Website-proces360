'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-bg-primary flex items-center justify-center z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Logo/Spinner */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-500 border-r-primary-500/50"
          />

          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-primary-400 border-r-primary-400/30"
          />

          {/* Inner ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-primary-300 border-r-primary-300/20"
          />

          {/* Center dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-8 rounded-full bg-primary-500"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white font-semibold text-lg"
          >
            Proces360
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1 justify-center mt-2"
          >
            <span className="text-gray-500 text-sm">Laden</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
              className="text-primary-500"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
              className="text-primary-500"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}
              className="text-primary-500"
            >
              .
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
