// Molécula: botón cuadrado de volumen (icono + texto) que navega
import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';

function VolumeButton({ to, label, sublabel, icon = 'book', color = 'green' }) {
  return (
    <Link to={to} className={`volume-btn volume-btn--${color}`}>
      <span className="volume-btn__icon">
        <Icon name={icon} size={34} />
      </span>
      <span className="volume-btn__label">{label}</span>
      {sublabel && <span className="volume-btn__sublabel">{sublabel}</span>}
    </Link>
  );
}

export default VolumeButton;
