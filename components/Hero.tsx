'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { OrbitalBackground } from './OrbitalBackground';

export const Hero = () => (
  <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/60 p-10 shadow-2xl sm:p-16">
    <OrbitalBackground />
    <div className="relative z-10 flex flex-col gap-10">
      <Logo />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-kling-100">Adaptive Signal Intelligence</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Orchestrate every frequency. Translate every intent. Respond before the signal fades.
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Kling choreographs multi-modal communication with predictive routing, spectral cloaking, and
          neural translation in a single responsive intelligence lattice.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-kling-400 via-kling-500 to-kling-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-glow"
        >
          Launch Transmission
        </button>
        <button
          type="button"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm"
        >
          Review Telemetry
        </button>
      </motion.div>
      <motion.dl
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid gap-6 sm:grid-cols-3"
      >
        {[
          ['Latency Mesh', '1.8 ms global median'],
          ['Translation Lattice', '143 languages + biomorphic intents'],
          ['Signal Resilience', '99.9% under spectrum assault']
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm uppercase tracking-widest text-kling-100"
          >
            <dt>{label}</dt>
            <dd className="mt-2 text-lg normal-case text-white">{value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);
