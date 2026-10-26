// Organismo: reto que sale después de girar la ruleta
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import AudioControls from '../molecules/AudioControls';
import Pronunciation from '../molecules/Pronunciation';
import FormulaChips from '../molecules/FormulaChips';

function RouletteChallenge({ item, challenge, example, revealed, onReveal, onAnswer }) {
  const showAudioFirst = challenge.id === 'repeat';

  return (
    <div className="challenge">
      <div className="challenge__top">
        <Badge>{String(item.id).padStart(2, '0')}</Badge>
        <h2 className="challenge__expression">{item.expression}</h2>
      </div>

      <div className={`challenge__task challenge__task--${challenge.id}`}>
        <Icon name={challenge.icon} size={22} />
        <div>
          <p className="challenge__task-title">{challenge.title}</p>
          <p className="challenge__task-hint">{challenge.hint}</p>
        </div>
      </div>

      {showAudioFirst && !revealed && (
        <div className="challenge__audio">
          <Pronunciation text={item.pronunciation} />
          <AudioControls text={item.speak} label={item.expression} />
        </div>
      )}

      {!revealed ? (
        <Button variant="primary" className="challenge__reveal" onClick={onReveal}>
          <Icon name="eye" size={18} />
          Ver respuesta
        </Button>
      ) : (
        <div className="challenge__answer">
          <p className="challenge__translation">
            <Icon name="translate" size={18} />
            {item.translation}
          </p>
          <div className="challenge__audio">
            <Pronunciation text={item.pronunciation} />
            <AudioControls text={item.speak} label={item.expression} />
          </div>
          <p className="challenge__definition">{item.definitionEs}</p>
          {item.structure && <FormulaChips formula={item.structure.formula} />}
          <div className="challenge__example">
            <p className="challenge__example-en">“{example.en}”</p>
            <p className="challenge__example-es">{example.es}</p>
          </div>

          <p className="challenge__question">¿Te la sabías?</p>
          <div className="challenge__actions">
            <Button variant="review" onClick={() => onAnswer(false)}>
              <Icon name="refresh" size={18} />
              Repasar
            </Button>
            <Button variant="success" onClick={() => onAnswer(true)}>
              <Icon name="check" size={18} strokeWidth={3} />
              ¡Me la sé!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RouletteChallenge;
