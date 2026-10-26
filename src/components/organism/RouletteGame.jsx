// Organismo: juego de la ruleta
import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../atoms/Icon';
import StatPill from '../molecules/StatPill';
import GameShell from './GameShell';
import RouletteWheel from './RouletteWheel';
import RouletteChallenge from './RouletteChallenge';
import { useProgress } from '../../context/ProgressContext';
import useSpeech from '../../hooks/useSpeech';
import { pickOne, shuffle } from '../../utils/random';

const SEGMENTS = 10;
const SPIN_MS = 4200;

const CHALLENGES = [
  { id: 'translate', icon: 'translate', title: '¿Qué significa en español?', hint: 'Dilo en voz alta antes de ver la respuesta.' },
  { id: 'meaning', icon: 'lightbulb', title: 'Explica cuándo se usa', hint: 'Con tus palabras, en inglés o en español.' },
  { id: 'repeat', icon: 'volume', title: 'Escúchala y repítela', hint: 'Repite en voz alta imitando el sonido. Usa "Despacio" si lo necesitas.' },
  { id: 'sentence', icon: 'chat', title: 'Di una oración con ella', hint: 'Piensa: ¿quién?, ¿qué pasó?, ¿cuándo?' },
  { id: 'situation', icon: 'sparkle', title: '¿En qué situación la usarías?', hint: 'Imagina un momento real de tu vida.' },
];

// Primero las que aún no domina, luego las demás
function pickSegments(items, knownIds) {
  const pending = shuffle(items.filter((i) => !knownIds.includes(i.id)));
  const known = shuffle(items.filter((i) => knownIds.includes(i.id)));
  return [...pending, ...known].slice(0, SEGMENTS);
}

function RouletteGame({ items }) {
  const { known, markKnown, markReview } = useProgress();
  const { speak } = useSpeech();

  const [segments, setSegments] = useState(() => pickSegments(items, known));
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState(null);
  const [challenge, setChallenge] = useState(null);
  const [example, setExample] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [stats, setStats] = useState({ spins: 0, streak: 0 });

  const reduceMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    [],
  );
  const duration = reduceMotion ? 400 : SPIN_MS;
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const spin = () => {
    if (spinning || selected !== null) return;
    const index = Math.floor(Math.random() * segments.length);
    const angle = 360 / segments.length;
    const current = ((rotation % 360) + 360) % 360;
    const target = (360 - (index * angle + angle / 2)) % 360;
    let delta = target - current;
    if (delta < 0) delta += 360;

    setRotation(rotation + 360 * 5 + delta);
    setSpinning(true);
    setRevealed(false);

    timer.current = setTimeout(() => {
      const item = segments[index];
      const nextChallenge = pickOne(CHALLENGES);
      setSpinning(false);
      setSelected(index);
      setChallenge(nextChallenge);
      setExample(pickOne(item.examples));
      setStats((s) => ({ ...s, spins: s.spins + 1 }));
      if (nextChallenge.id === 'repeat') speak(item.speak, 'normal');
    }, duration + 100);
  };

  const answer = (knew) => {
    const item = segments[selected];
    const knownAfter = knew ? [...known, item.id] : known.filter((k) => k !== item.id);

    if (knew) {
      markKnown(item.id);
      setStats((s) => ({ ...s, streak: s.streak + 1 }));
    } else {
      markReview(item.id);
      setStats((s) => ({ ...s, streak: 0 }));
    }

    // Cambia esa casilla por otra expresión que no esté en la rueda
    const onWheel = segments.map((s) => s.id);
    const pool = items.filter((i) => !onWheel.includes(i.id));
    const pending = pool.filter((i) => !knownAfter.includes(i.id));
    const replacement = pickOne(pending.length ? pending : pool);
    if (replacement) {
      setSegments((segs) => segs.map((s, i) => (i === selected ? replacement : s)));
    }

    setSelected(null);
    setChallenge(null);
    setRevealed(false);
  };

  const active = stats.spins > 0 || spinning || selected !== null;
  const current = selected !== null ? segments[selected] : null;

  return (
    <GameShell
      title="Ruleta"
      icon="wheel"
      active={active}
      stats={
        <>
          <StatPill icon="check" value={`${known.length}/${items.length}`} label="dominadas" />
          <StatPill icon="flame" value={stats.streak} label="racha" variant="orange" />
          <StatPill icon="refresh" value={stats.spins} label="giros" variant="blue" />
        </>
      }
    >
      <div className="roulette">
        <RouletteWheel
          segments={segments}
          rotation={rotation}
          duration={duration}
          spinning={spinning}
          disabled={spinning || selected !== null}
          onSpin={spin}
        />

        <div className="roulette__panel" aria-live="polite">
          {current ? (
            <RouletteChallenge
              item={current}
              challenge={challenge}
              example={example}
              revealed={revealed}
              onReveal={() => setRevealed(true)}
              onAnswer={answer}
            />
          ) : (
            <div className="roulette__intro">
              <Icon name="wheel" size={42} />
              <h2>{spinning ? '¡Girando...!' : 'Gira la ruleta'}</h2>
              <p>
                Te tocará una expresión y un reto al azar. Contesta en voz alta, revisa la respuesta y
                califícate con honestidad.
              </p>
              <ul>
                <li><strong>¡Me la sé!</strong> → sale menos y se marca como dominada.</li>
                <li><strong>Repasar</strong> → se queda en la ronda para practicarla más.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </GameShell>
  );
}

export default RouletteGame;
