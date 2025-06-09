import { create } from 'zustand';
import {
  ref,
  onValue,
  DatabaseReference,
  Unsubscribe,
} from 'firebase/database';
import { database } from '@/lib/firebase';
import { Teacher } from '@/types';

interface TeachersState {
  teachers: Record<string, Teacher>;
  fetchTeachers: () => Unsubscribe;
}

const useTeachersStore = create<TeachersState>(set => ({
  teachers: {},
  fetchTeachers: () => {
    const teachersRef: DatabaseReference = ref(database, 'teachers');
    const unsubscribe: Unsubscribe = onValue(teachersRef, snapshot => {
      const data = snapshot.val() as Record<string, Teacher> | null;
      if (data) {
        set({ teachers: data });
      }
    });
    return unsubscribe;
  },
}));

export default useTeachersStore;
