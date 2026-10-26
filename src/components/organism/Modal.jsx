// Organismo: ventana modal genérica (se dibuja fuera de la tarjeta con un portal)
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../atoms/Icon';

function Modal({ open, onClose, labelledBy, className = '', children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal modal--large ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
          <Icon name="close" size={20} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
