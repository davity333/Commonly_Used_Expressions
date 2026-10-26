// Molécula: pronunciación escrita "como suena", con la sílaba fuerte resaltada
import Icon from '../atoms/Icon';

const isStressed = (part) => /[A-Z]/.test(part) && part === part.toUpperCase();

function Pronunciation({ text, showLabel = true, size = 'md' }) {
  if (!text) return null;
  const parts = text.split(/(-|\/)/);

  return (
    <p className={`pronunciation pronunciation--${size}`} aria-label={`Se pronuncia: ${text}`}>
      {showLabel && (
        <span className="pronunciation__label">
          <Icon name="mic" size={14} />
          Suena
        </span>
      )}
      <span className="pronunciation__text" aria-hidden="true">
        {parts.map((part, i) => {
          if (part === '-') return <span key={i} className="pronunciation__dash">-</span>;
          if (part === '/') return <span key={i} className="pronunciation__slash"> / </span>;
          return (
            <span key={i} className={isStressed(part) ? 'pronunciation__stress' : 'pronunciation__syllable'}>
              {isStressed(part) ? part : part.toLowerCase()}
            </span>
          );
        })}
      </span>
    </p>
  );
}

export default Pronunciation;
