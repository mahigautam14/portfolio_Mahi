import React, { useState, useEffect } from 'react';
import { profile, ViewerProfile, viewerProfiles } from '../data/portfolio';

interface Props {
  activeViewer: ViewerProfile;
  onChangeViewer: (v: ViewerProfile) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeViewer,
  onChangeViewer,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Originals', href: '#originals' },
    { label: 'Top Picks', href: '#top10' },
    { label: 'Skills', href: '#skills' },
    { label: 'Moments', href: '#achievements' },
    { label: 'Resume', href: '#screenplay' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07070a]/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a href="#top" data-cursor="play" className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#e50914] text-white font-display text-base flex items-center justify-center font-bold">
              {profile.badgeLetter}
            </span>
            <span className="font-display text-xl tracking-[0.2em] text-white">
              SERIES
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="play"
                className="text-xs text-zinc-300 hover:text-white transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            data-cursor="play"
            className="text-[11px] uppercase tracking-[0.18em] font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/15 transition"
          >
            LET&apos;S BUILD
          </a>

          <div className="relative">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              data-cursor="play"
              className="flex items-center gap-1.5 bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 rounded-full p-1 pr-2.5 text-xs text-zinc-200"
              title="Switch Viewer Profile"
            >
              <img
                src={profile.portraitWebp480}
                alt={profile.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-[10px] text-zinc-400">▾</span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-zinc-950 border border-white/15 rounded-xl shadow-2xl p-2 z-50">
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-500">
                  Switch Viewer Lens
                </div>
                {viewerProfiles.map((vp) => (
                  <button
                    key={vp.id}
                    onClick={() => {
                      onChangeViewer(vp);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition ${
                      vp.id === activeViewer.id
                        ? 'bg-[#e50914]/20 text-white font-semibold'
                        : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{vp.name}</span>
                    <span className="text-[10px] text-zinc-400">{vp.icon === 'PORTRAIT' ? '★' : vp.icon}</span>
                  </button>
                ))}
                <div className="border-t border-white/10 mt-1 pt-1">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-[#e50914] hover:bg-white/5 font-semibold"
                  >
                    View PDF Resume
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
