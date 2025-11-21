'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SignalCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  footer?: ReactNode;
  delay?: number;
}

export const SignalCard = ({ title, description, icon, footer, delay = 0 }: SignalCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="gradient-ring relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3 text-kling-200">
      <div className="text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-white/70">{description}</p>
    {footer && <div className="mt-6 text-xs uppercase tracking-widest text-kling-100">{footer}</div>}
  </motion.article>
);
