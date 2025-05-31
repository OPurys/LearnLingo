'use client';

import { useModalStore } from '@/stores/modalStore';
import Icon from './Icon';
import { FocusTrap } from 'focus-trap-react';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import { useModal, usePreviousModal } from '@/hooks';
import { cn } from '@/utils';
import BookForm from '../forms/BookForm';

const Modal = () => {
  const { openModal, closeModal } = useModalStore();
  const isOpen = openModal !== null;
  const { modalRef, isVisible } = useModal(isOpen, closeModal);
  const modalType = usePreviousModal(openModal, isVisible);

  if (!isOpen && !isVisible) return null;

  const renderContent = () => {
    switch (modalType) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      case 'book':
        return <BookForm />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50',
        isOpen ? 'animate-slide-in' : 'animate-slide-out'
      )}
    >
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          escapeDeactivates: false,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          className="relative rounded-[30px] bg-white p-16 outline-none min-w-[300px] max-h-170 overflow-y-auto"
        >
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 hover:opacity-75 focus:opacity-75 transition-opacity duration-250"
          >
            <Icon id="icon-close" className="stroke-black" w={32} h={32} />
          </button>
          {renderContent()}
        </div>
      </FocusTrap>
    </div>
  );
};

export default Modal;
