// Organismo: marco común de cada juego (salir con confirmación + marcadores)
import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';
import ConfirmModal from './ConfirmModal';
import useExitGuard from '../../hooks/useExitGuard';

function GameShell({ title, icon, active, stats, children }) {
  const blocker = useExitGuard(active);

  return (
    <main className="page page--game">
      <header className="game-header">
        <Link to="/juegos" className="back-link">
          <Icon name="exit" size={18} />
          Salir
        </Link>
        <h1 className="game-header__title">
          <Icon name={icon} size={26} />
          {title}
        </h1>
        {stats && <div className="game-header__stats">{stats}</div>}
      </header>

      {children}

      <ConfirmModal
        open={blocker.state === 'blocked'}
        title="¿Seguro que quieres salir?"
        message="Se perderá la partida actual. Las expresiones que marcaste como dominadas sí se quedan guardadas."
        confirmLabel="Sí, salir"
        cancelLabel="Seguir jugando"
        onConfirm={() => blocker.proceed?.()}
        onCancel={() => blocker.reset?.()}
      />
    </main>
  );
}

export default GameShell;
