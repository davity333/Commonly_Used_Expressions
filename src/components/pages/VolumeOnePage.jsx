import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';
import PageHeader from '../organism/PageHeader';
import ExpressionList from '../organism/ExpressionList';
import PronunciationGuide from '../organism/PronunciationGuide';
import expressionsVol1 from '../../assets/data/expressionsVol1';
import AlphabetIndex from '../organism/AlphabetIndex';
function VolumeOnePage() {
  return (
    <main className="page page--volume">
      <PageHeader
        title="Commonly Used Expressions"
        highlight="Vol 1"
        subtitle={`${expressionsVol1.length} expresiones · escucha, repite y practica`}
        action={
          <Link to="/juegos" className="play-link">
            <Icon name="gamepad" size={18} />
            Jugar
          </Link>
        }
      />
      <PronunciationGuide />
      <ExpressionList items={expressionsVol1} />
      <AlphabetIndex items={expressionsVol1} />
    </main>
  );
}

export default VolumeOnePage;
