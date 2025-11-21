'use client';

import { motion } from 'framer-motion';

export const Logo = () => (
  <motion.div
    className="flex items-center gap-3"
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-kling-400 via-kling-200 to-kling-600 shadow-glow" />
    <div>
      <p className="text-lg font-semibold tracking-widest text-kling-100">KLING</p>
      <p className="text-xs uppercase text-white/60">Signal Intelligence Cloud</p>
    </div>
  </motion.div>
);
