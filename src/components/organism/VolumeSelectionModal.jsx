import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Modal from './Modal';
import { VOLUME_OPTIONS } from '../../utils/volumes';

function VolumeSelectionModal({ open, value, onSelect, onClose }) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (open) setDraft(value);
  }, [open, value]);

  return (
    <Modal open={open} onClose={onClose} labelledBy="volume-picker-title" className="volume-picker-modal">
      <span className="modal__icon">
        <Icon name="books" size={30} />
      </span>
      <h2 id="volume-picker-title" className="modal__title">¿Con qué expresiones quieres jugar?</h2>
      <p className="modal__message">Elige el conjunto que se usará en todos los juegos de esta sesión.</p>
      <div className="volume-picker" role="group" aria-label="Volúmenes para practicar">
        {VOLUME_OPTIONS.map((option, index) => (
          <button
            key={option.value}
            type="button"
            className={`volume-picker__option ${draft === option.value ? 'is-selected' : ''}`}
            aria-pressed={draft === option.value}
            onClick={() => setDraft(option.value)}
          >
            <span className="volume-picker__icon">
              <Icon name={index === 0 ? 'book' : 'books'} size={24} />
            </span>
            <span>
              <strong>{option.label}</strong>
              <small>{option.items.length} expresiones</small>
            </span>
            {draft === option.value && <Icon name="check" size={19} />}
          </button>
        ))}
      </div>
      <div className="modal__actions">
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={() => onSelect(draft)}>Continuar</Button>
      </div>
    </Modal>
  );
}

export default VolumeSelectionModal;
