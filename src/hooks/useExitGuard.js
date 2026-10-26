// Hook: detiene la navegación mientras hay una partida en curso
// para poder preguntar "¿Seguro que quieres salir?".
import { useEffect } from 'react';
import { useBlocker } from 'react-router-dom';

export default function useExitGuard(active) {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) => active && currentLocation.pathname !== nextLocation.pathname,
  );

  // Si recargan o cierran la pestaña, el navegador también pregunta
  useEffect(() => {
    if (!active) return undefined;
    const onBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [active]);

  return blocker;
}
