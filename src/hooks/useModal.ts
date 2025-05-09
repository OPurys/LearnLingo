import { useEffect, useRef, useState } from 'react';

export const useModal = (isOpen: boolean, onClose: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
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

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('click', handleBackdropClick);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('click', handleBackdropClick);
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return { modalRef, isVisible };
};
