// Molécula: pequeño marcador (icono + valor + etiqueta)
import Icon from '../atoms/Icon';

function StatPill({ icon, value, label, variant = 'green' }) {
  return (
    <span className={`stat-pill stat-pill--${variant}`}>
      <Icon name={icon} size={16} />
      <strong>{value}</strong>
      <span className="stat-pill__label">{label}</span>
    </span>
  );
}

export default StatPill;
