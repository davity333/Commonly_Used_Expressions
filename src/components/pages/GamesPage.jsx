import { useState } from 'react';
import Icon from '../atoms/Icon';
import ProgressBar from '../atoms/ProgressBar';
import GameCard from '../molecules/GameCard';
import PageHeader from '../organism/PageHeader';
import ConfirmModal from '../organism/ConfirmModal';
import { useProgress } from '../../context/ProgressContext';
import expressionsVol1 from '../../assets/data/expressionsVol1';

function GamesPage() {
  const { known, best, resetProgress } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const total = expressionsVol1.length;

  return (
    <main className="page page--games">
      <PageHeader title="Zona de juegos" highlight="Vol 1" subtitle="Juega, repite y memoriza las 55 expresiones" />

      <section className="games-progress">
        <div className="games-progress__head">
          <span>
            <Icon name="trophy" size={18} />
            Expresiones dominadas
          </span>
          <strong>
            {known.length} / {total}
          </strong>
        </div>
        <ProgressBar value={known.length} max={total} label="Expresiones dominadas" />
        {(known.length > 0 || Object.keys(best).length > 0) && (
          <button type="button" className="games-progress__reset" onClick={() => setConfirmReset(true)}>
            Reiniciar progreso
          </button>
        )}
      </section>

      <div className="games-grid">
        <GameCard
          to="/juegos/ruleta"
          icon="wheel"
          color="green"
          title="Ruleta"
          description="Gira, te toca una expresión y un reto al azar. Califícate y marca las que ya dominas."
          meta={`✅ ${known.length} dominadas`}
        />
        <GameCard
          to="/juegos/quiz"
          icon="quiz"
          color="blue"
          title="Quiz"
          description="10 preguntas de opción múltiple: significado, traducción y definición."
          meta={best.quiz !== undefined ? `🏆 Récord: ${best.quiz}/10` : '🏆 Sin récord aún'}
        />
        <GameCard
          to="/juegos/escucha"
          icon="headphones"
          color="mint"
          title="¿Qué escuchaste?"
          description="Escucha el audio sin ver el texto y elige la expresión correcta."
          meta={best.listen !== undefined ? `🏆 Récord: ${best.listen}/10` : '🏆 Sin récord aún'}
        />
      </div>

      <ConfirmModal
        open={confirmReset}
        icon="refresh"
        title="¿Reiniciar tu progreso?"
        message="Se borrarán las expresiones dominadas y tus récords. No se puede deshacer."
        confirmLabel="Sí, reiniciar"
        cancelLabel="Cancelar"
        onConfirm={() => {
          resetProgress();
          setConfirmReset(false);
        }}
        onCancel={() => setConfirmReset(false)}
      />
    </main>
  );
}

export default GamesPage;
