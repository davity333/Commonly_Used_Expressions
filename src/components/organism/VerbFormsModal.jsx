// Organismo: modal con todos los tiempos verbales de una expresión
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import AudioControls from '../molecules/AudioControls';
import Pronunciation from '../molecules/Pronunciation';
import TenseRow from '../molecules/TenseRow';
import Modal from './Modal';
import useSpeech from '../../hooks/useSpeech';
import { TENSES } from '../../assets/data/verbFormsVol1';

function VerbFormsModal({ open, onClose, data }) {
  const { speak, speaking } = useSpeech();
  const verbs = data.verbForms;
  const titleId = `tenses-title-${data.id}`;

  const playAll = (mode) => {
    const text = TENSES.map((t) => verbs.forms[t.key]?.en)
      .filter(Boolean)
      .map((en) => en.replace(/\s*\(.*?\)/g, ''))
      .join('. ... ');
    speak(`${text}.`, mode);
  };

  return (
    <Modal open={open} onClose={onClose} labelledBy={titleId} className="modal--fixed-header">
      <header className="tenses__header">
        <span className="tenses__icon">
          <Icon name="clock" size={28} />
        </span>
        <div>
          <p className="tenses__eyebrow">Tiempos verbales</p>
          <h2 id={titleId} className="tenses__title">{data.expression}</h2>
          <p className="tenses__translation">{data.translation}</p>
        </div>
      </header>
      <div className="modal__scroll">
      {verbs?.fixed ? (
        <div className="tenses__fixed">
          <span className="tenses__fixed-badge">
            <Icon name="sparkle" size={16} />
            Expresión fija: no se conjuga
          </span>
          <p>{verbs.note}</p>
          <div className="tenses__fixed-audio">
            <Pronunciation text={data.pronunciation} />
            <AudioControls text={data.speak} label={data.expression} />
          </div>
          {data.structure && (
            <p className="tenses__fixed-tip">
              <Icon name="lightbulb" size={16} />
              {data.structure.tip}
            </p>
          )}
        </div>
      ) : (
        <>
          {verbs.note && (
            <p className="tenses__note">
              <Icon name="lightbulb" size={16} />
              {verbs.note}
            </p>
          )}
          {verbs.be && (
            <p className="tenses__be">
              <strong>was</strong> con I / he / she / it · <strong>were</strong> con you / we / they
            </p>
          )}

          <div className="tenses__play-all">
            <Button variant="tenses" className={speaking === 'normal' ? 'is-playing' : ''} onClick={() => playAll('normal')}>
              <Icon name="volume" size={17} />
              Escuchar todos
            </Button>
            <Button variant="ghost" className={speaking === 'slow' ? 'is-playing' : ''} onClick={() => playAll('slow')}>
              <Icon name="turtle" size={17} />
              Todos despacio
            </Button>
          </div>

          <ol className="tenses__list">
            {TENSES.map((tense, i) => (
              <TenseRow key={tense.key} index={i + 1} tense={tense} form={verbs.forms[tense.key]} />
            ))}
          </ol>
        </>
      )}
      </div>
    </Modal>
  );
}

export default VerbFormsModal;
