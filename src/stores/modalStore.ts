import { create } from 'zustand';

type ModalType = 'login' | 'register' | 'book' | null;

interface ModalState {
  openModal: ModalType;
  selectedTeacherId: string | null;
  setModal: (type: ModalType, teacherId?: string | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  openModal: null,
  selectedTeacherId: null,
  setModal: (type, teacherId = null) =>
    set({ openModal: type, selectedTeacherId: teacherId }),
  closeModal: () => set({ openModal: null, selectedTeacherId: null }),
}));
