import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, certifications, profile } from '../data/portfolio';

export const Achievements: React.FC = () => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('ALL');
  const [certModalOpen, setCertModalOpen] = useState(false);

  const issuers = ['ALL', 'Mercor', 'HackerRank', 'MySirG', 'iNeuron'];
  const filteredCerts =
    selectedIssuer === 'ALL'
      ? certifications
      : certifications.filter((c) => c.category === selectedIssuer);

  return (
    <section
      id="achievements"
      className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-white/10"
    >
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#e50914] font-semibold">
          <span className="w-6 h-[2px] bg-[#e50914]" />
          <span>AWARDS SEASON</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl tracking-wider text-white mt-2">
          TOP MOMENTS
        </h2>
      </div>

      {/* 5 Laurel-Wreath Award Poster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            data-cursor="play"
            className="bg-gradient-to-b from-[#1a1408] via-zinc-950 to-black border border-amber-500/25 hover:border-amber-400/60 rounded-2xl p-6 text-center flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
          >
            <div>
              {/* Gold Laurel Wreath SVG */}
              <div className="flex justify-center mb-3 text-amber-400">
                <svg width="46" height="32" viewBox="0 0 46 32" fill="none">
                  <path
                    d="M14 28C7 24 4 16 6 6C10 9 13 15 15 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32 28C39 24 42 16 40 6C36 9 33 15 31 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="23" cy="14" r="3" fill="currentColor" />
                </svg>
              </div>

              <div className="text-[9px] uppercase tracking-[0.28em] text-amber-400/90 font-bold">
                {ach.kicker}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-white mt-2 leading-tight">
                {ach.title}
              </h3>

              <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold mt-1">
                {ach.subtitle}
              </div>

              <div className="w-8 h-[1px] bg-amber-500/30 mx-auto my-3.5" />

              <p className="text-xs text-zinc-300 leading-relaxed">
                {ach.description}
              </p>
            </div>

            {ach.certificateImage && (
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => setCertModalOpen(true)}
                  data-cursor="view"
                  className="text-xs text-amber-300 hover:text-white underline underline-offset-4 font-semibold"
                >
                  View certificate ↗
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certified • 4 Credentials Rail */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Certified • {certifications.length} credentials
          </h3>

          <div className="flex flex-wrap gap-2 text-xs">
            {issuers.map((iss) => (
              <button
                key={iss}
                data-cursor="play"
                onClick={() => setSelectedIssuer(iss)}
                className={`px-3 py-1 rounded-full transition ${
                  selectedIssuer === iss
                    ? 'bg-[#e50914] text-white font-semibold'
                    : 'text-zinc-400 hover:text-white bg-white/5'
                }`}
              >
                {iss}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              data-cursor={cert.certificateImage ? 'view' : 'play'}
              onClick={() => {
                if (cert.certificateImage) setCertModalOpen(true);
              }}
              className="bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-white/35 rounded-xl p-5 flex flex-col justify-between min-h-[140px] transition"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#e50914] font-bold">
                <span>{cert.issuer}</span>
                <span>↗</span>
              </div>

              <div className="my-auto pt-3">
                <div className="text-sm font-bold text-white leading-snug">
                  {cert.title}
                </div>
                {cert.credentialId && (
                  <div className="text-[11px] text-zinc-400 font-mono mt-1">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {cert.certificateImage && (
                <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-amber-300 font-semibold">
                    Click to view certificate
                  </span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-300 hover:text-white underline"
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mercor Certificate Lightbox Modal */}
      <AnimatePresence>
        {certModalOpen && (
          <div
            onClick={() => setCertModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-zinc-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-4 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  MERCOR CERTIFICATE OF RECOGNITION • {profile.mercorCertId}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.mercorCertVerifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs bg-[#e50914] hover:bg-red-700 text-white font-semibold px-3.5 py-1.5 rounded-lg"
                  >
                    Verify Online ↗
                  </a>
                  <button
                    onClick={() => setCertModalOpen(false)}
                    data-cursor="close"
                    className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-black flex justify-center">
                <img
                  src={profile.mercorCertImage}
                  alt="Mercor Certificate - Mahi"
                  className="max-h-[75vh] w-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
