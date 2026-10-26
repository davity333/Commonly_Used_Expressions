// Utilidades para el azar en los juegos

export function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickOne(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Grupos de expresiones que se parecen demasiado: no salen juntas como opciones
const CONFUSING_GROUPS = [
  ['Drop it', 'Hold it', 'Put a lid on it'],
  ['Scram', 'Take a hike', 'Forget you'],
  ['Good heavens', "For heaven's sake", 'Wow'],
  ['A drag', 'Pain in the neck'],
  ['It went haywire', 'Lose his/her marbles'],
  ['Keep it up', 'Right on', 'Hang in there'],
  ['Come on', 'Shake a leg'],
  ['Get real', 'Get a life'],
];

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ¡!¿?.,]/g, '')
    .split('/')
    .map((s) => s.trim());

function areConfusing(a, b) {
  const group = CONFUSING_GROUPS.some((g) => g.includes(a.expression) && g.includes(b.expression));
  if (group) return true;
  const ta = normalize(a.translation);
  return normalize(b.translation).some((t) => ta.includes(t));
}

// Devuelve la respuesta correcta + 3 opciones falsas que no se confundan, en orden aleatorio
export function buildOptions(correct, all, count = 4) {
  const distractors = [];
  for (const item of shuffle(all)) {
    if (distractors.length === count - 1) break;
    if (item.id === correct.id) continue;
    if (areConfusing(item, correct)) continue;
    if (distractors.some((d) => areConfusing(d, item))) continue;
    distractors.push(item);
  }
  return shuffle([correct, ...distractors]);
}
