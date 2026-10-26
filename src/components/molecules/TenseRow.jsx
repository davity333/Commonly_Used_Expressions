// Molécula: un tiempo verbal (nombre, forma en inglés, cómo suena, traducción y audio)
import AudioControls from './AudioControls';
import Pronunciation from './Pronunciation';

const speakable = (text) => text.replace(/\s*\(.*?\)/g, '');

function TenseRow({ index, tense, form }) {
  return (
    <li className={`tense-row tense-row--${tense.color} ${form ? '' : 'tense-row--empty'}`}>
      <div className="tense-row__head">
        <span className="tense-row__num">{index}</span>
        <div>
          <p className="tense-row__name">{tense.name}</p>
          <p className="tense-row__en">{tense.en}</p>
        </div>
      </div>

      {form ? (
        <div className="tense-row__body">
          <div className="tense-row__main">
            <p className="tense-row__form">{form.en}</p>
            <p className="tense-row__translation">= {form.es}</p>
          </div>
          <Pronunciation text={form.pron} size="sm" />
          <AudioControls text={speakable(form.en)} label={form.en} compact />
        </div>
      ) : (
        <p className="tense-row__none">No se usa con esta expresión.</p>
      )}

      <p className="tense-row__hint">{tense.hint}</p>
    </li>
  );
}

export default TenseRow;
