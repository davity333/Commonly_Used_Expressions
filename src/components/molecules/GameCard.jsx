// Molécula: tarjeta para elegir un juego
import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';

function GameCard({ to, icon, title, description, meta, color }) {
  return (
    <Link to={to} className={`game-card game-card--${color}`}>
      <span className="game-card__icon">
        <Icon name={icon} size={34} />
      </span>
      <span className="game-card__body">
        <span className="game-card__title">{title}</span>
        <span className="game-card__desc">{description}</span>
        {meta && <span className="game-card__meta">{meta}</span>}
      </span>
      <span className="game-card__cta">
        Jugar
        <Icon name="arrowLeft" size={16} className="game-card__arrow" />
      </span>
    </Link>
  );
}

export default GameCard;
