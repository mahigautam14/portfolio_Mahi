import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'mahi_series_watch_progress_v1';

export interface WatchProgressMap {
  [key: string]: number;
}

const defaultProgress: WatchProgressMap = {
  originals: 78,
  skills: 65,
  journey: 85,
  achievements: 72,
  about: 90,
};

export function useWatchProgress() {
  const [progress, setProgress] = useState<WatchProgressMap>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage errors
    }
  }, [progress]);

  const markWatched = useCallback((sectionId: string, value = 100) => {
    setProgress((prev) => ({
      ...prev,
      [sectionId]: Math.max(prev[sectionId] || 0, Math.min(100, value)),
    }));
  }, []);

  return { progress, markWatched };
}
