import React from 'react';
import { WatchProgressMap } from '../hooks/useWatchProgress';

interface Props {
  progress: WatchProgressMap;
  onNavigate: (sectionId: string) => void;
}

const exploreCards = [
  {
    id: 'about',
    ep: 'EPISODE 01',
    title: 'ABOUT ME',
    subtitle: 'The Pilot • Education & training',
    watermark: 'E01',
    gradient: 'from-purple-950/75 via-zinc-950 to-black'
  },
  {
    id: 'journey',
    ep: 'EPISODE 02',
    title: 'MY JOURNEY',
    subtitle: '5 Seasons • 11 Episodes',
    watermark: 'S01',
    gradient: 'from-amber-950/75 via-zinc-950 to-black'
  },
  {
    id: 'originals',
    ep: 'EPISODE 03',
    title: 'MY PROJECTS',
    subtitle: '3 Originals • Full-Stack & AI',
    watermark: 'ORG',
    gradient: 'from-red-950/80 via-zinc-950 to-black'
  },
  {
    id: 'top10',
    ep: 'EPISODE 04',
    title: 'TOP PICKS',
    subtitle: 'Top 7 Resume Highlights',
    watermark: 'TOP',
    gradient: 'from-emerald-950/75 via-zinc-950 to-black'
  },
  {
    id: 'skills',
    ep: 'EPISODE 05',
    title: 'MY SKILLS',
    subtitle: '7 Genres • 40 Skills',
    watermark: 'SKL',
    gradient: 'from-sky-950/75 via-zinc-950 to-black'
  }
];

export const ContinueWatching: React.FC<Props> = ({ progress, onNavigate }) => {
  return (
    <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Continue Exploring
        </h2>
        <span className="text-xs text-zinc-500">
          Progress shows what you&apos;ve watched so far
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {exploreCards.map((card) => {
          const pct = progress[card.id] ?? 65;
          return (
            <button
              key={card.id}
              data-cursor="play"
              onClick={() => onNavigate(card.id)}
              className={`group relative rounded-xl overflow-hidden border border-white/10 hover:border-white/40 bg-gradient-to-br ${card.gradient} p-5 text-left transition-all duration-300 hover:-translate-y-1 h-40 flex flex-col justify-between`}
            >
              {/* Watermark */}
              <span className="font-display text-6xl text-white/[0.06] absolute top-2 right-3 select-none pointer-events-none">
                {card.watermark}
              </span>

              {/* Play Circle Icon Top Right */}
              <div className="flex justify-end relative z-10">
                <span className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-[10px] text-white group-hover:bg-[#e50914] group-hover:border-[#e50914] transition">
                  ▶
                </span>
              </div>

              {/* Card Title & Subtitle */}
              <div className="relative z-10 mt-auto">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#e50914] font-bold">
                  {card.ep}
                </div>
                <h3 className="font-display text-2xl tracking-wider text-white leading-tight mt-0.5">
                  {card.title}
                </h3>
                <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {card.subtitle}
                </p>
              </div>

              {/* Bottom Red Watch Progress Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10">
                <div
                  className="h-full bg-[#e50914] transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
