// Hook: reproduce texto en inglés con la voz del navegador (Web Speech API).
// En celular habla más despacio, porque ahí las voces suenan más rápidas.
import { useCallback, useEffect, useRef, useState } from 'react';

const isMobile =
  typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

// Velocidad: 1 = normal del sistema. Menos de 1 = más despacio.
export const RATES = isMobile
  ? { normal: 0.8, slow: 0.45 } // celular
  : { normal: 0.95, slow: 0.5 }; // computadora

// Voces preferidas en orden (las primeras suenan más naturales)
const PREFERRED_VOICES = [
  // Computadora (Chrome / Edge)
  'Google US English',
  'Microsoft Aria',
  'Microsoft Jenny',
  'Microsoft Guy',
  // iPhone / iPad
  'Samantha',
  'Ava',
  'Allison',
  'Alex',
  // Android
  'English United States',
  'en-us-x-sfg',
  'en-us-x-iol',
  'en-us-x-tpc',
];

function pickVoice(voices) {
  const english = voices.filter((v) => v.lang?.toLowerCase().replace('_', '-').startsWith('en'));
  for (const name of PREFERRED_VOICES) {
    const found = english.find((v) => v.name.toLowerCase().includes(name.toLowerCase()));
    if (found) return found;
  }
  return (
    english.find((v) => v.lang.replace('_', '-').toLowerCase() === 'en-us' && v.localService) ||
    english.find((v) => v.lang.replace('_', '-').toLowerCase() === 'en-us') ||
    english[0] ||
    null
  );
}

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
      utterance.lang = 'en-US';
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