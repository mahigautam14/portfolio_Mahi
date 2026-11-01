import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  viewerProfiles,
  ViewerProfile,
  Project
} from './data/portfolio';
import { useWatchProgress } from './hooks/useWatchProgress';
import { CustomCursor } from './components/CustomCursor';
import { OpeningSequence } from './components/OpeningSequence';
import { ProfileSelector } from './components/ProfileSelector';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlayIntro } from './components/PlayIntro';
import { ContinueWatching } from './components/ContinueWatching';
import { Originals } from './components/Originals';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Seasons } from './components/Seasons';
import { Achievements } from './components/Achievements';
import { TopPicks } from './components/TopPicks';
import { About } from './components/About';
import { ScreenplaySection, ResumeModal } from './components/ResumeModal';
import { FinalCTA } from './components/FinalCTA';

type Stage = 'opening' | 'profiles' | 'home';

export default function App() {
  const [stage, setStage] = useState<Stage>('opening');
  const [viewer, setViewer] = useState<ViewerProfile>(viewerProfiles[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [playIntroOpen, setPlayIntroOpen] = useState(false);
  const { progress, markWatched } = useWatchProgress();

  const handleNavigate = (sectionId: string) => {
    markWatched(sectionId, 100);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionComponents: Record<string, React.ReactNode> = {
    explore: (
      <ContinueWatching
        key="explore"
        progress={progress}
        onNavigate={handleNavigate}
      />
    ),
    about: <About key="about" onNavigate={handleNavigate} />,
    journey: <Seasons key="journey" />,
    originals: (
      <Originals
        key="originals"
        onSelectProject={(proj) => {
          markWatched('originals', 100);
          setSelectedProject(proj);
        }}
      />
    ),
    top10: <TopPicks key="top10" onNavigate={handleNavigate} />,
    skills: <Skills key="skills" />,
    achievements: <Achievements key="achievements" />,
    screenplay: (
      <ScreenplaySection
        key="screenplay"
        onOpenModal={() => setResumeOpen(true)}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 selection:bg-[#e50914] selection:text-white">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {stage === 'opening' && (
          <motion.div
            key="stage-opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <OpeningSequence onComplete={() => setStage('profiles')} />
          </motion.div>
        )}

        {stage === 'profiles' && (
          <motion.div
            key="stage-profiles"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfileSelector
              onSelect={(vp) => {
                setViewer(vp);
                setStage('home');
              }}
            />
          </motion.div>
        )}

        {stage === 'home' && (
          <motion.div
            key={`stage-home-${viewer.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar
              activeViewer={viewer}
              onChangeViewer={setViewer}
              onOpenResume={() => setResumeOpen(true)}
            />

            <main>
              <Hero
                onPlayIntro={() => setPlayIntroOpen(true)}
                onNavigate={handleNavigate}
              />
              {viewer.sectionOrder.map((secId) => sectionComponents[secId])}
            </main>

            <FinalCTA
              onWatchAgain={() => setPlayIntroOpen(true)}
              onReplayOpening={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setStage('opening');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PlayIntro open={playIntroOpen} onClose={() => setPlayIntroOpen(false)} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onOpenModal={() => setResumeOpen(true)}
      />
    </div>
  );
}