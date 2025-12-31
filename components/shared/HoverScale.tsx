"use client";
import { motion } from 'framer-motion';

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export default function HoverScale({ children, scale = 1.05, className = '' }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
