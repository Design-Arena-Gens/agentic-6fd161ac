'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const OrbitalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((event.clientX / innerWidth - 0.5) * 60);
      mouseY.set((event.clientY / innerHeight - 0.5) * 60);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-kling-500/30 blur-3xl"
        style={{ x: smoothX, y: smoothY }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(53,93,255,0.35),_transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(19,31,117,0.55),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.03)_0%,_rgba(53,93,255,0.16)_50%,_transparent_100%)]" />
    </div>
  );
};
