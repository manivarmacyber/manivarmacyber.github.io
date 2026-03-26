import React, { Suspense } from 'react';
import { motion } from 'motion/react';

// Minimal skeleton fallback — shows structure immediately (no blank screen)
const PageSkeleton = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-accent-primary/20 border-t-accent-primary rounded-full animate-spin" />
      <span className="font-mono text-[10px] text-accent-primary/60 uppercase tracking-[0.3em] animate-pulse">
        Loading...
      </span>
    </div>
  </div>
);

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<PageSkeleton />}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </motion.div>
  </Suspense>
);
