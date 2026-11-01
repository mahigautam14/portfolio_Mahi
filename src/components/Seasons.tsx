import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { seasons, Episode } from '../data/portfolio';

export const Seasons: React.FC = () => {
  const [selectedId, setSelectedId] = useState(seasons[3].id); // Default S04 Building Real Products
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const current = seasons.find((s) => s.id === selectedId) || seasons[0];

  return (
    <section id="journey" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
            <span className="w-6 h-[2px] bg-[#e50914]" />
            <span>5 SEASONS</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-white mt-2">
            MY JOURNEY
          </h2>
        </div>
        <p className="text-xs text-zinc-400 max-w-xs">
          Every stage of the resume, told as a season — select a season tab or click any episode card to inspect it.
        </p>
      </div>

      {/* 5 Season Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {seasons.map((s) => {
          const active = s.id === selectedId;
          return (
            <button
              key={s.id}
              data-cursor="play"
              onClick={() => {
                setSelectedId(s.id);
                setActiveEpisode(null);
              }}
              className={`text-left px-4 py-3 rounded-xl border transition-all ${
                active
                  ? 'bg-zinc-900 border-[#e50914] shadow-[0_0_25px_rgba(229,9,20,0.25)]'
                  : 'bg-zinc-950/70 border-white/10 hover:border-white/30'
              }`}
            >
              <div
                className={`text-[10px] uppercase tracking-[0.22em] font-bold ${
                  active ? 'text-[#e50914]' : 'text-zinc-500'
                }`}
              >
                {s.code}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                {s.tabTitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Season Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-display text-3xl sm:text-4xl tracking-wider text-white">
            {current.headline}
          </h3>
          <span className="text-xs text-zinc-400">{current.meta}</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
          {current.description}
        </p>
      </div>

      {/* Episode Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {current.episodes.map((ep, idx) => {
          const isSelected = activeEpisode?.title === ep.title;
          return (
            <button
              key={ep.num}
              data-cursor="play"
              onClick={() => setActiveEpisode(isSelected ? null : ep)}
              className={`text-left group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#e50914] bg-zinc-900 shadow-[0_0_30px_rgba(229,9,20,0.25)]'
                  : 'border-white/10 hover:border-white/35 bg-gradient-to-b from-zinc-900/90 to-black'
              }`}
            >
              {/* Top Gradient Accent Bar */}
              <div
                className={`h-24 -mx-6 -mt-6 mb-5 p-6 relative overflow-hidden bg-gradient-to-r ${
                  idx === 0
                    ? 'from-red-950/70 via-zinc-900 to-black'
                    : idx === 1
                    ? 'from-amber-950/70 via-zinc-900 to-black'
                    : 'from-emerald-950/70 via-zinc-900 to-black'
                }`}
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest relative z-10">
                  <span className="bg-black/70 border border-white/15 text-white font-bold px-2 py-0.5 rounded">
                    {ep.ep}
                  </span>
                  <span className="text-zinc-400 font-semibold">{ep.num}</span>
                </div>
                <span className="font-display text-7xl text-white/[0.07] absolute right-4 -bottom-3 select-none">
                  E0{idx + 1}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-display text-2xl sm:text-3xl tracking-wider text-white">
                    {ep.title}
                  </h4>
                  <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#e50914] border border-white/15 flex items-center justify-center text-[10px] text-white shrink-0 transition">
                    ▶
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 font-medium mb-3">
                  {ep.year}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {ep.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-white/10">
                {ep.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Episode Spotlight Drawer when clicked */}
      <AnimatePresence>
        {activeEpisode && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="mt-6 bg-zinc-900/90 border border-[#e50914]/50 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#e50914] font-bold">
                NOW PLAYING • {activeEpisode.ep} • {activeEpisode.num} ({activeEpisode.year})
              </div>
              <h4 className="font-display text-3xl text-white tracking-wider mt-1">
                {activeEpisode.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl">
                {activeEpisode.summary}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#originals"
                data-cursor="play"
                className="bg-[#e50914] hover:bg-red-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition"
              >
                Explore Originals →
              </a>
              <button
                onClick={() => setActiveEpisode(null)}
                data-cursor="close"
                className="bg-white/10 hover:bg-white/20 text-white text-xs px-3.5 py-2.5 rounded-lg transition"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
