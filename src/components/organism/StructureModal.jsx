// Organismo: modal con la estructura de la expresión
import Icon from '../atoms/Icon';
import Modal from './Modal';
import StructurePanel from './StructurePanel';

function StructureModal({ open, onClose, data }) {
  const titleId = `structure-title-${data.id}`;

  return (
    <Modal open={open} onClose={onClose} labelledBy={titleId}>
      <header className="tenses__header">
        <span className="tenses__icon structure-modal__icon">
          <Icon name="layers" size={28} />
        </span>
        <div>
          <p className="tenses__eyebrow structure-modal__eyebrow">Estructura</p>
          <h2 id={titleId} className="tenses__title">{data.expression}</h2>
          <p className="tenses__translation">{data.translation}</p>
        </div>
      </header>
      <StructurePanel data={data} />
    </Modal>
  );
}

export default StructureModal;