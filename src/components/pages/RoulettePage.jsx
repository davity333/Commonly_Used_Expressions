import RouletteGame from '../organism/RouletteGame';
import { useSearchParams } from 'react-router-dom';
import { getVolumeOption } from '../../utils/volumes';

function RoulettePage() {
  const [searchParams] = useSearchParams();
  const selected = getVolumeOption(searchParams.get('volumen'));
  const gamesTo = `/juegos?volumen=${selected.value}`;
  return <RouletteGame items={selected.items} volumeLabel={selected.label} gamesTo={gamesTo} />;
}

export default RoulettePage;
