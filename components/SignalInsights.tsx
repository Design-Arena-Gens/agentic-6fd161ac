'use client';

import { SignalCard } from './SignalCard';
import { FiCpu, FiLock, FiWifi } from 'react-icons/fi';
import { MdOutlineTranslate } from 'react-icons/md';

export const SignalInsights = () => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    <SignalCard
      delay={0.1}
      title="Predictive Mesh Ops"
      description="Predict signal degradation up to 14 minutes ahead with AI-assisted spectrum modeling and auto-preemptive reroutes."
      icon={<FiCpu />}
      footer={<span>Forecast Horizon</span>}
    />
    <SignalCard
      delay={0.15}
      title="Spectral Cloaking"
      description="Apply cloaking envelopes that modulate emissions based on adversarial detection heuristics in real-time."
      icon={<FiLock />}
      footer={<span>Stealth Envelope v3.2</span>}
    />
    <SignalCard
      delay={0.2}
      title="Omni-Lingual Bridge"
      description="Translate simultaneously across voice, text, glyph, and motion gesture languages using neural embeddings."
      icon={<MdOutlineTranslate />}
      footer={<span>143 Channels Active</span>}
    />
    <SignalCard
      delay={0.25}
      title="Resonant Beam Networking"
      description="Spin up zero-trust micro networks over resonant beams with auto-certification and ephemeral identities."
      icon={<FiWifi />}
      footer={<span>Beam Depth 12.4 km</span>}
    />
  </div>
);
