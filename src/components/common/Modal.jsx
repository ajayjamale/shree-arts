import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, title, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose} role='presentation'>
      <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button type='button' className={styles.closeButton} onClick={onClose} aria-label='Close modal'>
            x
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
