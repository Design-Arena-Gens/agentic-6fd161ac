'use client';

import { motion } from 'framer-motion';
import { orchestrationTimeline } from '@/lib/data';

export const OrchestrationTimeline = () => (
  <div className="space-y-8">
    {orchestrationTimeline.map((phase, index) => (
      <motion.div
        key={phase.phase}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
          <span className="text-xs uppercase tracking-widest text-kling-200">Node {index + 1}</span>
        </div>
        <p className="text-sm text-white/70">{phase.summary}</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {phase.metrics.map((metric) => (
            <li
              key={metric}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-kling-100"
            >
              {metric}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);
