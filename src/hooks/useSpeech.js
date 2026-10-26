// Hook: reproduce texto en inglés con la voz del navegador (Web Speech API).
// No necesita descargar nada ni archivos de audio.
import { useCallback, useEffect, useRef, useState } from 'react';

const PREFERRED_VOICES = [
  'Google US English',
  'Microsoft Aria',
  'Microsoft Jenny',
  'Microsoft Guy',
  'Samantha',
  'Alex',
];

function pickVoice(voices) {
  const english = voices.filter((v) => v.lang?.toLowerCase().startsWith('en'));
  for (const name of PREFERRED_VOICES) {
    const found = english.find((v) => v.name.includes(name));
    if (found) return found;
  }
  return (
    english.find((v) => v.lang === 'en-US' || v.lang === 'en_US') ||
    english[0] ||
    null
  );
}

export const RATES = { normal: 0.95, slow: 0.5 };

export default function useSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [voice, setVoice] = useState(null);
  const [speaking, setSpeaking] = useState(null); // 'normal' | 'slow' | null
  const currentRef = useRef(null);

  useEffect(() => {
    if (!supported) return undefined;
    const synth = window.speechSynthesis;
    const load = () => setVoice(pickVoice(synth.getVoices()));
    load();
    synth.addEventListener('voiceschanged', load);
    return () => synth.removeEventListener('voiceschanged', load);
  }, [supported]);

  // Al salir de la pantalla, se calla
  useEffect(
    () => () => {
      if (supported && currentRef.current) window.speechSynthesis.cancel();
    },
    [supported],
  );

  const speak = useCallback(
    (text, mode = 'normal') => {
      if (!supported || !text) return;
      const synth = window.speechSynthesis;
      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voice?.lang || 'en-US';
      if (voice) utterance.voice = voice;
      utterance.rate = RATES[mode] ?? RATES.normal;
      utterance.pitch = 1;

      utterance.onstart = () => {
        if (currentRef.current === utterance) setSpeaking(mode);
      };
      const finish = () => {
        if (currentRef.current === utterance) {
          currentRef.current = null;
          setSpeaking(null);
        }
      };
      utterance.onend = finish;
      utterance.onerror = finish;

      currentRef.current = utterance;
      setSpeaking(mode);
      // Pequeña pausa: evita un error de Chrome al hablar justo después de cancel()
      setTimeout(() => synth.speak(utterance), 40);
    },
    [supported, voice],
  );

  return { supported, speak, speaking };
}
