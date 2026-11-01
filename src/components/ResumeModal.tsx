import React, { useEffect } from 'react';
import {
  profile,
  projects,
  skillCategories,
  achievements
} from '../data/portfolio';

interface Props {
  open: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

export const ScreenplaySection: React.FC<{ onOpenModal: () => void }> = ({
  onOpenModal,
}) => {
  return (
    <section
      id="screenplay"
      className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10"
    >
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
          <span className="w-6 h-[2px] bg-[#e50914]" />
          <span>THE SCREENPLAY</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-white mt-2">
          THE FULL STORY
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Designed Resume Sheet */}
        <div className="lg:col-span-8 bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-5 gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                STARRING
              </div>
              <h3 className="font-display text-4xl sm:text-5xl tracking-wider text-white mt-0.5">
                {profile.name}
              </h3>
            </div>
            <div className="text-xs text-zinc-400 sm:text-right space-y-0.5">
              <div>{profile.email}</div>
              <div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline"
                >
                  LinkedIn ↗
                </a>{' '}
                •{' '}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
            {/* Left Column: Education & Projects */}
            <div className="space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#e50914] font-bold mb-3">
                  EDUCATION
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between gap-2">
                    <div>
                      <div className="font-bold text-white">
                        National Institute of Technology Raipur
                      </div>
                      <div className="text-zinc-400">
                        Master of Computer Applications (MCA)
                      </div>
                    </div>
                    <div className="text-zinc-400 text-right shrink-0">
                      Aug 2024 – Present
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div>
                      <div className="font-bold text-white">
                        Bundelkhand University
                      </div>
                      <div className="text-zinc-400">
                        Bachelor of Science (B.Sc.)
                      </div>
                    </div>
                    <div className="text-zinc-400 text-right shrink-0">
                      Jul 2021 – Jul 2024
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#e50914] font-bold mb-3">
                  PROJECTS
                </div>
                <div className="space-y-3">
                  {projects.map((p) => (
                    <div key={p.id}>
                      <div className="flex justify-between font-bold text-white">
                        <span>{p.title}</span>
                        <span className="text-zinc-500">{p.year}</span>
                      </div>
                      <div className="text-zinc-400 mt-0.5">
                        {p.tech.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Skills, Achievements & Certifications */}
            <div className="space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#e50914] font-bold mb-3">
                  SKILLS
                </div>
                <div className="space-y-1.5 text-zinc-300">
                  {skillCategories.map((c) => (
                    <div key={c.id}>
                      <span className="font-bold text-white">{c.genre}: </span>
                      <span className="text-zinc-400">
                        {c.items.map((i) => i.name).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#e50914] font-bold mb-3">
                  ACHIEVEMENTS &amp; CERTIFICATIONS
                </div>
                <ul className="space-y-1.5 text-zinc-300">
                  {achievements.map((a) => (
                    <li key={a.id}>
                      <span className="font-bold text-white">{a.title}: </span>
                      <span className="text-zinc-400">{a.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sticky Action Card */}
        <div className="lg:col-span-4 bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5">
          <h3 className="font-serif-italic text-3xl text-white">
            Every episode, on one page.
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Education, projects, technical skills, achievements and verified certifications — view it here or take a copy with you.
          </p>

          <div className="space-y-3 pt-2">
            <button
              onClick={onOpenModal}
              data-cursor="view"
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wider py-3.5 rounded-lg transition"
            >
              <span>▶</span>
              <span>View Resume</span>
            </button>

            <a
              href={profile.resumeUrl}
              download="Mahi_Resume.pdf"
              data-cursor="play"
              className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-semibold text-xs uppercase tracking-wider py-3.5 rounded-lg transition"
            >
              <span>⬇</span>
              <span>Download Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
            {profile.screenplayStats.map((st) => (
              <div key={st.label}>
                <div className="font-display text-3xl text-white">
                  {st.value}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-zinc-500">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ResumeModal: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col"
      onClick={onClose}
    >
      {/* Top Bar matching video 01:12 */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-6 py-3.5 bg-zinc-950 border-b border-white/15 flex items-center justify-between"
      >
        <div className="font-display text-2xl tracking-wider text-white">
          THE FULL STORY
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Mahi_Resume.pdf"
            data-cursor="play"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold text-xs px-4 py-2 rounded-full transition"
          >
            <span>⬇ Download</span>
          </a>
          <button
            onClick={onClose}
            data-cursor="close"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e50914] text-white flex items-center justify-center text-xs transition"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-1 w-full max-w-6xl mx-auto p-4"
      >
        <iframe
          src={profile.resumeUrl}
          title="Mahi Resume PDF"
          className="w-full h-full rounded-xl border border-white/15 bg-zinc-900"
        />
      </div>
    </div>
  );
};
