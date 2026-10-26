// Molécula: botones para escuchar la expresión (normal y despacio)
import Icon from '../atoms/Icon';
import useSpeech from '../../hooks/useSpeech';

function AudioControls({ text, label, title, compact = false }) {
  const { supported, speak, speaking } = useSpeech();

  if (!supported) {
    return <p className="audio-unsupported">Tu navegador no permite reproducir audio.</p>;
  }

  return (
    <div className={`audio-controls ${compact ? 'audio-controls--compact' : ''}`} role="group" aria-label={`Escuchar "${label}"`}>
      {title && <span className="audio-controls__title">{title}</span>}
      <button
        type="button"
        className={`audio-btn audio-btn--normal ${speaking === 'normal' ? 'is-playing' : ''}`}
        onClick={() => speak(text, 'normal')}
        aria-label={`Escuchar "${label}" a velocidad normal`}
      >
        <Icon name="volume" size={18} />
        Normal
      </button>
      <button
        type="button"
        className={`audio-btn audio-btn--slow ${speaking === 'slow' ? 'is-playing' : ''}`}
        onClick={() => speak(text, 'slow')}
        aria-label={`Escuchar "${label}" despacio`}
      >
        <Icon name="turtle" size={18} />
        Despacio
      </button>
    </div>
  );
}

export default AudioControls;
