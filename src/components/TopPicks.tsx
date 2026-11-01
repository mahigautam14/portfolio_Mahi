import React, { useState } from 'react';
import { topPicks } from '../data/portfolio';

interface Props {
  onNavigate: (sectionId: string) => void;
}

export const TopPicks: React.FC<Props> = ({ onNavigate }) => {
  const [showAll, setShowAll] = useState(false);
  const visiblePicks = showAll ? topPicks : topPicks.slice(0, 5);

  return (
    <section id="top10" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
            <span className="w-6 h-[2px] bg-[#e50914]" />
            <span>TOP 10 FROM THE RESUME</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-white mt-2">
            MAHI&apos;S TOP PICKS
          </h2>
        </div>

        <button
          onClick={() => setShowAll((s) => !s)}
          data-cursor="play"
          className="text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-white bg-zinc-900 border border-white/15 px-4 py-2 rounded-full transition self-start sm:self-auto"
        >
          {showAll ? 'Show Top 5' : `Show All ${topPicks.length} Picks`}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {visiblePicks.map((item) => (
          <button
            key={item.rank}
            data-cursor="play"
            onClick={() => onNavigate(item.targetSection)}
            className="group relative flex items-end text-left h-64 focus:outline-none"
          >
            {/* Giant Outlined Number on Left */}
            <span
              className="font-display text-[150px] leading-none select-none pointer-events-none transition-transform duration-300 group-hover:scale-105 -mr-6 z-0"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2.5px rgba(255,255,255,0.28)',
              }}
            >
              {item.rank}
            </span>

            {/* Poster Card Overlapping Number */}
            <div
              className={`relative z-10 flex-1 h-56 rounded-2xl border border-white/15 group-hover:border-[#e50914] bg-gradient-to-br ${item.gradient} p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-300 font-bold">
                  {item.kicker}
                </span>
                <span className="text-[10px] text-[#e50914] opacity-0 group-hover:opacity-100 transition font-bold">
                  ▶
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-2xl tracking-wider text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-3 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
