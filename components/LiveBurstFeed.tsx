'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { liveBursts } from '@/lib/data';

interface Burst {
  timestamp: string;
  channel: string;
  signalQuality: number;
  drift: number;
  payload: string;
}

const cycle = (items: Burst[], shift: number): Burst[] => {
  const clone = [...items];
  for (let i = 0; i < shift; i += 1) {
    const first = clone.shift();
    if (first) clone.push(first);
  }
  return clone;
};

export const LiveBurstFeed = () => {
  const [items, setItems] = useState(liveBursts);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => cycle(prev, 1));
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-kling-100">
          Live Burst Telemetry
        </h3>
        <span className="rounded-full border border-kling-400/40 bg-kling-400/10 px-3 py-1 text-xs text-kling-100">
          Synced
        </span>
      </div>
      <div className="h-64 overflow-hidden">
        <AnimatePresence initial={false}>
          {items.slice(0, 4).map((burst) => (
            <motion.div
              key={burst.timestamp}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="mb-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-white/80"
            >
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>{burst.timestamp}</span>
                <span>{burst.channel}</span>
              </div>
              <div className="mt-2 text-white">{burst.payload}</div>
              <div className="mt-2 flex gap-3 text-xs text-kling-100">
                <span>Signal {burst.signalQuality}%</span>
                <span>Drift {burst.drift > 0 ? '+' : ''}{burst.drift}%</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
