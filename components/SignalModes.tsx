'use client';

import { signalModes } from '@/lib/data';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const SignalModes = () => {
  const [active, setActive] = useState(signalModes[0].id);
  const activeMode = signalModes.find((mode) => mode.id === active) ?? signalModes[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-black/60 p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Adaptive Signal Arsenal</h3>
            <p className="text-sm text-white/60">Tap a module to inspect operational telemetry.</p>
          </div>
          <span className="rounded-full border border-kling-400/40 bg-kling-400/10 px-3 py-1 text-xs uppercase tracking-widest text-kling-100">
            {activeMode.bandwidth} Flux
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {signalModes.map((mode) => {
            const isActive = mode.id === active;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActive(mode.id)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? 'border-kling-400/70 bg-kling-500/20 shadow-glow'
                    : 'border-white/10 bg-white/5 hover:border-kling-400/40 hover:bg-kling-500/10'
                }`}
              >
                <p className="text-sm font-semibold text-white">{mode.title}</p>
                <p className="mt-2 text-xs text-white/60">{mode.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-kling-100">
                  <span>Latency {mode.latency}</span>
                  <span>Stability {mode.stability}</span>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <div>
          <h4 className="text-sm uppercase tracking-widest text-kling-100">Mode Synopsis</h4>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{activeMode.description}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/50 p-4 text-xs text-white/60">
          <p className="text-kling-100">Real-time Signal Trace</p>
          <div className="mt-3 h-24 rounded-xl bg-gradient-to-r from-kling-500/40 via-white/10 to-transparent">
            <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_center,_rgba(53,93,255,0.35)_0%,_transparent_60%)]" />
          </div>
          <div className="mt-3 flex justify-between text-kling-100">
            <span>Phase: Stable</span>
            <span>Flux: {activeMode.bandwidth}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
