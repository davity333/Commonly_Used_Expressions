// Molécula: leyenda de colores (sujeto, verbo, expresión, complemento)
import { ROLE_NAMES } from './ColoredSentence';

function RoleLegend() {
  return (
    <ul className="role-legend" aria-label="Colores de la oración">
      {Object.entries(ROLE_NAMES).map(([role, name]) => (
        <li key={role} className="role-legend__item">
          <span className={`role-legend__dot role--${role}`} aria-hidden="true" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export default RoleLegend;
