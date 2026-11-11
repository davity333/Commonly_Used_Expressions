import ListenGame from '../organism/ListenGame';
import { useSearchParams } from 'react-router-dom';
import { getVolumeOption } from '../../utils/volumes';

function ListenPage() {
  const [searchParams] = useSearchParams();
  const volume = searchParams.get('volumen');
  const selected = getVolumeOption(volume);
  const bestKey = selected.value === '1' ? 'listen' : `listen-${selected.value}`;
  const gamesTo = `/juegos?volumen=${selected.value}`;
  return <ListenGame items={selected.items} volumeLabel={selected.label} bestKey={bestKey} gamesTo={gamesTo} />;
}

export default ListenPage;
