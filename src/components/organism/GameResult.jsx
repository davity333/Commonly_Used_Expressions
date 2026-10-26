// Organismo: pantalla final de una partida
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import AudioControls from '../molecules/AudioControls';

function getMessage(percent) {
  if (percent >= 90) return { title: '¡Excelente!', text: 'Dominas estas expresiones como un nativo.', emoji: '🏆' };
  if (percent >= 70) return { title: '¡Muy bien!', text: 'Ya casi las tienes todas.', emoji: '🎉' };
  if (percent >= 50) return { title: 'Vas bien', text: 'Repasa las que fallaste y vuelve a intentarlo.', emoji: '💪' };
  return { title: 'Sigue practicando', text: 'Revisa las tarjetas y vuelve a jugar, ¡tú puedes!', emoji: '📚' };
}

function GameResult({ score, total, best, isRecord, mistakes, onRetry }) {
  const message = getMessage((score / total) * 100);

  return (
    <section className="game-result">
      <span className="game-result__emoji" aria-hidden="true">{message.emoji}</span>
      <h2 className="game-result__title">{message.title}</h2>
      <p className="game-result__score">
        <strong>{score}</strong> / {total}
      </p>
      <p className="game-result__text">{message.text}</p>

      <p className="game-result__best">
        <Icon name="trophy" size={16} />
        {isRecord ? '¡Nuevo récord!' : `Tu récord: ${best} / ${total}`}
      </p>

      {mistakes.length > 0 && (
        <div className="game-result__review">
          <h3>Para repasar</h3>
          <ul>
            {mistakes.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.expression}</strong>
                  <span>{item.translation}</span>
                </div>
                <AudioControls text={item.speak} label={item.expression} compact />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="game-result__actions">
        <Button variant="primary" onClick={onRetry}>
          <Icon name="refresh" size={18} />
          Jugar otra vez
        </Button>
        <Link to="/juegos" className="btn btn--secondary">
          <Icon name="gamepad" size={18} />
          Otros juegos
        </Link>
      </div>
    </section>
  );
}

export default GameResult;
