import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projects, profile } from '../data/portfolio';

interface Props {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectModal: React.FC<Props> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-4xl w-full bg-[#0b0b10] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Top Banner */}
          <div className={`p-6 sm:p-10 bg-gradient-to-br ${project.gradient} relative border-b border-white/10`}>
            <button
              onClick={onClose}
              data-cursor="close"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-[#e50914] text-white flex items-center justify-center border border-white/20 transition"
            >
              ✕
            </button>

            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded bg-[#e50914] text-white font-display text-xs flex items-center justify-center font-bold">
                {profile.badgeLetter}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-300 font-semibold">
                ORIGINAL
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl text-white tracking-wider leading-none">
              {project.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2.5 mt-3 text-xs">
              <span className="text-emerald-400 font-semibold">{project.year}</span>
              {project.genres.map((g) => (
                <React.Fragment key={g}>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-300">{g}</span>
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm sm:text-base text-zinc-200 mt-4 max-w-2xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="play"
                  className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold px-5 py-2.5 rounded-lg text-xs transition"
                >
                  <span>▶ Live Demo ↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="play"
                  className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/20 font-semibold px-5 py-2.5 rounded-lg text-xs transition"
                >
                  <span>GitHub ↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* RESULT / IMPACT Row */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#e50914] font-bold mb-3">
                RESULT / IMPACT
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-zinc-900/70 border border-white/10 rounded-xl p-4"
                  >
                    <div className="font-display text-2xl sm:text-3xl text-white tracking-wider">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Two-Column Breakdown: MY CONTRIBUTION + TECH STACK & KEY FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-3">
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
                  MY CONTRIBUTION
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-200">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#e50914] mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 space-y-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-2.5">
                    TECH STACK
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-zinc-900 border border-white/15 text-zinc-200 px-3 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-2.5">
                    KEY FEATURES
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {project.keyFeatures.map((kf) => (
                      <li key={kf} className="flex items-start gap-2">
                        <span className="text-[#e50914]">✓</span>
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* More Originals Switcher */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-white mb-4">
                More Originals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherProjects.map((op) => (
                  <button
                    key={op.id}
                    data-cursor="view"
                    onClick={() => onSelectProject(op)}
                    className={`text-left rounded-xl p-5 border border-white/10 hover:border-white/35 bg-gradient-to-br ${op.gradient} transition`}
                  >
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#e50914] font-bold">
                      {op.tagline}
                    </div>
                    <div className="font-display text-2xl tracking-wider text-white mt-1">
                      {op.title}
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                      {op.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
