import QuizGame from '../organism/QuizGame';
import { useSearchParams } from 'react-router-dom';
import { getVolumeOption } from '../../utils/volumes';

function QuizPage() {
  const [searchParams] = useSearchParams();
  const volume = searchParams.get('volumen');
  const selected = getVolumeOption(volume);
  const bestKey = selected.value === '1' ? 'quiz' : `quiz-${selected.value}`;
  const gamesTo = `/juegos?volumen=${selected.value}`;
  return <QuizGame items={selected.items} volumeLabel={selected.label} bestKey={bestKey} gamesTo={gamesTo} />;
}

export default QuizPage;
