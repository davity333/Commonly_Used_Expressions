// Organismo: "¿Qué escuchaste?" — escucha el audio y elige la expresión
import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ProgressBar from '../atoms/ProgressBar';
import OptionButton from '../molecules/OptionButton';
import StatPill from '../molecules/StatPill';
import Pronunciation from '../molecules/Pronunciation';
import GameShell from './GameShell';
import GameResult from './GameResult';
import { useProgress } from '../../context/ProgressContext';
import useSpeech from '../../hooks/useSpeech';
import { buildOptions, shuffle } from '../../utils/random';

const TOTAL = 10;

function buildRounds(items) {
  return shuffle(items)
    .slice(0, TOTAL)
    .map((item) => ({ item, options: buildOptions(item, items) }));
}

function ListenGame({ items }) {
  const { best, saveBest } = useProgress();
  const { supported, speak, speaking } = useSpeech();

  const [rounds, setRounds] = useState(() => buildRounds(items));
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [finished, setFinished] = useState(false);
  const [isRecord, setIsRecord] = useState(false);

  const round = rounds[index];
  const answered = chosen !== null;
  const isCorrect = answered && chosen === round.item.id;

  const start = () => {
    setStarted(true);
    speak(rounds[0].item.speak, 'normal');
  };

  const choose = (option) => {
    if (answered) return;
    setChosen(option.id);
    if (option.id === round.item.id) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
      setMistakes((m) => [...m, round.item]);
    }
  };

  const next = () => {
    if (index + 1 < TOTAL) {
      setIndex(index + 1);
      setChosen(null);
      speak(rounds[index + 1].item.speak, 'normal');
      return;
    }
    setIsRecord(score > (best.listen ?? -1));
    saveBest('listen', score);
    setFinished(true);
  };

  const restart = () => {
    const fresh = buildRounds(items);
    setRounds(fresh);
    setIndex(0);
    setChosen(null);
    setScore(0);
    setStreak(0);
    setMistakes([]);
    setFinished(false);
    setIsRecord(false);
    setStarted(true);
    speak(fresh[0].item.speak, 'normal');
  };

  const optionState = (option) => {
    if (!answered) return 'idle';
    if (option.id === round.item.id) return 'correct';
    if (option.id === chosen) return 'wrong';
    return 'dim';
  };

  return (
    <GameShell
      title="¿Qué escuchaste?"
      icon="headphones"
      active={started && !finished}
      stats={
        started && !finished && (
          <>
            <StatPill icon="check" value={score} label="aciertos" />
            <StatPill icon="flame" value={streak} label="racha" variant="orange" />
          </>
        )
      }
    >
      {!supported && (
        <p className="listen__warning">Tu navegador no permite reproducir audio. Prueba en Chrome o Edge.</p>
      )}

      {!started && supported && (
        <section className="listen__start">
          <span className="listen__start-icon">
            <Icon name="headphones" size={48} />
          </span>
          <h2>Entrena tu oído</h2>
          <p>
            Vas a escuchar {TOTAL} expresiones <strong>sin ver el texto</strong>. Elige cuál fue. Puedes repetir el
            audio las veces que quieras, normal o despacio.
          </p>
          <p className="listen__tip">🔈 Sube el volumen o usa audífonos.</p>
          <Button variant="primary" onClick={start}>
            <Icon name="volume" size={18} />
            Empezar
          </Button>
        </section>
      )}

      {started && finished && (
        <GameResult
          score={score}
          total={TOTAL}
          best={Math.max(best.listen ?? 0, score)}
          isRecord={isRecord}
          mistakes={mistakes}
          onRetry={restart}
        />
      )}

      {started && !finished && (
        <section className="quiz">
          <div className="quiz__progress">
            <span>Audio {index + 1} de {TOTAL}</span>
            <ProgressBar value={index + (answered ? 1 : 0)} max={TOTAL} label="Progreso" />
          </div>

          <div className="listen__player">
            <button
              type="button"
              className={`listen__play ${speaking === 'normal' ? 'is-playing' : ''}`}
              onClick={() => speak(round.item.speak, 'normal')}
              aria-label="Escuchar otra vez"
            >
              <Icon name="volume" size={44} />
            </button>
            <div className="listen__controls">
              <Button variant="ghost" onClick={() => speak(round.item.speak, 'normal')}>
                <Icon name="volume" size={17} />
                Otra vez
              </Button>
              <Button
                variant="structure"
                className={speaking === 'slow' ? 'is-playing' : ''}
                onClick={() => speak(round.item.speak, 'slow')}
              >
                <Icon name="turtle" size={17} />
                Despacio
              </Button>
            </div>
          </div>

          <div className="quiz__options">
            {round.options.map((option, i) => (
              <OptionButton
                key={option.id}
                index={i}
                label={option.expression}
                state={optionState(option)}
                disabled={answered}
                onClick={() => choose(option)}
              />
            ))}
          </div>

          {answered && (
            <div className={`feedback ${isCorrect ? 'feedback--good' : 'feedback--bad'}`} aria-live="polite">
              <p className="feedback__title">{isCorrect ? '¡Buen oído! 🎧' : 'Casi... sonaba así:'}</p>
              <p className="feedback__answer">
                <strong>{round.item.expression}</strong> = {round.item.translation}
              </p>
              <Pronunciation text={round.item.pronunciation} />
              <Button variant="primary" onClick={next} className="feedback__next">
                {index + 1 < TOTAL ? 'Siguiente audio' : 'Ver resultado'}
                <Icon name="arrowLeft" size={18} className="flip" />
              </Button>
            </div>
          )}
        </section>
      )}
    </GameShell>
  );
}

export default ListenGame;
