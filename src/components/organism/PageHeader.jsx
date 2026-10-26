// Organismo: encabezado de página con botón de regreso y acción opcional
import { Link } from 'react-router-dom';
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';

function PageHeader({ title, highlight, subtitle, action }) {
  return (
    <header className="page-header">
      <div className="page-header__bar">
        <Link to="/" className="back-link">
          <Icon name="arrowLeft" size={18} />
          Menú
        </Link>
        {action}
      </div>
      <Heading level={1} className="page-header__title">
        {title} <span className="page-header__highlight">{highlight}</span>
      </Heading>
      {subtitle && (
        <p className="page-header__subtitle">
          <Icon name="sparkle" size={16} />
          {subtitle}
        </p>
      )}
    </header>
  );
}

export default PageHeader;
