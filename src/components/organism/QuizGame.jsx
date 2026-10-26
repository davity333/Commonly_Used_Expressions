// Organismo: quiz de opción múltiple
import { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ProgressBar from '../atoms/ProgressBar';
import OptionButton from '../molecules/OptionButton';
import StatPill from '../molecules/StatPill';
import AudioControls from '../molecules/AudioControls';
import Pronunciation from '../molecules/Pronunciation';
import GameShell from './GameShell';
import GameResult from './GameResult';
import { useProgress } from '../../context/ProgressContext';
import useSpeech from '../../hooks/useSpeech';
import { buildOptions, pickOne, shuffle } from '../../utils/random';

const TOTAL = 10;

const TYPES = {
  meaning: { tag: 'Inglés → Español', prompt: '¿Qué significa esta expresión?' },
  reverse: { tag: 'Español → Inglés', prompt: '¿Cómo se dice en inglés?' },
  definition: { tag: 'Definición', prompt: '¿Qué expresión corresponde a esta definición?' },
};

function buildQuiz(items) {
  return shuffle(items)
    .slice(0, TOTAL)
    .map((item) => ({
      item,
      type: pickOne(Object.keys(TYPES)),
      options: buildOptions(item, items),
    }));
}

function QuizGame({ items }) {
  const { best, saveBest } = useProgress();
  const { speak } = useSpeech();

  const [questions, setQuestions] = useState(() => buildQuiz(items));
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [finished, setFinished] = useState(false);
  const [isRecord, setIsRecord] = useState(false);

  const question = questions[index];
  const answered = chosen !== null;
  const isCorrect = answered && chosen === question.item.id;

  const choose = (option) => {
    if (answered) return;
    setChosen(option.id);
    if (option.id === question.item.id) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
      setMistakes((m) => [...m, question.item]);
    }
    speak(question.item.speak, 'normal');
  };

  const next = () => {
    if (index + 1 < TOTAL) {
      setIndex(index + 1);
      setChosen(null);
      return;
    }
    setIsRecord(score > (best.quiz ?? -1));
    saveBest('quiz', score);
    setFinished(true);
  };

  const restart = () => {
    setQuestions(buildQuiz(items));
    setIndex(0);
    setChosen(null);
    setScore(0);
    setStreak(0);
    setMistakes([]);
    setFinished(false);
    setIsRecord(false);
  };

  const optionState = (option) => {
    if (!answered) return 'idle';
    if (option.id === question.item.id) return 'correct';
    if (option.id === chosen) return 'wrong';
    return 'dim';
  };

  const optionLabel = (option) => (question.type === 'meaning' ? option.translation : option.expression);

  return (
    <GameShell
      title="Quiz"
      icon="quiz"
      active={!finished && (index > 0 || answered)}
      stats={
        !finished && (
          <>
            <StatPill icon="check" value={score} label="aciertos" />
            <StatPill icon="flame" value={streak} label="racha" variant="orange" />
          </>
        )
      }
    >
      {finished ? (
        <GameResult
          score={score}
          total={TOTAL}
          best={Math.max(best.quiz ?? 0, score)}
          isRecord={isRecord}
          mistakes={mistakes}
          onRetry={restart}
        />
      ) : (
        <section className="quiz">
          <div className="quiz__progress">
            <span>Pregunta {index + 1} de {TOTAL}</span>
            <ProgressBar value={index + (answered ? 1 : 0)} max={TOTAL} label="Progreso del quiz" />
          </div>

          <div className="quiz__question">
            <span className="quiz__tag">{TYPES[question.type].tag}</span>
            <p className="quiz__prompt">{TYPES[question.type].prompt}</p>

            {question.type === 'meaning' && (
              <>
                <h2 className="quiz__big">{question.item.expression}</h2>
                <AudioControls text={question.item.speak} label={question.item.expression} />
              </>
            )}
            {question.type === 'reverse' && <h2 className="quiz__big quiz__big--es">{question.item.translation}</h2>}
            {question.type === 'definition' && <p className="quiz__definition">“{question.item.definition}”</p>}
          </div>

          <div className="quiz__options">
            {question.options.map((option, i) => (
              <OptionButton
                key={option.id}
                index={i}
                label={optionLabel(option)}
                state={optionState(option)}
                disabled={answered}
                onClick={() => choose(option)}
              />
            ))}
          </div>

          {answered && (
            <div className={`feedback ${isCorrect ? 'feedback--good' : 'feedback--bad'}`} aria-live="polite">
              <p className="feedback__title">
                {isCorrect ? '¡Correcto! 🎉' : 'Casi... esta era la respuesta:'}
              </p>
              <p className="feedback__answer">
                <strong>{question.item.expression}</strong> = {question.item.translation}
              </p>
              <Pronunciation text={question.item.pronunciation} />
              <Button variant="primary" onClick={next} className="feedback__next">
                {index + 1 < TOTAL ? 'Siguiente' : 'Ver resultado'}
                <Icon name="arrowLeft" size={18} className="flip" />
              </Button>
            </div>
          )}
        </section>
      )}
    </GameShell>
  );
}

export default QuizGame;
