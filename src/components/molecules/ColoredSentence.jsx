// Molécula: oración con cada parte pintada según su función
// Formato: "[s:Sujeto] [v:verbo] [e:expresión] [c:complemento]."
const TOKEN = /\[(s|v|e|c):([^\]]+)\]/g;

export const ROLE_NAMES = {
  s: 'Sujeto',
  v: 'Verbo / auxiliar',
  e: 'Expresión',
  c: 'Complemento',
};

export function parseSentence(text) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    if (match.index > last) parts.push({ role: null, text: text.slice(last, match.index) });
    parts.push({ role: match[1], text: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push({ role: null, text: text.slice(last) });
  return parts;
}

export function plainSentence(text) {
  return text.replace(TOKEN, '$2');
}

function ColoredSentence({ text }) {
  return (
    <p className="colored-sentence">
      {parseSentence(text).map((part, i) =>
        part.role ? (
          <span key={i} className={`role role--${part.role}`} title={ROLE_NAMES[part.role]}>
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export default ColoredSentence;
