'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const intents = [
  {
    id: 'relay',
    label: 'Relay Support',
    waveform: '▁▂▄▆█▄▂▁▄█▇▄▂',
    synopsis: 'Deploying autonomous relays to stabilize drift across deep space nodes.'
  },
  {
    id: 'cloak',
    label: 'Spectral Cloak',
    waveform: '▂▄▇█▆▄▁▂▄▆█▇',
    synopsis: 'Engaging spectral cloak to suppress detectable emissions during operation.'
  },
  {
    id: 'mediate',
    label: 'Diplomatic Channel',
    waveform: '▁▄▆█▆▄▂▁▄▆█▇',
    synopsis: 'Opening neural mediation channel with adaptive translation guardianship.'
  }
];

const languages = ['Klingon', 'Binary 64', 'Solaris Glyph', 'Terran', 'Hydronix'];

const generateResponse = (intent: string, language: string) => {
  const base = {
    Relay: 'Signal lattice recalibrated. Relay nodes synchronized with minimal phase offset.',
    Spectral: 'Cloaking spectrum engaged. Transmission signature now beneath detection threshold.',
    Diplomatic: 'Diplomatic conduit open. Sentiment analysis remains stable and cooperative.'
  };

  if (language === 'Klingon') {
    return 'batlh peQchem lo"; tol cha yInob; quvHa\'ghach tlhuHlaHbe\'';
  }
  if (language === 'Binary 64') {
    return '001001 SIGNAL_OK :: VECTOR_STABILITY=97.4 :: RETURNING_CHANNEL';
  }
  if (language === 'Solaris Glyph') {
    return '✶⟆ ⋔⟟ ⊹⟆⟡ ⊙⎍⟡ ⌇⌇';
  }
  if (language === 'Hydronix') {
    return '∿∿ ψλω ᚡᚡ ~waveform stabilized~';
  }
  return base[intent as keyof typeof base] ?? 'Transmission aligned.';
};

export const SignalSynth = () => {
  const [intent, setIntent] = useState(intents[0]);
  const [languageIndex, setLanguageIndex] = useState(0);
  const response = useMemo(
    () => generateResponse(intent.label.split(' ')[0], languages[languageIndex]),
    [intent, languageIndex]
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="md:max-w-sm">
          <h3 className="text-lg font-semibold text-white">Signal Synth Translator</h3>
          <p className="mt-3 text-sm text-white/60">
            Compose a directive and Kling will synthesize an optimized transmission in your selected
            channel.
          </p>
          <div className="mt-6 grid gap-3">
            {intents.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIntent(item)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  item.id === intent.id
                    ? 'border-kling-400/70 bg-kling-500/20 text-white shadow-glow'
                    : 'border-white/10 bg-black/40 text-white/70 hover:border-kling-400/40 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-6 rounded-3xl border border-white/10 bg-black/50 p-6">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-kling-100">Waveform Output</p>
            <button
              type="button"
              onClick={() => setLanguageIndex((prev) => (prev + 1) % languages.length)}
              className="rounded-full border border-kling-400/40 px-4 py-2 text-xs uppercase tracking-widest text-kling-100"
            >
              {languages[languageIndex]}
            </button>
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={intent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/5 bg-gradient-to-r from-kling-500/20 via-white/5 to-transparent p-4 text-2xl font-mono tracking-widest text-kling-100"
            >
              {intent.waveform}
            </motion.div>
          </AnimatePresence>
          <motion.div
            key={response}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
          >
            {response}
          </motion.div>
          <p className="text-xs uppercase tracking-widest text-white/50">{intent.synopsis}</p>
        </div>
      </div>
    </div>
  );
};
