// Molécula: opción de respuesta (A, B, C, D) con estado correcto / incorrecto
import Icon from '../atoms/Icon';

const LETTERS = ['A', 'B', 'C', 'D'];

function OptionButton({ index, label, state = 'idle', disabled, onClick }) {
  return (
    <button type="button" className={`option-btn option-btn--${state}`} disabled={disabled} onClick={onClick}>
      <span className="option-btn__letter">
        {state === 'correct' ? <Icon name="check" size={16} strokeWidth={3} /> : null}
        {state === 'wrong' ? <Icon name="close" size={16} strokeWidth={3} /> : null}
        {state !== 'correct' && state !== 'wrong' ? LETTERS[index] : null}
      </span>
      <span className="option-btn__label">{label}</span>
    </button>
  );
}

export default OptionButton;
