import { Hero } from '@/components/Hero';
import { LiveBurstFeed } from '@/components/LiveBurstFeed';
import { MatrixPanel } from '@/components/MatrixPanel';
import { OrchestrationTimeline } from '@/components/OrchestrationTimeline';
import { SignalInsights } from '@/components/SignalInsights';
import { SignalModes } from '@/components/SignalModes';
import { SignalSynth } from '@/components/SignalSynth';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(53,93,255,0.12),_transparent_60%)] px-4 pb-24 pt-16 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <Hero />
        <SignalInsights />
        <SignalModes />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SignalSynth />
          <LiveBurstFeed />
        </div>
        <MatrixPanel />
        <div className="rounded-3xl border border-white/10 bg-black/60 p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-white">Orchestration Relay Path</h2>
            <p className="text-sm text-white/60">
              End-to-end trace of how Kling processes, prioritizes, and deploys transmissions in dynamic environments.
            </p>
          </div>
          <OrchestrationTimeline />
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-10 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Kling Signal Intelligence</span>
          <div className="flex gap-3">
            <a className="hover:text-white" href="#">Status</a>
            <a className="hover:text-white" href="#">Security</a>
            <a className="hover:text-white" href="#">Documentation</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
