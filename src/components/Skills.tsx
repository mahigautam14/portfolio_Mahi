import React, { useState } from 'react';
import { skillCategories, SkillItem } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(
    skillCategories[0].items[0]
  );

  const currentCat =
    skillCategories.find((c) => c.id === activeId) || skillCategories[0];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
            <span className="w-6 h-[2px] bg-[#e50914]" />
            <span>GENRES</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-white mt-2">
            MY SKILL UNIVERSE
          </h2>
        </div>
        <p className="text-xs text-zinc-400 max-w-xs">
          Hover or tap any skill card to inspect where it powers Mahi&apos;s Originals and certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Vertical Genre Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          {skillCategories.map((cat) => {
            const active = cat.id === activeId;
            return (
              <button
                key={cat.id}
                data-cursor="play"
                onClick={() => {
                  setActiveId(cat.id);
                  setSelectedSkill(cat.items[0]);
                }}
                className={`w-full text-left px-5 py-3.5 rounded-xl border transition-all ${
                  active
                    ? 'bg-gradient-to-r from-red-950/60 to-zinc-900 border-[#e50914] shadow-lg'
                    : 'bg-zinc-950/50 border-white/10 hover:border-white/25'
                }`}
              >
                <div className="font-display text-2xl tracking-wider text-white leading-none">
                  {cat.genre}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  {cat.countLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Skill Cards Grid */}
        <div className="lg:col-span-8 space-y-5">
          <div className="text-xs text-zinc-400 font-medium">
            {currentCat.tagline}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentCat.items.map((item) => {
              const isSelected = selectedSkill?.name === item.name;
              return (
                <button
                  key={item.name}
                  data-cursor="play"
                  onClick={() => setSelectedSkill(item)}
                  className={`text-left group relative rounded-2xl p-5 border transition-all duration-300 min-h-[155px] flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-br from-red-950/70 via-zinc-900 to-black border-[#e50914] shadow-[0_0_25px_rgba(229,9,20,0.25)] -translate-y-0.5'
                      : item.primary
                      ? 'bg-gradient-to-br from-red-950/40 via-zinc-900 to-black border-[#e50914]/40 hover:border-[#e50914]'
                      : 'bg-zinc-900/60 border-white/10 hover:border-white/35'
                  }`}
                >
                  {/* Top Large Monogram Code */}
                  <div className="font-display text-4xl tracking-wider text-white/25 group-hover:text-white/45 transition">
                    {item.code}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-bold text-white">
                        {item.name}
                      </span>
                      {item.primary && (
                        <span className="bg-[#e50914] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1.5 leading-snug">
                      {item.evidence}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedSkill && (
            <div className="bg-zinc-900/80 border border-white/15 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#e50914] font-bold">
                  ACTIVE SKILL SPOTLIGHT • {selectedSkill.code}
                </span>
                <div className="text-sm font-bold text-white mt-0.5">
                  {selectedSkill.name} — <span className="font-normal text-zinc-300">{selectedSkill.evidence}</span>
                </div>
              </div>
              <a
                href="#originals"
                data-cursor="play"
                className="text-xs text-white bg-white/10 hover:bg-[#e50914] px-3.5 py-2 rounded-lg font-semibold shrink-0 transition"
              >
                See in Originals →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
