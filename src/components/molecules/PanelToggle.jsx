// Molécula: botón que abre/cierra un panel ("Mostrar ejemplos", "Estructura")
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

function PanelToggle({ isOpen, onClick, controlsId, label, openLabel, icon, variant = 'ghost' }) {
  return (
    <Button
      variant={variant}
      className={`panel-toggle ${isOpen ? 'is-open' : ''}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={controlsId}
    >
      {icon && <Icon name={icon} size={17} />}
      {isOpen ? openLabel : label}
      <Icon name="chevronDown" size={17} className="panel-toggle__chevron" />
    </Button>
  );
}

export default PanelToggle;
