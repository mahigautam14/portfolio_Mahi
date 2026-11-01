import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

interface Props {
  onPlayIntro: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Hero: React.FC<Props> = ({ onPlayIntro, onNavigate }) => {
  const go = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[88vh] pt-24 pb-8 flex items-center overflow-hidden"
    >
      {/* Crimson Spotlight Glow behind the transparent portrait cutout */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_45%,rgba(175,12,22,0.38)_0%,rgba(40,6,12,0.35)_44%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-black/35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc-300 font-semibold">
            <span className="w-5 h-5 bg-[#e50914] text-white font-display text-sm flex items-center justify-center rounded">
              {profile.badgeLetter}
            </span>
            <span>SERIES</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-7xl sm:text-9xl tracking-[0.04em] text-white leading-[0.88] font-bold"
          >
            {profile.name}
          </motion.h1>

          <div className="text-xs sm:text-sm uppercase tracking-[0.5em] text-[#e50914] font-semibold">
            THE SERIES
          </div>

          {/* Meta Row with 4K badge */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300 pt-1">
            <span className="border border-white/25 bg-white/5 px-1.5 py-0.5 rounded text-[10px] font-semibold text-white">
              4K
            </span>
            {profile.metaRow.map((item, i) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {i < profile.metaRow.length - 1 && (
                  <span className="text-zinc-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-zinc-200 font-semibold pt-1">
            {profile.headline}
          </div>

          <p className="text-sm text-zinc-300/90 leading-relaxed max-w-xl">
            {profile.heroBio}
          </p>

          {/* Action Buttons: [▶ Play Intro] [+ My Work] [(i)] */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={onPlayIntro}
              data-cursor="play"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-zinc-200 text-black font-semibold px-6 py-3 rounded-md text-xs uppercase tracking-wider shadow-lg transition transform hover:scale-105"
            >
              <span>▶</span>
              <span>Play Intro</span>
            </button>

            <button
              onClick={() => go('originals')}
              data-cursor="play"
              className="inline-flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white font-semibold px-5 py-3 rounded-md text-xs uppercase tracking-wider border border-white/15 transition"
            >
              <span>+</span>
              <span>My Work</span>
            </button>

            <button
              onClick={() => go('about')}
              data-cursor="play"
              title="About Mahi"
              className="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white border border-white/15 flex items-center justify-center text-xs font-serif italic transition"
            >
              i
            </button>
          </div>
        </div>

        {/* Right Column: Frameless Studio Portrait Cutout + Interactive Floating Glass Badges */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square flex items-end justify-center">
            {/* Soft Crimson Aura behind cutout */}
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(229,9,20,0.34)_0%,transparent_70%)] blur-2xl pointer-events-none" />

            <img
              src={profile.portraitWebp1080}
              alt={profile.name}
              className="relative z-10 w-[92%] h-[92%] object-contain object-bottom drop-shadow-[0_25px_65px_rgba(0,0,0,0.95)] select-none pointer-events-none"
            />

            {/* Bottom seamless fade into the page */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07070a] via-[#07070a]/75 to-transparent z-10 pointer-events-none" />

            {/* Interactive Floating Glass Card 1 (Top-Left -> Journey) */}
            <button
              onClick={() => go('journey')}
              data-cursor="play"
              className="animate-float-slow z-20 absolute top-14 left-0 sm:left-2 text-left bg-zinc-950/85 hover:bg-zinc-900 backdrop-blur-md border border-white/15 hover:border-[#e50914]/60 rounded-xl px-4 py-2.5 shadow-2xl transition"
            >
              <div className="text-xs font-bold text-white">
                {profile.heroFloatingCards[0].title}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-0.5">
                {profile.heroFloatingCards[0].sub}
              </div>
            </button>

            {/* Interactive Floating Glass Card 2 (Top-Right -> Achievements / Mercor) */}
            <button
              onClick={() => go('achievements')}
              data-cursor="view"
              className="animate-float-delayed z-20 absolute top-8 right-0 sm:right-2 text-left bg-zinc-950/85 hover:bg-zinc-900 backdrop-blur-md border border-white/15 hover:border-[#e50914]/60 rounded-xl px-4 py-2.5 shadow-2xl transition"
            >
              <div className="text-xs font-bold text-white">
                {profile.heroFloatingCards[1].title}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#e50914] mt-0.5">
                {profile.heroFloatingCards[1].sub}
              </div>
            </button>

            {/* Interactive Floating Glass Card 3 (Bottom-Right -> Skills) */}
            <button
              onClick={() => go('skills')}
              data-cursor="play"
              className="animate-float-slow z-20 absolute bottom-10 right-0 sm:right-4 text-left bg-zinc-950/85 hover:bg-zinc-900 backdrop-blur-md border border-white/15 hover:border-[#e50914]/60 rounded-xl px-4 py-2.5 shadow-2xl transition"
            >
              <div className="text-xs font-bold text-white">
                {profile.heroFloatingCards[2].title}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-0.5">
                {profile.heroFloatingCards[2].sub}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
