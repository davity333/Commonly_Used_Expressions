import { soundLikeEnglish } from './pronunciationVol2';

const verbInitials = new Set([
  'arrive', 'ask', 'apologize', 'believe', 'belong', 'borrow', 'call', 'care',
  'compare', 'concentrate', 'cut', 'deal', 'decide', 'depend', 'divide', 'dream',
  'hand', 'hang', 'hear', 'hold', 'hope', 'invest', 'introduce', 'invite',
  'insist', 'join', 'jot', 'kick', 'know', 'kneel', 'laugh', 'lie', 'look',
  'make', 'matter', 'move', 'multiply', 'open', 'order', 'protect', 'put',
  'rely', 'rip', 'search', 'set', 'show', 'shut', 'talk', 'tell', 'throw',
  'think', 'turn', 'use', 'wait', 'worry', 'yell',
]);

const irregularVerbs = {
  arise: ['arose', 'arisen'],
  add: ['added', 'added'],
  admit: ['admitted', 'admitted'],
  be: ['was', 'been'],
  become: ['became', 'become'],
  begin: ['began', 'begun'],
  break: ['broke', 'broken'],
  bring: ['brought', 'brought'],
  beg: ['begged', 'begged'],
  buy: ['bought', 'bought'],
  catch: ['caught', 'caught'],
  choose: ['chose', 'chosen'],
  clap: ['clapped', 'clapped'],
  come: ['came', 'come'],
  do: ['did', 'done'],
  drop: ['dropped', 'dropped'],
  draw: ['drew', 'drawn'],
  drink: ['drank', 'drunk'],
  drive: ['drove', 'driven'],
  eat: ['ate', 'eaten'],
  fall: ['fell', 'fallen'],
  feel: ['felt', 'felt'],
  fit: ['fit', 'fit'],
  find: ['found', 'found'],
  fly: ['flew', 'flown'],
  forget: ['forgot', 'forgotten'],
  get: ['got', 'gotten'],
  give: ['gave', 'given'],
  go: ['went', 'gone'],
  grab: ['grabbed', 'grabbed'],
  have: ['had', 'had'],
  hear: ['heard', 'heard'],
  keep: ['kept', 'kept'],
  know: ['knew', 'known'],
  leave: ['left', 'left'],
  lose: ['lost', 'lost'],
  make: ['made', 'made'],
  meet: ['met', 'met'],
  pay: ['paid', 'paid'],
  plan: ['planned', 'planned'],
  read: ['read', 'read'],
  regret: ['regretted', 'regretted'],
  rip: ['ripped', 'ripped'],
  ride: ['rode', 'ridden'],
  run: ['ran', 'run'],
  say: ['said', 'said'],
  see: ['saw', 'seen'],
  send: ['sent', 'sent'],
  sit: ['sat', 'sat'],
  speak: ['spoke', 'spoken'],
  spend: ['spent', 'spent'],
  stand: ['stood', 'stood'],
  stop: ['stopped', 'stopped'],
  take: ['took', 'taken'],
  teach: ['taught', 'taught'],
  tell: ['told', 'told'],
  think: ['thought', 'thought'],
  understand: ['understood', 'understood'],
  write: ['wrote', 'written'],
  wrap: ['wrapped', 'wrapped'],
};

export function isVerbExpression(expression) {
  const firstWord = expression.match(/^[a-z]+/i)?.[0]?.toLowerCase();
  return verbInitials.has(firstWord);
}

function verbFormsFor(expression, translation) {
  const firstWord = expression.match(/^[a-z]+/i)?.[0]?.toLowerCase();
  if (!isVerbExpression(expression)) {
    const meaning = translation.toLowerCase();
    return {
      be: true,
      note: 'Esta expresión suele describir a una persona o cosa. Se combina con be; el adjetivo o complemento no cambia.',
      forms: {
        base: { en: `are ${expression}`, es: `son / están ${meaning}`, pron: soundLikeEnglish(`are ${expression}`) },
        past: { en: `were ${expression}`, es: `eran / estaban ${meaning}`, pron: soundLikeEnglish(`were ${expression}`) },
        participle: { en: `been ${expression}`, es: `sido / estado ${meaning}`, pron: soundLikeEnglish(`been ${expression}`) },
        gerund: { en: `being ${expression}`, es: `siendo / estando ${meaning}`, pron: soundLikeEnglish(`being ${expression}`) },
        third: { en: `is ${expression}`, es: `es / está ${meaning}`, pron: soundLikeEnglish(`is ${expression}`) },
      },
    };
  }

  const regularPast = firstWord.endsWith('e')
    ? `${firstWord}d`
    : /[^aeiou]y$/.test(firstWord)
      ? `${firstWord.slice(0, -1)}ied`
      : `${firstWord}ed`;
  const [past, participle] = irregularVerbs[firstWord] ?? [regularPast, regularPast];
  const rest = expression.slice(firstWord.length);
  const gerund = firstWord.endsWith('ie')
    ? `${firstWord.slice(0, -2)}ying`
    : firstWord.endsWith('e') && !firstWord.endsWith('ee')
      ? `${firstWord.slice(0, -1)}ing`
      : `${firstWord}ing`;
  const third = /[^aeiou]y$/.test(firstWord)
    ? `${firstWord.slice(0, -1)}ies`
    : /(s|sh|ch|x|z|o)$/.test(firstWord)
      ? `${firstWord}es`
      : `${firstWord}s`;
  const form = (en, es) => ({ en: `${en}${rest}`, es, pron: soundLikeEnglish(`${en}${rest}`) });

  return {
    note: `El verbo principal es "${firstWord}". La expresión se mantiene después del verbo; revisa estas formas comunes.`,
    forms: {
      base: form(firstWord, translation),
      past: form(past, `${translation} (pasado)`),
      participle: form(participle, `${translation} (participio)`),
      gerund: form(gerund, `${translation} (gerundio)`),
      third: form(third, `${translation} (él / ella)`),
    },
  };
}

function createVerbFormsVol2(items) {
  return Object.fromEntries(items.map(({ expression, translation }) => [
    expression,
    verbFormsFor(expression, translation),
  ]));
}

export default createVerbFormsVol2;
