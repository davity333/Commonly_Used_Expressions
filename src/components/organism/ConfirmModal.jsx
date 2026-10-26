// Organismo: ventana de confirmación (ej. "¿Seguro que quieres salir?")
import { useEffect, useRef } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

function ConfirmModal({ open, title, message, confirmLabel = 'Sí', cancelLabel = 'Cancelar', icon = 'exit', onConfirm, onCancel }) {
  const cancelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    cancelRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-message"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="modal__icon">
          <Icon name={icon} size={30} />
        </span>
        <h2 id="modal-title" className="modal__title">{title}</h2>
        <p id="modal-message" className="modal__message">{message}</p>
        <div className="modal__actions">
          <Button ref={cancelRef} variant="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
