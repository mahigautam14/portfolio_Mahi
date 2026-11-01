import React from 'react';
import { profile } from '../data/portfolio';

interface Props {
  onWatchAgain: () => void;
  onReplayOpening: () => void;
}

export const FinalCTA: React.FC<Props> = ({
  onWatchAgain,
  onReplayOpening,
}) => {
  return (
    <footer
      id="cta"
      className="relative border-t border-white/10 bg-[#07070a] py-24 px-4 sm:px-8 overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,12,20,0.28)_0%,transparent_68%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-6">
        <div className="text-[11px] uppercase tracking-[0.45em] text-[#e50914] font-semibold">
          THE NEXT EPISODE
        </div>

        <h2 className="font-display text-6xl sm:text-9xl tracking-wider text-white leading-none font-bold">
          TO BE CONTINUED...
        </h2>

        <div className="pt-2">
          <div className="text-sm sm:text-base uppercase tracking-[0.35em] text-white font-semibold">
            {profile.name}
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-zinc-400 mt-1">
            SOFTWARE ENGINEER • MCA @ NIT RAIPUR
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <a
            href={`mailto:${profile.email}`}
            data-cursor="play"
            className="inline-flex items-center gap-2 bg-[#e50914] hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full shadow-[0_0_30px_rgba(229,9,20,0.5)] transition"
          >
            <span>▶</span>
            <span>LET&apos;S BUILD</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="play"
            className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition"
          >
            <span>LINKEDIN ↗</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="play"
            className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition"
          >
            <span>GITHUB ↗</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            data-cursor="play"
            className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/15 font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition"
          >
            <span>EMAIL ↗</span>
          </a>
        </div>

        <div className="pt-8 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.25em] text-zinc-400">
          <button
            onClick={onWatchAgain}
            data-cursor="play"
            className="hover:text-white transition"
          >
            ◀ WATCH AGAIN
          </button>
          <span>•</span>
          <button
            onClick={onReplayOpening}
            data-cursor="play"
            className="hover:text-white transition"
          >
            REPLAY OPENING
          </button>
        </div>

        <div className="pt-8 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-[#e50914] text-white font-display text-[10px] flex items-center justify-center font-bold">
              {profile.badgeLetter}
            </span>
            <span className="font-display text-sm tracking-[0.25em] text-zinc-300">
              SERIES
            </span>
          </div>
          <p className="text-[11px] text-zinc-500">
            © 2026 {profile.fullName}. A personal, streaming-inspired portfolio — not affiliated with any streaming service.
          </p>
        </div>
      </div>
    </footer>
  );
};
