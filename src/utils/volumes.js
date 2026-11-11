import expressionsVol1 from '../assets/data/expressionsVol1';
import expressionsVol2 from '../assets/data/expressionsVol2';

export const VOLUME_OPTIONS = [
  { value: '1', label: 'Volumen 1', items: expressionsVol1 },
  { value: '2', label: 'Volumen 2', items: expressionsVol2 },
  { value: 'ambos', label: 'Ambos volúmenes', items: [...expressionsVol1, ...expressionsVol2] },
];

export function getVolumeOption(value) {
  return VOLUME_OPTIONS.find((option) => option.value === value) ?? VOLUME_OPTIONS[0];
}

export function getVolumeItems(value) {
  return getVolumeOption(value).items;
}

