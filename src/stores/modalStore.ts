import { create } from 'zustand';

type ModalType = 'login' | 'register' | 'order' | null;

interface ModalState {
  openModal: ModalType;
  setModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  openModal: null,
  setModal: type => set({ openModal: type }),
  closeModal: () => set({ openModal: null }),
}));
