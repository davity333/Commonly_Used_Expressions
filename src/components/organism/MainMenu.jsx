// Organismo: menú principal (título, autor y botones de volumen)
import Heading from '../atoms/Heading';
import Icon from '../atoms/Icon';
import VolumeButton from '../molecules/VolumeButton';

function MainMenu() {
  return (
    <section className="main-menu">
      <span className="main-menu__logo">
        <Icon name="chat" size={40} />
      </span>
      <Heading level={1} className="main-menu__title">
        Commonly used expressions
      </Heading>
      <p className="main-menu__author">Creado por David Rey</p>

      <nav className="main-menu__buttons" aria-label="Secciones">
        <VolumeButton to="/volumen-1" label="Volumen 1" sublabel="55 expresiones" icon="book" color="green" />
        <VolumeButton to="/volumen-2" label="Volumen 2" sublabel="Próximamente" icon="books" color="blue" />
        <VolumeButton to="/juegos" label="Juegos" sublabel="3 juegos" icon="gamepad" color="game" />
      </nav>
    </section>
  );
}

export default MainMenu;
