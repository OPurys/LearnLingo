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
      const data = snapshot.val() as Record<string, Omit<Teacher, 'id'>> | null;

      if (data) {
        const parsed = Object.entries(data).reduce((acc, [id, teacher]) => {
          acc[id] = { ...teacher, id };
          return acc;
        }, {} as Record<string, Teacher>);

        set({ teachers: parsed });
      }
    });
    return unsubscribe;
  },
}));

export default useTeachersStore;
