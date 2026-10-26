// Organismo: índice vertical A-Z (solo celular).
// Resalta la letra de la tarjeta que estás viendo y te lleva a una letra al tocarla.
import { useEffect, useMemo, useState } from 'react';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// Línea imaginaria al 30% de la pantalla: la tarjeta que la cruza es la que "estás viendo"
const LINE = 0.3;

function AlphabetIndex({ items }) {
  const available = useMemo(() => new Set(items.map((i) => i.expression[0].toUpperCase())), [items]);
  const [active, setActive] = useState(items[0]?.expression[0].toUpperCase() ?? 'A');

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const cards = document.querySelectorAll('[data-letter]');
      const line = window.innerHeight * LINE;
      let current = null;
      for (const card of cards) {
        if (card.getBoundingClientRect().top <= line) current = card.dataset.letter;
        else break;
      }
      setActive(current ?? cards[0]?.dataset.letter ?? 'A');
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (letter) => {
    const card = document.querySelector(`[data-letter="${letter}"]`);
    if (!card) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    setActive(letter);
  };

  return (
    <nav className="alpha-index" aria-label="Ir a la letra">
      {ALPHABET.map((letter) => {
        const has = available.has(letter);
        return (
          <button
            key={letter}
            type="button"
            className={`alpha-index__letter ${letter === active ? 'is-active' : ''} ${has ? '' : 'is-empty'}`}
            onClick={() => goTo(letter)}
            disabled={!has}
            aria-current={letter === active ? 'true' : undefined}
            aria-label={has ? `Ir a la letra ${letter}` : `Sin expresiones con ${letter}`}
          >
            {letter}
          </button>
        );
      })}
    </nav>
  );
}

export default AlphabetIndex;