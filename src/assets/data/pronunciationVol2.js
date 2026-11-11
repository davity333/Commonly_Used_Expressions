export function soundLikeEnglish(text) {
  return text
    .toLowerCase()
    .split(/([a-z]+|[^a-z]+)/g)
    .filter(Boolean)
    .map((part) => {
      if (!/^[a-z]+$/.test(part)) return part;
      const sound = part
        .replace(/tch/g, 'ch').replace(/th/g, 'd').replace(/sh/g, 'sh')
        .replace(/ch/g, 'ch').replace(/ph/g, 'f').replace(/ng/g, 'ng')
        .replace(/ee|ea/g, 'i').replace(/oo/g, 'u').replace(/ou|ow/g, 'au')
        .replace(/ai|ay/g, 'ei').replace(/oa/g, 'ou').replace(/qu/g, 'ku')
        .replace(/c(?=[eiy])/g, 's').replace(/c/g, 'k').replace(/j/g, 'y')
        .replace(/v/g, 'b').replace(/w/g, 'u').replace(/y/g, 'i')
        .replace(/x/g, 'ks').replace(/h/g, '');
      return sound.replace(/^([aeiou]+)(.*)$/, (_, first, rest) => `${first.toUpperCase()}${rest}`);
    })
    .join('')
    .replace(/\s+/g, '-');
}

function createPronunciationVol2(items) {
  return Object.fromEntries(items.map(({ expression }) => [
    expression,
    { pronunciation: soundLikeEnglish(expression), speak: expression },
  ]));
}

export default createPronunciationVol2;
