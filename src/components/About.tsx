import React from 'react';
import { profile } from '../data/portfolio';

interface Props {
  onNavigate?: (sectionId: string) => void;
}

export const About: React.FC<Props> = ({ onNavigate }) => {
  const go = (id: string) => {
    if (onNavigate) onNavigate(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10">
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
          <span className="w-6 h-[2px] bg-[#e50914]" />
          <span>THE PILOT</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-white mt-2">
          ABOUT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Framed Portrait Card with Crimson Studio Glow behind transparent cutout */}
        <div className="lg:col-span-5">
          <div
            onClick={() => go('journey')}
            data-cursor="play"
            className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-[#e50914]/60 bg-[radial-gradient(circle_at_50%_38%,rgba(165,12,22,0.45)_0%,rgba(24,6,10,0.85)_55%,#07070a_95%)] shadow-2xl transition"
          >
            <img
              src={profile.portraitWebp720}
              alt={profile.fullName}
              className="w-full aspect-[4/4.2] object-contain object-bottom pt-4 group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 inset-x-5 flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-wider text-white">
                  {profile.name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-400">
                  NATIONAL INSTITUTE OF TECHNOLOGY RAIPUR
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-black/75 border border-white/20 text-zinc-200 px-2.5 py-1 rounded">
                S01 • E01
              </span>
            </div>
          </div>
        </div>

        {/* Right Serif Quote + 2x2 Info Cards + Interactive Interests */}
        <div className="lg:col-span-7 space-y-6">
          <blockquote className="font-serif-italic text-2xl sm:text-4xl text-zinc-100 leading-snug">
            {profile.aboutQuote}
          </blockquote>
          <div className="text-xs text-zinc-400">
            — {profile.fullName} • MCA @ National Institute of Technology Raipur
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {profile.aboutMetaGrid.map((m) => (
              <button
                key={m.label}
                onClick={() => go('journey')}
                data-cursor="play"
                className="text-left bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-white/30 rounded-xl p-4 transition"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#e50914] font-bold">
                  {m.label}
                </div>
                <div className="text-base font-bold text-white mt-1">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">{m.sub}</div>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-400 mb-2.5">
              INTERESTS &amp; CORE FOCUS (CLICK TO EXPLORE SKILLS)
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((intItem) => (
                <button
                  key={intItem}
                  onClick={() => go('skills')}
                  data-cursor="play"
                  className="text-xs bg-zinc-900 hover:bg-[#e50914]/20 border border-white/15 hover:border-[#e50914] text-zinc-200 hover:text-white px-3.5 py-1.5 rounded-full transition"
                >
                  {intItem}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
