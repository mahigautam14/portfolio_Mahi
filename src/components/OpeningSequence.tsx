import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';

interface Props {
  onComplete: () => void;
}

export const OpeningSequence: React.FC<Props> = ({ onComplete }) => {
  // Stages: 0 = studio card ("A MAHI ORIGINAL"), 1 = Giant Title ("MAHI / THE SERIES"), 2 = Final Billboard Frame with True Cutout Portrait + PLAY button
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 650);
    const t2 = setTimeout(() => setStep(2), 1450);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('keydown', onKey);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070a] text-white overflow-hidden select-none">
      {/* Deep Crimson Vignette Glow behind the transparent portrait cutout */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(168,12,22,0.44)_0%,rgba(45,6,10,0.48)_42%,#07070a_76%)] pointer-events-none" />

      {/* Top-Right SKIP INTRO Pill */}
      <button
        onClick={onComplete}
        data-cursor="play"
        className="absolute top-6 right-7 z-30 text-[11px] uppercase tracking-[0.22em] text-zinc-300 hover:text-white bg-black/50 hover:bg-black/80 border border-white/15 px-4 py-2 rounded-full transition"
      >
        SKIP INTRO
      </button>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="studio-card"
            initial={{ opacity: 0, letterSpacing: '0.25em' }}
            animate={{ opacity: 1, letterSpacing: '0.55em' }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm uppercase text-zinc-300 font-medium tracking-[0.55em] text-center"
          >
            {profile.originalLabel}
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="title-reveal"
            initial={{ opacity: 0, scale: 1.18, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center px-4"
          >
            <h1 className="font-display text-7xl sm:text-[138px] leading-none tracking-[0.06em] text-white font-bold">
              {profile.name}
            </h1>
            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.55em] text-[#e50914] font-semibold">
              THE SERIES
            </p>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            key="final-opening-frame"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full flex flex-col items-center justify-between pt-8 pb-11 px-4"
          >
            {/* Top Giant Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="text-center z-10"
            >
              <h1 className="font-display text-7xl sm:text-[138px] leading-[0.86] tracking-[0.05em] text-white font-bold drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
                {profile.name}
              </h1>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.55em] text-[#e50914] font-semibold">
                THE SERIES
              </p>
            </motion.div>

            {/* Center Frameless Transparent Portrait Cutout */}
            <motion.div
              initial={{ y: 32, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="relative w-72 sm:w-88 md:w-[415px] aspect-square flex items-end justify-center -my-4 z-10 pointer-events-none"
            >
              <img
                src={profile.portraitWebp1080}
                alt={profile.name}
                className="w-full h-full object-contain object-bottom drop-shadow-[0_18px_55px_rgba(0,0,0,0.95)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07070a] via-[#07070a]/75 to-transparent" />
            </motion.div>

            {/* Bottom Role Subtitle + White Pill PLAY Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="flex flex-col items-center gap-5 z-20"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.38em] text-zinc-200 font-medium text-center">
                {profile.headline}
              </p>

              <button
                onClick={onComplete}
                data-cursor="play"
                className="inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-[0.22em] px-9 py-3.5 rounded-full shadow-[0_10px_35px_rgba(255,255,255,0.22)] transition transform hover:scale-105"
              >
                <span className="text-sm">▶</span>
                <span>PLAY</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
