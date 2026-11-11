import { isVerbExpression } from './verbFormsVol2';

function createStructureVol2(items) {
  return Object.fromEntries(items.map(({ expression }) => {
    const isVerb = isVerbExpression(expression);
    const firstWord = expression.match(/^[a-z]+/i)?.[0]?.toLowerCase();
    return [
      expression,
      {
        type: isVerb ? 'verb' : 'describe',
        formula: isVerb
          ? `s:Sujeto|v:verbo conjugado|e:${expression}|c:complemento (según el contexto)`
          : `s:Sujeto|v:be (am / is / are)|e:${expression}|c:complemento (opcional)`,
        tip: isVerb
          ? `El verbo "${firstWord}" se conjuga según el sujeto y el tiempo. Conserva la preposición o partícula que forma parte de la expresión.`
          : 'Se usa para describir a alguien o algo. Normalmente aparece después de am, is o are.',
        example: `[s:I] [v:use] [e:"${expression}"] [c:in a sentence].`,
        es: `Uso la expresión "${expression}" en una oración.`,
      },
    ];
  }));
}

export default createStructureVol2;
