// Molécula: definición del libro (inglés) + traducción
import Icon from '../atoms/Icon';

function Definition({ text, textEs }) {
  return (
    <div className="definition">
      <span className="definition__label">
        <Icon name="lightbulb" size={15} />
        Definition
      </span>
      <p className="definition__en">{text}</p>
      <p className="definition__es">{textEs}</p>
    </div>
  );
}

export default Definition;
