import { Link } from 'react-router-dom';
import PageHeader from '../organism/PageHeader';
import ExpressionList from '../organism/ExpressionList';
import PronunciationGuide from '../organism/PronunciationGuide';
import AlphabetIndex from '../organism/AlphabetIndex';
import Icon from '../atoms/Icon';
import expressionsVol2 from '../../assets/data/expressionsVol2';

function VolumeTwoPage() {
  return (
    <main className="page page--volume">
      <PageHeader
        title="Commonly Used Expressions"
        highlight="Vol 2"
        subtitle={`${expressionsVol2.length} expresiones · escucha, repite y practica`}
        action={
          <Link to="/juegos?volumen=2" className="play-link">
            <Icon name="gamepad" size={18} />
            Jugar
          </Link>
        }
      />
      <PronunciationGuide />
      <ExpressionList items={expressionsVol2} />
      <AlphabetIndex items={expressionsVol2} />
    </main>
  );
}

export default VolumeTwoPage;
