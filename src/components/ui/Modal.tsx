'use client';

import { useModalStore } from '@/stores/modalStore';
import { useModal } from '@/hooks/useModal';
import Icon from './Icon';
import { FocusTrap } from 'focus-trap-react';

const Modal = () => {
  const { openModal, closeModal } = useModalStore();
  const isOpen = openModal !== null;
  const modalRef = useModal(isOpen, closeModal);

  if (!isOpen) return null;

  //   const renderContent = () => {
  //     switch (openModal) {
  //       case 'login':
  //         return <LoginForm />;
  //       case 'register':
  //         return <RegisterForm />;
  //       case 'order':
  //         return <OrderForm />;
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
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
          className="relative rounded-[30px] bg-white p-16 outline-none min-w-[300px]"
        >
          {/* {renderContent()} */}

          <div>Example Template</div>
          <button onClick={closeModal} className="absolute top-5 right-5">
            <Icon id="icon-close" className="stroke-black" w={32} h={32} />
          </button>
        </div>
      </FocusTrap>
    </div>
  );
};

export default Modal;
