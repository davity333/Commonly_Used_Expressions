// Tiempos verbales de cada expresión.
// Cada forma: [inglés, traducción, cómo suena]
// - fixed: true  → la expresión no se conjuga (exclamación u orden fija)
// - be: true     → lo que se conjuga es el verbo "be" (was / were...)
// - una forma en null → ese tiempo no se usa con esta expresión

export const TENSES = [
  { key: 'base', name: 'Forma base', en: 'Base form', hint: 'Presente con I / you / we / they, y para dar órdenes.', color: 'green' },
  { key: 'past', name: 'Pasado simple', en: 'Past simple', hint: 'Algo que ya pasó: yesterday, last week, ago.', color: 'blue' },
  { key: 'participle', name: 'Participio', en: 'Past participle', hint: 'Se usa con have / has: I have ___ (he ___).', color: 'purple' },
  { key: 'gerund', name: 'Gerundio (-ing)', en: 'Gerund', hint: 'Algo que está pasando ahora: I am ___ (estoy ___).', color: 'orange' },
  { key: 'third', name: '3ra persona', en: 'Third person', hint: 'Presente con he / she / it: lleva -s al final del verbo.', color: 'mint' },
];

const f = (base, past, participle, gerund, third) => ({ base, past, participle, gerund, third });

const verbFormsVol1 = {
  'A drag': {
    be: true,
    note: 'Es un sustantivo: lo que se conjuga es el verbo be.',
    forms: f(
      ['be a drag', 'ser una lata', 'bi-a-DRAG'],
      ['was a drag', 'fue / era una lata', 'ua-sa-DRAG'],
      ['been a drag', '(ha) sido una lata', 'bi-na-DRAG'],
      ['being a drag', 'siendo una lata', 'BI-ing-a-DRAG'],
      ['is a drag', '(eso) es una lata', 'i-sa-DRAG'],
    ),
  },
  'Come on': {
    fixed: true,
    note: 'Para animar o convencer siempre se dice igual: "Come on!". En pasado ("came on") cambia de significado.',
  },
  'Drop it': {
    forms: f(
      ['drop it', 'soltarlo / dejarlo', 'DRA-pit'],
      ['dropped it', 'lo soltó / lo dejó', 'DRAP-tit'],
      ['dropped it', '(lo ha) soltado', 'DRAP-tit'],
      ['dropping it', 'soltándolo', 'DRA-ping-it'],
      ['drops it', '(él / ella) lo suelta', 'DRAP-sit'],
    ),
  },
  'Fall in love': {
    forms: f(
      ['fall in love', 'enamorarse', 'fol-in-LAV'],
      ['fell in love', 'se enamoró', 'fel-in-LAV'],
      ['fallen in love', '(se ha) enamorado', 'FO-len-in-LAV'],
      ['falling in love', 'enamorándose', 'FO-ling-in-LAV'],
      ['falls in love', '(él / ella) se enamora', 'folz-in-LAV'],
    ),
  },
  'Feeling blue': {
    note: 'El verbo es "feel" (sentirse). La expresión del libro ya viene en gerundio.',
    forms: f(
      ['feel blue', 'sentirse triste', 'fil-BLU'],
      ['felt blue', 'se sintió triste', 'felt-BLU'],
      ['felt blue', '(se ha) sentido triste', 'felt-BLU'],
      ['feeling blue', 'sintiéndose triste', 'FI-ling-BLU'],
      ['feels blue', '(él / ella) se siente triste', 'filz-BLU'],
    ),
  },
  "For heaven's sake": {
    fixed: true,
    note: 'Es una exclamación: siempre se dice igual, no tiene tiempos verbales.',
  },
  'Forget you': {
    fixed: true,
    note: 'Es una exclamación fija para mostrar enojo; no se conjuga.',
  },
  'Get a life': {
    fixed: true,
    note: 'Se usa como orden: siempre "Get a life!".',
  },
  'Get it': {
    note: 'En inglés británico el participio es "got": I have got it.',
    forms: f(
      ['get it', 'entenderlo', 'GUE-rit'],
      ['got it', 'lo entendió', 'GA-rit'],
      ['gotten it', '(lo ha) entendido', 'GA-ten-it'],
      ['getting it', 'entendiéndolo', 'GUE-ring-it'],
      ['gets it', '(él / ella) lo entiende', 'GUET-sit'],
    ),
  },
  'Get real': {
    fixed: true,
    note: 'Se usa como orden para que alguien sea realista: siempre "Get real!".',
  },
  'Get with it': {
    forms: f(
      ['get with it', 'ponerse al día', 'guet-UI-dit'],
      ['got with it', 'se puso al día', 'gat-UI-dit'],
      ['gotten with it', '(se ha) puesto al día', 'GA-ten-UI-dit'],
      ['getting with it', 'poniéndose al día', 'GUE-ring-UI-dit'],
      ['gets with it', '(él / ella) se pone al día', 'guets-UI-dit'],
    ),
  },
  'Get your act together': {
    note: 'Recuerda cambiar el posesivo según la persona: my, your, his, her, our, their.',
    forms: f(
      ['get your act together', 'organizarse', 'guet-yor-AKT-tu-GUE-der'],
      ['got your act together', 'se organizó', 'gat-yor-AKT-tu-GUE-der'],
      ['gotten your act together', '(se ha) organizado', 'GA-ten-yor-AKT-tu-GUE-der'],
      ['getting your act together', 'organizándose', 'GUE-ring-yor-AKT-tu-GUE-der'],
      ['gets his act together', '(él) se organiza', 'guets-jiz-AKT-tu-GUE-der'],
    ),
  },
  'Go on': {
    forms: f(
      ['go on', 'continuar', 'gou-ON'],
      ['went on', 'continuó', 'uen-TON'],
      ['gone on', '(ha) continuado', 'gon-ON'],
      ['going on', 'continuando', 'GOU-ing-on'],
      ['goes on', '(él / ella) continúa', 'gouz-ON'],
    ),
  },
  'Good heavens': {
    fixed: true,
    note: 'Es una exclamación de sorpresa: siempre se dice igual.',
  },
  'Hang in there': {
    forms: f(
      ['hang in there', 'aguantar', 'jeng-in-DER'],
      ['hung in there', 'aguantó', 'jang-in-DER'],
      ['hung in there', '(ha) aguantado', 'jang-in-DER'],
      ['hanging in there', 'aguantando', 'JENG-ing-in-der'],
      ['hangs in there', '(él / ella) aguanta', 'jengz-in-DER'],
    ),
  },
  'Have a thing for': {
    forms: f(
      ['have a thing for', 'tener debilidad por', 'ja-va-THING-for'],
      ['had a thing for', 'tenía debilidad por', 'ja-da-THING-for'],
      ['had a thing for', '(ha) tenido debilidad por', 'ja-da-THING-for'],
      ['having a thing for', 'teniendo debilidad por', 'JA-ving-a-THING-for'],
      ['has a thing for', '(él / ella) tiene debilidad por', 'ja-za-THING-for'],
    ),
  },
  'Hit the sack': {
    note: '"Hit" es igual en presente, pasado y participio.',
    forms: f(
      ['hit the sack', 'irse a dormir', 'jit-de-SAK'],
      ['hit the sack', 'se fue a dormir', 'jit-de-SAK'],
      ['hit the sack', '(se ha) ido a dormir', 'jit-de-SAK'],
      ['hitting the sack', 'yéndose a dormir', 'JI-ring-de-SAK'],
      ['hits the sack', '(él / ella) se va a dormir', 'jits-de-SAK'],
    ),
  },
  'Hold it': {
    forms: f(
      ['hold it', 'detenerse / esperar', 'JOUL-dit'],
      ['held it', 'se detuvo', 'JEL-dit'],
      ['held it', '(se ha) detenido', 'JEL-dit'],
      ['holding it', 'deteniéndose', 'JOUL-ding-it'],
      ['holds it', '(él / ella) se detiene', 'JOUL-zit'],
    ),
  },
  'I screwed up': {
    note: 'El verbo es "screw up". La expresión del libro ya viene en pasado.',
    forms: f(
      ['screw up', 'regarla / equivocarse', 'skru-AP'],
      ['screwed up', 'la regó', 'skru-DAP'],
      ['screwed up', '(la ha) regado', 'skru-DAP'],
      ['screwing up', 'regándola', 'SKRU-ing-ap'],
      ['screws up', '(él / ella) la riega', 'skruz-AP'],
    ),
  },
  'I wanna': {
    note: '"Wanna" solo se usa en presente (I / you / we / they wanna). En los demás tiempos se usa "want to" normal.',
    forms: f(
      ['want to', 'querer', 'UAN-tu'],
      ['wanted to', 'quiso / quería', 'UAN-tid-tu'],
      ['wanted to', '(ha) querido', 'UAN-tid-tu'],
      ['wanting to', 'queriendo', 'UAN-ting-tu'],
      ['wants to', '(él / ella) quiere', 'UANTS-tu'],
    ),
  },
  "I'm gonna": {
    be: true,
    note: '"Gonna" = going to. Con I: "I\'m going to" = "I\'m gonna". El participio y el gerundio no se usan con esta expresión.',
    forms: f(
      ['be going to', 'ir a (futuro)', 'bi-GOU-ing-tu'],
      ['was going to', 'iba a', 'uas-GOU-ing-tu'],
      null,
      null,
      ['is going to', '(él / ella) va a', 'iz-GOU-ing-tu'],
    ),
  },
  'It went haywire': {
    note: 'El verbo es "go haywire". La expresión del libro ya viene en pasado.',
    forms: f(
      ['go haywire', 'volverse loco', 'gou-JEI-uair'],
      ['went haywire', 'se volvió loco', 'uent-JEI-uair'],
      ['gone haywire', '(se ha) vuelto loco', 'gon-JEI-uair'],
      ['going haywire', 'volviéndose loco', 'GOU-ing-JEI-uair'],
      ['goes haywire', '(él / ella) se vuelve loco', 'gouz-JEI-uair'],
    ),
  },
  'Keep it up': {
    forms: f(
      ['keep it up', 'seguir así', 'ki-pi-RAP'],
      ['kept it up', 'siguió así', 'KEP-ti-rap'],
      ['kept it up', '(ha) seguido así', 'KEP-ti-rap'],
      ['keeping it up', 'siguiendo así', 'KI-ping-i-rap'],
      ['keeps it up', '(él / ella) sigue así', 'KIP-si-rap'],
    ),
  },
  "Let's party": {
    fixed: true,
    note: '"Let\'s" (let us) es una invitación y siempre se dice igual. Si quieres usar "party" como verbo: partied, partying, parties.',
  },
  'Light up': {
    forms: f(
      ['light up', 'iluminarse', 'lai-RAP'],
      ['lit up', 'se iluminó', 'li-RAP'],
      ['lit up', '(se ha) iluminado', 'li-RAP'],
      ['lighting up', 'iluminándose', 'LAI-ring-ap'],
      ['lights up', '(él / ella) se ilumina', 'laits-AP'],
    ),
  },
  'Look on the bright side': {
    forms: f(
      ['look on the bright side', 'ver el lado positivo', 'luk-on-de-BRAIT-said'],
      ['looked on the bright side', 'vio el lado positivo', 'lukt-on-de-BRAIT-said'],
      ['looked on the bright side', '(ha) visto el lado positivo', 'lukt-on-de-BRAIT-said'],
      ['looking on the bright side', 'viendo el lado positivo', 'LU-king-on-de-BRAIT-said'],
      ['looks on the bright side', '(él / ella) ve el lado positivo', 'luks-on-de-BRAIT-said'],
    ),
  },
  'Lose his/her marbles': {
    note: 'Cambia el posesivo según la persona: my, your, his, her...',
    forms: f(
      ['lose his marbles', 'volverse loco', 'luz-jiz-MAR-bols'],
      ['lost his marbles', 'se volvió loco', 'lost-jiz-MAR-bols'],
      ['lost his marbles', '(se ha) vuelto loco', 'lost-jiz-MAR-bols'],
      ['losing his marbles', 'volviéndose loco', 'LU-zing-jiz-MAR-bols'],
      ['loses his marbles', '(él) se vuelve loco', 'LU-ziz-jiz-MAR-bols'],
    ),
  },
  'Make my day': {
    forms: f(
      ['make my day', 'alegrarme el día', 'meik-mai-DEI'],
      ['made my day', 'me alegró el día', 'meid-mai-DEI'],
      ['made my day', '(me ha) alegrado el día', 'meid-mai-DEI'],
      ['making my day', 'alegrándome el día', 'MEI-king-mai-DEI'],
      ['makes my day', '(él / ella) me alegra el día', 'meiks-mai-DEI'],
    ),
  },
  'Mixed up': {
    note: 'El verbo es "mix up" (confundir / revolver). "Be mixed up" = estar confundido.',
    forms: f(
      ['mix up', 'confundir', 'mik-SAP'],
      ['mixed up', 'confundió', 'miks-TAP'],
      ['mixed up', '(ha) confundido', 'miks-TAP'],
      ['mixing up', 'confundiendo', 'MIK-sing-ap'],
      ['mixes up', '(él / ella) confunde', 'MIK-si-zap'],
    ),
  },
  'My treat': {
    fixed: true,
    note: 'Siempre se dice igual. También puedes decir "It\'s my treat" o "It was my treat" (cambia solo be).',
  },
  'No way': {
    fixed: true,
    note: 'Es una exclamación: siempre se dice igual.',
  },
  'No wonder': {
    fixed: true,
    note: 'No cambia. Lo que se conjuga es el verbo de la oración que va después: No wonder you WERE tired.',
  },
  'Pain in the neck': {
    be: true,
    note: 'Es un sustantivo: lo que se conjuga es el verbo be.',
    forms: f(
      ['be a pain in the neck', 'ser un fastidio', 'bi-a-pein-in-de-NEK'],
      ['was a pain in the neck', 'fue / era un fastidio', 'ua-sa-pein-in-de-NEK'],
      ['been a pain in the neck', '(ha) sido un fastidio', 'bi-na-pein-in-de-NEK'],
      ['being a pain in the neck', 'siendo un fastidio', 'BI-ing-a-pein-in-de-NEK'],
      ['is a pain in the neck', '(eso) es un fastidio', 'i-sa-pein-in-de-NEK'],
    ),
  },
  "Pull someone's leg": {
    note: 'Cambia el posesivo: pull MY leg, pull HER leg...',
    forms: f(
      ['pull your leg', 'tomarte el pelo', 'pul-yor-LEG'],
      ['pulled your leg', 'te tomó el pelo', 'puld-yor-LEG'],
      ['pulled your leg', '(te ha) tomado el pelo', 'puld-yor-LEG'],
      ['pulling your leg', 'tomándote el pelo', 'PU-ling-yor-LEG'],
      ['pulls your leg', '(él / ella) te toma el pelo', 'pulz-yor-LEG'],
    ),
  },
  'Put a lid on it': {
    fixed: true,
    note: 'Se usa como orden para que alguien se calle: siempre "Put a lid on it!".',
  },
  'Put up with it': {
    note: '"Put" es igual en presente, pasado y participio.',
    forms: f(
      ['put up with it', 'aguantarlo', 'pu-RAP-ui-dit'],
      ['put up with it', 'lo aguantó', 'pu-RAP-ui-dit'],
      ['put up with it', '(lo ha) aguantado', 'pu-RAP-ui-dit'],
      ['putting up with it', 'aguantándolo', 'PU-ring-ap-ui-dit'],
      ['puts up with it', '(él / ella) lo aguanta', 'puts-ap-ui-dit'],
    ),
  },
  'Right away': {
    fixed: true,
    note: 'Es un adverbio (dice cuándo): no tiene tiempos verbales. Lo que cambia es el verbo de la oración.',
  },
  'Right on': {
    fixed: true,
    note: 'Es una exclamación. Como descripción solo cambia be: is right on / was right on.',
  },
  'Rise and shine': {
    fixed: true,
    note: 'Es una frase fija para despertar a alguien: siempre se dice igual.',
  },
  Scram: {
    forms: f(
      ['scram', 'largarse', 'SKRAM'],
      ['scrammed', 'se largó', 'SKRAMD'],
      ['scrammed', '(se ha) largado', 'SKRAMD'],
      ['scramming', 'largándose', 'SKRA-ming'],
      ['scrams', '(él / ella) se larga', 'SKRAMZ'],
    ),
  },
  'Shake a leg': {
    fixed: true,
    note: 'Se usa como orden para que alguien se apure: siempre "Shake a leg!".',
  },
  'Show up': {
    forms: f(
      ['show up', 'aparecer / llegar', 'shou-AP'],
      ['showed up', 'apareció / llegó', 'shou-DAP'],
      ['shown up', '(ha) aparecido', 'shou-NAP'],
      ['showing up', 'apareciendo', 'SHOU-ing-ap'],
      ['shows up', '(él / ella) aparece', 'shou-ZAP'],
    ),
  },
  'Smell/Sound fishy': {
    note: 'Con "sound" es igual: sound → sounded → sounded → sounding → sounds fishy.',
    forms: f(
      ['smell fishy', 'oler sospechoso', 'smel-FI-shi'],
      ['smelled fishy', 'olió sospechoso', 'smeld-FI-shi'],
      ['smelled fishy', '(ha) olido sospechoso', 'smeld-FI-shi'],
      ['smelling fishy', 'oliendo sospechoso', 'SME-ling-FI-shi'],
      ['smells fishy', '(eso) huele sospechoso', 'smelz-FI-shi'],
    ),
  },
  'Take a hike': {
    fixed: true,
    note: 'Se usa como orden para correr a alguien: siempre "Take a hike!".',
  },
  'Take a stand': {
    forms: f(
      ['take a stand', 'tomar una postura', 'tei-ka-STAND'],
      ['took a stand', 'tomó una postura', 'tu-ka-STAND'],
      ['taken a stand', '(ha) tomado una postura', 'TEI-ken-a-STAND'],
      ['taking a stand', 'tomando una postura', 'TEI-king-a-STAND'],
      ['takes a stand', '(él / ella) toma una postura', 'teik-sa-STAND'],
    ),
  },
  'Take it easy': {
    forms: f(
      ['take it easy', 'tomárselo con calma', 'tei-ki-RI-zi'],
      ['took it easy', 'se lo tomó con calma', 'tu-ki-RI-zi'],
      ['taken it easy', '(se lo ha) tomado con calma', 'TEI-ken-i-RI-zi'],
      ['taking it easy', 'tomándoselo con calma', 'TEI-king-i-RI-zi'],
      ['takes it easy', '(él / ella) se lo toma con calma', 'teik-si-RI-zi'],
    ),
  },
  'The "in" thing': {
    be: true,
    note: 'Es un sustantivo: lo que se conjuga es el verbo be.',
    forms: f(
      ['be the in thing', 'ser lo de moda', 'bi-de-IN-thing'],
      ['was the in thing', 'fue / era lo de moda', 'uaz-de-IN-thing'],
      ['been the in thing', '(ha) sido lo de moda', 'bin-de-IN-thing'],
      ['being the in thing', 'siendo lo de moda', 'BI-ing-de-IN-thing'],
      ['is the in thing', '(eso) es lo de moda', 'iz-de-IN-thing'],
    ),
  },
  'There you go again': {
    fixed: true,
    note: 'Es una frase fija para quejarte de que alguien repite algo: siempre se dice igual.',
  },
  'Ticked off': {
    note: 'El verbo es "tick off" (hacer enojar). "Be ticked off" = estar enojado.',
    forms: f(
      ['tick off', 'hacer enojar', 'ti-KOF'],
      ['ticked off', 'hizo enojar', 'tik-TOF'],
      ['ticked off', '(ha) hecho enojar', 'tik-TOF'],
      ['ticking off', 'haciendo enojar', 'TI-king-of'],
      ['ticks off', '(él / ella) hace enojar', 'tik-SOF'],
    ),
  },
  'Up a creek': {
    be: true,
    note: 'Lo que se conjuga es el verbo be (aquí significa "estar").',
    forms: f(
      ['be up a creek', 'estar en problemas', 'bi-a-pa-KRIK'],
      ['was up a creek', 'estuvo / estaba en problemas', 'ua-sa-pa-KRIK'],
      ['been up a creek', '(ha) estado en problemas', 'bi-na-pa-KRIK'],
      ['being up a creek', 'estando en problemas', 'BI-ing-a-pa-KRIK'],
      ['is up a creek', '(él / ella) está en problemas', 'i-za-pa-KRIK'],
    ),
  },
  'What a jerk': {
    fixed: true,
    note: 'Es una exclamación: siempre se dice igual.',
  },
  'What a shame': {
    fixed: true,
    note: 'Es una exclamación: siempre se dice igual. También: "It\'s a shame" / "It was a shame".',
  },
  "What's up": {
    fixed: true,
    note: 'Es un saludo fijo. "What\'s" = "What is".',
  },
  Wow: {
    fixed: true,
    note: 'Es una exclamación: siempre se dice igual.',
  },
  'Yeah, right!': {
    fixed: true,
    note: 'Es una exclamación sarcástica: siempre se dice igual.',
  },
};

const toForm = (arr) => (arr ? { en: arr[0], es: arr[1], pron: arr[2] } : null);

export function getVerbForms(expression) {
  const entry = verbFormsVol1[expression];
  if (!entry) return null;
  if (entry.fixed) return entry;
  return {
    ...entry,
    forms: Object.fromEntries(Object.entries(entry.forms).map(([k, v]) => [k, toForm(v)])),
  };
}

export default verbFormsVol1;
