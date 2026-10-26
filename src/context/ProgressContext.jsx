// Contexto: progreso del alumno (expresiones dominadas y mejores puntajes).
// Se guarda en el navegador (localStorage) para que no se pierda al recargar.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'cue-progress-v1';
const EMPTY = { known: [], best: {} };

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...EMPTY, ...saved } : EMPTY;
  } catch {
    return EMPTY;
  }
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* el navegador no permite guardar: el progreso dura solo esta sesión */
    }
  }, [progress]);

  const markKnown = useCallback((id) => {
    setProgress((p) => (p.known.includes(id) ? p : { ...p, known: [...p.known, id] }));
  }, []);

  const markReview = useCallback((id) => {
    setProgress((p) => ({ ...p, known: p.known.filter((k) => k !== id) }));
  }, []);

  const saveBest = useCallback((game, score) => {
    setProgress((p) =>
      score > (p.best[game] ?? -1) ? { ...p, best: { ...p.best, [game]: score } } : p,
    );
  }, []);

  const resetProgress = useCallback(() => setProgress(EMPTY), []);

  const value = useMemo(
    () => ({
      known: progress.known,
      best: progress.best,
      isKnown: (id) => progress.known.includes(id),
      markKnown,
      markReview,
      saveBest,
      resetProgress,
    }),
    [progress, markKnown, markReview, saveBest, resetProgress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  return useContext(ProgressContext);
}
