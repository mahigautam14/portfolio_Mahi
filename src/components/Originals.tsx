import React from 'react';
import { projects, Project, profile } from '../data/portfolio';

interface Props {
  onSelectProject: (p: Project) => void;
}

export const Originals: React.FC<Props> = ({ onSelectProject }) => {
  return (
    <section id="originals" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
            <span className="w-6 h-[2px] bg-[#e50914]" />
            <span>3 ORIGINALS • 2025</span>
          </div>
          <h2 className="font-display text-6xl sm:text-7xl tracking-wider text-white leading-none">
            ORIGINALS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xs">
            Three productions from the resume — a real-time streaming AI chatbot, a GitHub analytics platform, and an ESP32 Wi-Fi CSI sensing pipeline. Open any title for the full story.
          </p>
          <div className="pt-2 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            CLICK ANY CARD TO INSPECT →
          </div>
        </div>

        {/* Right Cards Rail */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              data-cursor="view"
              onClick={() => onSelectProject(proj)}
              className={`group relative rounded-2xl overflow-hidden border border-white/15 hover:border-[#e50914]/70 bg-gradient-to-br ${proj.gradient} p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl min-h-[410px]`}
            >
              {/* Subtle Decorative Vector Artwork on Right */}
              <div className="absolute right-4 top-12 opacity-20 group-hover:opacity-35 transition pointer-events-none">
                {proj.iconType === 'ai' && (
                  <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                    <path d="M60 12L102 34V86L60 108L18 86V34L60 12Z" stroke="#e50914" strokeWidth="2.5" />
                    <circle cx="60" cy="60" r="22" stroke="#e50914" strokeWidth="2" />
                  </svg>
                )}
                {proj.iconType === 'analytics' && (
                  <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                    <rect x="16" y="24" width="88" height="72" rx="10" stroke="#f59e0b" strokeWidth="2.5" />
                    <path d="M30 74L50 52L68 64L90 38" stroke="#f59e0b" strokeWidth="3" />
                  </svg>
                )}
                {proj.iconType === 'iot' && (
                  <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="44" stroke="#10b981" strokeWidth="2" strokeDasharray="6 6" />
                    <circle cx="60" cy="60" r="26" stroke="#10b981" strokeWidth="2.5" />
                    <circle cx="60" cy="60" r="8" fill="#10b981" />
                  </svg>
                )}
              </div>

              {/* Top Row: M ORIGINAL + Year */}
              <div className="flex items-center justify-between text-xs relative z-10">
                <div className="inline-flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#e50914] text-white font-display text-xs flex items-center justify-center font-bold">
                    {profile.badgeLetter}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-300 font-semibold">
                    ORIGINAL
                  </span>
                </div>
                <span className="text-[11px] bg-black/50 border border-white/15 text-zinc-300 px-2.5 py-0.5 rounded">
                  {proj.year}
                </span>
              </div>

              {/* Middle Content */}
              <div className="my-auto pt-8 relative z-10">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#e50914] font-bold">
                  {proj.tagline}
                </div>
                <h3 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-1 leading-none">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-300/90 mt-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Tech Pills + Buttons */}
              <div className="pt-5 mt-5 border-t border-white/10 relative z-10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] bg-black/45 border border-white/15 text-zinc-200 px-2.5 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(proj);
                    }}
                    data-cursor="view"
                    className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold text-xs px-4 py-2 rounded-md transition"
                  >
                    <span>▶</span>
                    <span>View Project</span>
                  </button>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="play"
                      className="inline-flex items-center gap-1.5 bg-[#e50914] hover:bg-red-700 text-white font-semibold text-xs px-3.5 py-2 rounded-md transition"
                    >
                      <span>Live Demo ↗</span>
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="play"
                      className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-black text-white border border-white/20 font-medium text-xs px-3.5 py-2 rounded-md transition"
                    >
                      <span>GitHub ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
