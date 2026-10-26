// Molécula: número + expresión + traducción
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

function ExpressionHeader({ number, expression, translation }) {
  return (
    <header className="expression-header">
      <Badge>{String(number).padStart(2, '0')}</Badge>
      <div>
        <h3 className="expression-header__title">{expression}</h3>
        <p className="expression-header__translation">
          <Icon name="translate" size={16} />
          {translation}
        </p>
      </div>
    </header>
  );
}

export default ExpressionHeader;
