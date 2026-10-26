// Organismo: guía para leer la pronunciación escrita
import Icon from '../atoms/Icon';

const tips = [
  { key: 'MAYÚSCULAS', text: 'la sílaba que se dice con más fuerza' },
  { key: 'j', text: 'suena como una "j" suave, casi un soplido (heaven → JE-ven)' },
  { key: 'sh', text: 'como cuando pides silencio: "shhh"' },
  { key: 'th', text: 'pon la punta de la lengua entre los dientes y sopla' },
  { key: 'r', text: 'entre vocales suena como una "r" suave (get it → GUE-rit)' },
  { key: 'u / ui', text: 'la "w" en inglés: way → UEI, with → UID' },
];

function PronunciationGuide() {
  return (
    <details className="pron-guide">
      <summary className="pron-guide__summary">
        <Icon name="lightbulb" size={18} />
        ¿Cómo leer la pronunciación?
        <Icon name="chevronDown" size={18} className="pron-guide__chevron" />
      </summary>
      <ul className="pron-guide__list">
        {tips.map((tip) => (
          <li key={tip.key}>
            <span className="pron-guide__key">{tip.key}</span>
            {tip.text}
          </li>
        ))}
      </ul>
      <p className="pron-guide__note">
        Usa <strong>Despacio</strong> para escuchar cada sonido y luego <strong>Normal</strong> para la velocidad real.
        La voz depende de tu navegador (en Chrome y Edge suena mejor).
      </p>
    </details>
  );
}

export default PronunciationGuide;
