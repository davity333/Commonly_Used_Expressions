import QuizGame from '../organism/QuizGame';
import expressionsVol1 from '../../assets/data/expressionsVol1';

function QuizPage() {
  return <QuizGame items={expressionsVol1} />;
}

export default QuizPage;
