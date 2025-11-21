'use client';

import { matrixColumns } from '@/lib/data';
import { motion } from 'framer-motion';

export const MatrixPanel = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
  >
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">Modal Mesh Matrix</h3>
        <p className="text-xs text-white/50">Live orchestration across key communication planes</p>
      </div>
      <span className="text-xs uppercase tracking-widest text-kling-200">Predictive Mode</span>
    </div>
    <div className="grid gap-4 sm:grid-cols-3">
      {matrixColumns.map((column) => (
        <div key={column.title} className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4">
          <h4 className="text-sm font-semibold text-kling-100">{column.title}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {column.items.map((item) => (
              <li key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <span className="text-xs text-kling-200">Active</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);
