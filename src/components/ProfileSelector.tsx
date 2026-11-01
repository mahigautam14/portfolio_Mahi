import React from 'react';
import { motion } from 'framer-motion';
import { viewerProfiles, ViewerProfile, profile } from '../data/portfolio';

interface Props {
  onSelect: (viewer: ViewerProfile) => void;
}

export const ProfileSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,12,20,0.18)_0%,transparent_65%)] pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-12 relative z-10"
      >
        Who&apos;s watching?
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl w-full relative z-10">
        {viewerProfiles.map((vp, idx) => (
          <motion.button
            key={vp.id}
            data-cursor="play"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.07 }}
            onClick={() => onSelect(vp)}
            className="group flex flex-col items-center text-center focus:outline-none"
          >
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/15 group-hover:border-white/60 transition-all duration-300 group-hover:scale-105 shadow-2xl mb-3.5 bg-[radial-gradient(circle_at_50%_35%,rgba(175,12,22,0.55)_0%,#09090d_85%)]">
              {vp.icon === 'PORTRAIT' ? (
                <>
                  <img
                    src={profile.portraitWebp480}
                    alt={vp.name}
                    className="w-full h-full object-contain object-bottom pt-2"
                  />
                  {vp.badge && (
                    <span className="absolute top-2 right-2 bg-[#e50914] text-white text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded">
                      {vp.badge}
                    </span>
                  )}
                </>
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${vp.bgClass} flex items-center justify-center`}
                >
                  <span className="text-3xl sm:text-4xl font-semibold text-white/90 group-hover:scale-110 transition">
                    {vp.icon}
                  </span>
                </div>
              )}
            </div>

            <h2 className="text-base font-semibold text-white group-hover:text-[#e50914] transition">
              {vp.name}
            </h2>
            <p className="text-[11px] text-zinc-400 mt-1 max-w-[150px] leading-snug">
              {vp.tagline}
            </p>
          </motion.button>
        ))}
      </div>

      <p className="text-xs text-zinc-500 mt-12 text-center max-w-md relative z-10">
        Every profile watches the same true story of {profile.fullName} — it only changes what plays first.
      </p>
    </div>
  );
};
