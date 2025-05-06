import { useEffect, useRef } from 'react';

export const useModal = (isOpen: boolean, onClose: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Focus on the modal
      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);

      const handleBackdropClick = (e: MouseEvent) => {
        if (modalRef.current && e.target === modalRef.current) {
          onClose();
        }
      };

      document.addEventListener('click', handleBackdropClick);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('click', handleBackdropClick);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  return modalRef;
};
