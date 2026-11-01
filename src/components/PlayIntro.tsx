import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { introSlides, profile } from '../data/portfolio';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const PlayIntro: React.FC<Props> = ({ open, onClose }) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Snappy 2.2 seconds per slide
  const SLIDE_MS = 2200;

  useEffect(() => {
    if (!open) {
      setIdx(0);
      setPaused(false);
      setProgress(0);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
      if (e.key === 'ArrowRight') {
        setIdx((i) => (i + 1) % introSlides.length);
        setProgress(0);
      }
      if (e.key === 'ArrowLeft') {
        setIdx((i) => (i - 1 + introSlides.length) % introSlides.length);
        setProgress(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || paused) return;
    const stepMs = 40;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIdx((i) => (i + 1) % introSlides.length);
          return 0;
        }
        return prev + (stepMs / SLIDE_MS) * 100;
      });
    }, stepMs);
    return () => clearInterval(timer);
  }, [open, paused]);

  if (!open) return null;

  const slide = introSlides[idx];

  return (
    <div className="fixed inset-0 z-50 bg-[#07070a] text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Dimmed Fullscreen Portrait Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={profile.portraitWebp1080}
          alt={profile.name}
          className="w-[520px] max-w-[85vw] aspect-square object-cover object-top opacity-25 blur-[1px] rounded-full"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,12,20,0.28)_0%,#07070a_75%)]" />
      </div>

      {/* Top 6-Segment Story Progress Bars */}
      <div className="relative z-20 max-w-6xl w-full mx-auto pt-6 px-6">
        <div className="grid grid-cols-6 gap-2.5">
          {introSlides.map((_, i) => (
            <button
              key={i}
              data-cursor="play"
              onClick={() => {
                setIdx(i);
                setProgress(0);
              }}
              className="h-1 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-white transition-all duration-75"
                style={{
                  width: i < idx ? '100%' : i === idx ? `${Math.min(100, progress)}%` : '0%',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Center Slide Typography */}
      <div
        onClick={() => {
          setIdx((i) => (i + 1) % introSlides.length);
          setProgress(0);
        }}
        data-cursor="play"
        className="relative z-20 max-w-4xl w-full mx-auto my-auto px-6 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="text-xs uppercase tracking-[0.45em] text-[#e50914] font-semibold">
              {slide.epLabel}
            </div>

            <h2 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-wider text-white leading-none font-bold">
              {slide.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-200 max-w-xl mx-auto">
              {slide.line1}
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 whitespace-pre-line max-w-xl mx-auto leading-relaxed">
              {slide.line2}
            </p>

            {slide.pills && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
                {slide.pills.map((p) => (
                  <span
                    key={p}
                    className="text-xs bg-black/60 border border-white/20 text-zinc-200 px-3.5 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 max-w-6xl w-full mx-auto pb-7 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setPaused((p) => !p)}
            data-cursor="play"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-xs text-white transition"
          >
            {paused ? '▶' : '❚❚'}
          </button>
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400">
            SPACE • ← → • ESC
          </span>
        </div>

        <button
          onClick={onClose}
          data-cursor="close"
          className="bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-lg transition"
        >
          BACK TO BROWSE
        </button>
      </div>
    </div>
  );
};
