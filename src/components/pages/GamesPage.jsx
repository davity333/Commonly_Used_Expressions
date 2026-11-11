import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../atoms/Icon';
import ProgressBar from '../atoms/ProgressBar';
import GameCard from '../molecules/GameCard';
import PageHeader from '../organism/PageHeader';
import ConfirmModal from '../organism/ConfirmModal';
import VolumeSelectionModal from '../organism/VolumeSelectionModal';
import { useProgress } from '../../context/ProgressContext';
import { getVolumeOption, VOLUME_OPTIONS } from '../../utils/volumes';

function GamesPage() {
  const { known, best, resetProgress } = useProgress();
  const [searchParams, setSearchParams] = useSearchParams();
  const [confirmReset, setConfirmReset] = useState(false);
  const [showVolumePicker, setShowVolumePicker] = useState(false);
  const selectedValue = searchParams.get('volumen');
  const isValidSelection = VOLUME_OPTIONS.some((option) => option.value === selectedValue);
  const selectedVolume = getVolumeOption(selectedValue);
  const selectedKnown = known.filter((id) => selectedVolume.items.some((item) => item.id === id));
  const volumeLabel = selectedVolume.label;
  const bestFor = (game) => best[`${game}-${selectedVolume.value}`] ?? (selectedVolume.value === '1' ? best[game] : undefined);
  const applyVolume = (value) => {
    setSearchParams({ volumen: value });
    setShowVolumePicker(false);
  };
  const closeVolumePicker = () => {
    if (!isValidSelection) {
      applyVolume('1');
      return;
    }
    setShowVolumePicker(false);
  };

  return (
    <main className="page page--games">
      <PageHeader
        title="Zona de juegos"
        highlight={volumeLabel}
        subtitle={`Juega, repite y memoriza ${selectedVolume.items.length} expresiones`}
        action={
          <button type="button" className="play-link" onClick={() => setShowVolumePicker(true)}>
            <Icon name="books" size={18} />
            Cambiar volúmenes
          </button>
        }
      />

      <section className="games-progress">
        <div className="games-progress__head">
          <span>
            <Icon name="trophy" size={18} />
            Expresiones dominadas
          </span>
          <strong>
            {selectedKnown.length} / {selectedVolume.items.length}
          </strong>
        </div>
        <ProgressBar value={selectedKnown.length} max={selectedVolume.items.length} label="Expresiones dominadas" />
        {(selectedKnown.length > 0 || Object.keys(best).length > 0) && (
          <button type="button" className="games-progress__reset" onClick={() => setConfirmReset(true)}>
            Reiniciar progreso
          </button>
        )}
      </section>

      <div className="games-grid">
        <GameCard
          to={`/juegos/ruleta?volumen=${selectedVolume.value}`}
          icon="wheel"
          color="green"
          title="Ruleta"
          description="Gira, te toca una expresión y un reto al azar. Califícate y marca las que ya dominas."
          meta={`✅ ${selectedKnown.length} dominadas`}
        />
        <GameCard
          to={`/juegos/quiz?volumen=${selectedVolume.value}`}
          icon="quiz"
          color="blue"
          title="Quiz"
          description="10 preguntas de opción múltiple: significado, traducción y definición."
          meta={bestFor('quiz') !== undefined ? `🏆 Récord: ${bestFor('quiz')}/10` : '🏆 Sin récord aún'}
        />
        <GameCard
          to={`/juegos/escucha?volumen=${selectedVolume.value}`}
          icon="headphones"
          color="mint"
          title="¿Qué escuchaste?"
          description="Escucha el audio sin ver el texto y elige la expresión correcta."
          meta={bestFor('listen') !== undefined ? `🏆 Récord: ${bestFor('listen')}/10` : '🏆 Sin récord aún'}
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
      <VolumeSelectionModal
        open={!isValidSelection || showVolumePicker}
        value={isValidSelection ? selectedValue : '1'}
        onSelect={applyVolume}
        onClose={closeVolumePicker}
      />
    </main>
  );
}

export default GamesPage;
